# Timescape — Design Notes

Reference: **Calendar 19** — `https://colorlib.com/wp/template/calendar-19/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/calendar-19/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-19.jpg  
Shipped: https://timescape.free.componentdock.com

Timescape is a single-page month-calendar template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/timescape/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f67280` | brand |
| `--color-today` | `#40e0d0` | today |
| `--color-page-bg` | `#efefef` | page bg |
| `--color-text` | `#212529` | text |
| `--color-grid-border` | `#f9f9f9` | grid border |
| `--color-more-link` | `#007bff` | more link |
| `--color-disabled` | `#ccc` | disabled |
| `--font-roboto` | `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font roboto |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Calendar` | — | no dedicated spec block |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Calendar`
*anchors only* — region · Calendar · Today · Previous month · Next month · dialog

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
- **Provenance ban.** No file under `apps/timescape/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/timescape/public/CNAME` = `timescape.free.componentdock.com`
  and the package `homepage` = `https://timescape.free.componentdock.com`.
