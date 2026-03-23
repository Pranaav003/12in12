import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "../components/Layout";
import { MinimalHeader } from "../components/MinimalHeader";
import { ProductCard } from "../components/ProductCard";
import { EditorialSectionLabel } from "../components/editorial/EditorialSectionLabel";
import { PullQuote } from "../components/editorial/PullQuote";
import { ArchivalStats } from "../components/editorial/ArchivalStats";
import {
  PRODUCTS,
  FILTER_KEYS,
  filterLabel,
  productMatchesFilter,
  shippedCount,
  underwayCount,
} from "../data/products";

export function Archive() {
  const [filter, setFilter] = useState("all");
  const filtered = useMemo(
    () => PRODUCTS.filter((p) => productMatchesFilter(p, filter)),
    [filter],
  );
  const shipped = shippedCount();
  const underway = underwayCount();

  return (
    <Layout>
      <div className="mx-auto max-w-6xl pb-20 pt-4 md:pb-28 md:pt-6">
        <MinimalHeader backTo="/" backLabel="Back to the lab" />

        <header className="max-w-3xl text-left">
          <EditorialSectionLabel>Section A · The archive</EditorialSectionLabel>
          <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.15rem)] font-bold leading-[1.06] tracking-tight text-ink dark:text-zinc-100">
            12 Months. 12 Products.
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-[1.75] text-ink/62 dark:text-zinc-400 md:text-lg md:leading-[1.72]">
            Each month, one idea. Case studies open for live and in-progress builds only; everything else
            stays in the archive until it ships.
          </p>
          <PullQuote>
            {"\u201C"}Fail Fast, Fail Often{"\u201D"}
          </PullQuote>
          <ArchivalStats shipped={shipped} underway={underway} />
        </header>

        <div
          className="mt-8 h-1 w-full bg-[#e0ddd4] dark:bg-[#1f1c19] md:mt-10"
          role="separator"
          aria-hidden
        />

        <div className="mt-6 flex flex-wrap gap-2 md:mt-7">
          {FILTER_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`
                border px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.12em]
                transition-colors duration-300
                ${
                  filter === key
                    ? "border-ink bg-ink text-paper dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950"
                    : "border-ink/22 bg-transparent text-ink/45 hover:border-ink/32 hover:text-ink dark:border-zinc-600 dark:text-zinc-500 dark:hover:border-zinc-400 dark:hover:text-zinc-200"
                }
              `}
            >
              {filterLabel(key)}
            </button>
          ))}
        </div>

        <div
          className="mt-6 h-px w-full bg-ink/14 dark:bg-zinc-700/90"
          role="separator"
          aria-hidden
        />

        <AnimatePresence mode="popLayout">
          <motion.ul
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-9 lg:grid-cols-3 lg:gap-10 md:mt-12"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </motion.ul>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="mt-14 font-sans text-sm text-ink/48 dark:text-zinc-500">
            No records match this filter.
          </p>
        )}
      </div>
    </Layout>
  );
}
