type AspectRatio = 'vertical' | 'landscape' | 'square' | 'wide' | 'auto';

interface ImagePlaceholderProps {
  imageSrc?: string;
  altText?: string;
  label?: string;
  suggestedFileName?: string;
  overlayText?: string;
  aspectRatio?: AspectRatio;
  className?: string;
}

const aspectClasses: Record<AspectRatio, string> = {
  vertical: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
  wide: 'aspect-video',
  auto: 'h-full w-full',
};

export const ImagePlaceholder = ({
  imageSrc,
  altText = '',
  label = 'IMAGEN',
  suggestedFileName = '',
  overlayText,
  aspectRatio = 'vertical',
  className = '',
}: ImagePlaceholderProps) => {
  const aspectClass = aspectClasses[aspectRatio];

  if (imageSrc) {
    return (
      <div
        className={`group relative overflow-hidden bg-neutral-800 ${aspectClass} ${className}`}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="h-full w-full object-cover  transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border border-neutral-400/20 bg-neutral-800 transition-colors duration-300 hover:border-amber-600/40 ${aspectClass} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(theme(colors.neutral.400)_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      <span className="absolute top-4 left-4 h-3 w-3 border-t-2 border-l-2 border-amber-600/60" />
      <span className="absolute top-4 right-4 h-3 w-3 border-t-2 border-r-2 border-neutral-400/40" />
      <span className="absolute bottom-4 left-4 h-3 w-3 border-b-2 border-l-2 border-neutral-400/40" />
      <span className="absolute right-4 bottom-4 h-3 w-3 border-r-2 border-b-2 border-amber-600/60" />

      <div className="absolute inset-0 flex select-none flex-col items-center justify-center p-6 text-center">
        <span className="font-mono text-xs tracking-widest text-amber-600 uppercase">
          [ {label} ]
        </span>

        {overlayText && (
          <p className="mt-2 max-w-xs font-editorial text-lg text-stone-100/90 italic">
            “{overlayText}”
          </p>
        )}

        {suggestedFileName && (
          <div className="mt-4 border border-neutral-400/20 bg-neutral-950/60 px-3 py-1.5 font-mono text-xs text-neutral-400/80">
            Espacio preparado para:
            <br />

            <span className="font-semibold text-stone-100">
              {suggestedFileName}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};