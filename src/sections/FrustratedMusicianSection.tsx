import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const FrustratedMusicianSection = () => {
  const { t } = useTranslation();
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="border-y border-slate-950/15 bg-amber-50 px-6 py-20 text-slate-950 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            type="button"
            onClick={() => setRevealed((current) => !current)}
            onMouseEnter={() => setRevealed(true)}
            aria-expanded={revealed}
            className="group inline-flex cursor-pointer items-center gap-3 font-editorial text-xl text-amber-600 italic transition-colors hover:text-slate-950 sm:text-2xl"
          >
            <span>{t('musician.trigger')}</span>

            <span className="border border-amber-600 px-2 py-0.5 font-mono text-xs not-italic transition-colors group-hover:border-slate-950">
              {revealed ? '▼' : '+'}
            </span>
          </button>
        </motion.div>

        {revealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="space-y-10 pt-4"
          >
            <h3 className="font-display text-4xl tracking-tight uppercase sm:text-6xl md:text-7xl">
              {t('musician.titleLine1')}{' '}
              <span className="text-amber-600">
                {t('musician.titleLine2')}
              </span>
            </h3>

            <p className="mx-auto max-w-2xl font-sans text-base leading-relaxed text-slate-700 sm:text-xl">
              {t('musician.description')}
            </p>

            <div className="mx-auto max-w-md space-y-6 border-t border-slate-950/15 pt-6 text-left">
              <span className="block font-mono text-xs tracking-widest text-slate-500 uppercase">
                {t('musician.currentLevel')}
              </span>

              {/* Talento */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-xs text-slate-600">
                  <span>{t('musician.talent')}</span>
                  <span className="text-amber-600">18%</span>
                </div>

                <div className="h-1.5 overflow-hidden bg-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '18%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-slate-500"
                  />
                </div>
              </div>

              {/* Frustración */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-xs text-slate-600">
                  <span>{t('musician.frustration')}</span>

                  <span className="font-bold text-amber-600">
                    94%
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden bg-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '94%' }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="h-full bg-amber-600"
                  />
                </div>
              </div>
            </div>

            <p className="pt-4 font-mono text-base tracking-widest text-slate-500 uppercase">
              {t('musician.nota')}.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};