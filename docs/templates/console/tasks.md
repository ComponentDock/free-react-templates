# Console (ColorLib Dropdown 17) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-console`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 17" — seventeenth of the "Bootstrap
  Dropdowns (20)" series (source: https://colorlib.com/wp/template/dropdown-17/).
  TEMPLATES.md has ONE copy (line 770). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey**, Dropdown 07 as **Onboard**, Dropdown 08 as
  **Marquee**, Dropdown 09 as **Glimpse**, Dropdown 10 as **Inquire**,
  Dropdown 11 as **Privy**, Dropdown 12 as **Lilac**, Dropdown 13 as
  **Docket**, Dropdown 14 as **Fount**, Dropdown 15 as **Notifly**,
  Dropdown 16 as **Sitemap** (see `docs/templates/menubar/` …
  `docs/templates/sitemap/`). This prep: Dropdown 17 → **Console** (the demo
  is a dashboard-themed dropdown — filled blue "Dashboard" button + grid
  icon + chevron → filled blue menu panel of five "Dashboard N" links with
  orange "New" badges on the last two; no collision with `apps/`,
  `openspec/specs/`, `docs/templates/`).
- **Demo DOM analyzed (LIVE, fetched via curl AND browser-verified):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-17/`
  (HTTP 200, 21,217 bytes). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-17/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath. The page uses
  a **SLIM ~96-line `css/style.css`** (2,861 bytes) — same slim builder as
  dropdown-11/12/13/14/15/16 (Privy/Lilac/Docket/Fount/Notifly/Sitemap),
  NOT the 222 KB ftco stylesheet that dropdown-09/10 load. Other assets:
  `fonts/icomoon/style.css` (icon font — exactly TWO glyphs consumed:
  `\e871` `icon-dashboard2` + `\e313` `icon-keyboard_arrow_down`),
  `css/bootstrap.min.css` (BS4 base), `css/owl.carousel.min.css` +
  `js/owl.carousel.min.js` (loaded but UNUSED), jquery/popper/bootstrap.min.js,
  `js/main.js` (adds `.active` to `.dropdown-menu` 100 ms after
  `show.bs.dropdown`, removes on hide — identical to the siblings').
  Google Fonts via inline cf-fonts `@font-face` blocks: Roboto (300/400),
  Poppins (300/400/500), Source Serif Pro (400/600) — **only Roboto is
  used** (verified: no font-family usage outside @font-face). Body font
  weight **300 (light)**.
- **HEADING BUG (documented in the spec — reproduce faithfully):** the page
  renders "Dropdown #7", not "Dropdown #17" (cloned from the #7 page, never
  renumbered — same bug as Lilac "#2" / Docket "#3" / Fount "#4" / Notifly
  "#5" / Sitemap "#6"). The TEMPLATES.md screenshot and the live `<title>`
  show the same text. Spec mandates the reference text "Dropdown #7" —
  mention the discrepancy in the PR description.
- **DANGLING ARIA BUG (documented — do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (same
  as Fount/Lilac/Docket/Notifly/Sitemap). Pair trigger + menu via
  `aria-controls`/id.
- **Screenshot:** `dropdown-17.jpg` (1200×972, viewed in browser) — white
  page, centered heading "Dropdown #7", below it the trigger: a solid
  medium-blue rectangular block with a small white grid/dashboard icon,
  white text "Dashboard", and a small white down-chevron at its right; menu
  OPEN beneath it: the SAME solid blue background continues into a vertical
  list — "Dashboard 1" … "Dashboard 5" in white, left-aligned; items 4 and
  5 each show a small rectangular ORANGE badge with white text "New".
  Matches DOM + CSS + live preview exactly.
- **Visual design (DOM + CSS tokens + screenshot + live geometry):**
  minimalist component-showcase page. Body bg **WHITE** (slim stylesheet
  sets NO body `background-color`), Roboto weight 300. `.content` padding
  **7rem 0**. Heading `h2.my-5.text-center` "Dropdown #7" — custom
  `h2 { font-size: 20px }` (NOT Bootstrap 2rem), Roboto, near-black
  `#212529`, `my-5` = 3rem top + bottom margin. Demo row:
  `row.justify-content-center.text-center` → `col-md-5` (narrow ~41.7% on
  md+) → `div.dropdown.custom-dropdown`.
