import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentLang = i18n.language.slice(0, 2).toLowerCase();

  const navLinks = [
    { to: '/scene', label: t('nav.scene') },
    { to: '/pedagogy', label: t('nav.pedagogy') },
    { to: '/body', label: t('nav.body') },
    { to: '/code', label: t('nav.code') },
    { to: '/about', label: t('nav.about') },
  ];

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleLanguage = (lang: 'es' | 'en') => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-neutral-800 bg-neutral-950/90 py-4 backdrop-blur-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-2 font-display text-xl tracking-wider text-stone-100 transition-colors hover:text-amber-600 sm:text-2xl"
        >
          <span>JOSUÉ CABRERA</span>

          <span className="h-1.5 w-1.5 rounded-full bg-amber-600 opacity-80 transition-transform group-hover:scale-150" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center space-x-8 text-xs font-medium tracking-widest md:flex">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `relative py-1 transition-colors ${
                  isActive
                    ? 'font-semibold text-stone-100'
                    : 'text-stone-100/70 hover:text-stone-100'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}

                  {isActive && (
                    <span className="absolute right-0 bottom-0 left-0 h-[2px] bg-amber-600" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Idioma + menú móvil */}
        <div className="flex items-center gap-6">

          {/* Selector de idioma */}
          <div className="flex select-none items-center font-mono text-xs tracking-widest">
            <button
              onClick={() => toggleLanguage('es')}
              className={`py-1 transition-colors ${
                currentLang === 'es'
                  ? 'font-bold text-amber-600'
                  : 'text-neutral-400 hover:text-stone-100'
              }`}
              aria-label="Cambiar idioma a Español"
            >
              ES
            </button>

            <span className="mx-2 text-neutral-400/40">/</span>

            <button
              onClick={() => toggleLanguage('en')}
              className={`py-1 transition-colors ${
                currentLang === 'en'
                  ? 'font-bold text-amber-600'
                  : 'text-neutral-400 hover:text-stone-100'
              }`}
              aria-label="Switch language to English"
            >
              EN
            </button>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="p-2 text-stone-100 transition-colors hover:text-amber-600 focus:outline-none md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navegación móvil */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[73px] flex flex-col space-y-6 border-b border-neutral-800 bg-neutral-950/98 px-6 py-8 animate-in fade-in duration-200 md:hidden">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-neutral-800/50 py-1 font-display text-2xl tracking-wider ${
                  isActive
                    ? 'text-amber-600'
                    : 'text-stone-100 hover:text-amber-600'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={closeMenu}
            className="pt-2 font-display text-xl tracking-wider text-amber-600"
          >
            {t('nav.contact')} →
          </Link>
        </div>
      )}
    </header>
  );
};