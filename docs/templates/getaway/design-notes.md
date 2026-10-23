# Getaway — Design Notes

Reference: **Vacation** — `https://colorlib.com/wp/template/vacation/`  
Live preview: `https://preview.colorlib.com/theme/vacation/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/vacation-free-template.jpeg  
Shipped: https://getaway.free.componentdock.com

Getaway is a single-page travel agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Vacation" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/getaway/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sunset-50` | `#fff7ed` | Getaway brand palette — orange travel theme (#F96D00) |
| `--color-sunset-100` | `#ffedd5` | sunset 100 |
| `--color-sunset-200` | `#fed7aa` | sunset 200 |
| `--color-sunset-300` | `#fdba74` | sunset 300 |
| `--color-sunset-400` | `#fb923c` | sunset 400 |
| `--color-sunset-500` | `#f97316` | sunset 500 |
| `--color-sunset-600` | `#ea580c` | sunset 600 |
| `--color-sunset-700` | `#f96d00` | sunset 700 |
| `--color-sunset-800` | `#c2410c` | sunset 800 |
| `--color-sunset-900` | `#9a3412` | sunset 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `SearchForm` | Search form | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Statistics` | Statistics section | see fidelity note below |
| 6 | `BestPlaces` | Best places section | see fidelity note below |
| 7 | `TourPackages` | Tour packages section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Getaway", a "Travel Agency" subtitle, nav links (Home, About, Destination, Blog, Contact), and a "Book Now" CTA button.

### `Hero`
The system SHALL render a full-height hero section with a background image, a play button, a tagline, and the main heading.

### `SearchForm`
The system SHALL render a search form with destination, check-in date, check-out date, price limit, and a search button.

### `Services`
The system SHALL render a services section with 4 service cards.

### `Statistics`
The system SHALL render a statistics section with 3 counters.

### `BestPlaces`
The system SHALL render a best places section with 4 destination cards.

### `TourPackages`
The system SHALL render a tour packages section with 6 tour cards.

### `Testimonials`
The system SHALL render a testimonials section with testimonial cards.

### `Blog`
The system SHALL render a blog section with 3 blog post cards.

### `Footer`
The system SHALL render a footer with a Component Dock link.

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
- **Provenance ban.** No file under `apps/getaway/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/getaway/public/CNAME` = `getaway.free.componentdock.com`
  and the package `homepage` = `https://getaway.free.componentdock.com`.
