# Bevel — Design Notes

Reference: **Bootstrap Buttons 08** — `https://colorlib.com/wp/template/bootstrap-buttons-08/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-buttons-08/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-08.jpg  
Shipped: https://bevel.free.componentdock.com

Bevel is a single-page button/UI-kit showcase template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;700**

## Design tokens (`apps/bevel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-bevel-primary` | `#007bff` | Bootstrap 4 semantic + extended palette (18 colors) |
| `--color-bevel-primary-hover` | `#006adb` | bevel primary hover |
| `--color-bevel-secondary` | `#6c757d` | bevel secondary |
| `--color-bevel-secondary-hover` | `#5b636a` | bevel secondary hover |
| `--color-bevel-success` | `#28a745` | bevel success |
| `--color-bevel-success-hover` | `#218a39` | bevel success hover |
| `--color-bevel-info` | `#17a2b8` | bevel info |
| `--color-bevel-info-hover` | `#138698` | bevel info hover |
| `--color-bevel-warning` | `#ffc107` | bevel warning |
| `--color-bevel-warning-hover` | `#e2aa00` | bevel warning hover |
| `--color-bevel-danger` | `#dc3545` | bevel danger |
| `--color-bevel-danger-hover` | `#ca2333` | bevel danger hover |
| `--color-bevel-light` | `#f8f9fa` | bevel light |
| `--color-bevel-light-hover` | `#f8f9fa` | bevel light hover |
| `--color-bevel-orange` | `#fd7e14` | bevel orange |
| `--color-bevel-orange-hover` | `#eb6c02` | bevel orange hover |
| `--color-bevel-indigo` | `#6610f2` | bevel indigo |
| `--color-bevel-indigo-hover` | `#570bd3` | bevel indigo hover |
| `--color-bevel-pink` | `#e83e8c` | bevel pink |
| `--color-bevel-pink-hover` | `#e41e79` | bevel pink hover |
| `--color-bevel-deep-orange` | `#ffac8e` | bevel deep orange |
| `--color-bevel-deep-orange-hover` | `#ff926a` | bevel deep orange hover |
| `--color-bevel-aqua` | `#3fc5f0` | bevel aqua |
| `--color-bevel-aqua-hover` | `#1ebbed` | bevel aqua hover |
| `--color-bevel-dark` | `#393e46` | bevel dark |
| `--color-bevel-dark-hover` | `#292d32` | bevel dark hover |
| `--color-bevel-black` | `#000000` | bevel black |
| `--color-bevel-black-hover` | `#000000` | bevel black hover |
| `--color-bevel-purple` | `#6f42c1` | bevel purple |
| `--color-bevel-purple-hover` | `#5f37a8` | bevel purple hover |
| `--color-bevel-blue` | `#007bff` | bevel blue |
| `--color-bevel-blue-hover` | `#006adb` | bevel blue hover |
| `--color-bevel-brown` | `#a0855b` | bevel brown |
| `--color-bevel-brown-hover` | `#89724e` | bevel brown hover |
| `--color-bevel-blue-gray` | `#3f4d71` | bevel blue gray |
| `--color-bevel-blue-gray-hover` | `#323d5a` | bevel blue gray hover |
| `--color-bevel-heading` | `#212529` | Text colors |
| `--color-bevel-label` | `#212529` | bevel label |
| `--color-bevel-text-dark` | `#212529` | bevel text dark |
| `--font-bevel` | `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Font |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SizeButtons` | Button size variants | see fidelity note below |
| 2 | `ColorButtons` | Button color palette | see fidelity note below |
| 3 | `BlockButton` | Full-width button | see fidelity note below |
| 4 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `SizeButtons`
The system SHALL render the Sizes block with three blue "Button" buttons at small, medium, and large sizes, each labelled above.

### `ColorButtons`
The system SHALL render the Button Colors block with all 18 solid color buttons from the reference, in order, with matching backgrounds and labels.

### `BlockButton`
The system SHALL render the Full width button block with one block-level primary button spanning the full content width.

### `Footer`
The system SHALL render a minimal footer linking `https://www.componentdock.com/` ("Component Dock") — required by repo convention on every template (the original has no footer).

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
- **Provenance ban.** No file under `apps/bevel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bevel/public/CNAME` = `bevel.free.componentdock.com`
  and the package `homepage` = `https://bevel.free.componentdock.com`.
