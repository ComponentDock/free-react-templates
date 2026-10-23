# Seekbar — Design Notes

Reference: **Colorlib Search 24** — `https://colorlib.com/wp/template/colorlib-search-24/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-24/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-24.jpg  
Shipped: https://seekbar.free.componentdock.com

Seekbar is a full-page search form overlay on a background image in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Search Form Bar 24" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/seekbar/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-seekbar-bg` | `#2c3e50` | seekbar bg |
| `--color-seekbar-btn` | `#5b7fff` | seekbar btn |
| `--color-seekbar-btn-hover` | `#4a6de6` | seekbar btn hover |
| `--color-seekbar-input-bg` | `#ffffff` | seekbar input bg |
| `--color-seekbar-placeholder` | `#999999` | seekbar placeholder |
| `--color-seekbar-text` | `#333333` | seekbar text |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchBar` | Search form | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `SearchBar`
The system SHALL render a centered search form with a text input, a category dropdown, and a search button.

### `Footer`
The system SHALL render a footer with copyright text and a Component Dock link.

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
- **Provenance ban.** No file under `apps/seekbar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seekbar/public/CNAME` = `seekbar.free.componentdock.com`
  and the package `homepage` = `https://seekbar.free.componentdock.com`.
