# Searchmint — Design Notes

Reference: **Search Form Bar 09** — `https://colorlib.com/wp/template/search-form-bar-09/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/search-form-bar-09/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-09.jpg  
Shipped: https://searchmint.free.componentdock.com

A minimal, clean search bar snippet with a centered heading, white input, and mint-green search button on a light background. Recreation of ColorLib **Search Form/Bar V09**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/searchmint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-searchmint-bg` | `#fafafa` | searchmint bg |
| `--color-searchmint-brand` | `#01d28e` | searchmint brand |
| `--color-searchmint-brand-hover` | `#01b87a` | searchmint brand hover |
| `--color-searchmint-input-bg` | `#ffffff` | searchmint input bg |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchForm` | Search input | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `SearchForm`
The template SHALL render a search input with placeholder "Search...", white background, 50px height, 2px border-radius, no visible border, and a subtle box shadow.

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
- **Provenance ban.** No file under `apps/searchmint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchmint/public/CNAME` = `searchmint.free.componentdock.com`
  and the package `homepage` = `https://searchmint.free.componentdock.com`.
