# Passkey (ColorLib Dropdown 06) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-passkey`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 06" — sixth of the "Bootstrap Dropdowns
  (20)" series (source: https://colorlib.com/wp/template/dropdown-06/).
  TEMPLATES.md has ONE copy (line 759). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley** (see
  `docs/templates/menubar/`, `docs/templates/popmenu/`,
  `docs/templates/skycast/`, `docs/templates/chime/`,
  `docs/templates/trolley/`).
- **Demo DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-06/`
  (HTTP 200, 15.2 KB). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-06/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet: `css/style.css`
  (222 KB ftco-style Bootstrap 4 theme). **The template-specific tail CSS
  differs from Trolley's**: this demo's last ~90 lines style `.form-control`
  (52px, 2px `rgba(0,0,0,.05)` border, radius 4px), `.btn` (12px 16px,
  radius 5px, shadow `0 10px 20px -6px rgba(0,0,0,.12)`, `margin-bottom:
20px`), `.btn.btn-primary` (#fa697c → #f83851 hover) and
  `.btn-group .dropdown-menu` — and there is NO `.dropdown-toggle::after {
display: none }` override, so the trigger KEEPS the standard Bootstrap
  caret. Libs: jquery, popper, bootstrap.min.js, ionicons 4.5.6 (loaded but
  NOT used by this demo). Google Font **Roboto** (weights 400/500/700) via
  Cloudflare `/cf-fonts/s/roboto/` @font-face block — SAME font as Chime and
  Trolley; do NOT copy Poppins from Skycast.
- **Screenshot:** `dropdown-06.jpg` (1200×972, viewed in browser) — flat
  very-light-gray page (`#fafafa`), centered dark heading "Dropdown #06",
  salmon-pink "Sign In" button with a visible downward caret, and the menu
  OPEN directly below: white card with soft shadow containing "Email
  address" (placeholder email@example.com), "Password" (placeholder
  Password), a "Remember me" checkbox, and a wide salmon-pink "Sign in"
  submit button. The screenshot shows the menu in its default (open) state
  — matches CSS exactly. No footer in the source.
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body bg `#fafafa`, Roboto base 18px/1.8.
  Section `padding: 7em 0`; container max-width 1140px. Heading
  `.heading-section` 28px **#000** (black), `mb-5 pb-md-4` margins.
- **Trigger** `button.btn.btn-primary.dropdown-toggle`:
  `background: #fa697c`, `border-radius: 5px`, `padding: 12px 16px`,
  `font-size: 14px`, white text "Sign In", shadow
  `0px 10px 20px -6px rgba(0,0,0,.12)`, `margin-bottom: 20px`;
  hover/focus `background: #f83851`. Standard Bootstrap caret PRESENT
  (`::after` triangle: `display: inline-block; width/height: 0;
margin-left: .255em; vertical-align: .255em; border-top: .3em solid;
border-right/left: .3em solid transparent`) — NOT suppressed (differs
  from Trolley, where `.split` hides it). `aria-haspopup="true"`,
  `aria-expanded="false"`.
- **Menu card** `<form class="dropdown-menu dropdown-menu-right p-4">`:
  white, borderless, `min-width: 20rem` (320px; **NOT 25rem like Trolley**),
  `padding: 1.5rem` (the `p-4` utility wins over the base `padding: 0`),
  `margin-top: 20px` (**NOT 80px like Trolley**), right-aligned
  (`dropdown-menu-right`: Bootstrap base `right: 0; left: auto`), shadow
  `0 10px 34px -20px rgba(0,0,0,.41)`, caret near top-RIGHT
  (`.dropdown-menu:after` `top: -.7em`, `right: 35px` — **NOT 20px like
  Trolley**; `border-width: 0 .7em .8em .7em`, `border-bottom-color: #fff`;
  `:before` duplicate at `top: -.8em`, `border-bottom-color:
rgba(0,0,0,.02)` casts a soft shadow; both `z-index: -1`). On ≤767.98px:
  `left: 50% !important; transform: translateX(-50%) !important`,
  `margin-top: 70px` (and the caret re-centers: `left: 50%; margin-left:
-.7em`).
- **Form content (verbatim from the DOM)** — Bootstrap 4's classic sign-in
  example:
  - `div.form-group` → `label[for=exampleDropdownFormEmail2]` "Email
    address" + `input[type=email].form-control#exampleDropdownFormEmail2`
    placeholder "email@example.com".
  - `div.form-group` → `label[for=exampleDropdownFormPassword2]` "Password"
    - `input[type=password].form-control#exampleDropdownFormPassword2`
      placeholder "Password".
  - `div.form-check.mb-2` → `input[type=checkbox].form-check-input#dropdownCheck2`
    - `label.form-check-label[for=dropdownCheck2]` "Remember me".
  - `button[type=submit].btn.btn-primary.btn-block` "Sign in" (lowercase
    "in" — the trigger says "Sign In").
    Inputs `.form-control`: `height: 52px !important`, bg `#fff`,
    `color: rgba(0,0,0,.7)`, `font-size: 16px`, `border-radius: 4px`,
    `border: 2px solid rgba(0,0,0,.05)` (focus `rgba(0,0,0,.1)`), placeholder
    `rgba(0,0,0,.4)`. Labels: Bootstrap default (~14px, inline-block,
    `margin-bottom: .5rem`).

