# Topicdrop — Design Notes

Reference: **Multiselect 07** — `https://colorlib.com/wp/template/multiselect-07/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/multiselect-07/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-07.jpg  
Shipped: https://topicdrop.free.componentdock.com

Recreation of ColorLib "Multiselect 07" (https://colorlib.com/wp/template/multiselect-07/). Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-07/ A clean, centered multi-select dropdown component for choosing topics from a list.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/topicdrop/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-topicdrop-bg` | `#fff` | topicdrop bg |
| `--color-topicdrop-text` | `#6c757d` | topicdrop text |
| `--color-topicdrop-heading` | `#000` | topicdrop heading |
| `--color-topicdrop-brand` | `#e8647c` | topicdrop brand |
| `--color-topicdrop-border` | `#e6e6e6` | topicdrop border |
| `--color-topicdrop-hover-bg` | `#e8647c` | topicdrop hover bg |
| `--color-topicdrop-hover-text` | `#fff` | topicdrop hover text |
| `--color-topicdrop-label-bg` | `#e8647c` | topicdrop label bg |
| `--color-topicdrop-label-text` | `#fff` | topicdrop label text |
| `--color-topicdrop-card-bg` | `#fff` | topicdrop card bg |
| `--color-topicdrop-card-border` | `#e6e6e6` | topicdrop card border |
| `--color-topicdrop-menu-border` | `#ef90a2` | topicdrop menu border |
| `--font-sans` | `'Lato', Arial, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopicDropdown` | Page renders heading, label, and dropdown | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `TopicDropdown`
Users SHALL see a centered "Topic Selector" heading, a "Select Topics" label, and a dropdown trigger showing placeholder text when the page loads.

### `Footer`
The page footer SHALL contain a "Made with Component Dock" link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/topicdrop/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/topicdrop/public/CNAME` = `topicdrop.free.componentdock.com`
  and the package `homepage` = `https://topicdrop.free.componentdock.com`.
