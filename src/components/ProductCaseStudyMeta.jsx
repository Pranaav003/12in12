export function ProductMetadataRow({ product }) {
  const monthU = product.month.toUpperCase();
  const year = product.year;
  const typeU = (product.productType ?? "Project").toUpperCase();
  const statusU = (product.statusLabel ?? "").toUpperCase();
  const head = year ? `${monthU} ${year}` : monthU;
  const line = [head, typeU, statusU].filter(Boolean).join(" · ");

  return (
    <p className="mt-5 max-w-3xl font-sans text-[11px] font-medium uppercase leading-relaxed tracking-[0.2em] text-ink/42 dark:text-zinc-500 sm:text-[11.5px] sm:tracking-[0.22em]">
      {line}
    </p>
  );
}

export function ProductFactStrip({ product }) {
  const rows = [];
  if (product.builtWith?.length) {
    rows.push({ label: "Built with", value: product.builtWith.join(" · ") });
  }
  if (product.timeline) {
    rows.push({ label: "Timeline", value: product.timeline });
  }
  if (product.category) {
    rows.push({ label: "Category", value: product.category });
  }
  if (product.filedUnder) {
    rows.push({ label: "Filed under", value: product.filedUnder });
  }

  if (rows.length === 0) return null;

  return (
    <div className="mt-10 border-y border-ink/10 py-7 dark:border-zinc-700/70 md:mt-12 md:py-8">
      <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
        {rows.map(({ label, value }) => (
          <div key={label}>
            <dt className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-ink/38 dark:text-zinc-500">
              {label}
            </dt>
            <dd className="mt-1.5 font-sans text-sm font-medium leading-snug text-ink/80 dark:text-zinc-300">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
