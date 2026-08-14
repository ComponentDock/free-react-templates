# Mentha (ColorLib Accordion 03) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Mentha** (NEW name —
> the ColorLib source keeps its name "Accordion 03"). Implementation ships on
> `feat/template-mentha` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 03" — free single-page accordion / FAQ
  help-center component template (source:
  https://colorlib.com/wp/template/accordion-03/). TEMPLATES.md row: line 641
  (**Bootstrap Accordions (20)**). The `accordion-03` slug appears exactly
  once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-03/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-03/`
  (HTTP 200, 11.9KB HTML; same `/bac/` subpath pattern as Accordion 01/02).
  Stylesheets: `css/style.css` (220.9KB = bootstrap + custom tokens), IonIcons
  4.5.6 CDN (the `.fa:before` chevron glyphs). NO flaticon.css, NO images, NO
  icon spans — this variant is TEXT-ONLY (unlike the 01/02 siblings).
  Screenshot (`accordion-03.jpg`, 1200×972, served as AVIF → converted to
  PNG, browser-verified 2026-08-14): centered dark heading "Accordion #03";
  white card, soft shadow; FIRST header **"Fixed a problem" = solid mint
  `#42dca3` with white text + white up-chevron**, panel open showing a
  numbered 5-item dark-grey list; other three headers white with dark labels
  - grey down-chevrons, collapsed. Hairline separators between headers. No
    other colored surfaces.
- **Structure observed (1:1):** `section.ftco-section` (padding 7em 0, WHITE
  page bg) → `col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
  "Accordion #03" (28px, `#000`) → `row.justify-content-center` →
  `col-md-8.col-lg-6` → `div#accordion.myaccordion.w-100` (white `#fff`,
  `overflow: hidden`, `box-shadow: 0px 0px 13px -7px rgba(0,0,0,0.25)`,
  Bootstrap card radius 0.25rem clipped, margin auto) → **4** `.card`
  panels. Cards/headers have `border: none; background: transparent`
  (`.myaccordion .card, .myaccordion .card-header` overrides) — the visible
  hairlines come from the toggle BUTTON's `border-top`/`border-bottom: 1px
solid rgba(0,0,0,0.05)`. Header = full-width `.btn.btn-link` toggle
  (`d-flex py-4 px-4 align-items-center justify-content-between`, `color:
rgba(0,0,0,0.8)`, `border-radius: 0`, padding 0 via CSS — real padding from
  `py-4 px-4`): left `p.mb-0` label (18px, weight 500 via `.card-header p`),
  right `<i class="fa">` 16px chevron `rgba(0,0,0,0.3)`; open = `\f3d8`
  (ion-ios-arrow-up), collapsed = `\f3d0` (ion-ios-arrow-down). **Active
  state via `[aria-expanded]`:** `[aria-expanded="true"] { background-color:
#42dca3; color: #fff !important }` + `[aria-expanded="true"] .fa { color:
#fff !important }`; `[aria-expanded="false"] { background-color: #fff }`.
  Panel 1 "Fixed a problem" **OPEN by default** (`collapse show`), body
  `card-body py-5 px-4` = `<ol>` of 5 `<li>`; panels 2 "Manage your account
  and settings" and 3 "Create and grow your channel" CLOSED, same `<ol>` x5;
  panel 4 "Policy, safety and copyright" CLOSED, body `py-5 px-4 px-md-5` =
  ONE `<p>` paragraph (no list). `data-parent="#accordion"` = only one open
  at a time (container also carries `aria-multiselectable="true"` — sloppy
  source markup conflicting with data-parent; observed behavior + screenshot
  = single-open, recreate single-open). `ol { margin-bottom: 0 }`. NO footer
  in the original — add the mandatory Component Dock attribution footer (repo
  convention).
- **Design tokens:** page `#fff`; card `#fff` + clipped 0.25rem radius +
  shadow `0 0 13px -7px rgba(0,0,0,0.25)`; **brand mint `#42dca3`** (active
  header bg, white text + white chevron — the ONLY accent); collapsed header
  bg `#fff`; header label text `rgba(0,0,0,0.8)`; chevron `rgba(0,0,0,0.3)`
  16px; hairline separators `rgba(0,0,0,0.05)`; body/list text `#212529`;
  heading `#000` 28px; font **Poppins** (declared on `body` with
  `font-size: 17px` custom override in style.css; h1–h6 inherit; preview
  serves it via cf-fonts @font-face — load via Google Fonts `<link>` in
  `index.html`); header labels 18px/500; list + paragraph inherit 17px.
- **Design approach:** one centered card, four text-only accordion panels.
  Fidelity is about the mint `#42dca3` active-header treatment (white text +
  white up-chevron), the white collapsed headers with dark labels + grey
  down-chevrons, the hairline separators, the numbered-list panels vs the
  single-paragraph panel, and the single-open behavior. Default
  `openIndex = 0`. No images, no icons beyond the chevrons.
- **Copy:** keep the four category titles' meaning (fix-a-problem / account
  & settings / create & grow channel / policy, safety, copyright — they are
  real video-platform help categories); write 5 varied, plausible numbered
  help steps per list panel and one short paragraph for panel 4 (the
  original repeats the same lorem placeholder everywhere — recreate the same
  KIND of content, not the repetition).
- **Icons (lucide-react, NO copied fonts):** `ChevronUp` (open) /
  `ChevronDown` (closed), 16px, `rgba(0,0,0,0.3)` → `#fff` when open (mint
  header). No other icons.

## Implementation tasks

1. **Scaffold** — `apps/mentha` from the simplest existing app; rename
   package to `@free-react-templates/mentha`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `mentha.free.componentdock.com`,
   `"homepage"` = `https://mentha.free.componentdock.com`.
2. **Theme tokens** — add `#42dca3` / `#ffffff` / `#000000` + the rgba tints
   (`rgba(0,0,0,0.8)` labels, `rgba(0,0,0,0.3)` chevrons,
   `rgba(0,0,0,0.05)` hairlines) to `@theme`; Poppins Google Fonts `<link>`
   in `index.html`; card shadow via Tailwind arbitrary value or token.
3. **Components** (per section, TDD — tests first):
   - `Accordion` (or `MenthaAccordion`) — core component: 4 panels from data
     (title, body: {list?: string[]} | {paragraph?: string}), holds
     `openIndex` state (default 0, only one open), renders header buttons
     (full-width, 18px/500, `aria-expanded`/`aria-controls`, `ChevronUp`/
     `ChevronDown` right) + bodies (`role="region"`, `aria-labelledby`).
     Active header styling driven by state: mint `#42dca3` bg + `#fff` text
     - `#fff` chevron when open; white bg + `rgba(0,0,0,0.8)` label + grey
       chevron when closed; hairline `rgba(0,0,0,0.05)` borders top/bottom,
       `rounded-none`, `py-4 px-4`.
   - `FaqList` — ordered `<ol>` of 5 help steps (numbered, body color,
     `mb-0`).
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: heading "Accordion #03" → card →
   "Fixed a problem" (open) → "Manage your account and settings" → "Create
   and grow your channel" → "Policy, safety and copyright" (paragraph body,
   extra md+ side padding) → footer.
5. **Verify** — `scripts/verify-app.sh mentha` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Accordion 03" row (line 641, Bootstrap
   Accordions) `[~]`→`[x]` + surge URL + `npm run readme:status`; PR
   description must list source template, the REAL preview URL
   (`preview.colorlib.com/theme/bac/accordion-03/` — note the `/bac/`
   subpath), design tokens, and the default-URL 404 gotcha.
