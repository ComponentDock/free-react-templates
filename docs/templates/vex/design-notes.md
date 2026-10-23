# Vex — Design Notes

Reference: **Checkbox 17** — `https://colorlib.com/wp/template/checkbox-17/`  
Live preview: `https://preview.colorlib.com/theme/checkbox-17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-17.jpg  
Shipped: https://vex.free.componentdock.com

A modern, minimal checkbox template featuring smooth animation effects on toggle. The design uses bold geometric checkbox styling with a vibrant indigo accent color, clean typography, and satisfying check/uncheck transitions. Demonstrates accessible checkbox patterns with disabled states.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter:wght@400;500;600;700**

## Design tokens (`apps/vex/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef2ff` | primary 50 |
| `--color-primary-100` | `#e0e7ff` | primary 100 |
| `--color-primary-200` | `#c7d2fe` | primary 200 |
| `--color-primary-300` | `#a5b4fc` | primary 300 |
| `--color-primary-400` | `#818cf8` | primary 400 |
| `--color-primary-500` | `#6366f1` | primary 500 |
| `--color-primary-600` | `#4f46e5` | primary 600 |
| `--color-primary-700` | `#4338ca` | primary 700 |
| `--color-primary-800` | `#3730a3` | primary 800 |
| `--color-primary-900` | `#312e81` | primary 900 |
| `--color-primary-950` | `#1e1b4b` | primary 950 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `DemoSection` | — | no dedicated spec block |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `DemoSection`
*anchors only* — Checkbox #17 · Modern animated checkbox with indigo accent

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
- **Provenance ban.** No file under `apps/vex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vex/public/CNAME` = `vex.free.componentdock.com`
  and the package `homepage` = `https://vex.free.componentdock.com`.
