# Coralbit — Design Notes

Reference: **Checkbox 13** — `https://colorlib.com/wp/template/checkbox-13/`  
Live preview: `https://preview.colorlib.com/theme/checkbox-13/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-13.jpg  
Shipped: https://coralbit.free.componentdock.com

A lightweight, circular custom checkbox component showcase with coral pink (#f67280) accent color, box-shadow depth, and Roboto typography. Demonstrates accessible checkbox patterns with disabled states.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/coralbit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff1f2` | primary 50 |
| `--color-primary-100` | `#ffe4e6` | primary 100 |
| `--color-primary-200` | `#fecdd3` | primary 200 |
| `--color-primary-300` | `#fda4af` | primary 300 |
| `--color-primary-400` | `#fb7185` | primary 400 |
| `--color-primary-500` | `#f43f5e` | primary 500 |
| `--color-primary-600` | `#e11d48` | primary 600 |
| `--color-primary-700` | `#be123c` | primary 700 |
| `--color-primary-800` | `#9f1239` | primary 800 |
| `--color-primary-900` | `#881337` | primary 900 |
| `--color-primary-950` | `#4c0519` | primary 950 |
| `--color-coral` | `#f67280` | coral |
| `--color-coral-hover` | `#f88a96` | coral hover |
| `--color-coral-unchecked` | `#e6e6e6` | coral unchecked |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CheckboxShowcase` | Circular checkbox rendering | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `CheckboxShowcase`
The template SHALL render circular checkboxes with a 20px diameter, coral pink (#f67280) fill when checked, light gray (#e6e6e6) fill when unchecked, and a box-shadow for depth.

### `Footer`
The template SHALL include a footer linking to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/coralbit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/coralbit/public/CNAME` = `coralbit.free.componentdock.com`
  and the package `homepage` = `https://coralbit.free.componentdock.com`.
