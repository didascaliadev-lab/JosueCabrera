import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const UniversesSection = () => {
  const { t } = useTranslation();

  const linkClasses =
    'inline-flex border-b border-amber-50/30 pb-1 font-mono text-xs tracking-widest text-amber-50 transition-colors hover:border-amber-500 hover:text-amber-500';

  return (
    <section className="bg-slate-950 px-6 py-24 text-amber-50 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-7xl space-y-36">
        {/* 01 / ESCENA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 items-center gap-8 border-t border-slate-800 pt-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="space-y-6 lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-amber-500">
                {t('universes.scene.num')}
              </span>

              <span className="h-px w-4 bg-slate-400/40" />

              <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
                {t('universes.scene.tag')}
              </span>
            </div>

            <h2 className="font-display text-4xl tracking-tight uppercase sm:text-6xl md:text-7xl">
              ESCENA
            </h2>

            <p className="font-editorial text-xl text-slate-400 italic">
              {t('universes.scene.subtitle')}
            </p>

            <p className="max-w-lg font-sans text-base leading-relaxed text-amber-50/80 sm:text-lg">
              {t('universes.scene.text')}
            </p>

            <div className="pt-4">
              <Link to="/scene" className={linkClasses}>
                {t('universes.scene.cta')}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImagePlaceholder
              imageSrc="/images/home/naufragos.png"
              altText="Josué Cabrera en escena"
              aspectRatio="landscape"
            />
          </div>
        </motion.div>

        {/* 02 / PEDAGOGÍA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 items-center gap-8 border-t border-slate-800 pt-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="order-2 lg:order-1 lg:col-span-6">
            <ImagePlaceholder
              imageSrc="/images/home/clase.png"
              altText="Josué Cabrera durante una actividad de pedagogía teatral"
              aspectRatio="landscape"
            />
          </div>

          <div className="order-1 space-y-6 lg:order-2 lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-amber-500">
                {t('universes.pedagogy.num')}
              </span>

              <span className="h-px w-4 bg-slate-400/40" />

              <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
                {t('universes.pedagogy.tag')}
              </span>
            </div>

            <h2 className="font-display text-4xl tracking-tight uppercase sm:text-6xl md:text-7xl">
              PEDAGOGÍA
            </h2>

            <blockquote className="border-l-2 border-amber-500 py-1 pl-4 font-editorial text-2xl text-amber-500 italic sm:text-4xl">
              “{t('universes.pedagogy.quote')}”
            </blockquote>

            <p className="max-w-lg font-sans text-base leading-relaxed text-amber-50/80 sm:text-lg">
              {t('universes.pedagogy.text')}
            </p>

            <div className="pt-4">
              <Link to="/pedagogy" className={linkClasses}>
                {t('universes.pedagogy.cta')}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 03 / CUERPO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 items-center gap-8 border-t border-slate-800 pt-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="space-y-6 lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-amber-500">
                {t('universes.body.num')}
              </span>

              <span className="h-px w-4 bg-slate-400/40" />

              <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
                {t('universes.body.tag')}
              </span>
            </div>

            <h2 className="font-display text-5xl leading-[0.88] tracking-tight uppercase sm:text-7xl md:text-8xl">
              <span className="block">
                {t('universes.casino.quoteLine1')}
              </span>

              <span className="block text-amber-500">
                {t('universes.casino.quoteLine2')}
              </span>

              <span className="block">
                {t('universes.casino.quoteLine3')}
              </span>
            </h2>

            <p className="max-w-lg font-sans text-base leading-relaxed text-amber-50/80 sm:text-lg">
              {t('universes.casino.text')}
            </p>

            <div className="pt-4">
              <Link to="/pedagogy#casino" className={linkClasses}>
                {t('universes.casino.cta')}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImagePlaceholder
              imageSrc="/images/home/baile.png"
              altText="Josué Cabrera bailando salsa cubana"
              aspectRatio="vertical"
            />
          </div>
        </motion.div>

        {/* 04 / CÓDIGO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 items-center gap-8 border-t border-slate-800 pt-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="order-2 lg:order-1 lg:col-span-6">
            <ImagePlaceholder
              imageSrc="/images/home/codigo.png"
              altText="Trabajo de desarrollo web de Josué Cabrera"
              aspectRatio="landscape"
            />
          </div>

          <div className="order-1 space-y-6 lg:order-2 lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-amber-500">
                {t('universes.code.num')}
              </span>

              <span className="h-px w-4 bg-slate-400/40" />

              <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
                {t('universes.code.tag')}
              </span>
            </div>

            <h2 className="font-display text-4xl leading-[0.9] tracking-tight uppercase sm:text-6xl md:text-7xl">
              <span className="block text-slate-400">
                {t('universes.code.titleLine1')}
              </span>

              <span className="block">
                {t('universes.code.titleLine2')}
              </span>

              <span className="block font-editorial text-2xl text-amber-500 italic sm:text-3xl">
                {t('universes.code.titleLine3')}
              </span>
            </h2>

            <p className="max-w-lg font-sans text-base leading-relaxed text-amber-50/80 sm:text-lg">
              {t('universes.code.text')}
            </p>

            <div className="pt-4">
              <Link to="/code" className={linkClasses}>
                {t('universes.code.cta')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};