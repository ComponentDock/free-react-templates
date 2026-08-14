# Toggle (ColorLib Bootstrap Buttons 02) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Toggle** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 02"). Implementation
> ships on `feat/template-toggle` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 02" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-02/). TEMPLATES.md
  row: line 663 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-02`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-02/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-02/` (HTTP 200,
  26KB HTML, `<title>Button 07</title>`; the nested `/bb/` subpath was
  discovered by scraping the ColorLib template page, which links to it —
  same pattern as Palette/Bootstrap Buttons 01). Stylesheets:
  `css/style.css` (231KB — Bootstrap 4 + ftco custom button rules; the
  token source), `css/ionicons.min.css` (glyph icons). Screenshot
  (`bootstrap-buttons-02.jpg`, 1200×972) browser-verified 2026-08-14:
  white page, "Button #07" heading, coral/teal/gold/mauve solid + outline
  button rows, icon buttons, dropdown buttons, segmented groups, colored
  checkboxes/radios, a blue ON toggle and red OFF toggle. No navbar, no
  hero, no images, no footer.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-02/`. Mention this in the PR
  description.
- **⚠ Title quirk:** the page heading is **"Button #07"** even though the
  slug is `bootstrap-buttons-02` (ColorLib's button-page numbering is not
  1:1 with slug numbers). Fidelity mandate: render exactly "Button #07".
- **⚠ Not a classic page template:** there is NO navbar, NO hero, NO
  imagery, NO footer in the original — the entire page is a centered
  single-column button showcase. Fidelity = the section order, the exact
  button variants/labels, the palette, and the paddings/radii. The only
  added element is the mandatory Component Dock attribution footer.
- **Structure observed (1:1):** `section.ftco-section#buttons` (padding
  `7em 0`) → `div.container` → `div.col-md-12` blocks. Order: title
  `h2.heading-section` **"Button #07"** (32px `#212529`, Poppins 400, NO
  `<small>`) → **5 unlabeled rows**: (a) 4 solid `btn-block` (`Default`
  primary, `Round` secondary pill, `Default` tertiary, `Default`
  quarternary), (b) 4 solid icon buttons (`Like`/`Delete`/`Send`/
  `Download` with white 45px `.icon` badge), (c) same 4 round (`btn-round`
  - `icon.icon-round`), (d) 4 `btn-outline-*` `Default`, (e) 4 `btn-round
btn-outline` `Default` → **6 labeled blocks** (each `h2.heading-section`
  - 16px `<small>`): Dropdown Buttons (4 dropdowns) → Group Buttons (2
    groups) → Checkboxes (5) → Radios Buttons (5) → Slide Button (2 iOS
    toggles) → Social Buttons (5 brands × 7 variants) → **trailing unlabeled
    row**: Watch Photos / Download / [download icon] / Add Comment /
    [chatboxes icon] / Like (badge `2`) / Create Account (solid primary
    pill). No footer — add Component Dock.
- **Design tokens (from `style.css` — ftco overrides the Bootstrap
  defaults):** page `#fff`; body text `#212529`; primary `#ec8f6a` (hover
  `#e66d3d`); secondary `#8bbabb` (hover `#6ba7a8`); tertiary `#e2c275`
  (hover `#d9af4b`); quarternary `#b96b9f` (hover `#a44d87`); dark
  `#343a40` (Disabled checkbox/radio); social fb `#4f69a2` / twitter
  `#69b6f0` / linkedin `#2884ba` / pinterest `#d03940` / dribbble
  `#ea6294`; toggle ON knob `#03A9F4` + track `#ebf7fc`, OFF knob
  `#F44336` + track `#fcebeb`; `.btn` base (ftco) padding `12px 16px`,
  font-size `14px`, weight `500`, radius `5px`, shadow `0px 10px 20px -6px
rgba(0,0,0,0.12)`, `overflow: hidden`, `transition all .3s ease`;
  `.btn-sm` `5px 20px`/12px; `.btn-lg` `17px 24px`/16px; `.btn-round`
  radius **40px**; `.btn-block` width 100%; `.btn-outline` 1px
  `rgba(0,0,0,0.1)` border + `#000` text (hover `rgba(0,0,0,0.5)`);
  `.btn-link` borderless `#000`; icon badge `.btn .icon` = white 45px
  right-aligned block, glyph 20px in button color, `icon-round` = 50%;
  badge `.btn small` bg `#e6e6e6` padding `2px 8px` color
  `rgba(0,0,0,0.3)`; dropdown menu white/borderless/shadow `0px 10px 34px
-20px rgba(0,0,0,0.41)`, items 13px `rgba(0,0,0,0.7)` hover
  `rgba(0,0,0,0.05)`; font **Poppins** (`"Poppins", Arial, sans-serif`,
  body 15px/1.8, headings 400 weight).
- **Design approach:** flat white kit page — pure typography + button
  variants. Every showcase row/block is a heading + buttons; spacing rhythm
  from the reference's `mb-2`/`mb-3`/`mb-4` gaps and `7em 0` section
  padding (scale down on mobile). The brand identity is the custom ftco
  4-color palette (NOT the Bootstrap defaults — the ftco overrides replace
  them).
