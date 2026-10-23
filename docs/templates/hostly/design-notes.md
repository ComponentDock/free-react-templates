# Hostly — Design Notes

Reference: **Colorlib Booking 17** — `https://colorlib.com/wp/template/colorlib-booking-17/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-17.jpg  
Shipped: https://hostly.free.componentdock.com

Hostly is a single-page hotel/travel booking-form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Alice**, **Alice:wght@400;700**, **Playfair Display**

## Design tokens (`apps/hostly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#856849` | brand |
| `--color-ink` | `#151515` | Ink — the near-black input text color (#151515). |
| `--color-mist` | `#e5e5e5` | mist |
| `--color-soft` | `#f8f8f8` | Soft — the input focus background (#f8f8f8). |
| `--font-sans` | `'Alice', Georgia, 'Times New Roman', serif` | font sans |
| `--font-display` | `'Playfair Display', Georgia, 'Times New Roman', serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | Full-viewport booking section with taupe wash | see fidelity note below |

## Section-by-section fidelity

### `BookingForm`
The system SHALL render a full-viewport (100vh) booking section on a light warm-taupe background (`rgba(133,104,73,0.33)`) vertically centering a white rounded form card. The page SHALL NOT render any navbar, hero copy, or footer chrome (single-section form demo).

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
- **Provenance ban.** No file under `apps/hostly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hostly/public/CNAME` = `hostly.free.componentdock.com`
  and the package `homepage` = `https://hostly.free.componentdock.com`.
