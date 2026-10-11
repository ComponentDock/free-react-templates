# Eve — implementation tasks

Recreation of ColorLib "Coming Soon V04" (source slug `comingsoon_04` — a
full-viewport purple→violet gradient screen with a white uppercase "Coming
Soon" headline, a light under-construction line, four white rounded-square
countdown tiles, one outlined white pill button that opens a subscribe modal,
and a small footer line). Spec: `openspec/specs/template-eve/spec.md`. New name:
**eve** (never reuse the source slug `comingsoon_04`, the demo title "Coming
Soon 4" / "Coming Soon V04", or the source credit line, in app files). Design
notes: `docs/templates/eve/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/eve`
- [ ] Rename package to `@free-react-templates/eve`; set
      `"homepage": "https://eve.free.componentdock.com"`
- [ ] `public/CNAME` = `eve.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/eve`
      (`grep -c "free-react-templates/eve" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Montserrat (300/400/700/900) in `index.html`
- [ ] `@theme` tokens in `src/index.css`: gradient stops `#ac32e4` / `#7918f2`
      / `#4801ff` (+ solid `#7918f2` fallback), action blue `#3a5dff`, dark
      `#333`, tile white `#fff`, number `#555555`, label `#7d8da6`, modal sub
      `#555`, placeholder `#999999`, muted `#cccccc`, input border `#e6e6e6`,
      error `#c80000`; radii 25px / 18px / 5px / 15px; transitions `.4s`,
      `.15s linear`, `.3s ease-out`

## Sections (component order in `App.tsx`)

- [ ] `ComingSoon.tsx` (page shell) — one `min-h-screen` flex column
      (`justify-between`, items-centre, `px-[15px] pt-[55px] pb-[35px]`,
      `pt-[35px]` at ≤576px) with the diagonal gradient utility
      (`bg-[linear-gradient(-45deg,#ac32e4,#7918f2,#4801ff)]` + `bg-[#7918f2]`
      fallback); stacks an empty spacer span, the centred mid block
      (`flex flex-col items-center py-[50px]`:
      Headline → Countdown → ModalTrigger) and the Attribution line
- [ ] `Headline.tsx` — `h1` Montserrat-Black 50px/1.2 white uppercase, centred,
      `pb-[10px]` ("Coming Soon"-equivalent copy) + Montserrat-Light 30px/1.2
      white line, centred, `pb-[60px]`
- [ ] `Countdown.tsx` — four `90×90px` white tiles (`bg-white`,
      `rounded-[18px]`, `mx-[18px] mb-[25px]`) in a centred wrapping row
      (`flex flex-wrap justify-center pb-[82px]`); Montserrat-Bold 36px/1
      `#555555` number (`pb-[9px]`) above a Montserrat-Regular 12px/1 uppercase
      `#7d8da6` label (Days / Hours / Minutes / Seconds); live 1 s
      `setInterval` toward a fixed target, h/m/s zero-padded, days unpadded,
      past target falls back to now + 35 d + 18 h, interval cleared on unmount
      and at zero
- [ ] `ModalTrigger.tsx` — transparent pill button
      (`min-w-[280px] max-w-full min-h-[50px] px-5 py-[10px]
      border-2 border-white rounded-[25px] overflow-hidden relative`) with a
      Montserrat-Bold 15px white label and a `::before`-equivalent absolute
      gradient overlay (`bg-[linear-gradient(45deg,#ac32e4,#7918f2,#4801ff)]`,
      `opacity-0 group-hover:opacity-100`, `transition-opacity duration-[400ms]`,
      `z-[-1]`); opens the modal, `aria-haspopup="dialog"`
- [ ] `SubscribeModal.tsx` — React-state dialog rendered in a portal: fixed
      overlay (`opacity` `.15s linear`) + `min-h-full` flex-centred dialog
      (`px-[15px] py-[50px]`) with the white card (`w-[686px] max-w-full
      rounded-[5px] px-[15px] pt-[54px] pb-[100px]`, dialog sliding from
      `-translate-y-1/4` to `0` over `.3s ease-out`); invisible backdrop layer;
      body scroll lock with scrollbar-gap `padding-right`; focus moves to the
      first field, Tab is trapped, `Escape`/outside-click/close-button/
      `[data-dismiss]` close it, clicks inside the card never do, focus returns
      to the opener after ~150 ms
- [ ] `SubscribeForm.tsx` — `max-w-[390px] mx-auto`: Montserrat-Black 24px
      `#333` uppercase heading with a `3px solid #3a5dff` underline 6px below
      (`pb-[36px]`); Montserrat-Regular 18px `#555` uppercase sub line
      (`pb-[40px]`); two controlled pill inputs (Name `mb-[10px]`, Email
      `mb-[20px]`; `h-[50px] border-2 border-[#e6e6e6] rounded-[25px] bg-white
      px-[30px]`, Montserrat-Bold 15px `#555`, `#999999` placeholders) each
      with a hidden focus-ring layer (`2px solid #3a5dff`, radius 25px,
      `calc(100% + 4px)` at `-2px`, `scaleX(1.1) scaleY(1.2)` → `scale(1)`
      over `.4s`, `pointer-events-none`); full-width `#3a5dff` "Get Updates"
      pill (`h-[50px] rounded-[25px] px-5`, white label, `#333` hover); and
      Montserrat-Regular 12px `#999` small print capped at 285px, centred,
      `pt-[20px]`; React-state validation (non-empty Name, e-mail regex
      `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` → white bubble `1px solid #c80000`,
      `rounded-[15px]`, `padding 4px 25px 4px 10px`, right 12px, vertically
      centred, Montserrat-Bold 13px/1.4 `#c80000`, plus lucide `AlertCircle`
      18px `#c80000` at right 18px; hidden until an invalid submit, then
      visible on field hover and always at ≤992px; cleared on focus; valid
      submit accepted, no navigation)
- [ ] `Attribution.tsx` — Montserrat-Regular 12px/1.4 `#cccccc` centred line
      ("Made with ♥ by Component Dock") linking
      `https://www.componentdock.com/`

## Tests (Vitest + Testing Library, 100% coverage)

- [ ] Countdown math (target → d/h/m/s, zero-padding of h/m/s only, days
      unpadded, past-target fallback to now + 35 d + 18 h, 1 s tick advance,
      interval cleanup)
- [ ] Modal lifecycle (open focuses the first field, `aria-modal`, body scroll
      lock + scrollbar-gap padding, Escape close, outside-click close,
      inside-click does NOT close, close-button close, focus restore, teardown)
- [ ] Form validation (empty Name, malformed e-mail, valid submit; bubble
      appears and clears on focus; visibility rule; no navigation)
- [ ] Headline, sub line, the four countdown labels, the trigger label, the
      modal heading/sub/small print, and the "Get Updates" label render
- [ ] Attribution links Component Dock; no source-brand strings anywhere
- [ ] `scripts/verify-app.sh eve` passes (typecheck + lint + tests + build)

## Notes

- This is a single-screen page: NO navbar, NO scrolling sections, NO footer
  band beyond the attribution line. The gradient IS the design — no photography.
- The reference is framework-free (self-contained CSS + one plain-JS file); the
  recreation is Tailwind 4 + React state only. Never copy the source
  `style.css` (including its `all: revert` reboot guard), its class names, its
  woff2 fonts, the FontAwesome subset, or the favicon.
- Behaviours to keep (all three, re-implemented in React — no jQuery, no
  framework, no CDN): form validation, the per-second countdown, and the
  Bootstrap-style modal (backdrop, scroll lock, focus trap, Escape/outside
  close, focus restore).
- Do not confuse this with its siblings in the same ColorLib series:
  `debut` (`comingsoon_01`) is a diagonal split (white form panel + photo
  panel, 2×2 countdown, green `#57b846` accent); `premiere` (`comingsoon_02`)
  is a single centred column over a cross-fading photo slideshow with four
  155px translucent circles and pill controls (`#846add`); `incoming`
  (`comingsoon_03`) is a translucent white card on a light photo with four dark
  rectangular tiles. Eve is the gradient variant: no imagery at all, white
  rounded-SQUARE tiles, an outlined transparent pill button, and a subscribe
  modal — the only one of the four with a modal.
