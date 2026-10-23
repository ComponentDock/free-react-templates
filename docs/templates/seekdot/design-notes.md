# Seekdot — Design Notes

Reference: **Search Form Bar 03** — `https://colorlib.com/wp/template/search-form-bar-03/`  
Live preview: `https://preview.colorlib.com/theme/search-form-bar-03/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-03.jpg  
Shipped: https://seekdot.free.componentdock.com

Recreate the ColorLib "Search Form Bar 03" design as a React 19 + Tailwind CSS 4 component. The template features a minimal search form with a distinctive coral circular search icon button, white rounded search bar with shadow, centered on a light gray background.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/seekdot/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-seekdot-bg` | `#f5f5f5` | seekdot bg |
| `--color-seekdot-heading` | `#333333` | seekdot heading |
| `--color-seekdot-bar-bg` | `#ffffff` | seekdot bar bg |
| `--color-seekdot-bar-shadow` | `rgba(0, 0, 0, 0.34)` | seekdot bar shadow |
| `--color-seekdot-icon-circle` | `#e86c5e` | seekdot icon circle |
| `--color-seekdot-icon` | `#ffffff` | seekdot icon |
| `--color-seekdot-input-text` | `#333333` | seekdot input text |
| `--color-seekdot-placeholder` | `#999999` | seekdot placeholder |
| `--color-seekdot-footer` | `#888888` | seekdot footer |
| `--color-seekdot-link` | `#e86c5e` | seekdot link |
| `--color-seekdot-link-hover` | `#d4553f` | seekdot link hover |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchBar` | Search bar | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `SearchBar`
The app SHALL render a search form with a coral circular icon button and white rounded input with drop shadow.

### `Footer`
The app SHALL render a footer with copyright text and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/seekdot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seekdot/public/CNAME` = `seekdot.free.componentdock.com`
  and the package `homepage` = `https://seekdot.free.componentdock.com`.
