# Coastly — Design Notes

Reference: **Colorlib Booking 2** — `https://colorlib.com/wp/template/colorlib-booking-2/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-2.jpg  
Shipped: https://coastly.free.componentdock.com

Coastly is a single-page hotel booking-form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;700**

## Design tokens (`apps/coastly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#72b01d` | brand |
| `--color-slab` | `#1a1e24` | Slab — the dark charcoal-navy #1a1e24 field/form-block background. |
| `--color-ink` | `#1a1e24` | ink |
| `--color-separator` | `rgba(243, 239, 245, 0.33)` | separator |
| `--color-glyph` | `#f3eff5` | Glyph — the ⇌ swap glyph and the rotated ➜ select arrow (#f3eff5). |
| `--color-dim` | `rgba(255, 255, 255, 0.4)` | dim |
| `--color-wash` | `rgba(255, 255, 255, 0.85)` | wash |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | Full-viewport booking section with photo background and white overlay | see fidelity note below |

## Section-by-section fidelity

### `BookingForm`
The system SHALL render a full-viewport (100vh) booking section with a full-bleed cover/center-positioned photograph as the page background, covered by an 85% white overlay, vertically centering a two-column layout (dark form block + CTA copy). The page SHALL NOT render any navbar, hero chrome, or footer (single-section form demo).

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
- **Provenance ban.** No file under `apps/coastly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/coastly/public/CNAME` = `coastly.free.componentdock.com`
  and the package `homepage` = `https://coastly.free.componentdock.com`.
