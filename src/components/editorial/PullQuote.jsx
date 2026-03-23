/** Editorial pull quote — left border bar, serif italic. */
export function PullQuote({ children, credit }) {
  return (
    <figure className="my-8 md:my-9">
      <blockquote
        className={`
          border-l-2 border-ink/22 pl-4 text-left font-serif text-[clamp(1.0625rem,2.4vw,1.3125rem)] italic leading-[1.52] text-ink/88
          dark:border-zinc-600 dark:text-zinc-200
        `}
      >
        {children}
      </blockquote>
      {credit && (
        <figcaption className="mt-4 pl-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/36 dark:text-zinc-500">
          {credit}
        </figcaption>
      )}
    </figure>
  );
}
