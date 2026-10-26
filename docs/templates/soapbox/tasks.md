# Soapbox — implementation tasks

`apps/soapbox` recreates the ColorLib **Hero V07** event hero (a two-day front-end conference with a live
countdown) under a new name. Read `openspec/specs/template-soapbox/spec.md` first — it carries every measured
number, the token table and the nine prescribed fixes. `docs/templates/soapbox/design-notes.md` carries the DOM
skeleton, the token block and the section-by-section fidelity notes.

Reference: https://preview.colorlib.com/theme/bootstrap/hero-07/ (the slug-only path 404s — the `bootstrap/`
prefix is the only live one). Source: https://colorlib.com/wp/template/hero-07/.

## 0. Scaffold

- [ ] copy the simplest existing app to `apps/soapbox`; rename the package to `@free-react-templates/soapbox`
- [ ] `public/CNAME` = `soapbox.free.componentdock.com`; `"homepage"` = `https://soapbox.free.componentdock.com`
- [ ] register the workspace in `package-lock.json` (lockfile registration is mandatory)
- [ ] load Space Grotesk once in `index.html`:
      `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400..700&display=swap`
- [ ] no ColorLib string, comment or asset anywhere in the app (the wordmark is **soapbox**)

## 1. Tokens

- [ ] `@theme` palette from the spec's Design tokens table: ground `#1b2cf5`, deep `#0d1690`, ink `#0a0f3d`,
      lime `#d7ff3a`, soft `#dfe3ff`, label `#c3c8f0`, the three avatar fills, plus `--font-sans`, `--gutter`,
      `--hero-gap`, `--text-display`, `--text-num`, `--card-pad`
- [ ] arbitrary radii `28` / `22` / `12`; hard shadows `12px 12px 0 #0d1690` (8 px at ≤520) and the panel's
      `0 24px 48px -16px rgba(0,0,0,.5)`
- [ ] body `16px / 1.55`; type scale 136.96 (clamp) / 36.48 (clamp) / 22 / 20 / 18.88 / 18 / 17 / 16 / 15 / 14 /
      12.5 / 11 / 10.5 / 9.5

## 2. Shell + decoration

- [ ] root `min-height:100vh; display:flex; flex-direction:column; overflow:hidden; isolation:isolate;
      background:#1b2cf5`
- [ ] decoration layer `absolute inset-0 -z-10 pointer-events-none` with the two 64 px `rgba(255,255,255,.07)`
      gradients on its `::before`
- [ ] three rings `top-1/2 -translate-y-1/2` at `right:-8vw / 1vw / 11vw`, widths `64vw`/max 900 (1 px white 16 %),
      `46vw`/max 660 (2 px dashed lime 35 %, `spin 60s linear infinite`), `26vw`/max 380 (radial deep glow)
- [ ] at ≤860: ring 1 `120vw` at `-60vw`, ring 2 `90vw` at `-45vw`, both `top:30%`, ring 3 hidden
- [ ] verify `scrollX === 0` at 1440, 390 and 320 (the rings are clipped, not scrolled)

## 3. Header bar (RED first)

- [ ] `1440 × 92.8` bar with an inner `1280` box at `padding: 22px 48px`, `gap: 32`
- [ ] wordmark `197.53 × 30`: 30 px lime diamond + blue cross SVG, `gap: 10`, text `17px/700/.04em` uppercase
- [ ] nav `flex:1; justify-end; gap:24`, link list `gap:28`, link `padding:6px 0`, `16px/500`, **white** text
      (trap 2 — do not "restore" the declared soft colour), lime 2 px underline growing on hover
- [ ] Tickets pill `105 × 48.8`: `padding:10px 20px`, `2px` lime border, radius 999, `17px/700`, white label,
      hover ink-on-lime
- [ ] menu button `display:none` at ≥861; at ≤860 `46 × 46` lime circle at `margin-left:auto` with ink icon
- [ ] `:focus-visible` = 3 px lime at 3 px offset everywhere, **ink** inside the card, **ink** on the menu button

## 4. Hero grid

- [ ] `main { flex:1; display:flex; align-items:center }`; section `1280 × 623.34` at (80, 184.72),
      `grid-template-columns: minmax(0,1.35fr) minmax(0,.65fr)`, `gap: clamp(32px,5vw,80px)`,
      `padding: clamp(24px,4vw,48px) var(--gutter) clamp(40px,6vw,72px)`
- [ ] verify the document is exactly **900** at 1440 and **1020** at 1000 (trap 1)

## 5. Copy column

- [ ] edition pill `247 × 33.69`: `padding:6px 14px`, radius 999, `rgba(255,255,255,.12)`, `14px/500` soft
- [ ] `h1` `136.96 / 117.786 / 2 lines`, `700`, `lh .86`, `ls -.055em`, uppercase, `margin: 18px 0 20px`
- [ ] line 2 is a wrapping flex row at `gap: .18em` with the year as `color: transparent` +
      `-webkit-text-stroke: 2px lime` (1.5 px at ≤520) and `ls -.03em`
- [ ] standfirst `679.67 × 87.75` — **18.88 / 29.264 / 3 lines**, soft, `max-width: 36em`
- [ ] facts `dl` `750.59 × 76.38`: `margin-top:32`, `padding-top:22`, 1 px `rgba(255,255,255,.22)` rule,
      `flex-wrap`, `gap: 16px 40px`; items `179 / 209 / 156`
