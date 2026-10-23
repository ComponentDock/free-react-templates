# Deskly — Design Notes

Reference: **Workhub** — `https://colorlib.com/wp/template/workhub/`  
Live preview: `https://preview.colorlib.com/theme/workhub/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/workhub-template-1771943925457.jpg  
Shipped: https://deskly.free.componentdock.com

Deskly is a single-page coworking space landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Workhub" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Plus Jakarta Sans**, **Plus Jakarta Sans:wght@400;500;600;700;800**

## Design tokens (`apps/deskly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fffbeb` | primary 50 |
| `--color-primary-100` | `#fef3c7` | primary 100 |
| `--color-primary-200` | `#fde68a` | primary 200 |
| `--color-primary-300` | `#fcd34d` | primary 300 |
| `--color-primary-400` | `#fbbf24` | primary 400 |
| `--color-primary-500` | `#f59e0b` | primary 500 |
| `--color-primary-600` | `#d97706` | primary 600 |
| `--color-primary-700` | `#b45309` | primary 700 |
| `--color-primary-800` | `#92400e` | primary 800 |
| `--color-primary-900` | `#78350f` | primary 900 |
| `--color-primary-950` | `#451a03` | primary 950 |
| `--color-secondary-100` | `#dcfce7` | secondary 100 |
| `--color-secondary-300` | `#86efac` | secondary 300 |
| `--color-secondary-500` | `#22c55e` | secondary 500 |
| `--color-secondary-600` | `#16a34a` | secondary 600 |
| `--color-secondary-700` | `#15803d` | secondary 700 |
| `--color-secondary-800` | `#166534` | secondary 800 |
| `--color-secondary-900` | `#14532d` | secondary 900 |
| `--font-sans` | `'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Spaces` | Spaces section | see fidelity note below |
| 4 | `Amenities` | Amenities section | see fidelity note below |
| 5 | `Community` | Community section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Faq` | FAQ section | see fidelity note below |
| 9 | `CtaSection` | Call to action | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Deskly", anchor links to the page's sections, a "Book a Tour" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a badge, headline, call-to-action buttons, a stats row, and an interior photo.

### `Spaces`
The system SHALL render a spaces section with four workspace cards.

### `Amenities`
The system SHALL render an amenities section with eight cards.

### `Community`
The system SHALL render a community section with upcoming events.

### `Pricing`
The system SHALL render a pricing section with three plans.

### `Testimonials`
The system SHALL render a testimonials section with at least three quotes.

### `Faq`
The system SHALL render an FAQ section with accordion items that expand on activation.

### `CtaSection`
The system SHALL render a closing CTA with a headline and tour buttons.

### `Footer`
The system SHALL render a footer with link columns, contact details, and a copyright line.

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
- **Provenance ban.** No file under `apps/deskly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/deskly/public/CNAME` = `deskly.free.componentdock.com`
  and the package `homepage` = `https://deskly.free.componentdock.com`.
