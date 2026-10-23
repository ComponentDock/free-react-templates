# Searchsnap — Design Notes

Reference: **Search Form Bar 14** — `https://colorlib.com/wp/template/search-form-bar-14/`  
Live preview: `https://preview.colorlib.com/theme/search-form-bar-14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-14.jpg  
Shipped: https://searchsnap.free.componentdock.com

Recreation of ColorLib **Search Form Bar 14** — a full-screen overlay search form with a single centered pill-shaped search bar and an "X" close button in the top-right corner. Minimalist, clean design focused entirely on the search input.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600**

## Design tokens (`apps/searchsnap/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4a8cf7` | brand |
| `--color-brand-light` | `#d0e3f7` | brand light |
| `--color-bg-overlay` | `#f8f9fa` | bg overlay |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer links to Component Dock | see fidelity note below |
| 2 | `Overlay` | Full-screen overlay renders with light gray background | see fidelity note below |
| 3 | `CloseButton` | Close button displays in top-right corner | see fidelity note below |
| 4 | `SearchBar` | Pill-shaped search bar renders centered | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The footer SHALL display a link to https://www.componentdock.com/ branded as "Component Dock".

### `Overlay`
The overlay SHALL fill the entire viewport with a light gray (#f8f9fa) background and center content vertically and horizontally.

### `CloseButton`
An "X" close button SHALL appear in the top-right corner of the overlay, colored gray (#999999) with a hover state that darkens to #333333.

### `SearchBar`
A pill-shaped search bar SHALL be centered vertically and horizontally with a white background, light blue border (2px solid #d0e3f7), and fully rounded corners.

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
- **Provenance ban.** No file under `apps/searchsnap/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchsnap/public/CNAME` = `searchsnap.free.componentdock.com`
  and the package `homepage` = `https://searchsnap.free.componentdock.com`.
