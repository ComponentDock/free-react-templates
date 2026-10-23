# Fragrance — Design Notes

Reference: **Aroma** — `https://colorlib.com/wp/template/aroma/`  
Live preview: `https://preview.colorlib.com/theme/aroma/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/aroma-free-template.jpg  
Shipped: https://fragrance.free.componentdock.com

Recreation of ColorLib "Aroma" (https://colorlib.com/wp/template/aroma/) as "Fragrance" — a fashion e-commerce landing page with navbar, hero banner, product carousels, offer section, blog section, newsletter, and 4-column footer. Built with React 19, Tailwind CSS 4, and TypeScript. **Replication reference:**

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/fragrance/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#384aeb` | brand |
| `--color-brand-light` | `#8894ff` | brand light |
| `--color-navy` | `#002347` | navy |
| `--color-body` | `#222222` | body |
| `--color-muted` | `#777777` | muted |
| `--color-light-bg` | `#f1f6f7` | light bg |
| `--color-accent-red` | `#c5322d` | accent red |
| `--font-heading` | `'Oswald', sans-serif` | font heading |
| `--font-body` | `'Roboto', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Top navigation bar | see fidelity note below |
| 2 | `Hero` | Hero banner with image and CTA | see fidelity note below |
| 3 | `ProductCarousel` | Hero product carousel | see fidelity note below |
| 4 | `TrendingProducts` | Trending products grid | see fidelity note below |
| 5 | `OfferSection` | Offer/parallax promotional section | see fidelity note below |
| 6 | `BestSellers` | Best sellers carousel | see fidelity note below |
| 7 | `BlogSection` | Blog/latest news section | see fidelity note below |
| 8 | `SubscribeSection` | Newsletter/subscribe section | see fidelity note below |
| 9 | `Footer` | 4-column footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
A fixed/sticky top navbar with the Fragrance logo on the left, navigation links (Home, Shop with dropdown, Blog with dropdown, Pages with dropdown, Contact), and utility icons (search, cart with badge, Buy Now button).

### `Hero`
A two-column hero section with a product image on the left (hidden on small screens) and headline text "Shop is fun" / "Browse Our Premium Product" with description and "Browse Now" button on the right. The hero has a light blue-gray background (#F1F6F7) with a blue accent stripe on the left.

### `ProductCarousel`
A 3-slide carousel below the hero, each slide showing a product image with an overlay (product name "Wireless Headphone", category "Accessories Item"). Slides animate on hover.

### `TrendingProducts`
An 8-product grid with section heading "Trending Product", each card showing an image, hover action overlay (search, cart, heart icons), category label, product name, and price "$150.00".

### `OfferSection`
A full-width parallax background section with "Up To 50% Off" heading, "Winter Sale" subheading, description text, and "Shop Now" button.

### `BestSellers`
A carousel of 8+ product cards under "Best Sellers" heading, similar to trending products but in a horizontal scrollable carousel.

### `BlogSection`
A 3-column blog card grid under "Latest News" heading. Each card has an image, metadata (author "By Admin", comments count), title, excerpt, and "Read More" link.

### `SubscribeSection`
A centered subscription card with "Get Update From Anywhere" heading, description text, email input, and "Subscribe Now" button. The card has a white background with a blue-tinted shadow.

### `Footer`
A dark navy footer (#002347) with 4 columns: "Our Mission" (brand description), "Quick Links" (Home, Shop, Blog, Product, Brand, Contact), "Gallery" (6 thumbnail images), "Contact Us" (address, phone, email). Footer bottom has copyright + Component Dock link.

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
- **Provenance ban.** No file under `apps/fragrance/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fragrance/public/CNAME` = `fragrance.free.componentdock.com`
  and the package `homepage` = `https://fragrance.free.componentdock.com`.
