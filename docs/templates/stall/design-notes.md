# Stall — Design Notes

Reference: **Selling** — `https://colorlib.com/wp/template/selling/`  
Live preview: `https://preview.colorlib.com/theme/selling/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/selling-free-template.jpg  
Shipped: https://stall.free.componentdock.com

The Stall template is an ecommerce store landing page featuring a hero section with call-to-action buttons, product grid, newsletter signup, featured products with pricing, about section, team leadership, special promo with countdown, services, testimonials carousel, blog posts, contact form, and a dark footer with Component Dock attribut…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/stall/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f16821` | brand |
| `--color-brand-dark` | `#d45a18` | brand dark |
| `--color-heading` | `#3c3b37` | heading |
| `--color-body` | `#6a6a6a` | body |
| `--color-footer-bg` | `#333333` | footer bg |
| `--color-light-bg` | `#f9f9f9` | light bg |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays contact information and social links | see fidelity note below |
| 2 | `Navbar` | Navbar provides navigation | see fidelity note below |
| 3 | `Hero` | Hero displays heading and call-to-action buttons | see fidelity note below |
| 4 | `Products` | Products displays product grid | see fidelity note below |
| 5 | `Newsletter` | Newsletter provides email subscription | see fidelity note below |
| 6 | `FeaturedProducts` | FeaturedProducts displays featured items with pricing | see fidelity note below |
| 7 | `About` | About displays company information | see fidelity note below |
| 8 | `Team` | Team displays team members | see fidelity note below |
| 9 | `SpecialPromo` | SpecialPromo displays countdown and shop button | see fidelity note below |
| 10 | `Services` | Services displays service cards | see fidelity note below |
| 11 | `Testimonials` | Testimonials displays carousel | see fidelity note below |
| 12 | `BlogPosts` | BlogPosts displays blog cards | see fidelity note below |
| 13 | `Contact` | TopBar displays contact information and social links | see fidelity note below |
| 14 | `Footer` | Footer displays content and Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The TopBar SHALL display social media links and contact information.

### `Navbar`
The Navbar SHALL display the brand name and navigation links with mobile menu support.

### `Hero`
The Hero section SHALL display a heading and two call-to-action buttons.

### `Products`
The Products section SHALL display a grid of product cards with ratings and actions.

### `Newsletter`
The Newsletter section SHALL display an email subscription form.

### `FeaturedProducts`
The FeaturedProducts section SHALL display featured products with strikethrough and sale prices.

### `About`
The About section SHALL display company information with a trust badge.

### `Team`
The Team section SHALL display team member cards with social links.

### `SpecialPromo`
The SpecialPromo section SHALL display a promotional section with countdown.

### `Services`
The Services section SHALL display service cards with icons.

### `Testimonials`
The Testimonials section SHALL display a testimonial carousel with navigation.

### `BlogPosts`
The BlogPosts section SHALL display blog post cards.

### `Contact`
The TopBar SHALL display social media links and contact information.

### `Footer`
The Footer SHALL display footer content with a link to Component Dock.

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
- **Provenance ban.** No file under `apps/stall/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stall/public/CNAME` = `stall.free.componentdock.com`
  and the package `homepage` = `https://stall.free.componentdock.com`.
