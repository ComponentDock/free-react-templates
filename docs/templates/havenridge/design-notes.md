# Havenridge — Design Notes

Reference: **Oakberry** — `https://colorlib.com/wp/template/oakberry/`  
Live preview: `https://preview.colorlib.com/theme/oakberry/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/oakberry-free-template.jpg  
Shipped: https://havenridge.free.componentdock.com

Havenridge is a single-page real estate agency landing page in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@400;600;700;800**

## Design tokens (`apps/havenridge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0f9e8` | primary 50 |
| `--color-primary-100` | `#d8f0c4` | primary 100 |
| `--color-primary-200` | `#b4e28f` | primary 200 |
| `--color-primary-300` | `#8bd155` | primary 300 |
| `--color-primary-400` | `#6bbd2e` | primary 400 |
| `--color-primary-500` | `#5ea51d` | primary 500 |
| `--color-primary-600` | `#4c8a18` | primary 600 |
| `--color-primary-700` | `#3b6c13` | primary 700 |
| `--color-primary-800` | `#2f5510` | primary 800 |
| `--color-primary-900` | `#27460e` | primary 900 |
| `--color-navy` | `#081637` | navy |
| `--color-navy-light` | `#0c1f4a` | navy light |
| `--color-mist` | `#f8f9fa` | mist |
| `--color-smoke` | `#6c757d` | smoke |
| `--color-ink` | `#212529` | ink |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `PropertySearch` | Property search | see fidelity note below |
| 4 | `Categories` | Categories | see fidelity note below |
| 5 | `FeaturedProperties` | Featured properties | see fidelity note below |
| 6 | `VideoSection` | About section | see fidelity note below |
| 7 | `About` | About section | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky navbar with the logo "Havenridge", navigation links, and a "Get Started" CTA button.

### `HeroSlider`
The system SHALL render an auto-advancing hero slider with 3 slides, each containing a heading, description, and CTA button.

### `PropertySearch`
The system SHALL render a property search form with Buy/Rent tab switching and form fields for keyword, property type, location, and price.

### `Categories`
The system SHALL render 4 category cards (Land, Residential, Commercial, Industrial) with icons.

### `FeaturedProperties`
The system SHALL render 4 property cards with image, price, agent info, property name, location, and amenity icons.

### `VideoSection`
The system SHALL render an about section with heading, description, and 4 stat counters.

### `About`
The system SHALL render an about section with heading, description, and 4 stat counters.

### `Testimonials`
The system SHALL render a testimonial carousel with quotes, avatars, names, and roles.

### `Footer`
The system SHALL render a dark footer with social links, column links, and a Component Dock credit.

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
- **Provenance ban.** No file under `apps/havenridge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/havenridge/public/CNAME` = `havenridge.free.componentdock.com`
  and the package `homepage` = `https://havenridge.free.componentdock.com`.
