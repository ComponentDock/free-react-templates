# Soluna (ColorLib Checkbox 08) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-soluna`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 08" — eighth of the "Bootstrap Checkboxes
  (20)" series (source: https://colorlib.com/wp/template/checkbox-08/).
  TEMPLATES.md line 738 — mark that line `[x]` when done (single row, no
  duplicates). NOTE: each item in this series is a DIFFERENT variant design —
  Checkbox 08 is the DAY/NIGHT SUN-MOON switch variant, NOT the Toggly pink
  switch variant, NOT the Tickwell notification-filter pill variant, NOT the
  Checkly mint sports-card variant. Do not reuse the Toggly/Switchly app
  blindly; verify the live DOM for each new item.
- **Sibling mapping:** Checkbox 01→Tickbox, 02→Picks, 03→Ticktag, 04→Checkly,
  05→Tickwell, 06→Toggly, 07→Switchly. Checkbox 08 → **Soluna** (sol + luna).
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-08/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-08/` (HTTP 200,
  8.2 KB HTML, verified 2026-08-15). Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-08/css/style.css`
  (~222 KB, fully extracted for tokens). libs: bootstrap 4, jquery, popper,
  font-awesome 4.7 (**USED on this page** — the sun/moon glyphs `\f185`
  fa-sun-o / `\f186` fa-moon-o are font-awesome icons). Google Font
  **Poppins** 300–500 (@font-face in head). Cross-checked with the
  TEMPLATES.md screenshot (`checkbox-08.jpg` 1200×972, browser-viewed
  2026-08-15) — all match. Demo brands itself "Checkbox #08"; recreation uses
  the NEW name **Soluna**.
- **Visual design (DOM + CSS tokens + screenshot):** minimal demo page on
  **white `#fff`** (NOTE: body is `#fff` here — NOT `#fafafa` like the
  checkbox-06/Toggly sibling). Centered black 28px heading "Checkbox #08",
  then centered 18px sub-heading "Day & Night Switch Toggle"
  (`rgba(0,0,0,0.5)`), then a narrow col-md-4 (~350px) centered column with
  TWO stacked toggle switches, each centered in its own full-width flex row:
  1. `#cbx` — UNCHECKED: `#e6e6e6` track, white 24px circular knob at LEFT
     with a BLACK circular MOON glyph inside.
  2. `#cbx2` — CHECKED (live DOM carries `checked`): pale gold `#f6d379`
     track, vivid gold `#f1bc31` knob slid 31px right with a dark SUN glyph.
     The screenshot confirms: white page, black heading, gray sub-label, top
     switch OFF (light-gray track, dark knob with small light circle),
     bottom switch ON (gold knob slid right with small dark circle). No
     navbar, no footer, no images.
