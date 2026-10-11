# Incoming — implementation tasks

Recreation of ColorLib "Coming Soon V03" (source slug `comingsoon_03` — a
single centred translucent white card over a full-bleed light photo, holding a
logo wordmark, one grey under-construction line, a row of four dark rounded
countdown tiles, and a compact grey email input beside a purple "Get Notified"
button). Spec: `openspec/specs/template-incoming/spec.md`. New name:
**incoming** (never reuse the source slug `comingsoon_03` or the demo brand
"Coming Soon 3" / "Coming Soon V03", or the demo wordmark shown in the design,
in app files). Design notes:
`docs/templates/incoming/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/incoming`
- [ ] Rename package to `@free-react-templates/incoming`; set
      `"homepage": "https://incoming.free.componentdock.com"`
- [ ] `public/CNAME` = `incoming.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/incoming`
      (`grep -c "free-react-templates/incoming" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Barlow (400/500/700) in `index.html`
- [ ] `@theme` tokens in `src/index.css`: brand `#846add`, dark slate `#333333`,
      card `rgba(255,255,255,0.8)`, input well `#e6e6e6`, muted `#999999`,
      body `#666666`, error `#c80000`, white text roles; radii 18px / 10px /
      5px / 2px; transitions `.4s`

## Sections (component order in `App.tsx`)

- [ ] `ComingSoon.tsx` (page shell) — one `min-h-screen` centred wrapper
      (`px-[15px] py-[55px]`, flex row centred, the static photo as a
      background layer) containing the card, which stacks Wordmark → Headline →
      Countdown → NotifyForm → SmallPrint, then the Attribution line
- [ ] `Backdrop.tsx` (or a background utility on the shell) — ONE static
      full-bleed `picsum.photos/seed/incoming-bg-1/1600/1000` photo,
      `object-cover`, centred; no slideshow, no interval
- [ ] `Wordmark.tsx` — centred own-brand wordmark (text wordmark + small lucide
      accent icon mirroring the source's mark-plus-word shape); no copied
      `logo.png`/favicon asset
- [ ] `Countdown.tsx` — four `90×100px` tiles (`bg-[#333333]`,
      `rounded-[10px]`, `mx-[18px] mb-[25px]`) in a centred wrapping row with
      `min-h-[230px]`; white Barlow-Medium 40px/1 number (`pb-[9px]`) above a
      white Barlow-Regular 14px/1 label (Days / Hours / Minutes / Seconds);
      live 1 s `setInterval` toward a fixed target, h/m/s zero-padded, days
      unpadded, past target falls back to now + 35 d + 18 h, interval cleared on
      unmount and at zero
- [ ] `NotifyForm.tsx` — controlled e-mail input (`w-[220px]
      max-w-[calc(100%-10px)] h-[40px] px-5 rounded-[5px] bg-[#e6e6e6]`,
      `#846add` Barlow-Regular 15px text, `#999999` "Your Email" placeholder)
      beside the purple `#846add` "Get Notified" button (`min-w-[120px]
      h-[40px] rounded-[5px] px-5`, white 15px label, `#333333` hover, `.4s`) in
      a wrapping centred row (`w-full pt-[55px]`, controls `mt-5 mx-[5px]`);
      focus ring = absolutely positioned full-size `border border-[#846add]
      rounded-[5px]` layer animating `scaleX(1.1) scaleY(1.2)` → `scale(1)`
      with visibility/opacity over `.4s`, `pointer-events-none`; React-state
      validation (invalid/empty e-mail → white bubble with `1px solid #c80000`,
      `rounded-[2px]`, `padding 4px 25px 4px 10px`, right 12px, vertically
      centred, Barlow-Regular 13px/1.4 `#c80000` text, plus lucide
      `AlertTriangle` `#c80000` 14px at right 18px; hidden until an invalid
      submit, then visible on field hover and always at ≤992px; cleared on
      focus; valid submit accepted, no navigation)
- [ ] `SmallPrint.tsx` — "I promise to never spam" in Barlow-Regular 14px/1.5
      `#999999`, centred, `pt-10`, with the word "never" underlined
      (`border-b border-[#999999]`)
- [ ] `Attribution.tsx` — "Made with ♥ by Component Dock" linking
      `https://www.componentdock.com/`

## Tests (Vitest + Testing Library, 100% coverage)

- [ ] Countdown math (target → d/h/m/s, zero-padding of h/m/s only, days
      unpadded, past-target fallback to now + 35 d + 18 h, 1 s tick advance,
      interval cleanup)
- [ ] Form validation (invalid, empty, valid submit; bubble appears and clears
      on focus; visibility rule; no navigation)
- [ ] Wordmark, headline, small print and the four countdown labels render; the
      "Get Notified" label renders
- [ ] Attribution links Component Dock; no source-brand strings anywhere
- [ ] `scripts/verify-app.sh incoming` passes (typecheck + lint + tests + build)

## Notes

- This is a single-screen page: NO navbar, NO scrolling sections, NO footer
  band beyond the attribution line.
- The reference is framework-free (self-contained CSS + one plain-JS file);
  the recreation is Tailwind 4 + React state only. Never copy the source
  `style.css` reboot, class names, the demo photo (`images/bg01.jpg`), or the
  logo/`favicon` assets.
- Behaviour to keep: form validation and the per-second countdown — both
  re-implemented in React (no jQuery, no framework, no CDN). There is NO
  background slideshow here (the source uses a single static photo).
- Do not confuse this with its siblings in the same ColorLib series:
  `debut` (`comingsoon_01`) is a diagonal split (white form panel + photo
  panel, 2×2 countdown, green `#57b846` accent); `premiere` (`comingsoon_02`)
  is a single centred column over a cross-fading photo slideshow with four
  155px translucent circles and pill controls (`#846add`). Incoming is the
  card-on-a-photo variant: an 880px translucent white card, four dark
  rectangular tiles, and compact 40px-high input + button.
