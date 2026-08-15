# Privy (ColorLib Dropdown 11) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-privy`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 11" — eleventh of the "Bootstrap Dropdowns
  (20)" series (source: https://colorlib.com/wp/template/dropdown-11/).
  TEMPLATES.md has ONE copy (line 764). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey**, Dropdown 07 as **Onboard**, Dropdown 08 as
  **Marquee**, Dropdown 09 as **Glimpse**, Dropdown 10 as **Inquire** (see
  `docs/templates/menubar/` … `docs/templates/inquire/`). This prep:
  Dropdown 11 → **Privy**.
- **Demo DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-11/`
  (HTTP 200, 16.7 KB). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-11/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath. The page uses a
  **SLIM 71-line `css/style.css`** (2,199 bytes) — NOT the 222 KB ftco
  stylesheet that dropdown-09/10 load (the series pages were regenerated
  with a new builder). Other assets: `fonts/icomoon/style.css` (icon-cog =
  FA `\f013` solid gear), `css/bootstrap.min.css` (BS4 base),
  `css/owl.carousel.min.css` + `js/owl.carousel.min.js` (loaded but UNUSED),
  jquery/popper/bootstrap.min.js, `js/main.js` (adds `.active` to
  `.dropdown-menu` 100 ms after `show.bs.dropdown`, removes on hide —
  drives the animation only). Google Fonts via cf-fonts: Roboto (300/400),
  Poppins (300/400/500), Source Serif Pro (400/600) — **only Roboto is used**
  in the demo.
- **HEADING BUG (documented in the spec — reproduce faithfully):** the page
  renders "Dropdown #1", not "Dropdown #11" (cloned from the #1 page,
  never renumbered; sibling 12 shows "Dropdown #2"). The TEMPLATES.md
  screenshot shows the same text. Spec mandates the reference text
  "Dropdown #1" — mention the discrepancy in the PR description.
- **Screenshot:** `dropdown-11.jpg` (1200×972, viewed in browser) — white/
  off-white page, centered heading "Dropdown #1", below it the "Privacy
  Settings" trigger (gear icon + gray label, white bg with thin border/
  inset-shadow — the open-state treatment) with the menu OPEN beneath it:
  small white card, soft diffuse shadow, four dark-gray left-aligned items
  (Account, Privacy & Security, Password, Notification). Matches DOM + CSS.
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body bg **WHITE** (the slim stylesheet sets NO
  body `background-color` — default white; NOT the `#fafafa` of the older
  series pages; screenshot reads off-white). `.content` padding **7rem 0**.
  Heading `h2.my-5.text-center` "Dropdown #1" — custom `h2 { font-size:
20px }` (NOT Bootstrap 2rem), Roboto, near-black `#212529`, `my-5` = 3rem
  top + bottom margin. Demo row: `row.justify-content-center.text-center` →
  `col-md-5` (narrow ~41.7% on md+) → `div.dropdown.custom-dropdown`.
- **Trigger** `<a.dropdown-link data-toggle="dropdown">` (a LINK, not a
  button — the recreation uses a semantic `<button>` with identical
  visuals): `icon-cog` gear + `mr-2` (0.5rem) + "Privacy Settings".
  Styling: `#888`, 14px, inline-block, `padding: 4px 7px`, radius 4px,
  `border: 1px solid transparent`; hover → `#efefef` border + `0 1px 5px 0
rgba(0,0,0,.05)`; OPEN (`.show`) → bg `#f8f9fa`, transparent border,
  INSET shadow `0 2px 2px 0 rgba(0,0,0,.2)` (pressed look).
- **Menu** `div.dropdown-menu.dropdown-menu-left` — LEFT-aligned (`left: 0
!important`), white, `border: 1px solid transparent`, radius `.25rem`,
  `min-width: 10rem` (160px), `padding: .5rem 0`, shadow `0 15px 30px 0
rgba(0,0,0,.2)`. Animated: base `opacity: 0; visibility: hidden;
margin-top: 0` → `.active` `opacity: 1; visibility: visible;
margin-top: 10px`, transition `margin-top .3s ease, opacity .3s ease`
  (fade + 10px slide-down).
