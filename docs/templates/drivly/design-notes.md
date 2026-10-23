# Drivly — Design Notes

Reference: **Colorlib Booking 4** — `https://colorlib.com/wp/template/colorlib-booking-4/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-4/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-4.jpg  
Shipped: https://drivly.free.componentdock.com

Drivly is a single-page car-booking form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;700**

## Design tokens (`apps/drivly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffc001` | brand |
| `--color-ink` | `#101113` | ink |
| `--color-field` | `#f5f5f5` | Field — the light-grey #f5f5f5 solid input fill (no border). |
| `--color-placeholder` | `rgba(16, 17, 19, 0.3)` | placeholder |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CarBookingForm` | Full-viewport booking section with photo background | see fidelity note below |

## Section-by-section fidelity

### `CarBookingForm`
The system SHALL render a full-viewport (100vh) booking section with a full-bleed cover/center-positioned photograph as the page background, dimmed by a dark overlay scrim, vertically centering a single dark booking card. The page SHALL NOT render any navbar, hero chrome, or footer (single-section form demo).

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
- **Provenance ban.** No file under `apps/drivly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/drivly/public/CNAME` = `drivly.free.componentdock.com`
  and the package `homepage` = `https://drivly.free.componentdock.com`.
