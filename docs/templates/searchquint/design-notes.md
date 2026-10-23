# Searchquint — Design Notes

Reference: **Search Form Bar 15** — `https://colorlib.com/wp/template/search-form-bar-15/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/search-form-bar-15/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-15.jpg  
Shipped: https://searchquint.free.componentdock.com

Recreation of ColorLib "Search Form/Bar V15" — a header-reveal search form snippet. The page features a collapsible search bar that slides down from the top (overlaying the navbar) when toggled via a search icon in the navigation. The search bar has a gray background with a centered form (input + blue "Search" button) and a close button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/searchquint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-hover` | `#0069d9` | brand hover |
| `--color-search-bg` | `#efefef` | search bg |
| `--color-content-text` | `#757575` | content text |
| `--color-border` | `#ced4da` | border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchOverlay` | Collapsible search overlay bar | see fidelity note below |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Content` | Content area | see fidelity note below |
| 4 | `Footer` | Search form layout | see fidelity note below |

## Section-by-section fidelity

### `SearchOverlay`
The page SHALL display a full-width search bar that slides down from the top of the page when the search icon is clicked, and slides back up when the close button is clicked.

### `Navbar`
The navbar SHALL display a "Brand" text link on the left, navigation links (Home, About, Contact) on the right, and a search icon toggle.

### `Content`
Below the navbar, the page SHALL display a centered message prompting the user to click the search icon.

### `Footer`
The search form inside the overlay bar SHALL be horizontally centered with a "Search" submit button on the left and a text input on the right, both inline.

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
- **Provenance ban.** No file under `apps/searchquint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchquint/public/CNAME` = `searchquint.free.componentdock.com`
  and the package `homepage` = `https://searchquint.free.componentdock.com`.
