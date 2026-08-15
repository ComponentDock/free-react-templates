# Inquire (ColorLib Dropdown 10) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-inquire`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 10" — tenth of the "Bootstrap Dropdowns
  (20)" series (source: https://colorlib.com/wp/template/dropdown-10/).
  TEMPLATES.md has ONE copy (line 763). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey**, Dropdown 07 as **Onboard**, Dropdown 08 as
  **Marquee**, Dropdown 09 as **Glimpse** (see `docs/templates/menubar/`,
  `docs/templates/popmenu/`, `docs/templates/skycast/`,
  `docs/templates/chime/`, `docs/templates/trolley/`,
  `docs/templates/passkey/`, `docs/templates/onboard/`,
  `docs/templates/marquee/`, `docs/templates/glimpse/`). This prep:
  Dropdown 10 → **Inquire**.
- **Demo DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-10/`
  (HTTP 200, 15.2 KB). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-10/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet: `css/style.css`
  (222 KB, 8294 lines, ftco-style Bootstrap 4 theme; the template-specific
  rules are the LAST ~145 lines — ftco `body` rule at ~line 8150 through
  `.btn-group .dropdown-menu:after` at line 8294), libs: jquery, popper,
  bootstrap.min.js, `js/main.js` (only a `fullHeight` helper), ionicons
  4.5.6 — **NOT USED** here (no icons in the markup). Google Font
  **Roboto** (weights 400/500/700) via Cloudflare `/cf-fonts/s/roboto/`
  @font-face block — SAME font as the whole series.
- **Screenshot:** `dropdown-10.jpg` (1200×972, viewed in browser) — flat
  light-gray page, centered BLACK heading "Dropdown #10", below it a
  centered olive-green "Request A Quote" button with a small white caret,
  the menu OPEN below: white card with subtle shadow, an olive header strip
  "Consultation" (white, left-aligned), then four stacked input fields
  (Full Name, Email Address, Subject, Message) and an olive "Send A
  Message" submit button. Screenshot matches DOM + CSS exactly. No footer
  in the source.
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body bg `#fafafa` (light gray — SAME as
  Passkey/Marquee/Glimpse), Roboto base 18px/1.8, body text gray. Section
  `padding: 3em 0` (NOT Glimpse's 7em, NOT Marquee's 5em — the smallest of
  the series so far). Container max-width 1140px. Heading
  `.heading-section` 28px **#000 black** (centered, **`mb-4`** = 1.5rem —
  NOTE: only `mb-4`, no `pb-md-4`, no `mb-5` like Glimpse).
- **Trigger** `button.btn.btn-primary.dropdown-toggle` "Request A Quote"
  (a real `<button>` in the source): ftco `.btn` override `padding: 12px
16px; border-width: 1px; border-radius: 5px; font-size: 14px;
font-weight: 400; box-shadow: 0px 10px 20px -6px rgba(0,0,0,.12);
position: relative; margin-bottom: 20px`. Fill `.btn.btn-primary {
background: #94aa2a !important; border-color: #94aa2a !important; color:
#fff }`, hover/focus `#708120`. **The standard Bootstrap caret IS
  present** (`.dropdown-toggle::after` base rule at line 2531 untouched —
  NOT suppressed like Marquee). No split, no bar, no logo — the button is
  the whole trigger.
- **Menu** `form.dropdown-menu.dropdown-menu-left`: **LEFT-aligned**
  (Bootstrap base `left: 0; right: auto` — the INVERSE of Glimpse's
  right-aligned card), `border: none`, bg #fff, shadow `0px 10px 34px
