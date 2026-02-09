import { useForm } from 'react-hook-form';
import { useState } from 'react';
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
        <h3 className="text-xl font-bold text-green-800 mb-2">Ďakujeme!</h3>
        <p className="text-green-700">Ozveme sa vám do 24 hodín.</p>
      </div>
    );
  }

  const inputCls =
    'w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm';
  const errorCls = 'text-red-500 text-xs mt-1';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            Súhlasím so spracovaním osobných údajov na účely spracovania dopytu. *
          </span>
        </label>
        {errors.gdpr && <p className={errorCls}>{errors.gdpr.message}</p>}
      </div>

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
