export function Footer({ variant = "default" }) {
  const isLanding = variant === "landing";

  /** Closing lines of the landing spread — no “site footer” chrome. */
  if (isLanding) {
    return (
      <footer className="mx-auto mt-8 w-full max-w-md px-4 pb-6 pt-2 text-center sm:mt-9 md:mt-10 md:pb-8">
        <div className="opacity-[0.82] dark:opacity-[0.88]">
          <p className="font-serif text-[8.5px] font-medium uppercase leading-relaxed tracking-[0.34em] text-ink/38 dark:text-zinc-500 sm:text-[9px] sm:tracking-[0.36em]">
            12 products in 12 months / Built in public
          </p>
          <p className="mt-2.5 font-serif text-[10.5px] italic leading-[1.55] text-ink/28 dark:text-zinc-600 sm:text-[11px]">
            — Lab dispatch · filed from the workshop —
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer
      className={`
        relative z-[1] mt-auto border-t-4 border-double border-ink/22 px-5 py-9 text-center sm:px-9
        dark:border-zinc-600/55
      `}
    >
      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.26em] text-ink/44 dark:text-zinc-500 sm:text-[11px] sm:tracking-[0.22em]">
        12 products in 12 months / Built in public
      </p>
      <p className="mt-2.5 font-serif text-xs italic text-ink/32 dark:text-zinc-600">
        — Lab dispatch · filed from the workshop —
      </p>
      <p className="mt-4 font-sans text-[9px] font-medium uppercase tracking-[0.28em] text-ink/30 dark:text-zinc-600">
        Year one · Filed 2026 · Not yet fit for print
      </p>
    </footer>
  );
}
