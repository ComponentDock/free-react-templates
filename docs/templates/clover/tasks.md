# Clover (ColorLib Accordion 06) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Clover** (NEW name —
> the ColorLib source keeps its name "Accordion 06"). Implementation ships on
> `feat/template-clover` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 06" — free single-page accordion / UI
  component template (source: https://colorlib.com/wp/template/accordion-06/).
  TEMPLATES.md row: line 644 (**Bootstrap Accordions (20)**). The
  `accordion-06` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-06/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-06/`
  (HTTP 200, 10.8KB HTML; same `/bac/` subpath pattern as Accordion 01–05).
  Stylesheets: `css/style.css` (221.9KB = bootstrap + custom tokens — SHARED
  across the whole `bac` series; the custom accordion block is lines
  ~8220–8290) + IonIcons 4.5.6 CDN. NO Google Fonts link in the HTML —
  `"Poppins", Arial, sans-serif` on `body` (15px / 1.8, `background:
#fafafa`, `color: gray`) — load Poppins via Google Fonts `<link>` in
  `index.html`. NO images anywhere — pure component page, no picsum seeds.
- **Visual design (screenshot `accordion-06.jpg`, 1200×972, browser-verified
  2026-08-14 + cross-checked on the LIVE render):** centered black heading
  "Accordion #06"; ONE white card with **square corners** (`border-radius:
0`) and a soft shadow; three WHITE header rows, each with the question
  title on the LEFT and a **square 60×60 icon container on the RIGHT**:
  **collapsed = green `#37c46f` square + white PLUS; open = blue `#3da1e3`
  square + white MINUS**. The open body is very light gray
  `rgba(0,0,0,0.02)` with the lorem paragraph — NOT a colored block (unlike
  Kelp/Accordion 05's solid teal body). The screenshot happens to show panel
  2 open, but the LIVE DOM default is panel 1 open (`aria-expanded="true"` +
  `collapse show`) — follow the live DOM.
- **Structure observed (1:1):** `section.ftco-section` (padding 7em 0) →
  `container` → `col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
  "Accordion #06" (28px `#000`, mb-5 = 3rem) → `row.justify-content-center` →
  `col-md-7.col-lg-6` (centered: 58.3% @md, 50% @lg, full width below md) →
  `div#accordion.myaccordion.w-100` (white, `border-radius: 0`,
  `overflow: hidden`, shadow `0px 10px 24px -11px rgba(0,0,0,0.27)`, margin
  auto) → **3** `.card` panels (border none, transparent bg). Header button =
  full-width `d-flex pl-4 align-items-center justify-content-between btn
btn-link` (18px, `#000`, radius 0, `border-bottom: 1px solid
rgba(0,0,0,0.05)`; **pl-4 ONLY — no pr-4**: the icon square sits flush
  against the card's right edge): left `div.heading.d-flex.align-items-center`
  (`position: relative; z-index: 0; font-weight: 300`) → `h3.mb-0` 16px
  question title; right `div.icon.d-flex.align-items-center.justify-content-center`
  (60×60 square, white 20px glyph).
  - Panel 1 "How to manage account?" — **OPEN by default**
    (`aria-expanded="true"`, NOT `collapsed`, body `collapse show`): icon
    square **blue `#3da1e3`** + `ion-ios-remove` = **MINUS**; body
    `card-body.p-4` = ONE lorem paragraph ("Far far away, behind the word
    mountains, far from the countries Vokalia and Consonantia, there live
    the blind texts. Separated they live in Bookmarksgrove right at the
    coast of the Semantics, a large language ocean.").
  - Panel 2 "How to become Pro" — **collapsed** (`class="collapsed"`,
    `aria-expanded="false"`): icon square **green `#37c46f`** +
    `ion-ios-add` = **PLUS**; body = the SAME lorem paragraph.
  - Panel 3 "How to create an account?" — **collapsed**: green + PLUS; body
    = the SAME lorem paragraph.
  - Footer — none in the original; add the mandatory muted Component Dock
    attribution footer (`https://www.componentdock.com/`).
- **Glyph codes (verified against ionicons 4.5.6 CSS):**
  `.ion-ios-add:before{content:"\f102"}` (PLUS, collapsed) and
  `.ion-ios-remove:before{content:"\f1fc"}` (MINUS, open) — swapped by the
  original via `[data-toggle="collapse"] .fa:before` vs
  `[data-toggle="collapse"].collapsed .fa:before`. In React: derive the
  glyph from `openIndex` state. lucide-react `Plus` and `Minus` map 1:1 —
  NO chevrons, NO substitution needed (unlike Kelp's Volleyball hack).
- **Header heights:** the 60×60 icon square drives the 60px header row
  height (the title `h3` is only 16px).
- **State styling recap (original CSS):** `button[aria-expanded="true"]`
  `color: #000 !important` (title black in BOTH states — the state signal is
  the icon square, NOT the title color) + 0.3s transition (with
  `prefers-reduced-motion` guard); `button[aria-expanded="false"]`
  `background-color: #fff` (all headers white); `[aria-expanded="true"]
.icon` → `background: #3da1e3 !important`; `.fa` white in both states
  (20px inside `.icon`).

## Tasks (implementation todo)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/kelp`), rename
   package to `@free-react-templates/clover`, `public/CNAME` =
   `clover.free.componentdock.com`, `"homepage"` =
   `https://clover.free.componentdock.com`; run `npm install` at repo root
   (lockfile must register the workspace — verify with
   `grep -c "free-react-templates/clover" package-lock.json`).
2. **Theme tokens** (`src/index.css` `@theme`): brand green `#37c46f`,
   brand blue `#3da1e3`, page `#fafafa`, card `#fff`, square corners
   (radius 0), shadow `0px 10px 24px -11px rgba(0,0,0,0.27)`, separator
   `rgba(0,0,0,0.05)`, body bg `rgba(0,0,0,0.02)`. Poppins Google Fonts
   `<link>` in `index.html`.
3. **Components** (TDD, 100% coverage):
   - `Accordion.tsx` — card + `openIndex` state (default 0), single-open,
     header buttons with `aria-expanded`/`aria-controls`, bodies
     `role="region"` + `aria-labelledby`, icon = `Plus`/`Minus` from
     `lucide-react` on a 60×60 square (`bg-brand-green` closed →
     `bg-brand-blue` open, white icon).
   - Panels data: titles/questions + shared lorem paragraph (3 entries).
   - `Footer.tsx` — muted Component Dock attribution
     (`https://www.componentdock.com/`), using `ButtonLink`/`cn` from
     `packages/ui`.
4. **Spec scenarios** → test cases (mirror Gherkin): heading display, card
   layout, collapsed green-plus, default open panel 1 (blue-minus),
   paragraph bodies, toggle flips icons + single-open, accessibility state,
   footer link.
5. **Verify** — `scripts/verify-app.sh clover` (typecheck + lint + vitest
   100% coverage + build). Then PR `feat/template-clover` →
   merge immediately → TEMPLATES.md `[~]`→`[x]` for line 644 + surge URL +
   `npm run readme:status`.

## Fidelity traps (from the reference)

- Default preview URL 404s — use `preview.colorlib.com/theme/bac/accordion-06/`.
- Icon is on the RIGHT of the header (Kelp had it on the LEFT) and there is
  NO separate chevron — the plus/minus square IS the toggle indicator.
- Button has `pl-4` only (no `pr-4`) — icon flush against the card's right
  edge.
- Bodies are plain paragraphs on `rgba(0,0,0,0.02)` — do NOT copy Kelp's
  white-on-teal row lists (the `.card-body ul` rules in the shared css are
  leftovers from the sibling variant).
- Screenshot shows panel 2 open; the live DOM default is panel 1 open —
  follow the live DOM.
- All three panels share the identical lorem paragraph.
- `#37c46f` and `#3da1e3` are the ONLY accents; never use the teal
  `#75d6d1` from Accordion 05.
