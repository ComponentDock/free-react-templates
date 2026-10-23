# Lustre — Design Notes

Reference: **Vogue** — `https://colorlib.com/wp/template/vogue/`  
Live preview: `https://preview.colorlib.com/theme/vogue/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/vogue-free-template.jpg  
Shipped: https://lustre.free.componentdock.com

Lustre is a single-page hair-salon template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Vogue" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700;800**

## Design tokens (`apps/lustre/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-gold-300` | `#ffc84d` | gold 300 |
| `--color-gold-400` | `#ffbb00` | gold 400 |
| `--color-gold-500` | `#ffae00` | gold 500 |
| `--color-gold-600` | `#e69c00` | gold 600 |
| `--color-ink` | `#1a1a1a` | Dark copy (ColorLib #1a1a1a) and muted copy. |
| `--color-ink-soft` | `#2a2a2a` | ink soft |
| `--color-smoke` | `#767271` | smoke |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Testimonials` | Testimonials section | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |
| 6 | `AppointmentPanel` | Appointment booking panel | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed top navigation bar with the site name "Lustre" (wordmark + gold "hair" tagline), the page navigation, a "Book an Appointment" button, and a dark-mode toggle.

### `Hero`
The system SHALL render a full-screen hero slider with a headline, copy, a call-to-action link, a scroll-down indicator and slide progress.

### `Services`
The system SHALL render a services section with a heading and a carousel of six service cards, each with an icon, a title and a description.

### `Testimonials`
The system SHALL render a testimonials section with a heading, a carousel of testimonial cards (photo, title, quote, author) and a "load more" button.

### `Footer`
The system SHALL render a footer with a "Get in touch" heading, contact info and social icons, a comment form, and a copyright bar.

### `AppointmentPanel`
The system SHALL open a right-side panel with an appointment form when the "Book an Appointment" button is clicked.

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
- **Provenance ban.** No file under `apps/lustre/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lustre/public/CNAME` = `lustre.free.componentdock.com`
  and the package `homepage` = `https://lustre.free.componentdock.com`.
