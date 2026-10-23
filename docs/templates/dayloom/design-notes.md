# Dayloom — Design Notes

Reference: **Calendar 04** — `https://colorlib.com/wp/template/calendar-04/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/calendar-04/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-04.jpg  
Shipped: https://dayloom.free.componentdock.com

Recreation of ColorLib Calendar 04 (https://colorlib.com/wp/template/calendar-04/). A modern interactive calendar and event schedule application featuring month navigation, event creation, date selection details panel, and responsive sidebar navigation.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter:wght@300;400;500;600;700**, **Lato**

## Design tokens (`apps/dayloom/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#bd83ce` | accent |
| `--color-today` | `#bd83ce` | today |
| `--color-selected-bg` | `rgba(153, 153, 161, 0.2)` | selected bg |
| `--color-past` | `#d5d5d5` | past |
| `--color-future` | `#111111` | future |
| `--color-weekday` | `#000000` | weekday |
| `--color-chevron` | `#cccccc` | chevron |
| `--color-page` | `#ffffff` | page |
| `--color-heading` | `#000000` | heading |
| `--color-border-hover` | `#ededed` | border hover |
| `--font-family-sans` | `'Lato', system-ui, sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `CalendarGrid` | Interactive Calendar Grid | see fidelity note below |
| 3 | `EventSidebar` | Event Details Sidebar | see fidelity note below |
| 4 | `Footer` | Footer & Attribution | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Mobile menu · Dayloom

### `CalendarGrid`
A full month grid with days of the week, today highlight, and date selection.

### `EventSidebar`
A sidebar displaying events for the selected date with add and delete functionality.

### `Footer`
A footer with Component Dock branding.

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
- **Provenance ban.** No file under `apps/dayloom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dayloom/public/CNAME` = `dayloom.free.componentdock.com`
  and the package `homepage` = `https://dayloom.free.componentdock.com`.
