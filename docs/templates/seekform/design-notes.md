# Seekform — Design Notes

Reference: **Colorlib Search 6** — `https://colorlib.com/wp/template/colorlib-search-6/`  
Live preview: `https://colorlib.com/etc/searchf/colorlib-search-6/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-6.jpg  
Shipped: https://seekform.free.componentdock.com

A full-page search hero with a prominent search input, category pills, and a lifestyle background image. Recreation of ColorLib "Search Form 6" (https://colorlib.com/wp/template/colorlib-search-6/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;600;700**

## Design tokens (`apps/seekform/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#5fb8b0` | brand |
| `--color-primary-50` | `#f0fdfa` | primary 50 |
| `--color-primary-100` | `#ccfbf1` | primary 100 |
| `--color-primary-200` | `#99f6e4` | primary 200 |
| `--color-primary-300` | `#5eead4` | primary 300 |
| `--color-primary-400` | `#2dd4bf` | primary 400 |
| `--color-primary-500` | `#14b8a6` | primary 500 |
| `--color-primary-600` | `#0d9488` | primary 600 |
| `--color-primary-700` | `#0f766e` | primary 700 |
| `--color-primary-800` | `#115e59` | primary 800 |
| `--color-primary-900` | `#134e4a` | primary 900 |
| `--color-primary-950` | `#042f2e` | primary 950 |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchHero` | Search input | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `SearchHero`
The template SHALL provide a large, rounded search input with a magnifying glass icon that accepts user text.

### `Footer`
The template SHALL include a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/seekform/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seekform/public/CNAME` = `seekform.free.componentdock.com`
  and the package `homepage` = `https://seekform.free.componentdock.com`.
