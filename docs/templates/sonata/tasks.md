# Sonata (ColorLib "Solmusic") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-sonata` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Solmusic" — free music-streaming website template
  (source: https://colorlib.com/wp/template/solmusic/). Listed in
  TEMPLATES.md under **Bootstrap (216)** (line 501; duplicate rows at line
  2086 under Landing Page (96) and line 2279 under Music (19) — same
  template, one app only).
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/solmusic/`. DOM fetched
  (`/tmp/solmusic.html`, 27,974 bytes) + stylesheet `css/style.css`
  (`/tmp/solmusic-style.css`, 26,032 bytes) + screenshot
  (`solmusic-free-template.jpg`, 1200×946, viewed in browser). All
  references verified live; screenshot cross-checks the DOM (headline
  "Listen to new music.", pink/white split-color headline, two pill CTAs,
  navy/pink palette).
- **Structure (top → bottom, all single-page):**
  1. Header — navy `#08192d` bar: split wordmark (accent "SOL" + white
     "MUSIC" → "Sonata" = accent "Son" + white "ata" or similar), nav
     (Home, About, Pages, Category, Playlist, Artist, Blog, Contact),
     user panel (Help | Login, "Create an account" in pink).
  2. Hero slider — 2 slides, navy `#0a183d`, left text (70px h2 with
     pink `<span>`, white `opacity:.6` p, "Download Now" pink pill +
     "Start free trial" `#383b70` pill), right flat vector illustration
     (singing duo) — use a picsum placeholder or skip the art and keep
     the navy panel balanced; slider dots.
  3. Intro band — white, left "Unlimited Access to 100K tracks" (60px),
     right paragraph + "Try it now" pink pill.
  4. How it works — navy + optional `how-to-bg.jpg` cover image; 3
     steps, each 57px pink circle icon (lucide: `UserPlus`, `ListChecks`
     / `CreditCard`, `Download`), heading, muted-white p.
  5. Concept — white, "Our Concept & artists" title + right paragraph; 4
     image cards (`border-radius: 40px`, h5 label): Soul Music, Live
     Concerts, Dj Sets, Live Streems (source typo — may fix to
     "Streams").
  6. Subscription — navy; left: "$15/month" headline, pink "Start a free
     trial now", paragraph, "Try it now" pill; right: `#1c294a` panel
     (`border-radius: 42px`) with 6 checkmarked perks (Play any track,
     Listen offline, No ad interruptions, Unlimited skips, High quality
     audio, Shuffle play) — lucide `Check` icons.
  7. Premium — white, "Why go Premium" title + right paragraph; 4
     features with 190px circular images (`border-radius: 50%`): No ad
     interruptions, High Quality, Listen Offline, Download Music.
  8. Footer — navy `#0a183d`: brand + about + social icons (muted
     `#6a7080`), 3 widget columns (About us / Products / Playlists),
     copyright bar — MUST link https://www.componentdock.com/ ("Component
     Dock") replacing the source's Colorlib credit.

## Implementation tasks (for the implementer stream)

1. Create app from a simple existing template: copy the smallest app
   folder, rename package to `@free-react-templates/sonata`, folder
   `apps/sonata`.
2. Read `openspec/specs/template-sonata/spec.md`; write tests first for
   every section (Vitest + RTL, 100% coverage enforced).
3. Implement sections in order: Navbar → Hero (slider) → Intro → How →
   Concept → Subscription → Premium → Footer → App composition.
4. Tokens in `src/index.css` `@theme`: `--color-brand: #fc0254`,
   `--color-navy: #0a183d`, `--color-navy-dark: #08192d`,
   `--color-navy-2: #1c294a`, `--color-indigo: #383b70`,
   `--color-muted: #6a7080`, font `Montserrat` via Google Fonts link in
   `index.html`.
5. Run `bash scripts/verify-app.sh sonata` (typecheck + lint + knip +
   fallow + 100% coverage tests + build). Fix root causes, re-run.
6. Visual QA: `npx vite preview` + browser; compare against live preview
   (`preview.colorlib.com/theme/solmusic/`) — section order, pill buttons,
   navy/pink rhythm, spacing.
7. Push `feat/template-sonata`, open PR with source/preview/tokens/diffs,
   merge immediately, `[~]` → `[x]` bookkeeping + surge URL +
   `npm run readme:status`.

## Fidelity notes / pitfalls

- The hero illustration (`img/hero-bg.png`) is a flat vector of a music
  duo — DO NOT copy the asset; use `https://picsum.photos/seed/sonata-1/600/600`
  or a lucide-free composed placeholder; the layout (6/6 split) matters
  more than the art.
- `.site-btn` hover in the source only keeps `color: #fff` — add a subtle
  darker-pink hover (`#e0024b`) for affordance; note the deviation in the
  PR.
- Sub-list panel + how icons + premium images are the three rounded-shape
  signatures (42px panel, 57px circle, 50% circle) — don't flatten them.
- Footer widget links: About us (Our Story, Sol Music Blog, History),
  Products (Music, Subscription, Custom Music, Footage), Playlists
  (Newsletter, Careers, Press, Contact) — exact names from the live DOM.
- The source nav has dropdowns (Pages/Category/Artist) on desktop — a
  static link list is an acceptable simplification; note it in the PR if
  skipped.
- jsdom: hero slider autoplay — implement with a simple interval + state;
  tests use fake timers wrapped in `act()` (RTL fake-timer pitfall).
- No dark-mode toggle in the source — skip the `.dark` class machinery.
- Keep copy paraphrased but same content kinds (headline + subtext + CTA
  per section; card title + caption).
