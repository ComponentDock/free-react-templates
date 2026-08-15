# Menubar (ColorLib Dropdown 01) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-menubar`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 01" — first of the "Bootstrap Dropdowns
  (20)" series (source: https://colorlib.com/wp/template/dropdown-01/).
  TEMPLATES.md has ONE copy (line 754).
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/bootstrap/dropdown-01/`
  (HTTP 200, 13.2 KB). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-01/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet: `css/style.css`
  (221 KB ftco-style Bootstrap 4 theme), libs: jquery, popper,
  bootstrap.min.js, ionicons. Google Font **Poppins**.
- **Screenshot:** `dropdown-01.jpg` (1200×972, viewed in browser) — clean
  white page, centered dark heading "Dropdown #01", four columns each with a
  small gray label and two solid blue buttons with white text and carets;
  menus are CLOSED in the screenshot, so menu styling came from CSS. The
  demo brands itself "Dropdown #01"; recreation uses the NEW name
  **Menubar**.
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body `#fafafa`, Poppins 14px, line-height 1.8,
  color gray. Section `padding: 7em 0`; container max-width 1140px.
  Heading `.heading-section` 28px #000, small 18px. Buttons `btn-primary`
  `#0075f6` (Bootstrap default `#007bff`), hover `#005dc3`; `.btn` padding
  12px 16px, radius 5px, 14px, weight 400, shadow
  `0 10px 20px -6px rgba(0,0,0,.12)`. Menu `.dropdown-menu`: border none,
  bg #fff, `overflow: hidden`, shadow `0 10px 34px -20px rgba(0,0,0,.41)`;
  `.dropdown-item` 14px rgba(0,0,0,.7), padding 10px 0; hover/active
  background `#0075f6`, color #fff.
- **Structure (1:1, section order):**
  1. `section.ftco-section` → `div.container` (single section, no header).
  2. `div.row` → `div.col-md-12.text-center`: `h2.heading-section.mb-5.pb-md-4`
     "Dropdown #01".
  3. `div.row` of four `div.col-md-3` columns, each:
     - `h2.heading-section.mb-4` + `<br>` + `<small>` label: "Dropdown
       Variation" / "Dropup Variation" / "Dropright Variation" /
       "Dropleft Variation".
     - `.btn-group` A: `button.btn.btn-primary.dropdown-toggle` — "Dropdown"
       / "Dropup" / "Dropright" / "Dropleft".
     - `.btn-group` B (split): `button.btn.btn-primary` "Split Dropdown" /
       "Split dropup" / "Split dropright" / "Split dropleft" +
       `button.btn.btn-primary.dropdown-toggle.dropdown-toggle-split` with
       `<span class="sr-only">Toggle Dropdown</span>`.
     - `.dropdown-menu` (one per group): `a.dropdown-item` "Dropdown" /
       "Action", `a.dropdown-item.active` "Active", `a.dropdown-item`
       "Something else here", `div.dropdown-divider`, `a.dropdown-item`
       "Separated link". Direction: no class (down) / `.dropup` /
       `.dropright` / `.dropleft` on the group.
  4. Footer: source has NONE — add the repo-standard minimal footer with the
     mandatory `https://www.componentdock.com/` ("Component Dock") credit
     link (monorepo conventions; never ColorLib).
- Demo copy is Bootstrap boilerplate — keep the same kind of items
  (action item, active item, extra item, divider, separated link) but the
  exact labels are free to paraphrase.

## Tasks / todo outline

- [ ] Spec-first: `openspec/specs/template-menubar/spec.md` already on main
      (prep). Open a `feat/template-menubar` branch.
- [ ] Copy the simplest existing app (e.g. `apps/crumb` or `apps/petal`),
      rename package to `@free-react-templates/menubar`, run `npm install`
      at root so `package-lock.json` registers the workspace (grep
      `free-react-templates/menubar`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap).
- [ ] TDD: write tests first per spec requirement, then implement: 1. `DropdownMenu` — reusable dropdown: toggle button + menu panel;
      directions `down | up | right | left`; items (label, active),
      divider; opens on click, closes on outside click / Escape, one
      open at a time; ARIA `aria-haspopup="menu"`, dynamic
      `aria-expanded`, `role="menu"`/`menuitem`. 2. `SplitButton` — main action button + separate caret toggle with
      sr-only label ("Toggle Dropdown"); only the caret opens the menu. 3. `DemoSection` — centered "Dropdown #01" heading + the four
      variation columns (grid-cols-1 md:grid-cols-4), each rendering
      plain + split groups in the right direction. 4. `Footer` — repo-standard minimal footer with Component Dock credit
      link (see `apps/mosaic/src/components/Footer.tsx` pattern). 5. Repo-standard dark-mode toggle on the page shell, if consistent
      with the current apps (demo has none — keep it subtle).
- [ ] Theme tokens in `@theme`: `--color-brand: #0075f6`,
      `--color-brand-dark: #005dc3`, page bg `#fafafa`, heading `#000`,
      muted `gray`/`#6c757d`.
- [ ] Poppins Google Font `<link>` in index.html.
- [ ] Carets via `lucide-react` (ChevronDown / ChevronUp / ChevronRight /
      ChevronLeft); no images needed (picsum not required — pure UI demo).
- [ ] Verify: `scripts/verify-app.sh menubar` (typecheck + lint + 100%
      coverage + build). Then push branch, open PR, squash-merge immediately
      (`gh pr merge --squash --delete-branch`).
- [ ] After merge: mark TEMPLATES.md line 754 (Dropdown 01) `[x]` with
      Surge URL `https://menubar.free.componentdock.com` + homepage, run
      `npm run readme:status`, commit + push. Verify curl the Surge URL.
