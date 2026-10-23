# Sleeply — Design Notes

Reference: **Colorlib Booking 7** — `https://colorlib.com/wp/template/colorlib-booking-7/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-7/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-7.jpg  
Shipped: https://sleeply.free.componentdock.com

Sleeply is a single-page hotel reservation form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;600**

## Design tokens (`apps/sleeply/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#184c8f` | brand |
| `--color-ink` | `#090a0b` | Ink — the near-black #090a0b value text of the light-gray fields. |
| `--color-faded` | `#b1b6bd` | Faded — placeholder + empty-date text (#b1b6bd). |
| `--color-field` | `#f2f1f1` | field |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `BookingForm`
*anchors only* — Destination · Guests · Children · Check In · checkIn · Check out

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
- **Provenance ban.** No file under `apps/sleeply/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sleeply/public/CNAME` = `sleeply.free.componentdock.com`
  and the package `homepage` = `https://sleeply.free.componentdock.com`.
