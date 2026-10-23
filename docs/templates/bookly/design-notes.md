# Bookly — Design Notes

Reference: **Colorlib Booking 20** — `https://colorlib.com/wp/template/colorlib-booking-20/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-20.jpg  
Shipped: https://bookly.free.componentdock.com

Bookly is a single-page hotel reservation-form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;700**

## Design tokens (`apps/bookly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#2b9328` | brand |
| `--color-brand-dark` | `#237620` | brand dark |
| `--color-ink` | `#181818` | ink |
| `--color-line` | `rgba(0, 0, 0, 0.2)` | line |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | Full-viewport booking section with photo background and white overlay | see fidelity note below |

## Section-by-section fidelity

### `BookingForm`
The system SHALL render a full-viewport (100vh) booking section with a full-bleed cover/center-positioned photograph as the page background, covered by an 80% white overlay, vertically centering a two-column layout (CTA copy + white form card). The page SHALL NOT render any navbar, hero chrome, or footer (single-section form demo).

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
- **Provenance ban.** No file under `apps/bookly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bookly/public/CNAME` = `bookly.free.componentdock.com`
  and the package `homepage` = `https://bookly.free.componentdock.com`.
