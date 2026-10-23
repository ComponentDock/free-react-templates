# Btnbolt — Design Notes

Reference: **Bootstrap Buttons 09** — `https://colorlib.com/wp/template/bootstrap-buttons-09/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-buttons-09/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-09.jpg  
Shipped: https://btnbolt.free.componentdock.com

Recreate ColorLib Bootstrap Buttons V09 as a React + Tailwind template named BtnBolt. This template showcases rounded Bootstrap 4 buttons in multiple sizes and the full 18-color Bootstrap palette, with a full-width block button variant.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500**

## Design tokens (`apps/btnbolt/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-btnbolt-primary` | `#007bff` | Bootstrap 4 semantic + extended palette (18 colors) |
| `--color-btnbolt-primary-hover` | `#006adb` | btnbolt primary hover |
| `--color-btnbolt-secondary` | `#6c757d` | btnbolt secondary |
| `--color-btnbolt-secondary-hover` | `#5b636a` | btnbolt secondary hover |
| `--color-btnbolt-success` | `#28a745` | btnbolt success |
| `--color-btnbolt-success-hover` | `#218a39` | btnbolt success hover |
| `--color-btnbolt-info` | `#17a2b8` | btnbolt info |
| `--color-btnbolt-info-hover` | `#138698` | btnbolt info hover |
| `--color-btnbolt-warning` | `#ffc107` | btnbolt warning |
| `--color-btnbolt-warning-hover` | `#e2aa00` | btnbolt warning hover |
| `--color-btnbolt-danger` | `#dc3545` | btnbolt danger |
| `--color-btnbolt-danger-hover` | `#ca2333` | btnbolt danger hover |
| `--color-btnbolt-light` | `#f8f9fa` | btnbolt light |
| `--color-btnbolt-light-hover` | `#f8f9fa` | btnbolt light hover |
| `--color-btnbolt-orange` | `#fd7e14` | btnbolt orange |
| `--color-btnbolt-orange-hover` | `#eb6c02` | btnbolt orange hover |
| `--color-btnbolt-indigo` | `#6610f2` | btnbolt indigo |
| `--color-btnbolt-indigo-hover` | `#570bd3` | btnbolt indigo hover |
| `--color-btnbolt-pink` | `#e83e8c` | btnbolt pink |
| `--color-btnbolt-pink-hover` | `#e41e79` | btnbolt pink hover |
| `--color-btnbolt-deep-orange` | `#ffac8e` | btnbolt deep orange |
| `--color-btnbolt-deep-orange-hover` | `#ff926a` | btnbolt deep orange hover |
| `--color-btnbolt-aqua` | `#3fc5f0` | btnbolt aqua |
| `--color-btnbolt-aqua-hover` | `#1ebbed` | btnbolt aqua hover |
| `--color-btnbolt-dark` | `#393e46` | btnbolt dark |
| `--color-btnbolt-dark-hover` | `#292d32` | btnbolt dark hover |
| `--color-btnbolt-black` | `#000000` | btnbolt black |
| `--color-btnbolt-black-hover` | `#000000` | btnbolt black hover |
| `--color-btnbolt-purple` | `#6f42c1` | btnbolt purple |
| `--color-btnbolt-purple-hover` | `#5f37a8` | btnbolt purple hover |
| `--color-btnbolt-blue` | `#007bff` | btnbolt blue |
| `--color-btnbolt-blue-hover` | `#006adb` | btnbolt blue hover |
| `--color-btnbolt-brown` | `#a0855b` | btnbolt brown |
| `--color-btnbolt-brown-hover` | `#89724e` | btnbolt brown hover |
| `--color-btnbolt-blue-gray` | `#3f4d71` | btnbolt blue gray |
| `--color-btnbolt-blue-gray-hover` | `#323d5a` | btnbolt blue gray hover |
| `--color-btnbolt-heading` | `#212529` | Text colors |
| `--color-btnbolt-label` | `#212529` | btnbolt label |
| `--color-btnbolt-text-dark` | `#212529` | btnbolt text dark |
| `--font-btnbolt` | `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Font |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SizeButtons` | Render size buttons | see fidelity note below |
| 2 | `ColorButtons` | Render color buttons | see fidelity note below |
| 3 | `BlockButton` | Render full-width block button | see fidelity note below |
| 4 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `SizeButtons`
The page SHALL display three button size variants (Large, Medium, Small) each with a text label above the button.

### `ColorButtons`
The page SHALL display all 18 Bootstrap 4 color variants as individual buttons.

### `BlockButton`
The page SHALL display a full-width primary button with a "Full width button" label.

### `Footer`
The page footer SHALL contain a link to https://www.componentdock.com/ that opens in a new tab.

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
- **Provenance ban.** No file under `apps/btnbolt/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnbolt/public/CNAME` = `btnbolt.free.componentdock.com`
  and the package `homepage` = `https://btnbolt.free.componentdock.com`.
