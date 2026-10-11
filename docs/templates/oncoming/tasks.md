# Oncoming — implementation tasks

Recreation of ColorLib "Coming Soon V11" (source slug `comingsoon_11` — one
full-viewport screen behind a fixed, full-screen cross-fading slideshow of FOUR
`1900×900` WINTER photographs on an un-backdropped layer, covered by ONE
`rgba(0,0,0,0.5)` scrim and NO gradient wash; the content layer is itself the
layout — `display:flex; flex-direction:column; align-items:center;
justify-content:space-between` at `min-height:100vh` — so three bands land on the
top, middle and bottom of the viewport: a top bar (`padding:22px 80px 0 80px`,
side padding 15px at ≤576px, NO bottom padding) carrying a white uppercase
wordmark mark left and a 140×50 WHITE 25px-radius "Sign Up" pill right with an
18px `Lato-Regular` UPPERCASE `#555` label hovering to a SOLID `#555555` fill;
a centred hero block (`padding:50px 15px 120px`) holding a weight-100
`Lato-Hairline` **72px** UPPERCASE white "Coming Soon" heading and below it a
horizontal countdown capped at `370px` (170px at ≤576px) of FOUR
`min-width:165px` units — each a **120px `PlayfairDisplay-Italic` UPPERCASE**
white numeral (`padding-bottom:37px`) over an 18px italic white abbreviated
label (Days / Hr / Min / Sec, `padding-right:20px`) — separated by three 120px
italic-serif white COLONS (the middle hidden at ≤992px, the outer two at
≤576px); and a bottom row (`padding-bottom:35px`) of THREE 36×36 CIRCULAR social
buttons (`1px solid #fff`, `border-radius:50%`, transparent fill, 18px white
glyph, hover inverts to a solid white disc with a `#555` glyph) — Facebook,
Twitter, YouTube). There is NO e-mail form, NO navbar, NO footer band and NO
scrolling section.
Spec: `openspec/specs/template-oncoming/spec.md`. New name: **oncoming** (never
reuse the source slug `comingsoon_11`, the demo title "Coming Soon 11", its
`bg01.jpg`…`bg04.jpg` photos, its "WINTER" wordmark image/string, its
"Sign Up" / "Coming Soon" / "Days" / "Hr" / "Min" / "Sec" strings, or its
inlined fa SVG paths, in app files).
Design notes: `docs/templates/oncoming/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/oncoming`
- [ ] Rename package to `@free-react-templates/oncoming`; set
      `"homepage": "https://oncoming.free.componentdock.com"`
- [ ] `public/CNAME` = `oncoming.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/oncoming`
      (`grep -c "free-react-templates/oncoming" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` in `index.html`: **Lato 100 (Hairline) + 400** and
      **Playfair Display 400 italic** (the source faces are Lato-Hairline,
      Lato-Regular, PlayfairDisplay-Italic); no icon font — socials come from
      `lucide-react`
- [ ] `@theme` tokens in `src/index.css`: scrim `rgba(0,0,0,0.5)`; white
      text/glyphs; pill `#fff` fill / `#555` uppercase label / `#555555` hover
      fill + white hover label; social circle `1px #fff` border / transparent
      fill / `#fff` hover fill + `#555` hover glyph; radii 25px (pill), 50%
      (social circles), 0px elsewhere; transitions `.4s` (all),
      `1000ms` (opacity), `7000ms` interval, `1000ms` tick. NO brand accent
      colour, NO gradient token, NO slideshow backdrop colour token

## Sections (component order in `App.tsx`)

- [ ] `ComingSoon.tsx` (page shell) — a fixed `z-index:0` full-screen
      `Slideshow` layer with **no** `bg-black` fill behind a content layer
      `min-h-screen w-full relative z-1 flex flex-col items-center
      justify-between` carrying ONE overlay (`bg-black/50`, NO gradient) and then
      `TopBar` → `Hero` → `SocialRow` → `Attribution`; NO navbar, NO footer
      band, NO form, NO modal
- [ ] `Slideshow.tsx` — fixed inset-0 background with FOUR cover photos
      (`https://picsum.photos/seed/oncoming-bg1/1900/900` … `...-bg4/1900/900`);
      first shown, rest hidden; cross-fade over `1000ms` every `7000ms` wrapping
      all four; frozen on the first photo when `prefers-reduced-motion: reduce`;
      `clearInterval` on unmount
- [ ] `TopBar.tsx` — full-width wrapping `justify-between items-center` row with
      `pt-[22px] pl-[80px] pr-[80px] pb-0` (≤576px `px-[15px]`; NO bottom
      padding): left the app's OWN white uppercase wordmark mark (text or inline
      SVG with wide tracking, `flex-grow` container, `my-[10px] mr-[30px]`; the
      source 119×22 "WINTER" PNG and string are never copied); right a single
      pill CTA
