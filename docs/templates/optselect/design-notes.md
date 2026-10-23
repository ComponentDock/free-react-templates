# Optselect — Design Notes

Reference: **Multiselect 06** — `https://colorlib.com/wp/template/multiselect-06/`  
Live preview: `https://preview.colorlib.com/theme/multiselect-06/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-06.jpg  
Shipped: https://optselect.free.componentdock.com

Optselect is a multiselect dropdown template with a card container, dropdown trigger, dropdown panel, selected count and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600**

## Design tokens (`apps/optselect/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-optselect-bg` | `#f8f9fd` | optselect bg |
| `--color-optselect-card` | `#fff` | optselect card |
| `--color-optselect-border` | `#e5e5e5` | optselect border |
| `--color-optselect-text` | `#666` | optselect text |
| `--color-optselect-text-muted` | `#999` | optselect text muted |
| `--color-optselect-accent` | `#4f8cff` | optselect accent |
| `--color-optselect-accent-bg` | `#eef4ff` | optselect accent bg |
| `--color-optselect-hover` | `#f5f5f5` | optselect hover |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/optselect/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `MultiselectDropdown` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `MultiselectDropdown`
*anchors only* — listbox

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
- **Provenance ban.** No file under `apps/optselect/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/optselect/public/CNAME` = `optselect.free.componentdock.com`
  and the package `homepage` = `https://optselect.free.componentdock.com`.
