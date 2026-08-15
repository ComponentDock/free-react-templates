# Onboard (ColorLib Dropdown 07) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-onboard`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 07" — seventh of the "Bootstrap Dropdowns
  (20)" series (source: https://colorlib.com/wp/template/dropdown-07/).
  TEMPLATES.md has ONE copy (line 760). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey** (see `docs/templates/menubar/`,
  `docs/templates/popmenu/`, `docs/templates/skycast/`,
  `docs/templates/chime/`, `docs/templates/trolley/`,
  `docs/templates/passkey/`).
- **Demo DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-07/`
  (HTTP 200, 15.6 KB). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-07/` fails to connect — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet: `css/style.css`
  (222 KB, 8282 lines, ftco-style Bootstrap 4 theme; the template-specific
  rules are the LAST ~150 lines — `body` rule at line 8135 through
  `.btn-group .dropdown-menu::after` at line 8282), libs: jquery, popper,
  bootstrap.min.js, ionicons 4.5.6 (loaded but unused). Google Font
  **Roboto** (weights 400/500/700) via Cloudflare `/cf-fonts/s/roboto/`
  @font-face block — SAME font as Chime/Trolley/Passkey; do NOT copy
  Poppins from Skycast.
- **Screenshot:** `dropdown-07.jpg` (1200×972, viewed in browser) — flat
  periwinkle-blue page, centered WHITE heading "Dropdown #07", dark-blue
  rounded "Sign Up" trigger (with ">" caret) left of center, menu OPEN
  below: white card with soft shadow and a caret on its top edge pointing
  at the button, "Create Your Account" bold black title, three grey-bordered
  inputs (Full Name / Email address / Password), bottom row with "Remember
  me" checkbox left and blue "Sign in" button right. Screenshot matches
  DOM + CSS exactly. No footer in the source.
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body bg `#79a0eb` (periwinkle), Roboto base
  18px/1.8, body text gray. Section `padding: 5em 0` (NOT 7em — do not
  copy Passkey/Trolley's value); container max-width 1140px. Heading
  `.heading-section` 28px **#fff** (white — INVERSE of Passkey's black on
  `#fafafa`; same white-on-periwinkle treatment as Chime), `mb-4 pb-md-4`
  (mb-4, not Passkey's mb-5).
- **Trigger** `button.btn.btn-primary.dropdown-toggle`:
  `background: #4d80e4`, `border-radius: 5px`, `padding: 12px 16px`,
  font-size 14px, weight 400, white text "Sign Up", shadow
  `0px 10px 20px -6px rgba(0,0,0,.12)`, `margin-bottom: 20px`; hover/focus
  `#2161dd`. Standard Bootstrap caret PRESENT (`::after` triangle — NOT
  suppressed, same as Passkey; unlike Trolley which hides it).
  `aria-haspopup="true"`, `aria-expanded="false"`.
- **Menu card** `form.dropdown-menu.dropdown-menu-left.px-4.pt-4`:
  `min-width: 20rem` (320px; centered + `margin-top: 70px` on ≤767.98px),
  border none, bg #fff, `padding: 1.5rem` top + sides via `px-4 pt-4`
  (NO bottom padding — the card's last row is flush), `margin-top: 20px`,
  LEFT-aligned (`dropdown-menu-left` → `left: 0; right: auto` — NOT right
  like Passkey), shadow `0 10px 34px -20px rgba(0,0,0,.41)`, caret near
  top-LEFT (`left: 30px`; `.dropdown-menu:after` `top: -.7em`,
  `border-width: 0 .7em .8em .7em`, `border-bottom-color: #fff`; `:before`
  duplicate at `top: -.8em`, `border-bottom-color: rgba(0,0,0,.02)` casts a
  soft shadow; both `z-index: -1`; on mobile `left: 50%; margin-left: -.7em`).
  NOTE: caret is top-LEFT (`left: 30px`) — NOT top-right (Passkey 35px,
  Trolley 20px) and NOT top-center (Chime).
- **Menu content** (verbatim DOM order):
  1. `div.heading-title` (UNSTYLED wrapper — no CSS rule) → `h3` "Create
     Your Account": 1.75rem/28px, Roboto, weight 400, `color: #000`,
     `line-height: 1.5`, Bootstrap `margin-bottom: .5rem`.
  2. `div.form-group` → `label[for=exampleDropdownFormFullName]` "Full
     Name" + `input[type=email].form-control#exampleDropdownFullName`
     placeholder "John Doe". SOURCE BUGS: label `for` (…FormFullName) does
     not match the input id (…FullName) — FIX with a matching id; source
     uses `type=email` for the name field — use `type=text`.
  3. `div.form-group` → "Email address" label +
     `input[type=email].form-control#exampleDropdownFormEmail2`
     placeholder "email@example.com".
  4. `div.form-group` → "Password" label +
     `input[type=password].form-control#exampleDropdownFormPassword2`
     placeholder "Password".
  5. `div.d-flex.justify-content-between.align-items-center`:
     - `div.form-check.mb-4` → checkbox `#dropdownCheck2` + label
       "Remember me".
     - `button[type=submit].btn.btn-primary` "Sign in" — INLINE, NOT
       `btn-block` (unlike Passkey's full-width submit).
       Inputs: `.form-control` — `height: 48px` (NOT Passkey's 52px), bg #fff,
       `color: rgba(0,0,0,.7)`, 16px, `border-radius: 4px`, `border: 2px solid
rgba(0,0,0,.05)` (focus `rgba(0,0,0,.1)`, no shadow), placeholder
       `rgba(0,0,0,.4)`.

## Implementation tasks (TDD, in order)

1. **Scaffold** `apps/onboard` (copy the simplest existing app, e.g. the
   Passkey app; rename package to `@free-react-templates/onboard`; add
   `public/CNAME` = `onboard.free.componentdock.com`, `"homepage"` =
   `https://onboard.free.componentdock.com`). Run `npm install` at the repo
   root and verify `grep -c "free-react-templates/onboard" package-lock.json`.
2. **Setup** `src/test/setup.ts` (jest-dom; copy the MemoryStorage polyfill
   from an existing app's setup if jsdom 30 lacks `localStorage`),
   `src/index.css` with `@theme` tokens: `--color-brand: #4d80e4`,
   `--color-accent: #2161dd` (hover), page bg `#79a0eb`, heading white,
   Roboto font stack via Google Fonts `<link>` in `index.html`. Register
   `injectUiSource()` in `vite.config.ts` (copy the pattern from any
   existing app — never use a relative `@source`).
3. **App shell + tests** — `App.tsx` composes `<DemoSection />` + `<Footer />`;
   document title "Onboard — Sign-Up Form Dropdown" (see spec). Tests: full
   page render, heading, footer Component Dock link.
4. **DemoSection + tests** — the `ftco-section` equivalent (padding 5em 0):
   heading "Dropdown #07" (WHITE, centered, Roboto), the brand-blue "Sign
   Up" trigger (radius 5px, 12px 16px, soft shadow, standard caret,
   `aria-haspopup`/`aria-expanded`), 320px white menu card LEFT-aligned
   with top-left caret, open on click, close on outside click / Escape /
   submit, `aria-expanded` flips.
5. **AccountForm + tests** — inside the menu: "Create Your Account" title
   (28px black), Full Name (placeholder "John Doe", type=text, CORRECT
   htmlFor/id), Email address (placeholder email@example.com), Password
   (placeholder Password) — reference field styling (48px, radius 4px, 2px
   `rgba(0,0,0,.05)` border); flex row with "Remember me" checkbox left +
   inline "Sign in" submit right (NOT full-width).
6. **Footer** — mandatory Component Dock link
   (`https://www.componentdock.com/`), no ColorLib references anywhere in
   app code (provenance lives only in the spec / TEMPLATES.md / PR).
7. **Gate + ship** — `npm run verify:app onboard` must pass (typecheck +
   lint + knip + fallow + 100% coverage + build); commit conventionally,
   open PR to main, merge immediately with `gh pr merge --squash
--delete-branch`, then bookkeeping: `[x]` + surge URL + homepage in
   TEMPLATES.md line 760 + `npm run readme:status`, push.

## Fidelity pitfalls (learned from the Dropdown series)

- **Preview URL:** always use the `/theme/bootstrap/` subpath for the
  Dropdown series; the naive URL fails. Verify with curl before writing
  tokens.
- **Font is Roboto** (400/500/700) — same as Chime/Trolley/Passkey; not
  Poppins like Dropdown 03.
- **Page background is PERIWINKLE `#79a0eb` and the heading is WHITE** —
  the inverse of Passkey (black on `#fafafa`). Do not transpose the
  palettes; this one matches Chime's white-on-periwinkle treatment.
- **Brand color is BLUE `#4d80e4`** (hover `#2161dd`) — NOT Passkey's
  salmon pink `#fa697c`. Each demo in the series has its own brand color.
- **Section padding is `5em 0`** — NOT 7em (Passkey/Trolley).
- **Trigger caret IS present** (Bootstrap default `::after`) — do not
  suppress it (Trolley suppresses; this demo does not).
- **Menu is LEFT-aligned** (`dropdown-menu-left`, `left: 0`) — NOT right
  like Passkey. Caret is top-LEFT (`left: 30px`), not top-right.
- **Menu padding is `px-4 pt-4`** — 1.5rem top + sides, NO bottom padding;
  not `p-4` (Passkey).
- **Submit is inline** in the flex row with the checkbox — NOT `btn-block`
  (Passkey's submit is full-width; this one is not).
- **Input height is 48px** — NOT 52px (Passkey).
- **Heading margin is `mb-4`** — not Passkey's `mb-5`.
- **Fix the Full Name label/id mismatch** (source bug) and use `type=text`
  for it (source wrongly uses `type=email`).
- **Copy is verbatim**: trigger "Sign Up" vs submit "Sign in" — the
  inconsistency exists in the source; replicate it faithfully.
- **No icons** in this demo (ionicons loaded but unused).
