# Petal — Design Notes

Reference: **Florist** — `https://colorlib.com/wp/template/florist/`  
Live preview: `https://preview.colorlib.com/theme/florist/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/juli-free-lifestyle-blog-website-template.jpg — the ROW's slug `juli`, not the spec's `florist`  
Shipped: https://petal.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `juli` for this app while the spec records `florist`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Petal is a flower shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Florist" design, built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Quicksand**, **Quicksand:wght@300;400;500;600;700**

## Design tokens (`apps/petal/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-rose-50` | `#fef2f6` | Brand palette — floral pink accent #f45d96 |
| `--color-rose-100` | `#fde6ee` | rose 100 |
| `--color-rose-200` | `#fbcee0` | rose 200 |
| `--color-rose-300` | `#f8a4c5` | rose 300 |
| `--color-rose-400` | `#f45d96` | rose 400 |
| `--color-rose-500` | `#ef3378` | rose 500 |
| `--color-rose-600` | `#e0165c` | rose 600 |
| `--color-rose-700` | `#c00a47` | rose 700 |
| `--color-rose-800` | `#9e0c3c` | rose 800 |
| `--color-rose-900` | `#850e36` | rose 900 |
| `--font-sans` | `'Quicksand', ui-sans-serif, system-ui, sans-serif` | Quicksand — main body typeface |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Oswald — heading accent typeface |

> The spec has no section-level requirements; the order below is read from `apps/petal/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Benefits` | — | no dedicated spec block |
| 4 | `Categories` | — | no dedicated spec block |
| 5 | `About` | — | no dedicated spec block |
| 6 | `Arrivals` | — | no dedicated spec block |
| 7 | `CallToAction` | — | no dedicated spec block |
| 8 | `Blog` | — | no dedicated spec block |
| 9 | `Testimonials` | — | no dedicated spec block |
| 10 | `Instagram` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Search · Cart · Mobile navigation

### `Hero`
*anchors only* — Fresh Flower &amp; Gift Shop · Making beautiful flowers a part of your life. · Shop now

### `Benefits`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Categories`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `About`
*anchors only* — Play video · About us · We provide all kinds of fresh flower services · Slow Flowers' Floral Insights · Dried flowers are having a renaissance · Contact us

### `Arrivals`
*anchors only* — tablist · presentation · Search · Add to cart · Add to wishlist

### `CallToAction`
*anchors only* — Custom flower · Let our flowers make your party more perfect. · Order Now · Contact Us

### `Blog`
*anchors only* — Latest posts · Florist tricks · View all posts

### `Testimonials`
*anchors only* — Previous testimonial · Next testimonial

### `Instagram`
*anchors only* — Follow us @petal

### `Footer`
*anchors only* — Newsletter signup · Subscribe · Petal · Quick Links · Services · Newsletter

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
- **Provenance ban.** No file under `apps/petal/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/petal/public/CNAME` = `petal.free.componentdock.com`
  and the package `homepage` = `https://petal.free.componentdock.com`.
