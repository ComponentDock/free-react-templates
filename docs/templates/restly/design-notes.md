# Restly — Design Notes

Reference: **Colorlib Booking 6** — `https://colorlib.com/wp/template/colorlib-booking-6/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-6/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-6.jpg  
Shipped: https://restly.free.componentdock.com

Restly is a single-page hotel reservation form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cantata One**, **Imprima**

## Design tokens (`apps/restly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8c5d28` | brand |
| `--color-ink` | `#333` | Ink — the dark #333 value text of the translucent-white fields. |
| `--color-faded` | `rgba(51, 51, 51, 0.3)` | Faded — placeholder + empty-date text (rgba(51, 51, 51, 0.3)). |
| `--color-field` | `rgba(255, 255, 255, 0.85)` | field |
| `--color-arrowbg` | `rgba(255, 255, 255, 0.3)` | arrowbg |
| `--font-serif` | `'Cantata One', Georgia, 'Times New Roman', serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ReservationForm` | Full-viewport reservation section with photo background | see fidelity note below |

## Section-by-section fidelity

### `ReservationForm`
The system SHALL render a full-viewport (100vh) reservation section with a full-bleed cover/center-positioned photograph as the page background, vertically centering the headline and the booking form. The page SHALL NOT render any navbar, hero chrome, or footer (single-section form demo).

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
- **Provenance ban.** No file under `apps/restly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/restly/public/CNAME` = `restly.free.componentdock.com`
  and the package `homepage` = `https://restly.free.componentdock.com`.
