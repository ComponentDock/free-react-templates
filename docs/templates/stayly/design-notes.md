# Stayly — Design Notes

Reference: **Colorlib Booking 12** — `https://colorlib.com/wp/template/colorlib-booking-12/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-12.jpg  
Shipped: https://stayly.free.componentdock.com

Stayly is a single-page travel-reservation form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cabin**, **Cabin:wght@400;700**

## Design tokens (`apps/stayly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6499ff` | brand |
| `--color-navy` | `#122244` | Navy — heading + input text (#122244, 700). |
| `--color-mist` | `#f7f9fa` | Mist — page + input background (#f7f9fa). |
| `--color-fog` | `#dde3e8` | Fog — placeholders + empty date text (#dde3e8). |
| `--color-slate` | `#b5c1cc` | Slate — field labels (#b5c1cc, uppercase 14px 700). |
| `--color-arrow` | `#dddee9` | Arrow — select arrows (#dddee9). |
| `--color-faint` | `#f9fafc` | Faint — form inner border (#f9fafc). |
| `--color-primary-50` | `#eaf2ff` | primary 50 |
| `--color-primary-100` | `#d6e5ff` | primary 100 |
| `--color-primary-200` | `#adcbff` | primary 200 |
| `--color-primary-300` | `#84b1ff` | primary 300 |
| `--color-primary-400` | `#74a4ff` | primary 400 |
| `--color-primary-500` | `#6c9eff` | primary 500 |
| `--color-primary-600` | `#6499ff` | primary 600 |
| `--color-primary-700` | `#4f7de0` | primary 700 |
| `--color-primary-800` | `#3d63b8` | primary 800 |
| `--color-primary-900` | `#2e4a8c` | primary 900 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | Full-viewport booking section | see fidelity note below |

## Section-by-section fidelity

### `BookingForm`
The system SHALL render a full-viewport (100vh) light-gray booking section with a vertically centered white split-screen form card (image panel on the left, form on the right). The page SHALL NOT render any navbar, hero copy, or footer chrome (single-section form demo).

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
- **Provenance ban.** No file under `apps/stayly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stayly/public/CNAME` = `stayly.free.componentdock.com`
  and the package `homepage` = `https://stayly.free.componentdock.com`.
