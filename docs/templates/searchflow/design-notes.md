# Searchflow — Design Notes

Reference: **Search Form Bar 18** — `https://colorlib.com/wp/template/search-form-bar-18/`  
Live preview: `https://preview.colorlib.com/theme/search-form-bar-18/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-18.jpg  
Shipped: https://searchflow.free.componentdock.com

Recreation of ColorLib **Search Form Bar 18** — a full-viewport dark overlay with a white search bar strip at the top. The search bar contains a text input with "Search..." placeholder, a blue "Search" button, and an "X" close button in the top-right corner.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600**

## Design tokens (`apps/searchflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4a8cf7` | brand |
| `--color-overlay-bg` | `#757575` | overlay bg |
| `--color-strip-bg` | `#ffffff` | strip bg |
| `--color-input-border` | `#e0e0e0` | input border |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer links to Component Dock | see fidelity note below |
| 2 | `Overlay` | Dark overlay renders full viewport | see fidelity note below |
| 3 | `CloseButton` | Close button displays in top-right corner | see fidelity note below |
| 4 | `SearchStrip` | White search bar strip at top | see fidelity note below |
| 5 | `SearchForm` | Search bar renders in strip with input and button | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The footer SHALL display a link to https://www.componentdock.com/ branded as "Component Dock".

### `Overlay`
The overlay SHALL fill the entire viewport with a solid dark gray (#757575) background.

### `CloseButton`
An "X" close button SHALL appear in the top-right corner of the viewport, colored gray (#999999) with a hover state that darkens to #333333.

### `SearchStrip`
A white horizontal strip SHALL appear at the top of the viewport, spanning full width, containing the search bar and close button.

### `SearchForm`
The search bar SHALL contain a text input with "Search..." placeholder and a blue "Search" button, both with slightly rounded corners (border-radius ~4px, not pill shape).

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
- **Provenance ban.** No file under `apps/searchflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchflow/public/CNAME` = `searchflow.free.componentdock.com`
  and the package `homepage` = `https://searchflow.free.componentdock.com`.