## Implementation tasks (TDD, in order)

1. **Scaffold** `apps/passkey` (copy the simplest existing app, e.g. the
   Trolley app; rename package to `@free-react-templates/passkey`; add
   `public/CNAME` = `passkey.free.componentdock.com`, `"homepage"` =
   `https://passkey.free.componentdock.com`). Run `npm install` at the repo
   root and verify `grep -c "free-react-templates/passkey" package-lock.json`.
2. **Setup** `src/test/setup.ts` (jest-dom; copy the MemoryStorage polyfill
   from an existing app's setup if jsdom 30 lacks `localStorage`),
   `src/index.css` with `@theme` tokens: `--color-brand: #fa697c`,
   `--color-accent: #f83851` (hover), page bg `#fafafa`, Roboto font stack
   via Google Fonts `<link>` in `index.html`. Register `injectUiSource()` in
   `vite.config.ts` (copy the pattern from any existing app — never use a
   relative `@source`).
3. **App shell + tests** — `App.tsx` composes `<DemoSection />` + `<Footer />`;
   document title "Passkey — Sign-In Form Dropdown" (see spec). Tests: full
   page render, heading, footer Component Dock link.
4. **DemoSection + tests** — the `ftco-section` equivalent: heading
   "Dropdown #06" (black, centered, Roboto), the brand-pink "Sign In"
   trigger button (radius 5px, padding 12px 16px, 14px, caret, hover
   `#f83851`), and the white 320px menu card right-aligned under it
   (shadow, caret top-right `right: 35px`). State: `isOpen` — default
   closed; click toggles; outside click / Escape closes; `aria-expanded`
   flips. NOTE: the screenshot shows the menu open, but the reference
   default is closed (Bootstrap `aria-expanded="false"`) — implement
   closed-by-default.
5. **SignInForm + tests** — `<form>` inside the menu: Email address input
   (type email, placeholder email@example.com), Password input (type
   password, placeholder Password), Remember me checkbox (form-check),
   full-width "Sign in" submit (`type=submit`, `btn-block`). Labels with
   htmlFor/id pairing. Submit handler: preventDefault (non-navigating
   demo), close the menu. Input styling per the reference tokens (52px,
   radius 4px, 2px `rgba(0,0,0,.05)` border, focus `rgba(0,0,0,.1)`).
6. **Responsive menu + tests** — at small widths the menu centers on the
   trigger (`left: 50%`, `translateX(-50%)`) with `margin-top: 70px` and
   the caret re-centers.
7. **Footer** — mandatory Component Dock link
   (`https://www.componentdock.com/`), no ColorLib references anywhere in
   app code (provenance lives only in the spec / TEMPLATES.md / PR).
8. **Gate + ship** — `npm run verify:app passkey` must pass (typecheck +
   lint + knip + fallow + 100% coverage + build); commit conventionally,
   open PR to main, merge immediately with `gh pr merge --squash
--delete-branch`, then bookkeeping: `[x]` + surge URL + homepage in
   TEMPLATES.md line 759 + `npm run readme:status`, push.

## Fidelity pitfalls (learned from the Dropdown series)

- **Preview URL:** always use the `/theme/bootstrap/` subpath for the
  Dropdown series; the naive URL 404s. Verify with curl before writing
  tokens.
- **Font is Roboto** (same as Chime/Trolley — not Poppins like Dropdown 03).
- **The trigger KEEPS its caret** — unlike Trolley/Dropdown 05 (whose
  `.split` CSS sets `.dropdown-toggle::after { display: none }`), Dropdown
  06 has no suppression rule, so the standard Bootstrap caret triangle
  renders. The screenshot confirms it.
- **Tail CSS differs per demo** — do NOT copy Trolley's token values. This
  demo: menu `min-width: 20rem` (320px), `margin-top: 20px` (not 80px),
  caret `right: 35px` (not 20px), `padding: 1.5rem` (via `p-4`), menu is
  right-aligned (`dropdown-menu-right`), NOT centered like Trolley.
- **"Sign In" vs "Sign in"** — the trigger label is "Sign In" (capital I);
  the submit button is "Sign in" (lowercase i). Keep both verbatim.
- **No icons** — ionicons is loaded by the page but this demo uses no icon.
  No lucide imports needed.
- **Menu is a `<form>`** — semantic `<form>` element with labeled inputs and
  a submit button; the demo does not navigate on submit (preventDefault),
  but the menu MUST close on submit.
- **Heading is BLACK on light gray** (`#000` on `#fafafa`) — the inverse of
  Chime's white-on-periwinkle. Do not transpose the palettes.
- **No header/hero/footer in the source** — the page is purely the demo
  section; add only the mandatory monorepo Component Dock footer.
