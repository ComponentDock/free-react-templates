# Btnstack — Design Notes

Reference: **Bootstrap Buttons 03** — `https://colorlib.com/wp/template/bootstrap-buttons-03/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-buttons-03/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-03.jpg  
Shipped: https://btnstack.free.componentdock.com

BtnStack is a single-page button showcase template demonstrating solid and outline Bootstrap 4 button variants across multiple colors, sizes, shapes, and states, with an interactive playground for live preview.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700;800**

## Design tokens (`apps/btnstack/src/index.css` `@theme`)

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

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar & Header | see fidelity note below |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `SolidButtons` | Solid Buttons Showcase | see fidelity note below |
| 4 | `OutlineButtons` | Outline Buttons Showcase | see fidelity note below |
| 5 | `ShapeVariants` | Size Variants | see fidelity note below |
| 6 | `SizesAndStates` | — | no dedicated spec block |
| 7 | `IconButtons` | — | no dedicated spec block |
| 8 | `Playground` | Interactive Playground | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The template SHALL display a sticky navigation bar with the brand name "BtnStack", navigation links (Home, Sizes, Solid, Outline, Playground), and a Component Dock link. The hero section SHALL show the heading "#03 — Solid & Outline Bootstrap 4 Buttons" with subtitle and quick-jump action buttons.

### `Hero`
*anchors only* — Modern Bootstrap Button Library · BtnSpark — Modern Bootstrap Button Showcase · Explore Showcase · Try Playground

### `SolidButtons`
The template SHALL display a grid of solid color button variants including Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, and Blue Gray.

### `OutlineButtons`
The template SHALL display a grid of outline color variants with transparent backgrounds and colored borders that fill on hover.

### `ShapeVariants`
The template SHALL showcase Large, Medium, and Small button sizes for both solid and outline styles with appropriate padding and text scaling.

### `SizesAndStates`
*anchors only* — Sizes &amp; States · Small, medium, and large buttons, plus active, disabled, and loading states. · Sizes · Small · Medium · Large

### `IconButtons`
*anchors only* — Icon Buttons · Buttons augmented with Lucide icons for leading and trailing positions.

### `Playground`
The template SHALL provide an interactive playground where users can select style (solid/outline), size, color variant, roundedness, and icon options, with a live preview and JSX snippet copy functionality.

### `Footer`
The template SHALL display a branded footer with a link to https://www.componentdock.com/ labeled "Component Dock".

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
- **Provenance ban.** No file under `apps/btnstack/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnstack/public/CNAME` = `btnstack.free.componentdock.com`
  and the package `homepage` = `https://btnstack.free.componentdock.com`.
