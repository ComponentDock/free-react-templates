# Guestly — Design Notes

Reference: **Colorlib Booking 18** — `https://colorlib.com/wp/template/colorlib-booking-18/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-booking-18/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-booking-18.jpg  
Shipped: https://guestly.free.componentdock.com

Guestly is a single-page hotel room-reservation form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@400;700**, **Medula One**

## Design tokens (`apps/guestly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff9000` | brand |
| `--color-brand-dark` | `#e68200` | brand dark |
| `--color-panel` | `#0f0f0f` | Panel — the near-black booking card background (#0f0f0f). |
| `--color-ink` | `#222` | ink |
| `--color-dim` | `rgba(255, 255, 255, 0.15)` | dim |
| `--color-scrim` | `rgba(81, 81, 81, 0.8)` | scrim |
| `--font-display` | `'Medula One', cursive` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | Full-viewport booking section with dark card on white | see fidelity note below |

## Section-by-section fidelity

### `BookingForm`
The system SHALL render a full-viewport (100vh) booking section on a WHITE page background vertically centering a sharp-cornered near-black form card (`#0f0f0f`, max-width 642px, no radius, no shadow). The page SHALL NOT render any navbar, hero copy, or footer chrome (single-section form demo).

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
- **Provenance ban.** No file under `apps/guestly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/guestly/public/CNAME` = `guestly.free.componentdock.com`
  and the package `homepage` = `https://guestly.free.componentdock.com`.
