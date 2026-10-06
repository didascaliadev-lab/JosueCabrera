import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-slate-950 text-amber-50">
      {/* FOTOGRAFÍA */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0"
      >
        <img
          src="/images/home/hero.png"
          alt="Josué Cabrera en escena"
          className="
            h-full w-full object-cover
            object-[58%_center]
            sm:object-[60%_center]
            lg:object-center
          "
        />

        {/* Oscurece toda la fotografía */}
        <div className="absolute inset-0 bg-slate-950/35" />

        {/* Protege el texto a la izquierda */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-slate-950
            via-slate-950/80
            to-slate-950/10
            sm:via-slate-950/70
            lg:via-slate-950/55
            lg:to-transparent
          "
        />

        {/* Más contraste en móvil hacia abajo */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30 lg:from-slate-950/60" />
      </motion.div>

      {/* CONTENIDO */}
      <div
        className="
          relative z-10 mx-auto flex min-h-[100svh]
          w-full max-w-7xl items-end
          px-6 pb-12 pt-32
          sm:px-10 sm:pb-16
          lg:items-center lg:pb-20 lg:pt-36
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full max-w-5xl"
        >
          {/* EYEBROW */}
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 bg-amber-500" />

            <span className="font-mono text-xs tracking-[0.22em] text-slate-300 uppercase sm:text-sm">
              {t('hero.name')}
            </span>
          </div>

          {/* TITULAR */}
          <h1
            className="
              mt-6 select-none font-display
              text-[clamp(3.6rem,17vw,5.4rem)]
              leading-[0.78] tracking-tight uppercase
              sm:text-[clamp(5rem,12vw,7rem)]
              lg:mt-8
              lg:text-[clamp(6rem,9vw,8.5rem)]
              lg:leading-[0.76]
            "
          >
            <span className="block text-amber-50">
              {t('hero.titleLine1')}
            </span>

            <span className="block text-amber-500">
              {t('hero.titleLine2')}
            </span>

            <span className="block text-amber-50">
              {t('hero.titleLine3')}
            </span>
          </h1>

          {/* ROLES */}
          <div
            className="
              mt-8 max-w-xl border-l-2 border-amber-500
              py-1 pl-4 font-sans text-sm
              sm:mt-10 sm:pl-5 sm:text-base
            "
          >
            <p className="font-medium tracking-wide text-amber-50/90">
              {t('hero.rolesLine1')}
            </p>

            <p className="mt-2 text-slate-300">
              {t('hero.rolesLine2')}
            </p>

            <p className="text-slate-300">
              {t('hero.rolesLine3')}
            </p>

            <p className="mt-2 font-editorial text-xl italic text-amber-500 sm:text-2xl">
              {t('hero.musicianNote')}
            </p>
          </div>

          {/* PIE EDITORIAL */}
          <div className="mt-10 border-t border-slate-500/30 pt-5 sm:mt-12">
            <span className="font-mono text-[10px] tracking-[0.22em] text-slate-400/70 uppercase sm:text-xs">
              Portfolio 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};