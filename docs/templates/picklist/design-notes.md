# Picklist — Design Notes

Reference: **Multiselect 14** — `https://colorlib.com/wp/template/multiselect-14/`  
Live preview: `https://preview.colorlib.com/theme/multiselect-14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-14.jpg  
Shipped: https://picklist.free.componentdock.com

Picklist is a single-page multi-select FORM in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Multiselect 14" free template (source: https://colorlib.com/wp/template/multiselect-14/), built under a DIFFERENT name (**Picklist**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400**

## Design tokens (`apps/picklist/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#efefef` | page |
| `--color-text` | `#333333` | text |
| `--color-text-dim` | `#b3b3b3` | text dim |
| `--color-text-muted` | `#aaaaaa` | text muted |
| `--color-border` | `#aaaaaa` | border |
| `--color-hover-bg` | `#efefef` | hover bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `MultiSelect` | Multi-select widget | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `MultiSelect`
The system SHALL render a custom multi-select dropdown replacing the native `<select multiple>` element, with checkbox selection, search filtering, and select-all functionality.

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
- **Provenance ban.** No file under `apps/picklist/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/picklist/public/CNAME` = `picklist.free.componentdock.com`
  and the package `homepage` = `https://picklist.free.componentdock.com`.
