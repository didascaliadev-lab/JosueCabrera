import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const Contact = () => {
  const { t } = useTranslation();

  const [status, setStatus] = useState<FormStatus>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
  const { name, value } = event.target;

  setFormData((current) => ({
    ...current,
    [name]: value,
  }));
};

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === 'sending') return;

    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus('success');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
  } catch (error) {
  console.error('Error completo:', error);

  if (
    typeof error === 'object' &&
    error !== null &&
    'text' in error
  ) {
    console.error('EmailJS dice:', error.text);
  }

  setStatus('error');
}
  };

  const inputClasses =
    'w-full border-b border-slate-700 bg-transparent py-4 font-sans text-base text-amber-50 outline-none transition-colors placeholder:text-slate-600 focus:border-amber-500';

  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-amber-50 sm:px-10 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="border-b border-slate-800 pb-12"
        >
          <Link
            to="/"
            className="inline-flex font-mono text-xs tracking-widest text-amber-500 uppercase transition-colors hover:text-amber-400"
          >
            {t('contact.backHome')}
          </Link>

          <h1 className="mt-8 font-display text-6xl leading-[0.88] tracking-tight uppercase sm:text-7xl md:text-8xl lg:text-9xl">
            {t('contact.title')}
          </h1>

          
        </motion.div>

        {/* CONTACTO */}
        <div className="grid gap-16 py-16 lg:grid-cols-12 lg:gap-20 lg:py-24">
          {/* INFORMACIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-amber-500 uppercase">
              {t('contact.form.eyebrow')}
            </span>

            <p className="mt-8 max-w-lg font-editorial text-2xl leading-relaxed text-amber-50/85 sm:text-3xl">
              {t('contact.description')}
            </p>

            {/* EMAIL DIRECTO */}
            <div className="mt-12 border-l-2 border-amber-500 py-1 pl-6">
              <span className="mb-3 block font-mono text-[10px] tracking-widest text-slate-500 uppercase sm:text-xs">
                {t('contact.emailLabel')}
              </span>

              <a
                href="mailto:josuegabrielc@gmail.com"
                className="font-sans text-lg text-amber-50 transition-colors hover:text-amber-500 sm:text-xl"
              >
                josuegabrielc@gmail.com
              </a>
            </div>

            <p className="mt-10 max-w-md font-mono text-[10px] leading-relaxed tracking-wide text-slate-500 sm:text-xs">
              * {t('contact.musicNote')}
            </p>
          </motion.div>

          {/* FORMULARIO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid gap-x-8 sm:grid-cols-2">
                {/* NOMBRE */}
                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                    {t('contact.form.name')}
                  </span>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.namePlaceholder')}
                    autoComplete="name"
                    required
                    className={inputClasses}
                  />
                </label>

                {/* EMAIL */}
                <label className="mt-8 block sm:mt-0">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                    {t('contact.form.email')}
                  </span>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    autoComplete="email"
                    required
                    className={inputClasses}
                  />
                </label>
              </div>

              {/* ASUNTO */}
              <label className="mt-10 block">
                <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                  {t('contact.form.subject')}
                </span>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('contact.form.subjectPlaceholder')}
                  required
                  className={inputClasses}
                />
              </label>

              {/* MENSAJE */}
              <label className="mt-10 block">
                <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                  {t('contact.form.message')}
                </span>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.messagePlaceholder')}
                  rows={6}
                  required
                  className={`${inputClasses} resize-none`}
                />
              </label>

              {/* ENVÍO */}
              <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex items-center gap-4 border-b border-amber-50/30 pb-2 font-mono text-xs tracking-[0.18em] uppercase transition-colors hover:border-amber-500 hover:text-amber-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === 'sending'
                    ? t('contact.form.sending')
                    : t('contact.form.submit')}

                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>

                {status === 'success' && (
                  <p
                    role="status"
                    className="font-mono text-xs text-amber-500"
                  >
                    {t('contact.form.success')}
                  </p>
                )}

                {status === 'error' && (
                  <p
                    role="alert"
                    className="font-mono text-xs text-red-400"
                  >
                    {t('contact.form.error')}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};