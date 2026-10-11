# Impending — implementation tasks

Recreation of ColorLib "Coming Soon V10" (source slug `comingsoon_10` — one
full-viewport screen behind a fixed, full-screen cross-fading slideshow of THREE
`1900×900` photographs on a `#000`-backed layer covered by ONE
`rgba(0,0,0,0.7)` scrim and NO gradient wash; a top bar carrying the vertical
rhythm with `padding:22px 80px 185px 65px` (white two-triangle peak mark left, a
140×50 white 25px-radius "Sign Up" pill right with an 18px PlayfairDisplay-Italic
`#333` label); then a `flex-sb flex-row-rev` wrapper (`padding:0 46px 0 58px`,
`position:relative`) holding a heading block taken OUT OF FLOW at `top:0;
left:19%` (`max-width:600px` — 90px PlayfairDisplay-BlackItalic "Coming Soon", a
24px Poppins-Regular `#cccccc` sub-line, and a 500×60 `rgba(255,255,255,0.1)`
e-mail well with `padding-right:80px` and an 80px-wide absolute right submit lane
holding a 15px white paper-plane glyph), the VERTICAL countdown at the right edge
(`flex-direction:column`, `padding-top:34px`: four 90px-wide units, each a 60px
PlayfairDisplay-Bold white number with 30px below over a 14px
PlayfairDisplay-Italic white label) and the VERTICAL social stack at the left
edge (`flex-direction:column`, `padding-top:470px`: three 36×36 transparent boxes
with NO border and NO radius holding 28px white square brand glyphs)).
Spec: `openspec/specs/template-impending/spec.md`. New name: **impending** (never
reuse the source slug `comingsoon_10`, the demo title "Coming Soon 10", its
`bg01.jpg`/`bg02.jpg`/`bg03.jpg` photos, its two-triangle logo image, its
"Sign Up" / "Coming Soon" / "Follow us for update now!" / "Email Address" strings,
its `data-validate` copy or its fa SVG paths, in app files).
Design notes: `docs/templates/impending/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/impending`
- [ ] Rename package to `@free-react-templates/impending`; set
      `"homepage": "https://impending.free.componentdock.com"`
- [ ] `public/CNAME` = `impending.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/impending`
      (`grep -c "free-react-templates/impending" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` in `index.html`: **Playfair Display 400 italic / 700
      / 900 italic** + **Poppins 400 / 500** — this slug is the family's only
      serif-display slug; the source faces are PlayfairDisplay-Italic,
      PlayfairDisplay-Bold, PlayfairDisplay-BlackItalic, Poppins-Regular,
      Poppins-Medium
- [ ] `@theme` tokens in `src/index.css`: slideshow backdrop `#000`; scrim
      `rgba(0,0,0,0.7)`; white text/glyphs; sub-line `#cccccc`; pill `#fff`
      fill / `#333` label / `rgba(255,255,255,0.12)` hover fill + white hover
      label; well `rgba(255,255,255,0.1)` with `0.12` focus; submit hover
      `0.12`; social hover `rgba(255,255,255,0.2)`; error `#c80000`; radii 25px
      (pill) and 0px elsewhere; transitions `.4s` (all), `1000ms` (opacity),
      `7000ms` interval, `1000ms` tick. NO brand accent colour, NO gradient token

## Sections (component order in `App.tsx`)

- [ ] `ComingSoon.tsx` (page shell) — a fixed `z-index:0` full-screen `#000`
      `Slideshow` layer behind a content layer `min-h-screen w-full relative
      z-1` carrying ONE overlay (`bg-black/70`, NO gradient) and then `TopBar`
      → `HeroRow` → `Attribution`; NO navbar, NO footer band, NO modal
- [ ] `Slideshow.tsx` — fixed inset-0 `bg-black` background with THREE cover
      photos (`https://picsum.photos/seed/impending-bg1/1900/900`, `...-bg2`,
      `...-bg3`); first shown, rest hidden; cross-fade over `1000ms` every
      `7000ms` wrapping all three; frozen on the first photo when
      `prefers-reduced-motion: reduce`; `clearInterval` on unmount
- [ ] `TopBar.tsx` — full-width wrapping `justify-between items-center` row with
      `pt-[22px] pl-[65px] pr-[80px] pb-[185px]` (≤576px `px-[15px]`; ≤768px
      `pb-[60px]`): left the app's OWN white peak mark (inline SVG, `flex-grow`
      container, 30px right / 10px block margins; the source two-triangle PNG is
      never copied) with the name; right a single pill CTA
- [ ] `SignUpButton.tsx` — `min-w-[140px] h-[50px] px-[15px] bg-white
      rounded-[25px]`, Playfair Display Italic 18px/1.2 `#333` label in sentence
      case (NO uppercase), `transition-all duration-[400ms]`, hover
      `bg-[rgba(255,255,255,0.12)] text-white`
- [ ] `HeroRow.tsx` — wrapper `flex justify-between flex-row-reverse relative
      pl-[58px] pr-[46px]` (≤992px `flex-col justify-start items-center
      px-[15px]`) stacking `HeroColumn` (out of flow) + `Countdown` (right) +
      `SocialRail` (left)
