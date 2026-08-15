# Identity (ColorLib Dropdown 18) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-identity`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 18" — eighteenth of the "Bootstrap
  Dropdowns (20)" series (source: https://colorlib.com/wp/template/dropdown-18/).
  TEMPLATES.md has ONE copy (line 771). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey**, Dropdown 07 as **Onboard**, Dropdown 08 as
  **Marquee**, Dropdown 09 as **Glimpse**, Dropdown 10 as **Inquire**,
  Dropdown 11 as **Privy**, Dropdown 12 as **Lilac**, Dropdown 13 as
  **Docket**, Dropdown 14 as **Fount**, Dropdown 15 as **Notifly**,
  Dropdown 16 as **Sitemap**, Dropdown 17 as **Console** (see
  `docs/templates/menubar/` … `docs/templates/console/`). This prep:
  Dropdown 18 → **Identity** (a user-account/identity menu — avatar + name
  - location trigger opening a profile-menu card; no collision with
    `apps/`, `openspec/specs/`, `docs/templates/` — verified 2026-08-16).
- **Demo DOM analyzed (LIVE, fetched via curl AND browser-verified):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-18/`
  (HTTP 200, 21,681 bytes). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-18/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath. The page uses
  a **SLIM ~123-line `css/style.css`** (3,848 bytes) — same slim builder as
  dropdown-11/12/13/14/15 (Privy/Lilac/Docket/Fount/Notifly), NOT the
  222 KB ftco stylesheet that dropdown-09/10 load. Other assets:
  `fonts/icomoon/style.css` (icon font — exactly FIVE glyphs consumed:
  `icon-dashboard`, `icon-mail_outline`, `icon-people`, `icon-cog`,
  `icon-sign-out`), `css/bootstrap.min.css` (BS4 base),
  `css/owl.carousel.min.css` + `js/owl.carousel.min.js` (loaded but
  UNUSED), jquery/popper/bootstrap.min.js, `js/main.js` (adds `.active` to
  `.dropdown-menu` 100 ms after `show.bs.dropdown`, removes on hide —
  identical to Notifly/Privy/Lilac/Docket/Fount's). Google Fonts via
  inline cf-fonts `@font-face` blocks: Roboto (300/400/700) — **only
  Roboto is used** in the demo.
- **HEADING BUG (documented in the spec — reproduce faithfully):** the page
  renders "Dropdown #8", not "Dropdown #18" (cloned from the #8 page, never
  renumbered — same bug as Notifly "#5" / Lilac "#2" / Docket "#3" / Fount
  "#4"). The TEMPLATES.md screenshot and the live `<title>` show the same
  text. Spec mandates the reference text "Dropdown #8" — mention the
  discrepancy in the PR description.
- **"SettingNew" GLITCH (documented in the spec — reproduce faithfully):**
  the Setting row is `<span class="icon icon-cog"></span>Setting<span>New</span>`
  — an UNSTYLED plain span appended with NO space and NO class, so the
  source renders "SettingNew" as one run (confirmed live AND in the
  screenshot). Do NOT add a space, a badge, or styling.
- **DANGLING ARIA BUG (documented — do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (same
  as Notifly/Fount/Lilac/Docket). Pair trigger + menu via
  `aria-controls`/id.
- **Screenshot:** `dropdown-18.jpg` (1200×972, viewed in browser) —
  light-gray page, centered heading "Dropdown #8", trigger (50px round
  avatar of a man in a suit + bold dark "Kevin Thomas" + smaller lighter
  gray "New York City, USA") with the menu OPEN beneath: white card, soft
  diffuse shadow, five rows (User Dashboard / Inbox with small orange
  rounded badge / Following / "SettingsNew" / Log out), gray icons left,
  faint dividers. Matches DOM + CSS + live preview EXCEPT the badge number
  (screenshot "1" vs live DOM "3" — live DOM is authoritative: 3). URL
  bar: `preview.codyfol.io` (an OLDER preview host; the CURRENT live
  preview is `https://preview.colorlib.com/theme/bootstrap/dropdown-18/`).
