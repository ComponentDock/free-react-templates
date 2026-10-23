# Skyly — Design Notes

Reference: **Colorlib Booking 19** — `https://colorlib.com/wp/template/colorlib-booking-19/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-19/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-19.jpg  
Shipped: https://skyly.free.componentdock.com

Skyly is a single-page airline flight-booking form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@400;700**

## Design tokens (`apps/skyly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4fa3e3` | brand |
| `--color-brand-dark` | `#3d8fd4` | brand dark |
| `--color-label` | `#98c9ee` | label |
| `--color-mist` | `#dfe5e9` | mist |
| `--color-ink` | `#191a1e` | ink |
| `--color-soft` | `#f9fafb` | Soft — the very light input focus background (#f9fafb). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | Full-viewport booking section with photo background | see fidelity note below |

## Section-by-section fidelity

### `BookingForm`
The system SHALL render a full-viewport (100vh) booking section with a full-bleed cover/center-positioned photograph as the page background, vertically centering a two-column layout (CTA copy + white form card). The page SHALL NOT render any navbar, hero chrome, or footer (single-section form demo).

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
- **Provenance ban.** No file under `apps/skyly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/skyly/public/CNAME` = `skyly.free.componentdock.com`
  and the package `homepage` = `https://skyly.free.componentdock.com`.
