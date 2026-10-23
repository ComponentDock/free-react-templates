# Filterpick — Design Notes

Reference: **Multiselect 04** — `https://colorlib.com/wp/template/multiselect-04/`  
Live preview: `https://preview.colorlib.com/theme/multiselect-04/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-04.jpg  
Shipped: https://filterpick.free.componentdock.com

FilterPick is a single-page MULTISELECT DROPDOWN COMPONENT in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600**

## Design tokens (`apps/filterpick/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-filterpick-bg` | `#f5f7fa` | filterpick bg |
| `--color-filterpick-card` | `#ffffff` | filterpick card |
| `--color-filterpick-border` | `#e0e0e0` | filterpick border |
| `--color-filterpick-text` | `#374151` | filterpick text |
| `--color-filterpick-text-muted` | `#9ca3af` | filterpick text muted |
| `--color-filterpick-checkmark` | `#0ea5e9` | filterpick checkmark |
| `--color-filterpick-checkmark-bg` | `#f0f9ff` | filterpick checkmark bg |
| `--color-filterpick-hover` | `#f3f4f6` | filterpick hover |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CheckmarkDropdown` | Multiselect dropdown with checkmark UI | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `CheckmarkDropdown`
Users SHALL see a multiselect dropdown component that displays a list of options with checkmark checkboxes, allowing multiple selections simultaneously.

### `Footer`
Every template's footer MUST link https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/filterpick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/filterpick/public/CNAME` = `filterpick.free.componentdock.com`
  and the package `homepage` = `https://filterpick.free.componentdock.com`.
