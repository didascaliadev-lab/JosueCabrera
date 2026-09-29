import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const IntroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="intro"
      className="bg-stone-100 px-6 py-24 text-neutral-950 sm:px-10 sm:py-36"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8">

        <div className="flex items-center gap-3">
          <span className="h-0.5 w-8 bg-amber-600" />

          <span className="font-mono text-base tracking-widest text-neutral-500 uppercase">
            {t('intro.tag')}
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-6xl leading-none tracking-tight uppercase sm:text-7xl md:text-8xl"
        >
          {t('intro.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl space-y-6"
        >
          <p className="font-sans text-xl leading-snug font-light sm:text-3xl md:text-4xl">
            {t('intro.text')}
          </p>

          <p className="border-l-2 border-amber-600 py-1 pl-4 font-editorial text-2xl text-amber-700 italic sm:text-3xl">
            “{t('intro.subtext')}”
          </p>
        </motion.div>

      </div>
    </section>
  );
};