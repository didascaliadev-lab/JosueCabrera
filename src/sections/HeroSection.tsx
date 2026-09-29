import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-slate-950 px-6 pt-28 pb-8 text-amber-50 sm:px-10">
      <div className="mx-auto my-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="z-10 flex flex-col gap-7 lg:col-span-7"
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-amber-500" />

            <span className="font-mono text-sm tracking-widest text-slate-400 uppercase">
              {t('hero.name')}
            </span>
          </div>

          <h1 className="select-none font-display leading-[0.88] tracking-tight text-amber-50 uppercase">
            <span className="block text-[clamp(3.5rem,8vw,7.5rem)]">
              {t('hero.titleLine1')}
            </span>

            <span className="block text-[clamp(3.5rem,8vw,7.5rem)]">
              {t('hero.titleLine2')}
            </span>

            <span className="block text-[clamp(3.5rem,8vw,7.5rem)] font-bold">
              {t('hero.titleLine3')}
            </span>
          </h1>

          <div className="max-w-xl border-l-2 border-amber-500 py-1 pl-4 font-sans text-sm sm:text-base">
            <p className="font-medium tracking-wide text-amber-50/90">
              {t('hero.rolesLine1')}
            </p>

            <p className="mt-2 text-slate-400">
              {t('hero.rolesLine2')}
            </p>

            <p className="text-slate-400">
              {t('hero.rolesLine3')}
            </p>

            <p className="mt-2 font-editorial text-xl italic text-amber-500">
              {t('hero.musicianNote')}
            </p>
          </div>
        </motion.div>

        {/* Fotografía */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative flex w-full justify-center lg:col-span-5 lg:justify-end"
        >
          <div className="w-full max-w-md lg:max-w-none">
            <ImagePlaceholder
              imageSrc="/images/home/josue-cabrera.png"
              altText="Josué Cabrera"
              aspectRatio="vertical"
              className="w-full shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Pie editorial */}
      <div className="mx-auto flex w-full max-w-7xl items-center border-t border-slate-800/60 pt-6">
        <span className="hidden font-mono text-base tracking-widest text-slate-400/60 uppercase sm:inline">
          PORTFOLIO 2026
        </span>
      </div>
    </section>
  );
};