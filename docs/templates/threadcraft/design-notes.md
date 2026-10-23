# Threadcraft — Design Notes

Reference: **Fashi** — `https://colorlib.com/wp/template/fashi/`  
Live preview: `https://preview.colorlib.com/theme/fashi/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fashi-free-template.jpg  
Shipped: https://threadcraft.free.componentdock.com

Threadcraft is a fashion eCommerce landing page template. It recreates the ColorLib Fashi design under a different name, providing a complete storefront with hero promotions, product grids, deal countdown, collection gallery, blog teasers, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Mulish**, **Mulish:wght@400;600;700;800**

## Design tokens (`apps/threadcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-mulish` | `'Mulish', sans-serif` | font mulish |
| `--color-brand` | `#e7ab3c` | brand |
| `--color-brand-light` | `#fac451` | brand light |
| `--color-dark` | `#252525` | dark |
| `--color-dark-deep` | `#171717` | dark deep |
| `--color-body-bg` | `#ffffff` | body bg |
| `--color-section-bg` | `#f5f5f5` | section bg |
| `--color-border` | `#ebebeb` | border |
| `--color-text-secondary` | `#b2b2b2` | text secondary |
| `--color-text-body` | `#636363` | text body |
| `--color-text-dark` | `#171717` | text dark |
| `--color-sale` | `#e74c3c` | sale |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays contact information | see fidelity note below |
| 2 | `Navbar` | Navbar displays logo and navigation | see fidelity note below |
| 3 | `HeroSlider` | HeroSlider displays promotional slides | see fidelity note below |
| 4 | `CategoryTabs` | CategoryTabs switch product categories | see fidelity note below |
| 5 | `TrendingProducts` | TrendingProducts displays and filters products | see fidelity note below |
| 6 | `DealOfTheWeek` | DealOfTheWeek displays countdown timer | see fidelity note below |
| 7 | `FeaturedProducts` | FeaturedProducts displays tabbed products | see fidelity note below |
| 8 | `CollectionGallery` | CollectionGallery displays image grid | see fidelity note below |
| 9 | `BlogSection` | BlogSection displays blog posts | see fidelity note below |
| 10 | `FeaturesBar` | FeaturesBar displays feature highlights | see fidelity note below |
| 11 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL display a top bar with contact email, phone number, language selector, cart icon with count, and login link.

### `Navbar`
The template SHALL display a navigation bar with the "Threadcraft" logo and links to Home, Shop, Collection, Men's, Women's, Kid's, Blog, and Contact.

### `HeroSlider`
The template SHALL display a hero slider with promotional content, sale badges, and Shop Now CTAs.

### `CategoryTabs`
The template SHALL display category tabs (Men's, Women's, Kid's) that switch the active category.

### `TrendingProducts`
The template SHALL display a product grid with category filter pills.

### `DealOfTheWeek`
The template SHALL display a deal section with a countdown timer showing Days, Hrs, Mins, Secs.

### `FeaturedProducts`
The template SHALL display featured products with tabbed navigation.

### `CollectionGallery`
The template SHALL display a 6-image collection grid.

### `BlogSection`
The template SHALL display 3 blog cards with dates and titles.

### `FeaturesBar`
The template SHALL display 3 feature items: Free Shipping, Delivery On Time, Secure Payment.

### `Footer`
The template SHALL display a footer with address, newsletter signup, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/threadcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/threadcraft/public/CNAME` = `threadcraft.free.componentdock.com`
  and the package `homepage` = `https://threadcraft.free.componentdock.com`.
