# Domicile — Design Notes

Reference: `https://colorlib.com/wp/template/homespace/` (the design page the spec records)  
Live preview: `https://preview.colorlib.com/theme/occupy/` (the ROW's slug `occupy`, probed 200 on 2026-10-23) — the spec names `homespace` and records no demo.  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/occupy-free-template.jpg — the ROW's slug `occupy`, not the spec's `homespace`  
Shipped: https://domicile.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `occupy` for this app while the spec records `homespace`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Domicile is a real estate property listing landing page with search filters and a property grid. It recreates the ColorLib **Homespace** design (https://colorlib.com/wp/template/homespace/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@300;400;600;700;900**

## Design tokens (`apps/domicile/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c8102e` | brand |
| `--color-brand-dark` | `#a00d24` | brand dark |
| `--color-heading` | `#1a1a1a` | heading |
| `--color-body` | `#555555` | body |
| `--color-muted` | `#888888` | muted |
| `--color-light` | `#f8f9fa` | light |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | — | no dedicated spec block |
| 4 | `SearchFilter` | Search filters | see fidelity note below |
| 5 | `Properties` | Property listings | see fidelity note below |
| 6 | `Services` | — | no dedicated spec block |
| 7 | `Blog` | — | no dedicated spec block |
| 8 | `Footer` | Footer Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — Facebook · Twitter · LinkedIn

### `Navbar`
*anchors only* — Toggle navigation · Domicile

### `Hero`
*anchors only* — Los Angeles, CA 90005 · More Details

### `SearchFilter`
The SearchFilter SHALL provide dropdown filters for Lot Area, Bedrooms, Bathrooms, and Price Range.

### `Properties`
The Properties section SHALL display 6 property cards with title, location, price, beds, baths, and sqft.

### `Services`
*anchors only* — Our Services

### `Blog`
*anchors only* — Our Blog

### `Footer`
The footer SHALL link to https://www.componentdock.com/ with target="_blank".

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
- **Provenance ban.** No file under `apps/domicile/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/domicile/public/CNAME` = `domicile.free.componentdock.com`
  and the package `homepage` = `https://domicile.free.componentdock.com`.