- **Structure (1:1, section order):**
  1. `section.ftco-section` (padding 7em 0) → `div.container` (centered,
     max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5
.pb-md-4` "Checkbox #08" (28px, #000, centered, mb 3rem).
  3. `div.row.justify-content-center` → `div.col-md-4.text-center` (~350px
     centered column) → `h5.heading-section` → `<small>Day & Night Switch
Toggle</small>` (18px, `rgba(0,0,0,0.5)`).
  4. 2 × `div.w-100.d-flex.justify-content-center` → `div.checkbox` →
     `<input type="checkbox">` (`style="display:none"`) + `<label
class="toggle" for="cbx"><span></span></label>`: `#cbx` unchecked,
     `#cbx2` checked (source markup `style="display:none"/ checked` has a
     stray `/` — the parser ignores it; `checked` wins).
- **Design tokens (from `css/style.css`):**
  - Brand accent `#f1bc31` (vivid gold) — CHECKED knob background AND the
    page link color (`a { color: #f1bc31 }`).
  - CHECKED track `#f6d379` (pale gold); UNCHECKED track `#e6e6e6`; knob
    white; page bg `#fff`; heading `#000` 28px; sub-heading
    `rgba(0,0,0,0.5)` 18px; body copy gray, "Poppins", Arial, sans-serif,
    14px, lh 1.8.
  - Toggle anatomy (BIGGER than Toggly's 34×20): wrapper 50×30px relative;
    track 50×22px (top/left 3px), radius 30px (pill), `#e6e6e6`,
    `padding: 2px 8px`, `text-align: right`, `transition: background .2s
ease`; knob 24×24px white circle (radius 50%), shadow `0 3px 8px
rgba(0,0,0,0.2)`, `transition: all .2s ease`; glyph (`span:before`)
    font-awesome moon `\f186`, 24×24 black circle, white glyph, radius 50%.
  - CHECKED: track `#f6d379` + `text-align: left`; knob `#f1bc31` +
    `translateX(31px)` with `transition: all .2s
cubic-bezier(.8,.4,.3,1.25), background .15s ease`; knob shadow `0 3px 8px
rgba(241,188,49,.7)`; glyph → sun `\f185`, background `#f1bc31`, color
    `#000`, `transition: all .4s ease`.
  - **NO halo puff** in this variant (unlike Toggly): `span:before` IS the
    sun/moon glyph (24×24, no scale animation).
- **Recreation decisions:** pure CSS toggle → React state (two `checked`
  states: false / true); replace font-awesome glyphs with lucide-react
  `Moon` / `Sun` icons (≈14px inside the 24px knob; the reference renders
  the glyph at font-size 10px); Poppins via Google Fonts `<link>`; keep the
  hidden native `<input type="checkbox">` inside the label for a11y — BUT
  the source labels have NO text, so add `aria-label` (e.g. "Toggle 1" /
  "Toggle 2") + a focus-visible ring (repo accessibility convention,
  documented deviation); timings via Tailwind `transition-*`/`ease-[cubic-
bezier(...)]`; honor `prefers-reduced-motion` (state flips instantly,
  animations suppressed). Demo has no footer — add a MINIMAL footer with the
  mandated Component Dock link (https://www.componentdock.com/) per repo
  rules.

## Implementation task outline

1. Copy the simplest existing app → `apps/soluna`; rename package to
   `@free-react-templates/soluna`; run `npm install` at repo root; register
   `injectUiSource()` in `vite.config.ts`; `public/CNAME` =
   `soluna.free.componentdock.com`, `"homepage"` =
   `https://soluna.free.componentdock.com`.
2. `@theme` tokens in `src/index.css`: `#fff` page bg, `#f1bc31` gold accent
   (checked knob + link), `#f6d379` checked track, `#e6e6e6` unchecked
   track, `#000` heading + glyph circle, `rgba(0,0,0,0.5)` sub-heading;
   radii 30px (pill track) / 50% (knob); Poppins font stack.
3. `src/App.tsx`: single `DemoSection` — centered `h2` "Checkbox #08" (28px,
   `#000`) + `h5`/small "Day & Night Switch Toggle" (18px muted) +
   `ToggleList` inside a `max-w-[350px] mx-auto` column; section
   `py-[112px]`.
4. `src/components/ToggleSwitch.tsx`: props `{ id, label, defaultChecked }`;
   data = `[{ id: 'toggle-1', defaultChecked: false }, { id: 'toggle-2',
defaultChecked: true }]`; each switch = `<label>` wrapping a visually
   hidden real `<input type="checkbox">` (`sr-only` or `display:none` per
   reference) + the visual track/knob: track `w-[50px] h-[22px] rounded-full`
   (`#e6e6e6` ↔ `#f6d379`) with knob `w-6 h-6 rounded-full bg-white`
   absolutely positioned, `translate-x-[31px]` when checked, shadow per
   state; the knob contains a lucide icon that swaps `Moon` ↔ `Sun` on
   checked (icon ~14px, `text-black` on white knob unchecked; `text-black`
   on gold knob checked — reference colors: glyph circle `#000` w/ white
   glyph unchecked, `#f1bc31` w/ black glyph checked; simplest faithful
   approach: moon icon dark-on-white when off, sun icon black-on-gold when
   on); `aria-label` on the input; focus-visible ring;
   `prefers-reduced-motion` respected.
5. Minimal footer with Component Dock link (`packages/ui` Button/ButtonLink +
   `cn()` used somewhere — knip gate).
6. Tests (100% coverage): heading + sub-heading render, default states
   (toggle 1 unchecked → gray track + white knob left with moon icon; toggle
   2 checked → gold track + gold knob right with sun icon), click toggles
   (colors + knob slide + icon swap), toggle back, keyboard (Space) toggle,
   aria-label, responsive column, footer link.
7. Gate: `scripts/verify-app.sh soluna`; PR description with source (ColorLib
   Checkbox 08), preview URL, tokens, diffs; mark TEMPLATES.md line 738
   `[x]` + surge URL + `npm run readme:status`.
