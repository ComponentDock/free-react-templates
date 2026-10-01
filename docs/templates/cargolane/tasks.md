# Cargolane (ColorLib "Logis") — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-cargolane`. Recreation name:
> **Cargolane** (NEW name — the ColorLib source keeps its name "Logis";
> preview `<title>` "Logistics — Colorlib Website Template").
>
> Full replication research (live DOM skeleton, CSS tokens, screenshot
> analysis, fidelity decisions) lives in `design-notes.md` in this
> folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-cargolane/spec.md`.

## Quick facts

- **ColorLib item:** "Logis" (TEMPLATES.md line 2963, "## Transportation
  (22)" at line 2947). Slug `logis` appears exactly ONCE.
- **Preview URL:** ✅ REACHABLE —
  https://preview.colorlib.com/theme/logis/ (HTTP 200, 31,165 B,
  verified 2026-10-01). Stylesheets: `css/style.css` (25,007 B,
  canonical tokens) + `css/bootstrap.min.css` (27,894 B, primary
  overridden to #f16821). All tokens captured — do not re-fetch.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/logis-free-template.jpg
  — ⚠️ real **AVIF 1200×946** despite `.jpg` (54,325 B). Shows hero +
  About top. ⚠️ its navbar shows 6 links; **live preview is canonical
  (8 links — adds How It Works, Our Team)**.
- **Signature tokens:** orange **`#f16821`** (single accent), Poppins
  **300** body (`#4d4d4d`, lh 1.7), square uppercase buttons
  (`letter-spacing: .2em`), heading underline **80×3px `#f16821`**,
  green **`#8bc34a`** check bullets, dark-overlay sections
  (`rgba(0,0,0,.4)`), dark footer **`#333333`** / text `#737373`,
  light sections **`#edf0f5`**/`#f4f5f9`, meta gray `#b3b3b3`, inputs
  43px square with `#f16821` focus.
- **Source JS/libs:** jQuery + owl.carousel ×2 (hero slider,
  industries, testimonials) + magnific-popup (video) + AOS + icon
  fonts. Recreation: React state carousels, lucide-react icons, no
  jQuery/owl/magnific/AOS dependency.
- **Name collision:** "cargolane" clear in `apps/`, `openspec/specs/`,
  `docs/templates/`, TEMPLATES.md (2026-10-01).

## Implementation tasks (for the implementer stream)

1. **Scaffold** — copy the simplest existing app to `apps/cargolane`,
   rename package to `@free-react-templates/cargolane`, run
   `npm install` at repo root, set `public/CNAME` + `homepage` to
   `cargolane.free.componentdock.com`, register `injectUiSource()` in
   `vite.config.ts`.
2. **Tokens** — `src/index.css` `@theme`: `--color-primary: #f16821`,
   `--color-body: #4d4d4d`, `--color-footer: #333333`,
   `--color-footertext: #737373`, `--color-light: #edf0f5`,
   `--color-check: #8bc34a`, `--color-meta: #b3b3b3`; body default
   Poppins 300/1rem/1.7/`#4d4d4d`. Load **Poppins 300/400/700/900**
   via Google Fonts `<link>` in `index.html` (never ship font files).
