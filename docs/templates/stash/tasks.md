# Stash (ColorLib Accordion 04) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Stash** (NEW name —
> the ColorLib source keeps its name "Accordion 04"). Implementation ships on
> `feat/template-stash` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 04" — free single-page accordion /
  cloud-storage services component template (source:
  https://colorlib.com/wp/template/accordion-04/). TEMPLATES.md row: line 642
  (**Bootstrap Accordions (20)**). The `accordion-04` slug appears exactly
  once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-04/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-04/`
  (HTTP 200, 14.3KB HTML; same `/bac/` subpath pattern as Accordion 01/02/03).
  Stylesheets: `css/style.css` (223.6KB = bootstrap + custom tokens), IonIcons
  4.5.6 CDN (header glyphs `ion-ios-filing` / `ion-ios-mail` /
  `ion-ios-cloud`). NO flaticon.css, NO images. **The `<i class="fa">`
  chevron is COMMENTED OUT in all three headers — no chevrons in this
  variant.** Screenshot (`accordion-04.jpg`, 1200×972, served as AVIF →
  converted to PNG, browser-verified 2026-08-14): centered dark heading
  "Accordion #04"; white card, rounded 5px corners, soft shadow; FIRST header
  **"My Files" = pale golden-yellow gradient, dark folder glyph on a white
  circle, darker-gold count pill (349)**, open with 5 rows (01 Dropbox 21 /
  02 Skydrive 100 / 03 FTP Server 8 / 04 Dropbox 1 / 05 Skyrdrive 10); "Mail"
  (89) and "Cloud" (102) collapsed — white headers, yellow circle icons with
  dark glyphs, grey-bordered pills. Near-white page bg.
- **Structure observed (1:1):** `section.ftco-section` (padding 7em 0,
  near-white page bg — custom body rule `background: #fafafa` then overridden
  by `rgba(0,0,0,0.02)`, visually equivalent) → `col-md-12.text-center` →
  `h2.heading-section.mb-5.pb-md-4` "Accordion #04" (28px, `#000`) →
  `row.justify-content-center` → `col-md- col-lg-6` (**malformed `col-md-` in
  source** — only `col-lg-6` applies; recreate the intent: centered ~50%
  width on desktop, full width below) → `div#accordion.myaccordion.w-100`
  (white `#fff`, `border-radius: 5px`, `overflow: hidden`,
  `box-shadow: 0px 10px 29px -16px rgba(0,0,0,0.12)`, margin auto) → **3**
  `.card` panels. Header = full-width `.btn.btn-link` toggle (`d-flex py-3
px-4 align-items-center justify-content-between`, `color: #000`, 18px,
  `border-radius: 0`, padding 0 via CSS — real padding `py-3 px-4`, one step
  tighter than 02/03's `py-4`; `border-bottom: 1px solid rgba(0,0,0,0.05)`):
  left `div.heading.d-flex.align-items-center` → `div.icon` (40×40 circle,
  radius 50%, bg `#f2dc63`) with 20px white glyph + `h3.mb-0.ml-3` 16px
  title; right `p.mb-0.num` count pill (`border: 1px solid rgba(0,0,0,0.1)`,
  `border-radius: 40px`, 16px, `padding: 5px 15px`, `overflow: hidden`).
  **Active state via `[aria-expanded]`:** `[aria-expanded="true"]` =
  linear-gradient `#ffe97a` → `#f2dd63`; `.icon` → `#fff` bg + glyph `#000`;
  `.num` → bg `#f0d74b`, border `#ddbe12`, text `#fff`, plus an inset top
  shadow (`inset 0 -10px 25px -3px rgba(0,0,0,0.75)` @ `.2` opacity).
  `[aria-expanded="false"]` = `background-color: #fff`. Panel 1 "My Files"
  **OPEN by default** (`collapse show`), body `card-body.p-0` (bg
  `rgba(0,0,0,0.02)`) = `<ul>` of 5 `<li>` rows; panels 2 "Mail" and 3
  "Cloud" CLOSED, same 5-row lists. Row = `li` (`list-style: none`,
  `border-bottom: 1px solid rgba(0,0,0,0.05)`) → `a.d-flex.justify-content
-between.align-items-center` (`padding: 15px 30px`): `p` (weight 600,
  `rgba(0,0,0,0.8)`) with `<span>01</span>` number (weight 300,
  `rgba(0,0,0,0.3)`, `margin-right: 10px`) + name; right `span.num` count
  pill (`padding: 0 12px`, `color: #000`). `data-parent="#accordion"` = only
  one open at a time. NO footer in the original — add the mandatory Component
  Dock attribution footer (repo convention).
- **Design tokens:** page near-white `#fafafa` / `rgba(0,0,0,0.02)`; card
  `#fff` + 5px radius + shadow `0 10px 29px -16px rgba(0,0,0,0.12)`; **brand
  gold family** — `#f2dc63` (icon circles + gradient end), `#ffe97a`
  (gradient start), `#f0d74b` (active pill bg), `#ddbe12` (active pill
  border); active header = gradient; collapsed header `#fff`; header text
  `#000`; row names `rgba(0,0,0,0.8)` weight 600; row numbers `rgba(0,0,0,0.3)`
  weight 300; pill borders `rgba(0,0,0,0.1)`; separators `rgba(0,0,0,0.05)`;
  heading `#000` 28px; body text gray; font **Poppins** (declared on `body`
  in style.css: `font-size: 14px; line-height: 1.8; color: gray` — NOTE
  14px/1.8, NOT 17px/1.5 like Accordion 03; load via Google Fonts `<link>` in
  `index.html`); header button 18px; panel titles 16px; pills 16px.
- **Design approach:** one centered card, three storage panels with icon
  circles + count pills. Fidelity is about the golden-gradient active header
  (white circle + black glyph, gold pill with white text), the white
  collapsed headers with yellow circles + plain pills, the numbered service
  rows with right-aligned count pills, the **absence of chevrons**, and the
  single-open behavior. Default `openIndex = 0`. No images.
- **Copy:** keep the three category titles' meaning (My Files / Mail / Cloud —
  storage categories) and their count badges (349 / 89 / 102); write 5
  varied, plausible per-category storage services and counts per panel (the
  original repeats the same five counts 21/100/8/1/10 everywhere and
  duplicates/misspells names — recreate the same KIND of content, not the
  repetition).
