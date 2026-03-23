/** Editorial status stamp — filed / marked, not SaaS pills. */
const styles = {
  live:
    "border border-ink bg-ink text-paper dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950",
  inProgress:
    "border border-dashed border-ink/55 bg-transparent text-ink dark:border-zinc-400 dark:text-zinc-200",
  comingSoon:
    "border border-dotted border-ink/28 bg-transparent text-ink/58 dark:border-zinc-500 dark:text-zinc-400",
  underReview:
    "border border-dashed border-ink/50 bg-ink/[0.04] text-ink dark:border-zinc-400 dark:bg-white/[0.04] dark:text-zinc-200",
};

export function StatusBadge({ status, label }) {
  const variant = status === "underReview" ? "underReview" : styles[status] ? status : "comingSoon";
  const base =
    "inline-flex max-w-full items-center whitespace-nowrap px-2 py-1 text-[10px] font-sans font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em]";

  return (
    <span className={`${base} ${styles[variant]}`} role="status">
      {label}
    </span>
  );
}
