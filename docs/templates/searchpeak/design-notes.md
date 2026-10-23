# Searchpeak — Design Notes

Reference: **Colorlib Search 7** — `https://colorlib.com/wp/template/colorlib-search-7/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-7/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-7.jpg  
Shipped: https://searchpeak.free.componentdock.com

Recreation of ColorLib "Colorlib Search 7" — an advanced search form with dropdown filters centered on a sky blue background. The form includes a search bar with result count, six filter dropdowns in a 2×3 grid, and Search/Delete action buttons.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/searchpeak/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-searchpeak-bg` | `#5bc0de` | searchpeak bg |
| `--color-searchpeak-card` | `#ffffff` | searchpeak card |
| `--color-searchpeak-text` | `#555` | searchpeak text |
| `--color-searchpeak-heading` | `#999` | searchpeak heading |
| `--color-searchpeak-border` | `#e0e0e0` | searchpeak border |
| `--color-searchpeak-btn` | `#5cb85c` | searchpeak btn |
| `--color-searchpeak-btn-hover` | `#4cae4c` | searchpeak btn hover |
| `--color-searchpeak-results` | `#5cb85c` | searchpeak results |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchBar` | Search bar with result count | see fidelity note below |
| 2 | `AdvancedSearch` | Advanced Search section with six filters | see fidelity note below |
| 3 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `SearchBar`
The form SHALL contain a search bar with a magnifying glass icon, a "Search..." placeholder input, and a "108 results" count displayed on the right side in green text.

### `AdvancedSearch`
The form SHALL contain an "Advanced Search" section with six dropdown filter selects arranged in a 2×3 grid: ACCESSORIES, COLOR, SIZE, SALE, TIME, TYPE. Each filter SHALL display an uppercase label and a select element with a down chevron icon.

### `Footer`
The footer SHALL display "More templates at Component Dock" with a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/searchpeak/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchpeak/public/CNAME` = `searchpeak.free.componentdock.com`
  and the package `homepage` = `https://searchpeak.free.componentdock.com`.
