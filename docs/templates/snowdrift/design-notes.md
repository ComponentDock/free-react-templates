# Snowdrift — Design Notes

Reference: **Modal 03** — `https://colorlib.com/wp/template/modal-03/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/modal-03/`  
Screenshot:   
Shipped: https://snowdrift.free.componentdock.com

Snowdrift is a winter sale modal popup template recreating ColorLib Modal 03. Source: https://colorlib.com/wp/template/modal-03/ Preview: https://preview.colorlib.com/theme/bootstrap/modal-03/ Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript The template displays a centered landing page with a "Launch" button that opens a two-column m…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**, **Pacifico**

## Design tokens (`apps/snowdrift/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#e6f9fa` | brand 50 |
| `--color-brand-100` | `#b3ecf0` | brand 100 |
| `--color-brand-200` | `#80dfe6` | brand 200 |
| `--color-brand-300` | `#4dd2dc` | brand 300 |
| `--color-brand-400` | `#39bdc8` | brand 400 |
| `--color-brand-500` | `#2ca8b4` | brand 500 |
| `--color-brand-600` | `#248f9c` | brand 600 |
| `--color-brand-700` | `#1c7684` | brand 700 |
| `--color-brand-800` | `#145d6c` | brand 800 |
| `--color-brand-900` | `#0c4454` | brand 900 |
| `--color-brand-950` | `#042b3c` | brand 950 |
| `--font-lato` | `'Lato', sans-serif` | font lato |
| `--font-pacifico` | `'Pacifico', cursive` | font pacifico |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Landing` | Landing page with modal trigger | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |
| 3 | `SaleModal` | Two-column modal layout | see fidelity note below |

## Section-by-section fidelity

### `Landing`
The template SHALL display a centered landing section with the heading "Snowdrift" and a "Launch Sale" button that opens the modal dialog.

### `Footer`
The template footer SHALL display the site name, a tagline, and a link to https://www.componentdock.com/ branded as "Component Dock".

### `SaleModal`
The modal SHALL display a two-column layout: a left panel with a teal background containing the winter sale content, and a right panel with a background image and a "Shop now" button.

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
- **Provenance ban.** No file under `apps/snowdrift/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/snowdrift/public/CNAME` = `snowdrift.free.componentdock.com`
  and the package `homepage` = `https://snowdrift.free.componentdock.com`.
