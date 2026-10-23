# Roomzy — Design Notes

Reference: **Colorlib Booking 10** — `https://colorlib.com/wp/template/colorlib-booking-10/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-10.jpg  
Shipped: https://roomzy.free.componentdock.com

Roomzy is a single-page hotel room-reservation form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:ital,wght@0,400;0,700;1,400**

## Design tokens (`apps/roomzy/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f14634` | brand |
| `--color-brand-dark` | `#d93a2a` | brand dark |
| `--color-ink` | `#0e2753` | Ink — control values (dark navy #0e2753, 20px bold). |
| `--color-line` | `#dddee9` | Line — field dividers + placeholders (#dddee9). |
| `--color-frost` | `#f9f9f9` | Frost — focus background (#f9f9f9; the source has NO focus ring). |
| `--color-primary-50` | `#fef0ee` | primary 50 |
| `--color-primary-100` | `#fddcd8` | primary 100 |
| `--color-primary-200` | `#fbb9b1` | primary 200 |
| `--color-primary-300` | `#f99285` | primary 300 |
| `--color-primary-400` | `#f76b5d` | primary 400 |
| `--color-primary-500` | `#f45c4b` | primary 500 |
| `--color-primary-600` | `#f14634` | primary 600 |
| `--color-primary-700` | `#d93a2a` | primary 700 |
| `--color-primary-800` | `#b52e21` | primary 800 |
| `--color-primary-900` | `#8f241a` | primary 900 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `BookingForm`
*anchors only* — status · check-in · check-out · adults · children · room-type

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
- **Provenance ban.** No file under `apps/roomzy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/roomzy/public/CNAME` = `roomzy.free.componentdock.com`
  and the package `homepage` = `https://roomzy.free.componentdock.com`.
