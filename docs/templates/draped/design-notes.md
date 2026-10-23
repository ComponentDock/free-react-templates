# Draped — Design Notes

Reference: **Dealers** — `https://colorlib.com/wp/template/dealers/`  
Live preview: `https://preview.colorlib.com/theme/dealers/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dealers-free-template.jpg  
Shipped: https://draped.free.componentdock.com

Draped is a single-page fashion e-commerce landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Dealers" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rubik:wght@400;500;600;700**

## Design tokens (`apps/draped/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--color-primary-50` | `#eef6ff` | primary 50 |
| `--color-primary-100` | `#d9eaff` | primary 100 |
| `--color-primary-200` | `#bcdbff` | primary 200 |
| `--color-primary-300` | `#8ec3ff` | primary 300 |
| `--color-primary-400` | `#599fff` | primary 400 |
| `--color-primary-500` | `#337dff` | primary 500 |
| `--color-primary-600` | `#207dff` | primary 600 |
| `--color-primary-700` | `#1a65f5` | primary 700 |
| `--color-primary-800` | `#1d51c6` | primary 800 |
| `--color-primary-900` | `#1e479c` | primary 900 |
| `--color-primary-950` | `#172c60` | primary 950 |
| `--color-charcoal-50` | `#f6f6f7` | charcoal 50 |
| `--color-charcoal-100` | `#e2e3e5` | charcoal 100 |
| `--color-charcoal-200` | `#c4c6ca` | charcoal 200 |
| `--color-charcoal-300` | `#9fa2a8` | charcoal 300 |
| `--color-charcoal-400` | `#7b7f87` | charcoal 400 |
| `--color-charcoal-500` | `#60646c` | charcoal 500 |
| `--color-charcoal-600` | `#4c4f55` | charcoal 600 |
| `--color-charcoal-700` | `#3e4046` | charcoal 700 |
| `--color-charcoal-800` | `#25262a` | charcoal 800 |
| `--color-charcoal-900` | `#1e1f22` | charcoal 900 |
| `--color-sale` | `#ffe5ae` | sale |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `ProductGrid` | Product grid | see fidelity note below |
| 4 | `FeaturedBanner` | Featured promotional banners | see fidelity note below |
| 5 | `CollectionsCarousel` | Collections carousel | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Draped", nav links, and action icons.

### `Hero`
The system SHALL render a hero section with a product name, subtitle, pricing, and call-to-action buttons.

### `ProductGrid`
The system SHALL render a 3-column product grid with product cards.

### `FeaturedBanner`
The system SHALL render two full-width promotional banners with product headlines and call-to-action buttons.

### `CollectionsCarousel`
The system SHALL render a "Collections" section with a horizontally scrollable product carousel.

### `Footer`
The system SHALL render a footer with About, Newsletter, Quick Links, and Contact Info sections. The footer MUST link to `https://www.componentdock.com/`.

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
- **Provenance ban.** No file under `apps/draped/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/draped/public/CNAME` = `draped.free.componentdock.com`
  and the package `homepage` = `https://draped.free.componentdock.com`.
