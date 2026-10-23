# Scanbar — Design Notes

Reference: **Colorlib Search 13** — `https://colorlib.com/wp/template/colorlib-search-13/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-13/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-13.jpg  
Shipped: https://scanbar.free.componentdock.com

Scanbar is a quick city search form with a hero section, search bar and footer. It recreates the ColorLib **Colorlib Search 13** design (https://colorlib.com/wp/template/colorlib-search-13/, preview: https://colorlib.com/etc/searchf/colorlib-search-13/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@400;700;900**, **Poppins**

## Design tokens (`apps/scanbar/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-scanbar-coral` | `#e84c60` | scanbar coral |
| `--color-scanbar-coral-hover` | `#d44054` | scanbar coral hover |
| `--color-scanbar-navy` | `#1a1a2e` | scanbar navy |
| `--color-scanbar-text` | `#333333` | scanbar text |
| `--color-scanbar-muted` | `#666666` | scanbar muted |
| `--color-scanbar-placeholder` | `#999999` | scanbar placeholder |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-body` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font body |

> The spec has no section-level requirements; the order below is read from `apps/scanbar/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchBar` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `SearchBar`
*anchors only* — Search · What · Where

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
- **Provenance ban.** No file under `apps/scanbar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/scanbar/public/CNAME` = `scanbar.free.componentdock.com`
  and the package `homepage` = `https://scanbar.free.componentdock.com`.
