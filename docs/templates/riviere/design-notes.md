# Riviere — Design Notes

Reference: **Estore** — `https://colorlib.com/wp/template/estore/`  
Live preview: `https://preview.colorlib.com/theme/estore/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/estore-free-template.jpg  
Shipped: https://riviere.free.componentdock.com

An E-Commerce template with header utility, main header navigation, hero slider, shop by category, best collection and shop methods sections. Recreation of the ColorLib "eStore" e-commerce template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600;700**, **Poppins**, **Yellowtail**

## Design tokens (`apps/riviere/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff003c` | brand |
| `--color-brand-dark` | `#d60033` | brand dark |
| `--color-ink` | `#0b1c39` | Ink — dark navy headings (#0b1c39). |
| `--color-ink-dark` | `#060f1f` | ink dark |
| `--color-paper` | `#f7f7f7` | Paper — light section backgrounds. |
| `--color-mist` | `#506172` | Mist — muted body text (#506172). |
| `--color-meta` | `#635c5c` | Secondary text (#635c5c). |
| `--color-accent` | `#2577fd` | Accent blue (#2577fd). |
| `--color-accent-light` | `#00b1ff` | Light blue (#00b1ff). |
| `--color-primary-50` | `#fff0f3` | Primary scale so shared Button/ButtonLink primary variants resolve. |
| `--color-primary-100` | `#ffe0e8` | primary 100 |
| `--color-primary-200` | `#ffc2d3` | primary 200 |
| `--color-primary-300` | `#ff8aab` | primary 300 |
| `--color-primary-400` | `#ff4d7a` | primary 400 |
| `--color-primary-500` | `#ff003c` | primary 500 |
| `--color-primary-600` | `#d60033` | primary 600 |
| `--color-primary-700` | `#b3002b` | primary 700 |
| `--color-primary-800` | `#950026` | primary 800 |
| `--color-primary-900` | `#7d0022` | primary 900 |
| `--font-heading` | `'Playfair Display', serif` | Heading font: Playfair Display. |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Body font: Poppins. |
| `--font-accent` | `'Yellowtail', cursive` | Accent font: Yellowtail. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Header utility bar | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `HeroSlider` | Hero slider | see fidelity note below |
| 4 | `ShopByCategory` | Shop by Category | see fidelity note below |
| 5 | `LatestProducts` | Latest Products | see fidelity note below |
| 6 | `BestCollection` | Best Collection | see fidelity note below |
| 7 | `ShopMethods` | Shop Methods | see fidelity note below |
| 8 | `Gallery` | Gallery | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The page SHALL display a top utility bar with country flag, phone number, and account navigation links (My Account, Wish List, Shopping, Cart, Checkout).

### `Navbar`
*anchors only* — Main navigation · Search products · Wishlist · Shopping cart · Toggle navigation menu · Mobile navigation

### `HeroSlider`
The page SHALL display a hero section with a background image, promotional text, and a Shop Now pill button.

### `ShopByCategory`
The page SHALL display a category section with 4 category cards showing background images and category names.

### `LatestProducts`
The page SHALL display a product grid with product cards showing images, names, and prices.

### `BestCollection`
The page SHALL display a featured collection section with a promotional image alongside a product grid.

### `ShopMethods`
The page SHALL display 3 feature cards (Free Shipping, Secure Payment, Returns & Exchange) with icons and descriptions.

### `Gallery`
The page SHALL display 5 images in a horizontal row.

### `Footer`
The page SHALL display a footer with 4 columns (About/Logo, Quick Links, New Products, Support), social icons, copyright text, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/riviere/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/riviere/public/CNAME` = `riviere.free.componentdock.com`
  and the package `homepage` = `https://riviere.free.componentdock.com`.
