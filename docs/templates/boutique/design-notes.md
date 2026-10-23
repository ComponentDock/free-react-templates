# Boutique — Design Notes

Reference: **Theplaza** — `https://colorlib.com/wp/template/theplaza/`  
Live preview: `https://preview.colorlib.com/theme/theplaza/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/theplaza-free-template.jpg  
Shipped: https://boutique.free.componentdock.com

Boutique is a single-page fashion eCommerce store template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@400;500;600;700**

## Design tokens (`apps/boutique/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#b09d81` | brand |
| `--color-ink` | `#414141` | ink |
| `--color-muted` | `#909090` | muted |
| `--color-surface` | `#ebebeb` | surface |
| `--color-blog` | `#f2f4f9` | blog |
| `--color-footer` | `#282828` | footer |
| `--color-footerbar` | `#222222` | footerbar |
| `--color-paper` | `#ffffff` | paper |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header — logo, nav, cart, search | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `IntroProducts` | Intro recommended products | see fidelity note below |
| 4 | `FeaturedPromos` | Featured promos | see fidelity note below |
| 5 | `ProductGrid` | Product grid with filters | see fidelity note below |
| 6 | `BlogSection` | Blog section | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render an absolutely-positioned header (transparent, full-width, top of page, z-index above the hero) containing a logo on the left, a centered nav with the links HOME / WOMAN / MAN / LOOKBOOK / BLOG / CONTACT (white, 14px, uppercase), and a right cluster with a shopping-bag icon carrying a "2" badge and a search icon. On mobile a hamburger SHALL open a dark dropdown menu with the same links.

### `HeroSlider`
The system SHALL render a full-width hero (fashion-model background photo, cover) with a slider of 2 slides, each showing a "from $19.90" eyebrow, a giant (110px, uppercase, white, weight 400) "2018 summer collection" headline, and a square dark "Shop NOW!" button. Arrow controls and dots SHALL navigate between slides.

### `IntroProducts`
The system SHALL render a "Premium products" section (source has the typo "pemium products" — fix it; 30px uppercase 700 h2, centered) with the subtitle "We recommend" (18px) and a horizontal slider of 5 product cards. Each card SHALL show a product photo (optional NEW badge), and on hover a centered overlay with the product name, price ($319.50), and an ADD TO CART link.

### `FeaturedPromos`
The system SHALL render two large featured promo panels side by side, each with a fashion photo framed by a 3px tan (`#b09d81`) border and a big tan uppercase "SEE MORE" button straddling the panel's bottom edge.

### `ProductGrid`
The system SHALL render a "product" section with a centered filter tab list (New arrivals / Recommended [active] / Best sellers) and an 8-product grid (4 columns on desktop). Each product card SHALL show a photo with a NEW/SALE badge, a hover bar with quick-view and save actions, a name, a price (one item shows a strikethrough RRP), and an ADD TO CART link. A "SEE MORE" button SHALL sit below the grid.

### `BlogSection`
The system SHALL render a "From the blog" section (uppercase 700 heading) on a light `#f2f4f9` background with three post rows, each showing a thumbnail, a title, a date/author meta line, an excerpt, and a Read More link.

### `Footer`
The system SHALL render a dark (`#282828`) footer-top with five columns: an about widget (brand + blurb), and "Useful Links", "Sitemap", "Shipping & returns", and "Contact" link/contact columns (address, phone, email). A darker (`#222222`) copyright bar SHALL read "Copyright © <year> All rights reserved | This template is made with ♥ by **Component Dock**" where "Component Dock" links https://www.componentdock.com/ (no Colorlib credit).

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
- **Provenance ban.** No file under `apps/boutique/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/boutique/public/CNAME` = `boutique.free.componentdock.com`
  and the package `homepage` = `https://boutique.free.componentdock.com`.