- [ ] `dt` lime `12.5px/700/.14em` uppercase; `dd` white `18px/600`, `gap:10`
- [ ] avatar cluster: three `30px` circles, `margin-left:-8`, 2 px blue ring, `10.5px/700` ink initials, then
      "24 talks"; the cluster is `aria-hidden`, the count is text

## 6. Countdown card

- [ ] card `361.41 × 355.41` at (950.59, 306.69): `padding: clamp(20px,2.5vw,30px)`, radius 28, lime, ink,
      `box-shadow: 12px 12px 0 deep` (8 px at ≤520), `max-width:520` at ≤1000
- [ ] head: `20px/700/-.02em` title + `Early bird` chip `92 × 27.38` (ink ground, lime `12.5px/700`, 7 px dot
      blinking at 1.4 s)
- [ ] countdown grid `repeat(4,1fr)` — **`grid-cols-[repeat(4,1fr)]`, never `grid-cols-4`** (trap 3), `gap:8`,
      `margin-top:18`; verify the 1440 tracks are `71.72 / 67.98 / 68.00 / 69.70` and the 1200 ones
      `67.98 / 51.5 / 66.7 / 69.7`
- [ ] tile `padding:14px 4px 10px`, radius 16, ink, white number `36.48/700/-.03em` `tabular-nums`, label
      `11px/600/.1em` `#c3c8f0`
- [ ] price line `34.09` at y 486.86: `15px`, `margin-top:18`, `<strong>` 22 px, `<s>` comparison, "from 1 January"
- [ ] CTA `301.41 × 58.34`: `padding:16px 22px`, radius 16, blue, white `17px/700`, label/arrow space-between,
      hover deep + arrow `+4px`
- [ ] secondary link `24.8` at y 607.3: `margin-top:12`, 600, centred, underlined at 3 px offset

## 7. The clock (the design's engine)

- [ ] one `TARGET` ISO string + a `useCountdown(TARGET, { now })` hook with an **injectable clock** so tests never
      assert a real number of days
- [ ] floor to days/hours/minutes/seconds; **2-digit padding everywhere, no leading zero on days** (fix 1)
- [ ] rewrite the `aria-label` only, keep `role="timer"` + `aria-live="off"` + `aria-atomic="true"` (trap 10)
- [ ] at zero: head reads "Doors are open", tiles `00 / 00 / 00 / 00`, ticking stops
- [ ] `visibilitychange → visible` re-renders immediately; the timeout is cleared on unmount

## 8. Menu (≤860)

- [ ] `is-enhanced` gating, panel `position:absolute; top:100%`, `left/right: gutter`, radius 22, ink ground,
      `padding:16`, `gap:12`, `shadow 0 24px 48px -16px rgba(0,0,0,.5)` — measured **791.22 × 312.8 at (34.39, 90)**
- [ ] panel links `20px` at `padding:12px 4px`, no gradient; the Tickets pill centred
- [ ] toggle `aria-expanded` + `aria-label`, swap hamburger/close icons, bar stays **90** tall
- [ ] Escape (refocus the button), outside click, panel link and `matchMedia('(min-width: 861px)')` all close it
- [ ] listeners cleaned up on unmount

## 9. Responsive reshaping

- [ ] ≤1000: one column, card `max-width:520`, document 900 → 1020
- [ ] ≤520: logo 15 px, stroke 1.5 px, facts become a 2-column grid with "When" spanning both, `dd` 16 px,
      shadow 8 px, count `gap:6`, tile `padding:12px 2px 8px` / radius 12, label `9.5px/.06em`
- [ ] re-measure the seams from design-notes §8 if any copy changes (273.98 px headline, 624.69 px facts)

## 10. Footer (added — the reference has none)

- [ ] links `https://www.componentdock.com/` as "Component Dock", `#1b2cf5` ground, `rgba(255,255,255,.22)`
      hairline, `#dfe3ff` text

## 11. Tests (100 % coverage, TDD)

- [ ] counts: one `h1`, one `h2`, 0 `img`, 0 `form`, 1 button, 8 anchors, 3 ids in the reference shape
- [ ] clock: frozen time gives exact tiles; one second later only seconds change; 99 days prints "99" not "099";
      zero flips the head and stops; unmount clears the timeout
- [ ] menu: open/close by click, Escape (focus returns), outside click, crossing 861; `aria-expanded`/`aria-label`
- [ ] structure: the four tiles are `repeat(4,1fr)` and unequal at 1440; the year is a text-stroke span, not an image
- [ ] no `colorlib` / `hero-07` / `frontend/north` string in the app

## 12. Bookkeeping (after the app ships)

- [ ] add the row to `## Bootstrap Heroes (12)` in `TEMPLATES.md` after the last hero row, grammar
      `[colorlib] · ![preview] · [app]`:
      `- [x] **Hero 07** — [colorlib](https://colorlib.com/wp/template/hero-07/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-07.jpg) · [soapbox](https://soapbox.free.componentdock.com)`
- [ ] `npm run readme:status`
- [ ] deploy: `gh workflow run deploy-surge.yml -f app="soapbox"`, then confirm HTTPS 200 + `ssl_verify_result=0`
- [ ] PR body: source template, preview URL, tokens used, what differs (rename, no photography, wired links, day
      padding fix, ink menu-button ring, added footer)
