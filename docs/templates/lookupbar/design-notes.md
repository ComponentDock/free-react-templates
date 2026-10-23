# Lookupbar — Design Notes

Reference: **Search Form Bar 13** — `https://colorlib.com/wp/template/search-form-bar-13/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/search-form-bar-13/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-13.jpg  
Shipped: https://lookupbar.free.componentdock.com

A standalone search form bar template with an inline search input and submit button. Recreation of ColorLib **Search Form Bar 13** as a standalone React component template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700**

## Design tokens (`apps/lookupbar/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-blue` | `#007bff` | brand blue |
| `--color-brand-hover` | `#0056b3` | brand hover |
| `--color-text-body` | `#212529` | text body |
| `--color-border-navbar` | `#dae0e5` | border navbar |
| `--color-input-border` | `#efefef` | input border |
| `--color-input-focus` | `#000000` | input focus |
| `--color-placeholder-text` | `#cccccc` | placeholder text |
| `--color-icon-color` | `#777777` | icon color |
| `--font-roboto` | `'Roboto', system-ui, sans-serif` | font roboto |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Search · Brand

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
- **Provenance ban.** No file under `apps/lookupbar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lookupbar/public/CNAME` = `lookupbar.free.componentdock.com`
  and the package `homepage` = `https://lookupbar.free.componentdock.com`.
