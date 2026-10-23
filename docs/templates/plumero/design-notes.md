# Plumero — Design Notes

Reference: **Pillow Mart** — `https://colorlib.com/wp/template/pillow-mart/`  
Live preview: `https://preview.colorlib.com/theme/pillow-mart/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pillowmart-free-template.jpg  
Shipped: https://plumero.free.componentdock.com

Plumero is a single-page PILLOW/BEDDING eCOMMERCE STORE in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**, **Rubik**

## Design tokens (`apps/plumero/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#b08ead` | Plumero design tokens (Pillow Mart palette) |
| `--color-dark-purple` | `#4b3049` | dark purple |
| `--color-light-purple` | `#f4edf2` | light purple |
| `--color-page-text` | `#1e1e1e` | page text |
| `--color-secondary-text` | `#556172` | secondary text |
| `--color-border` | `#edeff2` | border |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |

> The spec has no section-level requirements; the order below is read from `apps/plumero/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `FeaturedProducts` | — | no dedicated spec block |
| 4 | `TrendingItems` | — | no dedicated spec block |
| 5 | `ClientReviews` | — | no dedicated spec block |
| 6 | `Features` | — | no dedicated spec block |
| 7 | `Newsletter` | — | no dedicated spec block |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Search · Shopping bag · Toggle menu · Mobile navigation

### `Hero`
*anchors only* — Best quality pillow · Shop Now

### `FeaturedProducts`
*anchors only* — Explore Now

### `TrendingItems`
*anchors only* — Trending Items

### `ClientReviews`
*anchors only* — Previous review · Next review · Client Reviews

### `Features`
*anchors only* — Why Choose Us

### `Newsletter`
*anchors only* — Email address · Get promotions &amp; updates! · Subscribe to our newsletter and never miss a sale, new arrival, or exclusive offer. · Subscribe

### `Footer`
*anchors only* — Footer navigation · Plumero · Component Dock

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
- **Provenance ban.** No file under `apps/plumero/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/plumero/public/CNAME` = `plumero.free.componentdock.com`
  and the package `homepage` = `https://plumero.free.componentdock.com`.
