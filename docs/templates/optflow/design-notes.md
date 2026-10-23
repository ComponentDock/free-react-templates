# Optflow — Design Notes

Reference: **Multiselect 20** — `https://colorlib.com/wp/template/multiselect-20/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/multiselect-20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-20.jpg  
Shipped: https://optflow.free.componentdock.com

Recreation of ColorLib **Multiselect V20** (`multiselect-20`), a multi-select snippet showing three color-variant dropdowns with a max-selection limit. This is a **snippet/component template**, not a full-page layout — it renders a centered heading and three styled multi-select dropdowns, each with a distinct tag color.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/optflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-cream` | `#e5e4cc` | cream |
| `--color-green` | `#c7f0db` | green |
| `--color-skyblue` | `#d3f4ff` | skyblue |
| `--color-active-border` | `#5897fb` | active border |
| `--color-highlight` | `#3875d7` | highlight |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `MultiSelect` | Multi-variant multi-select snippet with selection limit | see fidelity note below |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `MultiSelect`
The application SHALL render three independently-operating multi-select dropdowns with distinct color-variant tags, a max-selection limit of 5 per dropdown, search/filter functionality, and a centered heading.

### `Footer`
*anchors only* — OptFlow · Component Dock

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
- **Provenance ban.** No file under `apps/optflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/optflow/public/CNAME` = `optflow.free.componentdock.com`
  and the package `homepage` = `https://optflow.free.componentdock.com`.
