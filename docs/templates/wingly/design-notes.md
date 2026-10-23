# Wingly — Design Notes

Reference: **Colorlib Booking 5** — `https://colorlib.com/wp/template/colorlib-booking-5/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-5/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-5.jpg  
Shipped: https://wingly.free.componentdock.com

Wingly is a single-page airline flight-booking form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **PT Sans**, **PT Sans:wght@400**

## Design tokens (`apps/wingly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f23e3e` | brand |
| `--color-ink` | `#191a1e` | ink |
| `--color-faded` | `rgba(82, 82, 84, 0.4)` | Faded — placeholder + empty-date text (rgba(82, 82, 84, 0.4)). |
| `--color-arrow` | `rgba(0, 0, 0, 0.3)` | Arrow — the floating select arrow glyph (rgba(0, 0, 0, 0.3)). |
| `--color-card` | `rgba(0, 0, 0, 0.7)` | Card — the dark translucent booking card (rgba(0, 0, 0, 0.7)). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | Full-viewport booking section with photo background | see fidelity note below |

## Section-by-section fidelity

### `BookingForm`
The system SHALL render a full-viewport (100vh) booking section with a full-bleed cover/center-positioned photograph as the page background, vertically centering a single dark translucent booking card. The page SHALL NOT render any navbar, hero chrome, headline/CTA column, or footer (single-section form demo).

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
- **Provenance ban.** No file under `apps/wingly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wingly/public/CNAME` = `wingly.free.componentdock.com`
  and the package `homepage` = `https://wingly.free.componentdock.com`.
