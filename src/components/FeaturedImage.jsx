import { useEffect, useMemo, useState } from "react";

/** Resolves `/images/...` paths for Vite `base` (e.g. GitHub Pages subfolders). */
function resolvePublicSrc(path) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  const base = import.meta.env.BASE_URL || "/";
  const trimmed = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${trimmed}`;
}

/**
 * Case-study hero visual. With `bleed`, breaks wider than a narrow article column (editorial spread).
 * Tweak width: figure `max-w-[75rem]` (~1200px). Tweak frame: `rounded-md`, `border-*`, shadow on inner wrapper.
 */
export function FeaturedImage({ src, alt = "", bleed = false }) {
  const [loadError, setLoadError] = useState(false);
  const resolved = useMemo(() => resolvePublicSrc(src), [src]);

  useEffect(() => {
    setLoadError(false);
  }, [resolved]);

  const showImage = Boolean(resolved) && !loadError;

  const frameInner = showImage ? (
    <div
      className={`
        overflow-hidden rounded-md border border-ink/9 bg-ink/[0.02] shadow-[0_18px_48px_-22px_rgba(0,0,0,0.12)]
        dark:border-zinc-600/25 dark:bg-black/20 dark:shadow-[0_22px_56px_-24px_rgba(0,0,0,0.4)]
      `}
    >
      <img
        src={resolved}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setLoadError(true)}
        className="block h-auto w-full max-h-[min(88vh,940px)] object-contain object-top"
      />
    </div>
  ) : (
    <div
      className={`
        flex aspect-[16/10] w-full min-h-[220px] items-center justify-center rounded-md border border-dashed
        border-ink/14 bg-ink/[0.02] dark:border-zinc-600/40 dark:bg-black/15 sm:min-h-[280px] md:aspect-auto md:min-h-[min(42vh,420px)]
      `}
    >
      <div className="px-6 text-center sm:px-8">
        <p className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-ink/38 dark:text-zinc-500">
          Product preview
        </p>
        <p className="mt-2 font-serif text-sm italic text-ink/32 dark:text-zinc-600">Coming soon</p>
      </div>
    </div>
  );

  const figure = (
    <figure
      className={`
        mx-auto w-full max-w-[75rem]
        px-1 sm:px-2 md:px-3
      `}
    >
      {frameInner}
    </figure>
  );

  if (bleed) {
    return (
      <div
        className={`
          relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2
          mt-20 mb-10 md:mt-28 md:mb-14
        `}
      >
        {figure}
      </div>
    );
  }

  return (
    <div className="mt-14 md:mt-20">
      {figure}
    </div>
  );
}
