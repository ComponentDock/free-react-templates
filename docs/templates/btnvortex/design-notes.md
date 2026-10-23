# Btnvortex — Design Notes

Reference: **Bootstrap Buttons 14** — `https://colorlib.com/wp/template/bootstrap-buttons-14/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-buttons-14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-14.jpg  
Shipped: https://btnvortex.free.componentdock.com

BtnVortex is a modern button showcase template featuring vortex gradient buttons, neon/glow buttons, 3D depth buttons, and an interactive playground customizer. It demonstrates Bootstrap-style button variants recreated with Tailwind CSS and React.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**

## Design tokens (`apps/btnvortex/src/index.css` `@theme`)

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
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `SolidButtons` | Vortex Gradient Buttons | see fidelity note below |
| 4 | `OutlineButtons` | Neon and Glow Buttons | see fidelity note below |
| 5 | `ShapeVariants` | — | no dedicated spec block |
| 6 | `SizesAndStates` | — | no dedicated spec block |
| 7 | `IconButtons` | 3D Depth Buttons | see fidelity note below |
| 8 | `Playground` | Interactive Playground | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The template SHALL display a navigation bar with brand title, section links, a theme toggle (light/dark), and a call-to-action button.

### `Hero`
The template SHALL display a hero section with a catchy header, subtitle, and action buttons introducing the button collection.

### `SolidButtons`
The template SHALL display a section of gradient-styled buttons with smooth hover transitions and glow effects.

### `OutlineButtons`
The template SHALL display neon-bordered and glowing button styles.

### `ShapeVariants`
*anchors only* — Pill &amp; Square Radii · Buttons with rounded-full pill shape and sharp-edged square shape. · Pill Buttons · Square Buttons

### `SizesAndStates`
*anchors only* — Sizes &amp; States · Small, medium, and large buttons, plus active, disabled, and loading states. · Sizes · Small · Medium · Large

### `IconButtons`
The template SHALL display buttons with realistic 3D elevation and active push states.

### `Playground`
The template SHALL provide a live customizer where users can tweak button text, variant, size, and rounded corners, and copy the generated React/Tailwind code.

### `Footer`
The template SHALL display a footer linking to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/btnvortex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnvortex/public/CNAME` = `btnvortex.free.componentdock.com`
  and the package `homepage` = `https://btnvortex.free.componentdock.com`.
