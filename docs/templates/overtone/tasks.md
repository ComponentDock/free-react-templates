# Overtone — implementation tasks

`apps/overtone` recreates the ColorLib **Hero V06** hero (a product page for over-ear headphones) under a new
name. Read `openspec/specs/template-overtone/spec.md` first — it carries every measured number, the token table
and the nine prescribed fixes. `docs/templates/overtone/design-notes.md` carries the DOM skeleton and the
section-by-section fidelity notes.

Reference: https://preview.colorlib.com/theme/bootstrap/hero-06/ (the slug-only path 404s — the `bootstrap/`
prefix is the only live one). Source: https://colorlib.com/wp/template/hero-06/.

## 0. Scaffold

- [x] copy the simplest existing app to `apps/overtone`; rename the package to `@free-react-templates/overtone`
- [x] `public/CNAME` = `overtone.free.componentdock.com`; `"homepage"` = `https://overtone.free.componentdock.com`
- [x] register the workspace in `package-lock.json` (lockfile registration is mandatory)
- [x] load Sora once in `index.html`:
      `https://fonts.googleapis.com/css2?family=Sora:wght@300..800&display=swap`
- [x] no ColorLib string, comment or asset anywhere in the app

## 1. Tokens

- [x] `@theme` palette from the spec's Design tokens table (17 colour tokens, `--font-sans`, `--gutter`,
      `--text-display`, `--hero-gap`, `--hero-pad`)
- [x] arbitrary radii `28` / `22` and the frame shadow `0 30px 60px -30px rgba(23,23,26,.45)`
- [x] body `15.5px / 1.6`; type scale 52.8 (clamp) / 34 / 18 / 16 / 14.5 / 14 / 13.5 / 12.5 / 12 / 11

## 2. Header bar (RED first)

- [x] `1440 × 70` ink bar, inner `1280 × 70` at (80, 0), `padding: 14px 40px`, `gap: 32`
- [x] two-tone wordmark `143.83` wide: name `20px/700/-.04em`, second word `20px/300` in `#ff8a65`, `margin-left:2`
- [x] four links, `padding: 8px 14px`, radius 8, `14.5px`, `#c9c8c2`; current one `#fff/600`
- [x] nav centred by `margin: 0 auto` (it centres in the **free space**, not the box: x 535.92, 26.9 px right of
      centre — do not "fix" this with `justify-center`)
- [x] tools `90 × 42`: search `42 × 42`, cart `42 × 42` + `18 × 18` radius-9 `#ff8a65` badge at `top:3; right:2`,
      menu button `display:none` at ≥861
- [x] `:focus-visible` inside the bar is `2px #fff` at `3px` offset

## 3. Hero shell

- [x] root `min-height:100vh; flex column`; `main { flex:1; display:flex; align-items:center }`
- [x] section `1280 × 749.64` at (80, 110.17): `padding: 56px 40px 64px`, grid `minmax(0,1.15fr) minmax(0,.85fr)`,
      `gap: 72`, `align-items:center`
- [x] verify the document is exactly **900** at 1440 and that 900 viewport px gives **1421** (trap 1)

## 4. Media column

- [x] frame `648.59 × 518.88`, radius 28, `#1c1d21`, `aspect-ratio: 5/4`, `overflow:hidden`, the one shadow
- [x] `<img>` `object-fit: cover`, `transition: opacity .3s, transform .6s cubic-bezier(.2,.8,.2,1)`
- [x] caption pill `110 × 32.8` at (138, 239.55) with a `16 × 16` dot at (146, 247.94)
- [x] badge strip `612.59 × 63.64` at (138, 658.78): three `197.53 × 63.64` chips, radius 16,
      `rgba(255,255,255,.92)` + `backdrop-filter: blur(8px)`, `18px/700` value over `12.5px` muted label
- [x] at ≤520 the frame is `1:1` / radius 22 and the strip goes `static` with white cards and 16/11.5 px type

## 5. Info column

- [x] eyebrow `13.5px` + ink "New" pill `49 × 23.19` (radius 6, `2px 10px`, white `12px/600`)
- [x] `h1` `52.8px / 55.968 / 2 lines`, weight 600, `lh 1.06`, `ls -.04em`, `margin 14px 0 10px`
- [x] rating `14px` muted, five ★ `67.77` wide in `#b45309` (`letter-spacing:1px`), underlined ink link
- [x] price row `54.39` tall at y 369.66: `$249` `34px/700`, `<s>$299</s>` `18px #6b6b72` with `sr-only` "Was ",
      `Save $50` `85 × 26` `12.5px/700` `#9a3412` on `#fde2d8`