-20px rgba(0,0,0,.41)`, **`padding: 0`** (the form supplies its own
  spacing — NOT Glimpse's 20px card padding), **`min-width: 20rem`
  (320px)**, `margin-top: 20px`. Brand-olive caret near top-LEFT
  (`left: 30px`; `:after` `top: -.7em`, `border-width: 0 .7em .8em .7em`,
  **`border-bottom-color: #94aa2a`** — brand colored, NOT Glimpse's white;
  `:before` duplicate at `top: -.8em`, `border-bottom-color:
rgba(0,0,0,.02)` casts a soft shadow; both `z-index: -1`).
- **Mobile media query (`@media (max-width: 767.98px)`):** menu CENTERS
  under the button — `left: 50% !important; transform: translateX(-50%)
!important; margin-top: 70px`, caret moves to `left: 50%; margin-left:
-.7em` (same treatment as Onboard/Glimpse).
- **Menu content** (verbatim DOM order): `div.heading-title.py-4.px-4`
  (bg `#94aa2a`, `margin-bottom: 20px`, `border-radius: 4px 4px 0 0` —
  rounded TOP corners only) → `h3.mb-0` "Consultation" (20px, weight 700,
  white); then `div.px-4` (1.5rem horizontal padding) with four
  `.form-group` (margin-bottom 1rem): `input.form-control` "Full Name",
  `input.form-control` "Email Address", `input.form-control` "Subject",
  `textarea.form-control` rows=3 "Message"; then `button.btn.btn-primary`
  "Send A Message" (olive; its 20px margin-bottom creates the card's
  bottom gap). `.form-control`: `height: 48px`, bg #fff, text
  `rgba(0,0,0,.7)`, 16px, `border-radius: 4px`, **`border: 2px solid
rgba(0,0,0,.05)`**, focus → `border-color: rgba(0,0,0,.1)` no
  shadow/outline, placeholder `rgba(0,0,0,.4)`, textarea `height: inherit`.

## Implementation tasks (TDD, in order)

1. **Scaffold** `apps/inquire` (copy the simplest existing app, e.g. the
   Glimpse app; rename package to `@free-react-templates/inquire`; add
   `public/CNAME` = `inquire.free.componentdock.com`, `"homepage"` =
   `https://inquire.free.componentdock.com`). Run `npm install` at the repo
   root and verify `grep -c "free-react-templates/inquire" package-lock.json`.
