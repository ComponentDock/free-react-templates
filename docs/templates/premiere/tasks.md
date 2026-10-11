# Premiere — implementation tasks

Recreation of ColorLib "Coming Soon 2" (source slug `comingsoon_02` — a
single centred column over a full-bleed cross-fading photo slideshow, with a
row of four translucent countdown circles and a pill e-mail form). Spec:
`openspec/specs/template-premiere/spec.md`. New name: **premiere** (never
reuse the source slug `comingsoon_02` or the demo brand "Coming Soon 2" /
"Coming Soon V02" in app files). Design notes:
`docs/templates/premiere/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/premiere`
- [ ] Rename package to `@free-react-templates/premiere`; set
      `"homepage": "https://premiere.free.componentdock.com"`
- [ ] `public/CNAME` = `premiere.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/premiere`
      (`grep -c "free-react-templates/premiere" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Poppins (600/700) + Lato (300/400/700) in
      `index.html`
- [ ] `@theme` tokens in `src/index.css`: brand `#846add`, hover `#5d43b5`,
      focus glow `rgba(132,106,221,0.5)`, overlay `rgba(0,0,0,0.8)`,
      placeholder `#999999`, error `#c80000`, white text roles; radii 35px /
      50% / 16px; transitions `.5s` (focus) / `.4s` (button)

## Sections (component order in `App.tsx`)

- [ ] `ComingSoon.tsx` (page shell) — one `min-h-screen` centred column
      (`px-[15px] py-[50px]`, flex column centred) over the photo layer and
      the `rgba(0,0,0,0.8)` overlay; contains Headline → Countdown → Form →
      Attribution, in that order
- [ ] `PhotoBackdrop.tsx` — fixed full-viewport layer cycling three
      `picsum.photos/seed/premiere-bg-1|2|3` photos (`object-cover`), 7 s
      interval, 1 s opacity cross-fade, no cycle under
      `prefers-reduced-motion: reduce`; clears its `setInterval` on unmount
- [ ] `Headline.tsx` — uppercase coming-soon headline (Poppins-Bold 50px/1.1
      white, `pb-[25px]`) + sub-line (Lato-Light 25px/1.2 white,
      `pb-[48px]`); same kind of copy as the source, brand name never reused
- [ ] `Countdown.tsx` — four 155px circles (`border border-white/30`,
      `rounded-full`, 15px side / 20px bottom margins) in a centred wrapping
      row (max-width to keep the row from stretching); white Lato-Bold 40px
      number above an uppercase `#846add` Lato-Regular 12px label
      (Days / Hours / Minutes / Seconds); live 1 s `setInterval` toward a
      fixed target, h/m/s zero-padded, days unpadded, past target falls back
      to now + 35 d + 18 h
- [ ] `SubscribeForm.tsx` — controlled e-mail pill input (500px capped at
      `calc(100% - 10px)`, `h-[70px]`, `rounded-[35px]`, `px-10`, `#846add`
      Lato-Bold 15px text, `#999999` placeholder) beside the purple
      `#846add` pill "Subscribe" button (`min-w-[160px] h-[70px]
      rounded-[35px] px-5`, white uppercase Lato-Bold 15px, `#5d43b5` hover,
      `.4s`); glow focus ring (`rounded-[35px]`, `rgba(132,106,221,0.5)`,
      expanding shadow `0 0 80px 30px` fading out over `.5s`); React-state
      validation (invalid/empty e-mail → white bubble with `1px solid
      #c80000`, `rounded-[16px]`, Lato-Bold 15px `#c80000` text + lucide
      `AlertCircle`; visible on hover and always at ≤992px; cleared on
      focus; valid submit accepted, no navigation)
- [ ] `Attribution.tsx` — "Made with ♥ by Component Dock" linking
      `https://www.componentdock.com/`

## Tests (Vitest + Testing Library, 100% coverage)

- [ ] Countdown math (target → d/h/m/s, zero-padding of h/m/s only, past-target
      fallback to now + 35 d + 18 h, 1 s tick advance, interval cleanup)
- [ ] Backdrop cycles photos on the 7 s interval and honours
      `prefers-reduced-motion` (interval cleared on unmount)
- [ ] Form validation (invalid, empty, valid submit; bubble appears and
      clears on focus; no navigation)
- [ ] Headline/Countdown/Form render the four labels and the Subscribe label
- [ ] Attribution links Component Dock; no source-brand strings anywhere
- [ ] `scripts/verify-app.sh premiere` passes (typecheck + lint + tests +
      build)

## Notes

- This is a single-screen page: NO navbar, NO scrolling sections, NO footer
  band beyond the attribution line.
- The reference is framework-free (self-contained CSS + one plain-JS file);
  the recreation is Tailwind 4 + React state only. Never copy the source
  `style.css` reboot, class names, or the three demo photos.
- Behaviour to keep: form validation, the per-second countdown, and the
  cross-fading background — all re-implemented in React (no jQuery, no
  framework, no CDN).
- Do not confuse this with `debut` (ColorLib `comingsoon_01`): that one is a
  diagonal split (white form panel + photo panel, 2×2 countdown, green
  `#57b846` accent). Premiere is a single centred column, a horizontal row of
  four circles, pill controls, purple `#846add` accent.
