import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { DramaturgyReader } from '../components/DramaturgyReader';
import {
  dramaturgyProjects,
  type DramaturgyProjectId,
} from '../data/sceneProjects';

export const DramaturgyProjects = () => {
  const { t } = useTranslation();

  const [selectedProject, setSelectedProject] =
    useState<DramaturgyProjectId | null>(null);

  return (
    <section>
      {/* Encabezado */}
      <div className="mb-12 border-b border-slate-800 pb-7">
        <span className="font-mono text-xs tracking-widest text-amber-500 uppercase">
          {t('scene.dramaturgyProjects.eyebrow')}
        </span>

        <h3 className="mt-4 max-w-4xl font-display text-4xl leading-[0.9] uppercase sm:text-5xl md:text-6xl">
          {t('scene.dramaturgyProjects.title')}
        </h3>
      </div>

      {/* Obras */}
      <div className="border-t border-slate-800">
        {dramaturgyProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: '-60px',
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            className="group border-b border-slate-800"
          >
            <button
              type="button"
              onClick={() =>
                setSelectedProject(project.id)
              }
              className="grid w-full gap-5 py-8 text-left sm:grid-cols-[60px_1fr_auto] sm:items-end sm:py-10"
            >
              {/* Número */}
              <span className="font-mono text-xs text-amber-500">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Obra */}
              <div>
                <h4 className="max-w-4xl font-display text-3xl leading-[0.95] uppercase transition-colors duration-300 group-hover:text-amber-500 sm:text-4xl md:text-5xl">
                  {t(
                    `scene.dramaturgyProjects.items.${project.id}.title`,
                  )}
                </h4>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] tracking-wider uppercase">
                  <span className="text-slate-500">
                    {t(
                      'scene.dramaturgyProjects.author',
                    )}
                  </span>

                  {project.year && (
                    <>
                      <span className="text-slate-700">
                        /
                      </span>

                      <span className="text-slate-500">
                        {project.year}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Acción */}
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-amber-500 uppercase">
                <span>
                  {t(
                    'scene.dramaturgyProjects.read',
                  )}
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </button>
          </motion.article>
        ))}
      </div>

      {/* Cierre */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 sm:mt-20"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs tracking-widest text-amber-500 uppercase">
              {t(
                'scene.dramaturgyProjects.cta.eyebrow',
              )}
            </span>

            <h4 className="mt-4 max-w-3xl font-display text-4xl leading-[0.95] uppercase sm:text-5xl md:text-6xl">
              {t(
                'scene.dramaturgyProjects.cta.title',
              )}
            </h4>

            <p className="mt-5 max-w-2xl font-editorial text-xl leading-relaxed text-slate-400 sm:text-2xl">
              {t(
                'scene.dramaturgyProjects.cta.description',
              )}
            </p>
          </div>

          <div className="flex items-end lg:col-span-4 lg:justify-end">
            <Link
              to="/contact"
              className="group flex items-center gap-3 border-b border-amber-500 pb-2 font-mono text-xs tracking-widest text-amber-500 uppercase transition-colors hover:text-amber-400"
            >
              {t(
                'scene.dramaturgyProjects.cta.button',
              )}

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-slate-800 pt-6">
          <p className="max-w-3xl font-mono text-[9px] leading-relaxed tracking-wider text-slate-600 uppercase">
            {t(
              'scene.dramaturgyProjects.copyright',
            )}
          </p>
        </div>
      </motion.div>

      {/* Lector */}
      <DramaturgyReader
        projectId={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};