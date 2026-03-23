import { Footer } from "./Footer";
import { ThemeToggle } from "./ThemeToggle";

export function Layout({
  children,
  footerVariant = "default",
  className = "",
  mainClassName = "",
}) {
  return (
    <div
      className={`
        relative z-[1] min-h-screen overflow-x-hidden bg-desk
        bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(255,255,255,0.14),transparent_50%)]
        dark:bg-deskDark
        dark:bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_45%)]
        ${className}
      `}
    >
      <ThemeToggle />
      <div className="mx-auto flex min-h-screen w-full max-w-[min(100%,72rem)] flex-col px-3 pb-10 pt-16 sm:px-6 sm:pb-14 sm:pt-[4.5rem]">
        <div
          className={`
            news-clipping relative flex w-full flex-1 flex-col border-2 border-ink/20 bg-newsprint
            shadow-clipping
            dark:border-zinc-600/70 dark:bg-newsprintDark dark:shadow-clippingDark
            sm:rotate-[0.35deg]
          `}
        >
          <main
            className={`
              relative z-[1] flex-1 px-5 py-8 sm:px-9 sm:py-10 md:px-12 md:py-12
              ${mainClassName}
            `}
          >
            {children}
            {footerVariant === "landing" && <Footer variant="landing" />}
          </main>
          {footerVariant !== "landing" && <Footer variant={footerVariant} />}
        </div>
      </div>
    </div>
  );
}
