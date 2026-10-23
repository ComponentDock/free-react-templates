# Treadly — Design Notes

Reference: **Solestyle** — `https://colorlib.com/wp/template/solestyle/`  
Live preview: `https://preview.colorlib.com/theme/solestyle/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/solestyle-template-1770211411401.jpg  
Shipped: https://treadly.free.componentdock.com

Treadly is a single-page footwear / sneaker store landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**, **Outfit**

## Design tokens (`apps/treadly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff7ed` | primary 50 |
| `--color-primary-100` | `#ffedd5` | primary 100 |
| `--color-primary-200` | `#fed7aa` | primary 200 |
| `--color-primary-300` | `#fdba74` | primary 300 |
| `--color-primary-400` | `#fb923c` | primary 400 |
| `--color-primary-500` | `#f97316` | primary 500 |
| `--color-primary-600` | `#ea580c` | primary 600 |
| `--color-primary-700` | `#c2410c` | primary 700 |
| `--color-primary-800` | `#9a3412` | primary 800 |
| `--color-primary-900` | `#7c2d12` | primary 900 |
| `--color-primary-950` | `#431407` | primary 950 |
| `--font-display` | `'Outfit', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `PromoBar` | Promo bar | see fidelity note below |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `CategoryGrid` | Shop by Category section | see fidelity note below |
| 5 | `FeaturedProducts` | Featured Collection section | see fidelity note below |
| 6 | `ServiceBar` | Service bar | see fidelity note below |
| 7 | `NewArrivals` | New Arrivals section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `AppCta` | App CTA section | see fidelity note below |
| 10 | `Newsletter` | Newsletter section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `PromoBar`
The system SHALL render a slim announcement bar above the navbar with a free-shipping offer and a discount code.

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name "Treadly", anchor/route links, a cart count, account icons, and a mobile menu.

### `Hero`
The system SHALL render a dark hero with a headline, blurb, trust row, two CTAs, and a featured sneaker image.

### `CategoryGrid`
The system SHALL render a category grid with six category cards, each with an image, name, item count, and link.

### `FeaturedProducts`
The system SHALL render a featured products grid with at least six product cards.

### `ServiceBar`
The system SHALL render a four-item service bar with icon, title, and blurb for each item.

### `NewArrivals`
The system SHALL render a New Arrivals product grid with four product cards and a link.

### `Testimonials`
The system SHALL render a dark testimonials section with three quote cards and a stats row.

### `AppCta`
The system SHALL render an orange CTA band promoting the mobile app.

### `Newsletter`
The system SHALL render a newsletter signup with an offer, an email input, and a subscribe button.

### `Footer`
The system SHALL render a dark footer with brand blurb, link columns, social icons, and a copyright line.

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
- **Provenance ban.** No file under `apps/treadly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/treadly/public/CNAME` = `treadly.free.componentdock.com`
  and the package `homepage` = `https://treadly.free.componentdock.com`.
