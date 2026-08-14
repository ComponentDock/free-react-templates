# Tuck (ColorLib Accordion 20) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Tuck** (NEW name —
> the ColorLib source keeps its name "Accordion 20"). Implementation ships on
> `feat/template-tuck` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 20" — free single-page FAQ accordion
  component template (source: https://colorlib.com/wp/template/accordion-20/).
  TEMPLATES.md row: line 658 (**Bootstrap Accordions (20)**). The
  `accordion-20` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-20/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-20/`
  (HTTP 200, 19.5KB HTML; same `/bac/` subpath pattern as accordion-19).
  Stylesheets: `css/style.css` (1.4KB — the accordion tokens),
  `css/bootstrap.min.css` (160.4KB, Bootstrap 4 defaults),
  `fonts/icomoon/style.css` (loaded but UNUSED — no glyph elements in the
  page), `css/owl.carousel.min.css` (unused on this page). JS: `js/main.js`
  (adds/removes `.active` on the item on panel show/hide). Screenshot
  (`accordion-20.jpg`, 1200×972) browser-verified 2026-08-14: pale-blue
  page, centered dark heading "Bootstrap Accordion #10", white shadowed card
  with three flush header rows — first row terracotta-orange with white text
  - expanded white answer panel, other two rows light grey with black text,
    no chevrons, no footer.
- **⚠ Numbering quirk:** the reference renders the heading as
  **"Bootstrap Accordion #10"** (live DOM `<h2>` AND the official screenshot)
  even though the TEMPLATES.md row says "Accordion 20" (the ColorLib preview
  numbers run 10 behind the row names; same -10 offset as accordion-19 →
  "#9"). Fidelity = render "#10" exactly; do not "fix" it. Mention this in
  the PR description.
- **⚠ NOT a clone of accordion-19/Ruffle:** despite the same row family, the
  design tokens differ completely — pale-blue page (`#dcf1ff`) vs white;
  card drop-shadow vs flat; terracotta-orange `#e76739` active fill vs green
  `#72c02c`; NO chevrons (Ruffle has chevron swaps); NO hairline separators;
  `#f1f4f8` closed-row fill vs transparent-with-`#999`-text. Implement from
  THIS reference, not from the sibling spec.
- **Structure observed (1:1):** `div.content` (padding 7rem 0, pale-blue
  page) → `div.container` → centered `h2.my-5.text-center` "Bootstrap
  Accordion #10" (20px, `#212529`, my-5 = 3rem top/bottom) → second
  `div.container` → `div#accordion_1.custom-accordion` (white, radius 0,
  `box-shadow: 0 5px 30px 0 rgba(0,0,0,0.3)`) with 3 `div.accordion-item`s
  (margin-bottom 0, radius 0, overflow hidden, bg `#fff`, flush — no
  separators). Each item: `h2.mb-0` → `button.btn.btn-link` (display block,
  width 100%, padding 15px / padding-left 20px, text-left, color `#000`, bg
  `#f1f4f8`, border none, radius 0, position relative, transition .3s all
  ease; closed buttons also carry Bootstrap's `collapsed` class; NO
  `::before` chevron); body `div.collapse` → `div.accordion-body` (padding
  20px 20px 20px 20px, color `#888`) with one `p` lorem-ipsum paragraph
  (`#b3b3b3`, weight 300). Item 1 "How to download and register?" OPEN by
  default (`collapse show`, `aria-expanded="true"`, `.active` → header bg
  `#e76739`, text `#fff`); items 2 "How to create your paypal account?" and
  3 "How to link your paypal and bank account?" CLOSED (`collapsed`,
  `aria-expanded="false"`, bg `#f1f4f8`, text `#000`).
  `data-parent="#accordion_1"` = only one open at a time (clicking the open
  header collapses it → NONE open). NO footer in the original — add the
  mandatory Component Dock attribution footer (repo convention).
- **Design tokens:** page `#dcf1ff`; heading text `#212529`; card `#fff`
  with `0 5px 30px 0 rgba(0,0,0,0.3)` shadow; closed rows `#f1f4f8` bg +
  `#000` text; active row `#e76739` bg + `#fff` text (the ONLY saturated
  color on the page); body base `#888`, paragraph `#b3b3b3` weight 300;
  font **Roboto** (body 16px/1.5/400, h2 20px) — Poppins + Source Serif Pro
  are preloaded by the preview but unused; radius 0 everywhere; wrapper
  padding 7rem 0; button padding 15px (left 20px); body padding 20px all
  sides.
- **Design approach:** flat color-block accordion — one interactive surface
  (the white card), state signalled ONLY by the header fill (grey → orange).
  No chevrons, no borders, no images, no icons. Fidelity is about the exact
  fills, the 15px/20px paddings, the card shadow, and the flush rows.
  Default `openIndex = 0`, `null` allowed (all collapsed).
- **Placeholders:** none needed (no imagery in the reference).
- **Icons:** NONE — do NOT add chevrons or any icon; the `#e76739` fill is
  the open-state signal (this is the key difference from sibling Ruffle).
- **Copy:** keep the original content kinds — FAQ questions (download &
  register / create paypal account / link paypal & bank account) and short
  muted placeholder answers (paraphrase the lorem ipsum freely).

## Implementation tasks

1. **Scaffold** — `apps/tuck` from the simplest existing app; rename
   package to `@free-react-templates/tuck`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `tuck.free.componentdock.com`,
   `"homepage"` = `https://tuck.free.componentdock.com`.
2. **Theme tokens** — add `#dcf1ff` / `#212529` / `#ffffff` / `#f1f4f8` /
   `#000000` / `#e76739` / `#888888` / `#b3b3b3` to `@theme`; card shadow
   utility `0 5px 30px 0 rgba(0,0,0,0.3)`; Roboto Google Fonts `<link>` in
   `index.html` (weights 300 + 400).
3. **Components** (per section, TDD — tests first):
   - `FaqAccordion` (or `TuckAccordion`) — the core component: takes 3
     items (title + answer), holds `openIndex` state (default 0, `null`
     allowed), renders full-width text-left header buttons (15px padding +
     padding-left 20px, `#f1f4f8` closed / `#e76739` open with `#fff` text,
     NO chevron, `aria-expanded`/`aria-controls`) + bodies (`role="region"`,
     `aria-labelledby`, 20px padding, `#888` base / `#b3b3b3` 300-weight
     answer text). Card wrapper carries the shadow + radius 0 + flush rows.
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: heading "Bootstrap Accordion #10" →
   accordion card (item 1 open) → footer.
5. **Verify** — `scripts/verify-app.sh tuck` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Accordion 20" row (line 658, Bootstrap
   Accordions) `[~]`→`[x]` + surge URL + `npm run readme:status`; PR
   description must list source template, the REAL preview URL
   (`preview.colorlib.com/theme/bac/accordion-20/` — note the `/bac/`
   subpath), the heading-numbering quirk ("#10" not "#20"), the design
   tokens, the NO-chevrons / orange-fill difference vs Ruffle, and the
   default-URL 404 gotcha.
