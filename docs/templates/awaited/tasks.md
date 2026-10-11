# Awaited — implementation tasks

Recreation of ColorLib "Coming Soon V09" (source slug `comingsoon_09` — one
full-viewport screen behind a fixed, full-screen cross-fading background
slideshow of two `1900×900` photographs, washed by a `#b224ef` (bottom) →
`#7579ff` (top) gradient at `opacity:0.3` plus a `rgba(0,0,0,0.4)` black scrim on
top of it; the content column `justify-content:space-between` spreads three
bands: a top bar (white wordmark left, a 140×50 white 25px-radius "Sign Up" pill
right, `padding:22px 80px 0`), a centred middle block (`padding:50px 15px 120px`:
a 72px THIN `rgba(255,255,255,0.5)` UPPERCASE heading with `letter-spacing:15px`,
and a four-unit countdown — four `195px` columns, each a 120px BLACK white number
over a 12px Regular white UPPERCASE label indented `padding-left:35px`), and a
bottom band of three 36×36 white-outline circular social discs).
Spec: `openspec/specs/template-awaited/spec.md`. New name: **awaited** (never
reuse the source slug `comingsoon_09`, the demo title "Coming Soon 9", its
`bg01.jpg`/`bg02.jpg` photos, its "OCEAN" wordmark image, its "Sign Up" label, its
"Coming Soon" copy or its fa-brand SVG icons, in app files).
Design notes: `docs/templates/awaited/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/awaited`
- [ ] Rename package to `@free-react-templates/awaited`; set
      `"homepage": "https://awaited.free.componentdock.com"`
- [ ] `public/CNAME` = `awaited.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/awaited`
      (`grep -c "free-react-templates/awaited" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` in `index.html`: Poppins **100 / 400 / 900** — this
      slug needs Poppins-Thin (heading), Poppins-Regular (CTA + labels) and
      Poppins-Black (digits); NO Bold and NO serif face
- [ ] `@theme` tokens in `src/index.css`: wash stops `#b224ef` (bottom) /
      `#7579ff` (top) + solid `#7579ff` fallback at `opacity 0.3`; scrim
      `rgba(0,0,0,0.4)`; white text/glyphs; heading `rgba(255,255,255,0.5)`;
      pill `#fff`/`#555`; disc `#fff`/`#555`; radii 25px / 50% / 0px;
      transitions `.4s` (all) and `1000ms` (opacity)

## Sections (component order in `App.tsx`)

- [ ] `ComingSoon.tsx` (page shell) — a fixed `z-index:0` full-screen
      `Slideshow` layer behind a content column `min-h-screen w-full flex-col
      justify-between items-center relative z-1`; TWO overlay layers inside the
      column: `bg-[linear-gradient(to_top,#b224ef,#7579ff)] bg-[#7579ff]
      opacity-30` and, above it, `bg-black/40`; the column stacks `TopBar` →
      `MiddleBlock` (`Heading` + `Countdown`) → `SocialRow` → `Attribution`;
      NO navbar, NO e-mail field, NO footer band
- [ ] `Slideshow.tsx` — fixed inset-0 background with TWO cover photos
      (`https://picsum.photos/seed/awaited-bg1/1900/900`,
      `.../awaited-bg2/1900/900`); first shown, rest hidden; cross-fade over
      `1000ms` every `7000ms` with wraparound; frozen on the first photo when
      `prefers-reduced-motion: reduce`; `clearInterval` on unmount
- [ ] `TopBar.tsx` — full-width wrapping `justify-between items-center` row with
      `pt-[22px] px-[80px]` (≤576px `px-[15px]`): left the app's OWN white
      wordmark in a `flex-grow` container (30px right, 10px block margins);
      right a single pill CTA
- [ ] `SignUpButton.tsx` — `min-w-[140px] h-[50px] px-[15px] bg-white
      rounded-[25px]`, Poppins-Regular 18px/1.2 `#555` UPPERCASE
      "Sign Up"-equivalent label, `transition-all duration-[400ms]`, hover
      `bg-[#555555] text-white`
- [ ] `MiddleBlock.tsx` — centred flex column, `pt-[50px] pb-[120px] px-[15px]`
- [ ] `Heading.tsx` — `h3` in Poppins-Thin 100 72px/1.1
      `text-[rgba(255,255,255,0.5)]` `uppercase tracking-[15px]` `text-center`
      with 40px below, `text-[45px]` at ≤576px ("Coming Soon"-equivalent copy)
- [ ] `Countdown.tsx` — wrapping `justify-center` row, NO separators; four
      `w-[195px]` centred columns (`flex-col items-center mb-[30px]`), order
      days → hours → minutes → seconds; each a Poppins-Black 900 120px/1 white
      number (`pb-[9px]`) over a Poppins-Regular 12px/1 white UPPERCASE label
      that is `self-start pl-[35px]`
- [ ] `useCountdown.ts` — `now + 35 d + 19 h` target (source `new Date(0,-1,35,
      19,…)` is always past); 1 s tick; days raw + h/m/s `('0'+n).slice(-2)`;
      immediate first paint; cleanup on unmount
- [ ] `SocialRow.tsx` — wrapping `justify-center pb-[35px]` row of THREE
      `size-9` (36×36) discs `border border-white rounded-full` transparent fill,
      white 18px glyph, `transition-all duration-[400ms]`, side margins 3px /
      bottom 5px; hover `bg-white text-[#555]`; lucide-react brand icons
      (Facebook / Twitter-X / YouTube)
- [ ] `Attribution.tsx` — centred Poppins-Regular 12–13px line under the social
      row, "More templates at Component Dock" linking
      `https://www.componentdock.com/`

## Tests (TDD — write these first, red)

- [ ] `Slideshow.test.tsx` — two photos render; first visible initially;
      fake-timer advance 7000 ms switches the active photo; reduced-motion guard
      keeps the first; interval cleared on unmount
- [ ] `TopBar.test.tsx` — wordmark renders (app's own name, no "OCEAN");
      the pill CTA renders and is a link/button
- [ ] `SignUpButton.test.tsx` — label renders; hover class contract asserted
- [ ] `Heading.test.tsx` — copy renders; thin-letterspaced classes present
- [ ] `Countdown.test.tsx` — four units in order with labels; fake-timer tick
      updates values; days unpadded, h/m/s padded; target ≈ now + 35 d + 19 h
- [ ] `SocialRow.test.tsx` — three discs with accessible labels; links present
- [ ] `Attribution.test.tsx` — links `https://www.componentdock.com/`
- [ ] `App.test.tsx` — composes all bands in order

## Verification

- [ ] `npm run spec:validate -- template-awaited` valid
- [ ] `scripts/verify-app.sh awaited` passes (typecheck + lint + knip + fallow +
      100% coverage + build)
- [ ] No `colorlib` / `comingsoon_09` / "Coming Soon 9" / "OCEAN" strings in
      `apps/awaited`
- [ ] Footer/attribution links `https://www.componentdock.com/`
- [ ] Lockfile registers the workspace; `public/CNAME` + `homepage` correct
