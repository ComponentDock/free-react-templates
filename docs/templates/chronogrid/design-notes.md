# Chronogrid — Design Notes

Reference: **Calendar 02** — `https://colorlib.com/wp/template/calendar-02/`  
Live preview: `https://preview.colorlib.com/theme/calendar-02/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-02.jpg  
Shipped: https://chronogrid.free.componentdock.com

Recreation of ColorLib template **Calendar 02** (`https://colorlib.com/wp/template/calendar-02/`), preview URL: `https://preview.colorlib.com/theme/calendar-02/` (fallback to screenshot analysis as preview is currently 404).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600**

## Design tokens (`apps/chronogrid/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#3d88f7` | accent |
| `--color-month` | `#1371e6` | month |
| `--color-chevron` | `#b9cae7` | chevron |
| `--color-past` | `#7c7d81` | past |
| `--color-future` | `#111111` | future |
| `--color-gridline` | `#e6e6e6` | gridline |
| `--color-page` | `#f7f8fc` | page |
| `--font-family-sans` | `'Poppins', system-ui, sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Calendar` | Render the monthly calendar grid | see fidelity note below |
| 2 | `Footer` | Footer branding | see fidelity note below |

## Section-by-section fidelity

### `Calendar`
The page SHALL display a calendar grid with the current month name, weekday headers (Sun–Sat), and clickable day cells.

### `Footer`
The page footer SHALL link to the Component Dock website.

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
- **Provenance ban.** No file under `apps/chronogrid/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/chronogrid/public/CNAME` = `chronogrid.free.componentdock.com`
  and the package `homepage` = `https://chronogrid.free.componentdock.com`.
