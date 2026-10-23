# Highway — Design Notes

Reference: **Autoroad** — `https://colorlib.com/wp/template/autoroad/`  
Live preview: `https://preview.colorlib.com/theme/autoroad/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/autoraod-free-template.jpg  
Shipped: https://highway.free.componentdock.com

Highway is a single-page car rental landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Autoroad" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@200;300;400;500;600;700;800**

## Design tokens (`apps/highway/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fc983c` | brand |
| `--color-brand-light` | `#fdba74` | brand light |
| `--color-brand-dark` | `#ea580c` | brand dark |
| `--color-primary` | `#007bff` | primary |
| `--color-navy` | `#000000` | navy |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#777777` | body |
| `--font-family-heading` | `'Poppins', sans-serif` | font family heading |
| `--font-family-body` | `'Poppins', sans-serif` | font family body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `SearchFilter` | Secondary search filter | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `VehicleCarousel` | Vehicle carousel | see fidelity note below |
| 6 | `HowItWorks` | How it works section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `About` | About section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Highway" (with "way" highlighted), a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero section with a background image, a dark overlay, a headline, a description, a video play button, and a booking form.

### `SearchFilter`
The system SHALL render a horizontal search filter bar below the hero with car type, condition, car model, and price range selects, plus a search button.

### `Services`
The system SHALL render an "Our Services" section with 4 service cards arranged in a row.

### `VehicleCarousel`
The system SHALL render a "Choose Your Car" section with a horizontally scrollable carousel of vehicle cards.

### `HowItWorks`
The system SHALL render a parallax "How it works" section with a dark background image and 4 step cards.

### `Testimonials`
The system SHALL render a "Happy Clients" testimonial carousel with client quotes and avatars.

### `About`
The system SHALL render a "Choose A Perfect Car" about section with a split layout: text on one side, image on the other.

### `Blog`
The system SHALL render a "Recent Blog" section with 3 blog cards.

### `Footer`
The system SHALL render a dark footer with 4 columns: About, Information, Customer Support, and a newsletter form.

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
- **Provenance ban.** No file under `apps/highway/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/highway/public/CNAME` = `highway.free.componentdock.com`
  and the package `homepage` = `https://highway.free.componentdock.com`.
