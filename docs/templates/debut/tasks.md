# Debut — implementation tasks

Recreation of ColorLib "Coming Soon 1" (source slug `comingsoon_01` — a split
coming-soon page: white subscription panel + full-height night-photo panel with
a live countdown). Spec: `openspec/specs/template-debut/spec.md`. New name:
**debut** (never reuse the source slug `comingsoon_01` or the demo brand
"Coming Soon 1" / logo "CO." in app files). Design notes:
`docs/templates/debut/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/debut`
- [ ] Rename package to `@free-react-templates/debut`; set
      `"homepage": "https://debut.free.componentdock.com"`
- [ ] `public/CNAME` = `debut.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/debut`
      (`grep -c "free-react-templates/debut" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Poppins (400/600/700) + Lato (400/700) in
      `index.html`
- [ ] `@theme` tokens in `src/index.css`: brand `#57b846`, hover `#555555`,
      headline `#555555`, input text `#555555`, muted/placeholder `#999999`,
      input border `#e6e6e6`, error `#c80000`, overlay `rgba(0,0,0,0.8)`,
      Facebook `#3b5998`, Twitter `#1da1f2`, YouTube `#cd201f`; radii 5px /
      50%; transition `.4s`

## Sections (component order in `App.tsx`)

- [ ] `ComingSoon.tsx` (page shell) — full-viewport split:
      `flex min-h-screen`; left white panel (`max-w-[650px] min-h-screen`,
      45px/75px padding, `flex flex-col justify-between`) + right photo panel
      (`absolute` pinned right, ~71% width, `min-h-screen`, picsum
      `debut-hero`, `rgba(0,0,0,0.8)` overlay, white `skewX(156deg)` diagonal
      wedge); stacks below `lg`
- [ ] `Logo.tsx` — "debut." wordmark with a green `#57b846` dot (the source
      "CO." logo image is never copied)
- [ ] `Headline.tsx` — "Our website is **Coming Soon**, follow us for update
      now!" (Poppins; bold accent on "Coming Soon"; `#555555`)
- [ ] `SubscribeForm.tsx` — controlled name + email inputs (50px, 2px
      `#e6e6e6` border, radius 5px, 22px padding, `#999999` placeholder);
      animated `#57b846` focus ring (2px, scale 1.1×1.2 → 1, `.4s`);
      full-width "Subscribe" button (50px, radius 5px, `#57b846` →
      `#555555` hover, white Lato-Bold 15px); `#999999` spam note; React-state
      validation (empty name / invalid email → red `#c80000` bubble with a
      lucide `AlertCircle` glyph, cleared on focus; valid submit accepted, no
      navigation)
- [ ] `Socials.tsx` — three 36px round buttons (Facebook `#3b5998`, Twitter
      `#1da1f2`, YouTube `#cd201f`; white 22px lucide icons; `#555555` hover;
      `<a href="#" aria-label=…>`)
- [ ] `Countdown.tsx` — four 155px circles (`1px solid rgba(255,255,255,
      0.3)`, radius 50%) in a centred 2×2 grid (max-width 380px); white
      Lato-Bold 40px number above uppercase Lato-Regular 12px label
      (Days / Hours / Minutes / Seconds); live `setInterval` 1 s tick toward a
      fixed target date, hours/minutes/seconds zero-padded; subtle pointer
      tilt (React transform, no jQuery/tilt.js)
- [ ] `Attribution.tsx` — "Made with ♥ by Component Dock" linking
      `https://www.componentdock.com/`

## Tests (Vitest + Testing Library, 100% coverage)

- [ ] Countdown math (target date → d/h/m/s, zero-padding, tick advance)
- [ ] Form validation (empty name, invalid email, valid submit; bubble on
      error, cleared on focus)
- [ ] Socials render 3 labelled links with the correct brand colors
- [ ] Attribution links Component Dock; no source-brand strings anywhere
- [ ] `scripts/verify-app.sh debut` passes (typecheck + lint + tests +
      build)

## Notes

- This is a single-screen page: NO navbar, NO scrolling sections, NO footer
  band beyond the attribution line.
- The reference is framework-free (self-contained CSS); the recreation is
  Tailwind 4 + React state only. Never copy the source `style.css` reboot or
  class names.
