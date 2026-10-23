# Stayquest — Design Notes

Reference: **Colorlib Search 2** — `https://colorlib.com/wp/template/colorlib-search-2/`  
Live preview: `https://colorlib.com/etc/searchf/colorlib-search-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-2.jpg  
Shipped: https://stayquest.free.componentdock.com

A full-screen hotel search form hero template with a background image, dark overlay, centered heading, and a multi-field search bar (location, dates, guests) with a branded search button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;600;700**

## Design tokens (`apps/stayquest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c8a96e` | brand |
| `--color-primary-50` | `#faf6ed` | primary 50 |
| `--color-primary-100` | `#f3ebd6` | primary 100 |
| `--color-primary-200` | `#e8d8ad` | primary 200 |
| `--color-primary-300` | `#dbc28e` | primary 300 |
| `--color-primary-400` | `#c8a96e` | primary 400 |
| `--color-primary-500` | `#b8995e` | primary 500 |
| `--color-primary-600` | `#a08040` | primary 600 |
| `--color-primary-700` | `#806030` | primary 700 |
| `--color-primary-800` | `#604820` | primary 800 |
| `--color-primary-900` | `#403010` | primary 900 |
| `--color-primary-950` | `#201808` | primary 950 |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts loaded in index.html). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchHero` | Search heading | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `SearchHero`
The template SHALL display a prominent heading "Search Hotel" in the hero section.

### `Footer`
The template SHALL display a footer with a link to componentdock.com branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/stayquest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stayquest/public/CNAME` = `stayquest.free.componentdock.com`
  and the package `homepage` = `https://stayquest.free.componentdock.com`.
