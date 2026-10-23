# Kairos — Design Notes

Reference: **Calendar 17** — `https://colorlib.com/wp/template/calendar-17/`  
Live preview: `https://preview.colorlib.com/theme/calendar-17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-17.jpg  
Shipped: https://kairos.free.componentdock.com

Kairos is a minimal single-page inline date-picker template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/kairos/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f67280` | brand |
| `--color-page-bg` | `#efefef` | page bg |
| `--color-text` | `#212529` | text |
| `--color-muted` | `#ccc` | muted |
| `--font-roboto` | `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font roboto |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ResultField` | Render result input with placeholder | see fidelity note below |
| 2 | `Calendar` | Render current month calendar | see fidelity note below |
| 3 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `ResultField`
Users SHALL see a disabled input field with placeholder text "Select date".

### `Calendar`
Users SHALL see the current month calendar with weekday headers and day cells.

### `Footer`
The footer SHALL link to https://www.componentdock.com/ opening in a new tab.

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
- **Provenance ban.** No file under `apps/kairos/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kairos/public/CNAME` = `kairos.free.componentdock.com`
  and the package `homepage` = `https://kairos.free.componentdock.com`.
