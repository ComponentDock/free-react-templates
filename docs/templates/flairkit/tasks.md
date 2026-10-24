# Flairkit — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/flairkit`
> (<https://flairkit.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib "Regen Ui Kit" (pink/rose UI kit showcase).
Spec: `openspec/specs/template-flairkit/spec.md`. New name: **flairkit**
(source slug `regen-ui-kit`, theme preview slug `regen` — never reuse
either in app files; demo brand "Regen"/"Regen UI Kit" is also never
reused). Design notes: `docs/templates/flairkit/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/flairkit`
- [ ] Rename package to `@free-react-templates/flairkit`; set
      `"homepage": "https://flairkit.free.componentdock.com"`
- [ ] `public/CNAME` = `flairkit.free.componentdock.com`
- [ ] Run `npm install` at repo root; verify lockfile registers
      `@free-react-templates/flairkit`
      (`grep -c "free-react-templates/flairkit" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Roboto 300–500 in `index.html`
- [ ] `@theme` tokens in `src/index.css`: primary `#f34573`, secondary
      `#6c757d`, success `#7fbb00`, danger `#ec1c24`, warning `#ffd900`,
      info `#1cc7d0`, heading navy `#394a6d`, heading slate `#454d66`,
      muted `#d4d7dd`, light band `#f8f9fa`; per-color btn hover shadow
      `0 5px 15px -5px rgba(<color>, .8)`

## Sections (component order in `App.tsx`)

- [ ] `Hero.tsx` — 80vh band, picsum `flairkit-hero` cover photo, NO
      overlay; centered bold white h1 "Flairkit UI Kit", white lorem
      subtitle, pink `#f34573` "View All Here" button (default corners,
      px-4 py-3, NOT uppercase) → `#start`
- [ ] `ButtonsShowcase.tsx` (`#start`, bg-light) — label rows (label
      col + demo col): Style ("Default" + "Rounded" pill w/ Home icon +
      Heart fab 32px circle), Sizes (Small 12px / Regular 14px / Large
      16px), Colors (9 solid incl. Link), Outline (8 outline, primary
      pill per DOM), Outline Style 2 (8 outline, 2px borders — primary
      also pill); per-color hover shadows; 0.9rem not-uppercase
- [ ] `InputsShowcase.tsx` — "Inputs" h3; Style 1 (Default / is-valid /
      is-invalid), Style 2 (same in pill 30px), Style 3 (transparent
      icon groups: Lock+Password `pl-0 border-left-0`, User+Username
      pill, Email address + User append), Style 4 (underline-only:
      User+Username, Lock+Password, Mail+Email; bottom border #ccc →
      #f34573 focus)
- [ ] `ControlsShowcase.tsx` (bg-light) — Checkboxes (Unchecked /
      Checked / Unchecked Disabled / Checked Disabled), Radioboxes
      (Radio is on / off / on Disabled / off Disabled), Toggle Buttons
      ("Toggle this switch element" off / "Checked switch element" on);
      React state, aria-checked, disabled rows inert
- [ ] `SliderBadgePagerProgress.tsx` (two col-lg-6) — LEFT: "Sliders"
      (2 native range demos), "Progress Bars" (7px bars success/info/
      warning/danger), "Progress Bars with percent" (ONE row: WordPress
      94%); RIGHT: "Default Badges" (8 solid uppercase px-3), "Pill
      Badges" (8 pill), "Pagination" (DOM order: info « 1 2 3 », primary
      « 1 2 3 », secondary Prev … 5 6 7 8 9 … Next — 40px round links,
      active fill + soft shadow, React state)
- [ ] `NavbarShowcase.tsx` (pb-0) — six `navbar-dark px-4 mb-4` bars:
      bg-primary, bg-success (expanded variant: Home (current)/Link/
      Dropdown/Disabled), bg-info, bg-danger, bg-secondary,
      bg-transparent ("Transparent" brand text); uppercase .8rem items,
      rgba(255,255,255,.2) hover; React-state dropdowns (Action /
      Another action / Something else here), aria-expanded
- [ ] `TabsShowcase.tsx` (bg-light) — two white `tab-card p-4` cards
      (0 10px 10px -5px rgba(108,117,125,.2) shadow); card 1 secondary
      gray active pill, card 2 cyan; Profile/Messages/Settings + 2
      lorem paragraphs per pane; React state, aria-selected
- [ ] `AlertsShowcase.tsx` — 5 solid dismissible alerts in DOM order:
      primary #f34573, success #7fbb00, danger #ec1c24, warning
      #ffd900, info #1cc7d0; "A simple <color> alert with an example
      link..." copy + working × close
- [ ] `TypographyShowcase.tsx` — Heading 1–6 "Almost before we knew it,
      we had left the ground." (weight 300 #394a6d), Paragraph, Quote
      (clean attribution e.g. "Jane Smith, CEO & Founder" — source typos
      "Joh Smith, CEO & Fouder" never reproduced), colored text rows
      Muted/Primary/Info/Success/Warning/Danger
- [ ] `ImagesShowcase.tsx` (bg-light) — 4 columns over ONE picsum
      image (`flairkit-img-1`): Rounded Raised (shadow), Rounded,
      Circle, Thumbnail (bordered)
- [ ] `JsComponentsShowcase.tsx` — "Datetime Picker" (native
      datetime-local), "Modal" ("Basic Modal" → centered "Modal title" +
      × + 2 lorem paragraphs; × / backdrop / Escape close, focus
      managed), "Popovers" (top/right/bottom/left, borderless shadowed
      cards), "Tooltips" (top/right/bottom/left, white/black shadowed,
      aria-describedby)
- [ ] `CarouselShowcase.tsx` (bg-light) — 3 picsum slides
      (`flairkit-slide-1..3`), caption h5 white ("First/Second/Third
      slide label") + lorem line, Previous / Next controls; React-state
      cycling only
- [ ] `CardsShowcase.tsx` — 3 cards, all `0 5px 15px -5px
      rgba(0,0,0,.2)` shadow: (a) image-top (`flairkit-card-1`, 30px
      body), (b) text-center pink 30px icon top (30px sides/40px
      bottom), (c) text-center border-0 with 80px pink round icon
      circle (white glyph); shared "Card title" + "Some quick example
      text..." + "Go somewhere" copy (paraphrase)
- [ ] `Footer.tsx` — bg-light centered: "Copyright © <year> All rights
      reserved | Made with <Heart icon> by Component Dock" linking
      https://www.componentdock.com/

## Tests (TDD, 100% coverage)

- [ ] Per component: renders every demo row/variant from the spec
      scenario; interactions (tab switch, dropdown open, modal
      open/close, alert dismiss, pagination click, carousel prev/next,
      toggle flip) tested via user events
- [ ] `scripts/verify-app.sh flairkit` passes; coverage 100%
      lines/functions/branches/statements

## Fidelity & naming

- [ ] Section order 1:1 with the preview DOM (spec checklist)
- [ ] Zero `colorlib` / "Regen" references in `apps/flairkit`
- [ ] All images `picsum.photos/seed/flairkit-*`; lucide-react icons
      only (Home/Heart/Lock/User/Mail replace icomoon glyphs)
- [ ] No copied CSS/assets; no Bootstrap JS, nouislider,
      datetimepicker, font-awesome/icomoon, jQuery
