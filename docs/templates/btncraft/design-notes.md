# Btncraft — Design Notes

Reference: **Bootstrap Buttons 01** — `https://colorlib.com/wp/template/bootstrap-buttons-01/`  
Live preview: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-01/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-01.jpg  
Shipped: https://btncraft.free.componentdock.com

Recreation of ColorLib **Bootstrap Buttons 01** (`https://colorlib.com/wp/template/bootstrap-buttons-01/`). Note: The live preview URL returned 404, so replication fidelity is based on the official ColorLib screenshot and standard modern Bootstrap design principles. Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript · Lucide icons.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**

## Design tokens (`apps/btncraft/src/index.css` `@theme`)

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
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero & Introduction | see fidelity note below |
| 3 | `SolidButtons` | Icon Buttons | see fidelity note below |
| 4 | `OutlineButtons` | Outline Button Variants | see fidelity note below |
| 5 | `ShapeVariants` | Solid Button Variants | see fidelity note below |
| 6 | `SizesAndStates` | Sizes & States | see fidelity note below |
| 7 | `IconButtons` | — | no dedicated spec block |
| 8 | `Playground` | Interactive Playground | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · GitHub · Mobile navigation

### `Hero`
The hero section SHALL feature a compelling headline, subtitle, and quick action buttons.

### `SolidButtons`
The Icon Buttons section SHALL display buttons augmented with Lucide icons.

### `OutlineButtons`
The Outline Variants section SHALL display transparent background buttons with solid borders that fill on hover.

### `ShapeVariants`
The Solid Variants section SHALL display standard solid buttons across all semantic color intents.

### `SizesAndStates`
The Sizes & States section SHALL display small, medium, and large buttons, plus active, disabled, and loading states.

### `IconButtons`
*anchors only* — Icon Buttons · Buttons augmented with Lucide icons for leading and trailing positions.

### `Playground`
The Interactive Playground SHALL allow users to customize button variant, size, shape, and state, and copy generated JSX code.

### `Footer`
The footer SHALL contain copyright information and a mandatory link to Component Dock.

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
- **Provenance ban.** No file under `apps/btncraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btncraft/public/CNAME` = `btncraft.free.componentdock.com`
  and the package `homepage` = `https://btncraft.free.componentdock.com`.
