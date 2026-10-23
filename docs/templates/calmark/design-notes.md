# Calmark — Design Notes

Reference: **Calendar 05** — `https://colorlib.com/wp/template/calendar-05/`  
Live preview: `https://preview.colorlib.com/theme/calendar-05/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-05.jpg  
Shipped: https://calmark.free.componentdock.com

A Calendar Dashboard template with hero and features sections. Recreation of ColorLib Calendar V05 (`https://colorlib.com/wp/template/calendar-05/`, preview: `https://preview.colorlib.com/theme/bootstrap/calendar-05/`), built as a modern React 19 + Vite + Tailwind CSS 4 application named `calmark.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700;900**

## Design tokens (`apps/calmark/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-year` | `#7e0cf5` | year |
| `--color-year-light` | `rgba(255, 255, 255, 0.2)` | year light |
| `--color-month` | `#983df7` | month |
| `--color-month-light` | `rgba(255, 255, 255, 0.2)` | month light |
| `--color-day` | `#a555f8` | day |
| `--color-day-light` | `rgba(255, 255, 255, 0.2)` | day light |
| `--color-strip-text` | `rgba(255, 255, 255, 0.3)` | strip text |
| `--color-page` | `#f4f4f8` | page |
| `--color-heading` | `#1a1a2e` | heading |
| `--color-body` | `#4a4a5a` | body |
| `--color-accent` | `#7e0cf5` | accent |
| `--color-card` | `#ffffff` | card |
| `--color-border` | `#e5e7eb` | border |
| `--font-family-sans` | `'Lato', system-ui, sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `CalendarDashboard` | — | no dedicated spec block |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Calmark" and navigation links.

### `Hero`
The system SHALL render a hero section with a title and subtitle for the calendar dashboard.

### `CalendarDashboard`
*anchors only* — Year · Month

### `Features`
The system SHALL render a features grid highlighting calendar capabilities.

### `Footer`
The system SHALL render a footer with copyright and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/calmark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/calmark/public/CNAME` = `calmark.free.componentdock.com`
  and the package `homepage` = `https://calmark.free.componentdock.com`.
