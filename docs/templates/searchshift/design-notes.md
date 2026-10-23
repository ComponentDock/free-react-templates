# Searchshift — Design Notes

Reference: **Colorlib Search 25** — `https://colorlib.com/wp/template/colorlib-search-25/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-25/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-25.jpg  
Shipped: https://searchshift.free.componentdock.com

Recreation of ColorLib "Colorlib Search Form V25" — a dark-overlay search widget with a category dropdown, text input, and a gradient blue-to-red SEARCH button that shifts colors on hover. Features a semi-transparent dark background overlay on a full-viewport photo, creating a cinematic look.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400**

## Design tokens (`apps/searchshift/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-searchshift-blue` | `#2c6dd5` | searchshift blue |
| `--color-searchshift-red` | `#ff4b5a` | searchshift red |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchForm` | Search button | see fidelity note below |

## Section-by-section fidelity

### `SearchForm`
The right section of the search form SHALL display a gradient SEARCH button with blue-to-red gradient that reverses on hover via a fading pseudo-element.

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
- **Provenance ban.** No file under `apps/searchshift/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchshift/public/CNAME` = `searchshift.free.componentdock.com`
  and the package `homepage` = `https://searchshift.free.componentdock.com`.
