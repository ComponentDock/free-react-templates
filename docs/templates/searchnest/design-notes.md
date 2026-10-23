# Searchnest — Design Notes

Reference: **Colorlib Search 14** — `https://colorlib.com/wp/template/colorlib-search-14/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-14.jpg  
Shipped: https://searchnest.free.componentdock.com

A hotel booking search form widget template with filter fields and a branded search bar. Recreation of ColorLib **Search 14** (hotel/booking search form widget).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/searchnest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-searchnest-peach-start` | `#f9e4d4` | searchnest peach start |
| `--color-searchnest-peach-end` | `#f5d6cc` | searchnest peach end |
| `--color-searchnest-gold` | `#f0c75e` | searchnest gold |
| `--color-searchnest-gold-hover` | `#e6bc4a` | searchnest gold hover |
| `--color-searchnest-text` | `#333333` | searchnest text |
| `--color-searchnest-muted` | `#888888` | searchnest muted |
| `--color-searchnest-border` | `#e0e0e0` | searchnest border |
| `--color-searchnest-white` | `#ffffff` | searchnest white |
| `--font-body` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchFormBar` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `SearchFormBar`
*anchors only* — Increase guests · Decrease guests · Search

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
- **Provenance ban.** No file under `apps/searchnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchnest/public/CNAME` = `searchnest.free.componentdock.com`
  and the package `homepage` = `https://searchnest.free.componentdock.com`.
