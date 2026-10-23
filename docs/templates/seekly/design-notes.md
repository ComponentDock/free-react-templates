# Seekly — Design Notes

Reference: **Colorlib Search 1** — `https://colorlib.com/wp/template/colorlib-search-1/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-1/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-1.jpg  
Shipped: https://seekly.free.componentdock.com

A single-page search form hero template featuring a full-screen background image with a semi-transparent dark overlay, large heading text, and a search bar with two input fields and a search button. Minimal footer with Component Dock branding.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;600;700**

## Design tokens (`apps/seekly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6c7ae0` | brand |
| `--color-primary-50` | `#f0f0ff` | primary 50 |
| `--color-primary-100` | `#e0e0ff` | primary 100 |
| `--color-primary-200` | `#c4c4ff` | primary 200 |
| `--color-primary-300` | `#9d9dff` | primary 300 |
| `--color-primary-400` | `#7a7ae0` | primary 400 |
| `--color-primary-500` | `#6c7ae0` | primary 500 |
| `--color-primary-600` | `#5560c0` | primary 600 |
| `--color-primary-700` | `#4450a0` | primary 700 |
| `--color-primary-800` | `#3a4480` | primary 800 |
| `--color-primary-900` | `#2e3660` | primary 900 |
| `--color-primary-950` | `#1a1e3a` | primary 950 |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts loaded in index.html). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchHero` | Search form with inputs and button | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `SearchHero`
The template SHALL provide a search form with two text inputs and a search button.

### `Footer`
The template SHALL include a footer with the site name and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/seekly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seekly/public/CNAME` = `seekly.free.componentdock.com`
  and the package `homepage` = `https://seekly.free.componentdock.com`.