- **Visual design (DOM + CSS tokens + screenshot + live geometry):**
  minimalist component-showcase page. Body bg **`#efefef`** (light gray —
  the slim stylesheet DOES set it, unlike Notifly's white). `.content`
  padding **7rem 0**. Heading `h2.my-5.text-center` "Dropdown #8" — custom
  `h2 { font-size: 20px }` (NOT Bootstrap 2rem), Roboto, near-black
  `#212529`, `my-5` = 3rem top + bottom margin. Demo row:
  `row.justify-content-center.text-center` → `col-md-5` (narrow ~41.7% on
  md+) → `div.dropdown.custom-dropdown`.
- **Trigger** `<a.dropdown-link.d-flex.align-items-center.text-left
data-toggle="dropdown" data-offset="0, 20">` (a LINK, not a button —
  the recreation uses a semantic `<button>` with identical visuals):
  `div.profile-pic.mr-3` (flex 0 0 50px; `<img>` 50px round,
  `border-radius: 50%`; source `images/person_2.jpg` — bearded man in a
  red/white checkered shirt live) + `div.profile-info`: `<h3>` **"Kevin
  Thomas"** (16px, bold) + `<span>` **"New York City, USA"** (13px,
  display block — stacked below the name). `.dropdown-link`: `color:
#000` (via `.custom-dropdown > a`), flex center, NO background/border.
  **NO arrow element in the markup** — the stylesheet's
  `.custom-dropdown.show > a .arrow` rotate rule targets an `.arrow` span
  the demo never renders, so there is NO visible open-state change.
- **Menu** `div.dropdown-menu`: white `#fff` bg, `border: 1px solid
transparent`, **`border-radius: 0`** (SQUARE corners — not BS4 .25rem),
  shadow `0 15px 30px 0 rgba(0,0,0,.2)`, `right: auto !important; left:
auto !important` (no forced anchoring — popper.js positions it under the
  centered trigger via `data-offset="0, 20"` = 20px below), `margin-top:
-10px !important`, `padding-top/bottom: 0` (BS4 `.5rem` left/right
  remains), width auto (BS4 min-width 10rem). ANIMATED: `opacity: 0;
visibility: hidden` → `.active`: `opacity: 1; visibility: visible;
margin-top: 0 !important`, transition `.3s margin-top/opacity/visibility
ease` (fade + **10px** slide-down — the -10px→0 margin shift; `.active`
  added by main.js 100 ms after `show.bs.dropdown`).
- **Items** five `<a.dropdown-item>` rows (`position: relative`), in
  order:
  1. **User Dashboard** — `icon-dashboard` → lucide `LayoutDashboard`
  2. **Inbox** — `icon-mail_outline` → lucide `Mail` + `.number` badge:
     **`#fd7e14`** orange, white 11px text, padding 2px 6px, radius 4px,
     absolute `right: 15px; top: 50%; translateY(-50%)`; value **"3"**
     (live DOM; screenshot shows "1" — live wins)
  3. **Following** — `icon-people` → lucide `Users`
  4. **Setting** — `icon-cog` → lucide `Settings` + UNSTYLED "New" span
     (renders "SettingNew" — source glitch, reproduce as-is)
  5. **Log out** — `icon-sign-out` → lucide `LogOut`
     Item CSS: 14px, padding 15px, `color: #b2bac1` (light gray), `border-
bottom: 1px solid rgba(0,0,0,0.1)` (faint dividers; last none), icon
     margin-right 15px inline-block; **hover/active/focus: `background:
#fff; color: #000`**.
- **Unused CSS (do NOT reproduce functionally):** `.custom-dropdown > a
.arrow` + `.show` rotate rules (no arrow element in markup), `.btn:active
/:focus` reset + `.btn.btn-custom` `#efefef` border (button variant the
  demo never uses — the trigger is a link). Note in PR only.
- **Icons:** exactly FIVE glyphs, one per row (lucide: LayoutDashboard,
  Mail, Users, Settings, LogOut). The Inbox count is a pure CSS chip (not
  an icon). No chevron on the trigger, no carousel (owl loaded but unused).
- **Images:** ONE avatar photo (`person_2.jpg`). Use a picsum seed, e.g.
  `https://picsum.photos/seed/<seed>/100/100` rendered at 50px round (2x
  for retina); verify the seed renders as a recognizable face
  (seed-screening method; known good person photos: picsum IDs 1027, 64,
  823, 996). The name "Kevin Thomas" may be paraphrased to match the
  chosen portrait (note in PR).
- **No mobile CSS** — no media queries in the slim stylesheet (like
  Privy/Lilac/Docket/Fount/Notifly). Dropdown stays centered under the
  trigger at all viewports; `col-md-5` becomes full-width. Reproduce
  as-is.

## Structure order (1:1)

1. `.content` wrapper — padding **7rem 0**.
2. Heading container: `h2.my-5.text-center` "Dropdown #8" (20px Roboto,
   `#212529`, centered, 3rem top/bottom margins).
