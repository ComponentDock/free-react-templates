# Seekstream — Design Notes

Reference: **Colorlib Search 8** — `https://colorlib.com/wp/template/colorlib-search-8/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-8/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-8.jpg  
Shipped: https://seekstream.free.componentdock.com

Seekstream provides a full-viewport advanced search form with keyword input and six category filter dropdowns, styled with a split white/dark card over a gray background. Users SHALL be able to type keywords, filter by category, view result counts, and trigger search/reset actions.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/seekstream/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-seekstream-bg` | `#4a4a4a` | seekstream bg |
| `--color-seekstream-card` | `#ffffff` | seekstream card |
| `--color-seekstream-panel` | `#1a1a1a` | seekstream panel |
| `--color-seekstream-text` | `#555555` | seekstream text |
| `--color-seekstream-heading` | `#999999` | seekstream heading |
| `--color-seekstream-border` | `#e0e0e0` | seekstream border |
| `--color-seekstream-btn` | `#e8734a` | seekstream btn |
| `--color-seekstream-btn-hover` | `#d4623c` | seekstream btn hover |
| `--color-seekstream-results` | `#e8734a` | seekstream results |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchBar` | Search form rendering | see fidelity note below |
| 2 | `AdvancedSearch` | Advanced search panel | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `SearchBar`
The page SHALL render a search form with aria-label "Search form" centered on a gray background.

### `AdvancedSearch`
The advanced search panel SHALL display "Advanced Search" heading, six filter dropdowns, result count, Reset button, and Search button.

### `Footer`
The footer SHALL link to Component Dock.

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
- **Provenance ban.** No file under `apps/seekstream/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seekstream/public/CNAME` = `seekstream.free.componentdock.com`
  and the package `homepage` = `https://seekstream.free.componentdock.com`.
