import { motion } from 'framer-motion';

interface PageHeroProps {
  eyebrow: string;
  lines: {
    text: string;
    accent?: boolean;
  }[];
  description?: string;
  note?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
}

export const PageHero = ({
  eyebrow,
  lines,
  description,
  note,
  imageSrc,
  imageAlt = '',
  imageClassName = '',
}: PageHeroProps) => {
  return (
    <section className="relative min-h-[85svh] overflow-hidden bg-slate-950 text-amber-50 sm:min-h-[85vh]">
      {/* Imagen de fondo */}
      {imageSrc && (
        <div className="absolute inset-0">
         <img
            src={imageSrc}
            alt={imageAlt}
            className={`h-full w-full object-cover ${imageClassName}`}
          />

          <div className="absolute inset-0 bg-slate-950/40 sm:bg-slate-950/30" />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/20 sm:via-slate-950/50 sm:to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>
      )}

      <div className="relative z-10 mx-auto flex min-h-[85svh] w-full max-w-7xl items-end px-6 pb-12 pt-28 sm:min-h-[85vh] sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full max-w-6xl"
        >
          {/* Eyebrow */}
          <span className="font-mono text-[10px] tracking-[0.22em] text-amber-500 uppercase sm:text-xs sm:tracking-[0.25em]">
            {eyebrow}
          </span>

          {/* Título */}
          <h1 className="mt-4 select-none font-display text-[clamp(3.25rem,15vw,5rem)] leading-[0.8] tracking-tight uppercase sm:mt-5 sm:text-[clamp(5rem,11vw,7rem)] lg:text-[clamp(6rem,10vw,9rem)]">
            {lines.map((line, index) => (
              <span
                key={`${line.text}-${index}`}
                className={`block ${
                  line.accent
                    ? 'text-amber-500'
                    : 'text-amber-50'
                }`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          {/* Nota editorial */}
          {note && (
            <p className="mt-6 max-w-2xl font-editorial text-xl leading-snug text-amber-50/80 italic sm:mt-7 sm:text-2xl md:text-3xl">
              {note}
            </p>
          )}

          {/* Descripción */}
          {description && (
            <p className="mt-8 max-w-3xl font-editorial text-lg leading-relaxed text-slate-300 sm:mt-10 sm:text-xl md:text-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};