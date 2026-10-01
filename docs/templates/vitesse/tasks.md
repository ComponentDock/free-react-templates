# Vitesse (ColorLib "Logisticexpress") — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-vitesse`. Recreation name:
> **Vitesse** (NEW name — the ColorLib source keeps its name
> "Logisticexpress"; preview `<title>` "Transportation HTML-5
> Template").
>
> Spec: `openspec/specs/template-vitesse/spec.md` (tokens, Gherkin
> requirements, verification checklist). Design research:
> `docs/templates/vitesse/design-notes.md` (DOM skeleton +
> section-by-section notes).

## Implementation outline (for the implementer)

1. **Scaffold** — copy the simplest existing app into
   `apps/vitesse`; rename package to
   `@free-react-templates/vitesse`; set `"homepage"` +
   `public/CNAME` to `vitesse.free.componentdock.com`; run
   `npm install` at repo root (lockfile registration); register
   `injectUiSource()` in `vite.config.ts` (never remove).
2. **Tokens + fonts** — Google Fonts `<link>` in `index.html` (Teko
   500/600/700 + Barlow 400/500/600/700); `@theme` tokens in
   `src/index.css` (primary `#ff5f13`, accent `#f15f22`, indigo
   `#1f2b7b`, header `#000c20`, footer `#121212`, dark `#2c234d`,
   body `#677294`, muted `#717b9b`, quote `#a4acc3`, footertext
   `#c4c4c4`, cardborder `#e1ebf7`, infobg `#f9f9f9`, soft
   `#f5f5f5`, arrow `#616373`); body default Barlow; `.btn`
   utilities: radius 5px, uppercase, 1px tracking, `#ff5f13` +
   `#e0581e` slide-in hover.
3. **Sections top-down** (one component each, order 1:1):
   `Header` (utility bar + nav + Blog dropdown + Get A Quote) →
   `Hero` (h1 + tracking form + state-based slider arrows) →
   `InfoBar` (3 items) → `Services` (3 category cards) → `About`
   (text + layered images) → `QuoteForm` (10 fields + select + 4
   radios, zod/react-hook-form validation, local success state) →
   `Team` (3 cards, caption hover-overlay + rising socials) →
   `Testimonials` (≥3 slides + white CTA card) → `Blog` (3 cards
   with date badge) → `Footer` (statement strip + 4 columns +
   Component Dock link).
4. **Assets** — `picsum.photos/seed/vitesse-<section>-<n>`; icons
   from `lucide-react` only; zero ColorLib references anywhere in
   `apps/vitesse` (comments included).
5. **Tests (TDD, 100% coverage)** — one `describe` per component,
   scenario-style `it` blocks mirroring the spec; assert
   classes/structure (jsdom has no layout); cover: dropdown
   open/close (hover + keyboard), hamburger `aria-expanded`, slider
   prev/next, tracking-form submit → local ack, quote-form
   validation block/success, team caption hover class flip,
   testimonial slide advance.
6. **Verify + ship** — `scripts/verify-app.sh vitesse`; PR
   `feat/template-vitesse` (source slug `logisticexpress` + preview
   URL + screenshot URL + tokens in the description); squash-merge;
   then bookkeeping (`[x]` + surge URL + `npm run readme:status`).

## Prep research summary (2026-10-01)

- Preview reachable: HTTP 200, 39,236 B — all tokens/structure in
  the spec; no re-fetch needed.
- Screenshot: real JPEG 1200×946 — dark header + hero + info bar.
- Signature look: dark `#000c20`/`#121212` chrome, orange
  `#f15f22`/`#ff5f13` accents, Teko 95px hero h1, hero tracking
  form, caption-hover team cards, statement-strip footer.
