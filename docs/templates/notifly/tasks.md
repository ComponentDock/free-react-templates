# Notifly (ColorLib Dropdown 15) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-notifly`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 15" — fifteenth of the "Bootstrap
  Dropdowns (20)" series (source: https://colorlib.com/wp/template/dropdown-15/).
  TEMPLATES.md has ONE copy (line 768). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey**, Dropdown 07 as **Onboard**, Dropdown 08 as
  **Marquee**, Dropdown 09 as **Glimpse**, Dropdown 10 as **Inquire**,
  Dropdown 11 as **Privy**, Dropdown 12 as **Lilac**, Dropdown 13 as
  **Docket**, Dropdown 14 as **Fount** (see `docs/templates/menubar/` …
  `docs/templates/fount/`). This prep: Dropdown 15 → **Notifly** (a
  notification-bell dropdown — "notifications" + the family "-ly" suffix;
  no collision with `apps/`, `openspec/specs/`, `docs/templates/`).
- **Demo DOM analyzed (LIVE, fetched via curl AND browser-verified):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-15/`
  (HTTP 200, 24,151 bytes). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-15/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath. The page uses
  a **SLIM ~130-line `css/style.css`** (3,305 bytes) — same slim builder as
  dropdown-11/12/13/14 (Privy/Lilac/Docket/Fount), NOT the 222 KB ftco
  stylesheet that dropdown-09/10 load. Other assets:
  `fonts/icomoon/style.css` (icon font — exactly ONE glyph `\e7f4`
  `icon-notifications` consumed via the trigger's `.wrap-icon`),
  `css/bootstrap.min.css` (BS4 base), `css/owl.carousel.min.css` +
  `js/owl.carousel.min.js` (loaded but UNUSED), jquery/popper/bootstrap.min.js,
  `js/main.js` (adds `.active` to `.dropdown-menu` 100 ms after
  `show.bs.dropdown`, removes on hide — identical to
  Privy/Lilac/Docket/Fount's). Google Fonts via inline cf-fonts
  `@font-face` blocks: Roboto (300/400), Poppins (300/400/500), Source
  Serif Pro (400/600) — **only Roboto is used** in the demo.
- **HEADING BUG (documented in the spec — reproduce faithfully):** the page
  renders "Dropdown #5", not "Dropdown #15" (cloned from the #5 page, never
  renumbered — same bug as Lilac "#2" / Docket "#3" / Fount "#4"). The
  TEMPLATES.md screenshot and the live `<title>` show the same text. Spec
  mandates the reference text "Dropdown #5" — mention the discrepancy in
  the PR description.
- **DANGLING ARIA BUG (documented — do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (same
  as Fount/Lilac/Docket). Pair trigger + menu via `aria-controls`/id.
- **COMMENTED-OUT LEFTOVER (do NOT reproduce):** the HTML contains a
  commented-out block of Dropdown 14's source-picker items (All Rources /
  Dropbox / Google Drive / Eventbrite) — renders nothing; skip it.
- **Screenshot:** `dropdown-15.jpg` (1200×972, viewed in browser) — white
  page, centered heading "Dropdown #5", bell icon (dark-gray outline) with
  a small blue circular badge (white number) at its top-right corner, menu
  OPEN beneath: white card with soft diffuse shadow, "NOTIFICATIONS"
  small-uppercase header left + blue "Mark all as read" right, five rows
  each with a round avatar + bold black name + light-gray message (first
  two rows with a faint cream tint), centered blue "View All" link at the
  bottom. The bell sits above the RIGHT portion of the open panel.
  Matches DOM + CSS + live preview. URL bar: `preview.codrops.com` (an
  OLDER preview host; the CURRENT live preview is
  `https://preview.colorlib.com/theme/bootstrap/dropdown-15/`).
- **Visual design (DOM + CSS tokens + screenshot + live geometry):**
  minimalist component-showcase page. Body bg **WHITE** (the slim
  stylesheet sets NO body `background-color`). `.content` padding **7rem
  0**. Heading `h2.my-5.text-center` "Dropdown #5" — custom `h2 {
font-size: 20px }` (NOT Bootstrap 2rem), Roboto, near-black `#212529`,
  `my-5` = 3rem top + bottom margin. Demo row:
  `row.justify-content-center.text-center` → `col-md-5` (narrow ~41.7% on
  md+) → `div.dropdown.custom-dropdown`.
