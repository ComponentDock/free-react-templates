# Gusset (ColorLib Accordion 07) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Gusset** (NEW name —
> the ColorLib source keeps its name "Accordion 07"). Implementation ships on
> `feat/template-gusset` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 07" — free single-page accordion / SaaS
  FAQ component template (source:
  https://colorlib.com/wp/template/accordion-07/). TEMPLATES.md row: line 645
  (**Bootstrap Accordions (20)**). The `accordion-07` slug appears exactly
  once (no dup rows to mark — unlike some other entries).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-07/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-07/`
  (HTTP 200, 11,969 bytes HTML; same `/bac/` subpath pattern as Accordion
  01–06). Stylesheet: `css/style.css` (221.6KB = bootstrap + custom tokens;
  the only non-vendor stylesheet) + Ionicons 4.5.6 CDN for toggle glyphs.
  Screenshot (`accordion-07.jpg`, 1200×972) browser-verified 2026-08-14:
  light-gray page, centered white card with rounded corners + subtle drop
  shadow, "Accordion #07" title, four SaaS-Q&A panels, active panel with a
  thin purple left border and solid purple circular icon (white glyph),
  closed panels with light-gray circles + dark-gray down chevrons.
- **Structure observed (1:1):** `section.ftco-section` (padding 7em 0, page
  bg `#fafafa`) → `col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
  "Accordion #07" (28px, `#000`) → `row.justify-content-center` →
  `col-md-6` (NARROWER than Accordion 01's `col-md-8 col-lg-6`) →
  `div#accordion.myaccordion.w-100` (`box-shadow: 0px 10px 24px -11px
rgba(0,0,0,0.27)`, radius 0, overflow hidden) → 4 `.card` panels (border
  none, transparent bg): header `.card-header.p-0` with full-width
  `.btn.btn-link` toggle (`d-flex px-4 py-3 align-items-center
justify-content-between`, color `#000`, 18px, letter-spacing 0, padding 0,
  `border-bottom: 1px solid rgba(0,0,0,0.05)`; hover/focus no underline)
  containing `div.heading` (`h3.mb-0`, 16px, weight 300, text-left) +
  `div.icon` (30×30px, `border-radius: 50%`, bg `#fff`, border
  `1px solid rgba(0,0,0,0.05)`); body `.card-body.p-4.pt-md-3` (bg
  `rgba(0,0,0,0.02)`, `border-left: 2px solid #654ede`, margin-bottom 1px)
  with one `<p>` lorem. **Panel 1 "How many events can I create?"** open by
  default (`collapse show`, `aria-expanded="true"`, NOT `.collapsed`);
  panels 2–4 — **"How many collaborators can I invite?"**, **"Transparent
  and simple pricing"**, **"Is my data safe?"** — closed (`.collapsed`).
  `data-parent` = only one open at a time. NO footer in the original — add
  the mandatory Component Dock attribution footer (repo convention).
- **Toggle glyphs:** Ionicons via `.fa:before` — open = `\f3d8`
  (`ion-ios-arrow-up`), collapsed = `\f3d0` (`ion-ios-arrow-down`); expanded
  button also gets bg `rgba(0,0,0,0.02)` + `border-left: 2px solid #654ede`,
  and its `.icon` circle turns `#654ede` with a `#fff` glyph. Recreate with
  lucide-react `ChevronUp` / `ChevronDown`.
- **Design tokens:** page `#fafafa`; accent `#654ede` (links, active left
  border 2px, active icon circle, card-body left border 2px); heading +
  toggle text `#000`; circle `#fff`; tints `rgba(0,0,0,0.02)` (button +
  body), `rgba(0,0,0,0.05)` (separator + circle border); closed glyph
  `rgba(0,0,0,0.3–0.4)`; shadow `0 10px 24px -11px rgba(0,0,0,0.27)`; font
  **Poppins** (body 15px/1.8, heading 28px, toggle 18px, panel title 16px
  weight 300); radius 0 on card, 50% on icon circle; section padding 7em 0.
- **Design approach:** minimal SaaS FAQ card — ONE component surface.
  Fidelity is about the purple active-state treatment (left border + circle
  swap), the square-corner card with its distinctive shadow, the narrow
  `col-md-6` column, and the up/down chevron swap. Default `openIndex = 0`.
  No images, no sliders, no forms. Keep the footer tiny and muted so the
  minimal aesthetic survives.
- **Placeholders:** none needed (no imagery in the reference).
- **Icons:** lucide-react `ChevronUp` (open) / `ChevronDown` (closed), 18px
  inside a 30px circular badge — do NOT copy the Ionicons font.
- **Copy:** keep the original content kinds — four SaaS FAQ questions
  (events, collaborators, pricing, data safety). Paraphrase the answer
  blurb freely.

## Implementation tasks

1. **Scaffold** — `apps/gusset` from the simplest existing app; rename
   package to `@free-react-templates/gusset`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `gusset.free.componentdock.com`,
   `"homepage"` = `https://gusset.free.componentdock.com`.
2. **Theme tokens** — add `#fafafa` / `#ffffff` / `#000000` / `#654ede` /
   the `rgba(0,0,0,…)` tints to `@theme`; Poppins Google Fonts `<link>` in
   `index.html`; card shadow via Tailwind arbitrary value or token.
3. **Components** (per section, TDD — tests first):
   - `Accordion` (or `GussetAccordion`) — the core component: takes panel
     data, holds `openIndex` state (default 0, only one open), renders
     header buttons (full width, 18px, `#000`, `ChevronUp`/`ChevronDown`
     swap, `aria-expanded`/`aria-controls`, active-state classes: 2px
     `#654ede` left border + `rgba(0,0,0,0.02)` bg + purple/white icon
     circle) + bodies (`role="region"`, `aria-labelledby`, tinted bg,
     purple left border, lorem paragraph).
   - `FaqPanel` (optional split) — header + body pair if the Accordion gets
     large; otherwise keep it one component.
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: heading "Accordion #07" → card →
   panel 1 (open) → panels 2–4 (closed) → footer.
5. **Verify** — `scripts/verify-app.sh gusset` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Accordion 07" row (line 645, Bootstrap
   Accordions) `[~]`→`[x]` + surge URL + `npm run readme:status`; PR
   description must list source template, the REAL preview URL
   (`preview.colorlib.com/theme/bac/accordion-07/` — note the `/bac/`
   subpath), design tokens, and the default-URL 404 gotcha.
