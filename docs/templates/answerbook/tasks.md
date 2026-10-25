# Answerbook — task outline

Recreation of the ColorLib **Threadline** Q&A-forum design (`threadline`) at `apps/answerbook`. The spec is the
authority: `openspec/specs/template-answerbook/spec.md`. Design notes: `docs/templates/answerbook/design-notes.md`.
Check boxes only as work ships.

> The page's thesis is **the answer outlives the thread**. Every band is a different proof of it: five real thread
> rows with vote/answer/view counts, eight curated tags, a four-step loop where *accept* is the step most forums skip,
> and a leaderboard ranked by *accepted* answers rather than volume. Build the **thread row** (stat rail + stretched
> link + answer chip) and the **leaderboard table** first — they are the design. Everything else is a Tailwind band.
> The only form on the page is the footer newsletter and the source's is dead; it must validate here. Copy lives in
> the spec §Content inventory; keep every number, change the brand.

## 0 — Scaffold

- [ ] `cp -r apps/mandrel apps/answerbook`; rename the package to `@free-react-templates/answerbook`
- [ ] `public/CNAME` = `answerbook.free.componentdock.com`; `homepage` = `https://answerbook.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/answerbook" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Space Grotesk 400/500/600/700** — no second face (mono comes from
      the system stack, exactly as the reference does it)
- [ ] `src/index.css`: `@theme` with `primary` 50–800 (`#f0fdfa` … `#115e59`, `600 = #0d9488`), `accent`
      100/300/400/800/**950** (`#fef3c7`, `#fcd34d`, `#fbbf24`, `#92400e`, `#451a03`), `--radius-lg .5rem`,
      `--radius-xl .75rem`, `--radius-2xl 1rem`, `--shadow-soft: 0 4px 16px -4px rgb(0 0 0 / .1)`
- [ ] `vite.config.ts` keeps `injectUiSource()`

## 1 — Content module (test first)

- [ ] `src/content.ts`: `BRAND = 'Answerbook'`, address *88 Kingsway, Manchester, M1 4BT*, one phone in E.164 form
      (`tel:+441612960000`), `hello@answerbook.example`, `COMPONENTDOCK_HREF`
- [ ] Typed arrays: `NAV_LINKS` (5 in-page anchors — Questions · Tags · Leaderboard · How it works · Contact),
      `HERO_FACTS` (4), `ROTATING_PHRASES` (3), `COUNTERS` (4, each `value` as the **final display string**),
      `QUESTIONS` (5, each `votes`, `answers`, `views`, `bounty?`, `accepted`, `title`, `body`, `tags`, `asked`),
      `TAGS` (8, each `name`, `blurb`, `questions`, `delta`), `STEPS` (4, each `n`, `title`, `body`, `footnote`),
      `MEMBERS` (5, each `initials`, `name`, `active?`, `knownFor`, `accepted`, `reputation`), `QUOTES` (3),
      `FAQS` (5), `FOOTER_COLUMNS` (3), `SOCIALS` (3)
- [ ] Tests: exact lengths; the five rows are `46/3/4.1k`, `88/7/12.4k/+150`, `31/0/890`, `124/11/31.7k`, `57/2/3.3k/+75`;
      the eight tag totals are `4210, 3180, 2940, 5620, 2110, 1780, 640, 1290` with deltas `38, 24, 19, 51, 16, 12, 7, 11`;
      the counter strings are `61,400`, `94%`, `18 min`, `71%`

## 2 — Chrome (`components/Chrome.tsx`)

- [ ] Skip link to `#main-content`, **2 px** `primary-600` scroll-progress bar (width = scroll %), back-to-top disc
      (48 px, `opacity` + `translateY` transition past the hero — never `display`)
- [ ] Cookie dialog (`role="dialog"`, slides up after 1.5 s, Accept / Decline persisted in
      `localStorage["cookie-consent"]` as `accepted` / `essential`, then removed)
- [ ] Sticky mobile CTA bar (`lg:hidden`): *Call now* (`tel:`) + **Ask a question** (`#contact`) — not *Book a Tour*
- [ ] `Reveal` wrapper: `opacity 0 → 1` + `translateY(20px) → 0`, 600 ms ease-out with the element's `delay`,
      one-shot IntersectionObserver (threshold 0.1, rootMargin `0 0 -10% 0`), and a **hard no-op under
      `prefers-reduced-motion: reduce`**

## 3 — Header (`components/Navbar.tsx`)

- [ ] Inline SVG wordmark (adapts with `currentColor`), five in-page anchors, 36 px `rounded-lg` dark toggle with an
      aria-label, `lg:hidden` menu button carrying `aria-expanded`, teal *Ask a Question* CTA
- [ ] White/80 + `backdrop-blur-lg` + 1 px `#e5e7eb`; `shadow-lg` only past 50 px of scroll
- [ ] Nav labels 14 / 500 `#4b5563`; **active** section `.nav-active` (#111827, 600) via IntersectionObserver
      (`rootMargin: -20% 0 -70%`), exactly one active at a time
- [ ] Mobile panel below the bar (`border-t`, `px-4 py-4`) listing the same anchors; icon swaps hamburger ↔ cross
- [ ] Dark toggle flips `.dark` on `document.documentElement`, writes `localStorage.theme`, re-applies it before first
      paint (no flash), and is labelled for screen readers

## 4 — Hero (`components/Hero.tsx`)

- [ ] Status pill: `primary-50` on `primary-200` border, 14 / 500 `primary-700`, with the **ping dot** (two nested
      2 px dots, `animate-ping` on the outer)
- [ ] `h1` two parts: fixed *"Someone has already"* + rotating phrase in `.text-gradient` (`#0d9488 → #2dd4bf`,
      background-clip text); 3 s interval, 300 ms fade-up per swap, index state initialised to 0, timer cleared on
      unmount, frozen under reduced motion
- [ ] Lede `max-w-2xl` 20 / 28; controls: filled *Ask a Question* (`→ #contact`), outlined *Browse questions*
      (`→ #questions`), ghost *Watch Demo* with a 40 px round teal play chip
- [ ] Fact row: `mt-16 border-t pt-10`, 2 columns at 390 / 4 at 640, figures 36 / 700, labels 14
- [ ] Photo card: 16 px radius, 1 px `#e5e7eb` ring, `shadow-2xl`, `aspect-[2/1]`, `picsum seed answerbook-1`
- [ ] Demo dialog: labelled close, local 16:9 placeholder panel (no third-party embed), Escape closes, focus returns

## 5 — Counter strip (`components/Counters.tsx`)

- [ ] `border-y border-gray-200 bg-gray-50 py-16 lg:py-20`; four figures 48 / 700 in `primary-600`, labels 14 / 500
- [ ] `CountUp`: 2 s cubic ease-out, `Intl.NumberFormat`, writes the **final display string** on the last frame
      (`18 min` never renders as `7 min` mid-count), triggers once at threshold 0.5
- [ ] Static final values when `IntersectionObserver` or `requestAnimationFrame` is missing (jsdom)

## 6 — Question list (`components/ThreadList.tsx`)

- [ ] Section header: chip *Newest* (mono 12 / 600, uppercase, `primary-50`/`primary-700`, 6 px), `h2` 36 / 700,
      lede, `.btn-primary` *Ask a Question*; `flex-wrap items-end justify-between`
- [ ] Row: `rounded-xl border` 1 px `#e5e7eb`, 20 px padding, `sm:flex-row`; left rail `sm:w-36` with
      `sm:border-r` — votes (`tabular-nums`), **answers as a filled `primary-600` chip** when non-zero, views grey
- [ ] Bounty chip (`accent-100` / `accent-800`, mono 12) and *Accepted* mark (check glyph + `primary-700`) share a
      top line; either may be absent
- [ ] Title 16 / 600 with a **stretched link** (`after:absolute after:inset-0`) on a `relative` row — the whole card
      is clickable and tag chips stay readable
- [ ] Body `line-clamp-2` 14 / 20; tag chips `gray-100` / `#374151` mono 12 at 4 px; timestamp right-aligned 12 grey
- [ ] Replace the self-referential `#questions` links with a `#contact` target (or an inert `aria-disabled` title)

## 7 — Tag grid (`components/TagGrid.tsx`)

- [ ] `max-w-7xl`, 1 / 2 / 4 columns (`sm` / `lg`), 16 px gap; card 12 px radius, 20 px padding, hover border
      `primary-400` + `shadow-sm`
- [ ] Card: mono tag chip (`primary-50` / `primary-700`, 4 px), 14 px blurb, then a `border-t` figure row —
      `N questions` grey, `+N today` teal, both mono 12 `tabular-nums`
- [ ] Keep the source order (postgres → migrations) — it is not alphabetical, it is by activity

## 8 — How it works (`components/Steps.tsx`)

- [ ] `ol` `md:grid-cols-4` with the **1 px gradient rule** absolutely at `top: 24px`
      (`primary-200 → primary-400 → accent-300`), hidden below `md`
- [ ] Number square 48 px, 12 px radius, **2 px** `primary-500`, white fill, mono 14 / 700, `relative z-10` so it
      punches through the rule
- [ ] Title 18 / 600, body 14 / 1.6, footnote in a white mono chip (12 px, 4 px radius)
- [ ] The four footnotes land exactly: *median 18 min to first answer*, *94% of questions get one*,
      *71% acceptance rate*, *68% of traffic is search*

## 9 — Leaderboard (`components/Leaderboard.tsx`)

- [ ] Real `<table>` (`border-separate border-spacing-0`, `min-w-[520px]`) inside an `overflow-x-auto` shell;
      `Known for` is `hidden sm:table-cell`
- [ ] Head 12 mono uppercase 500 grey (`tracking .6px`); figures mono `tabular-nums`, right-aligned; reputation in
      `primary-700` / 600
- [ ] Rank discs 28 px: `accent-400`+`accent-950`, `gray-300`, `amber-700`+`amber-50`, `gray-100` for 4–5
- [ ] Member cell: 36 px `rounded-lg` **square** initials chip on a `primary-500 → primary-700` gradient, name 16 / 600,
      optional *N days active* line in mono 12
- [ ] Footnote line under the table in 14 grey

## 10 — Testimonials (`components/QuoteCarousel.tsx`)

- [ ] Three cards, 16 px radius, 32 px padding, `shadow-soft`, five 20 px stars `primary-400`, quote 18 / 28 / 500,
      48 px circle avatar, name + role
- [ ] `perView` from a `matchMedia` hook (3 ≥1024, 2 ≥640, 1 below); translate the track by `index * slideWidth`
- [ ] Controls: 40 px white circular prev/next at `-left-4` / `-right-4` with aria-labels, plus generated dots
      (active = 8 px pill `primary-600`, inactive = 10 px `gray-300`); 5 s autoplay, pause on hover, reset on manual move
- [ ] At `lg` with 3 slides there is nothing to scroll: render three static cards and **no dead arrows or empty dot row**

## 11 — FAQ (`components/Faq.tsx`)

- [ ] `bg-white`, `divide-y` items, `py-6`, full-width left-aligned buttons, 32 px grey `+` disc
- [ ] Exclusive state: opening one closes the rest; panel height measured from the content (`max-height` + `opacity`,
      300 ms); `+` rotates 45°
- [ ] `aria-expanded`, `aria-controls` and `aria-hidden` on the collapsed panel (the source ships none)

## 12 — Closing band (`components/ClosingBand.tsx`)

- [ ] Gradient `to bottom right` `#0d9488 → #115e59`, 40 px dot grid at `opacity-10`, two 256 px `white/10 blur-3xl`
      discs at the top-right and bottom-left corners
- [ ] White `h2` 48 / 700, paragraph `primary-100`, white filled button (`16px 32px`, `primary-700` label) and
      `border-2 border-white/30` outline button that fills `white/10` on hover

## 13 — Footer (`components/Footer.tsx`)

- [ ] `#111827`, `pt-16 lg:pt-24`, 12-column grid: brand 4 / links 5 / newsletter 3
- [ ] Brand: wordmark, blurb, three 36 px `rounded-lg` social tiles; address, one `tel:` (valid URI), one `mailto:`
- [ ] Columns: **Community** (Ask a question · Tags · Leaderboard · Guidelines → real anchors), **Company**
      (in-page only), **Support** (Contact · Terms → anchors) — **not** the source's *Spaces* coworking column
- [ ] Newsletter: `gray-800` input with `gray-700` border and `ring-1` teal focus, Subscribe button; validation error
      for empty/malformed, confirmation + clear on success
- [ ] Bottom bar `border-t border-gray-800 py-8`; copyright in `gray-500`; links right; **Component Dock** credit
      linking `https://www.componentdock.com/`

## 14 — Responsive, a11y, provenance

- [ ] 1440 / 1024 / 768 / 390: `scrollWidth === clientWidth` at every width; the leaderboard scrolls inside its own
      shell, never the page
- [ ] One `h1`; one `h2` per band; `h3` only inside cards/steps
- [ ] Contrast: teal `#0f766e` on `#f0fdfa` (≈5.9:1), grey `#6b7280` on white (≈5.0:1), amber `#92400e` on
      `#fef3c7` (≈6.4:1), `accent-950` on `accent-400`
- [ ] No `colorlib` / `Threadline` / preview URL anywhere under `apps/answerbook`; picsum seed prefix `answerbook-`
- [ ] `scripts/verify-app.sh answerbook` green (typecheck, lint, 100 % coverage, build)
- [ ] `TEMPLATES.md`: append the row under `## Directory` between *Royalestate* and *Travelers* (33 → 34) at claim
      time; flip to `[x]` + surge URL after the deploy is green