3. Demo container → `row.justify-content-center.text-center` →
   `col-md-5` → `div.dropdown.custom-dropdown`:
   - trigger (50px round avatar + "Kevin Thomas" + "New York City, USA";
     dark `#000` text; no background; NO visible open-state change)
   - `dropdown-menu` (square-cornered white card, shadow, under-trigger):
     five rows — User Dashboard / Inbox (+orange badge "3") / Following /
     Setting+New ("SettingNew") / Log out — with faint dividers
4. Footer (monorepo addition): Component Dock credit link
   (`https://www.componentdock.com/`).

## Implementation tasks

- [ ] Scaffold `apps/identity` (copy simplest existing app; package
      `@free-react-templates/identity`; `public/CNAME` =
      `identity.free.componentdock.com`; homepage =
      `https://identity.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Identity — User Account Dropdown", Roboto
      300/400 Google Fonts `<link>` (body `font-weight: 300`)
- [ ] `src/index.css` tokens: `#efefef` page bg; `#212529` (heading);
      `#000` (trigger text, hover text); `#b2bac1` (item text); `#fd7e14`
      (badge bg); `#fff` (menu bg, badge text, hover bg);
      `rgba(0,0,0,0.1)` (row dividers); shadow `0 15px 30px 0
    rgba(0,0,0,.2)`
- [ ] `Navbar`-free: single section component (e.g. `AccountDropdown`)
      with heading + trigger + menu (per spec scenarios)
- [ ] Dropdown behavior: open/close on click, outside click, Escape,
      re-click; fade + **10px** slide-down animation (~0.3s, margin-top
      -10px→0); trigger stays visually unchanged while open
- [ ] Trigger: 50px round picsum avatar (seed verified as a face) + name
      "Kevin Thomas" (16px bold) + "New York City, USA" (13px block);
      semantic `<button>` with `aria-haspopup="menu"` + `aria-expanded`
- [ ] Menu: white card, SQUARE corners (`border-radius: 0`), shadow
      `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, opens below the
      trigger (offset 20px)
- [ ] Five rows in order with lucide icons: LayoutDashboard / Mail
      (+orange `#fd7e14` badge "3" — 11px white text, padding 2px 6px,
      radius 4px, vertically centered right) / Users / Settings + plain
      "New" (renders "SettingNew" — source glitch, NO space/badge) /
      LogOut; rows 14px, 15px padding, `#b2bac1`, faint `rgba(0,0,0,0.1)`
      dividers (none last); hover/focus → `#fff` bg + `#000` text
- [ ] Accessibility: `aria-controls`/id pairing (NOT the source's dangling
      `aria-labelledby`); keyboard-focusable rows (Enter/Space)
- [ ] Footer with Component Dock link; NO ColorLib references in app code
- [ ] Tests: 100% coverage (heading "Dropdown #8", trigger open/close,
      no-open-state change, item content/order + badge, "SettingNew"
      glitch, hover treatment, accessibility, footer)
- [ ] `npm run verify:app identity` passes; commit `feat: add identity …`;
      PR + immediate squash merge; then TEMPLATES.md bookkeeping
      (`[x]` + surge URL) + `npm run readme:status`

## Verification checklist (from spec)

- [ ] Heading renders "Dropdown #8" (source bug — not "#18"), 20px Roboto,
      `#212529`, centered, 3rem margins, light-gray `#efefef` page bg,
      `.content` 7rem padding
- [ ] Trigger: 50px round avatar + "Kevin Thomas" (16px bold) + "New York
      City, USA" (13px block); `#000` text; NO change when open
- [ ] Menu opens below the trigger (white card, `border-radius: 0`,
      shadow `0 15px 30px 0 rgba(0,0,0,.2)`) with fade + **10px**
      slide-down
- [ ] Five rows in order: User Dashboard / Inbox + orange `#fd7e14` badge
      "3" / Following / Setting + plain "New" ("SettingNew" glitch) / Log
      out; lucide icons per row; dividers `rgba(0,0,0,0.1)`; hover → white
      bg + black text
- [ ] Menu closes on outside click, Escape, trigger re-click;
      `aria-haspopup`/`aria-expanded` flip correctly; trigger-menu paired
      via `aria-controls`/id (source's dangling `aria-labelledby` bug NOT
      reproduced)
- [ ] No mobile-specific behavior (no media queries in the source);
      avatar is a picsum seed verified as a face, 50px round
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/identity`
