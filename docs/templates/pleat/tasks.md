# Pleat (ColorLib Accordion 01) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Pleat** (NEW name —
> the ColorLib source keeps its name "Accordion 01"). Implementation ships on
> `feat/template-pleat` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 01" — free single-page accordion /
  spa-pricing-list component template (source:
  https://colorlib.com/wp/template/accordion-01/). TEMPLATES.md row: line 639
  (**Bootstrap Accordions (20)**). The `accordion-01` slug appears exactly
  once (no dup rows to mark — unlike some other entries).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-01/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-01/`
  (HTTP 200, 10.6KB HTML; found by scraping the ColorLib template page for its
  preview link). Stylesheet: `css/style.css` (220.8KB = bootstrap + custom
  tokens; the only non-vendor stylesheet) + Ionicons 4.5.6 CDN for toggle
  icons. Screenshot (`accordion-01.jpg`, 1200×972) browser-verified
  2026-08-14: light-gray page, centered white card with drop shadow,
  "Accordion #01" title, "Prices" intro, Spa Therapies open (− icon) /
  Massage Therapies closed (+ icon), green prices.
- **Structure observed (1:1):** `section.ftco-section` (padding 7em 0, page
  bg `#fafafa`) → centered `h2.heading-section` "Accordion #01" (28px,
  `#000`, mb-5 pb-md-4) → `row.justify-content-center` →
  `col-md-8.col-lg-6` → `div#accordion.myaccordion.w-100` (white `#fff`, 5px
  radius, `box-shadow: 0px 10px 29px -16px rgba(0,0,0,0.12)`, margin auto) →
  intro `div.p-4.text-center` (`h3` "Prices" + muted paragraph "Far far away,
  behind the word mountains…") → 2 `.card` panels: header
  `.card-header.py-3.px-4` (transparent bg, `border-bottom-color: #e6e6e6`,
  text-left) with full-width `.btn.btn-link` toggle (color `#000`, 20px,
  capitalize, letter-spacing 0, padding 0) + 24px toggle icon
  (`[data-toggle="collapse"]` = Ionicons `\f1fc` minus when open,
  `.collapsed` = `\f102` plus when closed; screenshot confirms −/+ glyphs);
  body `.card-body.py-md-5.px-4` (bg `rgba(0,0,0,0.02)`) with `ul` of 4 flex
  rows (name 60% `#000` · duration 30% · price 10% `#28a745`, font-size
  16px, weight 400, margin-bottom 15px; <768px: spans wrap with
  `margin-right: 15px`). **Spa Therapies** open by default, **Massage
  Therapies** closed; `data-parent="#accordion"` = only one open at a time.
  NO footer in the original — add the mandatory Component Dock attribution
  footer (repo convention).
- **Design tokens:** page `#fafafa`; card `#fff`; heading + toggle text
  `#000`; price accent `#28a745` (only color on the page); separator
  `#e6e6e6`; card-body tint `rgba(0,0,0,0.02)`; shadow
  `0 10px 29px -16px rgba(0,0,0,0.12)`; font **Poppins** (body 14px/1.8,
  heading 28px, toggle 20px, rows 16px); radius 5px (card only); no pill
  buttons; section padding 7em 0.
- **Design approach:** ultra-minimal typography-driven card. The whole
  template is ONE component surface — fidelity is about exact spacing, the
  shadow, the 60/30/10 price-row widths, and the −/+ icon swap. Default
  `openIndex = 0`. No images, no sliders, no forms. Keep the footer tiny and
  muted so the minimal aesthetic survives.
- **Placeholders:** none needed (no imagery in the reference).
- **Icons:** lucide-react `Minus` (open) / `Plus` (closed), 24px — do NOT
  copy the Ionicons icon font.
- **Copy:** keep the original content kinds — service names (Face/Nail/
  Medical/Hair Treatments), durations (40/30/60/30 min.), prices ($10/$20/
  $10/$30). Paraphrase the intro blurb freely.

## Implementation tasks

1. **Scaffold** — `apps/pleat` from the simplest existing app; rename
   package to `@free-react-templates/pleat`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `pleat.free.componentdock.com`,
   `"homepage"` = `https://pleat.free.componentdock.com`.
2. **Theme tokens** — add `#fafafa` / `#ffffff` / `#000000` / `#28a745` /
   `#e6e6e6` to `@theme`; Poppins Google Fonts `<link>` in `index.html`;
   card shadow via Tailwind arbitrary value or token.
3. **Components** (per section, TDD — tests first):
   - `Accordion` (or `PleatAccordion`) — the core component: takes panel
     data, holds `openIndex` state (default 0, only one open), renders
     header buttons (full width, 20px, capitalize, `#000`, `Minus`/`Plus`
     icon swap, `aria-expanded`/`aria-controls`) + bodies
     (`role="region"`, `aria-labelledby`, bg tint, price-row lists).
   - `PriceRow` — flex row with 60/30/10% widths (name `#000`, duration
     gray, price `#28a745`), 15px bottom margin, wraps ≤768px with 15px
     gutter.
   - `IntroBlock` — centered `h3` "Prices" + muted paragraph (`p-4`).
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: heading "Accordion #01" → card →
   intro → Spa Therapies (open) → Massage Therapies (closed) → footer.
5. **Verify** — `scripts/verify-app.sh pleat` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Accordion 01" row (line 639, Bootstrap
   Accordions) `[~]`→`[x]` + surge URL + `npm run readme:status`; PR
   description must list source template, the REAL preview URL
   (`preview.colorlib.com/theme/bac/accordion-01/` — note the `/bac/`
   subpath), design tokens, and the default-URL 404 gotcha.
