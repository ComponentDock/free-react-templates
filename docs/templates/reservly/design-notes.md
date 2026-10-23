# Reservly — Design Notes

Reference: **Colorlib Booking 1** — `https://colorlib.com/wp/template/colorlib-booking-1/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-1/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-1.jpg  
Shipped: https://reservly.free.componentdock.com

Reservly is a single-page travel-reservation form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700**

## Design tokens (`apps/reservly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-dark` | `#0069d9` | brand dark |
| `--color-ink` | `#212529` | Ink — body text (#212529 Bootstrap body color). |
| `--color-mist` | `#6c757d` | Mist — muted labels (#6c757d from the original). |
| `--color-paper` | `#f4f4f4` | Paper — light-grey input backgrounds (#f4f4f4 from the original). |
| `--color-charcoal` | `#343a40` | Charcoal — dark navbar + footer (Bootstrap bg-dark #343a40). |
| `--color-primary-50` | `#e8f2ff` | primary 50 |
| `--color-primary-100` | `#cce4ff` | primary 100 |
| `--color-primary-200` | `#9ecbff` | primary 200 |
| `--color-primary-300` | `#66adff` | primary 300 |
| `--color-primary-400` | `#3394ff` | primary 400 |
| `--color-primary-500` | `#0a82ff` | primary 500 |
| `--color-primary-600` | `#007bff` | primary 600 |
| `--color-primary-700` | `#0069d9` | primary 700 |
| `--color-primary-800` | `#0056b3` | primary 800 |
| `--color-primary-900` | `#004494` | primary 900 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark top navigation bar with the site name "Reservly", a small set of anchor links, and a phone link.

### `Hero`
The system SHALL render a full-viewport hero with a photographic background, a translucent blue overlay, a booking form card on the left, and a headline + blurb on the right.

### `Footer`
The system SHALL render a minimal dark footer with the brand and copyright.

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
- **Provenance ban.** No file under `apps/reservly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reservly/public/CNAME` = `reservly.free.componentdock.com`
  and the package `homepage` = `https://reservly.free.componentdock.com`.
