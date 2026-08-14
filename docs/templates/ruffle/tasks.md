# Ruffle (ColorLib Accordion 19) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Ruffle** (NEW name —
> the ColorLib source keeps its name "Accordion 19"). Implementation ships on
> `feat/template-ruffle` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 19" — free single-page FAQ accordion
  component template (source: https://colorlib.com/wp/template/accordion-19/).
  TEMPLATES.md row: line 657 (**Bootstrap Accordions (20)**). The
  `accordion-19` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-19/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-19/`
  (HTTP 200, 19.4KB HTML; found by scraping the ColorLib template page for its
  preview link — same `/bac/` subpath pattern as accordion-01). Stylesheets:
  `css/style.css` (2.2KB — the accordion tokens), `css/bootstrap.min.css`
  (160.4KB, Bootstrap 4 defaults), `fonts/icomoon/style.css` (chevron glyphs
  only), `css/owl.carousel.min.css` (unused on this page). JS: `js/main.js`
  (adds/removes `.active` on the item on panel show/hide). Screenshot
  (`accordion-19.jpg`, 1200×972) browser-verified 2026-08-14: white page,
  centered dark heading "Bootstrap Accordion #9", three flat rows separated
  by faint hairlines, first item open with green `#72c02c` title + green
  up-chevron, other two gray `#999` with down-chevrons, no shadows.
- **⚠ Numbering quirk:** the reference renders the heading as
  **"Bootstrap Accordion #9"** (live DOM `<h2>` AND the official screenshot)
  even though the TEMPLATES.md row says "Accordion 19". Fidelity = render
  "#9" exactly; do not "fix" it. Mention this in the PR description.
- **Structure observed (1:1):** `div.content` (padding 7rem 0, white page) →
  `div.container` → centered `h2.my-5.text-center` "Bootstrap Accordion #9"
  (20px, `#212529`, my-5 = 3rem top/bottom) → second `div.container` →
  `div#accordion_1.custom-accordion` (NO card wrapper — items sit directly on
  the page) with 3 `div.accordion-item`s (margin-bottom 0, radius 0, overflow
  hidden). Each item: `h2.mb-0` → `button.btn.btn-link` (display block,
  width 100%, padding 15px / padding-left 0, text-left, color `#999`, bg
  `#fff`, border none, radius 0, `border-bottom: 1px solid #f9f9f9`, position
  relative) with a `::before` chevron (icomoon, 18px, right 0, translateY(-50%));
  body `div.collapse` → `div.accordion-body` (padding 0 0 20px 0, color
  `#888`) with one `p` lorem-ipsum paragraph (`#b3b3b3`, weight 300).
  Item 1 "How to download and register?" OPEN by default (`collapse show`,
  `aria-expanded="true"`, `.active` → title `#72c02c`, up-chevron
  `#72c02c`, border-bottom transparent); items 2 "How to create your paypal
  account?" and 3 "How to link your paypal and bank account?" CLOSED
  (`collapsed`, `aria-expanded="false"`, `#999`, down-chevron).
  `data-parent="#accordion_1"` = only one open at a time (clicking the open
  header collapses it → NONE open). NO footer in the original — add the
  mandatory Component Dock attribution footer (repo convention).
- **Design tokens:** page `#fff`; heading/body text `#212529`; accent
  `#72c02c` (open title + open chevron — the ONLY color on the page); closed
  titles `#999`; separators `#f9f9f9` (1px hairline; transparent on the open
  item); answer text `#b3b3b3` weight 300 (`.accordion-body` base `#888`);
  optional 2px `#dee2e6` top border on `body` (appended bootstrap rule);
  font **Roboto** (body 16px/1.5/400, h2 20px) — note the preview preloads
  Poppins + Source Serif Pro kits but `style.css` never uses them; radius 0
  everywhere; NO shadows; wrapper padding 7rem 0; button padding 15px;
  answer padding-bottom 20px; chevron 18px right-aligned centered.
- **Design approach:** ultra-flat typography accordion — one interactive
  surface, no cards, no shadows, no images. Fidelity is about the exact
  hairlines, the 15px button padding, the right-aligned chevron swap, and
  the green open-state. Default `openIndex = 0`, `null` allowed (all
  collapsed). Chevron right: `ChevronDown`/`ChevronUp` from lucide-react.
- **Placeholders:** none needed (no imagery in the reference).
- **Icons:** lucide-react `ChevronDown` (closed, `#999`) / `ChevronUp`
  (open, `#72c02c`), 18px, absolutely right-0 center — do NOT copy the
  icomoon icon font.
- **Copy:** keep the original content kinds — FAQ questions (download &
  register / create paypal account / link paypal & bank account) and short
  muted placeholder answers (paraphrase the lorem ipsum freely).

## Implementation tasks

1. **Scaffold** — `apps/ruffle` from the simplest existing app; rename
   package to `@free-react-templates/ruffle`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `ruffle.free.componentdock.com`,
   `"homepage"` = `https://ruffle.free.componentdock.com`.
2. **Theme tokens** — add `#ffffff` / `#212529` / `#72c02c` / `#999999` /
   `#f9f9f9` / `#b3b3b3` (and `#888888`, `#dee2e6` if used) to `@theme`;
   Roboto Google Fonts `<link>` in `index.html` (weights 300 + 400).
3. **Components** (per section, TDD — tests first):
   - `FaqAccordion` (or `RuffleAccordion`) — the core component: takes 3
     items (title + answer), holds `openIndex` state (default 0, `null`
     allowed), renders full-width text-left header buttons (15px padding,
     `#999` closed / `#72c02c` open, `ChevronDown`/`ChevronUp` 18px swap,
     `aria-expanded`/`aria-controls`) + bodies (`role="region"`,
     `aria-labelledby`, `#b3b3b3` 300-weight answer text, 20px bottom
     padding). Hairline `#f9f9f9` bottom border on each header.
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: heading "Bootstrap Accordion #9" →
   accordion (item 1 open) → footer.
5. **Verify** — `scripts/verify-app.sh ruffle` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Accordion 19" row (line 657, Bootstrap
   Accordions) `[~]`→`[x]` + surge URL + `npm run readme:status`; PR
   description must list source template, the REAL preview URL
   (`preview.colorlib.com/theme/bac/accordion-19/` — note the `/bac/`
   subpath), the heading-numbering quirk ("#9" not "#19"), design tokens, and
   the default-URL 404 gotcha.
