import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const CodePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 sm:px-10 max-w-7xl mx-auto flex flex-col justify-between">
      <div className="space-y-12">
        <div className="space-y-4 border-b border-[var(--dark-gray)] pb-8">
          <Link to="/" className="font-mono text-xs text-[var(--red)] hover:underline tracking-widest uppercase">
            {t('placeholders.backHome')}
          </Link>
          <h1 className="font-display text-5xl sm:text-7xl uppercase text-[var(--white)]">
            04 / {t('placeholders.codePageTitle')}
          </h1>
          <p className="font-editorial italic text-2xl text-[var(--gray)]">
            Frontend, React, TypeScript & Diseño Editorial Web
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xl font-sans text-[var(--white)]/80 leading-relaxed">
              {t('placeholders.comingSoon')}
            </p>
            <p className="text-sm font-mono text-[var(--gray)]">
              Desarrollo frontend artesanal, aplicaciones web interactivas y proyectos digitales.
            </p>
          </div>
          <div className="lg:col-span-6">
            <ImagePlaceholder
              label="FOTOGRAFÍA CÓDIGO / PORTADA"
              suggestedFileName="public/images/code-main.jpg"
              aspectRatio="landscape"
              overlayText="Desarrollo Web & Código"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