3. **Components** (colocated tests, TDD, 100% coverage):
   - `Navbar` — absolute over hero (white logo "Cargolane" + 8 uppercase
     14px/.1em links with anchors; active `#f16821`); scrolled state =
     fixed white bg + black links + `0 4px 15px -5px rgba(0,0,0,.1)`
     shadow (scroll listener + cleanup); mobile hamburger below xl with
     `aria-expanded`.
   - `Hero` — 100vh picsum cover (`cargolane-hero-*`) + 40% overlay;
     white uppercase 900 h1 (4rem → 2rem mobile) + light sub + orange
     square CTA (2px transparent border → white outline on hover).
     Optional simple crossfade slider (state index); single-slide
     acceptable.
   - `About` — orange h2 + 80×3px underline (after-element or border
     div), 2 paragraphs, 3 green `#8bc34a` check items (lucide Check),
     photo column (`order` flips on mobile).
   - `HowItWorks` — dark cover (picsum + `bg-black/40`), white light h2,
     3 columns (Make An Order → Make A Payment → Track Your Order): icon
     (lucide) + white title + blurb.
   - `Team` — 3 person cards: picsum avatar/photo, 18px name, role,
     blurb (2 founders + marketing — paraphrase OK).
   - `Services` — `bg-light`, h2 + blurb, 6 `unit-4` rows in 3×2 grid:
     Air Freight, Ocean Freight, Land Transportation, Warehousing,
     Storage, Worldwide Delivery; 3rem lucide icon + 20px title + blurb
     + Learn More link.
   - `Industries` — state carousel (index + prev/next, optional
     auto-advance): ≥5 image tiles (Storage, Air Transports, Cargo
     Transports, Cargo Ship, Ware Housing) with white title over the
     photo bottom; tiles 1-up on mobile; aria-labeled arrow buttons.
   - `VideoCover` — picsum cover + 40% overlay (+ fixed attachment where
     supported), white light h2 "Watch The Video", circular play button
     (lucide Play, aria-label; static affordance or optional modal).
   - `Testimonials` — state carousel: ≥4 slides, each centered
     (100px round avatar → 1.5rem italic quote → 1rem author);
     prev/next controls.
   - `Blog` — 3 `h-entry` cards: picsum image (30px mb), meta line
     (date + "News", 14px `#b3b3b3`), 20px title, excerpt; centered
     "View All Blog Posts" button.
   - `Contact` — `bg-light`; left form: First Name, Last Name, Email,
     Subject, Message + "Send Message" `btn-primary` (square, 43px
     inputs, `#f16821` focus); zod/react-hook-form validation, per-field
     errors, blocked submit, local success state; right: 3 white info
     cards (Address 203 Fake St. … kind / Phone / Email Address —
     paraphrase OK) + "More Info" blurb + Learn More.
   - `Footer` — `bg-[#333333]` (8em pt desktop): 4 columns (About Us
     blurb / Quick Links: About Us, Services, Testimonials, Contact Us /
     Follow Us social lucide icons / Subscribe Newsletter input+Send
     with email validation + success state); white headings, `#737373`
     text, `rgba(255,255,255,.1)` divider; copyright bar + **Component
     Dock link** (https://www.componentdock.com/, "Component Dock").
4. **Data** — static arrays for services (6), industries (≥5), team
   (3), testimonials (≥4), blog posts (3); picsum seeds
   `cargolane-<section>-<n>` for every image; copy paraphrase allowed,
   keep the same kinds (see spec).
5. **Verify** — `scripts/verify-app.sh cargolane` green (typecheck,
   lint, 100% coverage, build); PR `feat/template-cargolane` to main
   with source slug + preview/screenshot URLs + tokens in the
   description; note documented divergences (React carousels, static
   video affordance, Component Dock footer, picsum/lucide, client-only
   forms); squash-merge immediately; then `[~]`→`[x]` + `npm run
   readme:status` bookkeeping (implementer stream owns the TEMPLATES.md
   marker).

## Fidelity notes (section by section)

- **Navbar** — transparent over hero; white logo/links; active link
  orange `#f16821`; `.scrolled` → fixed white + black links + soft
  shadow; 8 links (live-preview canonical — screenshot's 6 is an older
  build); hamburger below xl.
- **Hero** — 100vh photo (parcel-scan/logistics warehouse vibe), 40%
  black overlay, centered white uppercase 900 h1 "We Make Shipping"
  (kind: short shipping claim) + "A Logistics Company" sub + orange
  square "Get Started!" CTA.
- **About Us** — orange uppercase h2 + 80×3px orange underline; two
  gray paragraphs; 3 check items with **green `#8bc34a`** glyphs
  (⚠️ NOT orange — source `.ul-check.success`); photo right column.
- **How It Works** — dark photo-overlay section (40% black); centered
  white light-weight h2; 3 steps Order → Payment → Track, icon + white
  title + blurb each.
- **Our Team** — white section, bottom border; 3 person cards
  (photo, 18px name, role, blurb): 2 co-founders + marketing.
- **Our Services** — light `#edf0f5`/`#f4f5f9` bg; orange h2 + blurb;
  6 icon+text units in 3×2 grid (Air Freight, Ocean Freight, Land
  Transportation, Warehousing, Storage, Worldwide Delivery) with 3rem
  icons + Learn More links.
- **Industries** — white section; orange h2 + blurb; image-tile
  carousel (white titles over photo bottoms): Storage, Air Transports,
  Cargo Transports, Cargo Ship, Ware Housing; state-based React
  carousel (no owl).
- **Watch The Video** — full-width photo cover + 40% overlay (fixed
  attachment desktop); white light uppercase h2; circular labeled play
  button (static/optional modal — no embed required).
- **Testimonials** — bordered white section; orange light h2; slider
  of centered blockquotes: 100px round avatar, 1.5rem italic quote,
  1rem author; ≥4 slides; prev/next.
- **Our Blog** — white section; orange h2 + "See Our Daily News &
  Updates" kind blurb; 3 cards (image, 14px `#b3b3b3` meta
  date+category, 20px title, excerpt); "View All Blog Posts" button.
- **Contact Us** — light bg; left: 5-field form + orange square Send
  Message button (43px inputs, `#f16821` focus, validate client-side,
  local success state); right: white info cards Address / Phone /
  Email Address + More Info blurb + Learn More.
- **Footer** — `#333333`, 4 columns + newsletter; white headings /
  `#737373` text; divider `rgba(255,255,255,.1)`; bottom bar =
  copyright + Component Dock link (replaces source attribution).
  Zero ColorLib references in the app (comments included).
- **Responsive** — hamburger < xl; hero h1 4rem → 2rem; 3-col grids →
  1-col; contact + footer columns stack; carousels 1-up on mobile; no
  horizontal overflow at 360px.
