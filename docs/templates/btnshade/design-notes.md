# Btnshade — Design Notes

Reference: **Bootstrap Buttons 11** — `https://colorlib.com/wp/template/bootstrap-buttons-11/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-buttons-11/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-11.jpg  
Shipped: https://btnshade.free.componentdock.com

Recreation of ColorLib Bootstrap Buttons 11 (`https://colorlib.com/wp/template/bootstrap-buttons-11/`, preview: `https://preview.colorlib.com/theme/bootstrap-buttons-11/`).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/btnshade/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#0d6efd` | primary |
| `--color-primary-hover` | `#0b5ed7` | primary hover |
| `--color-secondary` | `#6c757d` | secondary |
| `--color-secondary-hover` | `#5c636a` | secondary hover |
| `--color-success` | `#198754` | success |
| `--color-success-hover` | `#157347` | success hover |
| `--color-info` | `#0dcaf0` | info |
| `--color-info-hover` | `#31d2f4` | info hover |
| `--color-warning` | `#ffc107` | warning |
| `--color-warning-hover` | `#ffca2c` | warning hover |
| `--color-danger` | `#dc3545` | danger |
| `--color-danger-hover` | `#bb2d3b` | danger hover |
| `--color-light` | `#f8f9fa` | light |
| `--color-light-hover` | `#e9ecef` | light hover |
| `--color-orange` | `#fd7e14` | orange |
| `--color-orange-hover` | `#e8650e` | orange hover |
| `--color-indigo` | `#6610f2` | indigo |
| `--color-indigo-hover` | `#5508cc` | indigo hover |
| `--color-pink` | `#d63384` | pink |
| `--color-pink-hover` | `#c12a72` | pink hover |
| `--color-deeporange` | `#f4623a` | deeporange |
| `--color-deeporange-hover` | `#e04d2a` | deeporange hover |
| `--color-aqua` | `#0891b2` | aqua |
| `--color-aqua-hover` | `#0d9488` | aqua hover |
| `--color-dark` | `#212529` | dark |
| `--color-dark-hover` | `#343a40` | dark hover |
| `--color-black` | `#000000` | black |
| `--color-purple` | `#6f42c1` | purple |
| `--color-purple-hover` | `#5f32a5` | purple hover |
| `--color-blue` | `#0d6efd` | blue |
| `--color-blue-hover` | `#0b5ed7` | blue hover |
| `--color-brown` | `#8b5e3c` | brown |
| `--color-brown-hover` | `#7a5235` | brown hover |
| `--color-bluegray` | `#6b7280` | bluegray |
| `--color-bluegray-hover` | `#5e666d` | bluegray hover |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | — | no dedicated spec block |
| 2 | `SizeScale` | Button Sizes & Dimensions | see fidelity note below |
| 3 | `ColorPalette` | Comprehensive Color Palette | see fidelity note below |
| 4 | `FullWidth` | Full-Width & Special Layouts | see fidelity note below |
| 5 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `SizeScale`
- As a developer, I want to explore different button sizes (Large, Medium, Small) so I can choose the appropriate scale for my user interfaces.

### `ColorPalette`
- As a UI designer, I want to test all standard Bootstrap and custom shaded button colors (Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray) to evaluate color contrast and hierarchy.

### `FullWidth`
- As a frontend engineer, I want to inspect full-width buttons and responsive alignment specimens for form submission and call-to-action blocks.

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
- **Provenance ban.** No file under `apps/btnshade/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnshade/public/CNAME` = `btnshade.free.componentdock.com`
  and the package `homepage` = `https://btnshade.free.componentdock.com`.
