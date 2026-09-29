import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 pb-20 text-amber-50 sm:px-10">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-between">
        <div className="space-y-12">
          {/* Encabezado */}
          <div className="space-y-5 border-b border-slate-800 pb-10">
            <Link
              to="/"
              className="inline-flex font-mono text-xs tracking-widest text-amber-500 uppercase transition-colors hover:text-amber-400"
            >
              {t('contact.backHome')}
            </Link>

            <h1 className="font-display text-6xl leading-[0.88] tracking-tight text-amber-50 uppercase sm:text-7xl md:text-8xl">
              {t('contact.title')}
            </h1>

            <p className="max-w-2xl font-editorial text-2xl text-slate-400 italic sm:text-3xl">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Contenido */}
          <div className="max-w-2xl space-y-10">
            <p className="font-sans text-lg leading-relaxed text-amber-50/80 sm:text-xl">
              {t('contact.description')}
            </p>

            {/* Email */}
            <div className="border-l-2 border-amber-500 py-2 pl-6">
              <span className="mb-3 block font-mono text-xs tracking-widest text-slate-400 uppercase">
                {t('contact.emailLabel')}
              </span>

              <a
                href="mailto:contacto@josuecabrera.com"
                className="block font-sans text-xl font-semibold text-amber-50 transition-colors hover:text-amber-500 sm:text-2xl"
              >
                contacto@josuecabrera.com
              </a>
            </div>

            {/* Nota */}
            <p className="font-mono text-[10px] leading-relaxed tracking-wide text-slate-500 sm:text-xs">
              * {t('contact.musicNote')}
            </p>
          </div>
        </div>

     
      </div>
    </main>
  );
};