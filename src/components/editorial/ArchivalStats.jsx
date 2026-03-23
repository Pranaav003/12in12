/** Single-line shipped / underway counts — bold numerals, muted copy. */
export function ArchivalStats({ shipped, underway, total = 12 }) {
  return (
    <p className="mt-8 font-sans text-sm leading-relaxed text-ink/52 dark:text-zinc-500 md:mt-10">
      <span className="font-bold text-ink dark:text-zinc-200">{shipped}</span>
      <span className="font-normal"> / {total} shipped · </span>
      <span className="font-bold text-ink dark:text-zinc-200">{underway}</span>
      <span className="font-normal"> / {total} underway</span>
    </p>
  );
}
