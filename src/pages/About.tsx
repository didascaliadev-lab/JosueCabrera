import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const disciplines = [
  'acting',
  'directing',
  'dramaturgy',
  'pedagogy',
  'dance',
  'culturalManagement',
  'web',
  'music',
] as const;

type Discipline = (typeof disciplines)[number];

interface DisciplineItem {
  year: string;
  text: string;
}

const disciplineImages: Record<Discipline | 'default', string> = {
  default: '/images/about/josue-cabrera.webp',
  acting: '/images/about/actuacion.webp',
  directing: '/images/about/direccion.webp',
  dramaturgy: '/images/about/dramaturgia.webp',
  pedagogy: '/images/about/pedagogia.webp',
  dance: '/images/about/casino.webp',
  culturalManagement: '/images/about/gestion.webp',
  web: '/images/about/hero.webp',
  music: '/images/about/music.webp',
};

export const About = () => {
  const { t } = useTranslation();

  const [openDiscipline, setOpenDiscipline] =
    useState<Discipline | null>(null);

  const disciplineRefs = useRef<
    Record<Discipline, HTMLDivElement | null>
  >({
    acting: null,
    directing: null,
    dramaturgy: null,
    pedagogy: null,
    dance: null,
    culturalManagement: null,
    web: null,
    music: null,
  });

  useEffect(() => {
    if (!openDiscipline) return;

    const timeout = window.setTimeout(() => {
      disciplineRefs.current[openDiscipline]?.scrollIntoView({
        behavior: 'instant',
        block: 'start',
      });
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [openDiscipline]);

  const toggleDiscipline = (discipline: Discipline) => {
    setOpenDiscipline((current) =>
      current === discipline ? null : discipline,
    );
  };

  const currentImage = openDiscipline
    ? disciplineImages[openDiscipline]
    : disciplineImages.default;

  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 pb-24 text-amber-50 sm:px-10 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        {/* Navegación */}
        <div className="border-b border-slate-800 pb-8">
          <Link
            to="/"
            className="inline-flex font-mono text-xs tracking-widest text-amber-500 uppercase transition-colors hover:text-amber-400"
          >
            {t('about.backHome')}
          </Link>
        </div>

        {/* Continuación */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 font-editorial text-2xl text-amber-500 italic sm:text-3xl"
        >
          {t('about.continue')}
        </motion.p>

        <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Imagen dinámica */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28 lg:col-span-5"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={currentImage}
                  alt={
                    openDiscipline
                      ? t(
                          `about.disciplines.${openDiscipline}.imageAlt`,
                        )
                      : t('about.imageAlt')
                  }
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
            </div>

            <div className="mt-4 flex items-center justify-between font-mono text-[10px] tracking-widest text-slate-500 uppercase sm:text-xs">
              <span>
                {openDiscipline &&
                  t(
                    `about.disciplines.${openDiscipline}.title`,
                  )}
              </span>
            </div>
          </motion.div>

          {/* Trayectoria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="mb-10 space-y-3">
              <span className="block font-mono text-xs tracking-widest text-amber-500 uppercase">
                {t('about.eyebrow')}
              </span>

              <h1 className="font-display text-5xl leading-[0.9] tracking-tight uppercase sm:text-6xl md:text-7xl">
                {t('about.title')}
              </h1>

              <p className="font-sans text-lg leading-relaxed text-amber-50/80 sm:text-xl">
                {t('about.text')}
              </p>

              <p className="font-sans text-lg leading-relaxed text-amber-50/80 sm:text-xl">
                {t('about.text1')}
              </p>

              <p className="max-w-xl font-editorial text-xl text-slate-400 italic sm:text-2xl">
                {t('about.intro')}
              </p>
            </div>

            {/* Disciplinas */}
            <div className="border-t border-slate-800">
              {disciplines.map((discipline, index) => {
                const isOpen = openDiscipline === discipline;
                const isMusic = discipline === 'music';
                const number = String(index + 1).padStart(2, '0');

                const items = t(
                  `about.disciplines.${discipline}.items`,
                  {
                    returnObjects: true,
                  },
                ) as Record<string, DisciplineItem>;

                return (
                  <div
                    key={discipline}
                    ref={(element) => {
                      disciplineRefs.current[discipline] =
                        element;
                    }}
                    className="scroll-mt-24 border-b border-slate-800"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        toggleDiscipline(discipline)
                      }
                      aria-expanded={isOpen}
                      className="group flex w-full items-center gap-4 py-5 text-left"
                    >
                      <span className="w-8 shrink-0 font-mono text-[10px] tracking-widest text-slate-500 sm:text-xs">
                        {number}
                      </span>

                      <span
                        className={`flex-1 font-display text-xl tracking-wide uppercase transition-colors sm:text-2xl ${
                          isMusic
                            ? 'text-amber-500'
                            : 'text-amber-50 group-hover:text-amber-500'
                        }`}
                      >
                        {t(
                          `about.disciplines.${discipline}.title`,
                        )}
                      </span>

                      <span
                        className={`font-mono text-xl text-amber-500 transition-transform duration-300 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.25,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-6 pb-8 pl-12">
                            <p
                              className={`max-w-xl font-sans text-base leading-relaxed sm:text-lg ${
                                isMusic
                                  ? 'text-amber-500/80'
                                  : 'text-amber-50/75'
                              }`}
                            >
                              {t(
                                `about.disciplines.${discipline}.description`,
                              )}
                            </p>

                            <div>
                              {Object.entries(items).map(
                                ([key, item]) => (
                                  <div
                                    key={key}
                                    className="grid grid-cols-[90px_1fr] gap-5 border-t border-slate-800/70 py-3 font-mono text-xs"
                                  >
                                    <span className="text-amber-500">
                                      {item.year}
                                    </span>

                                    <span className="leading-relaxed text-slate-400">
                                      {item.text}
                                    </span>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};