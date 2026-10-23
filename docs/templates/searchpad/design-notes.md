# Searchpad — Design Notes

Reference: **Colorlib Search 21** — `https://colorlib.com/wp/template/colorlib-search-21/`  
Live preview: `https://colorlib.com/etc/searchf/colorlib-search-21/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-21.jpg  
Shipped: https://searchpad.free.componentdock.com

Recreation of ColorLib "Colorlib Search Form V21" — an expandable search form page with two stacked search inputs. The first input is round (pill-shaped) and expands from a 60px circle to full width on focus with a clear button. The second input is square (rounded corners) and expands from a small width to full width on focus.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/searchpad/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-searchpad-bg` | `#d8f4fe` | searchpad bg |
| `--color-searchpad-icon` | `#ccc` | searchpad icon |
| `--color-searchpad-icon-hover` | `#333` | searchpad icon hover |
| `--color-searchpad-placeholder` | `#ccc` | searchpad placeholder |
| `--color-searchpad-placeholder-2` | `#666` | searchpad placeholder 2 |
| `--color-searchpad-input-bg` | `#fff` | searchpad input bg |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchInput` | Two stacked search inputs | see fidelity note below |
| 2 | `Footer` | Form submission | see fidelity note below |

## Section-by-section fidelity

### `SearchInput`
The form SHALL contain two search inputs stacked vertically with 80px spacing between them.

### `Footer`
The form SHALL prevent default submission on Enter key.

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
- **Provenance ban.** No file under `apps/searchpad/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchpad/public/CNAME` = `searchpad.free.componentdock.com`
  and the package `homepage` = `https://searchpad.free.componentdock.com`.
