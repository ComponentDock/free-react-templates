# Cartwell — Design Notes

Reference: **Dropdown 05** — `https://colorlib.com/wp/template/dropdown-05/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/dropdown-05/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-05.jpg  
Shipped: https://cartwell.free.componentdock.com

Provide a reusable cart dropdown menu component for eCommerce websites. When clicked, a cart icon reveals a dropdown panel with product items, quantity controls, pricing, and checkout actions.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/cartwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e74c3c` | brand |
| `--color-brand-hover` | `#c0392b` | brand hover |
| `--color-bg-page` | `#f8f9fa` | bg page |
| `--color-bg-card` | `#ffffff` | bg card |
| `--color-text-body` | `#333333` | text body |
| `--color-text-muted` | `#999999` | text muted |
| `--color-border` | `#e9ecef` | border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CartDropdown` | Cart dropdown panel | see fidelity note below |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `CartDropdown`
The dropdown panel SHALL display cart items with product details, quantity controls, subtotals, and action buttons.

### `Footer`
*anchors only* — Cartwell · Cart Dropdown Menu · Component Dock

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
- **Provenance ban.** No file under `apps/cartwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cartwell/public/CNAME` = `cartwell.free.componentdock.com`
  and the package `homepage` = `https://cartwell.free.componentdock.com`.
