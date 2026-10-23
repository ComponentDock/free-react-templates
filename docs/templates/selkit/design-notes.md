# Selkit — Design Notes

Reference: **Multiselect 16** — `https://colorlib.com/wp/template/multiselect-16/`  
Live preview: `https://preview.colorlib.com/theme/multiselect-16/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-16.jpg  
Shipped: https://selkit.free.componentdock.com

Selkit is a single-page multi-select FORM in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Multiselect 16" free template (source: https://colorlib.com/wp/template/multiselect-16/), built under a DIFFERENT name (**Selkit**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400**

## Design tokens (`apps/selkit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#efefef` | page |
| `--color-text` | `#333333` | text |
| `--color-text-dim` | `#b3b3b3` | text dim |
| `--color-text-muted` | `#999999` | text muted |
| `--color-border` | `#cccccc` | border |
| `--color-hover-bg` | `#f5f5f5` | hover bg |
| `--color-action-btn` | `#f8f9fa` | action btn |
| `--color-action-border` | `#dee2e6` | action border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `MultiSelect` | Multi-select widget | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `MultiSelect`
The system SHALL provide a custom multi-select checkbox dropdown widget using the Bootstrap Select pattern.

### `Footer`
The system SHALL include the required attribution footer.

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
- **Provenance ban.** No file under `apps/selkit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/selkit/public/CNAME` = `selkit.free.componentdock.com`
  and the package `homepage` = `https://selkit.free.componentdock.com`.
