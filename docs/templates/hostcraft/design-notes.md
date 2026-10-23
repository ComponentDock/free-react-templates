# Hostcraft — Design Notes

Reference: **Cohost** — `https://colorlib.com/wp/template/cohost/`  
Live preview: `https://preview.colorlib.com/theme/cohost/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cohost-free-template.jpg  
Shipped: https://hostcraft.free.componentdock.com

Recreation of ColorLib **Cohost** (slug: `cohost`). Preview: https://preview.colorlib.com/theme/cohost/ ColorLib page: https://colorlib.com/wp/template/cohost/ **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict) **Category:** Web hosting / domain services — a clean, professional template with an isometric illustration hero,…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/hostcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6927ff` | brand |
| `--color-brand-dark` | `#5423c6` | brand dark |
| `--color-primary` | `#007bff` | primary |
| `--color-primary-hover` | `#0069d9` | primary hover |
| `--color-text-primary` | `#000000` | text primary |
| `--color-text-muted` | `#b3b3b3` | text muted |
| `--color-text-meta` | `#cccccc` | text meta |
| `--color-text-white` | `#ffffff` | text white |
| `--color-bg-main` | `#ffffff` | bg main |
| `--color-bg-light` | `#f8f9fa` | bg light |
| `--color-bg-counter` | `#6927ff` | bg counter |
| `--color-bg-footer` | `#333333` | bg footer |
| `--font-family-body` | `'Work Sans', Arial, sans-serif` | font family body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation Bar | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `DomainSearch` | Domain Search | see fidelity note below |
| 4 | `Features` | Why Choose Us Features | see fidelity note below |
| 5 | `CounterStats` | Counter Statistics | see fidelity note below |
| 6 | `MainServices` | Main Services | see fidelity note below |
| 7 | `Pricing` | Pricing Plans | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `TabbedServices` | Tabbed Services | see fidelity note below |
| 10 | `Blog` | Recent Blog | see fidelity note below |
| 11 | `Partners` | Partner Logos | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display logo, navigation links, and a CTA button on desktop, and toggle a mobile menu on hamburger click.

### `Hero`
The hero SHALL display a split layout with an illustration and heading text.

### `DomainSearch`
The domain search section SHALL provide a form to search for domain availability.

### `Features`
The features section SHALL display 6 service cards in a grid.

### `CounterStats`
The counter section SHALL display stats on a purple background.

### `MainServices`
The services section SHALL show an illustration and 4 service cards.

### `Pricing`
The pricing section SHALL display 4 pricing tiers.

### `Testimonials`
The testimonials section SHALL display customer quotes with avatars.

### `TabbedServices`
The tabbed section SHALL switch between 3 service panels.

### `Blog`
The blog section SHALL display 3 blog cards.

### `Partners`
The partners section SHALL display partner logos in a row.

### `Footer`
The footer SHALL display a CTA banner and multi-column information.

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
- **Provenance ban.** No file under `apps/hostcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hostcraft/public/CNAME` = `hostcraft.free.componentdock.com`
  and the package `homepage` = `https://hostcraft.free.componentdock.com`.
