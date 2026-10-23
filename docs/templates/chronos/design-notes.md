# Chronos — Design Notes

Reference: **Calendar 10** — `https://colorlib.com/wp/template/calendar-10/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/calendar-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-10.jpg  
Shipped: https://chronos.free.componentdock.com

Chronos is a minimal single-page calendar / "today's date" display template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@100;300;400;700;900**

## Design tokens (`apps/chronos/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#52de97` | Brand mint green — the signature band color of this date-widget card. |
| `--color-page` | `#f8f9fd` | Pale blue-grey page background. |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `DateCard` | Date card structure | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `DateCard`
The system SHALL render a single stacked card (`max-width` ≈ 1/3 of the container on md+ screens, full width on mobile, centered) made of four flush vertical pieces: day band, month, date, year band, with the card outline rounded `0.25rem` and a soft drop shadow `0 15px 30px -16px rgba(0,0,0,0.3)`.

### `Footer`
The source demo has no footer, but the monorepo mandate requires every template's footer to link https://www.componentdock.com/ ("Component Dock"). The system SHALL render a minimal footer with that link.

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
- **Provenance ban.** No file under `apps/chronos/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/chronos/public/CNAME` = `chronos.free.componentdock.com`
  and the package `homepage` = `https://chronos.free.componentdock.com`.
