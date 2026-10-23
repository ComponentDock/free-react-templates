# Kaleido — Design Notes

Reference: **Jellyfish Ui Kit** — `https://colorlib.com/wp/template/jellyfish-ui-kit/`  
Live preview: `https://preview.colorlib.com/theme/jellyfish-ui-kit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jellyfish-ui-kit.jpg  
Shipped: https://kaleido.free.componentdock.com

A clean, elegant UI kit showcase template. The original features an underwater jellyfish hero image with centered title, followed by component showcase sections (color palette, typography, buttons). The recreation uses an ocean-blue color scheme with an underwater aesthetic.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Maven Pro**, **Maven Pro:wght@400;500;700;900**

## Design tokens (`apps/kaleido/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0ea5e9` | Ocean-blue palette — the original's underwater aesthetic. |
| `--color-primary-50` | `#f0f9ff` | primary 50 |
| `--color-primary-100` | `#e0f2fe` | primary 100 |
| `--color-primary-200` | `#bae6fd` | primary 200 |
| `--color-primary-300` | `#7dd3fc` | primary 300 |
| `--color-primary-400` | `#38bdf8` | primary 400 |
| `--color-primary-500` | `#0ea5e9` | primary 500 |
| `--color-primary-600` | `#0284c7` | primary 600 |
| `--color-primary-700` | `#0369a1` | primary 700 |
| `--color-primary-800` | `#075985` | primary 800 |
| `--color-primary-900` | `#0c4a6e` | primary 900 |
| `--color-primary-950` | `#082f49` | primary 950 |
| `--color-secondary` | `#6c757d` | Palette swatch colors |
| `--color-success` | `#28a745` | success |
| `--color-info` | `#17a2b8` | info |
| `--color-warning` | `#ffc107` | warning |
| `--color-danger` | `#dc3545` | danger |
| `--color-indigo` | `#6f42c1` | indigo |
| `--color-dark` | `#343a40` | dark |
| `--color-teal` | `#20c997` | teal |
| `--font-display` | `'Maven Pro', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Maven Pro', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `ColorPalette` | Color palette showcase | see fidelity note below |
| 4 | `Typography` | Typography showcase | see fidelity note below |
| 5 | `Buttons` | Button showcase | see fidelity note below |
| 6 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Kaleido · Colors · Typography · Buttons

### `Hero`
The template SHALL display a full-viewport hero section with an ocean-blue gradient background, centered heading, subtitle, and decorative jellyfish SVG elements.

### `ColorPalette`
The template SHALL display a 3x3 grid of color swatches showing the design token palette: Primary, Secondary, Success, Info, Warning, Danger, Indigo, Dark, Teal.

### `Typography`
The template SHALL display heading levels h1 through h6 plus a body text paragraph to demonstrate the type scale.

### `Buttons`
The template SHALL display button variants (primary, outline, ghost, danger) and sizes (sm, md, lg) using the shared Button component.

### `Footer`
The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/kaleido/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kaleido/public/CNAME` = `kaleido.free.componentdock.com`
  and the package `homepage` = `https://kaleido.free.componentdock.com`.
