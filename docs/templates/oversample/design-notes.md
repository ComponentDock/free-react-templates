# Oversample — Design Notes

Reference: **Multiselect 05** — `https://colorlib.com/wp/template/multiselect-05/`  
Live preview: `https://preview.colorlib.com/theme/multiselect-05/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-05.jpg  
Shipped: https://oversample.free.componentdock.com

Oversample is a multiselect dropdown widget template: a single accessible combobox that opens a checkbox listbox, shows the current selection as removable chips and reports how many options are selected.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato:wght@300;400;700**

## Design tokens (`apps/oversample/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fd5f00` | brand |
| `--color-brand-light` | `#ff7a2e` | brand light |
| `--color-brand-dark` | `#e04f00` | brand dark |
| `--color-surface` | `#fafafa` | surface |
| `--color-body-text` | `#808080` | body text |
| `--color-heading-text` | `#000000` | heading text |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | — | no dedicated spec block |
| 2 | `MultiselectDropdown` | — | no dedicated spec block |
| 3 | `Footer` | Keyboard Access And Component Dock Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
*anchors only* — Multiselect #05

### `MultiselectDropdown`
*anchors only* — combobox · Select options · listbox · Options · option

### `Footer`
The widget SHALL be operable by keyboard (open, arrow through options, select with Enter/Space) with a visible focus ring, and the footer SHALL link `https://www.componentdock.com/`.

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
- **Provenance ban.** No file under `apps/oversample/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/oversample/public/CNAME` = `oversample.free.componentdock.com`
  and the package `homepage` = `https://oversample.free.componentdock.com`.
