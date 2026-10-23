# Btnvibe — Design Notes

Reference: **Bootstrap Buttons 06** — `https://colorlib.com/wp/template/bootstrap-buttons-06/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-buttons-06/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-06.jpg  
Shipped: https://btnvibe.free.componentdock.com

Btnvibe is a bootstrap button component page. It recreates the ColorLib **Bootstrap Buttons 06** design (https://colorlib.com/wp/template/bootstrap-buttons-06/, preview: https://preview.colorlib.com/theme/bb/bootstrap-buttons-06/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**

## Design tokens (`apps/btnvibe/src/index.css` `@theme`)

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
| 1 | `Navbar` | Navigation Bar | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `SolidButtons` | Solid Buttons Section | see fidelity note below |
| 4 | `OutlineButtons` | Outline & Ghost Buttons Section | see fidelity note below |
| 5 | `ShapeVariants` | Shape & Size Variants | see fidelity note below |
| 6 | `SizesAndStates` | — | no dedicated spec block |
| 7 | `IconButtons` | — | no dedicated spec block |
| 8 | `Playground` | Interactive Playground | see fidelity note below |
| 9 | `Footer` | Component Dock Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
#### Scenario: Navigation Bar - Navbar with brand logo ("BtnVibe"), navigation links (Showcase, Outline, Shapes, Sizes, Icons, Playground), and dark mode toggle.

### `Hero`
#### Scenario: Hero Section - Engaging header presenting BtnVibe as a modern bootstrap button showcase with quick action buttons.

### `SolidButtons`
#### Scenario: Solid Buttons Section - Showcase of solid-colored button variants across standard intents.

### `OutlineButtons`
#### Scenario: Outline & Ghost Buttons Section - Showcase of transparent/outline button variants.

### `ShapeVariants`
#### Scenario: Shape & Size Variants - Rounded, pill, square, small, medium, large, and disabled state variations.

### `SizesAndStates`
*anchors only* — Sizes &amp; States · Small, medium, and large buttons, plus active, disabled, and loading states. · Sizes · Small · Medium · Large

### `IconButtons`
*anchors only* — Icon Buttons · Buttons augmented with Lucide icons for leading and trailing positions.

### `Playground`
#### Scenario: Interactive Playground - Live playground where users can customize button properties and copy snippet code.

### `Footer`
#### Scenario: Component Dock Footer - Footer linking to https://www.componentdock.com/ ("Made with Component Dock").

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
- **Provenance ban.** No file under `apps/btnvibe/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnvibe/public/CNAME` = `btnvibe.free.componentdock.com`
  and the package `homepage` = `https://btnvibe.free.componentdock.com`.
