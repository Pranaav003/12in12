import { Link } from "react-router-dom";

export function MinimalHeader({ backTo = "/", backLabel = "Home" }) {
  return (
    <header className="mb-10 border-b border-ink/14 pb-5 dark:border-zinc-600/80 sm:mb-12 sm:pb-6">
      <Link
        to={backTo}
        className="group inline-flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/45 transition-colors hover:text-ink dark:text-zinc-500 dark:hover:text-zinc-100"
      >
        <span
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
          aria-hidden
        >
          ←
        </span>
        {backLabel}
      </Link>
    </header>
  );
}
