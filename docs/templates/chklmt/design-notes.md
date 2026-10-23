# Chklmt — Design Notes

Reference: **Multiselect 17** — `https://colorlib.com/wp/template/multiselect-17/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/multiselect-17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-17.jpg  
Shipped: https://chklmt.free.componentdock.com

Chklmt is a single-page multi-select FORM in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Multiselect 17" free template (source: https://colorlib.com/wp/template/multiselect-17/), built under a DIFFERENT name (**Chklmt**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400**

## Design tokens (`apps/chklmt/src/index.css` `@theme`)

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
| 1 | `MultiSelect` | Selecting multiple options updates the button text | see fidelity note below |
| 2 | `Footer` | Deselecting an option re-enables others | see fidelity note below |

## Section-by-section fidelity

### `MultiSelect`
Selecting multiple options SHALL display all selected items comma-separated in the button.

### `Footer`
Deselecting an option when at the limit SHALL re-enable the remaining unselected options.

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
- **Provenance ban.** No file under `apps/chklmt/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/chklmt/public/CNAME` = `chklmt.free.componentdock.com`
  and the package `homepage` = `https://chklmt.free.componentdock.com`.
