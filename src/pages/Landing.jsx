import { motion, useReducedMotion } from "framer-motion";
import { Layout } from "../components/Layout";
import { CTAButton } from "../components/CTAButton";
import { InstagramGlyph } from "../components/InstagramGlyph";
import { EditorialSectionLabel } from "../components/editorial/EditorialSectionLabel";

const INSTAGRAM_URL = "https://www.instagram.com/life.of.pranaav/";

function useStaggerVariants() {
  const reduce = useReducedMotion();
  const dy = reduce ? 0 : 10;
  return {
    stagger: {
      visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.06 },
      },
    },
    item: {
      hidden: { opacity: 0, y: dy },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: reduce ? 0.2 : 0.62, ease: [0.22, 1, 0.36, 1] },
      },
    },
  };
}

const bodyClass =
  "mx-auto max-w-[min(100%,36rem)] hyphens-auto text-pretty font-serif text-[1.0625rem] leading-[1.78] text-ink/88 text-center md:text-[1.125rem] md:leading-[1.74] dark:text-zinc-300";

export function Landing() {
  const { stagger, item } = useStaggerVariants();

  return (
    <Layout
      footerVariant="landing"
      className="selection:bg-amber-900/12 selection:text-ink dark:selection:bg-amber-200/15 dark:selection:text-zinc-100"
      mainClassName="flex flex-col justify-start"
    >
      <motion.div
        className="mx-auto w-full max-w-5xl px-6 pb-4 pt-12 sm:px-10 sm:pb-6 sm:pt-16 md:px-16 md:pb-8 md:pt-20 lg:px-20 lg:pt-24"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div className="text-center" variants={item}>
          <EditorialSectionLabel className="mb-10 md:mb-12">Volume 01 · Front matter</EditorialSectionLabel>
        </motion.div>

        <motion.header className="text-center" variants={item}>
          <p className="font-serif text-[clamp(1.625rem,3.8vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-ink dark:text-zinc-100">
            Welcome,
          </p>
          <h1 className="mt-1 font-serif text-[clamp(2.5rem,10.5vw,6.75rem)] font-bold leading-[0.9] tracking-[-0.045em] text-ink dark:text-zinc-100">
            To The Lab.
          </h1>
          <p className="mt-1 font-serif text-[clamp(1.875rem,6.5vw,4rem)] font-semibold leading-[1] tracking-[-0.038em] text-ink dark:text-zinc-100 md:mt-2">
            Seriously.
          </p>
        </motion.header>

        <motion.div
          className="mx-auto mt-12 max-w-xl border-t border-ink/12 pt-12 dark:border-zinc-700/70 md:mt-16 md:pt-16"
          aria-hidden
          variants={item}
        />

        <motion.div
          className={`mt-2 space-y-6 sm:mt-0 sm:space-y-7 md:space-y-8 ${bodyClass}`}
          variants={item}
        >
          <p>
            <span className="font-medium text-ink dark:text-zinc-100">A masterclass in creation.</span>
          </p>
          <p>
            Every month, I’m going to build one product,
            <br />
            document the process,
            <br />
            and release it publicly.
          </p>
          <p>
            Just building.
            <br />
            Just shipping.
            <br />
            Just trying.
          </p>
          <p>
            I’ll share everything here -
            <br />
            the ideas, the mistakes, and the launches.
          </p>
          <p>
            Most people spend years trying to avoid failure.
            <br />
            <span className="font-serif italic text-ink/92 dark:text-zinc-200">
              I’m going to spend a year chasing it.
            </span>
          </p>
          <div className="mt-8 space-y-4 border-t border-ink/10 pt-8 dark:border-zinc-700/50 md:mt-10 md:pt-10">
            <p>
              I’m Pranaav — a computer science graduate student focused on solving problems and building real
              things.
            </p>
            <p>This site is my attempt to stop overthinking and start shipping.</p>
          </div>
        </motion.div>

        <motion.div className="mt-10 flex flex-col items-center gap-3 md:mt-12" variants={item}>
          <EditorialSectionLabel className="text-center">Enter the archive</EditorialSectionLabel>
          <CTAButton to="/archive" variant="editorial">
            See what I’m building
          </CTAButton>
        </motion.div>

        <motion.div
          className="mx-auto mt-8 max-w-[min(100%,36rem)] text-center md:mt-10"
          variants={item}
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 font-sans text-[1rem] font-medium text-ink transition-colors hover:text-ink/70 dark:text-zinc-100 dark:hover:text-zinc-300"
          >
            <InstagramGlyph className="h-[1.3rem] w-[1.3rem] shrink-0 opacity-90 transition-opacity group-hover:opacity-100" />
            <span className="tracking-tight">@life.of.pranaav</span>
          </a>
          <p className="mt-3 font-sans text-[10px] font-semibold uppercase tracking-[0.26em] text-ink/40 dark:text-zinc-500">
            Field notes · social
          </p>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
