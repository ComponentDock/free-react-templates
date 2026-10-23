# Sapor — Design Notes

Reference: **Flavor 6** — `https://colorlib.com/wp/template/flavor-6/`  
Live preview: `https://preview.colorlib.com/theme/flavor-6/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/flavor-template-1770211372273.jpg  
Shipped: https://sapor.free.componentdock.com

Sapor is a single-page restaurant landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**, **Playfair Display**

## Design tokens (`apps/sapor/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fee2e2` | primary 100 |
| `--color-primary-200` | `#fecaca` | primary 200 |
| `--color-primary-300` | `#fca5a5` | primary 300 |
| `--color-primary-400` | `#f87171` | primary 400 |
| `--color-primary-500` | `#ef4444` | primary 500 |
| `--color-primary-600` | `#dc2626` | primary 600 |
| `--color-primary-700` | `#b91c1c` | primary 700 |
| `--color-primary-800` | `#991b1b` | primary 800 |
| `--color-primary-900` | `#7f1d1d` | primary 900 |
| `--font-serif` | `'Playfair Display', ui-serif, Georgia, serif` | Playfair Display (serif headings) + Inter (body) — the original's fonts |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Menu` | Menu section | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `Reservation` | Reservation section | see fidelity note below |
| 7 | `Gallery` | Gallery section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed top navigation bar with the brand wordmark, section links, a "Reserve a Table" button and a mobile menu, switching from transparent to solid on scroll.

### `Hero`
The system SHALL render a full-viewport dark hero with a photo background, a serif headline, a tagline, a sub-paragraph, two CTAs and a scroll arrow.

### `About`
The system SHALL render a "A Family Tradition of Excellence" section with history paragraphs and three statistics.

### `Menu`
The system SHALL render a "Chef's Selections" section with four dish cards, each showing a name, description, price and one featured badge.

### `Testimonials`
The system SHALL render a "Reviews & Testimonials" section with at least two testimonial cards.

### `Reservation`
The system SHALL render a dark "Make a Reservation" section with a reservation form.

### `Gallery`
The system SHALL render a "A Glimpse of Sapor" image gallery grid.

### `Footer`
The system SHALL render a dark footer with a brand blurb, contact details, Quick Links, opening Hours and a Newsletter signup.

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
- **Provenance ban.** No file under `apps/sapor/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sapor/public/CNAME` = `sapor.free.componentdock.com`
  and the package `homepage` = `https://sapor.free.componentdock.com`.
