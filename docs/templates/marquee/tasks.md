# Marquee (ColorLib Dropdown 08) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-marquee`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 08" — eighth of the "Bootstrap Dropdowns
  (20)" series (source: https://colorlib.com/wp/template/dropdown-08/).
  TEMPLATES.md has ONE copy (line 761). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey**, Dropdown 07 as **Onboard** (see
  `docs/templates/menubar/`, `docs/templates/popmenu/`,
  `docs/templates/skycast/`, `docs/templates/chime/`,
  `docs/templates/trolley/`, `docs/templates/passkey/`,
  `docs/templates/onboard/`).
- **Demo DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-08/`
  (HTTP 200, 15.3 KB). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-08/` fails to connect — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet: `css/style.css`
  (221 KB, 8270 lines, ftco-style Bootstrap 4 theme; the template-specific
  rules are the LAST ~130 lines — ftco `body` rule at line 8135 through
  `.btn-group .dropdown-menu .dropdown-item:hover` at line 8268), libs:
  jquery, popper, bootstrap.min.js, ionicons 4.5.6 — **USED** here
  (`ion-ios-menu` hamburger + `ion-ios-arrow-round-forward` item arrows).
  Google Font **Roboto** (weights 400/500/700) via Cloudflare
  `/cf-fonts/s/roboto/` @font-face block — SAME font as the whole series.
- **Screenshot:** `dropdown-08.jpg` (1200×972, viewed in browser) — flat
  light-gray page, centered BLACK heading "Dropdown #08", a full-width
  medium-blue horizontal bar below with white uppercase "SPLASH" on the
  left and a darker-blue square button with a white hamburger icon on the
  right, the menu OPEN below the bar on its right side: white card with
  subtle shadow, five items (Home, About, Services, Blog, Contact), each
  with a small right arrow. Screenshot matches DOM + CSS exactly. No footer
  in the source.
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body bg `#fafafa` (light gray — SAME as Passkey;
  the INVERSE of Onboard/Chime's periwinkle `#79a0eb`), Roboto base
  18px/1.8, body text gray. Section `padding: 5em 0`; container max-width
  1140px. Heading `.heading-section` 28px **#000 black** (centered,
  `mb-4 pb-md-4` — black on light gray, NOT white-on-periwinkle).
- **Bar** `div.btn-group.justify-content-between.align-items-center`:
  Bootstrap base `position: relative; display: inline-flex`; ftco override
  `width: 100%; background: #4d80e4; border-radius: 4px; padding-left:
20px`. Flex utilities push the wordmark LEFT and the split RIGHT; bar
  height ≈ 60px (driven by the split).
- **Wordmark** `p.text-left.mb-0.heading` (`.heading` has NO CSS rule) →
  `a.logo`: `color: #fff`, `text-transform: uppercase`, font-size inherited
  (18px body Roboto). Source text "Splash" — recreation uses the NEW name
  **MARQUEE** (uppercase, white, left-aligned, a real link).
- **Split trigger** `a.split.dropdown-toggle.dropdown-toggle-split
.d-flex.align-items-center.justify-content-center`:
  `width: 60px; height: 60px; background: #2161dd`,
  `border-radius: 0 4px 4px 0` (right corners only), hover/focus `#3770e1`;
  inner `span.icon.ion-ios-menu` `color: #fff; font-size: 24px` (white
  hamburger). **Caret SUPPRESSED** (`.dropdown-toggle::after { display:
none; }` at line 8218 — same as Trolley; unlike Onboard/Passkey which
  keep it). Source is an `<a href="#">` with `data-toggle="dropdown"`,
  `aria-haspopup="true"`, `aria-expanded="false"` — recreation uses a
  semantic `<button>`.
