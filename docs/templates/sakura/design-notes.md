# Sakura — Design Notes

Reference: **Calendar 08** — `https://colorlib.com/wp/template/calendar-08/`  
Live preview: `https://preview.colorlib.com/theme/calendar-08/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-08.jpg  
Shipped: https://sakura.free.componentdock.com

Sakura is a single-page interactive calendar-with-events widget template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/sakura/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#f8f9fd` | page |
| `--color-brand` | `#fc7fb2` | brand |
| `--color-card` | `#ffffff` | card |
| `--color-ink` | `#000000` | ink |
| `--color-date-text` | `#2b2b2b` | date text |
| `--color-muted` | `#cccccc` | muted |
| `--color-event-dot` | `#ffc107` | event dot |
| `--color-error` | `#ff1744` | error |
| `--font-family-sans` | `'Lato', Arial, sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CalendarWidget` | Calendar grid | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `CalendarWidget`
The system SHALL render the viewed month as a `35 + firstDay`-cell grid (6 rows × 7 columns) with a weekday header, blank leading/trailing cells, the active-date circle, and event-date styling.

### `Footer`
The system SHALL render a minimal footer linking `https://www.componentdock.com/` ("Component Dock") — required by repo convention on every template (the original has no footer).

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
- **Provenance ban.** No file under `apps/sakura/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sakura/public/CNAME` = `sakura.free.componentdock.com`
  and the package `homepage` = `https://sakura.free.componentdock.com`.