- **Trigger** `<a.dropdown-link data-toggle="dropdown">` (a LINK, not a
  button — the recreation uses a semantic `<button>` with identical
  visuals): contents IN ORDER — `<span class="icon-dashboard2 mr-2">`
  (the **grid/dashboard icon**, icomoon `\e871` = Material "dashboard" →
  lucide `LayoutDashboard`, **16px** live-verified, **8px right margin**
  = BS4 `.mr-2`), text **"Dashboard"**, `<span class="icon-keyboard_arrow_down arrow">`
  (the **chevron**, icomoon `\e313` → lucide `ChevronDown`, **16px**,
  `.arrow` = inline-block + relative + `.3s transform ease`). `.dropdown-link`:
  **`background: #007bff`** (Bootstrap primary blue), `color: #fff`,
  **`padding: 10px 10px`**, **NO border-radius** (square corners), NO
  border, `display: inline` (live-verified), 16px font. Live size: 144.3 ×
  39 px. **NO `.number` badge and NO `.wrap-icon` bell** — the badge/bell
  CSS rules are not even present in this stylesheet.
- **OPEN-STATE FLIP (chevron only):** `.custom-dropdown.show a { color:
#fff }` — visually redundant (trigger is white closed AND open,
  live-verified both `rgb(255,255,255)`) — and `.show a .arrow { transform:
rotate(-180deg) }` — the **chevron rotates -180°** (points UP;
  live-verified open matrix(-1,0,0,-1,0,0), closed `none`).
- **Menu** `div.dropdown-menu` (NO `-right` class): **`background:
#007bff`** (solid BLUE panel — unique in the series; the siblings all use
  white panels), `border: 1px solid transparent`, **`border-radius: 0`**
  (sharp corners), shadow `0 15px 30px 0 rgba(0,0,0,.2)`, **min-width
  160px** (BS4 10rem; auto width — live 192.5px), `left/right: auto
!important` → **LEFT-anchored flush under the trigger** (live: menu.x
  567.5 == trigger.x 567.8; menu top 263 == trigger bottom 263), padding
  top/bottom 0, base **`margin-top: -10px !important`** → `.active`:
  `margin-top: 0px !important`, transition `.3s margin-top/opacity/visibility
ease` (fade + **10px** slide-down from a negative offset; `.active` added
  by main.js 100 ms after `show.bs.dropdown`).
- **Menu items** — five `a.dropdown-item`: **Dashboard 1, Dashboard 2,
  Dashboard 3, Dashboard 4, Dashboard 5**; `font-size: 14px`, white text,
  **`padding: 15px 40px`**, **`border-bottom: 1px solid rgba(255,255,255,.1)`**
  under EVERY item (including the last), transparent bg; hover/active/focus
  → `background: #fff; color: #007bff` (inverted).
- **"New" badge** — `<span>` inside items 4 and 5 ONLY: `padding: 2px 4px;
border-radius: 2px; font-size: 10px; color: #fff; background: #fd7e14`
  (Bootstrap orange; live-verified rgb(253,126,20)), inline after the label
  text (no flex — normal flow).
- **Unused CSS (do NOT reproduce functionally):** `p { color: #b3b3b3 }`
  (no `<p>` on the page), `.btn:active/:focus` reset + `.btn.btn-custom`
  (`#efefef` border — the trigger is a link, not a `.btn`), `.title-wrap`/
  `.title` (12px 700 uppercase header — no header row in the markup). Note
  in PR only.
- **Icons:** exactly TWO glyphs — grid/dashboard (`\e871` → lucide
  `LayoutDashboard`, 16px, 8px right margin) and chevron (`\e313` → lucide
  `ChevronDown`, 16px, `.arrow`). No bell, no badge, no carousel (owl
  loaded but unused).
- **Images:** NONE — the page has no `<img>` elements at all (unique in the
  recent series; Sitemap had a featured card). Nothing to replace.
- **No mobile CSS** — no media queries in the slim stylesheet (verified:
  0 `@media`). The blue panel just overflows narrow viewports (source
  behavior — reproduce as-is).

## Structure order (1:1)

1. `.content` wrapper — padding **7rem 0**.
2. Heading container: `h2.my-5.text-center` "Dropdown #7" (20px Roboto,
   `#212529`, centered, 3rem top/bottom margins).
3. Demo container → `row.justify-content-center.text-center` →
   `col-md-5` → `div.dropdown.custom-dropdown`:
   - trigger: `LayoutDashboard` icon (16px, 8px right margin) + "Dashboard"
     - `ChevronDown` chevron — solid blue `#007bff` block, square corners,
       10px padding, white 16px text (stays white when open; chevron rotates
       -180° / up)
   - `dropdown-menu` (blue panel, left-anchored under trigger, auto width,
     radius 0, shadow, fade + 10px slide-down): five items — Dashboard 1,
     Dashboard 2, Dashboard 3, Dashboard 4 (New), Dashboard 5 (New)
4. Footer (monorepo addition): Component Dock credit link
   (`https://www.componentdock.com/`).

