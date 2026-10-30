import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { TIMELINE_ITEMS } from '../data/cv';

export const AboutPreviewSection = () => {
  const { t } = useTranslation();
  const [statusOpen, setStatusOpen] = useState(false);

  return (
    <section className="border-t border-slate-800 bg-slate-950 px-6 py-24 text-amber-50 sm:px-10 sm:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Fotografía */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <ImagePlaceholder
            imageSrc="/images/home/bio.webp"
            altText="Retrato de Josué Cabrera"
            aspectRatio="vertical"
            className="w-full"
          />
        </motion.div>

        {/* Biografía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-10 lg:col-span-7"
        >
          <div className="space-y-4">
            <span className="block font-mono text-xs tracking-widest text-amber-500 uppercase">
              BIOGRAFÍA & RETRATO
            </span>

            <h2 className="font-display text-5xl leading-[0.9] tracking-tight uppercase sm:text-6xl md:text-7xl">
              <span className="block">
                {t('aboutPreview.titleLine1')}
              </span>

              <span className="my-2 ml-2 block font-editorial text-lg font-normal tracking-normal text-amber-500/70 italic normal-case sm:text-xl">
                {t('aboutPreview.titleAside')}
              </span>

              <span className="block text-amber-500">
                {t('aboutPreview.titleLine2')}
              </span>
            </h2>
          </div>

          <p className="font-sans text-lg leading-relaxed text-amber-50/80 sm:text-xl">
            {t('aboutPreview.bio')}
          </p>
          <p className="ml-auto max-w-xl text-right font-editorial text-xl leading-relaxed text-amber-500 italic sm:text-2xl">
            {t('aboutPreview.close')}
          </p>

          {/* Estado actual */}
          <div
            className="border-y border-slate-800 py-6"
            onMouseEnter={() => setStatusOpen(true)}
            onMouseLeave={() => setStatusOpen(false)}
          >
            <button
              type="button"
              onClick={() => setStatusOpen((current) => !current)}
              aria-expanded={statusOpen}
              className="group flex w-full items-center justify-between text-left"
            >
              <span className="flex items-center gap-3 font-mono text-xs tracking-widest text-slate-400 uppercase transition-colors group-hover:text-amber-500">
                {t('aboutPreview.timeline.heading')}

                <span
                  className={`text-amber-500 transition-transform duration-300 ${
                    statusOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </span>

              <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase sm:text-xs">
                {t('aboutPreview.timeline.date')}
              </span>
            </button>

            <motion.div
              initial={false}
              animate={{
                height: statusOpen ? 'auto' : 0,
                opacity: statusOpen ? 1 : 0,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <div className="pt-6 font-mono text-xs sm:text-sm">
                {TIMELINE_ITEMS.map((item) => {
                  const disciplineLabel = t(
                    `aboutPreview.timeline.${item.disciplineKey}`,
                  );

                  const statusLabel = t(
                    `aboutPreview.timeline.${item.statusKey}`,
                  );

                  return (
                    <div
                      key={item.key}
                      className="group flex items-center justify-between gap-6 border-b border-slate-800/60 py-3 last:border-0"
                    >
                      <span
                        className={`font-semibold tracking-wider transition-colors group-hover:text-amber-500 ${
                          item.isSpecial
                            ? 'text-amber-500'
                            : 'text-amber-50'
                        }`}
                      >
                        {disciplineLabel}
                      </span>

                      <span
                        className={`text-right text-[10px] tracking-wider sm:text-xs ${
                          item.isSpecial
                            ? 'text-amber-500'
                            : 'text-slate-500'
                        }`}
                      >
                        {statusLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <div>
            <Link
              to="/about"
              className="inline-flex border-b border-amber-50/30 pb-1 font-mono text-xs tracking-widest text-amber-50 transition-colors hover:border-amber-500 hover:text-amber-500"
            >
              {t('aboutPreview.cta')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};