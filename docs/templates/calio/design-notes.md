# Calio — Design Notes

Reference: **Calendar 20** — `https://colorlib.com/wp/template/calendar-20/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/calendar-20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-20.jpg  
Shipped: https://calio.free.componentdock.com

Calio is a multi-view calendar template with a month view, week view, day view, list view and footer. It recreates the ColorLib **Calendar 20** design (https://colorlib.com/wp/template/calendar-20/, preview: https://preview.colorlib.com/theme/bootstrap/calendar-20/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/calio/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-page-bg` | `#efefef` | page bg |
| `--color-text` | `#212529` | text |
| `--color-text-muted` | `#666` | text muted |
| `--color-grid-border` | `#e5e7eb` | grid border |
| `--color-today-bg` | `#007bff` | today bg |
| `--color-event-default` | `#007bff` | event default |
| `--color-event-accent` | `#28a745` | event accent |
| `--color-event-warning` | `#ffc107` | event warning |
| `--color-event-danger` | `#dc3545` | event danger |
| `--font-roboto` | `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font roboto |

> The spec has no section-level requirements; the order below is read from `apps/calio/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CalendarView` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `CalendarView`
*anchors only* — region · Calendar · Today · group · View selector

### `Footer`
*anchors only* — Component Dock

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
- **Provenance ban.** No file under `apps/calio/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/calio/public/CNAME` = `calio.free.componentdock.com`
  and the package `homepage` = `https://calio.free.componentdock.com`.
