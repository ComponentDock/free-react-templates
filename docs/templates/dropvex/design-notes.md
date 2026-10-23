# Dropvex — Design Notes

Reference: **Dropdown 08** — `https://colorlib.com/wp/template/dropdown-08/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/dropdown-08/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-08.jpg  
Shipped: https://dropvex.free.componentdock.com

A clean, minimal dropdown navbar component featuring a split-button hamburger menu with a smooth dropdown panel. Recreation of ColorLib "Dropdown V08".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@400;500;700**

## Design tokens (`apps/dropvex/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4d80e4` | brand |
| `--color-brand-dark` | `#2161dd` | brand dark |
| `--color-brand-hover` | `#3770e1` | brand hover |
| `--color-bg-page` | `#fafafa` | bg page |
| `--color-bg-menu` | `#ffffff` | bg menu |
| `--color-text-body` | `gray` | text body |
| `--color-text-heading` | `#000000` | text heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SplitDropdown` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `SplitDropdown`
*anchors only* — menuitem · Toggle navigation menu · menu

### `Footer`
*anchors only* — Split-Button Dropdown Navbar · Component Dock

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
- **Provenance ban.** No file under `apps/dropvex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dropvex/public/CNAME` = `dropvex.free.componentdock.com`
  and the package `homepage` = `https://dropvex.free.componentdock.com`.
