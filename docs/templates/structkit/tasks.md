# Structkit — implementation tasks

Recreation of ColorLib "Structure Ui Kit" (red-accented UI kit showcase).
Spec: `openspec/specs/template-structkit/spec.md`. New name: **structkit**
(source slug `structure-ui-kit`, theme preview slug `structure` — never reuse
either in app files; demo brand "Structure." / "Structure Free UI Kit." is
also never reused). Design notes:
`docs/templates/structkit/design-notes.md`.

## App setup

- [x] Copy the simplest existing app scaffold → `apps/structkit`
- [x] Rename package to `@free-react-templates/structkit`; set
      `"homepage": "https://structkit.free.componentdock.com"`
- [x] `public/CNAME` = `structkit.free.componentdock.com`
- [x] `npm install` at repo root; verify lockfile registers
      `@free-react-templates/structkit`
      (`grep -c "free-react-templates/structkit" package-lock.json`)
- [x] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [x] Google Fonts `<link>` for Montserrat 300–700 in `index.html`
- [x] `@theme` tokens in `src/index.css`: primary `#f44336` (hover
      `#ea1c0d`, pressed `#d2190b`), success `#64e291`, info `#03A9F4`,
      warning `#f1bc31`, danger `#e63333`, dark `#343a40`, light `#f8f9fa`,
      heading `#2c2c2c`, body `#777777`, hero overlay
      `linear-gradient(to bottom, red 0%, red 44%, #1f0000 100%)` at 0.6
      opacity, btn radius pill `40px`

## Sections (component order in `App.tsx`)

- [x] `Navbar.tsx` — dark/transparent bar over hero; "Structkit." wordmark
      left; "Components" dropdown (apps icon → All Components `#buttons` /
      Documentation `#typography`) + "Download" (cloud icon) + "Premium"
      white CTA chip (white bg, red text); facebook/twitter/instagram icons
      right (aria-labels); "Menu" toggler below lg (aria-expanded); scrolled
      state → fixed white + `shadow-[0_0_10px_rgba(0,0,0,0.1)]`
- [x] `Hero.tsx` — full-viewport photo (picsum `structkit-hero`) +
      red→`#1f0000` gradient overlay (0.6); centered white wordmark
      "STRUCTKIT" in a thin white outlined box; subtitle "Free Bootstrap 4
      UI Kit on Structure Design." (paraphrase ok); 50px round avatar +
      "Designed by: <placeholder name>" credit (source person name never
      copied); red circular scroll-down button (down arrow, aria-label)
      straddling the bottom edge → scrolls to `#buttons`
- [x] `BasicElements.tsx` — standalone "Basic Elements" heading band
- [x] `Buttons.tsx` — `#buttons`: Pick your style (Default / Round pill 40px
      / With Icon pill / icon-only FAB circle / Simple link-style) · Pick
      your size (sm / base / lg) · Pick your color (Primary, Success,
      Danger, Warning, Info, Light, Dark — solid + outline rows) · Links ·
      Disabled · Dropdowns (Action / Another action / Something else here) ·
      Block Level (info + warning full-width)
- [x] `Inputs.tsx` — `#inputs`: floating-label form groups, focus border
      `#f44336`, helper text
- [x] `SelectionControls.tsx` — `#checkRadios`: checkboxes (unchecked /
      checked / disabled both states), radios (off / on / disabled),
      toggles (on "ON" / off), React-state controlled
- [x] `Sliders.tsx` — styled native `<input type="range">` demos, red
      thumb/track
- [x] `Badges.tsx` — Primary / Info / Success / Warning / Danger / Rose
      (75% font, bold, radius 0.25rem)
- [x] `ProgressBars.tsx` — 40% / 60% / 70% "Complete" + 35% success / 20%
      warning / 30% danger
- [x] `Pagination.tsx` — « 1–5 » with active page `#f44336`
- [x] `Menus.tsx` — `#menus`: Menu (Menu / Discover (current) / Profile /
      Settings) + Menu with Icons (icon list + Dropdown header menu: Action /
      Another action / Something else here / Separated link / One more
      separated link)
- [x] `Navigations.tsx` — `#navigations`: navbar variants in Primary /
      Success / Info / Danger colors (Discover / Profile / Settings; some
      with dropdowns; one social icon row)
- [x] `NavigationTabs.tsx` — `#navigationTabs`: pills (Home / Profile /
      Messages, active filled `#f44336`) + tabs switching lorem panes
- [x] `Notifications.tsx` — `#notifications`: Info / Success / Warning /
      Error solid alerts with dismiss (quirky copy paraphrased)
- [x] `Typography.tsx` — `#typography`: H1–H6 "…" sample headlines,
      small-tag headers, paragraphs (`#2c2c2c` headings / `#777777` body)
- [x] `Images.tsx` — `#images`: Rounded / Circle / Circle Raised (shadow),
      caption with placeholder name
- [x] `JsComponents.tsx` — `#javascriptsComponents`: Modal (Launch demo
      modal → title/body/Close/Save changes, focus trap), Datetimepicker
      (native `datetime-local`), Popovers + Tooltips (on top/right/bottom/
      left)
- [x] `Carousel.tsx` — `#carousel`: 3-slide React-state carousel, each
      slide headline + white pill "See all components" (white bg, red text);
      autoplay + next/prev
- [x] `ExamplesIntro.tsx` — "Completed with examples" heading + intro copy
- [x] `Cards.tsx` — `#cards`: Cards Styles (plain) / Cards with Image
      Round ("Special title treatment" + "Go somewhere") / Cards with image
      ("Card title") / Cards Profile
- [x] `Footer.tsx` — centered white band (~6em): "Copyright © <year> All
      rights reserved" + "made with ♥ by [Component
      Dock](https://www.componentdock.com/)"

## Testing (TDD, 100% coverage)

- [x] One `describe` per component; scenario-style `it` blocks mirroring the
      spec's Gherkin scenarios
- [x] Interaction tests: dropdown open/close, tabs switch, modal open/close,
      toggles/checkboxes/radios state, carousel next/prev, pagination active,
      mobile nav toggler, hero scroll-down
- [x] `scripts/verify-app.sh structkit` green before push

## Docs / bookkeeping (implementer, not prep)

- [x] PR description: source template, preview URL, design tokens, what
      differs (renames, placeholder images, responsive deviation)
- [x] After merge: `[~]`→`[x]` in TEMPLATES.md + surge URL + homepage +
      `npm run readme:status`

## Implementation record (implementer)

Shipped as `apps/structkit` — 62 Vitest tests, 100% lines/functions/branches/
statements, per-app gate green. Notes discovered during implementation:

- The preview DOM also carries a **Card Login** band (photo + red wash) between
  the carousel and the cards; the recreation renders it inside `ExamplesBand`.
- Buttons in this kit are flat 1px-border fills (`rounded` = 0.25rem), with the
  pill form (`.btn-round`, 40px) and the 40px circular icon button carrying the
  personality — `KitButton` encodes both.
- `Structure`'s `body { min-width: 992px !important }` is deliberately NOT
  reproduced; the recreation is responsive (Tailwind breakpoints).
