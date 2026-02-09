interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await context.request.json() as Record<string, string>;
    const { meno, email, telefon, sprava, sluzba } = body;

    if (!meno || !email || !sprava) {
      return new Response(JSON.stringify({ success: false, error: 'Vyplňte povinné polia' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const sluzbaLine = sluzba ? `
              <tr>
                <td style="padding:12px 16px;font-weight:600;color:#64748b;width:120px;vertical-align:top;border-bottom:1px solid #f1f5f9">Služba</td>
                <td style="padding:12px 16px;color:#1e293b;border-bottom:1px solid #f1f5f9">${escapeHtml(sluzba)}</td>
              </tr>` : '';

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <div style="max-width:600px;margin:24px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1)">
    <div style="background:linear-gradient(135deg,#f97316,#f59e0b);padding:32px 24px;text-align:center">
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">Nový dopyt z webu</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px">printroom.sk</p>
    </div>
    <div style="padding:24px">
      <table style="width:100%;border-collapse:collapse">
        <tr>
          <td style="padding:12px 16px;font-weight:600;color:#64748b;width:120px;vertical-align:top;border-bottom:1px solid #f1f5f9">Meno</td>
          <td style="padding:12px 16px;color:#1e293b;border-bottom:1px solid #f1f5f9">${escapeHtml(meno)}</td>
        </tr>
        <tr>
          <td style="padding:12px 16px;font-weight:600;color:#64748b;width:120px;vertical-align:top;border-bottom:1px solid #f1f5f9">Email</td>
          <td style="padding:12px 16px;border-bottom:1px solid #f1f5f9"><a href="mailto:${escapeHtml(email)}" style="color:#f97316">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding:12px 16px;font-weight:600;color:#64748b;width:120px;vertical-align:top;border-bottom:1px solid #f1f5f9">Telefón</td>
          <td style="padding:12px 16px;color:#1e293b;border-bottom:1px solid #f1f5f9">${escapeHtml(telefon || '—')}</td>
        </tr>${sluzbaLine}
        <tr>
          <td style="padding:12px 16px;font-weight:600;color:#64748b;width:120px;vertical-align:top;border-bottom:1px solid #f1f5f9">Správa</td>
          <td style="padding:12px 16px;color:#1e293b;border-bottom:1px solid #f1f5f9;white-space:pre-wrap">${escapeHtml(sprava)}</td>
        </tr>
      </table>
    </div>
    <div style="padding:16px 24px;background:#f8fafc;text-align:center;font-size:12px;color:#94a3b8">
      Odoslané z kontaktného formulára printroom.sk
    </div>
  </div>
</body>
</html>`;

    const targetEmail = context.env.CONTACT_EMAIL || 'igor.kozel@gmail.com';
    const subjectSuffix = sluzba ? `: ${sluzba}` : '';

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Printroom Web <onboarding@resend.dev>',
        to: [targetEmail],
        reply_to: email,
        subject: `Nový dopyt z webu printroom.sk${subjectSuffix}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      return new Response(JSON.stringify({ success: false }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (e) {
    console.error('Contact form error:', e);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
