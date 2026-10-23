# Snowline — Design Notes

Reference: **Winter** — `https://colorlib.com/wp/template/winter/`  
Live preview: `https://preview.colorlib.com/theme/winter/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/winter-free-template.jpg  
Shipped: https://snowline.free.componentdock.com

Snowline is a fashion e-commerce shop landing page recreated from the ColorLib "Winter" template. It showcases product categories, new arrivals with filtering, shipping features, an Instagram feed, and a newsletter footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto Condensed**, **Roboto Condensed:wght@300;400;700**

## Design tokens (`apps/snowline/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-pink` | `#ff005a` | Brand gradient colors — pink → orange → yellow |
| `--color-brand-orange` | `#ff5d2d` | brand orange |
| `--color-brand-yellow` | `#ffba00` | brand yellow |
| `--color-brand` | `#ff005a` | Brand gradient — single token for convenience |
| `--color-paper` | `#f4f4f4` | Body background #f4f4f4 |
| `--color-heading` | `#1a1a1a` | Heading color #1a1a1a |
| `--color-mist` | `#606060` | Body text #606060 |
| `--font-display` | `'Roboto Condensed', ui-sans-serif, system-ui, sans-serif` | Fonts — Roboto Condensed (display) + Roboto (body) via Google Fonts |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and controls | see fidelity note below |
| 2 | `Hero` | Hero banner with call-to-action | see fidelity note below |
| 3 | `Features` | Feature categories with hover overlays | see fidelity note below |
| 4 | `NewArrivals` | New arrivals with filter tabs | see fidelity note below |
| 5 | `ShippingInfo` | Shipping info feature cards | see fidelity note below |
| 6 | `InstagramFeed` | Instagram photo feed | see fidelity note below |
| 7 | `Footer` | Footer with newsletter and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page SHALL display a sticky navigation bar with the Snowline logo, navigation links (Home, Shop, Pages, Blog, Contact), search icon, shopping bag icon, and a mobile hamburger menu.

### `Hero`
The page SHALL display a hero section with a background image, "Winter Fashion" subtitle, "Fashion Collection 2024" heading, and a "Shop Now" call-to-action button.

### `Features`
The page SHALL display three product category images (Men, Women, Shoes) with hover overlays that reveal category labels.

### `NewArrivals`
The page SHALL display a product grid with filter tabs (All, Men, Women, Shoes) that filter the visible products.

### `ShippingInfo`
The page SHALL display four feature cards (Free Shipping, Weekly Discount, Premium Quality, 24/7 Support) with icons and descriptions.

### `InstagramFeed`
The page SHALL display five Instagram-style photos in a grid with hover overlay.

### `Footer`
The page SHALL display a footer with four columns (Category, Company, Address, Newsletter), social media icons, a newsletter signup form, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/snowline/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/snowline/public/CNAME` = `snowline.free.componentdock.com`
  and the package `homepage` = `https://snowline.free.componentdock.com`.
