# Strider — Design Notes

Reference: **Karma** — `https://colorlib.com/wp/template/karma/`  
Live preview: `https://preview.colorlib.com/theme/karma/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/karma-free-template.jpg  
Shipped: https://strider.free.componentdock.com

Recreate the ColorLib Karma fashion/e-commerce shop template as a single-page React application under the name "Strider".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/strider/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff6c00` | brand |
| `--color-brand-light` | `#ffba00` | brand light |
| `--color-brand-dark` | `#e55f00` | brand dark |
| `--color-heading` | `#222222` | heading |
| `--color-ink` | `#222222` | ink |
| `--color-body` | `#777777` | body |
| `--color-footer-bg` | `#333333` | footer bg |
| `--color-light-bg` | `#f9f9f9` | light bg |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Sticky navigation bar | see fidelity note below |
| 2 | `Hero` | Hero banner with CTA | see fidelity note below |
| 3 | `Features` | Service features row | see fidelity note below |
| 4 | `CategoryGrid` | Category grid | see fidelity note below |
| 5 | `Products` | Latest products listing | see fidelity note below |
| 6 | `ExclusiveDeal` | Exclusive deal section | see fidelity note below |
| 7 | `BrandLogos` | Brand logos row | see fidelity note below |
| 8 | `DealsOfTheWeek` | — | no dedicated spec block |
| 9 | `Footer` | Footer with newsletter and social links | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL display the "Strider" logo and navigation links (Home, Shop, Blog, Contact). It SHALL be sticky on scroll. A cart icon with badge count and search icon SHALL be visible.

### `Hero`
The hero SHALL display "Stride Into Style" heading with gradient accent, supporting description text, and a "Shop Now" button with gradient styling.

### `Features`
The features section SHALL display four service items: Free Delivery, Return Policy, 24/7 Support, and Secure Payment, each with an icon and description.

### `CategoryGrid`
The category section SHALL display five category cards in an asymmetric grid: Men's Collection, Women's Collection, Sports Wear, Casual Wear, and Accessories.

### `Products`
The products section SHALL display "Latest Products" heading and four product cards with image, title, sale price, original price (strikethrough), and action buttons (add to bag, wishlist, compare, quick view).

### `ExclusiveDeal`
The exclusive deal section SHALL display "Fashion Up To 50% Off" heading with countdown items (Days, Hours, Mins), a "Shop Now" CTA, and a product image.

### `BrandLogos`
The brand section SHALL display five brand placeholder names in a row.

### `DealsOfTheWeek`
*anchors only* — Deals of the Week · Don't miss out on these incredible weekly savings.

### `Footer`
The footer SHALL display four columns: About Us (text), Newsletter (email input + submit), Instagram Feed (8 placeholder images), and Follow Us (social icons). The bottom bar SHALL show copyright with a "Component Dock" link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/strider/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/strider/public/CNAME` = `strider.free.componentdock.com`
  and the package `homepage` = `https://strider.free.componentdock.com`.
