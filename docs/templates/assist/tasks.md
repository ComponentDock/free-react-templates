# Assist (ColorLib Dropdown 20) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-assist`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 20" — the LAST of the "Bootstrap
  Dropdowns (20)" series (source: https://colorlib.com/wp/template/dropdown-20/).
  TEMPLATES.md has ONE copy (line 773). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey**, Dropdown 07 as **Onboard**, Dropdown 08 as
  **Marquee**, Dropdown 09 as **Glimpse**, Dropdown 10 as **Inquire**,
  Dropdown 11 as **Privy**, Dropdown 12 as **Lilac**, Dropdown 13 as
  **Docket**, Dropdown 14 as **Fount**, Dropdown 15 as **Notifly**,
  Dropdown 16 as **Sitemap**, Dropdown 17 as **Console**, Dropdown 18 as
  **Identity**, Dropdown 19 as **Curricula** (see
  `docs/templates/menubar/` … `docs/templates/curricula/`). This prep:
  Dropdown 20 → **Assist** (a help/support menu — "Menu" trigger opening a
  two-section card "Help & Feedback" / "About"; no collision with
  `apps/`, `openspec/specs/`, `docs/templates/` — verified 2026-08-16).
- **Demo DOM analyzed (LIVE, fetched via curl AND browser-verified):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-20/`
  (HTTP 200, 21,800 bytes). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-20/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath. The page uses
  a **SLIM ~137-line `css/style.css`** (3,487 bytes) — same slim builder as
  dropdown-11/12/13/14/15/18/19 (Privy/Lilac/Docket/Fount/Notifly/Identity/
  Curricula), NOT the 222 KB ftco stylesheet that dropdown-09/10 load.
  Other assets: `fonts/icomoon/style.css` (icon font — exactly EIGHT glyphs
  consumed: `icon-dashboard`, `icon-mail_outline`, `icon-people`,
  `icon-comment`, `icon-lock_outline`, `icon-security`,
  `icon-featured_play_list`, `icon-keyboard_arrow_down`),
  `css/bootstrap.min.css` (BS4 base), `css/owl.carousel.min.css` +
  `js/owl.carousel.min.js` (loaded but UNUSED), jquery/popper/bootstrap.min.js,
  `js/main.js` (adds `.active` to `.dropdown-menu` 100 ms after
  `show.bs.dropdown`, removes on hide — identical to the other slim-builder
  demos). Google Fonts via inline cf-fonts `@font-face` blocks: Roboto
  (300/400/700) — **only Roboto is used** in the demo.
- **HEADING BUG (documented in the spec — reproduce faithfully):** the page
  renders "Dropdown #8", not "Dropdown #20" — the SAME bug as Identity
  (both pages were cloned from the Dropdown 08 demo and never renumbered;
  like Notifly "#5" / Lilac "#2" / Docket "#3" / Fount "#4" / Curricula
  "#9"). The TEMPLATES.md screenshot AND the live `<title>` show the same
  text. Spec mandates the reference text "Dropdown #8" — mention the
  discrepancy in the PR description.
- **DANGLING ARIA BUG (documented — do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (same
  as Identity/Curricula/Notifly/Fount/Lilac/Docket). Pair trigger + menu via
  `aria-controls`/id.
- **DEAD CLASS (documented — do NOT reproduce):** the trigger anchor carries
  `align-items-center` with NO `d-flex` — a no-op in BS4 (live
  `display: inline`). Reproduce the visual result (inline black link)
  without the dead class.
- **Screenshot:** `dropdown-20.jpg` (1200×972, viewed in browser) —
  light-gray page, centered heading "Dropdown #8", trigger (black "Menu"
  - downward chevron, no border; browser focus outline visible around it)
    with the menu OPEN beneath: white card, soft diffuse shadow, two sections
    — "HELP & FEEDBACK" (gray, small): Getting started / Help center with a
    small ORANGE badge (digit verified as **"3"** by zoomed inspection) /
    Contact us — faint divider — "ABOUT": Blog / Privacy / Security / Terms
    of service. Black text, dark-gray icons, no row dividers. Matches DOM +
    CSS + live preview EXACTLY (badge "3" == live DOM "3"; no variance,
    unlike Identity's screenshot "1" vs DOM "3"). URL bar:
    `ui-preview.colorlib.com` (an OLDER preview host; the CURRENT live
    preview is `https://preview.colorlib.com/theme/bootstrap/dropdown-20/`).
