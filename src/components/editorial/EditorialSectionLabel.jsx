/** Small-caps publication kicker — section index, department, or filing line. */
export function EditorialSectionLabel({ children, className = "" }) {
  return (
    <p
      className={`
        font-sans text-[10px] font-bold uppercase leading-relaxed tracking-[0.26em] text-ink/46
        dark:text-zinc-500 sm:text-[11px] sm:tracking-[0.22em]
        ${className}
      `}
    >
      {children}
    </p>
  );
}
