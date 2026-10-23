# Rently — Design Notes

Reference: **Carbook** — `https://colorlib.com/wp/template/carbook/`  
Live preview: `https://preview.colorlib.com/theme/carbook/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carbook-free-template.jpg  
Shipped: https://rently.free.componentdock.com

Rently is a single-page car rental landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Carbook" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700;800**

## Design tokens (`apps/rently/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1089ff` | brand |
| `--color-brand-dark` | `#0b6fd6` | brand dark |
| `--color-accent` | `#01d28e` | Accent — green #01d28e secondary accent. |
| `--color-ink` | `#212529` | Ink — headings (#212529 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa from the original). |
| `--color-coal` | `#343a40` | Coal — dark footer / navbar (#343a40 from the original). |
| `--color-primary-50` | `#eff6ff` | primary 50 |
| `--color-primary-100` | `#dbeafe` | primary 100 |
| `--color-primary-200` | `#bfdbfe` | primary 200 |
| `--color-primary-300` | `#93c5fd` | primary 300 |
| `--color-primary-400` | `#60a5fa` | primary 400 |
| `--color-primary-500` | `#3b82f6` | primary 500 |
| `--color-primary-600` | `#1089ff` | primary 600 |
| `--color-primary-700` | `#0b6fd6` | primary 700 |
| `--color-primary-800` | `#0f5cad` | primary 800 |
| `--color-primary-900` | `#134d8c` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts via index.html). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Steps` | Booking steps section | see fidelity note below |
| 4 | `Vehicles` | Featured vehicles | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Services` | Services section | see fidelity note below |
| 7 | `DriverCta` | Driver CTA | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Rently", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline.

### `Steps`
The system SHALL render a booking steps section with four steps.

### `Vehicles`
The system SHALL render a featured vehicles section with car cards.

### `About`
The system SHALL render an about section with a search button.

### `Services`
The system SHALL render a services section with four service cards.

### `DriverCta`
The system SHALL render a driver recruitment band.

### `Testimonials`
The system SHALL render a testimonials section with at least one quote.

### `Blog`
The system SHALL render a recent blog section with post cards.

### `Footer`
The system SHALL render a footer with link columns and a copyright line.

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
- **Provenance ban.** No file under `apps/rently/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rently/public/CNAME` = `rently.free.componentdock.com`
  and the package `homepage` = `https://rently.free.componentdock.com`.
