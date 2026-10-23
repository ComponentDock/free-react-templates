# Garment — Design Notes

Reference: **Essence** — `https://colorlib.com/wp/template/essence/`  
Live preview: `https://preview.colorlib.com/theme/essence/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/essence-free-template.jpg  
Shipped: https://garment.free.componentdock.com

Garment is a single-page fashion-ecommerce landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Essence" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**, **Ubuntu**

## Design tokens (`apps/garment/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0315ff` | brand |
| `--color-accent` | `#dc0345` | accent |
| `--color-ink` | `#000000` | ink |
| `--color-muted` | `#787878` | muted |
| `--color-footer` | `#252525` | footer |
| `--color-cloud` | `#f5f7f9` | cloud |
| `--color-line` | `#ebebeb` | line |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Ubuntu', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `CategoryTiles` | Category tiles | see fidelity note below |
| 4 | `CtaBanner` | CTA banner | see fidelity note below |
| 5 | `PopularProducts` | Popular products | see fidelity note below |
| 6 | `BrandsStrip` | Brands strip | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |
| 8 | `CartDrawer` | Cart drawer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top header with the site name, a nav menu with dropdowns, a search field, icon actions (wishlist, account, cart) with count badges, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background photo, a left text block, and a primary CTA button.

### `CategoryTiles`
The system SHALL render three category tiles (Clothing, Shoes, Accessories) with photo backgrounds and uppercase labels.

### `CtaBanner`
The system SHALL render a promotional banner with a background photo and a right-aligned call to action.

### `PopularProducts`
The system SHALL render a "Popular Products" section with a grid of product cards.

### `BrandsStrip`
The system SHALL render a light-gray strip of brand logos.

### `Footer`
The system SHALL render a dark footer with link columns, a subscribe form, social icons, and a copyright line.

### `CartDrawer`
The system SHALL render a slide-out cart drawer from the header cart icon, listing demo items with a totals summary.

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
- **Provenance ban.** No file under `apps/garment/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/garment/public/CNAME` = `garment.free.componentdock.com`
  and the package `homepage` = `https://garment.free.componentdock.com`.
