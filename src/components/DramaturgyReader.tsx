import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { dondeAunSeSirveElPan } from '../data/dramaturgy/dondeAunSeSirve';
import { fractura } from '../data/dramaturgy/fractura';
import { gordoXtreaming } from '../data/dramaturgy/gordoXtreaming';
import { tlaloques } from '../data/dramaturgy/tlaloques';
import type { DramaturgyBlock } from '../data/dramaturgy/types';
import type { DramaturgyProjectId } from '../data/sceneProjects';

interface DramaturgyReaderProps {
  projectId: DramaturgyProjectId | null;
  onClose: () => void;
}

export const DramaturgyReader = ({
  projectId,
  onClose,
}: DramaturgyReaderProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!projectId) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectId, onClose]);

  const renderBlock = (
    block: DramaturgyBlock,
    index: number,
  ) => {
    switch (block.type) {
      case 'scene':
        return (
          <h3
            key={index}
            className="mt-16 mb-10 border-b border-slate-950/20 pb-4 font-mono text-xs tracking-[0.2em] uppercase"
          >
            {block.text}
          </h3>
        );

      case 'character':
        return (
          <p
            key={index}
            className="mt-8 font-mono text-[11px] font-semibold tracking-[0.16em] text-amber-800 uppercase"
          >
            {block.text}
          </p>
        );

      case 'dialogue':
        return (
          <p
            key={index}
            className="mt-1 font-editorial text-xl leading-[1.55] sm:text-2xl"
          >
            {block.text}
          </p>
        );

      case 'stageDirection':
        return (
          <p
            key={index}
            className="my-8 font-editorial text-lg leading-relaxed text-slate-600 italic sm:text-xl"
          >
            {block.text}
          </p>
        );

      case 'text':
        return (
          <div
            key={index}
            className="mt-8 whitespace-pre-wrap font-editorial text-lg leading-[1.8] text-slate-900 sm:text-xl"
          >
            {block.text}
          </div>
        );

      default:
        return null;
    }
  };

  const fragments = {
    gordoXtreaming,
    dondeAunSeSirveElPan,
    fractura,
    tlaloques,
  };

  const blocks =
    projectId && projectId in fragments
      ? fragments[projectId as keyof typeof fragments].blocks
      : [];

  return (
    <AnimatePresence>
      {projectId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-amber-50 text-slate-950"
        >
          {/* Barra superior */}
          <div className="sticky top-0 z-20 border-b border-slate-950/15 bg-amber-50/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
              <div className="min-w-0 truncate font-mono text-[10px] tracking-[0.18em] uppercase">
                <span className="text-amber-700">
                  {t(
                    'scene.dramaturgyProjects.reader.fragment',
                  )}
                </span>

                <span className="mx-3 text-slate-400">
                  /
                </span>

                <span>
                  {t(
                    `scene.dramaturgyProjects.items.${projectId}.title`,
                  )}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label={t(
                  'scene.dramaturgyProjects.reader.close',
                )}
                className="ml-6 flex shrink-0 items-center gap-2 font-mono text-[10px] tracking-widest uppercase transition-colors hover:text-amber-700"
              >
                <span className="hidden sm:inline">
                  {t(
                    'scene.dramaturgyProjects.reader.close',
                  )}
                </span>

                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Documento */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mx-auto max-w-3xl px-6 py-20 sm:px-10 sm:py-28"
          >
            {/* Cabecera */}
            <header className="border-b border-slate-950/20 pb-12 text-center">
              <span className="font-mono text-[10px] tracking-[0.2em] text-amber-700 uppercase">
                {t(
                  'scene.dramaturgyProjects.reader.label',
                )}
              </span>

              <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-[0.95] uppercase sm:text-5xl md:text-6xl">
                {t(
                  `scene.dramaturgyProjects.items.${projectId}.title`,
                )}
              </h2>

              <p className="mt-6 font-editorial text-lg text-slate-600 italic">
                {t(
                  'scene.dramaturgyProjects.reader.author',
                )}
              </p>
            </header>

            {/* Fragmento protegido */}
            <div
              className="mx-auto mt-16 max-w-2xl select-none"
              onCopy={(event) => event.preventDefault()}
              onCut={(event) => event.preventDefault()}
              onContextMenu={(event) => event.preventDefault()}
              draggable={false}
            >
              {blocks.length > 0 ? (
                blocks.map(renderBlock)
              ) : (
                <div className="py-24 text-center">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                    {t(
                      'scene.dramaturgyProjects.reader.comingSoon',
                    )}
                  </span>
                </div>
              )}
            </div>

            {/* Fin del fragmento */}
            <footer className="mt-24 border-t border-slate-950/20 pt-10 text-center">
              <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                {t(
                  'scene.dramaturgyProjects.reader.end',
                )}
              </span>

              <div className="mx-auto mt-8 h-px w-10 bg-amber-700" />

              <p className="mt-8 font-mono text-[9px] leading-relaxed tracking-wider text-slate-500 uppercase">
                {t(
                  'scene.dramaturgyProjects.reader.copyright',
                )}
              </p>
            </footer>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
};