- [x] description `15.5/24.8`, 3 lines at 1440, `max-width: 32em` (never clamps)

## 6. Colour fieldset (the design's engine)

- [x] `fieldset` (`border:0; padding:0; margin-top:24`) + `legend` `14px` "Colour: **Midnight**"
- [x] three `44 × 44` labels, radius 50 %: `::before` disc `inset 5px` (`6px` checked) painting `--sw`,
      `::after` `2px` ring transparent → `#17171a` on `:has(:checked)`
- [x] the radio is `opacity: 0` but covers the full 44 px (hit area 44 × 44)
- [x] `.swatch:has(:focus-visible)` → `2px #e4572e` outline at `3px` offset
- [x] `COLOURS` constant: `{name, sw, src, alt, stock}` × 3 (Midnight `#1c1d21`, Stone `#8b8e94`, Blush `#f2b8c6`)
- [x] on change: caption, legend, stock text, `is-low` (`/only/i`), `--cl-hero06-current` equivalent on the frame,
      `is-swapping` for **180 ms**, then `src` + `alt`, then removal
- [x] reduced motion → synchronous swap

## 7. Stock, buy row, wishlist

- [x] stock line `14px/500 #166534` with an `8 × 8` `#16a34a` dot, `aria-live="polite"`, `is-low` → `#9a3412` +
      `#e4572e` dot
- [x] add-to-cart `340 × 56` (`flex:1; max-width:340`), radius 16, ink, white `16px/600`, hover `#33333a`,
      `:active scale(.98)` — **and wire it** (badge increments; the reference's is inert)
- [x] wishlist `56 × 56`, radius 16, `#fff`, `1.5px #dfddd6` (computes 1 px), `aria-pressed` → `#c2410c` colour,
      border and heart fill, plus a 2 px ring so the state is not colour-only

## 8. Perks

- [x] `ul` with `margin-top:24 !important; padding-top:20 !important`, `border-top:1px #dfddd6`,
      `13.5px` muted, `gap: 8px 22px`, `flex-wrap: wrap`
- [x] three icon+text items; **one row** at content ≥ 463.03, **two** at ≤ 462.78
- [x] keep the U+2212 in "−35 dB"

## 9. Menu (≤860)

- [x] `is-enhanced` gating, `is-open` panel `position:absolute; top:100%`, `padding: 8px 20.8 18`, ink
- [x] links `padding: 14px 4px`, `17px`, `border-bottom: 1px solid rgba(255,255,255,.1)`, no current treatment
- [x] toggle `aria-expanded` + `aria-label`, swap the two icons
- [x] Escape (refocus the button), outside click, link click and `matchMedia('(min-width: 861px)')` all close it
- [x] listeners cleaned up on unmount

## 10. Footer (added — the reference has none)

- [x] links `https://www.componentdock.com/` as "Component Dock", `#f3f2ee` ground, `#dfddd6` hairline, `13.5px`

## 11. Tests (100 % coverage, TDD)

- [x] counts: one `h1`, zero `h2`, zero `form`, 3 radios, 3 buttons, 1 `img`, 8 anchors in the reference shape
- [x] the three colours: image src/alt, caption, legend, stock text, `is-low`, dot colour
- [x] wishlist toggle: `aria-pressed` flips both ways, and the pressed styling is read **after 300 ms**
- [x] menu: open/close via click, Escape (focus returns), outside click, crossing 861
- [x] add-to-cart: badge increments (the fix)
- [x] no `colorlib` / `hero-06` / `fieldnote` string in the app

## 12. Bookkeeping (after the app ships)

- [x] add the row to `## Bootstrap Heroes (12)` in `TEMPLATES.md` after the last hero row, grammar
      `[colorlib] · ![preview] · [app]`:
      `- [x] **Hero 06** — [colorlib](https://colorlib.com/wp/template/hero-06/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-06.jpg) · [overtone](https://overtone.free.componentdock.com)`
- [x] `npm run readme:status`
- [x] deploy: `gh workflow run deploy-surge.yml -f app="overtone"`, then confirm HTTPS 200 + `ssl_verify_result=0`
- [x] PR body: source template, preview URL, tokens used, what differs (rename, picsum photos, wired cart, 320 px
      header fix, added footer)
