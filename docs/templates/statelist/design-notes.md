# Statelist — Design Notes

Reference: **Multiselect 10** — `https://colorlib.com/wp/template/multiselect-10/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/multiselect-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-10.jpg  
Shipped: https://statelist.free.componentdock.com

Statelist is a single-page multiselect-dropdown component demo in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/statelist/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#f8f9fd` | page |
| `--color-accent` | `#ff5959` | accent |
| `--color-label` | `#808080` | label |
| `--color-heading` | `#000000` | heading |
| `--color-checkbox-border` | `rgba(0, 0, 0, 0.1)` | checkbox border |
| `--color-search-bg` | `rgba(0, 0, 0, 0.05)` | search bg |
| `--font-sans` | `'Lato', Arial, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Heading` | Heading section | see fidelity note below |
| 2 | `Dropdown` | Dropdown trigger | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Heading`
The system SHALL render a centered heading section on the light page.

### `Dropdown`
The system SHALL render a white dropdown trigger with label, quantity, and chevron icon.

### `Footer`
The system SHALL render a minimal footer linking `https://www.componentdock.com/` (branded "Component Dock").

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
- **Provenance ban.** No file under `apps/statelist/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/statelist/public/CNAME` = `statelist.free.componentdock.com`
  and the package `homepage` = `https://statelist.free.componentdock.com`.