- **Items** four `a.dropdown-item`: "Account", "Privacy & Security",
  "Password", "Notification" — 14px `#888`, hover `#000`, BS4 padding
  `.25rem 1.5rem` (4px 24px). Source menu's `aria-labelledby=
"dropdownMenuButton"` points to a NONEXISTENT id (bug) — pair properly
  with `aria-controls`/id in the recreation.
- **No mobile-specific CSS** in the slim stylesheet (unlike
  Onboard/Glimpse/Inquire): the menu stays left-aligned at all viewports;
  `col-md-5` just becomes full-width. Nothing special to reproduce.
- **No footer** in the source; monorepo adds the mandatory Component Dock
  footer. No images anywhere; ONE icon total (the gear). `p` rules
  (`#b3b3b3`) are unused in this demo.

## Implementation tasks (TDD, in order)

1. **Scaffold** `apps/privy` (copy the simplest existing app, e.g. the
   Inquire app; rename package to `@free-react-templates/privy`; add
   `public/CNAME` = `privy.free.componentdock.com`, `"homepage"` =
   `https://privy.free.componentdock.com`). Run `npm install` at the repo
   root and verify `grep -c "free-react-templates/privy" package-lock.json`.
2. **Setup** `src/test/setup.ts` (jest-dom; copy the MemoryStorage polyfill
   from an existing app's setup if jsdom 30 lacks `localStorage`),
   `src/index.css` with `@theme` tokens: page bg WHITE, trigger gray
   `#888`, hover border `#efefef`, open bg `#f8f9fa`, menu shadow
   `0 15px 30px 0 rgba(0,0,0,.2)`, item hover `#000`, heading near-black
   `#212529`; Roboto (300/400/500) via Google Fonts `<link>` in
   `index.html`. Register `injectUiSource()` in `vite.config.ts` (copy the
   pattern from any existing app — never use a relative `@source`).
3. **App shell + tests** — `App.tsx` composes `<DemoSection />` + `<Footer />`;
   document title "Privy — Settings Dropdown" (see spec). Tests: full page
   render, heading, footer Component Dock link.
4. **DemoSection + tests** — the `.content` equivalent (padding **7rem 0**,
   white bg): heading "Dropdown #1" (the SOURCE'S numbering bug — 20px
   Roboto, near-black, centered, `my-5`/3rem top+bottom margins), the
   centered "Privacy Settings" trigger (gear icon via lucide `Settings` +
   0.5rem gap + label, gray `#888` 14px, padding 4px 7px, radius 4px,
   transparent border; hover `#efefef` + `0 1px 5px 0 rgba(0,0,0,.05)`;
   `aria-haspopup`/`aria-expanded`), menu opens on click LEFT-aligned
   under the trigger, closes on outside click / Escape / trigger re-click,
   `aria-expanded` flips.
5. **Menu + tests** — white card, `min-width: 160px`, padding .5rem 0,
   shadow `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border; fade + 10px
   slide-down open animation (opacity/visibility/margin-top, ~0.3s ease —
   assert the end state, not mid-animation timing); trigger shows the
   pressed state while open (bg `#f8f9fa` + INSET shadow `0 2px 2px 0
rgba(0,0,0,.2)`), reverting on close; four items in order (Account,
   Privacy & Security, Password, Notification), 14px `#888`, hover `#000`,
   padding 4px 24px, focusable/activatable with Enter/Space; trigger-menu
   paired via `aria-controls`/id (do NOT reproduce the source's dangling
   `aria-labelledby` bug).
6. **No mobile-specific behavior** — nothing to implement (the slim
   stylesheet has no media queries; menu stays left-aligned at all
   viewports — the inverse of Onboard/Glimpse/Inquire).
7. **Footer** — mandatory Component Dock link
   (`https://www.componentdock.com/`), no ColorLib references anywhere in
   app code (provenance lives only in the spec / TEMPLATES.md / PR).
8. **Gate + ship** — `npm run verify:app privy` must pass (typecheck +
   lint + knip + fallow + 100% coverage + build); commit conventionally,
   open PR to main, merge immediately with `gh pr merge --squash
--delete-branch`, then bookkeeping: `[x]` + surge URL + homepage in
   TEMPLATES.md (line 764) + `npm run readme:status`, per FAST_MODE.
