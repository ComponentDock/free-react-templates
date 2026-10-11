# Forthcoming — implementation tasks

Recreation of ColorLib "Coming Soon V08" (source slug `comingsoon_08` — one
full-viewport dark green leaf photograph under a TWO-layer purple treatment: a
`#aa076b` (bottom) → `#61045f` (top) gradient at 90% opacity plus a
`rgba(0,0,0,0.2)` black scrim on top of it; centred in a 790px column: a 60px
white gift-card glyph, an UPPERCASE 48px Poppins-Bold "Coming Soon"-equivalent
heading, a 25px Playfair-Display serif subtitle, a thin
`2px rgba(255,255,255,0.35)`-bordered SQUARE box holding the clock as four 100px
units joined by Poppins-Light 70px colons — `35 : 17 : 59 : 57` — with italic
Playfair labels ("Days", "Hours", "Minutes", "Seconds"), and one centred row of a
500px translucent-bordered round pill e-mail field (blue `#4272d7` focus
outline) plus a 160px blue `#4272d7` pill "Notify Me" button).
Spec: `openspec/specs/template-forthcoming/spec.md`. New name: **forthcoming**
(never reuse the source slug `comingsoon_08`, the demo title "Coming Soon 8",
its `bg01.jpg` photo, its zmdi gift-card glyph, its uppercase headline copy or
its credit line, in app files).
Design notes: `docs/templates/forthcoming/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/forthcoming`
- [ ] Rename package to `@free-react-templates/forthcoming`; set
      `"homepage": "https://forthcoming.free.componentdock.com"`
