import { Link, useParams } from "react-router-dom";
import { getProductBySlug, isProductDetailPublic } from "../data/products";
import { Layout } from "../components/Layout";
import { MinimalHeader } from "../components/MinimalHeader";
import { SectionBlock } from "../components/SectionBlock";
import { EditorialSectionLabel } from "../components/editorial/EditorialSectionLabel";
import { FeaturedImage } from "../components/FeaturedImage";
import { ProductFactStrip, ProductMetadataRow } from "../components/ProductCaseStudyMeta";
import { NotFound } from "./NotFound";

function BodyParagraphs({ text }) {
  if (!text || text.trim() === "—") {
    return <p className="text-ink/45 dark:text-zinc-500">—</p>;
  }
  const parts = text.split(/\n\n+/).filter(Boolean);
  return parts.map((para, i) => (
    <p key={i} className="whitespace-pre-line dark:text-zinc-300">
      {para.trim()}
    </p>
  ));
}

export function ProductDetail({ product }) {
  const isPlaceholder =
    product.status === "comingSoon" && product.monthIndex >= 5;

  return (
    <Layout>
      <article className="mx-auto w-full max-w-4xl pb-24 pt-4 md:pb-32 md:pt-6">
        <MinimalHeader backTo="/archive" backLabel="The archive" />

        <header className="border-b-2 border-ink/12 pb-10 dark:border-zinc-700 sm:border-b-4 sm:border-double sm:pb-12 md:pb-14">
          <EditorialSectionLabel>Case file · Lab record</EditorialSectionLabel>
          <h1 className="mt-5 font-serif text-[clamp(2.15rem,5.5vw,3.5rem)] font-bold leading-[1.06] tracking-tight text-ink dark:text-zinc-100">
            {product.title}
          </h1>
          <ProductMetadataRow product={product} />
          <ProductFactStrip product={product} />
          <p className="mt-10 max-w-2xl font-sans text-lg leading-[1.75] text-ink/88 dark:text-zinc-300 md:mt-12 md:text-xl md:leading-[1.72]">
            {product.summary}
          </p>
        </header>

        <FeaturedImage
          bleed
          src={product.heroImage}
          alt={product.heroImageAlt ?? `${product.title} preview`}
        />

        {product.status === "comingSoon" && (
          <div className="mt-14 border-2 border-ink/18 bg-white/30 p-6 font-sans text-[15px] leading-relaxed text-ink/72 dark:border-zinc-600 dark:bg-black/20 dark:text-zinc-400 md:mt-16 md:p-7 md:text-base">
            {isPlaceholder ? (
              <>
                This product is still being developed. Documentation will be added once the project
                is live.
              </>
            ) : (
              <>
                This month’s build is still in motion. What you’re reading is a sketch — honest,
                incomplete, and subject to the usual public humbling. Full documentation and links
                will land when the project ships.
              </>
            )}
          </div>
        )}

        <div className="mt-12 border-t-2 border-ink/12 pt-12 dark:border-zinc-700/90 md:mt-16 md:pt-16 lg:mt-20 lg:pt-20">
          <div className="divide-y divide-ink/10 dark:divide-zinc-700/75">
            <SectionBlock index={1} title="The Idea" className="pb-16 md:pb-[5.5rem]">
              <BodyParagraphs text={product.sections.idea} />
            </SectionBlock>
            <SectionBlock index={2} title="Why I Built It" className="py-16 md:py-[5.5rem]">
              <BodyParagraphs text={product.sections.whyBuilt} />
            </SectionBlock>
            <SectionBlock index={3} title="The Build" className="py-16 md:py-[5.5rem]">
              <BodyParagraphs text={product.sections.build} />
            </SectionBlock>
            <SectionBlock index={4} title="What Went Wrong" className="py-16 md:py-[5.5rem]">
              <BodyParagraphs text={product.sections.wrong} />
            </SectionBlock>
            <SectionBlock index={5} title="What I Learned" className="py-16 md:py-[5.5rem]">
              <BodyParagraphs text={product.sections.learned} />
            </SectionBlock>
            <SectionBlock index={6} title="Outcome" className="py-16 md:py-[5.5rem]">
              <BodyParagraphs text={product.sections.outcome} />
            </SectionBlock>
            <SectionBlock index={7} title="Links" className="pt-16 pb-4 md:pt-[5.5rem] md:pb-6">
              {product.links?.length > 0 ? (
                <ul className="space-y-4">
                  {product.links.map((link, i) => (
                    <li key={`${link.label}-${i}`}>
                      <a
                        href={link.href}
                        className="font-medium text-ink underline decoration-ink/25 underline-offset-[6px] transition-colors hover:decoration-ink dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
                      >
                        {link.label}
                      </a>
                      {link.note && (
                        <span className="mt-1.5 block text-sm text-ink/50 dark:text-zinc-500">
                          {link.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-ink/50 dark:text-zinc-500">
                  Links will be added when this project is live.
                </p>
              )}
            </SectionBlock>
          </div>
        </div>

        <p className="mt-20 border-t-2 border-ink/12 pt-12 font-sans text-sm text-ink/48 dark:border-zinc-700 dark:text-zinc-500 sm:border-t-4 sm:border-double md:mt-24 md:pt-14">
          <Link
            to="/archive"
            className="text-ink underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-ink/50 dark:text-zinc-200 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
          >
            ← Back to archive
          </Link>
        </p>
      </article>
    </Layout>
  );
}

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product || !isProductDetailPublic(product)) {
    return <NotFound />;
  }

  return <ProductDetail product={product} />;
}
