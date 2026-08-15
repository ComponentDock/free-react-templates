# Sitemap (ColorLib Dropdown 16) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sitemap`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 16" — sixteenth of the "Bootstrap
  Dropdowns (20)" series (source: https://colorlib.com/wp/template/dropdown-16/).
  TEMPLATES.md has ONE copy (line 769). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey**, Dropdown 07 as **Onboard**, Dropdown 08 as
  **Marquee**, Dropdown 09 as **Glimpse**, Dropdown 10 as **Inquire**,
  Dropdown 11 as **Privy**, Dropdown 12 as **Lilac**, Dropdown 13 as
  **Docket**, Dropdown 14 as **Fount**, Dropdown 15 as **Notifly** (see
  `docs/templates/menubar/` … `docs/templates/notifly/`). This prep:
  Dropdown 16 → **Sitemap** (the demo is a sitemap-style mega-menu dropdown —
  text trigger + chevron → wide 3-column panel of category links with counts
  - a featured card; no collision with `apps/`, `openspec/specs/`,
    `docs/templates/`).
- **Demo DOM analyzed (LIVE, fetched via curl AND browser-verified):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-16/`
  (HTTP 200, 22,095 bytes). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-16/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath. The page uses
  a **SLIM ~120-line `css/style.css`** (3,474 bytes) — same slim builder as
  dropdown-11/12/13/14/15 (Privy/Lilac/Docket/Fount/Notifly), NOT the 222 KB
  ftco stylesheet that dropdown-09/10 load. Other assets:
  `fonts/icomoon/style.css` (icon font — exactly ONE glyph `\e313`
  `icon-keyboard_arrow_down` consumed by the trigger chevron),
  `css/bootstrap.min.css` (BS4 base), `css/owl.carousel.min.css` +
  `js/owl.carousel.min.js` (loaded but UNUSED), jquery/popper/bootstrap.min.js,
  `js/main.js` (adds `.active` to `.dropdown-menu` 100 ms after
  `show.bs.dropdown`, removes on hide — identical to the siblings').
  Google Fonts via inline cf-fonts `@font-face` blocks: Roboto (300/400),
  Poppins (300/400/500), Source Serif Pro (400/600) — **only Roboto is
  used** (verified: no font-family usage outside @font-face). Body font
  weight **300 (light)**.
- **HEADING BUG (documented in the spec — reproduce faithfully):** the page
  renders "Dropdown #6", not "Dropdown #16" (cloned from the #6 page, never
  renumbered — same bug as Lilac "#2" / Docket "#3" / Fount "#4" / Notifly
  "#5"). The TEMPLATES.md screenshot and the live `<title>` show the same
  text. Spec mandates the reference text "Dropdown #6" — mention the
  discrepancy in the PR description.
- **DANGLING ARIA BUG (documented — do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (same
  as Fount/Lilac/Docket/Notifly). Pair trigger + menu via
  `aria-controls`/id.
- **Screenshot:** `dropdown-16.jpg` (1200×972, viewed in browser) — white
  page, centered heading "Dropdown #6", trigger "Dropdown" + small
  down-chevron (the light-blue ring around it is the browser's focus
  outline, not a design element), menu OPEN beneath: wide white panel with
  soft diffuse shadow, three equal columns — left: photo (person holding a
  tablet) with bold black "PSD Mockups" + smaller gray "View All Here"
  below; middle: Code(5), Fonts(12), HTML Templates(81), Mockups(9),
  Logo(16), PSD Mockups(22); right: Sketch App(32), User Interface(61),
  WordPress(73), User Experience(88), WebGL(19), Mockups(93) — category
  links in near-black text. Matches DOM + CSS + live preview (the LIVE
  preview's hero image shows a book/leaflet mockup instead of the tablet —
  ColorLib swapped the asset; irrelevant, we use a placeholder).
- **Visual design (DOM + CSS tokens + screenshot + live geometry):**
  minimalist component-showcase page. Body bg **WHITE** (slim stylesheet
  sets NO body `background-color`), Roboto weight 300. `.content` padding
  **7rem 0**. Heading `h2.my-5.text-center` "Dropdown #6" — custom
  `h2 { font-size: 20px }` (NOT Bootstrap 2rem), Roboto, near-black
  `#212529`, `my-5` = 3rem top + bottom margin. Demo row:
  `row.justify-content-center.text-center` → `col-md-5` (narrow ~41.7% on
  md+) → `div.dropdown.custom-dropdown`.