- **Visual design (DOM + CSS tokens + screenshot + live geometry):**
  minimalist component-showcase page. Body bg **`#efefef`** (light gray —
  like Identity, NOT Curricula's white). `.content` padding **7rem 0**
  (live 112px 0). Heading `h2.my-5.text-center` "Dropdown #8" — custom
  `h2 { font-size: 20px }` (NOT Bootstrap 2rem), Roboto, near-black
  `#212529`, weight 500, `my-5` = 3rem top + bottom margin. Demo row:
  `row.justify-content-center.text-center` → `col-md-5` (narrow ~41.7% on
  md+) → `div.dropdown.custom-dropdown`.
- **Trigger** `<a.dropdown-link.align-items-center[data-offset="-70, 20"]>`
  (a LINK, not a button — the recreation uses a semantic `<button>` with
  identical visuals): text **"Menu"** + `<span class="arrow
icon-keyboard_arrow_down">` (lucide `ChevronDown`). `.custom-dropdown > a`
  → **`color: #000`** (BLACK), live `display: inline`, NO background/border.
  **The arrow IS rendered** so the open-state change is visible: the chevron
  rotates **−180°** (`.show > a .arrow { transform: rotate(-180deg) }`, live
  matrix(-1,0,0,-1)). The trigger TEXT stays black when open — there is NO
  `.show > a` color rule (unlike Curricula's gray→black; here black→black).
- **Menu** `div.dropdown-menu`: white `#fff` bg (explicit), `border: 1px
solid transparent`, **`border-radius: 0`** (SQUARE — like Identity, NOT
  Curricula's 4px), shadow `0 15px 30px 0 rgba(0,0,0,.2)`,
  `margin-top: -10px !important`, **`padding: 20px 0`** (top/bottom only;
  items carry their own 20px horizontal padding), `min-width: 160px` (BS4
  10rem), width AUTO — **live 174.6px**. Positioned by popper.js with
  `data-offset="-70, 20"`: **menu left edge = trigger left − 70px** (live:
  trigger x=610.2, menu x=540.5 — exact), **menu top ≈ trigger bottom +
  20px** (on a normal-height viewport; the headless 577px-tall viewport
  flipped it upward, a popper artifact — the screenshot confirms below).
  Menu center ends up ~12px LEFT of trigger center. ANIMATED: `opacity: 0;
visibility: hidden; margin-top: -10px !important` → `.active`: `opacity:
1; visibility: visible; margin-top: 0 !important`, transition `.3s
margin-top/opacity/visibility ease` (fade + **10px** slide-down — the
  −10px→0 margin shift; `.active` added by main.js 100 ms after
  `show.bs.dropdown`).
- **Sections** TWO `<h3 class="menu-heading">` — **"Help & Feedback"** then
  **"About"**: 14px, `#b3b3b3`, padding 0 20px — separated by a **hairline
  `<hr>`**: `height: 1px; border: 0; border-top: 1px solid #e9ecef; margin:
.5em 0; padding: 0` (the ONLY divider in the menu).
- **Items** SEVEN `<a.dropdown-item>` rows (`position: relative`), in
  order:
  1. **Getting started** — `icon-dashboard` → lucide `LayoutDashboard`
  2. **Help center** — `icon-mail_outline` → lucide `Mail` + `.number`
     badge: **`#fd7e14`** orange, white 11px text, padding 2px 6px, radius
     4px, absolute `right: 15px; top: 50%; translateY(-50%)`; value **"3"**
     (live DOM == screenshot — zoomed-verified)
  3. **Contact us** — `icon-people` → lucide `Users`
  4. **Blog** — `icon-comment` → lucide `MessageCircle`
  5. **Privacy** — `icon-lock_outline` → lucide `Lock`
  6. **Security** — `icon-security` → lucide `ShieldCheck`
  7. **Terms of service** — `icon-featured_play_list` → lucide `ListVideo`
     Item CSS: 14px, `padding: 8px 20px`, **`color: #000`** (BLACK — unlike
     Identity's `#b2bac1`), icon `margin-right: 15px; display: inline-block`;
     **hover/active/focus: `background: #f8f9fa`** (light-gray row highlight;
     text stays black). **NO row dividers** — the `a:last-child {
  border-bottom: none }` rule is DEAD CSS here (no border-bottom is ever
     applied, unlike Identity's faint `rgba(0,0,0,.1)` dividers); only the
     `<hr>` separates the sections.
- **Unused CSS (do NOT reproduce functionally):** `p { color: #b3b3b3 }`
  (no `<p>` in the demo), `.custom-dropdown { border: none !important }`
  (BS4 `.dropdown` has no border anyway), `.btn:active/:focus` reset +
  `.btn.btn-custom` `#efefef` border (button variant the demo never uses —
  the trigger is a link), `a:last-child { border-bottom: none }` (dead).
  Note in PR only.
- **Icons:** exactly EIGHT glyphs — SEVEN row icons (lucide:
  LayoutDashboard, Mail, Users, MessageCircle, Lock, ShieldCheck, ListVideo)
  - the trigger chevron (lucide ChevronDown). The Help-center count is a
    pure CSS chip (not an icon). No carousel (owl loaded but unused).
- **Images:** NONE — no avatar, no photos, no backgrounds (SIMPLER than
  Identity). The recreation needs no picsum assets.
- **No mobile CSS** — no media queries in the slim stylesheet (like
  Privy/Lilac/Docket/Fount/Notifly/Identity/Curricula). The menu keeps its
  fixed offset position at all viewports; `col-md-5` becomes full-width
  below md. Reproduce as-is.

## Structure order (1:1)

1. `.content` wrapper — padding **7rem 0**.
2. Heading container: `h2.my-5.text-center` "Dropdown #8" (20px Roboto,
   `#212529`, weight 500, centered, 3rem top/bottom margins).
3. Demo container → `row.justify-content-center.text-center` →
   `col-md-5` → `div.dropdown.custom-dropdown`:
   - trigger ("Menu" + lucide `ChevronDown`; black `#000` text; no
     background/border; chevron rotates −180° when open, text stays black)
   - `dropdown-menu` (square-cornered white card, shadow, 70px left of /
     20px below the trigger):
     - "Help & Feedback" heading → Getting started / Help center (+orange
       badge "3") / Contact us → `<hr>` → "About" heading → Blog / Privacy
       / Security / Terms of service — with light-gray `#f8f9fa` hover
4. Footer (monorepo addition): Component Dock credit link
   (`https://www.componentdock.com/`).

## Implementation tasks

- [ ] Scaffold `apps/assist` (copy simplest existing app; package
      `@free-react-templates/assist`; `public/CNAME` =
      `assist.free.componentdock.com`; homepage =
      `https://assist.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Assist — Help & Feedback Menu", Roboto 300/400
      Google Fonts `<link>` (body `font-weight: 300`)
- [ ] `src/index.css` tokens: `#efefef` page bg; `#212529` (heading);
      `#000` (trigger text, row text); `#b3b3b3` (section headings);
      `#f8f9fa` (row hover bg); `#fd7e14` (badge bg); `#fff` (menu bg,
      badge text); `#e9ecef` (divider); shadow `0 15px 30px 0
    rgba(0,0,0,.2)`
- [ ] `Navbar`-free: single section component (e.g. `HelpMenu`)
      with heading + trigger + menu (per spec scenarios)
- [ ] Dropdown behavior: open/close on click, outside click, Escape,
      re-click; fade + **10px** slide-down animation (~0.3s, margin-top
      −10px→0); positioned **70px left of the trigger's left edge, ~20px
      below it** (the source's `data-offset="-70, 20"`)
- [ ] Trigger: "Menu" + lucide `ChevronDown`; black `#000` text, no
      background/border; semantic `<button>` with `aria-haspopup="menu"` +
      `aria-expanded`; when open → text STAYS black, chevron rotates −180°
- [ ] Menu: white card, SQUARE corners (`border-radius: 0`), shadow
      `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, `padding: 20px 0`
      (top/bottom), min-width 160px, width auto (~175px)
- [ ] Two section headings "Help & Feedback" / "About" (14px, `#b3b3b3`,
      padding 0 20px) separated by ONE hairline divider (`#e9ecef`, margin
      .5em 0); NO row dividers
- [ ] Seven rows in order with lucide icons: LayoutDashboard / Mail
      (+orange `#fd7e14` badge "3" — 11px white text, padding 2px 6px,
      radius 4px, vertically centered right, 15px inset) / Users /
      MessageCircle / Lock / ShieldCheck / ListVideo; rows 14px, black
      `#000`, padding 8px 20px, icon 15px right margin; hover/focus →
      `#f8f9fa` bg (text stays black)
- [ ] Accessibility: `aria-controls`/id pairing (NOT the source's dangling
      `aria-labelledby`); keyboard-focusable rows (Enter/Space)
- [ ] Footer with Component Dock link; NO ColorLib references in app code
- [ ] Tests: 100% coverage (heading "Dropdown #8", trigger open/close,
      chevron rotation + black-stays-black open state, menu position,
      section headings + divider, item content/order + badge "3", hover
      treatment, accessibility, footer)
- [ ] `npm run verify:app assist` passes; commit `feat: add assist …`;
      PR + immediate squash merge; then TEMPLATES.md bookkeeping
      (`[x]` + surge URL) + `npm run readme:status`

## Verification checklist (from spec)

- [ ] Heading renders "Dropdown #8" (source bug — not "#20"; the SAME bug
      as Identity), 20px Roboto, `#212529`, weight 500, centered, 3rem
      margins, light-gray `#efefef` page bg, `.content` 7rem padding
- [ ] Trigger: "Menu" + lucide `ChevronDown`; black `#000`; NO
      background/border; chevron rotates −180° when open, text stays black
- [ ] Menu opens 70px left of / ~20px below the trigger (white card,
      `border-radius: 0`, shadow `0 15px 30px 0 rgba(0,0,0,.2)`) with fade +
      **10px** slide-down
- [ ] Two sections: "Help & Feedback" (Getting started / Help center +
      orange `#fd7e14` badge "3" / Contact us) — hairline divider — "About"
      (Blog / Privacy / Security / Terms of service); lucide icons per row;
      NO row dividers; hover → `#f8f9fa` bg + black text
- [ ] Menu closes on outside click, Escape, trigger re-click;
      `aria-haspopup`/`aria-expanded` flip correctly; trigger-menu paired
      via `aria-controls`/id (source's dangling `aria-labelledby` bug NOT
      reproduced)
- [ ] No mobile-specific behavior (no media queries in the source); no
      images at all in the demo (no avatar — simpler than Identity)
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/assist`