2. **Setup** `src/test/setup.ts` (jest-dom; copy the MemoryStorage polyfill
   from an existing app's setup if jsdom 30 lacks `localStorage`),
   `src/index.css` with `@theme` tokens: `--color-brand: #94aa2a` (button
   bg/border, header strip bg, caret, link color), hover `#708120`, page bg
   `#fafafa`, heading black, body gray, form border `rgba(0,0,0,.05)` /
   focus `rgba(0,0,0,.1)`, Roboto font stack via Google Fonts `<link>` in
   `index.html`. Register `injectUiSource()` in `vite.config.ts` (copy the
   pattern from any existing app — never use a relative `@source`).
3. **App shell + tests** — `App.tsx` composes `<DemoSection />` + `<Footer />`;
   document title "Inquire — Quote Form Dropdown" (see spec). Tests:
   full page render, heading, footer Component Dock link.
4. **DemoSection + tests** — the `ftco-section` equivalent (padding **3em
   0**): heading "Dropdown #10" (BLACK, centered, Roboto, mb-4/1.5rem
   bottom margin), the centered olive "Request A Quote" button (radius 5px,
   padding 12px 16px, 14px font, shadow `0px 10px 20px -6px
rgba(0,0,0,.12)`, margin-bottom 20px, WHITE caret present, hover
   `#708120`, `aria-haspopup`/`aria-expanded`), menu opens on click
   LEFT-aligned under the button, closes on outside click / Escape /
   trigger re-click, `aria-expanded` flips.
5. **QuoteForm + tests** — inside the menu: olive header strip
   (`#94aa2a`, rounded top corners only, "Consultation" white 20px/700,
   1.5rem padding, 20px bottom margin) + four stacked labeled controls
   (Full Name text, Email Address email, Subject text, Message textarea)
   with 2px `rgba(0,0,0,.05)` borders, radius 4px, 48px height (textarea
   auto), placeholder `rgba(0,0,0,.4)`; "Send A Message" olive submit →
   client-side success message on valid submit, per-field zod errors on
   invalid/incomplete submit (monorepo form conventions); menu card 320px
   min-width, padding 0, shadow, brand-olive caret top-left at `left: 30px`.
6. **Mobile behavior + tests** — at viewport < 768px the menu centers
   horizontally under the button (left 50% + translateX(-50%) equivalent)
   with margin-top 70px and centered caret. (jsdom viewport note: Tailwind
   `md:`/`max-md:` compile against jsdom's default 1024px width — assert
   the mobile variant with an explicit small viewport or a responsive
   class that applies below 768px, per the Wavecast pitfall.)
7. **Footer** — mandatory Component Dock link
   (`https://www.componentdock.com/`), no ColorLib references anywhere in
   app code (provenance lives only in the spec / TEMPLATES.md / PR).
8. **Gate + ship** — `npm run verify:app inquire` must pass (typecheck +
   lint + knip + fallow + 100% coverage + build); commit conventionally,
   open PR to main, merge immediately with `gh pr merge --squash
--delete-branch`, then bookkeeping: `[x]` + surge URL + homepage in
   TEMPLATES.md line 763 + `npm run readme:status`, push.

## Fidelity pitfalls (learned from the Dropdown series)

- **Preview URL:** always use the `/theme/bootstrap/` subpath for the
  Dropdown series; the naive URL 404s (verify with curl before writing
  tokens).
- **Font is Roboto** (400/500/700) — same as the whole series; not Poppins
  like Dropdown 03.
- **Page background is LIGHT GRAY `#fafafa` and the heading is BLACK** —
  the inverse of Onboard (white on periwinkle `#79a0eb`). Do not transpose
  the palettes; this one matches Passkey/Marquee/Glimpse's light treatment.
- **Brand color is OLIVE `#94aa2a`** (hover `#708120`) — NOT the cyan
  `#3fc5f0` of Glimpse, NOT the blue `#4d80e4`/`#2161dd` of Onboard/Marquee.
  Do not reuse a sibling template's tokens; check THIS demo's CSS.
- **Section padding is `3em 0`** — NOT 5em (Marquee), NOT 7em (Glimpse);
  verify against the live CSS, don't copy an earlier spec.
- **Heading margin is `mb-4` only** (1.5rem) — NOT Glimpse's `mb-5
pb-md-4`. Read the demo HTML, don't copy the Glimpse spec.
- **The trigger is a standalone olive button with the caret PRESENT** —
  NOT a full-width bar with a split toggle (Marquee), NOT a caret-suppressed
  split. The standard `.dropdown-toggle::after` triangle shows (white on
  the olive button). The button is already a semantic `<button>` in the
  source — keep `<button>`, add `aria-haspopup="menu"` / `aria-expanded` /
  `aria-controls` per conventions.
- **The menu is a FORM card, not a media card or nav list**: LEFT-aligned
  (`dropdown-menu-left`), `padding: 0`, `min-width: 20rem` (320px), and
  the caret is at **`left: 30px`** (top-LEFT) and **brand-olive
  `#94aa2a`** — NOT Glimpse's white caret at `right: 35px`, NOT Marquee's
  padding-0 240px list with `right: 20px`.
- **Menu has a MOBILE media query that CENTERS it** under the button
  (translateX(-50%), margin-top 70px, caret centered) — unlike
  Marquee/Passkey which stay right-aligned at all viewports. Do NOT skip
  the mobile variant.
- **The source inputs are placeholder-only** (no labels; sloppy markup
  uses `type="email"` on every input). The recreation MUST use semantic
  types (text/email/text) and real labels/aria-labels per monorepo
  accessibility conventions.
- **The submit button must not be dead**: client-side zod validation +
  success message (monorepo form conventions). The source has no backend.
- **No icons and no images in this demo** — ionicons loads but the markup
  uses none, and there are no photos at all (purely CSS-driven). Do not
  add lucide icons or picsum placeholders.
- **Card interior spacing comes from Bootstrap utilities**, not the card:
  header `py-4 px-4` (1.5rem), body `px-4`, `.form-group` 1rem, submit's
  `margin-bottom: 20px` is the card's bottom gap (card padding is 0).
