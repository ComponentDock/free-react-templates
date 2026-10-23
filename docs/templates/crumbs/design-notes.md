# Crumbs — Design Notes

Reference: **Cakes** — `https://colorlib.com/wp/template/cakes/`  
Live preview: `https://preview.colorlib.com/theme/cakes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cakes-colorlib-template.jpg  
Shipped: https://crumbs.free.componentdock.com

A Cake Shop template with hero, popular products, about and services sections. Crumbs is a single-page cake shop landing template — a faithful React recreation of the ColorLib "Cakes" template (preview: https://preview.colorlib.com/theme/cakes/ — cake shop landing page), built under a different name with the monorepo stack: Vite + React 1…

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@400;500;700**, **Lobster**, **Quicksand**

## Design tokens (`apps/crumbs/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-dm-sans` | `'DM Sans', sans-serif` | font dm sans |
| `--font-quicksand` | `'Quicksand', sans-serif` | font quicksand |
| `--font-lobster` | `'Lobster', cursive` | font lobster |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `PopularProducts` | Popular products section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `InstagramFeed` | — | no dedicated spec block |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a sticky navigation bar with the site name "Crumbs", desktop navigation links (Home, Product, About, Blog, Contact), a phone number, and an "Order Online" CTA button.

### `Hero`
The system SHALL render a hero section with a background image, a large decorative "Delicious" watermark, a heading "Delicious Cake For Everyone", a descriptive paragraph, and an "Explore Menu" call-to-action button.

### `PopularProducts`
The system SHALL render a "Most Popular" / "Our Exclusive Cakes" section with three product cards (Chocolate, Sweetheart, Blackforest), each showing an image, a title, a description, and an "Order Now" button with a price.

### `About`
The system SHALL render an about section with a split layout: a cake image on the left and text content on the right including a "Fresh & Delicious" subtitle, a heading "A Simple Way to Eating Delicious", a paragraph, and an "Our Story" button.

### `Services`
The system SHALL render a services section titled "Quality is Our First Priority" with three feature cards, each having an icon, a title, and a description.

### `Testimonials`
The system SHALL render a testimonials section titled "What Customers Say" with testimonial cards, each containing a quote, a founder image, a name, and a role.

### `InstagramFeed`
*anchors only* — Follow Us · Instagram Feed

### `Footer`
The system SHALL render a footer with a logo area, description text, quick links, product categories, contact information, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/crumbs/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crumbs/public/CNAME` = `crumbs.free.componentdock.com`
  and the package `homepage` = `https://crumbs.free.componentdock.com`.
