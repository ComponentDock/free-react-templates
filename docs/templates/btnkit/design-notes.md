# Btnkit — Design Notes

Reference: **Bootstrap Buttons 13** — `https://colorlib.com/wp/template/bootstrap-buttons-13/`  
Live preview: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-13/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-13.jpg  
Shipped: https://btnkit.free.componentdock.com

An UI Component Showcase & Buttons Gallery template with navigation header, hero section and solid buttons showcase sections. Recreation of ColorLib **Bootstrap Buttons 13** (https://colorlib.com/wp/template/bootstrap-buttons-13/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**

## Design tokens (`apps/btnkit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#0d6efd` | primary |
| `--color-primary-hover` | `#0b5ed7` | primary hover |
| `--color-secondary` | `#6c757d` | secondary |
| `--color-secondary-hover` | `#5c636a` | secondary hover |
| `--color-success` | `#198754` | success |
| `--color-success-hover` | `#157347` | success hover |
| `--color-danger` | `#dc3545` | danger |
| `--color-danger-hover` | `#bb2d3b` | danger hover |
| `--color-warning` | `#ffc107` | warning |
| `--color-warning-hover` | `#ffca2c` | warning hover |
| `--color-info` | `#0dcaf0` | info |
| `--color-info-hover` | `#31d2f4` | info hover |
| `--color-light` | `#f8f9fa` | light |
| `--color-dark` | `#212529` | dark |
| `--color-dark-hover` | `#343a40` | dark hover |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/btnkit/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `SolidButtons` | — | no dedicated spec block |
| 4 | `OutlineButtons` | — | no dedicated spec block |
| 5 | `ShapeVariants` | — | no dedicated spec block |
| 6 | `SizesAndStates` | — | no dedicated spec block |
| 7 | `IconButtons` | — | no dedicated spec block |
| 8 | `Playground` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · GitHub · Mobile navigation

### `Hero`
*anchors only* — Modern Bootstrap Button Library · BtnKit — Modern Bootstrap Button Showcase · Explore Showcase · Try Playground

### `SolidButtons`
*anchors only* — Solid Variants · Standard solid buttons across all semantic color intents.

### `OutlineButtons`
*anchors only* — Outline Variants · Transparent background with solid border that fills on hover.

### `ShapeVariants`
*anchors only* — Pill &amp; Square Radii · Buttons with rounded-full pill shape and sharp-edged square shape. · Pill Buttons · Square Buttons

### `SizesAndStates`
*anchors only* — Sizes &amp; States · Small, medium, and large buttons, plus active, disabled, and loading states. · Sizes · Small · Medium · Large

### `IconButtons`
*anchors only* — Icon Buttons · Buttons augmented with Lucide icons for leading and trailing positions.

### `Playground`
*anchors only* — Interactive Playground · Customize variant, size, shape, and state. Copy the generated JSX code. · Variant · Size · Shape · Disabled

### `Footer`
*anchors only* — BtnKit · Showcase · Variants · Sizes · Playground · Component Dock

## Deltas from the reference

- Photographs are deterministic placeholders (`picsum.photos/seed/…`); no source asset is copied.
- Icon glyphs come from `lucide-react`, not the source's icon font.
- Copy is paraphrased to the same kind of content (headline + subtext + CTA, card title + blurb + link).
- The source's credit bar is replaced by the Component Dock credit (see delivery contract).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/btnkit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnkit/public/CNAME` = `btnkit.free.componentdock.com`
  and the package `homepage` = `https://btnkit.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Evidence: https://preview.colorlib.com/theme/bb/bootstrap-buttons-13/ — HTTP 200 on 2026-10-23; measured `css/style.css` (26,074 bytes). Title served: "Button 03".

- Hex census: `#007bff` 14, `#6c757d` 13, `#bd83ce` 10, `#3e64ff` 9, `#8105d8` 9, `#52de97` 9, `#343a40` 6, `#212529` 5, `#0056b3` 2 (count = literal occurrences in the sheet).
- Typefaces: Body: `Poppins` + Arial/Bootstrap 4 stack; Headings: `Poppins` 600/700; Icons: `Ionicons`.
- Radii: `0.25rem` (2), `2px` (1), `100%` (2 — round radio/checkbox), `40px` (1 — social pill).
- Section order (shipped): `Navbar -> Hero -> SolidButtons -> OutlineButtons -> ShapeVariants -> SizesAndStates -> IconButtons -> Playground -> Footer`.

### Deltas measured against the shipped app

- The spec's older token prose ("dark mode palette", `bg-slate-950` / `bg-indigo-600` / `bg-emerald-600` / `bg-rose-600`) is APP-derived, not reference-derived: `apps/btnkit/src/App.tsx` renders `bg-white dark:bg-gray-950` and its `@theme` carries the stock Bootstrap 5 palette (`#0d6efd`, `#198754`, `#dc3545`, `#ffc107`). The reference page is light and its own accents are `#bd83ce` / `#3e64ff` / `#8105d8` / `#52de97`.
- None of those four reference accent families is tokenized in `apps/btnkit`; only the Bootstrap defaults are.
