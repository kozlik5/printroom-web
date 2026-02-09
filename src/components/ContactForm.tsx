import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  gdpr: boolean;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setError(false);
    const formData = new FormData();
    formData.append('access_key', 'ae057aa6-cd19-422e-90b2-f9895d6ed069');
    formData.append('subject', `Nový dopyt z webu printroom.sk: ${data.service || 'Všeobecný'}`);
    formData.append('from_name', 'Printroom Web');
    formData.append('template_title', 'Nový dopyt z webstránky');
    formData.append('template_message', 'Niekto vyplnil kontaktný formulár na vašej webstránke. Detaily nižšie.');
    formData.append('Meno', data.name);
    formData.append('Email', data.email);
    formData.append('Telefon', data.phone || '-');
    formData.append('Sluzba', data.service || '-');
    formData.append('Sprava', data.message);
    // Honeypot
    formData.append('botcheck', '');

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const result = await res.json();
      if (result.success) { setSubmitted(true); reset(); }
      else setError(true);
    } catch { setError(true); }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
        <h3 className="text-xl font-bold text-green-800 mb-2">Ďakujeme!</h3>
        <p className="text-green-700">Ozveme sa vám do 24 hodín.</p>
        <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-primary font-bold underline">Poslať ďalší dopyt</button>
      </div>
    );
  }

  const inputCls =
    'w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm';
  const errorCls = 'text-red-500 text-xs mt-1';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <div>
        <input
          {...register('name', { required: 'Meno je povinné' })}
          placeholder="Meno a priezvisko *"
          className={`${inputCls} ${errors.name ? 'border-red-400' : ''}`}
        />
        {errors.name && <p className={errorCls}>{errors.name.message}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register('email', {
              required: 'Email je povinný',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Neplatný email' },
            })}
            placeholder="Email *"
            className={`${inputCls} ${errors.email ? 'border-red-400' : ''}`}
          />
          {errors.email && <p className={errorCls}>{errors.email.message}</p>}
        </div>
        <div>
          <input
            {...register('phone')}
            placeholder="Telefón"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <select
          {...register('service')}
          className={`${inputCls} text-slate-500`}
          defaultValue=""
        >
          <option value="" disabled>Typ služby</option>
          <option>Potlač textilu</option>
          <option>Reklamné predmety</option>
          <option>3D služby</option>
          <option>Tlač a polygrafia</option>
          <option>Veľkoformát</option>
          <option>Polepy</option>
          <option>Vyšívanie</option>
          <option>Iné</option>
        </select>
      </div>

      <div>
        <textarea
          {...register('message', { required: 'Správa je povinná' })}
          placeholder="Vaša správa *"
          rows={4}
          className={`${inputCls} resize-none ${errors.message ? 'border-red-400' : ''}`}
        />
        {errors.message && <p className={errorCls}>{errors.message.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            {...register('gdpr', { required: 'Súhlas je povinný' })}
            className="mt-1 accent-primary"
          />
          <span>
            Súhlasím so spracovaním osobných údajov podľa{' '}
            <Link to="/gdpr" className="text-primary underline hover:text-primary/80">Zásad ochrany osobných údajov</Link>. *
          </span>
        </label>
        {errors.gdpr && <p className={errorCls}>{errors.gdpr.message}</p>}
      </div>

      {error && <p className="text-red-500 text-sm font-bold">Nastala chyba. Skúste znova alebo nás kontaktujte telefonicky.</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-orange-600 disabled:opacity-60 text-white font-bold uppercase tracking-wider py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? 'Odosielam...' : (
          <>
            <Send size={18} /> Odoslať dopyt
          </>
        )}
      </button>
    </form>
  );
}
