# Combobox — Design Notes

Reference: **Multiselect 03** — `https://colorlib.com/wp/template/multiselect-03/`  
Live preview: `https://preview.colorlib.com/theme/multiselect-03/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-03.jpg  
Shipped: https://combobox.free.componentdock.com

A clean, centered multi-select dropdown component for choosing programming languages. The original uses Semantic UI's styled multi-select with a Lato font and a minimalist layout. This recreation uses a custom React combobox with checkbox-style selection, keyboard navigation, and accessibility.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/combobox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-combobox-bg` | `#f5f5f5` | combobox bg |
| `--color-combobox-card` | `#fff` | combobox card |
| `--color-combobox-border` | `#d4d4d4` | combobox border |
| `--color-combobox-text` | `#333` | combobox text |
| `--color-combobox-text-muted` | `#888` | combobox text muted |
| `--color-combobox-checkmark` | `#22c55e` | combobox checkmark |
| `--color-combobox-checkmark-bg` | `#f0fdf4` | combobox checkmark bg |
| `--color-combobox-hover` | `#f0f0f0` | combobox hover |
| `--color-combobox-heading` | `#1a1a1a` | combobox heading |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ComboboxDropdown` | Dropdown opens and closes correctly | see fidelity note below |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ComboboxDropdown`
The dropdown SHALL open when the trigger is clicked and close when clicking outside or pressing Escape.

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
- **Provenance ban.** No file under `apps/combobox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/combobox/public/CNAME` = `combobox.free.componentdock.com`
  and the package `homepage` = `https://combobox.free.componentdock.com`.
