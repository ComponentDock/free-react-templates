# Planner — Design Notes

Reference: **Calendar 01** — `https://colorlib.com/wp/template/calendar-01/`  
Live preview: `https://preview.colorlib.com/theme/calendar-01/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-01.jpg  
Shipped: https://planner.free.componentdock.com

Planner is a single-page minimalist calendar widget template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600**

## Design tokens (`apps/planner/src/index.css` `@theme`)

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
| 1 | `Calendar` | — | no dedicated spec block |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Calendar`
*anchors only* — Previous month · Next month · Calendar #01

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
- **Provenance ban.** No file under `apps/planner/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/planner/public/CNAME` = `planner.free.componentdock.com`
  and the package `homepage` = `https://planner.free.componentdock.com`.
