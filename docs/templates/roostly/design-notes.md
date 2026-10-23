# Roostly — Design Notes

Reference: **Colorlib Booking 11** — `https://colorlib.com/wp/template/colorlib-booking-11/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-11/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-11.jpg  
Shipped: https://roostly.free.componentdock.com

Roostly is a single-page travel-reservation form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600**

## Design tokens (`apps/roostly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff0063` | brand |
| `--color-brand-dark` | `#e00059` | brand dark |
| `--color-ink` | `#222` | Ink — input text (#222). |
| `--color-line` | `#818390` | Line — placeholders + empty-date text + select arrow (#818390). |
| `--color-divider` | `rgba(129, 131, 144, 0.15)` | divider |
| `--color-primary-50` | `#fff0f6` | primary 50 |
| `--color-primary-100` | `#ffd9e7` | primary 100 |
| `--color-primary-200` | `#ffb3cf` | primary 200 |
| `--color-primary-300` | `#ff85b2` | primary 300 |
| `--color-primary-400` | `#ff4f90` | primary 400 |
| `--color-primary-500` | `#ff1f76` | primary 500 |
| `--color-primary-600` | `#ff0063` | primary 600 |
| `--color-primary-700` | `#e00059` | primary 700 |
| `--color-primary-800` | `#b8004a` | primary 800 |
| `--color-primary-900` | `#8f003a` | primary 900 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | Booking section | see fidelity note below |

## Section-by-section fidelity

### `BookingForm`
The system SHALL render a full-viewport booking section with a photographic background, a translucent white overlay, and a vertically centered white form card. The page SHALL NOT render any navbar, hero copy, or footer chrome (single-section form demo).

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
- **Provenance ban.** No file under `apps/roostly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/roostly/public/CNAME` = `roostly.free.componentdock.com`
  and the package `homepage` = `https://roostly.free.componentdock.com`.
