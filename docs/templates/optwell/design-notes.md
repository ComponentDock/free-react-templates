# Optwell — Design Notes

Reference: **Multiselect 12** — `https://colorlib.com/wp/template/multiselect-12/`  
Live preview: `https://preview.colorlib.com/theme/multiselect-12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-12.jpg  
Shipped: https://optwell.free.componentdock.com

Optwell is a bootstrap multiselect component page. It recreates the ColorLib **Multiselect 12** design (https://colorlib.com/wp/template/multiselect-12/, preview: https://preview.colorlib.com/theme/bootstrap/multiselect-12/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/optwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-optwell-bg` | `#efefef` | optwell bg |
| `--color-optwell-card` | `#fff` | optwell card |
| `--color-optwell-text` | `#000` | optwell text |
| `--color-optwell-text-muted` | `#b3b3b3` | optwell text muted |
| `--color-optwell-accent` | `#f67280` | optwell accent |
| `--color-optwell-accent-hover` | `#e85a68` | optwell accent hover |
| `--color-optwell-option-selected` | `#f4f4f4` | optwell option selected |
| `--color-optwell-border` | `#e0e0e0` | optwell border |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/optwell/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchableMultiselect` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `SearchableMultiselect`
*anchors only* — combobox · listbox · Search states

### `Footer`
*anchors only* — Component Dock

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
- **Provenance ban.** No file under `apps/optwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/optwell/public/CNAME` = `optwell.free.componentdock.com`
  and the package `homepage` = `https://optwell.free.componentdock.com`.
