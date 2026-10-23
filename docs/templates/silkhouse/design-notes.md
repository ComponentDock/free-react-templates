# Silkhouse — Design Notes

Reference: **Shionhouse** — `https://colorlib.com/wp/template/shionhouse/`  
Live preview: `https://preview.colorlib.com/theme/shionhouse/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/shionhouse-free-template.jpg  
Shipped: https://silkhouse.free.componentdock.com

A Fashion / E-Commerce template with hero slider, new arrivals, collection promo, popular products and features sections. Recreation of ColorLib **Shionhouse** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript fashion e-commerce storefront.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cinzel**, **Cinzel:wght@400;500;600;700**, **Poppins**

## Design tokens (`apps/silkhouse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#9f78ff` | brand |
| `--color-brand-hover` | `#8c6ae4` | brand hover |
| `--color-navy` | `#1d2547` | navy |
| `--color-text-dark` | `#222222` | text dark |
| `--color-text-body` | `#333333` | text body |
| `--color-text-muted` | `#57667e` | text muted |
| `--color-gray-bg` | `#f5f5f5` | gray bg |
| `--color-border` | `#dee2e6` | border |
| `--font-heading` | `'Cinzel', serif` | font heading |
| `--font-body` | `'Poppins', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays logo, navigation, social icons, search, and cart | see fidelity note below |
| 2 | `HeroSlider` | Hero slider displays fashion imagery with auto-advance | see fidelity note below |
| 3 | `Categories` | Categories grid shows 4 items with hover overlay | see fidelity note below |
| 4 | `NewArrivals` | New arrivals displays product grid with ratings and prices | see fidelity note below |
| 5 | `CollectionPromo` | Collection promo renders promotional section | see fidelity note below |
| 6 | `PopularProducts` | Popular products displays product cards with Shop Now buttons | see fidelity note below |
| 7 | `Features` | Features section shows 4 service items | see fidelity note below |
| 8 | `Footer` | Footer shows 4 columns on dark background with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the "SilkHouse" logo in Cinzel serif font, navigation links (Home, Shop, About, Blog, Contact), social media icons (Twitter, Facebook, Pinterest), a search icon, and a cart badge with count.

### `HeroSlider`
The hero slider SHALL display 3 slides with full-width background images, dark overlay, animated headline text "FASHION CHANGING ALWAYS" in Cinzel serif, a purple "Shop Now" CTA button, and dot navigation. The slider SHALL auto-advance after 5 seconds.

### `Categories`
The categories section SHALL display 4 category cards in a row, each with a background image and overlay text on hover.

### `NewArrivals`
The new arrivals section SHALL display 8 product cards in a 4-column grid, each with an image, product name, star rating, and price.

### `CollectionPromo`
The collection promo section SHALL display a promotional section with a background image, heading about the collection, and an "About Us" button.

### `PopularProducts`
The popular products section SHALL display product cards with images, names, prices, and "Shop Now" buttons.

### `Features`
The features section SHALL display 4 feature items in a row, each with an icon, title, and description.

### `Footer`
The footer SHALL have a dark navy background, 4 columns (Quick Links, Shop Category, Partners, Get in Touch), social media links, a copyright bar, and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/silkhouse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/silkhouse/public/CNAME` = `silkhouse.free.componentdock.com`
  and the package `homepage` = `https://silkhouse.free.componentdock.com`.
