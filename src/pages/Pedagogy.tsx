import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PageHero } from '../sections/PageHero';

const forumExperiences = [
  {
    year: '2024-2025',
    title: 'Rueda de conocimientos',
    place: 'FARO del Bienestar · Cancún, Quintana Roo',
  },
  {
    year: '2013—2018',
    title: 'TeatroSinParedes',
    place: 'Distintas comunidades de México',
  },
  {
    year: '2017',
    title: 'Taller con niñas y niños',
    place: 'Ixcateopan, Guerrero',
  },
  {
    year: '2016',
    title: 'Taller de Teatro Fórum',
    place: 'La Habana, Cuba',
  },
  {
    year: '2018',
    title: 'Taller / función',
    place: 'Tutelares para menores infractores · CDMX',
  },
  {
    year: '2019',
    title: 'Taller / función',
    place: 'Reclusorio Norte · CDMX',
  },
];

const improvExperiences = [
  {
    year: '2025-2026',
    title: 'Impro Teatral',
    place: 'FARO del Bienestar · Cancún, Quintana Roo',
  },
  {
    year: '2023—2024',
    title: 'Impro Teatral',
    place: 'Taller permanente · Puerto Morelos, Quintana Roo',
  },
  {
    year: '2008—2009',
    title: 'Colectivo Minotauros',
    place:
      'Universidad Autónoma de Guadalajara · UNAM · Instituto de Cultura de Durango',
  },
];

const teacherExperiences = [
  {
    year: '2024-2026',
    title: 'Rueda de conocimientos: Talleres y procesos creativos',
    place: 'FARO del Bienestar · Cancún, Quintana Roo',
  },
  {
    year: '2024',
    title: 'Colectivo Cultural Los de Allá A.C.',
    place: 'Puerto Morelos, Quintana Roo',
  },
  {
    year: '2017—2019',
    title: 'Salsafición / Salsa Dance Condesa',
    place: 'CDMX',
  },
];

const communityExperiences = [
  {
    year: '2025',
    title: 'Procesos de base comunitaria',
    place: 'FARO del Bienestar · Cancún, Quintana Roo',
  },
  {
    year: '2022',
    title: 'Taller para las infancias',
    place: 'Chelem, Progreso, Yucatán',
  },
  {
    year: '2021—2023',
    title: 'CERESO · Área femenil',
    place: 'Cancún, Quintana Roo',
  },
  {
    year: '2019',
    title: 'Reclusorio Norte',
    place: 'CDMX',
  },
  {
    year: '2018',
    title: 'Tutelares para menores infractores',
    place: 'CDMX',
  },
];

const reveal = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: '-80px',
  },
};

