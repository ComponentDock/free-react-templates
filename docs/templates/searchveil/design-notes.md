# Searchveil — Design Notes

Reference: **Search Form Bar 16** — `https://colorlib.com/wp/template/search-form-bar-16/`  
Live preview: `https://preview.colorlib.com/theme/search-form-bar-16/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-16.jpg  
Shipped: https://searchveil.free.componentdock.com

Recreation of ColorLib **Search Form Bar 16** — a fullscreen/viewport-height search overlay snippet. When toggled, it covers the entire viewport with a clean, centered search input and minimal chrome. Designed as a modal search experience.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600**

## Design tokens (`apps/searchveil/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-overlay-bg` | `#ffffff` | overlay bg |
| `--color-hint-text` | `#aaaaaa` | hint text |
| `--color-input-text` | `#333333` | input text |
| `--color-input-placeholder` | `#999999` | input placeholder |
| `--color-input-border` | `#e0e0e0` | input border |
| `--color-close-icon` | `#333333` | close icon |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer links to Component Dock | see fidelity note below |
| 2 | `Overlay` | Fullscreen search overlay renders correctly | see fidelity note below |
| 3 | `HintText` | Hint text is displayed | see fidelity note below |
| 4 | `CloseButton` | Overlay is dismissed via close button | see fidelity note below |
| 5 | `SearchInput` | Search input is centered and styled | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The system SHALL render a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

### `Overlay`
The system SHALL render a fullscreen overlay that covers the entire viewport with a white (#FFFFFF) background when the search mode is active.

### `HintText`
The system SHALL display the text "PRESS [ESC] TO CLOSE" centered near the top of the overlay in uppercase with letter-spacing and light gray color.

### `CloseButton`
The system SHALL close the overlay when the user clicks the close (×) button.

### `SearchInput`
The system SHALL render a search input centered in the viewport with a full-width underline border and no background or box shadow.

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
- **Provenance ban.** No file under `apps/searchveil/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchveil/public/CNAME` = `searchveil.free.componentdock.com`
  and the package `homepage` = `https://searchveil.free.componentdock.com`.
