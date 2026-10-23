# Dyad — Design Notes

Reference: **Calendar 18** — `https://colorlib.com/wp/template/calendar-18/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/calendar-18/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-18.jpg  
Shipped: https://dyad.free.componentdock.com

Dyad is a minimal single-page date-range-picker template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/dyad/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f67280` | brand |
| `--color-page-bg` | `#efefef` | page bg |
| `--color-text` | `#212529` | text |
| `--color-muted` | `#ccc` | muted |
| `--color-disabled` | `#fcc` | disabled |
| `--font-roboto` | `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font roboto |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Calendar` | Month header with navigation (per calendar) | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Calendar`
Each calendar SHALL render a centered month/year label (e.g. "August 2026") with a previous-month button on its left and a next-month button on its right; the two calendars navigate independently.

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
- **Provenance ban.** No file under `apps/dyad/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dyad/public/CNAME` = `dyad.free.componentdock.com`
  and the package `homepage` = `https://dyad.free.componentdock.com`.
