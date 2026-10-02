import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { screenProjects } from '../data/sceneProjects';

const demoReelUrl =
  'https://www.youtube.com/embed/VbIuC0IXVWc';

export const ScreenProjects = () => {
  const { t } = useTranslation();

  const [reelOpen, setReelOpen] = useState(false);

  return (
    <section className="mt-24 border-t border-slate-800 pt-16">
      {/* Pantalla + créditos */}
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Título */}
        <div className="lg:col-span-4">
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase">
            {t('scene.screen.eyebrow')}
          </span>

          <h3 className="mt-4 font-display text-5xl leading-[0.9] uppercase sm:text-6xl">
            {t('scene.screen.title')}
          </h3>

          <p className="mt-6 max-w-sm font-editorial text-xl text-slate-400 italic">
            {t('scene.screen.description')}
          </p>
        </div>

        {/* Créditos */}
        <div className="lg:col-span-8">
          <div className="border-t border-slate-800">
            {screenProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="group grid grid-cols-[1fr_auto] items-center gap-6 border-b border-slate-800 py-5 sm:grid-cols-[80px_1fr_auto]"
              >
                {/* Número */}
                <span className="hidden font-mono text-[10px] text-slate-600 sm:block">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Proyecto */}
                <div>
                  <h4 className="font-display text-xl uppercase transition-colors group-hover:text-amber-500 sm:text-2xl">
                    {t(
                      `scene.screen.items.${project.id}.title`,
                    )}
                  </h4>

                  <span className="mt-1 block font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                    {t(
                      `scene.screen.types.${project.type}`,
                    )}
                  </span>
                </div>

                {/* Año */}
                <span className="font-mono text-xs text-amber-500">
                  {project.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Reel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="mt-16 border-y border-slate-800"
      >
        {/* Cabecera desplegable */}
        <button
          type="button"
          onClick={() => setReelOpen((current) => !current)}
          aria-expanded={reelOpen}
          className="group flex w-full items-center justify-between gap-8 py-8 text-left sm:py-10"
        >
          <div>
            <span className="font-mono text-[10px] tracking-widest text-amber-500 uppercase">
              {t('scene.screen.reel.eyebrow')}
            </span>

            <h4 className="mt-3 font-display text-3xl leading-none uppercase transition-colors duration-300 group-hover:text-amber-500 sm:text-4xl md:text-5xl">
              {t('scene.screen.reel.title')}
            </h4>

            <span className="mt-3 block font-mono text-[10px] tracking-wider text-slate-500 uppercase">
              {t('scene.screen.reel.type')}
            </span>
          </div>

          {/* Abrir / cerrar */}
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-colors duration-300 ${
              reelOpen
                ? 'border-amber-500 text-amber-500'
                : 'border-slate-700 text-slate-400 group-hover:border-amber-500 group-hover:text-amber-500'
            }`}
          >
            {reelOpen ? (
              <Minus size={16} strokeWidth={1.5} />
            ) : (
              <Plus size={16} strokeWidth={1.5} />
            )}
          </span>
        </button>

        {/* Contenido desplegable */}
        <AnimatePresence initial={false}>
          {reelOpen && (
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
                height: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                  duration: 0.3,
                },
              }}
              className="overflow-hidden"
            >
              <div className="pb-10">
                {/* Video */}
                <div className="aspect-video overflow-hidden bg-slate-900">
                  <iframe
                    src={demoReelUrl}
                    title={t('scene.screen.reel.title')}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* Pie */}
                <div className="mt-4 flex items-center justify-between gap-6 font-mono text-[10px] tracking-wider uppercase">
                  <span className="text-slate-500">
                    {t('scene.screen.reel.caption')}
                  </span>

                  <span className="text-amber-500">
                    ▶
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};