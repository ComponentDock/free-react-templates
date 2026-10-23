# Silkthread — Design Notes

Reference: **Malefashion** — `https://colorlib.com/wp/template/malefashion/`  
Live preview: `https://preview.colorlib.com/theme/malefashion/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/malefashion-free-template.jpg  
Shipped: https://silkthread.free.componentdock.com

A Men's Fashion E-Commerce template with hero carousel, banner with 3 category items and product grid with filter sections. Recreation of the ColorLib **Malefashion** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:opsz,wght@6..12,300;6..12,400;6..12,600;6..12,700;6..12,800;6..12,900**

## Design tokens (`apps/silkthread/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e53637` | brand |
| `--color-ink` | `#111111` | ink |
| `--color-body` | `#3d3d3d` | body |
| `--color-cream` | `#f3f2ee` | cream |
| `--color-surface` | `#ffffff` | surface |
| `--color-rule` | `#e5e5e5` | rule |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fee2e2` | primary 100 |
| `--color-primary-200` | `#fecaca` | primary 200 |
| `--color-primary-300` | `#fca5a5` | primary 300 |
| `--color-primary-400` | `#f87171` | primary 400 |
| `--color-primary-500` | `#e53637` | primary 500 |
| `--color-primary-600` | `#cc2f2f` | primary 600 |
| `--color-primary-700` | `#ab2525` | primary 700 |
| `--color-primary-800` | `#8f2222` | primary 800 |
| `--color-primary-900` | `#782222` | primary 900 |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with top bar and navigation | see fidelity note below |
| 2 | `Hero` | Hero carousel | see fidelity note below |
| 3 | `Banner` | Banner with 3 category items | see fidelity note below |
| 4 | `Products` | Product grid with filter tabs | see fidelity note below |
| 5 | `Categories` | Categories section with hot deal and countdown | see fidelity note below |
| 6 | `Instagram` | Instagram image grid | see fidelity note below |
| 7 | `LatestBlog` | Blog/Latest section | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Header`
The header SHALL display a dark top bar with shipping info, sign-in/FAQs links, and currency selector. Below it, a white bar with the SilkThread logo, desktop navigation (Home, Shop, Pages dropdown, Blog, Contacts), and search/wishlist/cart icons. On mobile, a hamburger icon opens an offcanvas menu.

### `Hero`
The hero section SHALL display a full-width dark background image with centered text: subtitle "Summer Collection", heading "Fall - Winter Collections 2030", description, and a black pill-shaped "Shop now" button with arrow icon.

### `Banner`
The banner section SHALL show 3 category banner items in a row, each with an image and text heading overlay.

### `Products`
The product section SHALL display filter tabs (Best Sellers, New Arrivals, Hot Sales) and a responsive grid of product cards with images, hover overlay icons, titles, prices, star ratings, color swatches, and New/Sale labels.

### `Categories`
The categories section SHALL have a light beige (#f3f2ee) background, large category text on the left, a hot deal product image with sale sticker in the center, and a countdown timer on the right.

### `Instagram`
The Instagram section SHALL display 6 images in a row with an Instagram heading and hashtag text.

### `LatestBlog`
The latest section SHALL display a "Latest News" heading and 3 blog post cards with images, dates, titles, and Read More links.

### `Footer`
The footer SHALL have a dark (#111111) background with about section, shopping links, support links, newsletter form, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/silkthread/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/silkthread/public/CNAME` = `silkthread.free.componentdock.com`
  and the package `homepage` = `https://silkthread.free.componentdock.com`.
