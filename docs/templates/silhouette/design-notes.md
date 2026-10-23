# Silhouette — Design Notes

Reference: **Fashion 2** — `https://colorlib.com/wp/template/fashion-2/`  
Live preview: `https://preview.colorlib.com/theme/fashion-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fashion-free-template.jpg  
Shipped: https://silhouette.free.componentdock.com

A single-page apparel store landing template with hero, product grid, about section, testimonials, blog posts, newsletter signup, and footer. Minimalist fashion aesthetic with Lato + Playfair Display fonts, green (#6DAB3C) brand color, and dark charcoal (#1a1a2e) section backgrounds.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700;900**, **Playfair Display**

## Design tokens (`apps/silhouette/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Lato', sans-serif` | font sans |
| `--font-serif` | `'Playfair Display', serif` | font serif |
| `--color-brand` | `#6dab3c` | brand |
| `--color-brand-dark` | `#5f9434` | brand dark |
| `--color-accent` | `#b97ebb` | accent |
| `--color-ink` | `#1a1a2e` | ink |
| `--color-surface` | `#f7f7f7` | surface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with mobile toggle | see fidelity note below |
| 2 | `Hero` | Hero section with CTA | see fidelity note below |
| 3 | `Products` | Products grid | see fidelity note below |
| 4 | `About` | About section with features | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `Blog` | Blog section | see fidelity note below |
| 7 | `Newsletter` | Newsletter signup | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky top navigation bar with the brand logo "Silhouette" and links to Home, About, Collections, Blog, and Contact sections. On mobile, a hamburger button SHALL toggle the mobile menu.

### `Hero`
The template SHALL display a hero section with a headline "Define Your Own Style", descriptive subtext about fashion trends, and a "Shop Now" CTA button.

### `Products`
The template SHALL display a 4-column grid of 8 product cards, each with an image, product name, and price.

### `About`
The template SHALL display a split layout about section with an image on the left and a feature list on the right. The feature list SHALL include Free Shipping, Secure Payment, and Sustainable items with lucide-react icons.

### `Testimonials`
The template SHALL display 3 testimonials with quote text, author name, and role.

### `Blog`
The template SHALL display a 3-column grid of blog post cards with image, date, title, and excerpt.

### `Newsletter`
The template SHALL display a newsletter section with an email input and subscribe button. The form SHALL prevent default submission.

### `Footer`
The template SHALL display a 3-column footer with About text, Quick Links, and Contact information. The bottom bar SHALL show the copyright year and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/silhouette/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/silhouette/public/CNAME` = `silhouette.free.componentdock.com`
  and the package `homepage` = `https://silhouette.free.componentdock.com`.
