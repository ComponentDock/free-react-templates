# Sorbet — implementation tasks

Recreation of ColorLib "Smash" (sky-blue Bootstrap 4 UI kit: sunset
hero + overlapping feature cards + 15 component showcase bands +
carousel + login card + download CTA).
Spec: `openspec/specs/template-sorbet/spec.md`. New name: **sorbet**
(source slug `smash` — never reuse it in app files; the demo brand
"Smash" / "Smash Free UI Kit" is also never reused). Design notes:
`docs/templates/sorbet/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/sorbet`
- [ ] Rename package to `@free-react-templates/sorbet`; set
      `"homepage": "https://sorbet.free.componentdock.com"`
- [ ] `public/CNAME` = `sorbet.free.componentdock.com`
- [ ] Run `npm install` at repo root; verify lockfile registers
      `@free-react-templates/sorbet`
      (`grep -c "free-react-templates/sorbet" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Open Sans 400–700 in `index.html`
- [ ] `@theme` tokens in `src/index.css`: primary `#64c4ed` (hover
      `#36b3e8`, active `#0286c2`), success `#64e291`, danger
      `#eb7070`, warning `#fec771`, info `#03A9F4`, secondary
      `#696464`, rose `#e83e8c`, heading `#212529`, body `#777777`,
      input `#495057`, light band `#f8f9fa`

## Sections (component order in `App.tsx`)

- [ ] `Navbar.tsx` — absolute transparent over hero; "Sorbet"
      wordmark, lucide Facebook/Twitter/Instagram icon links
      (`aria-label`), "Components" dropdown (All Components /
      Documentation / Download; React state + `aria-expanded`),
      white pill Download button (Cloud icon, blue label)
- [ ] `Hero.tsx` — 600px cover/top-center picsum `sorbet-hero`, no
      overlay; centered 50px/700 uppercase white "Bootstrap 4 UI Kit";
      avatar (picsum `sorbet-person`) + "Designed by: Component Dock"
      linking https://www.componentdock.com/
- [ ] `FeatureCards.tsx` (bg-light) — 3 borderless shadowed cards
      pulled up over the hero edge; circle icon badges info/green/
      amber (lucide Target/Settings/Heart), "Card title treatment" h5
      + blurb + "Go somewhere" btn-info/btn-success/btn-warning
- [ ] `BasicElements.tsx` — plain h1 "Basic Elements"
- [ ] `ButtonsShowcase.tsx` — Default (outline primary 2px) / Filled
      (solid `#64c4ed`, WHITE text per `.btn.btn-primary` — dark
      `#212529` text applies to BADGES only) / Round (pill 40px
      outline) / With Icon (solid + heart) + 40px circle heart button /
      Simple (primary link); seven colored text links Primary…Dark
- [ ] `InputsShowcase.tsx` — "Default" / "Success" (green) / "Error
      Input" (red) / "With Ionicons Icons" (lucide leading icon)
- [ ] `CheckboxesShowcase.tsx` — fill-checkbox `#64c4ed`: Unchecked /
      Checked / Disabled Unchecked / Disabled Checked (click toggles)
- [ ] `RadiosShowcase.tsx` — Radio is off / Radio is on / Disabled ×2
      (one group, selection moves)
- [ ] `TogglesShowcase.tsx` — "Toggle is on" (ON thumb) / "Toggle is
      Off"; `role="switch"` + `aria-checked`, click flips
- [ ] `SlidersBadgesShowcase.tsx` — "Sliders": 2 native range inputs
      (primary accent); "Badges": 6 solid pills `p-2 px-3`
      Primary/Info/Success/Warning/Danger/Rose `#e83e8c` (dark text on
      primary/success/warning)
- [ ] `ProgressPaginationShowcase.tsx` — bars 1rem/`#e9ecef` track:
      40/60/70% primary, "35% Complete (success)", "20% Complete
      (warning)", "30% Complete (danger)"; pagination row 1
      `« 1 2 3 4 5 »`, row 2 "Previous 1 2 3 4 5 6 7 Next" — active
      filled `#64c4ed`, React state
- [ ] `NavigationsShowcase.tsx` — 4 navbars: Primary Color / Info
      Color (dropdown w/ social items) / Danger Color (dropdown w/
      header + separated links) / Transparent (on 400px picsum
      `sorbet-navbg` backdrop); Discover (current)/Profile/Settings;
      React-state dropdowns `aria-expanded`
- [ ] `PillsShowcase.tsx` (bg-light, 6em band) — Home (active)/
      Profile/Messages pills switching lorem panels (`aria-selected`)
- [ ] `NotificationsShowcase.tsx` — 4 labeled alerts (Info/Success/
      Warning/Error) with working × dismiss; paraphrase copy (drop
      third-party names)
- [ ] `TypographyShowcase.tsx` — Header 1–6 "Thinking in textures"
      (500 `#212529`) + Paragraph sample
- [ ] `ImagesShowcase.tsx` (bg-light) — Rounded / Circle / Circle
      Raised (shadow) over picsum `sorbet-person`, "Clyde Ford"
      caption
- [ ] `JsComponentsShowcase.tsx` (bg-light, 6em) — Modal ("Launch
      demo modal" → centered modal, Escape/backdrop/×, Close/Save
      changes); datetime-local picker; 4-direction popovers; 4-
      direction tooltips (`aria-describedby`); accordion "Collapse
      Menu 1/2" (20px capitalize, chevron, `aria-expanded`)
- [ ] `Carousel.tsx` — 3 full-bleed picsum slides
      (`sorbet-slide-1..3`) w/ white h2 headlines ("This is Carousel
      Bootstrap Enjoy Free UI Kit." / "We are Sorbet Free UI Kit." /
      "Get Sorbet Free UI Kit.") + outline-white pill "See all
      components"; prev/next React state
- [ ] `ExamplesBand.tsx` — "Completed with examples" + centered
      paragraph (paraphrased)
- [ ] `SignupBand.tsx` — picsum `sorbet-signup` backdrop; white card:
      "Card Login" h4, 3 white 40px circle social icon buttons,
      Username + "Password..." inputs, `#64c4ed` terms fill-checkbox,
      white "Get Started"; zod + controlled state, submit blocked
      until valid
- [ ] `CtaBand.tsx` — "Do you like this UI Kit?" + primary btn-lg
      "Download, it's free!" (no photo)
- [ ] `Footer.tsx` (bg-light) — "Copyright © <year> All rights
      reserved | Made with ♥ by Component Dock" linking
      https://www.componentdock.com/

## Tests (TDD, 100% coverage)

- [ ] One `describe` per component; scenario-style `it` blocks
      mirroring the spec's Gherkin scenarios
- [ ] Interaction tests: dropdowns, pills, toggles, checkboxes/
      radios, pagination, carousel, modal (Escape/backdrop), alert
      dismiss, accordion, login form validation
- [ ] `npm run test:coverage` at 100% lines/functions/branches/
      statements; `scripts/verify-app.sh sorbet` passes

## Finish

- [ ] Zero `colorlib` / "Smash" strings in `apps/sorbet` (grep)
- [ ] README/status bookkeeping is the implementer's job (`[x]` +
      surge URL + `npm run readme:status`) — NOT the prep stream's
