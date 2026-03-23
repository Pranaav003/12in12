import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  default: `
    rounded-sm border-ink bg-ink text-paper hover:bg-paper hover:text-ink
    dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950
    dark:hover:bg-zinc-950 dark:hover:text-zinc-100
    font-sans text-sm font-medium tracking-wide
  `,
  editorial: `
    rounded-sm border-black bg-black text-white hover:bg-white hover:text-black
    dark:border-white dark:bg-white dark:text-black
    dark:hover:bg-zinc-950 dark:hover:text-white
    font-serif text-[0.95rem] font-medium tracking-[0.02em]
  `,
};

export function CTAButton({ to, children, className = "", variant = "default" }) {
  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.99 }} className="inline-block">
      <Link
        to={to}
        className={`
          group inline-flex items-center gap-2 border px-8 py-3.5 transition-colors duration-300
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink
          dark:focus-visible:outline-zinc-100
          ${variants[variant] ?? variants.default}
          ${className}
        `}
      >
        <span>{children}</span>
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        >
          →
        </span>
      </Link>
    </motion.div>
  );
}
