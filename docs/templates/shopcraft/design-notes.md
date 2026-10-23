# Shopcraft — Design Notes

Reference: **Shop** — `https://colorlib.com/wp/template/shop/`  
Live preview: `https://preview.colorlib.com/theme/shop/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/shop-free-ecommerce-website-template.jpg  
Shipped: https://shopcraft.free.componentdock.com

Shopcraft is a single-page e-commerce store template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Shop" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/shopcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e65540` | brand |
| `--color-brand-dark` | `#c94433` | brand dark |
| `--color-heading` | `#2b2b2b` | heading |
| `--color-body` | `#6c6c6c` | body |
| `--color-footer-bg` | `#2b2b2b` | footer bg |
| `--color-light-bg` | `#f5f5f5` | light bg |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays contact information | see fidelity note below |
| 2 | `Navbar` | Navbar provides navigation | see fidelity note below |
| 3 | `Hero` | Hero banner displays promotional content | see fidelity note below |
| 4 | `Categories` | Category grid shows product categories | see fidelity note below |
| 5 | `MenProducts` | Men's products section with dark overlay | see fidelity note below |
| 6 | `WomenProducts` | Women's products section | see fidelity note below |
| 7 | `Countdown` | Countdown timer for deals | see fidelity note below |
| 8 | `RelatedProducts` | Related products grid | see fidelity note below |
| 9 | `BrandLogos` | Brand logos row | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL display a top bar with phone number, email address, and a login link.

### `Navbar`
The template SHALL display a navigation bar with logo and links to main sections.

### `Hero`
The template SHALL display a full-width hero banner with sale messaging and a CTA button.

### `Categories`
The template SHALL display a grid of product category cards with hover overlay titles.

### `MenProducts`
The template SHALL display men's products on a dark overlay background with hover action icons.

### `WomenProducts`
The template SHALL display women's products on a light background.

### `Countdown`
The template SHALL display a countdown timer with days, hours, minutes, and seconds.

### `RelatedProducts`
The template SHALL display a grid of related product cards with images, names, and prices.

### `BrandLogos`
The template SHALL display a row of brand/partner logos.

### `Footer`
The template SHALL display a footer with About Us, Newsletter, Instagram Feed, Follow Us sections, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/shopcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shopcraft/public/CNAME` = `shopcraft.free.componentdock.com`
  and the package `homepage` = `https://shopcraft.free.componentdock.com`.
