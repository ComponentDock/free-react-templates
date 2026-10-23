# Findspot — Design Notes

Reference: **Search Form Bar 02** — `https://colorlib.com/wp/template/search-form-bar-02/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/search-form-bar-02/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-02.jpg  
Shipped: https://findspot.free.componentdock.com

Findspot is a search form bar template. It recreates the ColorLib **Search Form Bar 02** design (https://colorlib.com/wp/template/search-form-bar-02/, preview: https://preview.colorlib.com/theme/bootstrap/search-form-bar-02/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/findspot/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-findspot-bg` | `#1a1a2e` | findspot bg |
| `--color-findspot-heading` | `#ffffff` | findspot heading |
| `--color-findspot-subtitle` | `#a0a0b0` | findspot subtitle |
| `--color-findspot-bar-bg` | `#16213e` | findspot bar bg |
| `--color-findspot-bar-border` | `#0f3460` | findspot bar border |
| `--color-findspot-icon` | `#e94560` | findspot icon |
| `--color-findspot-placeholder` | `rgba(255, 255, 255, 0.4)` | findspot placeholder |
| `--color-findspot-btn` | `#e94560` | findspot btn |
| `--color-findspot-btn-hover` | `#d63851` | findspot btn hover |
| `--color-findspot-footer` | `#6b7280` | findspot footer |
| `--color-findspot-link` | `#e94560` | findspot link |
| `--color-findspot-link-hover` | `#ff6b81` | findspot link hover |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/findspot/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchBar` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `SearchBar`
*anchors only* — Search form · Search icon · Search

### `Footer`
*anchors only* — Component Dock

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
- **Provenance ban.** No file under `apps/findspot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/findspot/public/CNAME` = `findspot.free.componentdock.com`
  and the package `homepage` = `https://findspot.free.componentdock.com`.