- **Trigger** `<a.dropdown-link data-toggle="dropdown">` (a LINK, not a
  button — the recreation uses a semantic `<button>` with identical
  visuals): text **"Dropdown"** + `<span class="icon-keyboard_arrow_down">`
  (the **chevron**, icomoon `\e313` = Material "keyboard_arrow_down" →
  lucide `ChevronDown`, **16px inherited** — live-verified). `.dropdown-
link`: `color: #888`, inline-block, `padding-right: 0`, no
  background/border; font-size inherited (16px). **NO `.number` badge and
  NO `.wrap-icon` bell** (unlike Notifly) — the badge/bell CSS rules exist
  in the stylesheet but are UNUSED here.
- **OPEN-STATE FLIP (present — unlike Notifly/Privy/Lilac/Docket/Fount):**
  `.custom-dropdown.show a { color: #000 }` (trigger text → **black**) and
  `.custom-dropdown.show a span { transform: rotate(180deg) }` (chevron →
  **points UP**; live-verified matrix(-1,0,0,-1,0,0); transition .3s
  transform ease).
- **Menu** `div.dropdown-menu` (NO `-right` class): white bg, `border: 1px
solid transparent`, **`min-width: 680px`** (WIDE mega panel —
  live-verified exactly 680px; NOT Notifly's 380px max-width), radius
  **4px** (.25rem BS4 base), shadow `0 15px 30px 0 rgba(0,0,0,.2)`,
  **`top: 100% !important; left: 50% !important; transform: translate(-50%,
0) !important; right: auto !important`** — **CENTERED under the trigger**
  (live: menu center-x == trigger center-x == 640px), `margin-top: 0
!important`, `padding: 10px` (shorthand overrides the file's earlier
  `padding-top/bottom: 0`). ANIMATED: `opacity: 0; visibility: hidden` →
  `.active`: `opacity: 1; visibility: visible; margin-top: 10px !important`,
  transition `.3s margin-top/opacity/visibility ease` (fade + **10px**
  slide-down; `.active` added by main.js 100 ms after `show.bs.dropdown`).
- **Mega menu** `div.mega-menu.d-flex` (padding **20px**): exactly THREE
  children, each `width: 33.3333%; padding-left/right: 10px` (equal thirds
  of the 680px panel; `ul` children `margin/padding: 0`):
  1. **Featured column** — `a.d-block.mb-1` → `img.img-fluid.mb-3`
     (`hero_1.jpg`, 1900×1150 landscape, renders ~206px column width),
     then `<p><a href="#">PSD Mockups</a><span class="text-muted">View All
Here</span></p>` — caption "PSD Mockups" (black `#000`/400 via
     `.mega-menu a`), "View All Here" Bootstrap `.text-muted`
     (**#6c757d**), the `p` text `#b3b3b3` (`p { color: #b3b3b3 }`).
  2. **Category col** — `ul.list-unstyled`: Code(5), Fonts(12), HTML
     Templates(81), Mockups(9), Logo(16), PSD Mockups(22) — counts are
     plain text inside the anchor; source has a trailing space after each
     `)` ("Code(5) </a>") — trim in tests.
  3. **Category col** — `ul.list-unstyled`: Sketch App(32), User
     Interface(61), WordPress(73), User Experience(88), WebGL(19),
     Mockups(93).
  - Link styling: `.mega-menu a` — `display: block; padding: 5px 0;
color: #000; font-weight: 400`; **hover → `#e83e8c`** (Bootstrap 4
    pink — the demo's ONLY accent color).
- **Unused CSS (do NOT reproduce functionally):** `.wrap-icon` (30px bell
  rule — not used), `.number` (24px `#007bff` circle badge — not used),
  `.title-wrap`/`.title` (12px 700 uppercase header — no header row in the
  markup), `.btn:active/:focus` reset + `.btn.btn-custom` (`#efefef`
  border). Note in PR only.
- **Icons:** exactly ONE glyph — the chevron (`\e313` → lucide
  `ChevronDown`, 16px). No bell, no badge, no carousel (owl loaded but
  unused).
- **Images:** exactly ONE — `hero_1.jpg` (1900×1150 landscape, `img-fluid`
  - `mb-3`, inside `d-block mb-1` link, `alt="Image"`). Use a picsum
    seeded landscape placeholder (e.g. `/400/240`, ~1.65:1, 2x for retina);
    verify the seed renders as a plausible design-mockup / person-with-device
    photo (seed-screening method). Source `<img>` also has
    `fetchpriority="high" decoding="sync"` — builder noise, skip.
- **No mobile CSS** — no media queries in the slim stylesheet (verified:
  0 `@media`). The 680px panel just overflows narrow viewports (source
  behavior — reproduce as-is).

## Structure order (1:1)

1. `.content` wrapper — padding **7rem 0**.
2. Heading container: `h2.my-5.text-center` "Dropdown #6" (20px Roboto,
   `#212529`, centered, 3rem top/bottom margins).
3. Demo container → `row.justify-content-center.text-center` →
   `col-md-5` → `div.dropdown.custom-dropdown`:
   - trigger: "Dropdown" text + chevron (gray `#888` closed; black + chevron
     up when open)
   - `dropdown-menu` (680px, centered under trigger): `mega-menu.d-flex` →
     3 equal columns — featured card (image + "PSD Mockups" + "View All
     Here") | 6 category links | 6 category links
4. Footer (monorepo addition): Component Dock credit link
   (`https://www.componentdock.com/`).

## Implementation tasks

- [ ] Scaffold `apps/sitemap` (copy simplest existing app; package
      `@free-react-templates/sitemap`; `public/CNAME` =
      `sitemap.free.componentdock.com`; homepage =
      `https://sitemap.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Sitemap — Mega Menu Dropdown", Roboto 300/400
      Google Fonts `<link>` (do NOT load Poppins/Source Serif Pro — unused
      by the source); body font weight 300
- [ ] `src/index.css` tokens: white page bg; `#888` (trigger closed);
      `#000` (trigger open, category links, caption); `#e83e8c` (link
      hover); `#6c757d` ("View All Here" text-muted); `#b3b3b3` (p text);
      `#212529` (heading); `#fff` (panel bg); shadow
      `0 15px 30px 0 rgba(0,0,0,.2)`
- [ ] `Navbar`-free: single section component (e.g. `MegaMenuDropdown`)
      with heading + trigger + menu (per spec scenarios)
- [ ] Dropdown behavior: open/close on click, outside click, Escape,
      re-click; fade + **10px** slide-down animation (~0.3s, margin-top
      0→10px); menu **centered under the trigger** (left:50% +
      translate(-50%,0)); trigger flips on open: text → `#000` + chevron
      rotates 180° (up), reverts on close
- [ ] Trigger: text "Dropdown" + lucide `ChevronDown` (16px, gray `#888`);
      `padding-right: 0`; semantic `<button>` with `aria-haspopup="menu"` +
      `aria-expanded`; NO badge, NO bell
- [ ] Menu: white card, **min-width 680px**, radius 4px, shadow
      `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, 10px padding;
      `mega-menu` flex row with 20px padding and three equal columns
      (33.333%, 10px side padding)
- [ ] Col 1 featured card: full-width landscape picsum image (seeded,
      ~1.65:1, inside a link, 1rem bottom margin) + caption "PSD Mockups"
      (black/400) + "View All Here" (text-muted `#6c757d`)
- [ ] Col 2 links: Code(5), Fonts(12), HTML Templates(81), Mockups(9),
      Logo(16), PSD Mockups(22); Col 3 links: Sketch App(32), User
      Interface(61), WordPress(73), User Experience(88), WebGL(19),
      Mockups(93) — block links, 5px top/bottom padding, `#000`/400,
      hover → `#e83e8c`; trim trailing source spaces in text
- [ ] Accessibility: `aria-controls`/id pairing (NOT the source's dangling
      `aria-labelledby`); keyboard-focusable links
- [ ] Footer with Component Dock link; NO ColorLib references in app code
- [ ] Tests: 100% coverage (heading "Dropdown #6", trigger open/close,
      open-state flip black + chevron rotation, menu centering, 3-column
      content + order, featured card, hover `#e83e8c`, accessibility,
      footer)
- [ ] `npm run verify:app sitemap` passes; commit `feat: add sitemap …`;
      PR + immediate squash merge; then TEMPLATES.md bookkeeping
      (`[x]` + surge URL) + `npm run readme:status`

## Verification checklist (from spec)

- [ ] Heading renders "Dropdown #6" (source bug — not "#16"), 20px Roboto,
      `#212529`, centered, 3rem margins, white page bg, `.content` 7rem
      padding, body Roboto weight 300
- [ ] Trigger: "Dropdown" text + chevron (lucide `ChevronDown`, 16px,
      `#888`); `padding-right: 0`; NO badge/bell; when open: text `#000` +
      chevron rotated 180° (up); reverts on close
- [ ] Menu centered under trigger (left:50% + translate(-50%,0)), white,
      min-width 680px, radius 4px, fade + **10px** slide-down; closes on
      outside/Escape/re-click; aria pairing correct (no dangling
      aria-labelledby)
- [ ] Mega panel: flex, 20px padding, 3 equal columns (33.333%, 10px side
      padding); col 1 featured card (landscape picsum image + "PSD Mockups" + "View All Here" `#6c757d`); col 2 and col 3 exact link lists with
      counts in order; links block/5px padding/`#000`/400; hover →
      `#e83e8c`
- [ ] No mobile restyling (zero media queries — 680px panel overflows
      narrow viewports like the source); no carousel; exactly 1 icon glyph
      (ChevronDown); unused CSS (badge/wrap-icon/title-wrap/btn-custom) not
      reproduced; hero image is a verified picsum seed; footer links
      Component Dock
