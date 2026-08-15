# Lilac (ColorLib Dropdown 12) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lilac`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 12" — twelfth of the "Bootstrap Dropdowns
  (20)" series (source: https://colorlib.com/wp/template/dropdown-12/).
  TEMPLATES.md has ONE copy (line 765). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey**, Dropdown 07 as **Onboard**, Dropdown 08 as
  **Marquee**, Dropdown 09 as **Glimpse**, Dropdown 10 as **Inquire**,
  Dropdown 11 as **Privy** (see `docs/templates/menubar/` …
  `docs/templates/privy/`). This prep: Dropdown 12 → **Lilac**.
- **Demo DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-12/`
  (HTTP 200, 18,060 bytes). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-12/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath. The page uses a
  **SLIM 106-line `css/style.css`** (2,646 bytes) — NOT the 222 KB ftco
  stylesheet that dropdown-09/10 load (the series pages were regenerated
  with a new builder, same as dropdown-11/Privy). Other assets:
  `fonts/icomoon/style.css` (icon-cog = FA `\f013` solid gear; icon-person
  = FA-style user glyph), `css/bootstrap.min.css` (BS4 base),
  `css/owl.carousel.min.css` + `js/owl.carousel.min.js` (loaded but UNUSED),
  jquery/popper/bootstrap.min.js, `js/main.js` (adds `.active` to
  `.dropdown-menu` 100 ms after `show.bs.dropdown`, removes on hide —
  identical to Privy's). Google Fonts via inline cf-fonts `@font-face`
  blocks: Roboto (300/400), Poppins (300/400/500), Source Serif Pro
  (400/600) — **only Roboto is used** in the demo.
- **HEADING BUG (documented in the spec — reproduce faithfully):** the page
  renders "Dropdown #2", not "Dropdown #12" (cloned from the #2 page,
  never renumbered). The TEMPLATES.md screenshot shows the same text. Spec
  mandates the reference text "Dropdown #2" — mention the discrepancy in
  the PR description.
- **ITEM TYPO (documented in the spec — reproduce faithfully):** the
  fourth item reads **"Notofication"** (missing an "i") in both DOM and
  screenshot. Spec mandates the reference spelling.
- **Screenshot:** `dropdown-12.jpg` (1200×972, viewed in browser) —
  white/off-white page, centered heading "Dropdown #2", below it the
  "Privacy Settings" trigger (gear icon + label) with the menu OPEN:
  large white card, rounded corners, soft diffuse shadow, 2×2 grid of
  icon + bold dark title + light-gray blurb rows, lavender/purple icons,
  faint light-gray dividers. Matches DOM + CSS. URL bar:
  `preview.colorlib.com`.
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body bg **WHITE** (the slim stylesheet sets NO
  body `background-color` — default white; NOT the `#fafafa` of the older
  series pages; screenshot reads off-white). `.content` padding **7rem 0**.
  Heading `h2.my-5.text-center` "Dropdown #2" — custom `h2 { font-size:
20px }` (NOT Bootstrap 2rem), Roboto, near-black `#212529`, `my-5` = 3rem
  top + bottom margin. Demo row: `row.justify-content-center.text-center` →
  `col-md-5` (narrow ~41.7% on md+) → `div.dropdown.custom-dropdown`.
- **Trigger** `<a.dropdown-link data-toggle="dropdown">` (a LINK, not a
  button — the recreation uses a semantic `<button>` with identical
  visuals): `icon-cog` gear + `mr-2` (0.5rem) + "Privacy Settings".
  Styling: `#888`, 14px, inline-block, `padding: 4px 7px`; OPEN
  (`.custom-dropdown.show`) → **`color: #000`** only. NOTE: NO border, NO
  radius, NO hover treatment in THIS variant (Privy's dropdown-11 had a
  1px `#efefef` hover border + shadow + `#f8f9fa` pressed bg — do NOT
  port those over).
- **Menu** `div.dropdown-menu.d-flex` — FLEX two-column layout, white,
  `border: 1px solid transparent`, radius `.25rem` (BS4 base),
  **`min-width: 700px`** (a WIDE card), shadow `0 15px 30px 0
rgba(0,0,0,.2)`, **CENTERED under the trigger** (`left: 50% !important`
  - `transform: translateX(-50%) !important` — the stylesheet also lists
    `left: 0 !important` EARLIER in the rule; the later `left: 50%` wins).
    Animated: base `opacity: 0; visibility: hidden; margin-top: 40px` →
    `.active` `opacity: 1; visibility: visible; margin-top: 50px`, transition
    `.3s all ease` (fade + 10px slide-down).
