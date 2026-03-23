import { useTheme } from "../theme/ThemeProvider";

function MoonIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SunIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
    </svg>
  );
}

export function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className={`
        fixed left-3 top-3 z-[60] flex h-10 w-10 items-center justify-center rounded-sm border-2
        border-ink/25 bg-newsprint/95 text-ink shadow-[2px_3px_0_rgba(0,0,0,0.12)] backdrop-blur-[2px]
        transition-colors hover:border-ink/40 hover:bg-newsprint
        dark:border-zinc-500 dark:bg-newsprintDark dark:text-zinc-100 dark:shadow-[2px_3px_0_rgba(0,0,0,0.5)]
        dark:hover:border-zinc-400 dark:hover:bg-zinc-800
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink
        dark:focus-visible:outline-zinc-100 sm:left-5 sm:top-5
      `}
    >
      {dark ? <SunIcon className="h-[18px] w-[18px]" /> : <MoonIcon className="h-[18px] w-[18px]" />}
    </button>
  );
}
