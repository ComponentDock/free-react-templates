# Ticktag (ColorLib Checkbox 03) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-ticktag`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 03" — third of the "Bootstrap Checkboxes
  (20)" series (source: https://colorlib.com/wp/template/checkbox-03/).
  TEMPLATES.md line 733 — mark that line `[x]` when done (single copy).
  IMPORTANT: Checkbox 01 (Tickbox) and 02 (Picks) use a DIFFERENT visual
  (`label.checkbox-wrap` colored square list); Checkbox 03 is a `ul.ks-cboxtags`
  pill/tag chip list — build it as its own app, do NOT reuse Tickbox.
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-03/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-03/` (HTTP 200,
  7.9 KB HTML). Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-03/css/style.css`
  (~221 KB, fully extracted for tokens). libs: bootstrap 4, jquery, popper,
  font-awesome 4.7 (chip icons = glyphs `\f067` plus / `\f00c` check).
  Google Font **Poppins** 300–900 (cf-fonts @font-face in head).
  Cross-checked with the TEMPLATES.md screenshot (`checkbox-03.jpg`
  1200×972, browser-viewed) — all match. Demo brands itself "Checkbox #03";
  recreation uses the NEW name **Ticktag**.
- **Visual design (DOM + CSS tokens + screenshot):** minimal demo page on
  white. One centered column: black 28px heading "Checkbox #03", then a
  col-md-5 (~475px) centered area with an inline flow of two pill-shaped
  checkbox chips — **"Confirm Order One"** and **"Confirm Order Two"**.
  Unchecked chip = white pill, 1px light-gray border, gray text `#adadad`,
  small **plus** icon on the left; checked chip = warm amber **#fec771** pill
  (border fills in), white text, **check** icon rotating in (−360deg). The
  screenshot shows chip 1 unchecked + chip 2 checked; the LIVE demo DOM has
  BOTH inputs unchecked by default — start both unchecked; toggling flips a
  chip to the amber checked state. No navbar, no footer — just the one
  `ftco-section`.
- **Structure (1:1, section order):**
  1. `section.ftco-section` (padding 7em 0) → `div.container` (centered,
     max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5
.pb-md-4` "Checkbox #03" (28px, #000, centered, mb 3rem).
  3. `div.row.justify-content-center` → `div.col-md-5` (~475px centered
     column) → `ul.ks-cboxtags` (list-style none, padding 20px) → 2 × `li`
     (display inline): `<input type="checkbox" id="checkboxOne|Two">`
     (absolute, opacity 0) + `<label for="checkboxOne|Two">Confirm Order
One|Two</label>` (the `:checked + label` sibling selector drives all
     chip visuals).
- **Design tokens (from `css/style.css`):**
  - Checked chip (`:checked + label`): border/bg **#fec771**, color **#fff**
    — brand accent **#fec771** (warm amber/gold).
  - Unchecked chip (`label`): bg **rgba(255,255,255,0.9)**, border **1px
    solid rgba(139,139,139,0.3)**, color **#adadad**, radius **25px**, padding
    **8px 12px**, margin **3px 0**, font-weight 400, cursor pointer,
    user-select none, transition **all .2s**; white-space nowrap.
  - Chip icon (`label::before`): 12px, padding **2px 6px 2px 2px**, `\f067`
    plus → `\f00c` check, rotate(-360deg), transition **transform .3s**.
  - `ul.ks-cboxtags` padding **20px**; `li` inline; input absolute + opacity 0.
  - Base: body "Poppins", Arial, sans-serif, 14px, lh 1.8, color gray, bg
    **#fff**; `.ftco-section` 7em vertical padding; `.heading-section` 28px
    `#000`; container max-width 1140px.
- **Recreation decisions:** FontAwesome glyphs → lucide-react `Plus` / `Check`
  (~12px; the check rotates −360°→0 over 0.3s); Poppins via Google Fonts
  `<link>`; keep the hidden native `<input type="checkbox">` + label
  `for`/`id` pairing for a11y (click + Space toggle; screen-reader name =
  label text); no external libs. Both chips start unchecked (matches the live
  DOM). Demo has no footer — add a MINIMAL footer with the mandated Component
  Dock link (https://www.componentdock.com/) per repo rules.

## Implementation task outline

1. Copy the simplest existing app → `apps/ticktag`; rename package to
   `@free-react-templates/ticktag`; run `npm install` at repo root; register
   `injectUiSource()` in `vite.config.ts`; `public/CNAME` =
   `ticktag.free.componentdock.com`, `"homepage"` =
   `https://ticktag.free.componentdock.com`.
2. `@theme` tokens in `src/index.css`: brand accent `#fec771`, chip neutrals
   above, page bg `#fff`; Poppins (300–900) via Google Fonts in `index.html`.
3. Components (src/components/): `TagCheckbox` (label chip + hidden input +
   lucide Plus/Check icon, props: label, id, defaultChecked?) and `Footer`
   (minimal Component Dock link). Optional: `DemoHeading`.
4. `src/App.tsx` composes: heading row + the two chips in one centered
   section + footer; document title "Ticktag — Checkbox UI Template".
5. Tests FIRST (red) per spec scenarios (two chips present, unchecked/checked
   visuals, toggle by click/Space, a11y name, footer link); then
   implementation; 100% coverage.
6. Verify: `scripts/verify-app.sh ticktag`; `npm run spec:validate`.
7. PR: `feat/template-ticktag` → squash-merge to main; PR description
   includes source template, preview URL (incl. the /theme/bootstrap/
   sub-path caveat), design tokens, what differs (lucide icons instead of
   FontAwesome, both chips start unchecked per live DOM, footer added per
   repo mandate).
