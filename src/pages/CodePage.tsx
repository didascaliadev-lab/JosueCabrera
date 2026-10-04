import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../sections/PageHero';

const capabilityKeys = [
  'interfaces',
  'authentication',
  'users',
  'multilingual',
  'apps',
] as const;

const tools = [
  'React',
  'TypeScript',
  'JavaScript',
  'Vite',
  'Tailwind CSS',
  'Supabase',
  'Node.js',
  'Flutter',
  'Git',
  'Vercel',
];

const processSteps = ['listen', 'shape', 'build', 'deliver'] as const;

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export const CodePage = () => {
  const { t } = useTranslation();

  return (
    <main>
      {/* HERO */}
      <PageHero
        eyebrow={t('code.hero.eyebrow')}
        lines={[
          { text: t('code.hero.line1') },
          { text: t('code.hero.line2'), accent: true },
        ]}
        description={t('code.hero.description')}
        imageSrc="/images/codigo/hero.webp"
        imageAlt={t('code.hero.imageAlt')}
        imageClassName="object-cover object-center"
      />

      {/* MANIFIESTO */}
      <section className="bg-amber-50 px-6 py-24 text-slate-950 sm:px-10 sm:py-32">
        <motion.div
          {...reveal}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-amber-600 uppercase">
            {t('code.manifesto.eyebrow')}
          </span>

          <p className="mt-10 font-editorial text-4xl leading-[1.35] sm:text-5xl sm:leading-[1.3] md:text-6xl">
            {t('code.manifesto.text')}
          </p>
        </motion.div>
      </section>

      {/* 01 — PROYECTOS */}
      <section className="bg-slate-950 px-6 py-24 text-amber-50 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-7xl">
          {/* ENCABEZADO */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="mb-20 sm:mb-28"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-amber-500">
                01
              </span>

              <span className="h-px w-4 bg-slate-400/40" />

              <span className="font-mono text-xs tracking-[0.2em] text-slate-400 uppercase">
                {t('code.projects.eyebrow')}
              </span>
            </div>

            <h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-tight uppercase sm:text-6xl md:text-8xl">
              {t('code.projects.title')}
            </h2>

            <p className="mt-7 max-w-2xl font-editorial text-xl leading-relaxed text-slate-400 sm:text-2xl">
              {t('code.projects.description')}
            </p>

            <p className="mt-8 font-mono text-[10px] tracking-[0.2em] text-amber-500 uppercase sm:text-xs">
              {t('code.projects.categories')}
            </p>
          </motion.div>

          {/* DIDASCALIADEV */}
          <motion.article
            {...reveal}
            transition={{ duration: 0.7 }}
            className="border-t border-slate-800 pt-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-amber-500">01</span>

              <span className="font-mono text-xs tracking-widest text-slate-500">
                {t('code.projects.didascalia.year')}
              </span>
            </div>

            <div className="mt-8 overflow-hidden bg-slate-900">
              <img
                src="/images/codigo/proyectos/didascalia.webp"
                alt={t('code.projects.didascalia.imageAlt')}
                className="h-auto w-full transition-transform duration-700 hover:scale-[1.015]"
              />
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase sm:text-xs">
                  {t('code.projects.didascalia.type')}
                </span>

                <h3 className="mt-3 font-display text-5xl leading-[0.9] tracking-tight uppercase sm:text-6xl md:text-7xl">
                  {t('code.projects.didascalia.title')}
                </h3>
              </div>

              <div className="lg:col-span-5">
                <p className="font-editorial text-xl leading-relaxed text-slate-300">
                  {t('code.projects.didascalia.description')}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {[
                    'React',
                    'JavaScript',
                    'Tailwind',
                    'Supabase',
                    'Vercel',
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[10px] tracking-wider text-slate-500 uppercase"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href="https://didascaliadev.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-amber-50/30 pb-1 font-mono text-xs tracking-widest uppercase transition-colors hover:border-amber-500 hover:text-amber-500"
                >
                  {t('code.projects.view')}

                  <ExternalLink
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </motion.article>

          {/* LOS DE ALLA */}
          <motion.article
            {...reveal}
            transition={{ duration: 0.7 }}
            className="mt-30 border-t border-slate-800 pt-8 sm:mt-28"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-amber-500">02</span>

              <span className="font-mono text-xs tracking-widest text-slate-500">
                {t('code.projects.rueda.format')}
              </span>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="relative lg:col-span-8">
                <div className="overflow-hidden bg-slate-900">
                  <img
                    src="/images/codigo/proyectos/losdealla.webp"
                    alt={t('code.projects.rueda.webImageAlt')}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <div className="lg:col-span-4 lg:pl-8">
                <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase sm:text-xs">
                  {t('code.projects.rueda.type')}
                </span>

                <h3 className="mt-4 font-display text-4xl leading-[0.9] tracking-tight uppercase sm:text-5xl lg:text-6xl">
                  {t('code.projects.rueda.title')}
                  <span className="block text-amber-500">
                    {t('code.projects.rueda.titleAccent')}
                  </span>
                </h3>

                <p className="mt-6 font-editorial text-xl leading-relaxed text-slate-300">
                  {t('code.projects.rueda.description')}
                </p>

                <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
                  {[
                    'React',
                    'Vite',
                    'Tailwind',
                    'Supabase',
                    'Flutter',
                    'JavaScript',
                    
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[10px] tracking-wider text-slate-500 uppercase"
                    >
                      {tool}
                    </span>
                  ))}
                      <a
                  href="https://losdealla.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-amber-50/30 pb-1 font-mono text-xs tracking-widest uppercase transition-colors hover:border-amber-500 hover:text-amber-500"
                >
                  {t('code.projects.view')}

                  <ExternalLink
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                </div>
              </div>
            </div>
          </motion.article>

          {/* MANO ENTONADA */}
          <motion.article
            {...reveal}
            transition={{ duration: 0.7 }}
            className="mt-30 border-t border-slate-800 pt-8 sm:mt-28"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-amber-500">03</span>

              <span className="font-mono text-xs tracking-widest text-slate-500">
                {t('code.projects.mano.format')}
              </span>
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase sm:text-xs">
                  {t('code.projects.mano.type')}
                </span>

                <h3 className="mt-4 font-display text-5xl leading-[0.88] tracking-tight uppercase sm:text-6xl">
                  {t('code.projects.mano.title')}
                  <span className="block text-amber-500">
                    {t('code.projects.mano.titleAccent')}
                  </span>
                </h3>

                <p className="mt-6 font-editorial text-xl leading-relaxed text-slate-300">
                  {t('code.projects.mano.description')}
                </p>

                <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
                  {['React', 'Tailwind', 'Supabase', 'Flutter'].map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[10px] tracking-wider text-slate-500 uppercase"
                    >
                      {tool}
                    </span>
                  ))}
                      <a
                  href="https://manoentonada.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-amber-50/30 pb-1 font-mono text-xs tracking-widest uppercase transition-colors hover:border-amber-500 hover:text-amber-500"
                >
                  {t('code.projects.view')}

                  <ExternalLink
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                </div>
              </div>

            <div className="lg:col-span-8">
                <div className="overflow-hidden bg-slate-900">
                  <img
                    src="/images/codigo/proyectos/mano.webp"
                    alt={t('code.projects.mano.webImageAlt')}
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.015]"
                  />
                </div>
              </div>
            </div>
          </motion.article>

          {/* AMPLIA CONSCIENCIA */}
          <motion.article
            {...reveal}
            transition={{ duration: 0.7 }}
            className="mt-30 border-t border-slate-800 pt-8 sm:mt-28"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-amber-500">04</span>

              <span className="font-mono text-xs tracking-widest text-slate-500">
                {t('code.projects.amplia.format')}
              </span>
            </div>

            <div className="mt-8 overflow-hidden bg-slate-900">
              <img
                src="/images/codigo/proyectos/consciencia.webp"
                alt={t('code.projects.amplia.imageAlt')}
                className="h-auto w-full transition-transform duration-700 hover:scale-[1.015]"
              />
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase sm:text-xs">
                  {t('code.projects.amplia.type')}
                </span>

                <h3 className="mt-3 font-display text-5xl leading-[0.9] tracking-tight uppercase sm:text-6xl md:text-7xl">
                  {t('code.projects.amplia.title')}
                  <span className="block text-amber-500">
                    {t('code.projects.amplia.titleAccent')}
                  </span>
                </h3>
              </div>

              <div className="lg:col-span-5">
                <p className="font-editorial text-xl leading-relaxed text-slate-300">
                  {t('code.projects.amplia.description')}
                </p>

                    <a
                  href="https://ampliaconsciencia.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-amber-50/30 pb-1 font-mono text-xs tracking-widest uppercase transition-colors hover:border-amber-500 hover:text-amber-500"
                >
                  {t('code.projects.view')}

                  <ExternalLink
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </motion.article>

          {/* GYE + MEZCAL */}
          <div className="mt-32 grid gap-x-8 gap-y-24 border-t border-slate-800 pt-8 sm:mt-40 lg:grid-cols-2">
 {/* MEZCAL 13 DE ENERO */}
            <motion.article
              {...reveal}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-500">06</span>

                <span className="font-mono text-xs tracking-widest text-slate-500">
                  {t('code.projects.mezcal.format')}
                </span>
              </div>

          <div className="mt-7 overflow-hidden bg-slate-900">
              <img
                src="/images/codigo/proyectos/13denero.webp"
                alt={t('code.projects.mezcal.imageAlt')}
                className="block h-auto w-full transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

              <span className="mt-7 block font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase sm:text-xs">
                {t('code.projects.mezcal.type')}
              </span>

              <h3 className="mt-3 font-display text-4xl leading-[0.9] tracking-tight uppercase sm:text-5xl">
                {t('code.projects.mezcal.title')}
                <span className="block text-amber-500">
                  {t('code.projects.mezcal.titleAccent')}
                </span>
              </h3>

              <p className="mt-5 max-w-xl font-editorial text-lg leading-relaxed text-slate-400 sm:text-xl">
                {t('code.projects.mezcal.description')}
              </p>
               <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {['React', 'TypeScript', 'Tailwind', 'i18next'].map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[10px] tracking-wider text-slate-500 uppercase"
                  >
                    {tool}
                  </span>
                ))}

                    <a
                  href="https://13denero.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-amber-50/30 pb-1 font-mono text-xs tracking-widest uppercase transition-colors hover:border-amber-500 hover:text-amber-500"
                >
                  {t('code.projects.view')}

                  <ExternalLink
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.article>
            {/* GYE ACOSTA */}
            <motion.article
              {...reveal}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-500">05</span>

                <span className="font-mono text-xs tracking-widest text-slate-500">
                  {t('code.projects.gye.format')}
                </span>
              </div>

              <div className="mt-7 overflow-hidden bg-slate-900">
                <img
                  src="/images/codigo/proyectos/gye.webp"
                  alt={t('code.projects.gye.imageAlt')}
                  className="block h-auto w-full transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <span className="mt-7 block font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase sm:text-xs">
                {t('code.projects.gye.type')}
              </span>

              <h3 className="mt-3 font-display text-4xl leading-[0.9] tracking-tight uppercase sm:text-5xl">
                {t('code.projects.gye.title')}
              </h3>

              <p className="mt-5 max-w-xl font-editorial text-lg leading-relaxed text-slate-400 sm:text-xl">
                {t('code.projects.gye.description')}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {['React', 'TypeScript', 'Tailwind', 'i18next'].map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[10px] tracking-wider text-slate-500 uppercase"
                  >
                    {tool}
                  </span>
                ))}

                    <a
                  href="https://gyeacosta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-amber-50/30 pb-1 font-mono text-xs tracking-widest uppercase transition-colors hover:border-amber-500 hover:text-amber-500"
                >
                  {t('code.projects.view')}

                  <ExternalLink
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.article>
          
          </div>
        </div>
      </section>

      {/* 02 — DEL SITIO A LA HERRAMIENTA */}
      <section className="bg-slate-950 px-6 pb-24 text-amber-50 sm:px-10 sm:pb-32">
        <motion.div
          {...reveal}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl border-t border-slate-800 pt-16"
        >
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-amber-500">
                  02
                </span>

                <span className="h-px w-4 bg-slate-400/40" />

                <span className="font-mono text-xs tracking-[0.2em] text-slate-400 uppercase">
                  {t('code.capabilities.eyebrow')}
                </span>
              </div>

              <h2 className="mt-7 font-display text-5xl leading-[0.88] tracking-tight uppercase sm:text-6xl md:text-7xl">
                <span className="block">
                  {t('code.capabilities.titleLine1')}
                </span>

                <span className="block text-amber-500">
                  {t('code.capabilities.titleLine2')}
                </span>
              </h2>

              <p className="mt-7 max-w-md font-editorial text-xl leading-relaxed text-slate-400">
                {t('code.capabilities.description')}
              </p>
            </div>

            <div className="lg:col-span-7">
              {capabilityKeys.map((capability, index) => (
                <div
                  key={capability}
                  className="group flex items-center justify-between gap-6 border-b border-slate-800 py-6 sm:py-8"
                >
                  <span className="font-display text-3xl uppercase transition-colors duration-300 group-hover:text-amber-500 sm:text-4xl md:text-5xl">
                    {t(`code.capabilities.items.${capability}`)}
                  </span>

                  <span className="font-mono text-xs text-slate-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 03 — CÓMO TRABAJO */}
      <section className="bg-amber-50 px-6 py-24 text-slate-950 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            transition={{ duration: 0.7 }}
            className="mb-16 sm:mb-20"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-amber-600">
                03
              </span>

              <span className="h-px w-4 bg-slate-950/30" />

              <span className="font-mono text-xs tracking-[0.2em] text-slate-500 uppercase">
                {t('code.process.eyebrow')}
              </span>
            </div>

            <h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-tight uppercase sm:text-6xl md:text-8xl">
              {t('code.process.title')}
            </h2>
          </motion.div>

          <div className="grid border-t border-slate-950/20 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.article
                key={step}
                {...reveal}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="border-b border-slate-950/20 py-8 md:px-6 md:first:pl-0 lg:border-r lg:last:border-r-0 lg:last:pr-0"
              >
                <span className="font-mono text-xs text-amber-600">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-8 font-display text-3xl uppercase sm:text-4xl">
                  {t(`code.process.${step}.title`)}
                </h3>

                <p className="mt-5 font-editorial text-lg leading-relaxed text-slate-600">
                  {t(`code.process.${step}.text`)}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — HERRAMIENTAS */}
      <section className="bg-slate-950 px-6 py-24 text-amber-50 sm:px-10 sm:py-32">
        <motion.div
          {...reveal}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-amber-500">
                  04
                </span>

                <span className="h-px w-4 bg-slate-400/40" />

                <span className="font-mono text-xs tracking-[0.2em] text-slate-400 uppercase">
                  {t('code.tools.eyebrow')}
                </span>
              </div>

              <h2 className="mt-7 font-display text-5xl leading-[0.9] tracking-tight uppercase sm:text-6xl md:text-7xl">
                {t('code.tools.title')}
              </h2>

              <p className="mt-8 max-w-md font-editorial text-xl leading-relaxed text-slate-400 sm:text-2xl">
                {t('code.tools.description')}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 border-t border-slate-800">
                {tools.map((tool, index) => (
                  <div
                    key={tool}
                    className={`flex items-center justify-between gap-4 border-b border-slate-800 py-5 ${
                      index % 2 === 0
                        ? 'pr-4 sm:pr-8'
                        : 'border-l border-slate-800 pl-4 sm:pl-8'
                    }`}
                  >
                    <span className="font-mono text-xs tracking-widest uppercase sm:text-sm">
                      {tool}
                    </span>

                    <span className="hidden font-mono text-[10px] text-slate-600 sm:block">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-950 px-6 py-24 text-amber-50 sm:px-10 sm:py-32">
        <motion.div
          {...reveal}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-amber-500 uppercase">
            {t('code.cta.eyebrow')}
          </span>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="font-display text-5xl leading-[0.85] tracking-tight uppercase sm:text-6xl md:text-7xl lg:col-span-8 lg:text-8xl">
              <span className="block">{t('code.cta.title')}</span>

              <span className="block text-amber-500">
                {t('code.cta.titleAccent')}
              </span>
            </h2>

            <div className="lg:col-span-4">
              <p className="font-editorial text-xl leading-relaxed text-slate-400">
                {t('code.cta.description')}
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 border-b border-amber-50/30 pb-1 font-mono text-xs tracking-widest uppercase transition-colors hover:border-amber-500 hover:text-amber-500"
              >
                {t('code.cta.button')}

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};