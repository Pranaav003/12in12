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
        label: "Live site",
        href: "https://centra.pranaaviyer.com/",
        note: "Where the landing and product actually run.",
      },
      {
        label: "Centra on GitHub",
        href: "https://github.com/Pranaav003/Centra",
        note: "Code, deployment notes, everything too detailed for this page.",
      },
    ],
  },
  {
    month: "March",
    monthIndex: 2,
    title: "Debrief",
    slug: "debrief",
    status: "live",
    statusLabel: "Live",
    description:
      "Turn any meeting transcript into decisions, action items, and a follow-up email — automatically.",
    blurCard: false,
    heroImage: "/images/debrief.png",
    heroImageAlt:
      "DeBrief app in dark mode: title and tagline, Paste transcript / Upload audio toggle, transcript text area, Load example transcript, and Generate DeBrief button.",
    productType: "Web app",
    year: 2026,
    timeline: "Shipped March 2026",
    builtWith: ["Web app", "Transcription", "LLM"],
    category: "Meetings",
    filedUnder: "Work / Meetings / Follow-through",
    archiveShelf: "Meetings · Clarity",
    summary:
      "Meetings are where decisions get made and where they get lost. Debrief is the thirty-second bridge: paste a transcript or upload audio from Zoom, Meet, Teams, or a phone call, and get a structured debrief — not a wall of bullets, but outputs shaped for the kind of meeting you actually had.",
    sections: {
      idea: `Most “meeting notes” products are really text dumps with better fonts. I wanted something closer to a clerk who knows the genre: a standup wants shipped work and blockers; a sales call wants pain, objections, and a deal signal; a 1:1 wants feedback themes and commitments.

The idea isn’t summarization for its own sake — it’s extraction with intent. Decisions, action items with owners, open questions, and a follow-up email you could send without rewriting the room.`,
      whyBuilt: `Everyone has left a call thinking “I should write that up” and then didn’t. Two weeks later, the same conversation happens again because nothing durable survived the hang-up.

I built Debrief for that exact failure mode — founders, managers, ops leads, anyone who runs meetings and would rather act on them than document them by hand.`,
      build: `The product loop had to stay brutally short: paste or upload, generate, edit inline, share. Share links with viewer or editor access, optional chat against the meeting after the fact, and email the formatted debrief to attendees.

“No account needed” on the marketing side had to stay honest for viewers — a clean rendered debrief on the link, not a login wall. The rest of the build was the unglamorous work: permissions, revocation, autosave on edits, and keeping the output structured when the model wants to ramble.`,
      wrong: `Meeting-type detection is easy to demo and hard to earn trust on — edge cases where the transcript is messy, hybrid, or nobody said the quiet part out loud. Audio paths add their own failure modes (quality, diarization, latency).

I’m still calibrating how much “magic” to promise on the landing page versus what feels reliably repeatable in production.`,
      learned: `Generic summarization is a commodity; structure tied to meeting intent is the product. Users don’t want more text — they want fewer repeated meetings.

Shipping share-by-link and email early taught me that distribution is part of the UX: if the debrief doesn’t look credible in someone else’s inbox, the loop breaks before the AI part even matters.`,
      outcome: `Debrief is live at debrief.pranaaviyer.com — paste a transcript, try an example, upload audio, share a link, send email. The roadmap on the site (Zoom import, Meet, Slack, calendar, team workspaces, action-item tracking) is the honest “what’s next” list; March was about shipping the core loop, not pretending the integrations were already done.`,
    },
    links: [
      {
        label: "Live site",
        href: "https://debrief.pranaaviyer.com/",
        note: "Try it — paste a transcript or load the example; no account required to explore.",
      },
      {
        label: "Feature requests",
        href: "mailto:dev@pranaaviyer.com",
        note: "Listed on the product roadmap section for feedback and requests.",
      },
      {
        label: "Debrief on GitHub",
        href: "https://github.com/Pranaav003/Debrief",
        note: "Source code and implementation details.",
      },
    ],
  },
  {
    month: "April",
    monthIndex: 3,
    title: "Signal",
    slug: "signal",
    status: "live",
    statusLabel: "Live",
    description:
      "Reddit lead intelligence for small businesses — describe what you sell, Signal finds the conversations.",
    blurCard: false,
    productType: "Web app",
    year: 2026,
    timeline: "Shipped April 2026",
    builtWith: ["React", "Express", "Postgres", "Redis", "LLM"],
    category: "Lead gen",
    filedUnder: "Work / Distribution / Reddit",
    archiveShelf: "Leads · Reddit",
    summary:
      "Most founders know their niche in theory and still have no idea where those people are actually complaining online. Signal is the listening layer: describe what you’re building in plain English, and it turns that into Reddit search plans, scored leads, AI draft replies, and a performance view for what you posted back.",
    sections: {
      idea: `Cold outreach and generic keyword alerts both miss the same thing — context. The useful signal on Reddit isn’t “someone said a word I track.” It’s someone describing a problem your product could solve, in a thread where a helpful reply wouldn’t feel like spam.

I wanted a monitor, not a dashboard. You describe the customer and the pain; Signal figures out what to search, where to look, and which posts are worth opening.`,
      whyBuilt: `I kept watching builders hunt for customers in the wrong places — blasting DMs, buying lists, or refreshing r/smallbusiness manually and calling it research.

April’s bet was narrower: if your early users live on Reddit anyway, the product should do the tedious part — query planning, scanning, scoring, triage — so you spend time on replies that might actually land.`,
      build: `The loop is create monitor → AI planner generates queries and subreddit targets → background worker scans Reddit on a schedule → leads land in an inbox with relevance scores, “why this score,” and optional AI draft replies.

Under the hood that meant a real job pipeline, not a cron script pretending to be a product: Express API, React frontend, Postgres for monitors and leads, Redis/Bull queues, and a separate worker process that actually processes scans. The UI had to stay honest while scans run — progress in the background, unread tabs, snooze/mute/delete, reply tracking with upvote stats on a Performance page.

The AI pieces split cleanly: a planner that rewrites your product description into search strategy (including marketplace-style demand vs. supply sides), and a classifier that decides whether a post is a lead worth showing — with evidence, not vibes.`,
      wrong: `Infrastructure always wants to become the product. Getting Redis, Postgres, API, worker, and frontend all healthy locally — and then again on Render’s free tier with a worker exposed as a web service — ate more of April than any landing-page copy.

Reddit is also a hostile API surface: rate limits, fit warnings for products that don’t belong there, and scans that take three to five minutes when you’d prefer instant gratification. I shipped the honest version of that timing in the onboarding instead of hiding it.`,
      learned: `The best demo is a monitor you’d actually run. Signal gets better when the description names a real customer and problem — the planner, the preview, and the leads all improve together. That’s less a marketing line than the core design constraint.

Lead quality beats lead volume. Showing someone why a post matched — and letting them snooze, mute, or delete without guilt — matters as much as the scan itself.`,
      outcome: `Signal is live at signal.pranaaviyer.com with monitors, scheduled scans, scored leads, draft replies, and reply performance tracking. The repo documents the full stack and a Render blueprint for demo deploys; April was the month the worker pipeline and inbox had to be real, not a mocked “AI finds leads” slide deck.`,
    },
    links: [
      {
        label: "Live site",
        href: "https://signal.pranaaviyer.com/",
        note: "Create a monitor, run a scan, review scored Reddit leads and draft replies.",
      },
      {
        label: "Signal on GitHub",
        href: "https://github.com/Pranaav003/Signal",
        note: "Full stack — API, worker, frontend, deploy blueprint, and local dev scripts.",
      },
    ],
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