- **Items** two `.half-col` (width 50%, padding 20px), each with two
  full-width rows `<a.w-100.d-flex.align-items-start>`: icon box
  (`mr-3 wrap-icon`, 30px, `line-height: 0`, span **`color: #c3a1fa`**
  lavender) + text block (`h3` title + `p` blurb). Reading order:
  **Settings** (gear), **Account** (person), **Settings** (gear),
  **Notofication** (person — TYPO). Blurb (all four): "Lorem ipsum dolor
  sit amet, consectetur adipisicing elit. Voluptatem soluta."
  Row styling: `.half-col a` `display: block`, `border-bottom: 1px solid
#efefef`, `margin-bottom: 10px`; `:last-child` no border/margin. `h3`:
  16px, `margin: 5px 0 10px 0`, `color: #000`, `letter-spacing: .05rem`.
  `p`: 14px, `#b3b3b3`, 300. Source menu's `aria-labelledby=
"dropdownMenuButton"` points to a NONEXISTENT id (bug) — pair properly
  with `aria-controls`/id in the recreation.
- **No mobile-specific CSS** in the slim stylesheet (like Privy; unlike
  Onboard/Glimpse/Inquire): NO media queries; the `min-width: 700px` card
  is NOT restyled on narrow viewports (it just overflows — reproduce the
  source behavior); `col-md-5` becomes full-width.
- **No footer** in the source; monorepo adds the mandatory Component Dock
  footer. No images anywhere; exactly TWO icon glyphs total (gear +
  person, each used twice).

## Implementation tasks (TDD, in order)

1. **Scaffold** `apps/lilac` (copy the simplest existing app, e.g. the
   Privy or Inquire app; rename package to `@free-react-templates/lilac`;
   add `public/CNAME` = `lilac.free.componentdock.com`, `"homepage"` =
   `https://lilac.free.componentdock.com`). Run `npm install` at the repo
   root and verify `grep -c "free-react-templates/lilac" package-lock.json`.
2. **Setup** `src/test/setup.ts` (jest-dom; copy the MemoryStorage polyfill
   from an existing app's setup if jsdom 30 lacks `localStorage`),
   `src/index.css` with `@theme` tokens: page bg WHITE, trigger gray
   `#888`, open-state trigger `#000`, brand lavender `#c3a1fa`, title black
   `#000`, blurb `#b3b3b3`, divider `#efefef`, menu shadow
   `0 15px 30px 0 rgba(0,0,0,.2)`, heading near-black `#212529`; Roboto
   (300/400) via Google Fonts `<link>` in `index.html`. Register
   `injectUiSource()` in `vite.config.ts` (copy the pattern from any
   existing app — never use a relative `@source`).
3. **App shell + tests** — `App.tsx` composes `<DemoSection />` + `<Footer />`;
   document title "Lilac — Two-Column Settings Dropdown" (see spec). Tests:
   full page render, heading, footer Component Dock link.
4. **DemoSection + tests** — the `.content` equivalent (padding **7rem 0**,
   white bg): heading "Dropdown #2" (the SOURCE'S numbering bug — 20px
   Roboto, near-black, centered, `my-5`/3rem top+bottom margins), the
   centered "Privacy Settings" trigger (gear icon via lucide `Settings` +
   0.5rem gap + label, gray `#888` 14px, padding 4px 7px, inline-block, NO
   border/radius; `aria-haspopup`/`aria-expanded`), menu opens on click
   CENTERED under the trigger, closes on outside click / Escape / trigger
   re-click, `aria-expanded` flips; open state → trigger text `#000`.
5. **Menu + tests** — white card, **`min-width: 700px`**, radius .25rem,
   shadow `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, horizontally
   CENTERED on the trigger (translateX(-50%) equivalent); fade + 10px
   slide-down open animation (opacity/visibility/margin-top 40px→50px,
   ~0.3s ease — assert the end state, not mid-animation timing); two equal
   columns (50% + 20px padding); four rows in order: Settings (lucide
   `Settings`), Account (lucide `User`), Settings (lucide `Settings`),
   **Notofication** (lucide `User`) — source typo + duplicate title
   reproduced as-is; each row flex (icon 30px lavender `#c3a1fa`, 1rem
   gap, title 16px `#000` letter-spacing .05rem, blurb 14px `#b3b3b3` 300),
   `#efefef` divider under each row except the last in each column;
   rows focusable/activatable with Enter/Space; trigger-menu paired via
   `aria-controls`/id (do NOT reproduce the source's dangling
   `aria-labelledby` bug).
6. **No mobile-specific behavior** — nothing to implement (the slim
   stylesheet has no media queries; the 700px card is not restyled on
   narrow viewports — like Privy, the inverse of Onboard/Glimpse/Inquire).
7. **Footer** — mandatory Component Dock link
   (`https://www.componentdock.com/`), no ColorLib references anywhere in
   app code (provenance lives only in the spec / TEMPLATES.md / PR).
8. **Gate + ship** — `npm run verify:app lilac` must pass (typecheck +
   lint + knip + fallow + 100% coverage + build); commit conventionally,
   open PR to main, merge immediately with `gh pr merge --squash
--delete-branch`, then bookkeeping: `[x]` + surge URL + homepage in
   TEMPLATES.md (line 765) + `npm run readme:status`, per FAST_MODE.
