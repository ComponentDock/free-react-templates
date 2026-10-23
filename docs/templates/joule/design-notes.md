# Joule — Design Notes

Reference: **Electro** — `https://colorlib.com/wp/template/electro/`  
Live preview: `https://preview.colorlib.com/theme/electro/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/electro-free-ecommerce-template.jpg  
Shipped: https://joule.free.componentdock.com

Joule is a single-page eCommerce shop template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Electro" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;700**

## Design tokens (`apps/joule/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#d10024` | brand |
| `--color-brand-secondary` | `#ef233c` | brand secondary |
| `--color-dark-bg` | `#15161d` | dark bg |
| `--color-darker-bg` | `#1e1f29` | darker bg |
| `--color-light-grey` | `#e4e7ed` | light grey |
| `--color-footer-text` | `#b9babc` | footer text |
| `--color-muted` | `#8d99ae` | muted |
| `--color-body-text` | `#2b2d42` | body text |
| `--color-body-bg` | `#fbfbfc` | body bg |
| `--color-primary-50` | `#fef0f3` | primary 50 |
| `--color-primary-100` | `#fdd8de` | primary 100 |
| `--color-primary-200` | `#fbb0bc` | primary 200 |
| `--color-primary-300` | `#f87d95` | primary 300 |
| `--color-primary-400` | `#f34c6c` | primary 400 |
| `--color-primary-500` | `#d10024` | primary 500 |
| `--color-primary-600` | `#be0020` | primary 600 |
| `--color-primary-700` | `#9b001a` | primary 700 |
| `--color-primary-800` | `#790015` | primary 800 |
| `--color-primary-900` | `#57000f` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Montserrat — Google Fonts loaded via <link> in index.html. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopHeader` | Top header bar | see fidelity note below |
| 2 | `MainHeader` | Main header with search | see fidelity note below |
| 3 | `Navigation` | Navigation bar | see fidelity note below |
| 4 | `NewProducts` | Product carousel / New Products section | see fidelity note below |
| 5 | `HotDeal` | Hot deal section | see fidelity note below |
| 6 | `TopSelling` | Top Selling section | see fidelity note below |
| 7 | `Newsletter` | Newsletter signup | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopHeader`
The system SHALL render a thin top header bar with contact information on the left and account links on the right.

### `MainHeader`
The system SHALL render a main header row with a logo, a search bar with category dropdown, and cart/wishlist actions.

### `Navigation`
The system SHALL render a horizontal navigation bar with category links.

### `NewProducts`
The system SHALL render a product carousel or grid section showing "New Products" with tabbed category filters.

### `HotDeal`
The system SHALL render a hot-deal promotional section with a countdown timer.

### `TopSelling`
The system SHALL render a "Top Selling" product grid with category tabs, matching the New Products layout.

### `Newsletter`
The system SHALL render a newsletter signup section with an email input and subscribe button.

### `Footer`
The system SHALL render a four-column footer with company info, categories, information links, and service links, plus a bottom copyright bar.

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
- **Provenance ban.** No file under `apps/joule/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/joule/public/CNAME` = `joule.free.componentdock.com`
  and the package `homepage` = `https://joule.free.componentdock.com`.