- **Icons:** original uses Ionicons glyphs (heart/trash/paper-plane/cloud-
  download/images/chatboxes + brand logos). Implement with `lucide-react`
  (Heart, Trash2, Send, Download, Images, MessageSquare), but the FIVE
  BRAND glyphs (Facebook/Twitter/LinkedIn/Pinterest/Dribbble) are NOT in
  lucide-react — use inline SVG (simple-icons paths) per the
  colorlib-template-replication skill.
- **Micro-interactions to keep:** icon-button label slides left on hover
  (`span` margin-left `-20px` → `-10px`, 0.3s ease); outline buttons fill
  with their palette color on hover; dropdown close on outside click /
  Escape; toggles flip knob + track colors.
- **Toggle semantics:** the source CSS has inverted checkbox logic
  (`#button-1` shows "ON" while unchecked; `#button-10` checked = red OFF).
  Recreate the RENDERED states with standard semantics: checked = ON (blue
  knob left + white "ON", track `#ebf7fc`), unchecked = OFF (red knob
  right, track `#fcebeb`). Toggle A renders ON (label "Toggle is on");
  Toggle B renders OFF (label "Toggle is Off").
- **Copy:** keep the exact reference labels ("Button #07", "Default",
  "Round", "Like/Delete/Send/Download", "Dropdown button", "Action /
  Another action / Something else here", "Button 1 / Outline Button /
  Button 2", "Primary/Success/Danger/Warning/Disabled", "Toggle is on" /
  "Toggle is Off", "Share - 8.2k", "Connect with Twitter", "Connect with
  Linkedin", "Pin it - 1k", "Find us on Dribbble", "Watch Photos",
  "Download", "Add Comment", "Like 2", "Create Account").

## Implementation tasks

1. **Scaffold** — `apps/toggle` from the simplest existing app; rename
   package to `@free-react-templates/toggle`; register in root
   package.json workspaces + `npm install --package-lock-only`; set
   `public/CNAME` = `toggle.free.componentdock.com` and `"homepage"` =
   `https://toggle.free.componentdock.com`.
2. **Theme tokens** (`src/index.css` `@theme`) — primary `#ec8f6a`,
   secondary `#8bbabb`, tertiary `#e2c275`, quarternary `#b96b9f`, dark
   `#343a40`; social `#4f69a2` `#69b6f0` `#2884ba` `#d03940` `#ea6294`;
   toggle `#03A9F4` `#F44336` `#ebf7fc` `#fcebeb`; page `#fff`, text
   `#212529`; pill radius 40px. Poppins Google Fonts `<link>` in
   `index.html`.
3. **App shell** — white single-column page; `section` with `7em 0`
   padding (responsive scale-down); heading "Button #07" + blocks.
4. **Reusable Button pieces** — use `Button`/`ButtonLink`/`cn` from
   `packages/ui`; per-color solid/outline/round variants; icon badge
   (45px white circle) with lucide icon; `btn-block` full-width; badge
   (`small`) styling for the "2" count.
5. **Top showcase rows** — (a) 4 solid block buttons (Default/Round/
   Default/Default), (b) solid icon row (Like/Delete/Send/Download), (c)
   round icon row, (d) 4 palette outlines, (e) 4 round-generic outlines.
6. **Dropdown Buttons** — 4 dropdowns (React state: one open at a time or
   independent; `aria-haspopup`/`aria-expanded`, `role="menu"`/`menuitem`;
   close on outside click + Escape).
7. **Group Buttons** — 2 segmented groups of 3 joined buttons (flush
   borders).
8. **Checkboxes** — 5 custom rows (hidden input + styled span/glyph,
   palette-colored check when checked; all checked; Disabled muted +
   non-interactive).
9. **Radios Buttons** — 5 custom rows (18px ring + 12px dot in palette
   color; Primary–Warning checked; Disabled unchecked + muted).
10. **Slide Button** — 2 controlled iOS toggles: checked = ON (blue knob +
    white "ON", `#ebf7fc` track), unchecked = OFF (red knob, `#fcebeb`
    track); labels "Toggle is on" / "Toggle is Off".
11. **Social Buttons** — 5 brand rows × 7 variants (4 icon-only: solid,
    round, outline, outline-round; 3 labeled: solid, outline, link) with
    inline SVG brand glyphs; exact labels/counts per design notes.
12. **Trailing action row** — Watch Photos / Download ×2 / Add Comment /
    chatboxes / Like + "2" badge / Create Account (solid primary pill).
13. **Footer** — minimal Component Dock attribution linking
    `https://www.componentdock.com/`.
14. **Tests (TDD, 100% coverage)** — structure order, heading text
    ("Button #07"), every button label/variant per block, dropdown
    open/close + ARIA, checkbox/radio states, toggle ON/OFF interaction,
    social rows, footer link. jsdom: desktop/mobile duplication is not an
    issue here (no nav); remember direct-text-node assertions
    (`getNodeText`) for labels inside `<span>`.
15. **Gate + ship** — `scripts/verify-app.sh toggle`, PR
    `feat/template-toggle`, squash-merge immediately, bookkeeping: TEMPLATES.md
    line 663 `[~]` → `[x]` + `https://toggle.free.componentdock.com` +
    `npm run readme:status`.
