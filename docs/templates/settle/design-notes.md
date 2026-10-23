# Settle — Design Notes

Reference: **Aranoz** — `https://colorlib.com/wp/template/aranoz/`  
Live preview: `https://preview.colorlib.com/theme/aranoz/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/aranoz-free-template.jpg  
Shipped: https://settle.free.componentdock.com

Settle is a single-page furniture-and-accessories e-commerce shop template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Aranoz" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/settle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff3368` | brand |
| `--color-hero` | `#ecfdff` | hero |
| `--color-paper` | `#f8fbff` | paper |
| `--color-mist` | `#f9f9ff` | mist |
| `--color-ink` | `#2a2a2a` | ink |
| `--color-body` | `#797979` | body |
| `--color-primary-400` | `#ff6b92` | Map the shared ui Button/ButtonLink primary palette to the brand pink. |
| `--color-primary-500` | `#ff4d7c` | primary 500 |
| `--color-primary-600` | `#ff3368` | primary 600 |
| `--color-primary-700` | `#e62a5c` | primary 700 |
| `--color-primary-800` | `#c21f4b` | primary 800 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `FeaturedCategories` | Featured categories | see fidelity note below |
| 4 | `ProductGrid` | Product grid | see fidelity note below |
| 5 | `OfferBand` | Offer band | see fidelity note below |
| 6 | `SubscribeBand` | Newsletter subscribe | see fidelity note below |
| 7 | `ClientLogos` | Client logos | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Settle", a "Home" link, and a dark-mode toggle button.

### `HeroSlider`
The system SHALL render a full-width hero with a pale-cyan background, a level-1 headline about a sofa, a call-to-action button, and a product image.

### `FeaturedCategories`
The system SHALL render a "Featured Category" section with at least four image cards, each with a title and an explore link.

### `ProductGrid`
The system SHALL render a product section with a heading, a shop link, and product cards showing a name, price, and an add-to-cart action.

### `OfferBand`
The system SHALL render a split offer band with an image, a sale headline, and a book-now button.

### `SubscribeBand`
The system SHALL render a subscribe band with a heading, supporting copy, and a subscribe form.

### `ClientLogos`
The system SHALL render a client-logo strip with at least four placeholder logo images.

### `Footer`
The system SHALL render a footer with link columns, a newsletter form, and social links.

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
- **Provenance ban.** No file under `apps/settle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/settle/public/CNAME` = `settle.free.componentdock.com`
  and the package `homepage` = `https://settle.free.componentdock.com`.
