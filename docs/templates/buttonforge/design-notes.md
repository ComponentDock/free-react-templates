# Buttonforge — Design Notes

Reference: **Bootstrap Buttons 16** — `https://colorlib.com/wp/template/bootstrap-buttons-16/`  
Live preview: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-16/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-16.jpg  
Shipped: https://buttonforge.free.componentdock.com

Recreation of ColorLib **Bootstrap Buttons 16** (`https://colorlib.com/wp/template/bootstrap-buttons-16/`, live preview: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-16/`). A modern administrative stats and metric button component library dashboard built with React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/buttonforge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#4f81c7` | primary |
| `--color-primary-shadow` | `#3d73c0` | primary shadow |
| `--color-secondary` | `#40bfc1` | secondary |
| `--color-secondary-shadow` | `#39adaf` | secondary shadow |
| `--color-tertiary` | `#48da79` | tertiary |
| `--color-tertiary-shadow` | `#33d669` | tertiary shadow |
| `--color-quarternary` | `#ff78ae` | quarternary |
| `--color-quarternary-shadow` | `#ff5f9f` | quarternary shadow |
| `--color-facebook` | `#4f69a2` | facebook |
| `--color-twitter` | `#69b6f0` | twitter |
| `--color-linkedin` | `#2884ba` | linkedin |
| `--color-pinterest` | `#d03940` | pinterest |
| `--color-dribbble` | `#ea6294` | dribbble |
| `--color-dark` | `#343a40` | dark |
| `--color-body` | `#212529` | body |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |

> The spec has no section-level requirements; the order below is read from `apps/buttonforge/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SolidButtons` | — | no dedicated spec block |
| 2 | `OutlineButtons` | — | no dedicated spec block |
| 3 | `RoundedSolidButtons` | — | no dedicated spec block |
| 4 | `RoundedOutlineButtons` | — | no dedicated spec block |
| 5 | `SocialBrandButtons` | — | no dedicated spec block |
| 6 | `DropdownButtons` | — | no dedicated spec block |
| 7 | `GroupButtons` | — | no dedicated spec block |
| 8 | `Checkboxes` | — | no dedicated spec block |
| 9 | `Radios` | — | no dedicated spec block |
| 10 | `SlideToggle` | — | no dedicated spec block |
| 11 | `SocialIconButtons` | — | no dedicated spec block |
| 12 | `ActionButtons` | — | no dedicated spec block |
| 13 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `SolidButtons`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `OutlineButtons`
*anchors only* — Default

### `RoundedSolidButtons`
*anchors only* — Default

### `RoundedOutlineButtons`
*anchors only* — Default

### `SocialBrandButtons`
*anchors only* — Solid · Outline · Rounded Solid · Rounded Outline

### `DropdownButtons`
*anchors only* — Dropdown button

### `GroupButtons`
*anchors only* — Button 1 · Outline Button · Button 2

### `Checkboxes`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Radios`
*anchors only* — btnriff-radios

### `SlideToggle`
*anchors only* — checkbox · Toggle 1 · Toggle 2

### `SocialIconButtons`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `ActionButtons`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
*anchors only* — BtnRiff · Solid · Outline · Rounded · Social · Dropdowns

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
- **Provenance ban.** No file under `apps/buttonforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/buttonforge/public/CNAME` = `buttonforge.free.componentdock.com`
  and the package `homepage` = `https://buttonforge.free.componentdock.com`.