- [ ] `SignUpButton.tsx` — `min-w-[140px] h-[50px] px-[15px] bg-white
      rounded-[25px]`, Lato 400 18px/1.2 `#555` UPPERCASE label,
      `transition-all duration-[400ms]`, hover `bg-[#555555] text-white`
      (SOLID dark fill, not translucent)
- [ ] `Hero.tsx` — `flex flex-col items-center justify-center pt-[50px]
      pb-[120px] px-[15px]` holding the heading and the countdown row
- [ ] `Heading.tsx` — `h3` in Lato **100 (Hairline)** 72px/1.1 white UPPERCASE
      centred, `pb-[35px]`, `text-[55px]` at ≤576px, no `letter-spacing`
- [ ] `Countdown.tsx` — wrapping `flex justify-center` row,
      `max-w-[370px]` at ≤992px and `max-w-[170px]` at ≤576px; FOUR
      `flex flex-col items-center min-w-[165px] mb-[30px]` units in the order
      days → hours → minutes → seconds, each a Playfair Display **Italic 120px**/1
      white numeral (`pb-[37px]`) over an 18px italic white label
      ("Days" / "Hr" / "Min" / "Sec") with `pr-[20px]`
- [ ] `CountdownSeparator.tsx` — a 120px italic-serif white ":" with
      `pt-[15px]`; the MIDDLE separator `hidden` at ≤992px, the OUTER two
      `hidden` at ≤576px (matches the row wrapping to two then one unit per row)
- [ ] `useCountdown.ts` — target `now + 35 d + 19 h` (the source's configured
      `new Date(0, -1, 35, 19, 0, 0)` is always past, so the fallback runs);
      days written RAW, h/m/s zero-padded; immediate first paint; 1000 ms
      interval cleared on unmount and at zero remaining
- [ ] `SocialRow.tsx` — `flex flex-wrap justify-center items-center pb-[35px]`
      with THREE `size-9` (36×36) anchors, `border border-white rounded-full`,
      transparent fill, 18px white lucide glyphs (Facebook, Twitter, YouTube),
      `transition-all duration-[400ms]`, `mx-[3px] mb-[5px]`, hover
      `bg-white text-[#555]`
- [ ] `Attribution.tsx` — Lato 12–13px centred line linking
      `https://www.componentdock.com/` branded "Component Dock" (the only
      addition vs the reference)

## Do NOT

- [ ] Do NOT add an e-mail form / email well / validation bubble — this slug has
      none (family-unique); the sole CTA is the Sign Up pill
- [ ] Do NOT put `bg-black` on the slideshow layer — the reference layer has no
      background colour, so cross-fades reveal the page body
- [ ] Do NOT raise the scrim to 0.7/0.8 or add a gradient wash — `0.5` only
- [ ] Do NOT set the heading to Lato 300/400 — it is **weight 100** (Hairline)
- [ ] Do NOT shrink the countdown numerals below 120px or let the heading
      outrank them — the clock is the largest type on the page
- [ ] Do NOT replace `justify-between` on the `100vh` column with fixed paddings
      or `mt-auto`
- [ ] Do NOT copy the source's `WINTER` wordmark, its four photos, its fa SVG
      paths, its woff2 files, its `css/style.css` (including the
      `all: revert` guard and the Bootstrap reboot) or its favicon
- [ ] Do NOT reference ColorLib, "Colorlib", "Coming Soon 11", `comingsoon_11`
      or "WINTER" anywhere in `apps/oncoming` (comments included)

## Verification

- [ ] `npm run spec:validate` (openspec) still recognises
      `openspec/specs/template-oncoming/spec.md`
- [ ] `scripts/verify-app.sh oncoming` passes: typecheck + lint + knip + fallow +
      vitest at 100% coverage + build (~2–3 min)
- [ ] Visual check against the reference screenshot
      (`coming-soon-11.jpg`, 1200×972): three bands (top bar / centred hero /
      bottom social row), four-photo cross-fade, 50% scrim, hairline heading,
      120px italic numerals with colons, three white-outlined circles
- [ ] Responsive: ≤992px the countdown caps at 370px (2 units/row, middle colon
      hidden); ≤576px it caps at 170px (1 unit/row, outer colons hidden) and the
      heading drops to 55px; side padding drops to 15px at ≤576px
- [ ] `public/CNAME` = `oncoming.free.componentdock.com`; `homepage` matches;
      lockfile registers the workspace
- [ ] PR description includes: source template (ColorLib Coming Soon V11),
      preview URL (404 → source zip fallback), the design tokens used
      (`rgba(0,0,0,0.5)` scrim, `#fff` pill with `#555555` hover, 36px
      white-outlined circles, Lato 100/400 + Playfair Display 400 italic,
      radii 25px/50%/0px, 120px vs 72px type scale) and what differs
      (new name, picsum placeholders, own wordmark, lucide icons, Component Dock
      attribution line)
