# Glimpse (ColorLib Dropdown 09) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-glimpse`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 09" — ninth of the "Bootstrap Dropdowns
  (20)" series (source: https://colorlib.com/wp/template/dropdown-09/).
  TEMPLATES.md has ONE copy (line 762). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey**, Dropdown 07 as **Onboard**, Dropdown 08 as
  **Marquee** (see `docs/templates/menubar/`, `docs/templates/popmenu/`,
  `docs/templates/skycast/`, `docs/templates/chime/`,
  `docs/templates/trolley/`, `docs/templates/passkey/`,
  `docs/templates/onboard/`, `docs/templates/marquee/`). This prep:
  Dropdown 09 → **Glimpse**.
- **Demo DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-09/`
  (HTTP 200, 14.6 KB). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-09/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet: `css/style.css`
  (222 KB, 8288 lines, ftco-style Bootstrap 4 theme; the template-specific
  rules are the LAST ~150 lines — ftco `body` rule at line 8135 through
  `.btn-group .text { width: 50% }` at line 8288), libs: jquery, popper,
  bootstrap.min.js, ionicons 4.5.6 — **NOT USED** here (no icons in the
  markup). Google Font **Roboto** (weights 400/500/700) via Cloudflare
  `/cf-fonts/s/roboto/` @font-face block — SAME font as the whole series.
- **Screenshot:** `dropdown-09.jpg` (1200×972, viewed in browser) — flat
  light-gray page, centered BLACK heading "Dropdown #09", below it a
  centered medium-cyan "View Details" button with a small white caret, the
  menu OPEN below: white card with subtle shadow, left half a square B&W
  portrait photo (musician/artist on a chair, white-framed), right half a
  short gray paragraph. Screenshot matches DOM + CSS exactly. No footer in
  the source.
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body bg `#fafafa` (light gray — SAME as
  Passkey/Marquee; the INVERSE of Onboard/Chime's periwinkle `#79a0eb`),
  Roboto base 18px/1.8, body text gray. Section `padding: 7em 0` (NOT
  Marquee's 5em — matches Passkey/Trolley). Container max-width 1140px.
  Heading `.heading-section` 28px **#000 black** (centered, `mb-5 pb-md-4`
  — note `mb-5` = 3rem, MORE than Marquee's `mb-4`).
- **Trigger** `button.btn.btn-primary.dropdown-toggle` "View Details"
  (already a real `<button>` in the source, unlike Marquee's `<a href="#">`):
  ftco `.btn` override `padding: 12px 16px; border-width: 1px;
border-radius: 5px; font-size: 14px; font-weight: 400; box-shadow: 0px
10px 20px -6px rgba(0,0,0,.12); position: relative; margin-bottom: 20px`.
  Fill `.btn.btn-primary { background: #3fc5f0 !important; border-color:
#3fc5f0 !important; color: #fff }`, hover/focus `#12b5ea`. **The standard
  Bootstrap caret IS present** (`.dropdown-toggle::after` base rule at line
  2531 untouched — NOT suppressed like Marquee). No split, no bar, no
  logo — the button is the whole trigger.
- **Menu** `div.dropdown-menu.dropdown-menu-right`: RIGHT-aligned
  (Bootstrap base `right: 0; left: auto`), `border: none`, bg #fff, shadow
  `0px 10px 34px -20px rgba(0,0,0,.41)`, **`padding: 20px`**, **`min-width:
20rem` (320px)**, `margin-top: 20px`. White caret near top-RIGHT
  (`right: 35px`; `:after` `top: -.7em`, `border-width: 0 .7em .8em .7em`,
  `border-bottom-color: #fff`; `:before` duplicate at `top: -.8em`,
  `border-bottom-color: rgba(0,0,0,.02)` casts a soft shadow; both
  `z-index: -1`).
- **Mobile media query (`@media (max-width: 767.98px)`):** menu CENTERS
  under the button — `left: 50% !important; transform: translateX(-50%)
!important; margin-top: 70px`, caret moves to `left: 50%; margin-left:
-.7em` (same treatment as Onboard; the INVERSE of Marquee/Passkey which
  have no mobile query).
- **Menu content** (verbatim DOM order): `div.d-flex` → `div.img`
  `style="background-image: url(images/img.jpg)"` (`.btn-group .img {
width: 50% }`, cover) + `div.text.pl-3` (`.btn-group .text { width: 50% }`,
  Bootstrap `pl-3` = 1rem left padding) with one `<p>`: "A small river
  named Duden flows by their place and supplies it with the necessary
  regelialia." (gray, Roboto 18px/1.8 inherited). Source image is a 400×601
  portrait, B&W musician/artist on a chair.

## Implementation tasks (TDD, in order)

1. **Scaffold** `apps/glimpse` (copy the simplest existing app, e.g. the
   Marquee app; rename package to `@free-react-templates/glimpse`; add
   `public/CNAME` = `glimpse.free.componentdock.com`, `"homepage"` =
   `https://glimpse.free.componentdock.com`). Run `npm install` at the repo
   root and verify `grep -c "free-react-templates/glimpse" package-lock.json`.
2. **Setup** `src/test/setup.ts` (jest-dom; copy the MemoryStorage polyfill
   from an existing app's setup if jsdom 30 lacks `localStorage`),
   `src/index.css` with `@theme` tokens: `--color-brand: #3fc5f0` (button
   bg/border, link color), hover `#12b5ea`, page bg `#fafafa`, heading
   black, body gray, Roboto font stack via Google Fonts `<link>` in
   `index.html`. Register `injectUiSource()` in `vite.config.ts` (copy the
   pattern from any existing app — never use a relative `@source`).
3. **App shell + tests** — `App.tsx` composes `<DemoSection />` + `<Footer />`;
   document title "Glimpse — Media Card Dropdown" (see spec). Tests:
   full page render, heading, footer Component Dock link.
4. **DemoSection + tests** — the `ftco-section` equivalent (padding **7em
   0**): heading "Dropdown #09" (BLACK, centered, Roboto, mb-5/3rem bottom
   margin), the centered cyan "View Details" button (radius 5px, padding
   12px 16px, 14px font, shadow `0px 10px 20px -6px rgba(0,0,0,.12)`,
   margin-bottom 20px, WHITE caret present, hover `#12b5ea`,
   `aria-haspopup`/`aria-expanded`), menu opens on click RIGHT-aligned
   under the button, closes on outside click / Escape / trigger re-click,
   `aria-expanded` flips.
5. **MediaCard + tests** — inside the menu: `d-flex` two-column layout,
   LEFT 50% cover portrait image (picsum placeholder — suggest
   `https://picsum.photos/id/1027/400/600`, a verified portrait; subject-
   screen before pinning: the source is a B&W musician portrait, so avoid
   landscape/nature seeds), RIGHT 50% text column with 1rem left padding
   and one short gray paragraph; menu card 320px, padding 20px, shadow,
   caret top-right at `right: 35px`.
6. **Mobile behavior + tests** — at viewport < 768px the menu centers
   horizontally under the button (left 50% + translateX(-50%) equivalent)
   with margin-top 70px and centered caret. (jsdom viewport note: Tailwind
   `md:`/`max-md:` compile against jsdom's default 1024px width — assert
   the mobile variant with an explicit small viewport or a responsive
   class that applies below 768px, per the Wavecast pitfall.)
7. **Footer** — mandatory Component Dock link
   (`https://www.componentdock.com/`), no ColorLib references anywhere in
   app code (provenance lives only in the spec / TEMPLATES.md / PR).
8. **Gate + ship** — `npm run verify:app glimpse` must pass (typecheck +
   lint + knip + fallow + 100% coverage + build); commit conventionally,
   open PR to main, merge immediately with `gh pr merge --squash
--delete-branch`, then bookkeeping: `[x]` + surge URL + homepage in
   TEMPLATES.md line 762 + `npm run readme:status`, push.

## Fidelity pitfalls (learned from the Dropdown series)

- **Preview URL:** always use the `/theme/bootstrap/` subpath for the
  Dropdown series; the naive URL 404s (this demo returns HTTP 404, not a
  connect failure like 08 — verify with curl before writing tokens).
- **Font is Roboto** (400/500/700) — same as the whole series; not Poppins
  like Dropdown 03.
- **Page background is LIGHT GRAY `#fafafa` and the heading is BLACK** —
  the inverse of Onboard (white on periwinkle `#79a0eb`). Do not transpose
  the palettes; this one matches Passkey/Marquee's light treatment.
- **Brand color is CYAN `#3fc5f0`** (hover `#12b5ea`) — NOT the blue
  `#4d80e4`/`#2161dd` of Onboard/Marquee. Do not reuse the sibling
  template's tokens; check THIS demo's CSS.
- **Section padding is `7em 0`** — NOT 5em (Marquee) and NOT 7em-with-pt-0;
  verify against the live CSS, don't copy the Marquee spec.
- **The trigger is a standalone cyan button with the caret PRESENT** — NOT
  a full-width bar with a split toggle (Marquee), NOT a caret-suppressed
  split. The standard `.dropdown-toggle::after` triangle shows (white on
  the cyan button).
- **The button is already a semantic `<button>` in the source** — keep
  `<button>`, add `aria-haspopup="menu"` / `aria-expanded` / `aria-controls`
  per conventions.
- **The menu card is a MEDIA card** (image + text), not a nav-item list:
  `padding: 20px`, `min-width: 20rem` (320px), caret at `right: 35px` —
  NOT Marquee's padding-0 240px list with `right: 20px` caret.
- **Menu has a MOBILE media query that CENTERS it** under the button
  (translateX(-50%), margin-top 70px, caret centered) — unlike
  Marquee/Passkey which stay right-aligned at all viewports. Do NOT skip
  the mobile variant.
- **Image column is 50% width, cover, with NO fixed height** — driven by
  the text column's height; the `text` column is also 50% with 1rem left
  padding (`pl-3`).
- **No icons in this demo** — ionicons loads but the markup uses none. Do
  not add lucide icons; the only adornment is the caret.
- **Paragraph copy is one short filler sentence** ("A small river named
  Duden flows by their place and supplies it with the necessary
  regelialia.") — a generic lorem-style description; paraphrase is fine.
- **Picsum image:** source is a 400×601 B&W portrait (musician). Pin a
  portrait-format, person-subject placeholder (skill-verified IDs: 1027,
  64, 823, 996) and browser-verify the subject before committing; update
  spec + docs together if the seed changes.
