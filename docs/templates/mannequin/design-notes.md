# Mannequin — Design Notes

Reference: **Coza Store** — `https://colorlib.com/wp/template/coza-store/`  
Live preview: `https://preview.colorlib.com/theme/cozastore/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cozastore-free-template.jpg  
Shipped: https://mannequin.free.componentdock.com

Mannequin is a single-page fashion e-commerce store template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Coza Store" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@700**, **Playfair Display**, **Poppins**

## Design tokens (`apps/mannequin/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#717fe0` | brand |
| `--color-ink` | `#222` | ink |
| `--color-ink-soft` | `#333` | ink soft |
| `--color-muted` | `#888` | muted |
| `--color-fade` | `#b2b2b2` | fade |
| `--color-body` | `#666` | body |
| `--color-loadmore` | `#e6e6e6` | loadmore |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Topbar` | Topbar and header | see fidelity note below |
| 2 | `Header` | Topbar and header | see fidelity note below |
| 3 | `HeroSlider` | Hero slider | see fidelity note below |
| 4 | `ProductGrid` | Product grid | see fidelity note below |
| 5 | `Banner` | Category banner | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |
| 7 | `CartDrawer` | — | no dedicated spec block |
| 8 | `SearchModal` | — | no dedicated spec block |
| 9 | `QuickViewModal` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Topbar`
The system SHALL render a dark utility topbar and a fixed header with the store wordmark, menu links, and icon buttons.

### `Header`
The system SHALL render a dark utility topbar and a fixed header with the store wordmark, menu links, and icon buttons.

### `HeroSlider`
The system SHALL render a full-viewport hero slider with three slides, each with a background image, a label, a serif headline, and a Shop Now pill button.

### `ProductGrid`
The system SHALL render a "New arrivals" product section with category filter buttons and a grid of product cards, each with a name, a price, and an "Add to cart" action.

### `Banner`
The system SHALL render three image banner cards with a category name, a season label, and a Shop Now link revealed on hover.

### `Footer`
The system SHALL render a dark four-column footer with link columns, a contact column, and a newsletter form, plus a copyright bar crediting Component Dock.

### `CartDrawer`
*anchors only* — dialog · Shopping cart · Close cart

### `SearchModal`
*anchors only* — dialog · Search · Close search

### `QuickViewModal`
*anchors only* — dialog · Close quick view · Size · Add to cart

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
- **Provenance ban.** No file under `apps/mannequin/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mannequin/public/CNAME` = `mannequin.free.componentdock.com`
  and the package `homepage` = `https://mannequin.free.componentdock.com`.
