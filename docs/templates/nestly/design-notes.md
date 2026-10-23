# Nestly — Design Notes

Reference: **Colorlib Booking 3** — `https://colorlib.com/wp/template/colorlib-booking-3/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-3/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-3.jpg  
Shipped: https://nestly.free.componentdock.com

Nestly is a single-page hotel/travel booking-form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Alegreya**, **Alegreya:wght@700**, **Source Sans Pro**

## Design tokens (`apps/nestly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#9a8067` | brand |
| `--color-ink` | `#3c404a` | Ink — the dark slate #3c404a big serif field values. |
| `--color-label` | `#818390` | Label — the grey #818390 static field labels and select arrows. |
| `--color-bar` | `rgba(60, 64, 101, 0.1)` | bar |
| `--font-display` | `'Alegreya', Georgia, 'Times New Roman', serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | Full-viewport booking section with photo background | see fidelity note below |

## Section-by-section fidelity

### `BookingForm`
The system SHALL render a full-viewport (100vh) booking section with a full-bleed cover/center-positioned photograph as the page background (no overlay), vertically centering a single horizontal white booking bar. The page SHALL NOT render any navbar, hero chrome, or footer (single-section form demo).

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
- **Provenance ban.** No file under `apps/nestly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nestly/public/CNAME` = `nestly.free.componentdock.com`
  and the package `homepage` = `https://nestly.free.componentdock.com`.
