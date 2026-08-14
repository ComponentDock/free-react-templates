# Palette (ColorLib Bootstrap Buttons 01) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Palette** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 01"). Implementation
> ships on `feat/template-palette` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 01" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-01/). TEMPLATES.md
  row: line 662 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-01`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-01/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-01/` (HTTP 200,
  25.7KB HTML, `<title>Button 01</title>`; the nested `/bb/` subpath was
  discovered by scraping the ColorLib template page, which links to it).
  Stylesheets: `css/style.css` (230KB — Bootstrap 4 + ftco custom button
  rules; the token source), `css/ionicons.min.css` (glyph icons). Screenshot
  (`bootstrap-buttons-01.jpg`, 1200×972) browser-verified 2026-08-14: white
  page, centered vertical stack of sections — big bold black "Button #01"
  title, grey 16px subheadings, blue solid/outline/pill button rows, size
  rows, a 7-color solid + outline row, icon buttons, brand-colored social
  buttons. No navbar, no hero, no images, no footer.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-01/`. Mention this in the PR
  description.
- **⚠ Not a classic page template:** there is NO navbar, NO hero, NO
  imagery, NO footer in the original — the entire page is a centered
  single-column button showcase. Fidelity = the section order, the exact
  button variants/labels, the palette, and the paddings/radii. The only
  added element is the mandatory Component Dock attribution footer.
- **Structure observed (1:1):** `body` (white, `border-top: 2px solid
#dee2e6`) → `section.ftco-section#buttons` (padding `7em 0`) →
  `div.container` → `div.col-md-12` blocks, each: `h2.heading-section`
  (32px `#212529`; page title "Button #01" has NO `<small>`; block
  subheadings are wrapped in `<small>` = 16px grey) + rows of buttons
  (`.row`/`.col-md-12` / `mb-3`/`mb-4` gaps). Block order: Button #01 →
  Pick your style → Pick your size (2 rows: solid + outline × sm/reg/lg) →
  Pick your color (2 rows: 7 solid + 7 outline) → Buttons with icons →
  Social Buttons (5 brands × 3 variants) → Links (7 btn-link) → Disabled
  Buttons (2 large disabled) → Buttons with Dropdown (3 dropdowns) →
  Buttons Groups (5 segmented pairs) → Checkboxes Colors (6 custom
  checkboxes) → Radio Buttons Colors (6 custom radios) → Block Level
  Buttons (full-width). NO footer — add Component Dock.
- **Design tokens (from `style.css`):** page `#fff` (+2px `#dee2e6` top
  border); title `#212529` 32px; primary `#3e64ff`; success `#94aa2a`;
  danger `#f0134d`; warning `#f1bc31`; info `#64c4ed`; light `#f8f9fa`;
  dark `#343a40`; social fb `#4f69a2` / twitter `#69b6f0` / linkedin
  `#2884ba` / pinterest `#d03940` / dribbble `#ea6294`; solid-button text
  `#fff` (warning/light `#212529`); `.btn` base padding `0.375rem 0.75rem`,
  font-size `1rem`, line-height `1.5`, radius `0.25rem`, 1px transparent
  border, transition `0.15s ease-in-out`; `.btn-sm` `0.25rem 0.5rem` /
  `0.875rem` / radius `0.2rem` (custom: 5px 10px / 12px); `.btn-lg`
  `0.5rem 1rem` / `1.25rem` / radius `0.3rem` (custom: 17px 24px / 16px);
  `.btn-round` radius **40px** (pill); `.btn-block` width 100% + `margin-top
0.5rem`; font **Poppins** (`"Poppins", Arial, sans-serif` — the ftco
  theme family).
- **Design approach:** flat white kit page — pure typography + button
  variants. Every showcase block is a heading + button row(s); spacing
  rhythm from the reference's `mb-3`/`mb-4` gaps and `7em 0` section
  padding (scale down on mobile). The brand identity is the custom ftco
  palette (NOT the Bootstrap defaults — the ftco overrides replace them).
- **Icons:** original uses Ionicons glyphs (hearts/checks on icon buttons,
  brand glyphs on social buttons). Implement with `lucide-react`; where a
  brand glyph is unavailable (e.g. Pinterest/Dribbble), use the closest
  lucide icon or a small letter mark — keep icon + label centered.
- **Copy:** keep the exact reference labels ("Button #01", "Pick your
  style/size/color", "Default/Outline/Round", size + color names, "Share -
  8.2k", "Connect with Twitter", "Pin it - 1k", "Find us on Dribbble",
  "Primary link…Dark link", "Dropdown button", "Action / Another action /
  Something else here", checkbox/radio color names, "Block Level
  Buttons").

## Implementation tasks

1. **Scaffold** — `apps/palette` from the simplest existing app; rename
   package to `@free-react-templates/palette`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `palette.free.componentdock.com`,
   `"homepage"` = `https://palette.free.componentdock.com`.
2. **Theme tokens** — add the palette to `@theme`: `#3e64ff` `#94aa2a`
   `#f0134d` `#f1bc31` `#64c4ed` `#f8f9fa` `#343a40` `#212529` `#ffffff`
   - social `#4f69a2` `#69b6f0` `#2884ba` `#d03940` `#ea6294`; pill radius
     `40px`; Poppins Google Fonts `<link>` in `index.html` (weights 300–700).
3. **Components** (per block, TDD — tests first):
   - `ShowcaseBlock` — shared heading (title + optional `<small>`
     subheading, matching the 32px/16px hierarchy) + children.
   - `ButtonShowcase` — the "Pick your style/size/color" + icon rows
     (solid / outline / round variants; sm/reg/lg; 7-color solid+outline;
     icon+label). Reuse `packages/ui` Button/ButtonLink + `cn` everywhere
     (knip gate).
   - `SocialButtons` — 5 brand rows × 3 variants with lucide brand-ish
     icons + share-count labels.
   - `LinkButtons` / `DisabledButtons` — link-style + disabled rows
     (`aria-disabled`, no interaction).
   - `DropdownButtons` — 3 working dropdowns (open/close, `aria-haspopup`,
     `aria-expanded`, `role="menu"`, close on outside click + Escape).
   - `ButtonGroups` — 5 segmented pairs (large Primary+Outline Primary,
     medium Success/Danger/Warning/Info + outline).
   - `ToggleRows` — custom colored checkbox rows + radio rows (palette
     accents, checked defaults, Disabled row muted).
   - `BlockButtons` — full-width stacked buttons.
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: "Button #01" title → 12 showcase
   blocks → footer.
5. **Verify** — `scripts/verify-app.sh palette` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Bootstrap Buttons 01" row (line 662,
   Bootstrap Buttons) `[~]`→`[x]` + surge URL + `npm run readme:status`;
   PR description must list source template, the REAL preview URL
   (`preview.colorlib.com/theme/bb/bootstrap-buttons-01/` — note the `/bb/`
   subpath + default-URL 404 gotcha), the design tokens, the ftco palette
   (NOT Bootstrap defaults), the no-navbar/no-hero/no-footer structure, and
   the Component Dock footer addition.