## Implementation tasks

- [ ] Scaffold `apps/console` (copy simplest existing app; package
      `@free-react-templates/console`; `public/CNAME` =
      `console.free.componentdock.com`; homepage =
      `https://console.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Console — Dashboard Dropdown", Roboto 300/400
      Google Fonts `<link>` (do NOT load Poppins/Source Serif Pro — unused
      by the source); body font weight 300
- [ ] `src/index.css` tokens: white page bg; `#007bff` (trigger bg, menu
      bg, item hover text); `#fff` (trigger text, item text, badge text,
      hover bg); `#fd7e14` (badge bg); `#212529` (heading); `#b3b3b3` (p,
      unused); `rgba(255,255,255,.1)` (item separators); shadow
      `0 15px 30px 0 rgba(0,0,0,.2)`
- [ ] `Navbar`-free: single section component (e.g. `DashboardDropdown`)
      with heading + trigger + menu (per spec scenarios)
- [ ] Dropdown behavior: open/close on click, outside click, Escape,
      re-click; fade + **10px** slide-down animation (~0.3s, margin-top
      -10px → 0); menu **left-anchored flush under the trigger** (static
      position, NOT centered — unlike Sitemap); min-width 160px, auto
      width
- [ ] Trigger: `LayoutDashboard` (16px, 8px right margin) + "Dashboard" +
      `ChevronDown` (16px, `.arrow` transition); solid blue `#007bff`, 10px
      padding, square corners; semantic `<button>` with `aria-haspopup="menu"` + `aria-expanded`; NO badge, NO bell
- [ ] Menu: blue `#007bff` panel, radius 0, shadow
      `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, no vertical
      padding; open-state: chevron rotates -180° (up), trigger text stays
      white
- [ ] Items: Dashboard 1…5 in order, white 14px, padding 15px 40px, hairline
      white bottom border on every item; "New" badges (orange `#fd7e14`,
      white 10px, 2px 4px padding, 2px radius) on items 4 and 5 ONLY;
      hover/focus inverts to white bg + `#007bff` text
- [ ] Accessibility: `aria-controls`/id pairing (NOT the source's dangling
      `aria-labelledby`); keyboard-focusable items
- [ ] Footer with Component Dock link; NO ColorLib references in app code
- [ ] Tests: 100% coverage (heading "Dropdown #7", trigger contents + order,
      open/close behavior, chevron rotation, left-anchored menu, blue panel
      tokens, 5 items + badge placement, hover inversion, accessibility,
      footer)
- [ ] `npm run verify:app console` passes; commit `feat: add console …`;
      PR + immediate squash merge; then TEMPLATES.md bookkeeping
      (`[x]` + surge URL) + `npm run readme:status`

## Verification checklist (from spec)

- [ ] Heading renders "Dropdown #7" (source bug — not "#17"), 20px Roboto,
      `#212529`, centered, 3rem margins, white page bg, `.content` 7rem
      padding, body Roboto weight 300
- [ ] Trigger: solid blue `#007bff` block, square corners, 10px padding,
      white 16px content; order = LayoutDashboard (16px, 8px right margin) + "Dashboard" + ChevronDown (16px); semantic `<button>` with
      `aria-haspopup="menu"` + `aria-expanded`
- [ ] Menu: blue `#007bff` panel, radius 0, shadow
      `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, min-width 160px,
      auto width, left-anchored flush under trigger; fade + 10px slide-down
      (margin-top -10px → 0, ~0.3s); opens on click, closes on
      outside/Escape/re-click
- [ ] Open state: chevron rotated -180° (up); trigger text stays white
- [ ] Items: Dashboard 1…5 in order, white 14px, padding 15px 40px, hairline
      white bottom border on every item; "New" badges (orange `#fd7e14`,
      white 10px, 2px 4px padding, 2px radius) on items 4 and 5 ONLY;
      hover/focus inverts to white bg + `#007bff` text
- [ ] Accessibility: `aria-controls`/id pairing (NOT the source's dangling
      `aria-labelledby`); keyboard-focusable items
- [ ] No images, no carousel; exactly two icon glyphs (LayoutDashboard +
      ChevronDown); unused CSS (p color, btn-custom, title-wrap) not
      reproduced; zero media queries (no responsive handling)
- [ ] Footer links `https://www.componentdock.com/`; NO ColorLib references
      anywhere in app code
- [ ] 100% coverage; per-app gate passes; PR description states: source
      template (ColorLib Dropdown 17), preview URL
      (`https://preview.colorlib.com/theme/bootstrap/dropdown-17/`), design
      tokens, heading-bug note, what differs (renames, semantic button,
      lucide icons)
