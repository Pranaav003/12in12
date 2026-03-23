/**
 * Numbered case-study section. Pass `index` (1-based) for "01 — Title" treatment.
 */
export function SectionBlock({ index, title, children, className = "" }) {
  const showNum = typeof index === "number" && index >= 1;

  return (
    <section className={className}>
      <h2 className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
        {showNum && (
          <>
            <span className="font-sans text-[0.65em] font-semibold tabular-nums tracking-[0.08em] text-ink/32 dark:text-zinc-500 md:text-[0.68em]">
              {String(index).padStart(2, "0")}
            </span>
            <span className="select-none font-light text-ink/15 dark:text-zinc-600" aria-hidden>
              —
            </span>
          </>
        )}
        <span className="font-serif text-[clamp(1.2rem,3.2vw,1.7rem)] font-semibold tracking-tight text-ink dark:text-zinc-100">
          {title}
        </span>
      </h2>
      <div className="mt-7 max-w-2xl space-y-5 font-sans text-[17px] leading-[1.8] text-ink/88 md:mt-8 md:text-lg md:leading-[1.76] dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}
