# Casamora — Design Notes

Reference: **Casahotel** — `https://colorlib.com/wp/template/casahotel/`  
Live preview: `https://preview.colorlib.com/theme/casahotel/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/casahotel-free-template.jpg  
Shipped: https://casamora.free.componentdock.com

A Hotel / Resort template with hero, check availability, about section, great, gallery and events sections. Recreation of the ColorLib "Casahotel" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Mukta Mahee**, **Mukta Mahee:wght@200;300;400;500;600;700;800**, **Playfair Display**

## Design tokens (`apps/casamora/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fd7e14` | brand |
| `--color-brand-dark` | `#e86e0a` | brand dark |
| `--color-body-bg` | `#ffffff` | body bg |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--color-footer-bg` | `#1a1a1a` | footer bg |
| `--color-body-text` | `#6c757d` | body text |
| `--color-heading-text` | `#000000` | heading text |
| `--font-body` | `'Mukta Mahee', arial, sans-serif` | font body |
| `--font-heading` | `'Playfair Display', times, serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `BookingBar` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Rooms` | — | no dedicated spec block |
| 6 | `Gallery` | — | no dedicated spec block |
| 7 | `Testimonials` | — | no dedicated spec block |
| 8 | `Events` | — | no dedicated spec block |
| 9 | `CtaBanner` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Casamora · Reservation Form

### `Hero`
*anchors only* — Enjoy A Luxury Experience

### `BookingBar`
*anchors only* — Check Availability · Check In · Check Out · Adults · Children

### `About`
*anchors only* — Welcome · Casamora. · Read More · See video

### `Rooms`
*anchors only* — Great Offers · Book Now · View All Rooms

### `Gallery`
*anchors only* — See The Gallery · View More Photos

### `Testimonials`
*anchors only* — Testimonial

### `Events`
*anchors only* — Events

### `CtaBanner`
*anchors only* — Make Yourself Comfortable in Any of Our Fully Air-conditioned Rooms · Reserve Now

### `Footer`
*anchors only* — Useful Links · About Us · Terms · Privacy · Help · Rooms

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
- **Provenance ban.** No file under `apps/casamora/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/casamora/public/CNAME` = `casamora.free.componentdock.com`
  and the package `homepage` = `https://casamora.free.componentdock.com`.
