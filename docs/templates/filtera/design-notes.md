# Filtera — Design Notes

Reference: **Colorlib Search 10** — `https://colorlib.com/wp/template/colorlib-search-10/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-10.jpg  
Shipped: https://filtera.free.componentdock.com

Filtera is a single-page fancy search form template in the free-react-templates monorepo. It recreates the ColorLib "Search Form V10" template (https://colorlib.com/wp/template/colorlib-search-10/) under a different name.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@400;700**

## Design tokens (`apps/filtera/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#2c6dd5` | brand |
| `--color-accent` | `#ff4b5a` | accent |
| `--color-bg` | `#d9eff5` | bg |
| `--color-primary-50` | `#eff6ff` | primary 50 |
| `--color-primary-100` | `#dbeafe` | primary 100 |
| `--color-primary-200` | `#bfdbfe` | primary 200 |
| `--color-primary-300` | `#93c5fd` | primary 300 |
| `--color-primary-400` | `#60a5fa` | primary 400 |
| `--color-primary-500` | `#2c6dd5` | primary 500 |
| `--color-primary-600` | `#2563eb` | primary 600 |
| `--color-primary-700` | `#1d4ed8` | primary 700 |
| `--color-primary-800` | `#1e40af` | primary 800 |
| `--color-primary-900` | `#1e3a8a` | primary 900 |
| `--color-primary-950` | `#172554` | primary 950 |
| `--font-display` | `'Lato', ui-sans-serif, system-ui, sans-serif` | Original font: "Lato" (Google Fonts loaded in index.html). |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchForm` | Search input bar | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `SearchForm`
The template SHALL display a full-width gradient search bar (blue-to-pink) with a "Type Keywords" placeholder, a white search icon, and rounded pill shape.

### `Footer`
The template SHALL display a footer with the template name and a link to Component Dock (https://www.componentdock.com/).

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
- **Provenance ban.** No file under `apps/filtera/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/filtera/public/CNAME` = `filtera.free.componentdock.com`
  and the package `homepage` = `https://filtera.free.componentdock.com`.
