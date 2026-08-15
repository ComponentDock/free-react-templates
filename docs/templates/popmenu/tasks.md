# Popmenu (ColorLib Dropdown 02) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-popmenu`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 02" — second of the "Bootstrap Dropdowns
  (20)" series (source: https://colorlib.com/wp/template/dropdown-02/).
  TEMPLATES.md has ONE copy (line 755). Series sibling: Dropdown 01 was
  prepped as **Menubar** (see `docs/templates/menubar/`).
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/bootstrap/dropdown-02/`
  (HTTP 200, 9.4 KB). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-02/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet: `css/style.css`
  (221 KB ftco-style Bootstrap 4 theme), libs: jquery, popper,
  bootstrap.min.js, ionicons 4.5.6. Google Font **Poppins** (300/400/500).
- **Screenshot:** `dropdown-02.jpg` (1200×972, viewed in browser) — white
  page, centered dark heading "Dropdown #02", circular avatar with white
  ring, and the profile menu OPEN: white rounded card, mint icon strip on
  the left of each row, dark labels; soft shadow. The screenshot shows the
  menu in its default (open) state — matches CSS exactly.
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body bg `#fff` (screenshot's gray is the
  ui-preview chrome), Poppins base. Section `padding: 7em 0`; container
  max-width 1140px. Heading `.heading-section` 28px #000, `mb-5 pb-md-4`.
  Avatar `.btn-img.img.rounded-circle`: 100×100px, radius 50%, cover photo,
  white ring, shadow `0 10px 34px -20px rgba(0,0,0,.41)`. Menu
  `.btn-group .dropdown-menu`: width 280px, border none, bg #fff, padding 0,
  shadow `0 10px 34px -20px rgba(0,0,0,.41)`, centered (`left: 50%` +
  `translateX(-50%)`), `margin-top: 120px`, white caret `::after` triangle
  (`border-width: 0 .7em .8em .7em`, `border-bottom-color: #fff`, top
  `-.7em`). Items: 16px `rgba(0,0,0,.7)`, weight 400, `padding: 0 30px 0 0`;
  each item = `div.icon` 60×60px mint `#a3f7bf` + `mr-3` gap + label; icon
  span 24px white. Hover/focus: row bg `#a3f7bf`, color #fff; icon bg
  `#74f39e`.
- **Structure (1:1, section order):**
  1. `section.ftco-section` → `div.container` (single section, no header).
  2. `div.row` → `div.col-md-12.text-center`: `h2.heading-section.mb-5.pb-md-4`
     "Dropdown #02".
  3. `div.row.justify-content-center` → `div.col-md-6.d-flex.justify-content-center`:
     `.btn-group`:
     - Trigger: `a.btn-img.img.dropdown-toggle.rounded-circle`
       (`background-image: images/person_1.jpg`, `data-toggle="dropdown"`,
       `aria-haspopup="true"`, `aria-expanded="false"`).
     - `.dropdown-menu` (280px, centered, caret on top): six
       `a.dropdown-item.d-flex.align-items-center`, each `div.icon` (60×60,
       mint, `mr-3`) + ionicons span + label:
       1. Messages (`ion-ios-mail`), 2. Favorites (`ion-ios-heart`),
       2. Add People (`ion-ios-person-add`), 4. Settings (`ion-ios-settings`),
       3. Downloads (`ion-ios-cloud-download`), 6. Log Out (`ion-ios-power`).
  4. Footer: source has NONE — add the repo-standard minimal footer with the
     mandatory `https://www.componentdock.com/` ("Component Dock") credit
     link (monorepo conventions; never ColorLib).
- Demo copy is Bootstrap boilerplate — keep the same kinds of items
  (action labels + icon types) but exact labels are free to paraphrase.

## Tasks / todo outline

- [ ] Spec-first: `openspec/specs/template-popmenu/spec.md` already on main
      (prep). Open a `feat/template-popmenu` branch.
- [ ] Copy the simplest existing app (e.g. `apps/crumb` or `apps/petal`),
      rename package to `@free-react-templates/popmenu`, run `npm install`
      at root so `package-lock.json` registers the workspace (grep
      `free-react-templates/popmenu`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap).
- [ ] TDD: write tests first per spec requirement, then implement: 1. `ProfileDropdown` — avatar trigger button (100px rounded-full,
      picsum cover image seeded per template, white ring, reference
      shadow) + menu panel (280px card, centered below avatar, white
      caret on top center); opens on avatar click, closes on outside
      click / Escape / item select, one open at a time; ARIA
      `aria-haspopup="menu"`, dynamic `aria-expanded`,
      `role="menu"`/`menuitem`. 2. `MenuItem` — 60×60px mint icon circle (white lucide icon) + 16px
      label; hover/focus flips row to mint `#a3f7bf` white text and icon
      circle to `#74f39e`. 3. `DemoSection` — centered "Dropdown #02" heading (28px, black,
      Poppins, `mb-5 pb-md-4` equivalent) + centered avatar/menu demo. 4. `Footer` — repo-standard minimal footer with Component Dock credit
      link (see `apps/mosaic/src/components/Footer.tsx` pattern). 5. Repo-standard dark-mode toggle on the page shell, if consistent
      with the current apps (demo has none — keep it subtle).
- [ ] Theme tokens in `@theme`: `--color-brand: #a3f7bf`,
      `--color-brand-dark: #74f39e`, page bg `#fff`, heading `#000`,
      item text `rgba(0,0,0,.7)`.
- [ ] Poppins Google Font `<link>` in index.html.
- [ ] Icons via `lucide-react`: Mail, Heart, UserPlus, Settings,
      Download (or CloudDownload), Power. No images beyond the picsum
      avatar seed (pure UI demo).
- [ ] Verify: `scripts/verify-app.sh popmenu` (typecheck + lint + 100%
      coverage + build). Then push branch, open PR, squash-merge immediately
      (`gh pr merge --squash --delete-branch`).
- [ ] After merge: mark TEMPLATES.md line 755 (Dropdown 02) `[x]` with
      Surge URL `https://popmenu.free.componentdock.com` + homepage, run
      `npm run readme:status`, commit + push. Verify curl the Surge URL.
