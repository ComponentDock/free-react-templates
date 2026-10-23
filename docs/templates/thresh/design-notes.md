# Thresh — Design Notes

Reference: **Multiselect 09** — `https://colorlib.com/wp/template/multiselect-09/`  
Live preview: `https://preview.colorlib.com/theme/multiselect-09/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-09.jpg  
Shipped: https://thresh.free.componentdock.com

Thresh is a single-page multiselect-dropdown component demo in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/thresh/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#343434` | page |
| `--color-accent` | `#f6c523` | accent |
| `--color-panel` | `#000000` | panel |
| `--color-trigger-bg` | `rgba(0, 0, 0, 0.8)` | trigger bg |
| `--color-trigger-border-focus` | `rgba(0, 0, 0, 0.1)` | trigger border focus |
| `--color-placeholder` | `rgba(255, 255, 255, 0.8)` | placeholder |
| `--color-row-rest` | `#808080` | row rest |
| `--color-row-hover-bg` | `rgba(255, 255, 255, 0.1)` | row hover bg |
| `--color-checkbox-border` | `rgba(255, 255, 255, 0.18)` | checkbox border |
| `--font-sans` | `'Lato', Arial, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Heading` | Heading section | see fidelity note below |
| 2 | `MultiSelect` | Multiselect trigger | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Heading`
The system SHALL render a centered heading section on the dark page.

### `MultiSelect`
The system SHALL render a dark multiselect trigger with a placeholder and clear-all affordance.

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
- **Provenance ban.** No file under `apps/thresh/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/thresh/public/CNAME` = `thresh.free.componentdock.com`
  and the package `homepage` = `https://thresh.free.componentdock.com`.
