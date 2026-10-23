# Ridely — Design Notes

Reference: **Colorlib Booking 13** — `https://colorlib.com/wp/template/colorlib-booking-13/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-13/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-13.jpg  
Shipped: https://ridely.free.componentdock.com

Ridely is a single-page taxi-booking form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@400;700**

## Design tokens (`apps/ridely/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffc600` | brand |
| `--color-coal` | `#1a1b1d` | Coal — the near-black card + button background (#1a1b1d). |
| `--color-ash` | `#cecccd` | Ash — input underline border + select arrow (#cecccd). |
| `--color-smoke` | `rgba(255, 255, 255, 0.3)` | Smoke — placeholders + empty date/time text (rgba(255,255,255,0.3)). |
| `--color-primary-50` | `#fffbe6` | primary 50 |
| `--color-primary-100` | `#fff4b8` | primary 100 |
| `--color-primary-200` | `#ffec8a` | primary 200 |
| `--color-primary-300` | `#ffe45c` | primary 300 |
| `--color-primary-400` | `#ffd92e` | primary 400 |
| `--color-primary-500` | `#ffd000` | primary 500 |
| `--color-primary-600` | `#ffc600` | primary 600 |
| `--color-primary-700` | `#e0ad00` | primary 700 |
| `--color-primary-800` | `#b88f00` | primary 800 |
| `--color-primary-900` | `#8f6f00` | primary 900 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | Full-viewport taxi booking section | see fidelity note below |

## Section-by-section fidelity

### `BookingForm`
The system SHALL render a full-viewport (100vh) booking section on a white page with a vertically centered near-black split-screen form card (image panel on the left, form on the right). The page SHALL NOT render any navbar, hero copy, or footer chrome (single-section form demo).

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
- **Provenance ban.** No file under `apps/ridely/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ridely/public/CNAME` = `ridely.free.componentdock.com`
  and the package `homepage` = `https://ridely.free.componentdock.com`.
