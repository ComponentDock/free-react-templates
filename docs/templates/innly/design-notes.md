# Innly — Design Notes

Reference: **Colorlib Booking 15** — `https://colorlib.com/wp/template/colorlib-booking-15/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-15/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-15.jpg  
Shipped: https://innly.free.componentdock.com

Innly is a single-page resort-reservation form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cardo**, **Cardo:wght@700**, **Josefin Sans**

## Design tokens (`apps/innly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c99552` | brand |
| `--color-ink` | `#0c0c09` | Ink — the near-black headline color (#0c0c09). |
| `--color-mist` | `#e1e1e1` | mist |
| `--color-slate` | `#6b6b6d` | Slate — the input text color (#6b6b6d). |
| `--color-primary-50` | `#faf5ee` | primary 50 |
| `--color-primary-100` | `#f3e8d9` | primary 100 |
| `--color-primary-200` | `#e8d5b8` | primary 200 |
| `--color-primary-300` | `#dbbd8f` | primary 300 |
| `--color-primary-400` | `#d1ab70` | primary 400 |
| `--color-primary-500` | `#c99552` | primary 500 |
| `--color-primary-600` | `#b58248` | primary 600 |
| `--color-primary-700` | `#9a6b3c` | primary 700 |
| `--color-primary-800` | `#7c5531` | primary 800 |
| `--color-primary-900` | `#5f4126` | primary 900 |
| `--font-display` | `'Cardo', Georgia, 'Times New Roman', serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | Full-viewport resort booking section | see fidelity note below |

## Section-by-section fidelity

### `BookingForm`
The system SHALL render a full-viewport (100vh) booking section with a tropical-resort photograph background dimmed by a 20% black overlay, vertically centering a white rounded form card. The page SHALL NOT render any navbar, hero copy, or footer chrome (single-section form demo).

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
- **Provenance ban.** No file under `apps/innly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/innly/public/CNAME` = `innly.free.componentdock.com`
  and the package `homepage` = `https://innly.free.componentdock.com`.
