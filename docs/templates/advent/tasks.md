# Advent — implementation tasks

Recreation of ColorLib "Coming Soon V05" (source slug `comingsoon_05` — a
single pink→coral gradient screen with a white countdown bar pinned flush to
the top edge (four hairline-split cells), a centred white uppercase "Coming
Soon" headline, a lighter under-construction line, one inline get-updates row
(white Name pill + white Email pill + dark pill button), and a small footer
credit line). Spec: `openspec/specs/template-advent/spec.md`. New name:
**advent** (never reuse the source slug `comingsoon_05`, the demo title "Coming
Soon 5" / "Coming Soon V05", or the source credit line, in app files). Design
notes: `docs/templates/advent/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/advent`
- [ ] Rename package to `@free-react-templates/advent`; set
      `"homepage": "https://advent.free.componentdock.com"`
- [ ] `public/CNAME` = `advent.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/advent`
      (`grep -c "free-react-templates/advent" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Ubuntu (400/700) in `index.html`
- [ ] `@theme` tokens in `src/index.css`: gradient stops `#f77062` (bottom) /
      `#fe5196` (top) + solid `#fb5f7e` fallback, hover overlay `#f65342` /
      `#fb3282` + solid `#fb2e57` fallback, dark `#222222`, surface `#fff`,
      divider `#e6e6e6`, number `#555555`, label `#7d8da6`, input text
      `#555555`, placeholder `#999999`, error `#c80000`; radii 25px / 15px;
      transitions `.4s`

## Sections (component order in `App.tsx`)

- [ ] `ComingSoon.tsx` (page shell) — one `min-h-screen` flex column
      (`flex-wrap`, `justify-between`, items-centre, `px-[15px] pb-[30px]` and
      NO top padding) with the brand wash
      (`bg-[linear-gradient(to_top,#f77062,#fe5196)]` + `bg-[#fb5f7e]`
      fallback); stacks the Countdown bar (flush at the very top), the centred
      mid block (`flex flex-col items-center w-full pt-[50px] pb-[80px]`:
      Headline → FormRow) and the Attribution line
- [ ] `CountdownBar.tsx` — ONE wrapping, centre-justified row
      (`max-w-full w-[360px] rounded-b-[15px] overflow-hidden`) of four cells
      `w-[calc((100%-3px)/4)] h-[92px] bg-white flex flex-col items-center
      justify-center`, cells 1–3 with `border-r border-[#e6e6e6]` and cell 4
      without; Ubuntu-Bold 36px/1 `#555555` number (`pb-[7px]`) above an
      Ubuntu-Regular 12px/1 uppercase `#7d8da6` label
      (Days / Hours / Minutes / Seconds); live 1 s `setInterval` toward a fixed
      target, h/m/s zero-padded, days unpadded, past target falls back to
      now + 35 d + 18 h, interval cleared on unmount and at zero
- [ ] `Headline.tsx` — `h1` Ubuntu-Bold 60px/1.2 white uppercase, centred,
      `pb-[10px]` ("Coming Soon"-equivalent copy) + Ubuntu-Regular 24px/1.5
      white line, centred, `max-w-[526px]`, `pb-[43px]`
- [ ] `FormRow.tsx` — wrapping, centre-justified, `w-full` row with three
      controls in order (each `mx-[10px] mb-[20px]`): Name well, Email well,
      dark pill button
- [ ] `Field.tsx` — input well `w-[280px] max-w-[calc(100%-20px)] h-[50px]
      bg-white rounded-[25px] relative`, its input filling it with
      `px-[30px] pr-[20px] rounded-[25px]`, Ubuntu-Bold 15px/1.4 `#555555`,
      `#999999` placeholder, `.4s` transition, focus bloom
      `focus:shadow-[0_0_10px_1px_rgba(255,255,255,0.5)]`
- [ ] `SubmitButton.tsx` — `w-[280px] max-w-[calc(100%-20px)] h-[50px] px-5
      bg-[#222222] rounded-[25px] overflow-hidden relative` with an
      Ubuntu-Bold 15px/1.4 white label ("Get Updates") and a `::before`-
      equivalent absolute overlay
      (`bg-[linear-gradient(to_bottom,#f65342,#fb3282)]`, `opacity-0`,
      `group-hover:opacity-100`, `transition-opacity duration-[400ms]`,
      `z-[-1]`) while the base fill goes `group-hover:bg-transparent`
- [ ] React-state validation (non-empty Name, e-mail regex
      `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`) → white bubble `1px solid #c80000`,
      `rounded-[15px]`, `padding 4px 25px 4px 10px`, `max-w-[70%]`, right 12px,
      vertically centred, Ubuntu-Regular 13px/1.4 `#c80000`, plus lucide
      `AlertTriangle` 14px `#c80000` at right 18px; hidden until an invalid
      submit, then visible on field hover and always at ≤992px; cleared on
      focus; invalid submit never navigates; valid submit shows a React-state
      confirmation
- [ ] `Attribution.tsx` — Ubuntu-Regular 14px/1.5 white centred line
      ("Made with ♥ by Component Dock") linking
      `https://www.componentdock.com/`

## Tests (Vitest + Testing Library, 100% coverage)

- [ ] Countdown math (target → d/h/m/s, zero-padding of h/m/s only, days
      unpadded, past-target fallback to now + 35 d + 18 h, 1 s tick advance,
      interval cleanup)
- [ ] Form validation (empty Name, malformed e-mail, valid submit; bubble
      appears and clears on focus; visibility rule; no navigation on invalid;
      confirmation on valid)
- [ ] Headline, sub line, the four countdown labels, the button label and the
      attribution render
- [ ] Countdown bar geometry (four cells, divider on the first three only,
      rounded bottom corners) is asserted on the rendered markup
- [ ] Attribution links Component Dock; no source-brand strings anywhere
- [ ] `scripts/verify-app.sh advent` passes (typecheck + lint + tests + build)

## Notes

- This is a single-screen page: NO navbar, NO scrolling sections, NO footer
  band beyond the attribution line. The gradient IS the design — no photography.
- The countdown bar is the FIRST child and has NO top margin: it must sit flush
  against the viewport top edge with square top corners and only the bottom two
  corners rounded (source `.bor1`). Do not centre it vertically.
- The form is INLINE (three controls on one wrapping row), not a modal. Advent
  has NO modal — that is the sibling `eve` (`comingsoon_04`).
- The reference is framework-free (self-contained CSS + one plain-JS file); the
  recreation is Tailwind 4 + React state only. Never copy the source
  `style.css` (including its `all: revert` reboot guard), its class names, its
  woff2 fonts, the FontAwesome subset, or the favicon.
- Behaviours to keep (both, re-implemented in React — no jQuery, no framework,
  no CDN): form validation and the per-second countdown.
- Do not confuse this with its siblings in the same ColorLib series:
  `debut` (`comingsoon_01`) is a diagonal split (white form panel + photo
  panel, 2×2 countdown, green `#57b846` accent); `premiere` (`comingsoon_02`)
  is a single centred column over a cross-fading photo slideshow with four
  155px translucent circles and pill controls (`#846add`); `incoming`
  (`comingsoon_03`) is a translucent white card on a light photo with four dark
  rectangular tiles; `eve` (`comingsoon_04`) is the purple→violet diagonal
  gradient with four white rounded SQUARE tiles and a subscribe modal. Advent
  is the warm pink→coral variant with a single top-pinned countdown BAR and an
  inline form — the only one of the five with a pinned bar and no modal.