- [ ] `HeroColumn.tsx` — `absolute top-0 left-[19%] max-w-[600px]` (≤992px
      static centred flex column, full width) stacking `Heading`, `SubLine`,
      `EmailForm`
- [ ] `Heading.tsx` — `h3` in Playfair Display Black Italic (900 italic) 90px/1.1
      white with 30px below, `text-[65px]` at ≤576px, `text-center` at ≤992px
      (a coming-soon-equivalent paraphrase — the source strings are not reused)
- [ ] `SubLine.tsx` — Poppins-Regular 24px/1.2 `#cccccc`, `text-center` at
      ≤992px
- [ ] `EmailForm.tsx` — `pt-[55px] w-full`; well `w-[500px] max-w-full
      h-[60px] pr-[80px] bg-white/10 relative` (`mx-auto` at ≤992px); text input
      `w-full h-full pl-[25px] pr-[15px] bg-transparent focus:bg-white/[0.12]`
      Poppins-Medium 15px/1.2 white text, white placeholder,
      `transition-all duration-[400ms]`; submit `SubmitButton` inside the well
- [ ] `SubmitButton.tsx` — `absolute right-0 top-0 w-[80px] h-full` transparent,
      hover `bg-white/[0.12]`, `transition-all duration-[400ms]`, holding a 15px
      white lucide `Send` glyph, `aria-label` on the icon-only control
- [ ] `FieldError.tsx` — white box, `1px solid #c80000`, no radius,
      `py-[4px] pr-[25px] pl-[10px]`, `max-w-[70%]`, `right-[82px]`, vertically
      centred, Poppins-Medium 14px/1.4 `#c80000` copy, plus a 14px `#c80000`
      warning glyph at right 88px; hidden by default, revealed on wrapper hover,
      always visible at ≤992px, cleared on field focus
- [ ] `useCountdown.ts` — `now + 35 d + 19 h` target (source `new Date(0,-1,35,
      19,…)` is always past); 1 s tick; days raw + h/m/s `('0'+n).slice(-2)`;
      immediate first paint; cleanup on unmount and at zero remaining
- [ ] `Countdown.tsx` — wrapping `flex flex-col pt-[34px]` column (≤992px
      `flex-row justify-center pt-[80px]`), FOUR `w-[90px]` units
      (`flex-col mb-[40px]`; ≤992px `items-center mx-[15px]`) in the order days →
      hours → minutes → seconds, each a Playfair Display Bold 60px/1 white number
      (`pb-[30px]`) over a Playfair Display Italic 14px/1 white sentence-case
      label, left-aligned, NO colons/boxes/rings
- [ ] `SocialRail.tsx` — wrapping `flex flex-col pt-[470px]` column (≤992px
      `flex-row justify-center pt-[100px] pb-[30px]`), THREE `size-9` (36×36)
      transparent boxes with NO border/radius, 28px white glyphs,
      `transition-all duration-[400ms]`, 3px side / 5px bottom margins, hover
      `text-white/20`; lucide Facebook / Twitter(X) / Pinterest
- [ ] `Attribution.tsx` — Poppins-Regular 12–13px line, "More templates at
      Component Dock" linking `https://www.componentdock.com/`

## Tests (TDD — write these first, red)

- [ ] `Slideshow.test.tsx` — three photos render; first visible initially;
      fake-timer advance 7000 ms switches the active photo and wraps after the
      third; reduced-motion guard keeps the first; interval cleared on unmount
- [ ] `TopBar.test.tsx` — the mark renders (app's own name/mark, nothing
      copied); the pill CTA renders and is a link/button
- [ ] `SignUpButton.test.tsx` — italic-serif sentence-case label renders; hover
      class contract asserted
- [ ] `Heading.test.tsx` / `SubLine.test.tsx` — copy renders; 90px / `#cccccc`
      class contracts present
- [ ] `EmailForm.test.tsx` — well/input classes; invalid submit shows the bubble
      with the required-message copy and blocks submit; valid submit passes;
      focus clears the error; e-mail pattern enforced
- [ ] `SubmitButton.test.tsx` — accessible label present; hover class contract
- [ ] `Countdown.test.tsx` — four units in order with labels; fake-timer tick
      updates values; days unpadded, h/m/s padded; target ≈ now + 35 d + 19 h
- [ ] `SocialRail.test.tsx` — three boxes with accessible labels; links present
- [ ] `Attribution.test.tsx` — links `https://www.componentdock.com/`
- [ ] `App.test.tsx` — composes all bands in order

## Verification

- [ ] `npm run spec:validate -- template-impending` valid
- [ ] `scripts/verify-app.sh impending` passes (typecheck + lint + knip + fallow
      + 100% coverage + build)
- [ ] No `colorlib` / `comingsoon_10` / "Coming Soon 10" / "Follow us for update
      now!" / "Email Address" strings in `apps/impending`
- [ ] Attribution links `https://www.componentdock.com/`
- [ ] Lockfile registers the workspace; `public/CNAME` + `homepage` correct
