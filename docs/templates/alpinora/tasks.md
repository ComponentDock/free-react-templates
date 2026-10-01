# Alpinora (ColorLib "Adventure") — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-alpinora`. Recreation name:
> **Alpinora** (NEW name — the ColorLib source keeps its name "Adventure";
> preview `<title>` "Adventure | Free Bootstrap Template").
>
> Spec: `openspec/specs/template-alpinora/spec.md` (tokens, Gherkin
> requirements, verification checklist). Design research:
> `docs/templates/alpinora/design-notes.md` (DOM skeleton +
> section-by-section notes).

## Implementation outline (for the implementer)

1. **Scaffold** — copy the simplest existing app into `apps/alpinora`;
   rename package to `@free-react-templates/alpinora`; set
   `"homepage"` + `public/CNAME` to `alpinora.free.componentdock.com`;
   run `npm install` at repo root (lockfile registration); register
   `injectUiSource()` in `vite.config.ts` (never remove).
2. **Tokens + fonts** — Google Fonts `<link>` in `index.html` (Poppins
   300/400/500/600/700); `@theme` tokens in `src/index.css`: brand
   gradient `#b21aff`→`#732bde` (0deg; e.g. `--color-brand-start` /
   `--color-brand-end` and a `bg-brand-gradient` utility), headings
   `#222222`, body `#777777`, lavender `#f9f9ff`, footer `#222222`,
   newsletter input `#191919`, social idle `#cccccc`; body default
   Poppins. Primary-pill utility: radius 25px, gradient bg, white text,
   arrow icon absolutely positioned (slides left on hover, 0.3s).
3. **Sections top-down** (one component each, order 1:1):
   `Header` (absolute/transparent → solid `#222` on scroll; diamond mark
   + Alpinora + nav Home·About·Service·Gallery·Faq·Contact + Pages
   dropdown (Generic/Elements); hamburger `aria-expanded` on mobile) →
   `Hero` (3-slide React-state photo slider: eyebrow + giant white h1
   ("New Adventure"/"New Trip"/"New Experience") + lorem + white pill
   "Discover Now"; autoplay + pause-on-hover + dots/arrows) →
   `About` (centered title + subtitle; image left / white card right with
   layered gray shadows + 70px edge strip; h2 with line breaks + 3
   paragraphs) → `Projects` (`#f9f9ff` bg; title "Latest Project on the
   go"; 5 cards image + h6 "Vector Illustration" + blurb; responsive
   carousel/grid with next/prev state) → `Features` (title "Some Features
   that Made us Unique"; 6 cards — Expert Technicians, Professional
   Service, Great Support, Technical Skills, Highly Recomended, Positive
   Reviews — lavender bg, lucide icon + h4 + blurb; hover flood → purple
   gradient + white text, 0.3s) → `Gallery` (6-photo React carousel,
   ~200px cover items; vertical up/down arrow controls bottom-right,
   white boxes with diagonal shadow) → `Faq` (title "Frequently Asked
   Questions"; 4 gradient-text counters — 5962/2394/1439/933 with labels;
   3-item accordion with stateful open/close) → `VideoCta` (full-bleed
   photo + gradient overlay opacity .6; play icon + h3 "Being unique is
   the preference" + h4 "Youtube video will appear in popover";
   accessible popover/modal on click) → `LogoStrip` (EMPTY — spacing only,
   no invented logos) → `Contact` (title "If you need, Just drop us a
   line"; form: name/email(pattern)/subject/message + gradient pill
   "Send Message"; zod + react-hook-form, block submit until valid, local
   success state) → `Footer` (`#222222`; About Us + Newsletter (dark
   `#191919` input + square gradient button) + Follow Us (social icons
   `#cccccc` → gradient hover); copyright line + Component Dock link
   https://www.componentdock.com/).
4. **Assets** — `picsum.photos/seed/alpinora-<section>-<n>` (hero ×3,
   about, projects ×5, gallery ×6, video background); icons from
   `lucide-react` only (diamond, arrow-right, play, chevron-up/down,
   menu/x, socials via inline SVG); zero ColorLib references anywhere in
   `apps/alpinora` (comments included).
5. **Tests (TDD, 100% coverage)** — one `describe` per component,
   scenario-style `it` blocks mirroring the spec; assert classes/
   structure (jsdom has no layout); cover: hero slide advance +
   pause-on-hover, sticky-header scroll state, hamburger `aria-expanded`,
   Pages dropdown open/close, project/gallery prev-next state, feature
   hover class, accordion toggle, video popover open/close, contact-form
   validation block + success state.
6. **Verify + ship** — `scripts/verify-app.sh alpinora`; PR
   `feat/template-alpinora` (source slug `adventure` + preview URL +
   screenshot URL + tokens in the description); squash-merge; then
   bookkeeping (`[x]` + surge URL + `npm run readme:status`).

## Prep research summary (2026-10-01)

- Preview reachable: HTTP 200, 29,492 B — all tokens/structure in the
  spec; no re-fetch needed. `css/main.css` 34,840 B fetched and tokenized.
- Screenshot: real JPEG 1200×946 (`adventure-free-travel-website-template.jpg`)
  — coastal cliffs hero, transparent nav, white pill CTA; confirms white
  hero copy (CSS h1 `#222` default is overridden on the photo).
- Signature look: white page + purple gradient `#b21aff`→`#732bde`
  accents (buttons, feature hover flood, video overlay, newsletter btn,
  counter gradient text, social hover); Poppins everywhere; dark `#222222`
  footer; `#f9f9ff` lavender bands; pill buttons (25px primary / 20px
  hero CTA).
- Gotchas: reference section id is typo'd `secvice` (keep or fix — spec
  uses "Features"); `logo-area` is EMPTY in the preview (do not invent
  logos); footer copyright references Colorlib (reword — Component Dock
  link mandatory); FAQ counter numbers use gradient TEXT (background-clip)
  not gradient fill.
