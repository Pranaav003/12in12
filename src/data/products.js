/**
 * Single source of truth for all products.
 * Edit this file to update copy, slugs, status, and case-study sections.
 *
 * status (for filters & badges):
 * - "live" | "inProgress" | "comingSoon" | "underReview"
 *
 * blurCard: archive card shows blur + "Coming Soon!" overlay (months 3–12).
 *
 * Case study / detail page (optional):
 * - heroImage, heroImageAlt — featured screenshot under summary (public/ path, e.g. "/images/foo.png")
 * - productType — appears in metadata row (e.g. "Browser Extension")
 * - year — e.g. 2026, shown with month in metadata
 * - timeline — optional fact-strip line (e.g. "January 2026 — store review")
 * - builtWith — optional string[] for fact strip
 * - category — optional fact-strip label
 * - filedUnder — optional (e.g. "Systems / Tools / Attention") for case file strip
 * - archiveShelf — optional short shelf line on archive cards (e.g. "Tools · Attention")
 */

export const PRODUCTS = [
  {
    month: "January",
    monthIndex: 0,
    title: "Centra: Extension",
    slug: "centraextension",
    status: "live",
    statusLabel: "Live",
    description:
      "The original distraction deterrent. Block websites from distracting you, and kill procrastination.",
    blurCard: false,
    heroImage: "/images/centra-extension.png",
    heroImageAlt: "Screenshot of Centra: Extension",
    productType: "Browser Extension",
    year: 2026,
    timeline: "January 2026 — Chrome Web Store",
    builtWith: ["Chrome extension", "JavaScript"],
    category: "Productivity",
    filedUnder: "Systems / Tools / Attention",
    archiveShelf: "Tools · Attention",
    summary:
      "If the web app is where you commit to a session, the extension is where the internet stops getting a vote. Quiet enforcement — a line you draw, not a coach that talks back.",
    sections: {
      idea: `Most “productivity” software wants to be your conscience. I wanted something closer to a door: you decide what stays outside, and the room stays quiet.

The extension is that door for the browser — blocklists, a power switch, and enough coverage that the usual escape hatches don’t feel like loopholes.`,
      whyBuilt: `I kept breaking promises I made to myself. Willpower is a bad API; boundaries scale better. So this piece had to sit between the open web and the work I said I’d protect — the same story as the Centra app, but at the level of tabs and redirects instead of timers and copy.`,
      build: `The work wasn’t clever features; it was restraint. A popup you can actually finish using in ten seconds. Blocking that feels binary when you need it to — on or off — instead of another dashboard to babysit.

I chased edge cases anyway: places people actually procrastinate, and the gap between “blocked” and “still tempting.” That tension is most of the engineering — the rest is making it feel obvious.`,
      wrong: `The store moved slower than code. I also let myself maintain parallel paths while iterating — fine for learning, expensive for clarity. Shipping through someone else’s marketplace meant the release wasn’t when I pushed; it was when a reviewer said yes.`,
      learned: `A browser extension isn’t a mini app; it’s a negotiation with the platform. Permission language, host rules, and reviewer expectations are part of the user experience — not footnotes.

Trust isn’t a feature list. It’s consistency: the extension and the app have to feel like one decision, not two products that happen to share a name.`,
      outcome: `It’s live in the Chrome Web Store — the other half of the same promise as the Centra app, installable from a listing instead of a zip. Iteration doesn’t stop; the bar just moved from “pass review” to “earn the next user.”`,
    },
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/centra/mpkkmpcgdglpdmhflpjnpogigolicdop",
        note: "Install Centra: Extension",
      },
      {
        label: "Extension — GitHub",
        href: "https://github.com/Pranaav003/Centra/tree/main/FocusExtension",
        note: "Implementation lives here if you want the full picture.",
      },
      {
        label: "Full Centra repository",
        href: "https://github.com/Pranaav003/Centra",
        note: "App, API, and extension together.",
      },
    ],
  },
  {
    month: "February",
    monthIndex: 1,
    title: "Centra",
    slug: "centra",
    status: "live",
    statusLabel: "Live",
    description:
      "The extension behind the extension. Pushing you to be more productive with more tools, control, and a better user experience.",
    blurCard: false,
    heroImage: "/images/centra-hero.png",
    heroImageAlt:
      "Centra marketing hero on a dark background: headline “It’s like Do Not Disturb for your Browser,” subcopy on productivity and blocking, social proof, and an Add to Browser button.",
    productType: "Product",
    year: 2026,
    timeline: "Shipped February 2026",
    builtWith: ["Web app", "API", "Extension"],
    category: "Deep work",
    filedUnder: "Systems · Work · Productivity",
    archiveShelf: "Systems · Work",
    summary:
      "Centra is pitched as Do Not Disturb for the browser — a dark, direct promise on the landing page, then the slower work of earning it: identity, payments, focus sessions, and an extension that has to mean the same thing as the site.",
    sections: {
      idea: `A productivity app for the way people actually lose focus — not by lacking discipline, but by living half their life in a tab bar.

I didn’t want three disconnected demos. I wanted one product with three faces: the page that convinces you, the app that holds your session, and the browser piece that cuts off the escape routes. If those don’t feel like one decision, none of them deserve the trust.`,
      whyBuilt: `Shipping in public only works if there’s something real to point at. Centra had to be more than a landing — it needed accounts, persistence, and a path to paying for the thing, or it would stay a portfolio sketch.

The February ship was that anchor: not “look what I can build in a weekend,” but “here’s a product with seams, costs, and consequences.”`,
      build: `The hardest part wasn’t picking tools; it was holding a single voice across surfaces. The hero sells simplicity; the product has to deliver it without turning into another control panel.

I biased toward boring where it mattered — fewer novel abstractions, more clarity about what happens when someone starts a session, stops one, or comes back after failing yesterday. The polish that shows up in marketing has to survive contact with billing and auth.`,
      wrong: `Scope expands in three directions at once when you own web, API, and extension. I wrote a lot of documentation early — sometimes instead of testing the uncomfortable paths. Explaining the system isn’t the same as surviving it under load or bad Wi‑Fi or a confused first-time user.`,
      learned: `Alignment is a design problem. When the extension, the app, and the server disagree, the user feels the glitch before they can name it — wrong redirect, wrong state, wrong trust.

The insight that stuck: coherence beats cleverness. People forgive rough edges on one surface; they don’t forgive a product that feels like three.`,
      outcome: `February is the month I could say: here’s Centra as a live thing — messy, deployed, paired with January’s extension, which is now in the Chrome Web Store too. The repo holds the implementation details; this case file is the why and the scar tissue. BTW use code lifeofpranaav to get PRO for free. love you guys <3`,
    },
    links: [
      {
        label: "Chrome Web Store — extension",
        href: "https://chromewebstore.google.com/detail/centra/mpkkmpcgdglpdmhflpjnpogigolicdop",
        note: "Browser blocking piece of Centra.",
      },
      {
        label: "Centra on GitHub",
        href: "https://github.com/Pranaav003/Centra",
        note: "Code, deployment notes, everything too detailed for this page.",
      },
      {
        label: "Live site",
        href: "https://centra.pranaaviyer.com/",
        note: "Where the landing and product actually run.",
      },
    ],
  },
  {
    month: "March",
    monthIndex: 2,
    title: "Month Three",
    slug: "focusboard",
    status: "comingSoon",
    statusLabel: "Coming Soon",
    description: "Reserved for the third ship.",
    blurCard: true,
    summary:
      "Not a task manager. A board that dares to stay empty until you mean it.",
    sections: {
      idea: `FocusBoard imagines a desk with one sheet of paper — not a filing cabinet. You pin what must happen today; everything else waits in the margin, literally out of focus.

The bet is that clarity beats capacity.`,
      whyBuilt: `I’m tired of tools that reward inventory. I want something that rewards refusal — saying no to good ideas so the great one can breathe.`,
      build: `This month is still in motion. The build will start with constraints: no notifications, no teams layer, no “smart” ranking.

If it can’t be explained in one sentence, it doesn’t ship in v1.`,
      wrong: `Not shipped yet — so the failures are still ahead of me. Ask me again in four weeks.`,
      learned: `What I’ve learned so far is archival: every past project taught me that my first instinct is to over-build. FocusBoard is the experiment in under-building on purpose.`,
      outcome: `Documentation and links will appear here once the project is live. For now, this page is a promise — and a sketch.`,
    },
    links: [],
  },
  {
    month: "April",
    monthIndex: 3,
    title: "Month Four",
    slug: "clipmind",
    status: "comingSoon",
    statusLabel: "Coming Soon",
    description: "Reserved for the fourth ship.",
    blurCard: true,
    summary:
      "Lightning-fast clipping with memory you can trust — not another bookmark graveyard.",
    sections: {
      idea: `ClipMind starts from a guilty habit: I hoard tabs and screenshots like they’re ideas. They’re not — they’re anxiety in file form.

The idea is a capture flow so fast you actually use it, plus a retrieval story that respects context over chronology.`,
      whyBuilt: `Because my second brain was a junk drawer. I want a tool that feels like a notebook in the pocket, not a warehouse.`,
      build: `Planned as a tight loop: capture → tag with intent (not taxonomy) → resurface when relevant.

The engineering bet is on speed and search quality, not feature breadth.`,
      wrong: `Pre-mortem: I’ll probably over-engineer sync. I’m writing that down now so future-me feels seen.`,
      learned: `The lesson I’m carrying in: the best capture tools fail quietly — they never shame you for an empty inbox.`,
      outcome: `Coming soon. When ClipMind ships, this page will hold the real postmortem — not a rehearsal.`,
    },
    links: [],
  },
  {
    month: "May",
    monthIndex: 4,
    title: "Month Five",
    slug: "buildlog",
    status: "comingSoon",
    statusLabel: "Coming Soon",
    description: "Reserved for the fifth ship.",
    blurCard: true,
    summary:
      "Structured updates for builders who want accountability without influencer cosplay.",
    sections: {
      idea: `BuildLog is what I wish I had during every project that went quiet: a lightweight format for saying “here’s what I tried, here’s what broke, here’s what’s next” — without turning it into content marketing.`,
      whyBuilt: `This whole site is a build log at a distance. BuildLog narrows the lens — month by month, ship by ship.`,
      build: `The plan is radical simplicity: timestamps, decisions, screenshots optional, tone mandatory (honest).

If it feels like a performance, I’ve failed the design brief.`,
      wrong: `Again: not live yet. The risk is building a meta-tool instead of shipping the thing it tracks. I’m watching for that.`,
      learned: `Writing in public rewires your tolerance for embarrassment. BuildLog will test whether that tolerance can be productized — kindly.`,
      outcome: `Placeholder until May’s ship. Then: real scars, real screenshots, real links.`,
    },
    links: [],
  },
  {
    month: "June",
    monthIndex: 5,
    title: "Month Six",
    slug: "month-six",
    status: "comingSoon",
    statusLabel: "Coming Soon",
    description: "Reserved for the sixth ship.",
    blurCard: true,
    summary: "This slot is open — the work hasn’t started in public yet.",
    sections: {
      idea: `This product is still being developed. Documentation will be added once the project is live.`,
      whyBuilt: `—`,
      build: `—`,
      wrong: `—`,
      learned: `—`,
      outcome: `Check back after the June launch window.`,
    },
    links: [],
  },
  {
    month: "July",
    monthIndex: 6,
    title: "Month Seven",
    slug: "month-seven",
    status: "comingSoon",
    statusLabel: "Coming Soon",
    description: "Reserved for the seventh ship.",
    blurCard: true,
    summary: "This slot is open — the work hasn’t started in public yet.",
    sections: {
      idea: `This product is still being developed. Documentation will be added once the project is live.`,
      whyBuilt: `—`,
      build: `—`,
      wrong: `—`,
      learned: `—`,
      outcome: `Check back after the July launch window.`,
    },
    links: [],
  },
  {
    month: "August",
    monthIndex: 7,
    title: "Month Eight",
    slug: "month-eight",
    status: "comingSoon",
    statusLabel: "Coming Soon",
    description: "Reserved for the eighth ship.",
    blurCard: true,
    summary: "This slot is open — the work hasn’t started in public yet.",
    sections: {
      idea: `This product is still being developed. Documentation will be added once the project is live.`,
      whyBuilt: `—`,
      build: `—`,
      wrong: `—`,
      learned: `—`,
      outcome: `Check back after the August launch window.`,
    },
    links: [],
  },
  {
    month: "September",
    monthIndex: 8,
    title: "Month Nine",
    slug: "month-nine",
    status: "comingSoon",
    statusLabel: "Coming Soon",
    description: "Reserved for the ninth ship.",
    blurCard: true,
    summary: "This slot is open — the work hasn’t started in public yet.",
    sections: {
      idea: `This product is still being developed. Documentation will be added once the project is live.`,
      whyBuilt: `—`,
      build: `—`,
      wrong: `—`,
      learned: `—`,
      outcome: `Check back after the September launch window.`,
    },
    links: [],
  },
  {
    month: "October",
    monthIndex: 9,
    title: "Month Ten",
    slug: "month-ten",
    status: "comingSoon",
    statusLabel: "Coming Soon",
    description: "Reserved for the tenth ship.",
    blurCard: true,
    summary: "This slot is open — the work hasn’t started in public yet.",
    sections: {
      idea: `This product is still being developed. Documentation will be added once the project is live.`,
      whyBuilt: `—`,
      build: `—`,
      wrong: `—`,
      learned: `—`,
      outcome: `Check back after the October launch window.`,
    },
    links: [],
  },
  {
    month: "November",
    monthIndex: 10,
    title: "Month Eleven",
    slug: "month-eleven",
    status: "comingSoon",
    statusLabel: "Coming Soon",
    description: "Reserved for the eleventh ship.",
    blurCard: true,
    summary: "This slot is open — the work hasn’t started in public yet.",
    sections: {
      idea: `This product is still being developed. Documentation will be added once the project is live.`,
      whyBuilt: `—`,
      build: `—`,
      wrong: `—`,
      learned: `—`,
      outcome: `Check back after the November launch window.`,
    },
    links: [],
  },
  {
    month: "December",
    monthIndex: 11,
    title: "Month Twelve",
    slug: "month-twelve",
    status: "comingSoon",
    statusLabel: "Coming Soon",
    description: "Reserved for the final ship.",
    blurCard: true,
    summary: "The last month of the year — the capstone.",
    sections: {
      idea: `This product is still being developed. Documentation will be added once the project is live.`,
      whyBuilt: `—`,
      build: `—`,
      wrong: `—`,
      learned: `—`,
      outcome: `Check back after the December launch window.`,
    },
    links: [],
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

/** Detail pages are only available for shipped or active builds (not “coming soon”). */
export function isProductDetailPublic(product) {
  return (
    product.status === "live" ||
    product.status === "inProgress" ||
    product.status === "underReview"
  );
}

/** Archive / card filing stamp, e.g. "FILED: JAN 2026" */
export function archivalFiledLine(product) {
  const abbr = product.month.slice(0, 3).toUpperCase();
  return product.year != null ? `Filed: ${abbr} ${product.year}` : `Filed: ${abbr}`;
}

export const FILTER_KEYS = ["all", "live", "inProgress", "comingSoon"];

export function filterLabel(key) {
  switch (key) {
    case "live":
      return "Live";
    case "inProgress":
      return "In Progress";
    case "comingSoon":
      return "Coming Soon";
    default:
      return "All";
  }
}

/** Maps product status to filter tab (underReview counts as in-progress). */
export function productMatchesFilter(product, filterKey) {
  if (filterKey === "all") return true;
  if (filterKey === "live") return product.status === "live";
  if (filterKey === "inProgress")
    return product.status === "inProgress" || product.status === "underReview";
  if (filterKey === "comingSoon") return product.status === "comingSoon";
  return true;
}

export function shippedCount() {
  return PRODUCTS.filter((p) => p.status === "live").length;
}

/** Live, in progress, or under review — anything not purely “coming soon.” */
export function underwayCount() {
  return PRODUCTS.filter((p) => p.status !== "comingSoon").length;
}
