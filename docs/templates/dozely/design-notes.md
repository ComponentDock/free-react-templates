# Dozely — Design Notes

Reference: **Colorlib Booking 8** — `https://colorlib.com/wp/template/colorlib-booking-8/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-8/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-8.jpg  
Shipped: https://dozely.free.componentdock.com

Dozely is a single-page hotel reservation form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@400;700**

## Design tokens (`apps/dozely/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff8846` | brand |
| `--color-deep` | `#e35e0a` | Deep — the deep-orange "Book Now" button background. |
| `--color-fill` | `rgba(255, 255, 255, 0.2)` | fill |
| `--color-faded` | `rgba(255, 255, 255, 0.5)` | faded |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ReservationForm` | Full-viewport reservation section with white page | see fidelity note below |

## Section-by-section fidelity

### `ReservationForm`
The system SHALL render a full-viewport (100vh) reservation section on a plain white page, vertically centering the booking card. The page SHALL NOT render any navbar, hero chrome, or footer (single-section form demo).

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
- **Provenance ban.** No file under `apps/dozely/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dozely/public/CNAME` = `dozely.free.componentdock.com`
  and the package `homepage` = `https://dozely.free.componentdock.com`.
