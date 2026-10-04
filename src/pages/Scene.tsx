import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ActingProjects } from '../sections/ActingProjects';
import { ScreenProjects } from '../sections/ScreenProjects';
import { DirectionProjects } from '../sections/DirectionProjects';
import { DramaturgyProjects } from '../sections/DramaturgyProjects';
import { PageHero } from '../sections/PageHero';

const disciplines = [
  {
    key: 'acting',
    number: '01',
    image: '/images/escena/actuacion.webp',
    align: 'left',
  },
  {
    key: 'directing',
    number: '02',
    image: '/images/escena/direccion.webp',
    align: 'right',
  },
  {
    key: 'dramaturgy',
    number: '03',
    image: '/images/escena/dramaturgia.webp',
    align: 'left',
  },
] as const;

export const Scene = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-slate-950 text-amber-50">
          {/* Hero */}
          <PageHero
            eyebrow={t('scene.hero.eyebrow')}
            lines={[
              {
                text: t('scene.hero.acting'),
              },
              {
                text: t('scene.hero.directing'),
                accent: true,
              },
              {
                text: t('scene.hero.writing'),
              },
            ]}
            note={t('scene.hero.aside')}
            imageSrc="/images/escena/hero.webp"
            imageAlt={t('scene.hero.imageAlt')}
            imageClassName="object-center"
          />


      {/* Manifiesto */}
      <section className="bg-amber-50 px-6 py-24 text-slate-950 sm:px-10 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <span className="mb-8 block font-mono text-xs tracking-widest text-amber-600 uppercase">
            {t('scene.statement.eyebrow')}
          </span>

          <p className="font-editorial text-3xl leading-snug sm:text-4xl md:text-5xl">
            {t('scene.statement.text')}
          </p>
        </motion.div>
      </section>

      {/* Disciplinas */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <span className="font-mono text-xs tracking-widest text-amber-500 uppercase">
              {t('scene.disciplines.eyebrow')}
            </span>

            <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[0.9] uppercase sm:text-6xl md:text-7xl">
              {t('scene.disciplines.title')}
            </h2>
          </div>

          <div className="space-y-28 sm:space-y-36">
            {disciplines.map((discipline) => {
              const isRight = discipline.align === 'right';

              return (
                <div key={discipline.key}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      margin: '-100px',
                    }}
                    transition={{ duration: 0.7 }}
                    className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
                  >
                    {/* Imagen */}
                    <div
                      className={`lg:col-span-7 ${
                        isRight
                          ? 'lg:order-2'
                          : 'lg:order-1'
                      }`}
                    >
                  <div className="relative overflow-hidden bg-slate-900">
                    <img
                      src={discipline.image}
                      alt={t(
                        `scene.disciplines.${discipline.key}.imageAlt`,
                      )}
                      className="h-auto w-full transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>

                    {/* Texto */}
                    <div
                      className={`lg:col-span-5 ${
                        isRight
                          ? 'lg:order-1'
                          : 'lg:order-2'
                      }`}
                    >
                      <span className="font-mono text-xs tracking-widest text-amber-500">
                        {discipline.number}
                      </span>

                      <h3 className="mt-4 font-display text-4xl uppercase sm:text-5xl">
                        {t(
                          `scene.disciplines.${discipline.key}.title`,
                        )}
                      </h3>

                      <p className="mt-3 font-editorial text-2xl text-slate-400 italic">
                        {t(
                          `scene.disciplines.${discipline.key}.subtitle`,
                        )}
                      </p>

                      <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-amber-50/75 sm:text-lg">
                        {t(
                          `scene.disciplines.${discipline.key}.description`,
                        )}
                      </p>
                    </div>
                  </motion.article>

                  
                
                {discipline.key === 'acting' && (
  <div className="mt-28 sm:mt-36">
    <ActingProjects />
    <ScreenProjects />
  </div>
)}

{discipline.key === 'directing' && (
  <div className="mt-28 sm:mt-36">
    <DirectionProjects />
  </div>
)}
{discipline.key === 'dramaturgy' && (
  <div className="mt-28 sm:mt-36">
    <DramaturgyProjects />
  </div>
)}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fuera de escena */}
      <section className="bg-amber-50 px-6 py-24 text-slate-950 sm:px-10 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <span className="font-mono text-xs tracking-widest text-amber-600 uppercase">
            {t('scene.offstage.eyebrow')}
          </span>
       <div className="mt-8 max-w-4xl">
          <p className="font-editorial text-3xl leading-snug text-slate-950 sm:text-4xl md:text-5xl">
            {t('scene.offstage.text')}
          </p>

          <p className="mt-1 font-display text-5xl leading-none text-amber-600 italic sm:text-6xl md:text-7xl">
            {t('scene.offstage.text1')}
          </p>

          <p className="mt-2 font-editorial text-3xl leading-snug text-slate-950 sm:text-4xl md:text-5xl">
            {t('scene.offstage.text2')}
          </p>

          <p className="mt-12 border-l border-amber-600 pl-5 font-editorial text-xl text-amber-700 italic sm:text-2xl">
            {t('scene.offstage.close')}
          </p>
        </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase">
            {t('scene.cta.eyebrow')}
          </span>

          <h2 className="mt-6 font-display text-5xl leading-[0.9] uppercase sm:text-6xl md:text-7xl">
            {t('scene.cta.title')}
          </h2>

          <Link
            to="/contact"
            className="mt-10 inline-flex border-2 border-slate-700 px-8 py-5 font-display text-2xl uppercase transition-colors hover:border-amber-500 hover:text-amber-500 sm:text-3xl"
          >
            {t('scene.cta.button')}
          </Link>
        </div>
      </section>
    </main>
  );
};