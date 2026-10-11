# Structkit — implementation tasks

Recreation of ColorLib "Structure Ui Kit" (red-accented UI kit showcase).
Spec: `openspec/specs/template-structkit/spec.md`. New name: **structkit**
(source slug `structure-ui-kit`, theme preview slug `structure` — never reuse
either in app files; demo brand "Structure." / "Structure Free UI Kit." is
also never reused). Design notes:
`docs/templates/structkit/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/structkit`
- [ ] Rename package to `@free-react-templates/structkit`; set
      `"homepage": "https://structkit.free.componentdock.com"`
- [ ] `public/CNAME` = `structkit.free.componentdock.com`
- [ ] `npm install` at repo root; verify lockfile registers
      `@free-react-templates/structkit`
      (`grep -c "free-react-templates/structkit" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Montserrat 300–700 in `index.html`
- [ ] `@theme` tokens in `src/index.css`: primary `#f44336` (hover
      `#ea1c0d`, pressed `#d2190b`), success `#64e291`, info `#03A9F4`,
      warning `#f1bc31`, danger `#e63333`, dark `#343a40`, light `#f8f9fa`,
      heading `#2c2c2c`, body `#777777`, hero overlay
      `linear-gradient(to bottom, red 0%, red 44%, #1f0000 100%)` at 0.6
      opacity, btn radius pill `40px`

## Sections (component order in `App.tsx`)

- [ ] `Navbar.tsx` — dark/transparent bar over hero; "Structkit." wordmark
      left; "Components" dropdown (apps icon → All Components `#buttons` /
      Documentation `#typography`) + "Download" (cloud icon) + "Premium"
      white CTA chip (white bg, red text); facebook/twitter/instagram icons
      right (aria-labels); "Menu" toggler below lg (aria-expanded); scrolled
      state → fixed white + `shadow-[0_0_10px_rgba(0,0,0,0.1)]`
- [ ] `Hero.tsx` — full-viewport photo (picsum `structkit-hero`) +
      red→`#1f0000` gradient overlay (0.6); centered white wordmark
      "STRUCTKIT" in a thin white outlined box; subtitle "Free Bootstrap 4
      UI Kit on Structure Design." (paraphrase ok); 50px round avatar +
      "Designed by: <placeholder name>" credit (source person name never
      copied); red circular scroll-down button (down arrow, aria-label)
      straddling the bottom edge → scrolls to `#buttons`
- [ ] `BasicElements.tsx` — standalone "Basic Elements" heading band
- [ ] `Buttons.tsx` — `#buttons`: Pick your style (Default / Round pill 40px
      / With Icon pill / icon-only FAB circle / Simple link-style) · Pick
      your size (sm / base / lg) · Pick your color (Primary, Success,
      Danger, Warning, Info, Light, Dark — solid + outline rows) · Links ·
      Disabled · Dropdowns (Action / Another action / Something else here) ·
      Block Level (info + warning full-width)
- [ ] `Inputs.tsx` — `#inputs`: floating-label form groups, focus border
      `#f44336`, helper text
- [ ] `SelectionControls.tsx` — `#checkRadios`: checkboxes (unchecked /
      checked / disabled both states), radios (off / on / disabled),
      toggles (on "ON" / off), React-state controlled
- [ ] `Sliders.tsx` — styled native `<input type="range">` demos, red
      thumb/track
- [ ] `Badges.tsx` — Primary / Info / Success / Warning / Danger / Rose
      (75% font, bold, radius 0.25rem)
- [ ] `ProgressBars.tsx` — 40% / 60% / 70% "Complete" + 35% success / 20%
      warning / 30% danger
- [ ] `Pagination.tsx` — « 1–5 » with active page `#f44336`
- [ ] `Menus.tsx` — `#menus`: Menu (Menu / Discover (current) / Profile /
      Settings) + Menu with Icons (icon list + Dropdown header menu: Action /
      Another action / Something else here / Separated link / One more
      separated link)
- [ ] `Navigations.tsx` — `#navigations`: navbar variants in Primary /
      Success / Info / Danger colors (Discover / Profile / Settings; some
      with dropdowns; one social icon row)
- [ ] `NavigationTabs.tsx` — `#navigationTabs`: pills (Home / Profile /
      Messages, active filled `#f44336`) + tabs switching lorem panes
- [ ] `Notifications.tsx` — `#notifications`: Info / Success / Warning /
      Error solid alerts with dismiss (quirky copy paraphrased)
- [ ] `Typography.tsx` — `#typography`: H1–H6 "…" sample headlines,
      small-tag headers, paragraphs (`#2c2c2c` headings / `#777777` body)
- [ ] `Images.tsx` — `#images`: Rounded / Circle / Circle Raised (shadow),
      caption with placeholder name
- [ ] `JsComponents.tsx` — `#javascriptsComponents`: Modal (Launch demo
      modal → title/body/Close/Save changes, focus trap), Datetimepicker
      (native `datetime-local`), Popovers + Tooltips (on top/right/bottom/
      left)
- [ ] `Carousel.tsx` — `#carousel`: 3-slide React-state carousel, each
      slide headline + white pill "See all components" (white bg, red text);
      autoplay + next/prev
- [ ] `ExamplesIntro.tsx` — "Completed with examples" heading + intro copy
- [ ] `Cards.tsx` — `#cards`: Cards Styles (plain) / Cards with Image
      Round ("Special title treatment" + "Go somewhere") / Cards with image
      ("Card title") / Cards Profile
- [ ] `Footer.tsx` — centered white band (~6em): "Copyright © <year> All
      rights reserved" + "made with ♥ by [Component
      Dock](https://www.componentdock.com/)"

## Testing (TDD, 100% coverage)

- [ ] One `describe` per component; scenario-style `it` blocks mirroring the
      spec's Gherkin scenarios
- [ ] Interaction tests: dropdown open/close, tabs switch, modal open/close,
      toggles/checkboxes/radios state, carousel next/prev, pagination active,
      mobile nav toggler, hero scroll-down
- [ ] `scripts/verify-app.sh structkit` green before push

## Docs / bookkeeping (implementer, not prep)

- [ ] PR description: source template, preview URL, design tokens, what
      differs (renames, placeholder images, responsive deviation)
- [ ] After merge: `[~]`→`[x]` in TEMPLATES.md + surge URL + homepage +
      `npm run readme:status`
