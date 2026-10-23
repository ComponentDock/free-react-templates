# Manor — Design Notes

Reference: **Theestate** — `https://colorlib.com/wp/template/theestate/`  
Live preview: `https://preview.colorlib.com/theme/theestate/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/theestate-free-template.jpg  
Shipped: https://manor.free.componentdock.com

A Real Estate template with hero, search box, featured properties, workflow, cities and cta sections. Recreation of ColorLib's **The Estate** template (`theestate`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700**, **Open Sans**

## Design tokens (`apps/manor/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-coral-50` | `#fff7f4` | coral 50 |
| `--color-coral-100` | `#ffe8df` | coral 100 |
| `--color-coral-200` | `#ffd1bf` | coral 200 |
| `--color-coral-300` | `#ffb199` | coral 300 |
| `--color-coral-400` | `#fd784f` | coral 400 |
| `--color-coral-500` | `#fc5c2e` | coral 500 |
| `--color-coral-600` | `#e54216` | coral 600 |
| `--color-coral-700` | `#bf3410` | coral 700 |
| `--color-coral-800` | `#9c2e12` | coral 800 |
| `--color-coral-900` | `#802b15` | coral 900 |
| `--color-navy-50` | `#f0f2f8` | navy 50 |
| `--color-navy-100` | `#d9ddef` | navy 100 |
| `--color-navy-200` | `#b3bbe0` | navy 200 |
| `--color-navy-300` | `#8c98d0` | navy 300 |
| `--color-navy-400` | `#6676c1` | navy 400 |
| `--color-navy-500` | `#4054b1` | navy 500 |
| `--color-navy-600` | `#2d3d8e` | navy 600 |
| `--color-navy-700` | `#1e2c6a` | navy 700 |
| `--color-navy-800` | `#0e1d41` | navy 800 |
| `--color-navy-900` | `#0a1430` | navy 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Open Sans — the original template's body typeface |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |

> The spec has no section-level requirements; the order below is read from `apps/manor/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `SearchBox` | — | no dedicated spec block |
| 4 | `FeaturedProperties` | — | no dedicated spec block |
| 5 | `Testimonials` | — | no dedicated spec block |
| 6 | `Workflow` | — | no dedicated spec block |
| 7 | `Cities` | — | no dedicated spec block |
| 8 | `CTA` | — | no dedicated spec block |
| 9 | `Newsletter` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Hero`
*anchors only* — Previous slide · Next slide

### `SearchBox`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `FeaturedProperties`
*anchors only* — For Sale · See our best offers

### `Testimonials`
*anchors only* — See our best offers

### `Workflow`
*anchors only* — What you need to do

### `Cities`
*anchors only* — Previous cities · Next cities · Explore popular locations

### `CTA`
*anchors only* — Call now:

### `Newsletter`
*anchors only* — Get the latest offers

### `Footer`
*anchors only* — Component Dock

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
- **Provenance ban.** No file under `apps/manor/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/manor/public/CNAME` = `manor.free.componentdock.com`
  and the package `homepage` = `https://manor.free.componentdock.com`.