- [ ] `public/CNAME` = `forthcoming.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/forthcoming`
      (`grep -c "free-react-templates/forthcoming" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` in `index.html`: Poppins (300 / 400 / 700) +
      Playfair Display (400 + italic 400) — this slug needs BOTH families, and
      Poppins-Light 300 for the clock digits
- [ ] `@theme` tokens in `src/index.css`: wash stops `#aa076b` (bottom) /
      `#61045f` (top) + solid `#61045f` fallback at `opacity 0.9`; scrim
      `rgba(0,0,0,0.2)`; brand blue `#4272d7`; field border
      `rgba(255,255,255,0.5)`; clock-box border `rgba(255,255,255,0.35)`; white
      type/placeholder; error `#c80000`; radii 25px / 15px / 0px; transitions
      `.4s` (all) and `.4s` (opacity)

## Sections (component order in `App.tsx`)

- [ ] `ComingSoon.tsx` (page shell) — one `min-h-screen w-full flex flex-wrap
      items-center justify-center` wrapper with `padding:55px 15px`, background
      photo (`bg-cover bg-center bg-no-repeat`,
      `https://picsum.photos/seed/forthcoming-bg/1900/900`) plus TWO overlay
      layers: `bg-[linear-gradient(to_top,#aa076b,#61045f)] bg-[#61045f]
      opacity-90` and, above it, `bg-black/20`; inside it ONE `w-[790px]
      max-w-full` column stacking `Glyph` → `Heading` → `Subtitle` →
      `Countdown` → `FormRow` → `Attribution`; NO navbar, NO social row, NO
      wordmark, NO footer band
- [ ] `Glyph.tsx` — centred 60px white lucide `Gift` with 23px below it (the
      source glyph is an inlined zmdi "card_giftcard" SVG outline; never copy it)
- [ ] `Heading.tsx` — `h3` in Poppins-Bold 48px/1.2 white, `uppercase`,
      `text-center`, 22px below ("Coming Soon"-equivalent copy)
- [ ] `Subtitle.tsx` — one centred line in PlayfairDisplay-Regular 25px/1.2
      white with 67px below ("Our website is under construction, follow us for
      update now!"-equivalent)
- [ ] `Countdown.tsx` — wrapping `justify-around items-center` row framed by
      `border-2 border-[rgba(255,255,255,0.35)]` (SQUARE corners) with
      `pt-[42px] pb-[22px] px-[50px]` (≤768px `max-w-[340px] mx-auto px-[15px]`),
      rendering FOUR `CountdownUnit`s + three `Colon`s in the exact order unit,
      colon, unit, colon, unit, colon, unit; `useCountdown.ts` (below)
- [ ] `CountdownUnit.tsx` — `w-[100px] mb-[20px] flex flex-col items-center
      justify-center`; digit Poppins-Light 70px/1 white `pb-[4px]`; label
      PlayfairDisplay-Italic 18px/1 white, sentence case ("Days" / "Hours" /
      "Minutes" / "Seconds" — never uppercased)
- [ ] `Colon.tsx` — a literal `:` in Poppins-Light 70px/1 white with
      `pb-[22px]`; the SECOND of the three carries the ≤768px `hidden` treatment
      (`respon2`) while the first and third always render
- [ ] `useCountdown.ts` — 1 s interval toward `now + 35 days + 18 hours`; days
      written RAW (no padding) while hours/minutes/seconds are zero-padded to
      two digits; first paint immediate; interval cleared on unmount and when the
      remaining time reaches 0
- [ ] `FormRow.tsx` — wrapping `justify-center` row `w-full` with `pt-[70px]`
      holding `Field` and `NotifyButton`, both with `mt-[20px] mx-[5px]`, i.e.
      ONE centred row of two pills, then the attribution
- [ ] `Field.tsx` — well `w-[500px] max-w-[calc(100%-10px)] h-[50px]
      border-2 border-[rgba(255,255,255,0.5)] rounded-[25px] relative
      bg-transparent`; input `h-full w-full bg-transparent px-[38px]` in
      Poppins-Regular 15px/1.2 white with a white "Email Address" placeholder;
      plus the sibling focus outline (`2px solid #4272d7`, `rounded-[25px]`,
      `w/h calc(100%+4px)` offset `-2px`, hidden → visible/opacity-1/scale-1 from
      `scaleX(1.1) scaleY(1.2)` over `.4s`)
- [ ] `NotifyButton.tsx` — `min-w-[160px] h-[50px] px-[20px] bg-[#4272d7]
      rounded-[25px]` Poppins-Regular 15px/1.2 white "Notify Me",
      `transition-all duration-[400ms]`, hover `bg-white` + `text-[#4272d7]`
- [ ] React-state validation (e-mail regex
      `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`) → white bubble `1px solid #c80000`,
      radius 15px, `padding 4px 25px 4px 10px`, `max-w-[70%]`, right 12px,
      vertically centred, Poppins-Regular 14px/1.4 `#c80000`, plus lucide
      `AlertTriangle` 14px `#c80000` at right 18px (this slug's glyph is the
      warning TRIANGLE); hidden until an invalid submit, then visible on field
      hover and always at ≤992px; cleared on focus; invalid submit never
      navigates; valid submit shows a React-state confirmation
- [ ] `Attribution.tsx` — Poppins-Regular 12–13px centred line under the form
      ("More templates at Component Dock") linking
      `https://www.componentdock.com/`

## Tests (Vitest + Testing Library, 100% coverage)

- [ ] Countdown math (target `now + 35 d + 18 h`, 1 s tick advance, days RAW,
      h/m/s zero-padded, immediate first paint, interval cleanup at unmount and
      at zero)
- [ ] Countdown rendering: exactly four units in the right order, THREE colons,
      the four sentence-case italic labels, digit + label + colon typography
      classes, and the second colon's ≤768px hiding class
- [ ] Form validation (empty e-mail, malformed e-mail, valid submit; bubble
      appears and clears on focus; visibility rule; no navigation on invalid;
      confirmation on valid)
- [ ] One-row form geometry: well `w-[500px] max-w-[calc(100%-10px)]`, button
      `min-w-[160px]`, both 50px tall with `rounded-[25px]`, both in the same
      centred row
- [ ] Page shell: two overlay layers present (wash at 90% + `black/20` scrim),
      single 790px column, no navbar/social/footer sections; glyph, heading,
      subtitle, placeholder copy and attribution all render
- [ ] Attribution links Component Dock; no source-brand strings anywhere in
      `apps/forthcoming`
- [ ] `scripts/verify-app.sh forthcoming` passes (typecheck + lint + tests +
      build)

## Notes

- This is a single-screen page: NO navbar, NO social row, NO wordmark, NO
  scrolling sections, NO footer band. The photo + double wash IS the design; the
  only chrome is the glyph, the two copy lines, the boxed clock and the pill
  form.
- **Two overlay layers, not one heavier gradient**: `.overlay1::before` is the
  90%-opacity `to top, #aa076b, #61045f` wash and `.overlay1::after` is a
  `rgba(0,0,0,0.2)` scrim painted on top of it. The screenshot's darkness comes
  from that second layer.
- **The washed wrapper IS padded and centred here** (`p-t-55 p-b-55 p-l-15 p-r-15`
  + `flex flex-wrap justify-center items-center`), unlike the V07 sibling
  `imminent` where the padded `min-h-screen` box is a CHILD of an unpadded
  wrapper.
- Wash direction: `linear-gradient(bottom, #aa076b, #61045f)` = MAGENTA at the
  BOTTOM. Do not write `to bottom, #61045f, #aa076b`.
- The reference photo (`images/bg01.jpg`) is a real dark GREEN leaf macro
  (average `rgb(73,104,87)`) — the purple on screen is entirely the wash + scrim.
  NEVER copy it; use `picsum.photos/seed/forthcoming-bg/1900/900`.
- **The clock lives inside a bordered SQUARE box** (`2px solid
  rgba(255,255,255,0.35)`) and its separator is a full-size `:` at the same
  70px as the digits — not rings, not cards, not a flip clock, not a bar.
- Digits are Poppins-Light 70px (thin), labels are Playfair-Display ITALIC 18px
  in sentence case — neither is uppercase and neither is bold.
- Exactly ONE colon hides on small screens (the second, `.respon2`); the first
  and third stay. Do not hide all separators or none.
- The day value is deliberately NOT zero-padded here (the source writes the raw
  day count) while hours/minutes/seconds are two digits — do not "fix" it.
- **The field and button are 25px-radius PILLS** — this slug's field is the only
  ROUNDED field in the family (its siblings use square/2px corners), and the
  field's fill is transparent, showing the wash through it.
- Both the well and the button carry `.where1{margin:20px 5px 0px 5px}` — that
  5px side margin on each side is the only gap between them; do not add more.
- The focus state is a BLUE `#4272d7` OUTLINE ring that scales in from
  `scaleX(1.1) scaleY(1.2)`, not the blurred green/white box-shadow bloom its
  siblings use.
- The button hover is a full colour inversion (fill → white, label → blue), not
  a gradient fade and not a translucency change.
- The validation bubble is ROUNDED (15px) with 14px/1.4 type and the FontAwesome
  warning triangle `\f071` ⇒ lucide `AlertTriangle` (the V07 sibling uses
  `rounded-none` and 15px type with the same triangle; V06 uses a 16px radius and
  `\f06a` ⇒ `AlertCircle`). Do not swap in `AlertCircle`.
- lucide-react has no `GiftCard` icon in the installed version (3710 icons) —
  `Gift` is the closest match for the source's "card_giftcard" glyph; if a
  card-with-ribbon outline is wanted, `CreditCard` is the fallback, but keep it
  60px white and stroke-only.
- The reference is framework-free (self-contained CSS + one plain-JS file); the
  recreation is Tailwind 4 + React state only. Never copy the source
  `style.css` (including its `all: revert` reboot guard), its class names, its
  woff2 fonts, the FontAwesome subset, the inlined glyph SVG, the photo, or the
  favicon.
- Behaviours to keep (both, re-implemented in React — no jQuery, no framework,
  no CDN): form validation and the per-second span countdown.
- Do not confuse this with its siblings in the same ColorLib series:
  `debut` (V01) is a diagonal split (white form panel + photo panel, 2×2
  countdown); `premiere` (V02) is a dark black-overlay photo SLIDESHOW with
  purple `#846add` pill controls and purple uppercase ring labels;
  `incoming` (V03) is a translucent white card on a light photo with four dark
  rectangular tiles; `eve` (V04) is the purple→violet diagonal gradient with
  four white rounded SQUARE tiles and a subscribe modal; `advent` (V05) is the
  warm pink→coral gradient with a top-pinned countdown BAR and an inline form;
  `airborne` (V06) is the blue→green balloon-photo wash with a dark navy FLIP
  CLOCK and a white newsletter card; `imminent` (V07) is the magenta→indigo
  washed-photo variant with a single centred column, a ONE-ROW square-cornered
  form and four plain white outline rings. Forthcoming (V08) is the
  dark-green-botanical-photo variant with a DOUBLE overlay, an uppercase
  Poppins-Bold heading over a SERIF subtitle, a thin SQUARE-bordered box with
  colon-separated Poppins-Light digits and ITALIC Playfair labels, and a
  two-pill form (rounded 500px field + blue Notify Me button).
