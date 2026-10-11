# Imminent — implementation tasks

Recreation of ColorLib "Coming Soon V07" (source slug `comingsoon_07` — one
full-viewport softly blurred office photograph under a magenta→indigo gradient
wash (`#b224ef` bottom → `#7579ff` top, 90% opacity), a wordmark top-left and
three ROUND WHITE social discs top-right, then a centred 700px column: one 36px
white line with the two "Coming Soon" words bold, a one-row subscribe form (a
490px white square-cornered e-mail field flush against a 170px green `#57b846`
"Subscribe" button) over a small `#e5e5e5` note, and, after a 116px gap, four
155px circles with `1px rgba(255,255,255,0.3)` outlines holding a big white digit
over a small white label — 35 Days · 17 Hours · 59 Minutes · 57 Seconds).
Spec: `openspec/specs/template-imminent/spec.md`. New name: **imminent** (never
reuse the source slug `comingsoon_07`, the demo title "Coming Soon 7", its "UNO."
PNG wordmark, its photo, or its credit line, in app files).
Design notes: `docs/templates/imminent/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/imminent`
- [ ] Rename package to `@free-react-templates/imminent`; set
      `"homepage": "https://imminent.free.componentdock.com"`
- [ ] `public/CNAME` = `imminent.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/imminent`
      (`grep -c "free-react-templates/imminent" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Poppins (400 / 700) in `index.html`
      (NO Aldrich, no monospace face in this slug)
- [ ] `@theme` tokens in `src/index.css`: wash stops `#b224ef` (bottom) /
      `#7579ff` (top) + solid `#7579ff` fallback at `opacity 0.9`, brand green
      `#57b846` + hover gradient `#b224ef → #7579ff`, ring
      `rgba(255,255,255,0.3)`, social icon `#999999`, input fill `#fff`, input
      text `#57b846`, placeholder `#999999`, note `#e5e5e5`, focus bloom
      `rgba(87,184,70,0.6)`, error `#c80000`; radii 50% / 0px; transitions `.4s`
      (all), `.4s` (opacity), `.5s ease-in-out` (bloom)

## Sections (component order in `App.tsx`)

- [ ] `ComingSoon.tsx` (page shell) — one `min-h-screen` washed wrapper with NO
      padding of its own, a background photo (`bg-cover bg-center bg-no-repeat`,
      `https://picsum.photos/seed/imminent-bg/1900/900`) plus an overlay layer
      `bg-[linear-gradient(to_top,#b224ef,#7579ff)] bg-[#7579ff] opacity-90`;
      inside it a SECOND `min-h-screen` box with `pt-[30px] px-[15px] pb-[50px]`
      stacking `TopBar` → `ContentColumn` → `Countdown`; NO navbar, NO footer
      band. Getting this two-box nesting right is the key layout detail
- [ ] `TopBar.tsx` — wrapping `justify-between items-center` row with
      `padding:0 60px 165px 75px` (`pl-[5px] pb-[65px] pr-0` at ≤576px);
      children: `Wordmark` (grows, `mr-[30px]`, `my-[10px]`) then `Socials`
- [ ] `Wordmark.tsx` — original white Poppins-Bold text wordmark link (no
      copied logo asset, never "UNO.")
- [ ] `Socials.tsx` — wrapping row (`my-[10px]`) of exactly three `36×36px`
      links, `bg-white rounded-full`, 18px `#999999` lucide `Facebook` /
      `Twitter` / `Youtube`, `mr-[5px] my-[3px]`, `aria-label`s,
      `transition-all duration-[400ms]`, hover `bg-[#57b846]` + white icon
- [ ] `ContentColumn.tsx` — `max-w-[700px] mx-auto`, stacking the copy line,
      the form row and the note
- [ ] `CopyLine.tsx` — ONE centred `p` in Poppins-Regular 36px/1.333333 white
      with `pb-[60px]`, rendering "Our website is " + an inline
      `<span>` in Poppins-Bold 36px/1.333333 white ("Coming Soon") + ", follow us
      for update now!" — a single sentence, not an eyebrow + heading pair
- [ ] `SubscribeForm.tsx` — wrapping `justify-center` row `w-full` holding
      `Field` (well `w-[490px] max-w-full relative mb-[20px]`) and
      `SubscribeButton` (`mb-[20px]`), i.e. ONE centred row on desktop, then the
      note
- [ ] `Field.tsx` — input `bg-white h-[50px] px-[25px]` with NO radius,
      Poppins-Regular 16px `#57b846` text, `#999999` "Email Address"
      placeholder, plus the absolutely-positioned focus ring
      (`rgba(87,184,70,0.6)`) animating over `.5s ease-in-out` to
      `box-shadow:0 0 80px 30px` with `opacity:0`
- [ ] `SubscribeButton.tsx` — `min-w-[170px] h-[50px] px-[20px] bg-[#57b846]`
      Poppins-Regular 16px white "Subscribe", `transition-all duration-[400ms]`,
      hover: fill → `transparent` with a
      `linear-gradient(to bottom,#b224ef,#7579ff)` overlay fading in at
      `opacity:1` (label stays white/legible)
- [ ] `Note.tsx` — Poppins-Regular 12px/1.333333 `#e5e5e5` centred note
      `pt-[5px]` ("And don't worry, we hate spam too! You can unsubscribe at
      anytime."-equivalent)
- [ ] `Countdown.tsx` — wrapping `justify-center` row `max-w-[700px] mx-auto
    pt-[116px]` rendering FOUR `CountdownRing`s (days, hours, minutes,
      seconds) + `useCountdown.ts` (see below)
- [ ] `CountdownRing.tsx` — `w-[155px] h-[155px] border border-white/30
    rounded-full flex flex-col items-center justify-center
    mx-[10px] mb-[15px]`; digit Poppins-Bold 40px/1 white `pb-[9px]`; label
      Poppins-Regular 12px/1 white ("Days" / "Hours" / "Minutes" / "Seconds" —
      sentence case, NOT uppercase)
- [ ] `useCountdown.ts` — 1 s interval toward `now + 35 days + 18 hours`; days
      written RAW (no padding) while hours/minutes/seconds are zero-padded to
      two digits; first paint immediate; interval cleared on unmount and when
      the remaining time reaches 0
- [ ] React-state validation (e-mail regex
      `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`) → white bubble `1px solid #c80000`,
      `rounded-none`, `padding 5px 30px 6px 10px`, `max-w-[70%]`, right 12px,
      vertically centred, Poppins-Regular 15px/1.4 `#c80000`, plus lucide
      `AlertTriangle` 16px `#c80000` at right 18px (this slug's glyph is the
      warning TRIANGLE); hidden until an invalid submit, then visible on field
      hover and always at ≤992px; cleared on focus; invalid submit never
      navigates; valid submit shows a React-state confirmation
- [ ] `Attribution.tsx` — Poppins-Regular 12–13px centred line under the note
      ("More templates at Component Dock") linking
      `https://www.componentdock.com/`

## Tests (Vitest + Testing Library, 100% coverage)

- [ ] Countdown math (target `now + 35 d + 18 h`, 1 s tick advance, days RAW,
      h/m/s zero-padded, immediate first paint, interval cleanup at unmount and
      at zero)
- [ ] Countdown rendering: exactly four rings, correct order, the four
      sentence-case labels, digit + label typography classes
- [ ] Form validation (empty e-mail, malformed e-mail, valid submit; bubble
      appears and clears on focus; visibility rule; no navigation on invalid;
      confirmation on valid)
- [ ] One-row form geometry: well `w-[490px] max-w-full`, button
      `min-w-[170px]`, both 50px tall, both in the same centred row
- [ ] Copy line renders as ONE paragraph with an inline bold span; note and
      three social `aria-label`s, the button label and the attribution render
- [ ] Attribution links Component Dock; no source-brand strings anywhere in
      `apps/imminent`
- [ ] `scripts/verify-app.sh imminent` passes (typecheck + lint + tests + build)

## Notes

- This is a single-screen page: NO navbar, NO scrolling sections, NO footer
  band. The photograph + wash IS the design; the only chrome is the form, the
  four rings and the social buttons.
- The wash paints OVER the photo (`::before`, `z-index:-1`, `opacity:0.9`) —
  render it as an absolutely-positioned overlay above the background image and
  below the content, not as a replacement for the photo.
- **The washed wrapper carries NO padding in this slug** (unlike its
  balloon-photo sibling, which pads the washed wrapper directly): the padded,
  `min-h-screen` box is the FIRST CHILD. Copying the sibling's structure shifts
  every vertical gap on the page.
- Wash direction is inverted vs the balloon-photo sibling: `to top, #b224ef,
#7579ff` puts MAGENTA at the BOTTOM and indigo at the top, exactly as the
  screenshot shows.
- The reference photo (`images/bg01.jpg`) is a real blurred office interior —
  NEVER copy it; use `picsum.photos/seed/imminent-bg/1900/900`.
- The form is ONE row of a 490px field + a 170px button, both 50px, flush, no
  radius, centred — NOT a full-width stacked form. The button's own
  `min-width:170px` gives it its width.
- The field's TYPED TEXT is brand green `#57b846` (not grey) — easy to miss
  because the screenshot shows an empty field.
- The day value is deliberately NOT zero-padded here (the source writes the raw
  day count) while hours/minutes/seconds are two digits — do not "fix" it.
- The countdown is RINGS, not cards and not a flip clock: no fill, no colon, no
  dots, no flip animation — only the four numbers change each second.
- Labels are sentence case ("Days", "Hours"…) — the source declares no
  `text-transform` for `.s1-txt2`; do not uppercase them.
- The validation bubble is SQUARE (`rounded-none`) with a 15px message and the
  FontAwesome warning triangle `\f071` ⇒ lucide `AlertTriangle` (the
  balloon-photo sibling uses a 16px radius and `\f06a` ⇒ `AlertCircle`).
- The button hover inverts to a gradient, not a flat colour: green fill →
  `transparent` with a `to bottom` magenta→indigo overlay fading in over `.4s`.
- The three social buttons are FILLED WHITE DISCS with grey glyphs — the only
  such treatment in the family (elsewhere: transparent fills, white outlines,
  white glyphs on a coloured wash).
- The reference is framework-free (self-contained CSS + one plain-JS file); the
  recreation is Tailwind 4 + React state only. Never copy the source
  `style.css` (including its `all: revert` reboot guard), its class names, its
  woff2 fonts, the FontAwesome subset, the logo PNG, the photo, or the favicon.
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
  CLOCK and a white newsletter card. Imminent (V07) is the magenta→indigo
  washed-photo variant with a single centred column, a ONE-ROW square-cornered
  form, and four plain white outline rings — white digits and white
  sentence-case labels (not purple, not uppercase).
