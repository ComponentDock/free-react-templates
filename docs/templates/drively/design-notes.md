# Drively — Design Notes

Reference: **Carrent** — `https://colorlib.com/wp/template/carrent/`  
Live preview: `https://preview.colorlib.com/theme/carrent/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carrent-free-template.jpg  
Shipped: https://drively.free.componentdock.com

Drively is a single-page car-rental landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Carrent" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:opsz,wght@9..40,400;9..40,500;9..40,700;9..40,900**

## Design tokens (`apps/drively/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-dark` | `#0062cc` | brand dark |
| `--color-ink` | `#212529` | Ink — headings (#212529 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa from the original). |
| `--color-coal` | `#1b1b1b` | Coal — dark footer / overlays (#1b1b1b from the original footer). |
| `--color-primary-50` | `#eef6ff` | primary 50 |
| `--color-primary-100` | `#d9ebff` | primary 100 |
| `--color-primary-200` | `#b8dbff` | primary 200 |
| `--color-primary-300` | `#8ac5ff` | primary 300 |
| `--color-primary-400` | `#54a8ff` | primary 400 |
| `--color-primary-500` | `#2d8bff` | primary 500 |
| `--color-primary-600` | `#007bff` | primary 600 |
| `--color-primary-700` | `#0062cc` | primary 700 |
| `--color-primary-800` | `#0753a3` | primary 800 |
| `--color-primary-900` | `#0c4681` | primary 900 |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "DM Sans" (Google Fonts via index.html). |
| `--font-display` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero with featured car | see fidelity note below |
| 3 | `TripForm` | Trip booking form | see fidelity note below |
| 4 | `Offer` | Offer carousel | see fidelity note below |
| 5 | `Services` | Services strip | see fidelity note below |
| 6 | `Steps` | — | no dedicated spec block |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Blog` | Blog row | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Drively", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero section with a background image, a featured car card showing the car name, a spec list, a daily price, and a "Rent Now" button.

### `TripForm`
The system SHALL render a trip booking form with pickup address, drop-off address, journey date, and return date fields and a submit button.

### `Offer`
The system SHALL render an "Our Offer" section with Previous/Next controls and a list of car cards, each with a name, rating, price, specs, and a "Rent Now" button.

### `Services`
The system SHALL render a services section with a heading and three service cards, each with an icon, title, and description.

### `Steps`
*anchors only* — How it works · Renting a car with Drively takes just five easy steps.

### `Testimonials`
The system SHALL render a "Customer Testimony" section with three testimonial cards, each containing a quote and an author name.

### `Blog`
The system SHALL render an "Our Blog" section with three post cards, each with a title, a date/author meta line, and an excerpt.

### `Footer`
The system SHALL render a footer with the site name, a short tagline, quick links, and social links.

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
- **Provenance ban.** No file under `apps/drively/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/drively/public/CNAME` = `drively.free.componentdock.com`
  and the package `homepage` = `https://drively.free.componentdock.com`.
