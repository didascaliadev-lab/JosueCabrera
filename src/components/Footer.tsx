import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/josue.cabrera.393/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/josuecabrerag/',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@gabrielcabrera526',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5215551886713',
    },
  ];

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 px-6 py-12 text-amber-50 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Nombre y copyright */}
        <div className="flex flex-col items-center gap-3 text-center font-mono text-sm text-slate-400 sm:flex-row sm:text-left">
          <span className="font-semibold tracking-wider text-amber-50">
            JOSUÉ CABRERA
          </span>

          <span className="hidden text-amber-500 sm:inline">
            •
          </span>

          <span>
            © {currentYear} {t('footer.rights')}
          </span>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {socialLinks.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest text-slate-400 uppercase transition-colors hover:text-amber-500"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};