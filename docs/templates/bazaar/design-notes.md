# Bazaar — Design Notes

Reference: **Store** — `https://colorlib.com/wp/template/store/`  
Live preview: `https://preview.colorlib.com/theme/shopmax/` (the ROW's slug `shopmax`, probed 200 on 2026-10-23) — the spec names `store` and records no demo.  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/shopmax-free-template.jpg — the ROW's slug `shopmax`, not the spec's `store`  
Shipped: https://bazaar.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `shopmax` for this app while the spec records `store`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Recreation of ColorLib "Store" (https://colorlib.com/wp/template/store/) as "Bazaar" — a fashion e-commerce landing page with product grids, promotional sections, testimonials, blog, and newsletter. Built with React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;600;700;800**, **Roboto**

## Design tokens (`apps/bazaar/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffc300` | brand |
| `--color-brand-dark` | `#e5ad00` | brand dark |
| `--color-ink` | `#000000` | Ink — black headings and navbar (#000000 from the original). |
| `--color-paper` | `#ffffff` | Paper — white page background. |
| `--color-slate` | `#f8f8f8` | Slate — light section background (#f8f8f8). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-body` | `#595959` | Body — dark body text (#595959 from the original). |
| `--color-primary-50` | `#fffbeb` | primary 50 |
| `--color-primary-100` | `#fef3c7` | primary 100 |
| `--color-primary-200` | `#fde68a` | primary 200 |
| `--color-primary-300` | `#fcd34d` | primary 300 |
| `--color-primary-400` | `#ffc300` | primary 400 |
| `--color-primary-500` | `#e5ad00` | primary 500 |
| `--color-primary-600` | `#ca9a00` | primary 600 |
| `--color-primary-700` | `#a37e00` | primary 700 |
| `--color-primary-800` | `#7c5f00` | primary 800 |
| `--color-primary-900` | `#564200` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Roboto" (body) + "Playfair Display" (headings). |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo, navigation, and cart | see fidelity note below |
| 2 | `Hero` | Hero slider with rotating slides | see fidelity note below |
| 3 | `FeaturedProducts` | Featured products mixed-size grid | see fidelity note below |
| 4 | `NewArrivals` | New arrivals product grid | see fidelity note below |
| 5 | `Promo` | Promotional 45% off section | see fidelity note below |
| 6 | `OurProducts` | Our Products grid | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Newsletter` | Newsletter subscription | see fidelity note below |
| 10 | `Footer` | Footer with columns and copyright | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar displays the "Bazaar" logo, navigation links (Home, Shop with dropdown, Blog, About, Contact), and a cart icon with item count.

### `Hero`
The hero section displays a full-width image slider with 3 slides, each with heading text, description, and "Shop Collection" CTA button. Slides auto-advance every 5 seconds.

### `FeaturedProducts`
A 2-column grid with 4 featured product cards in mixed sizes: one tall left card, two smaller right cards, and one full-width bottom card.

### `NewArrivals`
An 8-product grid with "New Arrival" heading, each product card showing image, "New" tag, hover action icons (cart, eye, heart, chart), name, and price.

### `Promo`
A parallax background section with "45% Off Sale" promo block, description text, and "Shop Now" / "Read more" buttons.

### `OurProducts`
An 8-product grid with "Our Products" heading, mix of "New" and "Sale" tags, some with strikethrough original prices.

### `Testimonials`
Three customer testimonials with circular avatars, names, locations, and quotes.

### `Blog`
Three blog cards with images, date badges, author names, titles, and excerpts.

### `Newsletter`
Dark background section with email input and "Subscribe" button. Form clears on submission.

### `Footer`
Five-column footer: About Bazaar with social icons, Customer Care, Information, News, Contact Information. Copyright section links to Component Dock.

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
- **Provenance ban.** No file under `apps/bazaar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bazaar/public/CNAME` = `bazaar.free.componentdock.com`
  and the package `homepage` = `https://bazaar.free.componentdock.com`.
