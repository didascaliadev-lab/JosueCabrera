import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { directingProjects } from '../data/sceneProjects';

export const DirectionProjects = () => {
  const { t } = useTranslation();

  const [openProject, setOpenProject] = useState<string | null>(null);

  const projectRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (!openProject) return;

    const timeout = window.setTimeout(() => {
      projectRefs.current[openProject]?.scrollIntoView({
        behavior: 'instant',
        block: 'start',
      });
    }, 100);

    return () => window.clearTimeout(timeout);
  }, [openProject]);

  const toggleProject = (projectId: string) => {
    setOpenProject((current) =>
      current === projectId ? null : projectId,
    );
  };

  return (
    <section className="mt-24">
      {/* Encabezado */}
      <div className="mb-12 border-b border-slate-800 pb-7">
        <span className="font-mono text-xs tracking-widest text-amber-500 uppercase">
          {t('scene.directingProjects.eyebrow')}
        </span>

        <h3 className="mt-4 font-display text-4xl leading-[0.9] uppercase sm:text-5xl md:text-6xl">
          {t('scene.directingProjects.title')}
        </h3>
      </div>

      {/* Proyectos */}
      <div className="border-t border-slate-800">
        {directingProjects.map((project, index) => {
          const isOpen = openProject === project.id;
          const reverse = index % 2 !== 0;

          return (
            <motion.article
              key={project.id}
              ref={(element) => {
                projectRefs.current[project.id] = element;
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="scroll-mt-24 border-b border-slate-800"
            >
              {/* Cabecera desplegable */}
              <button
                type="button"
                onClick={() => toggleProject(project.id)}
                aria-expanded={isOpen}
                className="group grid w-full grid-cols-[40px_1fr_auto] items-center gap-4 py-8 text-left sm:grid-cols-[60px_1fr_auto_auto] sm:gap-6 sm:py-10"
              >
                {/* Número */}
                <span className="font-mono text-xs text-amber-500">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Título */}
                <h4
                  className={`font-display text-3xl leading-none uppercase transition-colors duration-300 sm:text-4xl md:text-5xl ${
                    isOpen
                      ? 'text-amber-50'
                      : 'text-amber-50 group-hover:text-amber-500'
                  }`}
                >
                  {t(
                    `scene.directingProjects.items.${project.id}.title`,
                  )}
                </h4>

                {/* Año */}
                <span className="hidden font-mono text-xs text-slate-500 sm:block">
                  {project.year}
                </span>

                {/* Abrir / cerrar */}
                <span
                  className={`flex h-9 w-9 items-center justify-center border transition-colors duration-300 ${
                    isOpen
                      ? 'border-amber-500 text-amber-500'
                      : 'border-slate-700 text-slate-400 group-hover:border-amber-500 group-hover:text-amber-500'
                  }`}
                >
                  {isOpen ? (
                    <Minus size={16} strokeWidth={1.5} />
                  ) : (
                    <Plus size={16} strokeWidth={1.5} />
                  )}
                </span>
              </button>

              {/* Contenido desplegable */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
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
                        duration: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      opacity: {
                        duration: 0.2,
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 sm:pb-16">
                      {/* Ficha */}
                      <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                        {/* Imagen principal */}
                        <div
                          className={`lg:col-span-8 ${
                            reverse
                              ? 'lg:order-2'
                              : 'lg:order-1'
                          }`}
                        >
                          <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                            <img
                              src={project.images[0]}
                              alt={t(
                                `scene.directingProjects.items.${project.id}.imageAlt`,
                              )}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Información */}
                        <div
                          className={`lg:col-span-4 ${
                            reverse
                              ? 'lg:order-1'
                              : 'lg:order-2'
                          }`}
                        >
                          <p className="font-editorial text-xl leading-snug text-amber-50/90 sm:text-2xl">
                            {t(
                              `scene.directingProjects.items.${project.id}.description`,
                            )}
                          </p>

                          <div className="mt-7 border-t border-slate-800 pt-5 font-mono text-xs leading-relaxed text-slate-400">
                            {t(
                              `scene.directingProjects.items.${project.id}.credits`,
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Fotografías secundarias */}
                      {project.images.length > 1 && (
                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6">
                          {project.images.slice(1).map((image) => (
                            <div
                              key={image}
                              className="aspect-[4/3] overflow-hidden bg-slate-900"
                            >
                              <img
                                src={image}
                                alt={t(
                                  `scene.directingProjects.items.${project.id}.imageAlt`,
                                )}
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};