# Btnclick — Design Notes

Reference: **Bootstrap Buttons 10** — `https://colorlib.com/wp/template/bootstrap-buttons-10/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-buttons-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-10.jpg  
Shipped: https://btnclick.free.componentdock.com

Btnclick is a bootstrap button component page. It recreates the ColorLib **Bootstrap Buttons 10** design (https://colorlib.com/wp/template/bootstrap-buttons-10/, preview: https://preview.colorlib.com/theme/bb/bootstrap-buttons-10/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/btnclick/src/index.css` `@theme`)

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
| 2 | `SizeScale` | Size Variants & Layout | see fidelity note below |
| 3 | `ColorPalette` | Color Palette Buttons | see fidelity note below |
| 4 | `FullWidth` | — | no dedicated spec block |
| 5 | `Footer` | Block Button & Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `SizeScale`
#### Scenario: Size Variants & Layout - The page displays size variant buttons (Large, Medium, Small) matching the Bootstrap 4 buttons style #10. - Heading `#10 — Bootstrap 4 Buttons` is prominently displayed.

### `ColorPalette`
#### Scenario: Color Palette Buttons - Displays a comprehensive set of button color variants (Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray).

### `FullWidth`
*anchors only* — Full width button

### `Footer`
#### Scenario: Block Button & Footer - Includes a full-width block button. - Includes a professional footer linking `https://www.componentdock.com/` ("Component Dock").

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
- **Provenance ban.** No file under `apps/btnclick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnclick/public/CNAME` = `btnclick.free.componentdock.com`
  and the package `homepage` = `https://btnclick.free.componentdock.com`.
