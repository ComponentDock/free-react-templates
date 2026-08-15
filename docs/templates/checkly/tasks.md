# Checkly (ColorLib Checkbox 04) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-checkly`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 04" — fourth of the "Bootstrap Checkboxes
  (20)" series (source: https://colorlib.com/wp/template/checkbox-04/).
  TEMPLATES.md line 734 — mark that line `[x]` when done (single copy).
  NOTE: unlike Checkbox 01–03 (Tickbox/Picks/Ticktag), each item in this
  series is a DIFFERENT variant design — Checkbox 04 is the sports
  tag-pill variant, NOT the Tickbox six-variant list. Do not reuse the
  Tickbox app blindly; verify the live DOM for each new item.
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-04/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-04/` (HTTP 200,
  8.2 KB HTML, verified 2026-08-15). Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-04/css/style.css`
  (~221 KB, fully extracted for tokens). libs: bootstrap 4, jquery, popper,
  font-awesome 4.7 (pill status icons = glyphs `\f1db` circle-thin /
  `\f058` check-circle). Google Font **Poppins** 300–900 (@font-face in
  head). Cross-checked with the TEMPLATES.md screenshot (`checkbox-04.jpg`
  1200×972, browser-viewed 2026-08-15) — all match. Demo brands itself
  "Checkbox #04"; recreation uses the NEW name **Checkly**.
- **Visual design (DOM + CSS tokens + screenshot):** minimal demo page on
  light `#fafafa`. One centered column: black 28px heading "Checkbox #04",
  then a narrow col-md-4 (~350px) mint-teal card (`#7ecfc0`, 4px radius,
  30px padding) titled "Choose your sports" (white 24px, centered) holding
  three white pill-tag labels (bg `rgba(255,255,255,0.9)`, text `#333333`,
  18px, 4px radius, 10px 20px padding, 10px gap):
  1. **Volleyball** — checked (mint check-circle icon `#7ecfc0`)
  2. **Swimming** — unchecked (hollow circle `rgba(0,0,0,0.2)`)
  3. **Surfing** — unchecked (same)
     Icons sit at the RIGHT end of each pill (the CSS uses an absolutely
     positioned `::before` at `right: 50px`; visually the icon renders at
     the right end of the pill — recreate with a flex row: label text left,
     icon right, matching the screenshot). No navbar, no footer, no images —
     just the one `ftco-section`.
- **Structure (1:1, section order):**
  1. `section.ftco-section` (padding 7em 0) → `div.container` (centered,
     max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5
.pb-md-4` "Checkbox #04" (28px, #000, centered, mb 3rem).
  3. `div.row.justify-content-center` → `div.col-md-4` (~350px centered
     column) → `div.wrap.w-100` (mint card) → `div.heading-title.mb-4
.text-center` → `h3` "Choose your sports" (24px #fff centered) →
     `ul.ks-cboxtags.p-0.m-0` (list-style none, padding 20px) → 3 × `li`:
     `<input type="checkbox" id="checkboxOne|Two|Three" [checked]>`
     (absolute, opacity 0; only checkboxOne has `checked`) + `<label
for=...>` white pill; `::before` = status icon (24px, right end,
     unchecked `\f1db` rgba(0,0,0,0.2) → checked `\f058` `#7ecfc0`), 0.3s
     transition, `prefers-reduced-motion` respected.
- **Design tokens (from `css/style.css`):**
  - Brand accent `#7ecfc0` (mint/seafoam) — card bg AND checked icon color.
  - Page bg `#fafafa`; heading `#000` 28px; card title `#fff` 24px; pill bg
    `rgba(255,255,255,0.9)`; pill text `#333333` 18px; unchecked icon
    `rgba(0,0,0,0.2)`.
  - Base: body "Poppins", Arial, sans-serif, 14px, lh 1.8, color gray.
  - Card `.wrap`: padding 30px, border-radius 4px, no shadow (flat).
  - Pills: border-radius 4px, padding 10px 20px, margin-bottom 10px, cursor
    pointer, user-select none, transition all 0.3s.
- **Recreation decisions:** FontAwesome glyphs → lucide-react `Circle`
  (unchecked) / `CircleCheck` (checked; probe the export — `CheckCircle` is
  the older alias, per the lucide-rename pitfall), 24px, colored per state,
  0.3s transition via Tailwind `transition-colors`; Poppins via Google Fonts
  `<link>`; keep the hidden native `<input type="checkbox">` inside the
  label for a11y (click + Space toggle); no external libs. Demo has no
  footer — add a MINIMAL footer with the mandated Component Dock link
  (https://www.componentdock.com/) per repo rules.

## Implementation task outline

1. Copy the simplest existing app → `apps/checkly`; rename package to
   `@free-react-templates/checkly`; run `npm install` at repo root; register
   `injectUiSource()` in `vite.config.ts`; `public/CNAME` =
   `checkly.free.componentdock.com`, `"homepage"` =
   `https://checkly.free.componentdock.com`.
2. `@theme` tokens in `src/index.css`: `#fafafa` page bg, `#7ecfc0` mint
   accent, `rgba(255,255,255,0.9)` pill bg, `#333333` pill text, `#000`
   heading, `#fff` card title, `rgba(0,0,0,0.2)` unchecked icon; Poppins
   (300–900) via Google Fonts in `index.html`.
3. Components (src/components/): `SportPill` (label + hidden checkbox input +
   lucide icon at the pill's right end, props: label, defaultChecked) and
   `Footer` (minimal Component Dock link). Optional: `DemoHeading`.
4. `src/App.tsx` composes: heading row + mint card (title + 3 pills:
   Volleyball checked, Swimming/Surfing unchecked) in one centered section +
   footer; document title "Checkly — Sports Pick List".
5. Tests FIRST (red) per spec scenarios (heading, card anatomy, three pills
   with default states, toggle by click/Space, icon swap + color, a11y name,
   footer link); then implementation; 100% coverage.
6. Verify: `scripts/verify-app.sh checkly`; `npm run spec:validate`.
7. PR: `feat/template-checkly` → squash-merge to main; PR description
   includes source template, preview URL (incl. the /theme/bootstrap/
   sub-path caveat), design tokens, what differs (lucide icons instead of
   FontAwesome, footer added per repo mandate).
