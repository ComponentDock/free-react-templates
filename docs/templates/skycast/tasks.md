# Skycast (ColorLib Dropdown 03) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-skycast`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 03" — third of the "Bootstrap Dropdowns
  (20)" series (source: https://colorlib.com/wp/template/dropdown-03/).
  TEMPLATES.md has ONE copy (line 756). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu** (see
  `docs/templates/menubar/`, `docs/templates/popmenu/`).
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/bootstrap/dropdown-03/`
  (HTTP 200, 8.5 KB). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-03/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet: `css/style.css`
  (223 KB ftco-style Bootstrap 4 theme), libs: jquery, popper,
  bootstrap.min.js, ionicons 4.5.6. Google Font **Poppins** (weights
  300–900) via Cloudflare `/cf-fonts/s/poppins/` @font-face block.
- **Screenshot:** `dropdown-03.jpg` (1200×972, viewed in browser) — very
  light-gray page, centered dark heading "Dropdown #03", periwinkle-indigo
  button "Todays Weather" (white sun icon left, white caret right), and the
  menu OPEN directly below: white card with soft shadow, four rows each a
  colored icon + label (Sunny Day yellow sun, Rainy Day light-blue rain
  cloud, Cloudy Day blue cloud, Thunderstorm red lightning cloud). The
  screenshot shows the menu in its default (open) state — matches CSS
  exactly. No footer in the source.
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body bg `#fafafa` (very light gray — confirmed
  by both the CSS `body` rule and the screenshot), Poppins base. Section
  `padding: 7em 0`; container max-width 1140px. Heading `.heading-section`
  28px #000, `mb-5 pb-md-4`. Trigger `button.btn.btn-primary.dropdown-toggle.text-left`:
  bg `#3e64ff` (hover `#5878ff`), padding `15px 16px`, radius 4px, 18px
  white text, shadow `0 10px 20px -6px rgba(0,0,0,.12)`; left icon
  `ion-ios-sunny` white (`mr-4` = 24px gap); right white caret
  (`.dropdown-toggle::after`, absolute `right: 20px`, vertically centered).
  Menu `.btn-group .dropdown-menu.dropdown-menu-right`: `min-width: 18rem`
  (288px), border none, bg #fff, padding 0, `margin-top: 15px`, shadow
  `0 10px 34px -20px rgba(0,0,0,.41)`, caret triangle top-RIGHT
  (`right: 0; margin-right: 16px`; `border-width: 0 .7em .6em .7em`, white
  bottom border + translucent `rgba(0,0,0,.03)` shadow-cast duplicate).
  Items `.dropdown-menu .dropdown-item`: 16px `rgba(0,0,0,.7)`, weight 400,
  `padding: 15px 30px`, `border-bottom: 1px solid rgba(0,0,0,.05)` (last
  none); icon `span` 20px, `mr-4` (24px) gap, colored per item
  (`color-1` `#f9e090` Sunny, `color-2` `#5edfff` Rainy, `color-3`
  `#4d80e4` Cloudy, `color-4` `#ff8080` Thunderstorm); hover/focus:
  Bootstrap row hover `#f8f9fa` + 4px left accent bar (`::after`,
  `width: 4px`, opacity 0 → 1, 0.3s transition) in the item's color.
- **Structure (1:1, section order):**
  1. `section.ftco-section` → `div.container` (single section, no header).
  2. `div.row` → `div.col-md-12.text-center`: `h2.heading-section.mb-5.pb-md-4`
     "Dropdown #03".
  3. `div.row.justify-content-center` → `div.col-md-6.d-flex.justify-content-center`:
     `.btn-group`:
     - Trigger: `button.btn.btn-primary.dropdown-toggle.text-left`
       (`data-toggle="dropdown"`, `aria-haspopup="true"`,
       `aria-expanded="false"`; content: white `ion-ios-sunny` icon + label
       "Todays Weather" — the missing apostrophe is in the original HTML,
       keep verbatim).
     - `.dropdown-menu.dropdown-menu-right` (288px white card, caret on top
       right): four `a.dropdown-item`, each `span.mr-4` ionicon (20px,
       colored) + label:
       1. `color-1` Sunny Day (`ion-ios-sunny`, `#f9e090`)
       2. `color-2` Rainy Day (`ion-ios-rainy`, `#5edfff`)
       3. `color-3` Cloudy Day (`ion-ios-cloudy`, `#4d80e4`)
       4. `color-4` Thunderstorm (`ion-ios-thunderstorm`, `#ff8080`)
  4. Footer: source has NONE — add the repo-standard minimal footer with the
     mandatory `https://www.componentdock.com/` ("Component Dock") credit
     link (monorepo conventions; never ColorLib).
- Demo copy is Bootstrap boilerplate — keep the same kinds of items
  (weather labels + icon types) and the exact labels; only icons become
  lucide equivalents (Sun, CloudRain, Cloud, CloudLightning).

## Tasks / todo outline

- [ ] Spec-first: `openspec/specs/template-skycast/spec.md` already on main
      (prep). Open a `feat/template-skycast` branch.
- [ ] Copy the simplest existing app (e.g. `apps/crumb` or `apps/petal`),
      rename package to `@free-react-templates/skycast`, run `npm install`
      at root so `package-lock.json` registers the workspace (grep
      `free-react-templates/skycast`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap).
- [ ] TDD: write tests first per spec requirement, then implement: 1. `WeatherDropdown` — indigo trigger button (`#3e64ff`, radius 4px,
      18px white text, shadow, white `Sun` icon left + white caret
      right) + menu panel (288px white card below button, caret triangle
      top right, reference shadow); opens on click, closes on outside
      click / Escape / item select, one open at a time; ARIA
      `aria-haspopup="menu"`, dynamic `aria-expanded`,
      `role="menu"`/`menuitem`. 2. `WeatherItem` — accent-colored 20px lucide icon + 16px label
      (`rgba(0,0,0,.7)`), `1px rgba(0,0,0,.05)` row borders; hover/focus
      row bg `#f8f9fa` + 4px left accent bar in the item's color
      (fade-in 0.3s). 3. `DemoSection` — centered "Dropdown #03" heading (28px, black,
      Poppins, `mb-5 pb-md-4` equivalent) + centered weather dropdown
      demo. 4. `Footer` — repo-standard minimal footer with Component Dock credit
      link (see `apps/mosaic/src/components/Footer.tsx` pattern). 5. Repo-standard dark-mode toggle on the page shell, if consistent
      with the current apps (demo has none — keep it subtle).
- [ ] Theme tokens in `@theme`: `--color-brand: #3e64ff`,
      `--color-brand-hover: #5878ff`, accents `#f9e090` (sunny),
      `#5edfff` (rainy), `#4d80e4` (cloudy), `#ff8080` (storm), page bg
      `#fafafa`, heading `#000`, item text `rgba(0,0,0,.7)`.
- [ ] Poppins Google Font `<link>` in index.html.
- [ ] Icons via `lucide-react`: Sun, CloudRain, Cloud, CloudLightning. No
      images at all (pure UI demo).
- [ ] Verify: `scripts/verify-app.sh skycast` (typecheck + lint + 100%
      coverage + build). Then push branch, open PR, squash-merge immediately
      (`gh pr merge --squash --delete-branch`).
- [ ] After merge: mark TEMPLATES.md line 756 (Dropdown 03) `[x]` with
      Surge URL `https://skycast.free.componentdock.com` + homepage, run
      `npm run readme:status`, commit + push. Verify curl the Surge URL.
