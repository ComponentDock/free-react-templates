# Shopbox — Design Notes

Reference: **Wordpress Ecommerce Themes** — `https://colorlib.com/wp/template/wordpress-ecommerce-themes/`  
Live preview: `https://preview.colorlib.com/theme/wordpress-ecommerce-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/shopkeeper.jpg  
Shipped: https://shopbox.free.componentdock.com

Shopbox is a single-page ecommerce store template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/shopbox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0f0f5` | primary 50 |
| `--color-primary-100` | `#d5d5e0` | primary 100 |
| `--color-primary-200` | `#ababcc` | primary 200 |
| `--color-primary-300` | `#8080b3` | primary 300 |
| `--color-primary-400` | `#565699` | primary 400 |
| `--color-primary-500` | `#1a1a2e` | primary 500 |
| `--color-primary-600` | `#161628` | primary 600 |
| `--color-primary-700` | `#121222` | primary 700 |
| `--color-primary-800` | `#0e0e1c` | primary 800 |
| `--color-primary-900` | `#0a0a16` | primary 900 |
| `--color-accent` | `#e94560` | accent |
| `--color-accent-hover` | `#d63851` | accent hover |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar renders contact info | see fidelity note below |
| 2 | `Navbar` | Navbar renders navigation links | see fidelity note below |
| 3 | `Hero` | Hero section displays headline and CTA | see fidelity note below |
| 4 | `FeaturedCategories` | Featured categories render in a grid | see fidelity note below |
| 5 | `FeaturedProducts` | Featured products render in a grid | see fidelity note below |
| 6 | `PromoBanner` | Promo banner displays with CTA | see fidelity note below |
| 7 | `NewArrivals` | New arrivals render with NEW badges | see fidelity note below |
| 8 | `BlogSection` | Blog section renders post cards | see fidelity note below |
| 9 | `Newsletter` | Newsletter form accepts email subscription | see fidelity note below |
| 10 | `Footer` | Footer renders columns and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The TopBar SHALL display phone number and email address on a dark background.

### `Navbar`
The Navbar SHALL display all navigation links, utility icons, and be sticky on scroll.

### `Hero`
The Hero SHALL display a headline, subheadline, and CTA button over a background image.

### `FeaturedCategories`
FeaturedCategories SHALL render category cards in a responsive grid.

### `FeaturedProducts`
FeaturedProducts SHALL render product cards with prices, ratings, and hover actions.

### `PromoBanner`
PromoBanner SHALL display a promotional message with a call-to-action button.

### `NewArrivals`
NewArrivals SHALL render product cards with NEW badge overlays.

### `BlogSection`
BlogSection SHALL render blog post cards with image, metadata, and excerpt.

### `Newsletter`
Newsletter SHALL accept email input and show confirmation on submit.

### `Footer`
Footer SHALL render 4 columns with links and a Component Dock attribution.

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
- **Provenance ban.** No file under `apps/shopbox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shopbox/public/CNAME` = `shopbox.free.componentdock.com`
  and the package `homepage` = `https://shopbox.free.componentdock.com`.
