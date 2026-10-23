# Flightly — Design Notes

Reference: **Colorlib Search 20** — `https://colorlib.com/wp/template/colorlib-search-20/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-20.jpg  
Shipped: https://flightly.free.componentdock.com

A full-screen flight search form hero template with a background image, dark overlay, centered heading, and a white card containing a multi-field search form (from, to, dates, passengers) with a branded search button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;600;700**

## Design tokens (`apps/flightly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff4b5a` | Flightly brand red |
| `--color-primary-50` | `#fff1f2` | primary 50 |
| `--color-primary-100` | `#ffe4e6` | primary 100 |
| `--color-primary-200` | `#fecdd3` | primary 200 |
| `--color-primary-300` | `#fda4af` | primary 300 |
| `--color-primary-400` | `#ff4b5a` | primary 400 |
| `--color-primary-500` | `#eb3746` | primary 500 |
| `--color-primary-600` | `#c01220` | primary 600 |
| `--color-primary-700` | `#a01018` | primary 700 |
| `--color-primary-800` | `#841218` | primary 800 |
| `--color-primary-900` | `#72141a` | primary 900 |
| `--color-primary-950` | `#3f050a` | primary 950 |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts loaded in index.html). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `FlightSearchForm` | — | no dedicated spec block |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `FlightSearchForm`
*anchors only* — search · Flight search · Passengers · Adults · Children

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
- **Provenance ban.** No file under `apps/flightly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/flightly/public/CNAME` = `flightly.free.componentdock.com`
  and the package `homepage` = `https://flightly.free.componentdock.com`.