export const Pedagogy = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-slate-950 text-amber-50">
      {/* HERO */}
      <PageHero
        eyebrow={t('pedagogy.hero.eyebrow')}
        lines={[
          {
            text: t('pedagogy.hero.line1'),
          },
          {
            text: t('pedagogy.hero.line2'),
            accent: true,
          },
          {
            text: t('pedagogy.hero.line3'),
          },
        ]}
        description={t('pedagogy.hero.description')}
        imageSrc="/images/pedagogia/hero.webp"
        imageAlt={t('pedagogy.hero.imageAlt')}
        imageClassName="object-cover object-center md:scale-[1.18] md:translate-x-[20%]"
      />

      {/* MANIFIESTO */}
      <section className="bg-amber-50 px-6 py-24 text-slate-950 sm:px-10 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-amber-600 uppercase">
            {t('pedagogy.manifesto.eyebrow')}
          </span>

          <p className="mt-10 font-editorial text-4xl leading-[1.35] sm:text-5xl sm:leading-[1.3] md:text-6xl">
            {t('pedagogy.manifesto.text')}
          </p>
        </motion.div>
      </section>

      {/* 01 — TEATRO FÓRUM */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="grid gap-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-4">
              <span className="font-mono text-xs text-amber-500">
                01
              </span>

              <span className="ml-6 font-mono text-xs tracking-widest text-slate-500 uppercase">
                {t('pedagogy.forum.eyebrow')}
              </span>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-display text-5xl leading-[0.9] uppercase sm:text-6xl md:text-7xl">
                {t('pedagogy.forum.title')}
              </h2>

              <p className="mt-3 font-editorial text-xl text-amber-500 italic sm:text-2xl">
                {t('pedagogy.forum.subtitle')}
              </p>

              <p className="mt-8 max-w-3xl font-editorial text-2xl leading-relaxed text-slate-300">
                {t('pedagogy.forum.description')}
              </p>
            </div>
          </motion.div>

          {/* Imagen documental */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="mt-16 lg:ml-[16.666667%]"
          >
            <div className="overflow-hidden bg-slate-900">
              <img
                src="/images/pedagogia/foro.webp"
                alt={t('pedagogy.forum.imageAlt')}
                className="h-auto w-full transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Archivo */}
          <div className="mt-16 lg:ml-[33.333333%]">
            <div className="border-t border-slate-800">
              {forumExperiences.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="grid gap-3 border-b border-slate-800 py-7 sm:grid-cols-[130px_1fr]"
                >
                  <span className="font-mono text-xs text-amber-500">
                    {item.year}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl uppercase sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-editorial text-lg text-slate-400">
                      {item.place}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 — IMPROVISACIÓN */}
      <section className="bg-amber-50 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-6">
              <span className="font-mono text-xs text-amber-700">
                02
              </span>

              <span className="font-mono text-xs tracking-widest text-slate-500 uppercase">
                {t('pedagogy.improv.eyebrow')}
              </span>
            </div>

            <h2 className="mt-8 max-w-6xl font-display text-5xl leading-[0.9] uppercase sm:text-6xl md:text-8xl">
              {t('pedagogy.improv.title')}
            </h2>

            <p className="mt-10 max-w-3xl font-editorial text-2xl leading-relaxed text-slate-700">
              {t('pedagogy.improv.description')}
            </p>
          </motion.div>

          {/* Imagen documental */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="mt-16 grid lg:grid-cols-12"
          >
            <div className="overflow-hidden bg-stone-200 lg:col-span-9 lg:col-start-4">
              <div className="aspect-[16/9]">
                <img
                  src="/images/pedagogia/impro.webp"
                  alt={t('pedagogy.improv.imageAlt')}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>

          <div className="mt-16 border-t border-slate-950/20">
            {improvExperiences.map((item, index) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="grid gap-4 border-b border-slate-950/20 py-8 sm:grid-cols-[150px_1fr]"
              >
                <span className="font-mono text-xs text-amber-700">
                  {item.year}
                </span>

                <div>
                  <h3 className="font-display text-2xl uppercase sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-2xl font-editorial text-lg text-slate-600">
                    {item.place}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — CASINO */}
      <section id="casino" className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="grid items-start gap-14 lg:grid-cols-12">
            <motion.div
              {...reveal}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs text-amber-500">
                  03
                </span>

                <span className="font-mono text-xs tracking-widest text-slate-500 uppercase">
                  {t('pedagogy.casino.eyebrow')}
                </span>
              </div>

              <h2 className="mt-8 font-display text-5xl leading-[0.85] uppercase sm:text-6xl md:text-7xl">
                {t('pedagogy.casino.title')}
              </h2>

              <p className="mt-8 font-editorial text-3xl leading-snug text-amber-500 italic">
                {t('pedagogy.casino.quote')}
              </p>

              <p className="mt-8 max-w-xl font-editorial text-xl leading-relaxed text-slate-300">
                {t('pedagogy.casino.description')}
              </p>

              <div className="mt-10 border-t border-slate-800 pt-6">
                <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                  {t('pedagogy.casino.since')}
                </span>

                <p className="mt-3 font-display text-2xl uppercase">
                  CDMX · YUCATÁN · QUINTANA ROO
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/pedagogia/casino.webp"
                  alt={t('pedagogy.casino.imageAlt')}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04 — FORMACIÓN DE PROFESORES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="grid gap-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-4">
              <span className="font-mono text-xs text-amber-500">
                04
              </span>

              <span className="ml-6 font-mono text-xs tracking-widest text-slate-500 uppercase">
                {t('pedagogy.training.eyebrow')}
              </span>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-display text-5xl leading-[0.9] uppercase sm:text-6xl md:text-7xl">
                {t('pedagogy.training.title')}
              </h2>

              <p className="mt-8 max-w-3xl font-editorial text-2xl leading-relaxed text-slate-300">
                {t('pedagogy.training.description')}
              </p>
            </div>
          </motion.div>

          <div className="mt-16 lg:ml-[33.333333%]">
            <div className="border-t border-slate-800">
              {teacherExperiences.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="grid gap-4 border-b border-slate-800 py-7 sm:grid-cols-[130px_1fr]"
                >
                  <span className="font-mono text-xs text-amber-500">
                    {item.year}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl uppercase sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-editorial text-lg text-slate-400">
                      {item.place}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — TERRITORIO / COMUNIDAD */}
      <section className="bg-amber-50 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="grid gap-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-4">
              <span className="font-mono text-xs text-amber-700">
                05
              </span>

              <span className="ml-6 font-mono text-xs tracking-widest text-amber-700 uppercase">
                {t('pedagogy.community.eyebrow')}
              </span>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-display text-5xl leading-[0.9] uppercase sm:text-6xl md:text-7xl">
                {t('pedagogy.community.title')}
              </h2>

              <p className="mt-8 max-w-3xl font-editorial text-2xl leading-relaxed text-slate-700">
                {t('pedagogy.community.description')}
              </p>
            </div>
          </motion.div>

          <div className="mt-16 border-t border-slate-950/20">
            {communityExperiences.map((item, index) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="grid gap-3 border-b border-slate-950/20 py-7 md:grid-cols-[120px_1fr_auto] md:gap-4 lg:grid-cols-[150px_1fr_auto]"
              >
                <span className="font-mono text-xs text-amber-700">
                  {item.year}
                </span>

                <h3 className="font-display text-xl uppercase sm:text-2xl">
                  {item.title}
                </h3>

                <span className="font-editorial text-slate-600 md:text-right">
                  {item.place}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Imagen documental de cierre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <div className="aspect-[16/8] overflow-hidden bg-stone-200 sm:aspect-[16/7]">
              <img
                src="/images/pedagogia/comunitario.webp"
                alt={t('pedagogy.community.imageAlt')}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs tracking-[0.2em] text-amber-500 uppercase">
              {t('pedagogy.cta.eyebrow')}
            </span>

            <div className="mt-8 grid items-end gap-12 lg:grid-cols-12">
              <h2 className="font-display text-5xl leading-[0.85] uppercase sm:text-6xl md:text-7xl lg:col-span-8 lg:text-8xl">
                <span className="block">{t('pedagogy.cta.title')}</span>

                <span className="block text-amber-500">
                  {t('pedagogy.cta.titleAccent')}
                </span>
              </h2>

              <div className="lg:col-span-4">
                <p className="font-editorial text-xl leading-relaxed text-slate-400">
                  {t('pedagogy.cta.description')}
                </p>

                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-3 border-b border-amber-500 pb-2 font-mono text-xs tracking-widest text-amber-500 uppercase transition-colors hover:text-amber-300"
                >
                  {t('pedagogy.cta.button')}

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};