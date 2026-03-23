import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { EditorialSectionLabel } from "../components/editorial/EditorialSectionLabel";

export function NotFound() {
  return (
    <Layout>
      <div className="mx-auto max-w-lg pb-20 pt-12 text-center md:pb-28 md:pt-16">
        <EditorialSectionLabel className="text-center">Errata · 404</EditorialSectionLabel>
        <h1 className="mt-5 font-serif text-3xl font-bold tracking-tight text-ink dark:text-zinc-100 md:text-4xl">
          This page doesn’t exist.
        </h1>
        <p className="mt-4 font-sans text-ink/65 dark:text-zinc-400">
          That slug isn’t part of the archive yet — or it never will be. Either way, you’re early or
          lost. Both are allowed.
        </p>
        <Link
          to="/archive"
          className="mt-10 inline-block rounded-sm border-2 border-ink px-6 py-3 font-sans text-sm font-semibold text-ink shadow-[1px_2px_0_rgba(0,0,0,0.08)] transition-colors hover:bg-ink hover:text-paper dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-950"
        >
          Go to archive
        </Link>
      </div>
    </Layout>
  );
}