- **Icons (lucide-react, NO copied fonts):** `FolderOpen` (My Files —
  source `ion-ios-filing`), `Mail` (Mail), `Cloud` (Cloud) — 20px glyphs,
  white on `#f2dc63` circles when collapsed → black on white circles when
  open. NO chevrons anywhere.

## Implementation tasks

1. **Scaffold** — `apps/stash` from the simplest existing app; rename
   package to `@free-react-templates/stash`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `stash.free.componentdock.com`,
   `"homepage"` = `https://stash.free.componentdock.com`.
2. **Theme tokens** — add the gold family (`#f2dc63`, `#ffe97a`, `#f0d74b`,
   `#ddbe12`), `#ffffff` / `#000000` + the rgba tints (`rgba(0,0,0,0.8)` row
   names, `rgba(0,0,0,0.3)` row numbers, `rgba(0,0,0,0.1)` pill borders,
   `rgba(0,0,0,0.05)` separators, `rgba(0,0,0,0.02)` page/panel tint) to
   `@theme`; Poppins Google Fonts `<link>` in `index.html` (body 14px / 1.8);
   card shadow + gradient via Tailwind arbitrary values or tokens.
3. **Components** (per section, TDD — tests first):
   - `Accordion` (or `StashAccordion`) — core component: 3 panels from data
     (title, icon, badge count, rows: {number, name, count}[]), holds
     `openIndex` state (default 0, only one open), renders header buttons
     (full-width, 18px, `aria-expanded`/`aria-controls`, NO chevron) +
     bodies (`role="region"`, `aria-labelledby`). Active header styling
     driven by state: gold gradient `#ffe97a`→`#f2dd63` bg, white icon
     circle + black glyph, gold pill (`#f0d74b` bg / `#ddbe12` border /
     white text); closed: `#fff` bg, `#f2dc63` circle + white glyph, plain
     pill (`rgba(0,0,0,0.1)` border / black text); `py-3 px-4`,
     `rounded-none`, bottom hairline `rgba(0,0,0,0.05)`.
   - `ServiceList` — `<ul>` of 5 rows: number span (300,
     `rgba(0,0,0,0.3)`, 10px mr) + name (600, `rgba(0,0,0,0.8)`) left,
     count pill right (`px-3`, `rounded-full`, 0 12px padding equiv); rows
     `justify-between`, 15px 30px padding, hairline separators, on the
     `rgba(0,0,0,0.02)` panel bg. Render as static rows (the source's
     `<a href="#">` links go nowhere).
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: heading "Accordion #04" → card →
   "My Files" (open, 349) → "Mail" (89) → "Cloud" (102) → footer. Card
   column: centered ~50% on desktop (`md:max-w-2xl lg:max-w-xl mx-auto`
   equivalent — the source's `col-md- col-lg-6` is malformed), full width
   below.
5. **Verify** — `scripts/verify-app.sh stash` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Accordion 04" row (line 642, Bootstrap
   Accordions) `[~]`→`[x]` + surge URL + `npm run readme:status`; PR
   description must list source template, the REAL preview URL
   (`preview.colorlib.com/theme/bac/accordion-04/` — note the `/bac/`
   subpath), design tokens, and the default-URL 404 gotcha.
