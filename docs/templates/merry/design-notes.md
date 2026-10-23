# Merry — Design Notes

Reference: **Carousel 07** — `https://colorlib.com/wp/template/carousel-07/`  
Live preview: `https://preview.colorlib.com/theme/carousel-07/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-07.jpg  
Shipped: https://merry.free.componentdock.com

A modern interactive multi-item carousel and card showcase template with hero, carousel, features, newsletter, and footer sections. Recreate the ColorLib Carousel 07 template (`https://colorlib.com/wp/template/carousel-07/`) as `merry`.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/merry/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff5722` | brand |
| `--color-brand-dark` | `#e64a19` | brand dark |
| `--font-family-sans` | `'Poppins', sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation Bar | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `Carousel` | Interactive Carousel Section | see fidelity note below |
| 4 | `Features` | Features Grid | see fidelity note below |
| 5 | `Newsletter` | Newsletter Subscription | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a navigation bar with brand logo/title ("Merry") and navigation links (Home, Features, Showcase, Contact) plus a "Get Started" CTA button and dark mode toggle.

### `Hero`
The template SHALL display a hero section with an engaging heading, subtitle, and primary CTA button.

### `Carousel`
The template SHALL display a multi-item card carousel with left/right arrow navigation and pagination dots.

### `Features`
The template SHALL display a grid of feature cards with icons, titles, and descriptions.

### `Newsletter`
The template SHALL display an email subscription form with validation and success state.

### `Footer`
The template SHALL display a footer with links, copyright notice, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/merry/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/merry/public/CNAME` = `merry.free.componentdock.com`
  and the package `homepage` = `https://merry.free.componentdock.com`.