- **Trigger** `<a.dropdown-link data-toggle="dropdown">` (a LINK, not a
  button — the recreation uses a semantic `<button>` with identical
  visuals): contains `<span class="wrap-icon icon-notifications"></span>`
  (the **bell**, 30px, gray `#888`; icomoon `\e7f4` = Material
  "notifications" → lucide `Bell`) + `<span class="number">5</span>` (the
  **count badge**: 24×24px circle, bg **`#007bff`**, radius 50%, **2px
  solid #fff border**, white 13px text, line-height 20px, absolute
  **top: -10px; right: -10px** — hangs off the bell's top-right corner).
  `.dropdown-link`: `color: #888`, inline-block, **`padding-right: 0`**
  (NOT Fount's 40px — the badge is positioned with negative offsets), no
  background/border; font-size inherited (16px). **NO open-state flip**
  (no `.show` rule — trigger looks identical open/closed).
- **Menu** `div.dropdown-menu.dropdown-menu-right`: white bg, `border: 1px
solid transparent`, **`max-width: 380px`**, shadow `0 15px 30px 0
rgba(0,0,0,.2)`, **`left: 0 !important`** (LEFT-anchored to the demo
  column — beats BS4's `-right` class; `right: 0` remains and just caps
  width), `margin-top: 0 !important`, `padding: 10px` (shorthand overrides
  the file's earlier `padding-top/bottom: 0`). ANIMATED: `opacity: 0;
visibility: hidden` → `.active`: `opacity: 1; visibility: visible;
margin-top: 10px !important`, transition `.3s margin-top/opacity/
visibility ease` (fade + **10px** slide-down — NOT Fount's 20px;
  `.active` added by main.js 100 ms after `show.bs.dropdown`). LIVE
  GEOMETRY (browser-verified): 380px wide, left edge at the column's left
  edge; the centered bell floats over the panel's RIGHT portion.
- **Header** `div.title-wrap.d-flex.align-items-center` (padding 10px 0):
  `h3.title.mb-0` "Notifications" — **12px, weight 700, uppercase**
  (renders "NOTIFICATIONS"; tests query the RAW text "Notifications" —
  jsdom ignores `text-transform` for accessible names); `a.small.ml-auto`
  "Mark all as read" — `.small`, right-aligned, **`#007bff`**.
- **List** `ul.custom-notifications`: `list-style: none; padding/margin:
0; height: 200px; overflow-y: scroll` (scrollable — 5 items exceed
  200px → scrollbar); **`border-bottom: 1px solid #efefef`** (divider
  above "View All"). Five `<li>` (14px, `margin-bottom: 10px`, last 0):
  1. `li.unread` — **Claudia Gideon** "marked the task done a day ago"
     (person_1.jpg)
  2. `li.unread` — **Alex Stafford** "marked the task done a day ago"
     (person_2.jpg)
  3. `li` — **Devin Richards** "mentioned you in her comment on Invoices 2
     days ago" (person_3.jpg)
  4. `li` — **Alex Stafford** "marked the task done a day ago"
     (person_2.jpg reused)
  5. `li` — **Devin Richards** "mentioned you in her comment on Invoices 2
     days ago" (person_3.jpg reused)
     Row link `a.d-flex`: `display: block; padding: 20px; color: #bfbfbf`;
     hover `background: #f9f9f9`. Avatar `div.img.mr-3`: `flex: 0 0 40px`;
     `<img>` 40px, `border-radius: 50%`. `strong` → bold black `#000`.
     **`li.unread a { background: #fffaef }`** (pale cream — confirmed live
     rgb(255,250,239)).
- **Footer** `p.text-center.m-0.p-0` → `a.small` "View All" — centered,
  **`#007bff`**.
- **Unused CSS (do NOT reproduce functionally):** `.custom-dropdown .btn`
  rules (box-shadow/outline reset + `#efefef` border) target a button
  variant the demo never uses — the trigger is a link. Note in PR only.
- **Icons:** exactly ONE glyph — the bell (`\e7f4` → lucide `Bell`); the
  badge is a pure CSS circle. No chevron, no item dots (unlike Fount), no
  carousel (owl loaded but unused).
- **Images:** 3 avatar photos reused (person_2 ×2, person_3 ×2). Use
  picsum seeds; verify seeds render as faces (seed-screening method; known
  good person photos: picsum IDs 1027, 64, 823, 996). Names may be
  paraphrased to match available portraits (note in PR).
- **No mobile CSS** — no media queries in the slim stylesheet (like
  Privy/Lilac/Docket/Fount). Panel stays left-anchored at all viewports;
  `col-md-5` becomes full-width. Reproduce as-is.

## Structure order (1:1)

1. `.content` wrapper — padding **7rem 0**.
2. Heading container: `h2.my-5.text-center` "Dropdown #5" (20px Roboto,
   `#212529`, centered, 3rem top/bottom margins).
3. Demo container → `row.justify-content-center.text-center` →
   `col-md-5` → `div.dropdown.custom-dropdown`:
   - trigger (bell + blue count badge "5"; no background; NO open-state
     change)
   - `dropdown-menu.dropdown-menu-right` (left-anchored 380px card):
     header row (NOTIFICATIONS + "Mark all as read"), scrollable
     `ul.custom-notifications` (5 rows; 2 unread tinted), "View All" row
4. Footer (monorepo addition): Component Dock credit link
   (`https://www.componentdock.com/`).

## Implementation tasks

- [ ] Scaffold `apps/notifly` (copy simplest existing app; package
      `@free-react-templates/notifly`; `public/CNAME` =
      `notifly.free.componentdock.com`; homepage =
      `https://notifly.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Notifly — Notifications Dropdown", Roboto
      300/400 Google Fonts `<link>` (do NOT load Poppins/Source Serif Pro
      — unused by the source)
- [ ] `src/index.css` tokens: white page bg; `#888` (bell); `#007bff`
      (badge, links); `#fff` (badge border/text); `#212529` (heading,
      header title); `#000` (names); `#bfbfbf` (message text); `#fffaef`
      (unread bg); `#f9f9f9` (row hover); `#efefef` (list divider)
- [ ] `Navbar`-free: single section component (e.g. `NotificationDropdown`)
      with heading + trigger + menu (per spec scenarios)
- [ ] Dropdown behavior: open/close on click, outside click, Escape,
      re-click; fade + **10px** slide-down animation (~0.3s, margin-top
      0→10px); trigger stays visually unchanged while open
- [ ] Trigger: lucide `Bell` at 30px gray `#888` + **24px `#007bff`
      badge** "5" (2px white border, 13px white text, absolute top:-10px
      right:-10px); `padding-right: 0`; semantic `<button>` with
      `aria-haspopup="menu"` + `aria-expanded`
- [ ] Menu: white card, **max-width 380px**, left-anchored (left: 0),
      shadow `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, radius
      .25rem, 10px padding; header row: "Notifications" (12px/700/
      uppercase) + "Mark all as read" (`.small`, `#007bff`, right)
- [ ] List: `height: 200px` + `overflow-y: scroll` + `border-bottom: 1px
    solid #efefef`; five rows in order (Claudia Gideon, Alex Stafford —
      both `unread` → `#fffaef` bg; Devin Richards; Alex Stafford; Devin
      Richards), names in bold black `<strong>` + `#bfbfbf` messages; 40px
      round picsum avatars (same seed reused per person); row links
      `padding: 20px`, hover `#f9f9f9`; centered "View All" (`#007bff`)
      below
- [ ] Accessibility: `aria-controls`/id pairing (NOT the source's dangling
      `aria-labelledby`); keyboard-focusable rows; do NOT reproduce the
      commented-out Dropdown 14 leftover rows
- [ ] Footer with Component Dock link; NO ColorLib references in app code
- [ ] Tests: 100% coverage (heading "Dropdown #5", trigger open/close,
      no-open-state change, header content, item content/order + unread
      tint, hover bg, View All, accessibility, footer)
- [ ] `npm run verify:app notifly` passes; commit `feat: add notifly …`;
      PR + immediate squash merge; then TEMPLATES.md bookkeeping
      (`[x]` + surge URL) + `npm run readme:status`

## Verification checklist (from spec)

- [ ] Heading renders "Dropdown #5" (source bug — not "#15"), 20px Roboto,
      `#212529`, centered, 3rem margins, white page bg, `.content` 7rem
      padding
- [ ] Trigger: bell (lucide `Bell`, 30px, `#888`) + 24px `#007bff` badge
      "5" (2px white border, white 13px text, top:-10px right:-10px);
      `padding-right: 0`; NO change when open
- [ ] Menu left-anchored, max-width 380px, fade + **10px** slide-down;
      header "Notifications" (12px/700/uppercase) + "Mark all as read"
      right; five rows in order with 40px round avatars, bold black names,
      `#bfbfbf` messages; rows 1–2 tinted `#fffaef`; list scrollable at
      200px with `#efefef` bottom divider; hover `#f9f9f9`; centered "View
      All" (`#007bff`)
- [ ] Closes on outside/Escape/re-click; aria pairing correct (no dangling
      aria-labelledby; no commented-out leftover rows)
- [ ] No mobile restyling; no carousel; exactly 1 icon glyph (Bell — no
      chevron/dots unlike Fount); avatar seeds verified as faces; footer
      links Component Dock
