import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StatusBadge } from "./StatusBadge";
import { archivalFiledLine, isProductDetailPublic } from "../data/products";

const recordShellBase = `
  group relative flex h-full flex-col border border-line bg-transparent p-7
  transition-[border-color,transform,opacity] duration-300 ease-out
  dark:border-zinc-600/55 dark:bg-transparent
`;

const recordInteractive = `
  hover:border-ink/32 hover:-translate-y-px
  dark:hover:border-zinc-500/80
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink
  dark:focus-visible:outline-zinc-100
`;

const recordLocked = `cursor-not-allowed opacity-[0.9]`;

export function ProductCard({ product, index = 0 }) {
  const { month, title, slug, status, statusLabel, description, blurCard, archiveShelf } = product;
  const open = isProductDetailPublic(product);
  const filed = archivalFiledLine(product);

  const recordShell = `${recordShellBase} ${blurCard ? "overflow-hidden" : ""}`;

  const blurBody =
    blurCard &&
    "pointer-events-none select-none blur-[18px] opacity-[0.26] saturate-[0.5] contrast-90";

  const inner = (
    <>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-1">
        <div className="min-w-0">
          <span className="block font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ink/42 dark:text-zinc-500">
            {month}
          </span>
          <span className="mt-2 block font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/34 dark:text-zinc-600">
            {filed}
          </span>
        </div>
        <div className="shrink-0 justify-self-end self-start">
          <StatusBadge status={status} label={statusLabel} />
        </div>
      </div>
      <div className={`mt-6 flex min-h-0 flex-1 flex-col ${blurCard ? "relative" : ""}`}>
        <div className={blurCard ? blurBody : "flex min-h-0 flex-1 flex-col"}>
          <h3 className="font-serif text-[1.45rem] font-semibold leading-tight tracking-tight text-ink md:text-[1.55rem] dark:text-zinc-100">
            {title}
          </h3>
          {archiveShelf && (
            <p className="mt-3 font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/36 dark:text-zinc-500">
              Filed under · {archiveShelf}
            </p>
          )}
          <p className="mt-4 flex-1 font-sans text-[15px] leading-[1.65] text-ink/68 dark:text-zinc-400">
            {description}
          </p>
        </div>
        {blurCard && (
          <div
            className={`
              pointer-events-none absolute inset-0 flex items-center justify-center
              bg-newsprint/60 backdrop-blur-2xl backdrop-saturate-150
              dark:bg-white/[0.07] dark:backdrop-blur-2xl dark:backdrop-saturate-150
            `}
            aria-hidden
          >
            <span
              className={`
                border px-4 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.22em] shadow-sm
                border-ink/18 bg-white/95 text-ink backdrop-blur-sm
                dark:border-white/20 dark:bg-zinc-900/85 dark:text-zinc-50 dark:backdrop-blur-md
                dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
              `}
            >
              In progress · Not yet filed
            </span>
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      {open ? (
        <Link to={`/product/${slug}`} className={`${recordShell} ${recordInteractive}`}>
          {inner}
        </Link>
      ) : (
        <div
          className={`${recordShell} ${recordLocked}`}
          aria-label={`${title}: case file closed until this build is live or in progress.`}
        >
          {inner}
        </div>
      )}
    </motion.li>
  );
}