- **Menu** `div.dropdown-menu.dropdown-menu-right`: RIGHT-aligned
  (Bootstrap base `right: 0; left: auto`), `border: none`, bg #fff,
  shadow `0px 10px 34px -20px rgba(0,0,0,.41)`, `padding: 0`,
  `min-width: 15rem` (240px), `margin-top: 20px`. White caret near top-RIGHT
  (`right: 20px`; `:after` `top: -.7em`, `border-width: 0 .7em .8em .7em`,
  `border-bottom-color: #fff`; `:before` duplicate at `top: -.8em`,
  `border-bottom-color: rgba(0,0,0,.02)` casts a soft shadow; both
  `z-index: -1`). NO mobile media query — stays right-aligned at all
  viewports (unlike Onboard's mobile centering).
- **Menu items** (verbatim DOM order): five `a.dropdown-item
.justify-content-between.d-flex` rows — "Home", "About", "Services",
  "Blog", "Contact" — each `<span>` label + trailing
  `<span class="ion-ios-arrow-round-forward"></span>` arrow. `.dropdown-item`:
  `padding: 15px 20px`, `border-bottom: 1px solid rgba(0,0,0,.05)`
  (last child: none), hover/focus `background: #4d80e4; color: #fff`.

## Implementation tasks (TDD, in order)

1. **Scaffold** `apps/marquee` (copy the simplest existing app, e.g. the
   Onboard app; rename package to `@free-react-templates/marquee`; add
   `public/CNAME` = `marquee.free.componentdock.com`, `"homepage"` =
   `https://marquee.free.componentdock.com`). Run `npm install` at the repo
   root and verify `grep -c "free-react-templates/marquee" package-lock.json`.
2. **Setup** `src/test/setup.ts` (jest-dom; copy the MemoryStorage polyfill
   from an existing app's setup if jsdom 30 lacks `localStorage`),
   `src/index.css` with `@theme` tokens: `--color-brand: #4d80e4`,
   `--color-accent: #2161dd` (split), hover `#3770e1`, page bg `#fafafa`,
   heading black, Roboto font stack via Google Fonts `<link>` in
   `index.html`. Register `injectUiSource()` in `vite.config.ts` (copy the
   pattern from any existing app — never use a relative `@source`).
3. **App shell + tests** — `App.tsx` composes `<DemoSection />` + `<Footer />`;
   document title "Marquee — Navigation Menu Dropdown" (see spec). Tests:
   full page render, heading, footer Component Dock link.
4. **DemoSection + tests** — the `ftco-section` equivalent (padding 5em 0):
   heading "Dropdown #08" (BLACK, centered, Roboto), the full-width
   brand-blue bar (radius 4px, left padding 20px) with the uppercase white
   "MARQUEE" wordmark link on the LEFT, the 60×60 deep-blue split trigger
   (right-rounded, white hamburger icon, NO caret, `aria-haspopup`/
   `aria-expanded`), menu opens on click RIGHT-aligned under the bar, close
   on outside click / Escape / item activation, `aria-expanded` flips.
5. **NavMenu + tests** — inside the menu: the five items in order (Home,
   About, Services, Blog, Contact), each a row with the label LEFT and a
   lucide `ArrowRight` icon RIGHT (justify-content-between), bottom border
   between items (none after last), hover/focus fills brand blue `#4d80e4`
   with white text; menu card 240px, shadow, caret top-right.
6. **Footer** — mandatory Component Dock link
   (`https://www.componentdock.com/`), no ColorLib references anywhere in
   app code (provenance lives only in the spec / TEMPLATES.md / PR).
7. **Gate + ship** — `npm run verify:app marquee` must pass (typecheck +
   lint + knip + fallow + 100% coverage + build); commit conventionally,
   open PR to main, merge immediately with `gh pr merge --squash
--delete-branch`, then bookkeeping: `[x]` + surge URL + homepage in
   TEMPLATES.md line 761 + `npm run readme:status`, push.

## Fidelity pitfalls (learned from the Dropdown series)

- **Preview URL:** always use the `/theme/bootstrap/` subpath for the
  Dropdown series; the naive URL fails. Verify with curl before writing
  tokens.
- **Font is Roboto** (400/500/700) — same as the whole series; not Poppins
  like Dropdown 03.
- **Page background is LIGHT GRAY `#fafafa` and the heading is BLACK** —
  the inverse of Onboard (white on periwinkle `#79a0eb`). Do not transpose
  the palettes; this one matches Passkey's light treatment.
- **Brand color is BLUE `#4d80e4`** (deep blue `#2161dd` for the split,
  hover `#3770e1`) — same family as Onboard, but each demo's layout
  differs; check the tokens against THIS demo's CSS.
- **Section padding is `5em 0`** — NOT 7em (Passkey/Trolley).
- **The whole bar is the dropdown group** (`btn-group`, width 100%, brand
  blue, radius 4px, padding-left 20px) — NOT a standalone blue button.
- **Trigger caret IS suppressed** (`.dropdown-toggle::after { display:
none }`) — do not render the caret triangle; the split shows ONLY the
  hamburger icon.
- **Split is a 60×60 SQUARE with right-corner radius** (`0 4px 4px 0`) —
  not a full pill/rounded button.
- **Menu is RIGHT-aligned** (`dropdown-menu-right`) with the caret at
  top-RIGHT (`right: 20px`) — NOT left-aligned like Onboard, NOT centered.
- **Menu min-width is `15rem` (240px)** — NOT 320px like Onboard's form
  card.
- **Wordmark is uppercase white "MARQUEE"** (source: "Splash") — the
  recreation renames it per the naming mandate; keep it a real link.
- **Trigger is an `<a href="#">` in the source** — use a semantic
  `<button>` with `aria-haspopup="menu"`/`aria-expanded`/`aria-controls`
  instead (conventions).
- **Icons:** `ion-ios-menu` → lucide `Menu`; `ion-ios-arrow-round-forward`
  → lucide `ArrowRight`. Probe exports with
  `node -e "console.log(typeof require('lucide-react').Menu)"` before use.
- **Item copy is verbatim:** Home, About, Services, Blog, Contact — five
  items, in that order, with the trailing arrows.
- **No mobile-specific dropdown media query** in this demo's CSS — the menu
  stays right-aligned at all viewports (do NOT add Onboard-style centering).
