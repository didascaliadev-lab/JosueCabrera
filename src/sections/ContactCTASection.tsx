import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const ContactCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full border-t border-slate-950/15 bg-amber-50 px-6 py-28 text-slate-950 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-5xl space-y-10 text-center">
        {/* Eyebrow */}
        <span className="block font-mono text-xs tracking-widest text-amber-600 uppercase">
          {t('contactCTA.eyebrow')}
        </span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl leading-[0.9] tracking-tight uppercase sm:text-6xl md:text-7xl"
        >
          <span className="text-slate-950">
            {t('contactCTA.titleLine1')}{' '}
          </span>

          <span className="text-amber-600">
            {t('contactCTA.titleLine2')}
          </span>
        </motion.h2>

        {/* Subtitle */}
        <p className="mx-auto max-w-xl font-editorial text-2xl text-slate-600 italic sm:text-4xl">
          {t('contactCTA.subtitle')}
        </p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center border-2 border-slate-950/20 px-8 py-5 font-display text-2xl text-slate-950 transition-colors hover:border-amber-600 hover:text-amber-600 sm:text-4xl"
          >
            {t('contactCTA.cta')}
          </Link>
        </motion.div>

        {/* Nota */}
        <p className="pt-6 font-mono text-xl leading-relaxed tracking-wider text-slate-500 sm:text-lg">
          * {t('contactCTA.disclaimer')}
        </p>
      </div>
    </section>
  );
};