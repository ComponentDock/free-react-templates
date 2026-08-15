# Fount (ColorLib Dropdown 14) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-fount`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 14" — fourteenth of the "Bootstrap
  Dropdowns (20)" series (source: https://colorlib.com/wp/template/dropdown-14/).
  TEMPLATES.md has ONE copy (line 767). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey**, Dropdown 07 as **Onboard**, Dropdown 08 as
  **Marquee**, Dropdown 09 as **Glimpse**, Dropdown 10 as **Inquire**,
  Dropdown 11 as **Privy**, Dropdown 12 as **Lilac**, Dropdown 13 as
  **Docket** (see `docs/templates/menubar/` … `docs/templates/docket/`).
  This prep: Dropdown 14 → **Fount** (a source of supply — the "All
  sources" source-picker menu is the defining visual trait).
- **Demo DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-14/`
  (HTTP 200, 17,008 bytes). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-14/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath. The page uses a
  **SLIM ~140-line `css/style.css`** (3,076 bytes) — same slim builder as
  dropdown-11/12/13 (Privy/Lilac/Docket), NOT the 222 KB ftco stylesheet
  that dropdown-09/10 load. Other assets: `fonts/icomoon/style.css` (icon
  font — the markup uses NO `icon-*` classes; only ONE glyph `\e313` is
  consumed via the trigger's `:after`), `css/bootstrap.min.css` (BS4 base),
  `css/owl.carousel.min.css` + `js/owl.carousel.min.js` (loaded but
  UNUSED), jquery/popper/bootstrap.min.js, `js/main.js` (adds `.active` to
  `.dropdown-menu` 100 ms after `show.bs.dropdown`, removes on hide —
  identical to Privy/Lilac/Docket's). Google Fonts via inline cf-fonts
  `@font-face` blocks: Roboto (300/400), Poppins (300/400/500), Source
  Serif Pro (400/600) — **only Roboto is used** in the demo.
- **HEADING BUG (documented in the spec — reproduce faithfully):** the page
  renders "Dropdown #4", not "Dropdown #14" (cloned from the #4 page, never
  renumbered). The TEMPLATES.md screenshot shows the same text. Spec
  mandates the reference text "Dropdown #4" — mention the discrepancy in
  the PR description.
- **TYPO BUG (documented in the spec — reproduce faithfully):** the FIRST
  menu item reads "All Rources" (capital R — "Rources", NOT "Sources").
  Confirmed in the live DOM AND on a zoomed crop of the screenshot
  (character-by-character read). The trigger label above is spelled
  correctly: "All sources". Do NOT "fix" the typo.
- **Screenshot:** `dropdown-14.jpg` (1200×972, viewed in browser) — white
  page, centered heading "Dropdown #4", below it the "All sources" trigger
  (medium-gray text + light-gray circle with a dark down-chevron at the
  right edge), menu OPEN beneath: white card, soft diffuse shadow, four
  rows — first "All Rources" single-line, then Dropbox / Google Drive /
  Eventbrite each with bold black title + light-gray "Lorem ipsum dolor
  sit amet harum." subtitle, hollow light-gray dots on the left, faint
  light-gray dividers. Matches DOM + CSS. URL bar: `ui-preview.codylabs.com`
  (an OLDER preview host — other series screenshots show
  `preview.colorlib.com`; the CURRENT live preview is
  `https://preview.colorlib.com/theme/bootstrap/dropdown-14/`).
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body bg **WHITE** (the slim stylesheet sets NO
  body `background-color`). `.content` padding **7rem 0**. Heading
  `h2.my-5.text-center` "Dropdown #4" — custom `h2 { font-size: 20px }`
  (NOT Bootstrap 2rem), Roboto, near-black `#212529`, `my-5` = 3rem top +
  bottom margin. Demo row: `row.justify-content-center.text-center` →
  `col-md-5` (narrow ~41.7% on md+) → `div.dropdown.custom-dropdown`.
- **Trigger** `<a.dropdown-link data-toggle="dropdown">` (a LINK, not a
  button — the recreation uses a semantic `<button>` with identical
  visuals): text "All sources", `color: #888`, `display: inline-block`,
  `padding-right: 40px`, `position: relative` — **NO background, NO
  border** (a plain gray link — unlike Docket's `#f8f9fa` pill); font-size
  INHERITED (16px BS4 body default — NOT set explicitly, unlike Docket's
  15px). `:after` = icomoon `\e313` `icon-keyboard_arrow_down` (down
  chevron → lucide `ChevronDown`) in a **20px `#efefef` circle**
  (`border-radius: 50%`, `line-height: 20px`, absolute `right: 0`, top
  50%, translateY(-50%)). **NO open-state flip** — this stylesheet has NO
  `.custom-dropdown.show` rule (unlike Docket's blue/white flip); the
  trigger looks identical open or closed.
- **Menu** `div.dropdown-menu` (NO extra classes): white bg, `border: 1px
solid transparent`, **no min-width override** → Bootstrap default
  `min-width: 10rem` (NARROW single-column card — NOT Lilac's 700px),
  shadow `0 15px 30px 0 rgba(0,0,0,.2)`, **`left: 0 !important`**
  (LEFT-anchored), `margin-top: 0 !important`, `padding-top/bottom: 0`.
  ANIMATED: `opacity: 0; visibility: hidden` → `.active`: `opacity: 1;
visibility: visible; margin-top: 20px !important`, transition `.3s
margin-top/opacity/visibility ease` (fade + 20px slide-down; `.active`
  added by main.js 100 ms after `show.bs.dropdown`).
- **Items** four `<a.dropdown-item>` rows:
  1. **All Rources** — PLAIN single-line text (the source's typo; keep
     "Rources"; NO strong/span → NO subtitle)
  2. **Dropbox** — `<strong>` bold black title + `<span>` "Lorem ipsum
     dolor sit amet harum."
  3. **Google Drive** — same structure
  4. **Eventbrite** — same structure
     Row styling: `font-size: 14px`, `color: #888`, **`border-bottom: 1px
solid #efefef` on EVERY row — NO `:last-child` exception** (DIFFERENT
     from Docket, whose slim CSS removed the last row's border), `padding:
10px 0 10px 35px`, `position: relative`. `strong { display: block;
font-weight: bold; color: #000 }`; `span { font-size: 13px; color: #999
}`. **Dot:** `:before` — 10px circle (`border-radius: 50%`), absolute
     `top: 50%; left: 10px; translateY(-50%)`, background `#efefef` (hollow
     radio look), transition `.3s all ease`. HOVER: `color: #000` +
     `:before` → `background: #007bff` (dot turns blue). **NO padding-left
     shift on hover** (unlike Docket's 15px→20px).
- **Icons:** NO `icon-*` glyphs in the markup at all — only the trigger's
  `:after` chevron (lucide `ChevronDown`); item dots are pure CSS circles.
  No images, no carousel.
- **No mobile CSS** — no media queries in the slim stylesheet (like
  Privy/Lilac/Docket; unlike Onboard/Glimpse/Inquire). Menu stays
  left-anchored at all viewports; `col-md-5` becomes full-width. Reproduce
  as-is.

## Structure order (1:1)

1. `.content` wrapper — padding **7rem 0**.
2. Heading container: `h2.my-5.text-center` "Dropdown #4" (20px Roboto,
   `#212529`, centered, 3rem top/bottom margins).
3. Demo container → `row.justify-content-center.text-center` →
   `col-md-5` → `div.dropdown.custom-dropdown`:
   - trigger link ("All sources" + chevron in 20px gray circle; no
     background; NO open-state change)
   - `dropdown-menu` (left-anchored narrow card) with four `dropdown-item`
     rows (title + subtitle; hollow dots; dividers under every row)
4. Footer (monorepo addition): Component Dock credit link
   (`https://www.componentdock.com/`).

## Implementation tasks

- [ ] Scaffold `apps/fount` (copy simplest existing app; package
      `@free-react-templates/fount`; `public/CNAME` =
      `fount.free.componentdock.com`; homepage =
      `https://fount.free.componentdock.com`); `npm install` at root to
      register the workspace in `package-lock.json`
- [ ] `index.html`: title "Fount — Source-Picker Dropdown", Roboto
      300/400 Google Fonts `<link>` (do NOT load Poppins/Source Serif Pro
      — unused by the source)
- [ ] `src/index.css` tokens: white page bg; `#888` (trigger text, item
      text); `#000` (item title, item hover text); `#999` (item subtitle);
      `#efefef` (chevron circle, item dots, item dividers); `#007bff`
      (dot hover); `#212529` (heading)
- [ ] `Navbar`-free: single section component (e.g. `SourceDropdown`)
      with heading + trigger + menu (per spec scenarios)
- [ ] Dropdown behavior: open/close on click, outside click, Escape,
      re-click; fade + 20px slide-down animation (~0.3s); trigger stays
      visually unchanged while open (NO blue flip — unlike Docket)
- [ ] Menu: narrow card (`min-width: 10rem`), left-anchored under trigger,
      shadow `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, radius
      .25rem; four items: **All Rources** (typo — keep it; single-line),
      Dropbox, Google Drive, Eventbrite (bold black title + 13px `#999`
      subtitle "Lorem ipsum dolor sit amet harum."); dividers under ALL
      rows including the last; hollow 10px `#efefef` dots (10px inset);
      hover: black text + dot turns `#007bff`, no horizontal shift
- [ ] Accessibility: `<button>` trigger with `aria-haspopup="menu"` +
      `aria-expanded`; `aria-controls`/id pairing (NOT the source's
      dangling `aria-labelledby`); keyboard-focusable items
- [ ] Footer with Component Dock link; NO ColorLib references in app code
- [ ] Tests: 100% coverage (heading, trigger open/close, no-open-state
      change, item content/order incl. "All Rources" typo, hover dot
      color, accessibility, footer)
- [ ] `npm run verify:app fount` passes; commit `feat: add fount …`;
      PR + immediate squash merge; then TEMPLATES.md bookkeeping
      (`[x]` + surge URL) + `npm run readme:status`

## Verification checklist (from spec)

- [ ] Heading renders "Dropdown #4" (source bug — not "#14"), 20px Roboto,
      `#212529`, centered, 3rem margins, white page bg, `.content` 7rem
      padding
- [ ] Trigger: "All sources" (lowercase s), `#888`, no background/border,
      `padding-right: 40px`, chevron (`ChevronDown`) in 20px `#efefef`
      circle; NO change when open
- [ ] Menu left-anchored, narrow (`min-width: 10rem`), fade + 20px
      slide-down; four items in order; "All Rources" typo kept; titles +
      "Lorem ipsum dolor sit amet harum." subtitles; dividers under every
      row incl. last; hollow dots turn `#007bff` on hover; no padding shift
- [ ] Closes on outside/Escape/re-click; aria pairing correct
- [ ] No mobile restyling; no images; exactly 1 icon glyph (chevron);
      footer links Component Dock
