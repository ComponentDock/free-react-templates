# Seacliff — Design Notes

Reference: **The Grand Azure** — `https://colorlib.com/wp/template/the-grand-azure/`  
Live preview: `https://preview.colorlib.com/theme/the-grand-azure/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/grandazure-template-1771943856380.jpg  
Shipped: https://seacliff.free.componentdock.com

Seacliff is a single-page luxury resort hotel landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600;700;800**, **Plus Jakarta Sans**

## Design tokens (`apps/seacliff/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eff6ff` | primary 50 |
| `--color-primary-100` | `#dbeafe` | primary 100 |
| `--color-primary-200` | `#bfdbfe` | primary 200 |
| `--color-primary-300` | `#93c5fd` | primary 300 |
| `--color-primary-400` | `#60a5fa` | primary 400 |
| `--color-primary-500` | `#3b82f6` | primary 500 |
| `--color-primary-600` | `#1e40af` | primary 600 |
| `--color-primary-700` | `#1e3a8a` | primary 700 |
| `--color-primary-800` | `#172554` | primary 800 |
| `--color-primary-900` | `#0f172a` | primary 900 |
| `--color-primary-950` | `#020617` | primary 950 |
| `--color-accent-100` | `#fef3c7` | accent 100 |
| `--color-accent-200` | `#fde68a` | accent 200 |
| `--color-accent-300` | `#fcd34d` | accent 300 |
| `--color-accent-400` | `#fbbf24` | accent 400 |
| `--color-accent-500` | `#f59e0b` | accent 500 |
| `--color-accent-600` | `#d97706` | accent 600 |
| `--color-accent-700` | `#b45309` | accent 700 |
| `--color-accent-800` | `#92400e` | accent 800 |
| `--color-accent-900` | `#78350f` | accent 900 |
| `--font-sans` | `'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Preloader` | — | no dedicated spec block |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `Stats` | Stats band | see fidelity note below |
| 5 | `Rooms` | Rooms section | see fidelity note below |
| 6 | `Amenities` | Amenities section | see fidelity note below |
| 7 | `Dining` | Dining section | see fidelity note below |
| 8 | `Gallery` | Gallery section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Faq` | FAQ section | see fidelity note below |
| 11 | `Cta` | — | no dedicated spec block |
| 12 | `Footer` | Footer | see fidelity note below |
| 13 | `CookieConsent` | Component Dock attribution | see fidelity note below |
| 14 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Preloader`
*anchors only* — status · Loading

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name "Seacliff", anchor links, a "Book Now" button, and a dark-mode toggle.

### `Hero`
The system SHALL render a full-viewport hero with a headline, blurb, a floating booking widget, and a scroll indicator.

### `Stats`
The system SHALL render an about band with four hotel statistics.

### `Rooms`
The system SHALL render a rooms section with three accommodation cards.

### `Amenities`
The system SHALL render an amenities section with six feature cards.

### `Dining`
The system SHALL render a dining section with three venue cards.

### `Gallery`
The system SHALL render a gallery with six captioned images.

### `Testimonials`
The system SHALL render a testimonials carousel with at least three quotes.

### `Faq`
The system SHALL render an FAQ accordion with expandable questions.

### `Cta`
*anchors only* — Make Your Stay Extraordinary · Book Your Stay · View Offers

### `Footer`
The system SHALL render a dark footer with link columns, contact details, a newsletter form, and a copyright line.

### `CookieConsent`
The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.

### `BackToTop`
*anchors only* — Back to top

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
- **Provenance ban.** No file under `apps/seacliff/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seacliff/public/CNAME` = `seacliff.free.componentdock.com`
  and the package `homepage` = `https://seacliff.free.componentdock.com`.
