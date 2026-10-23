# Modista — Design Notes

Reference: **Persuit** — `https://colorlib.com/wp/template/persuit/`  
Live preview: `https://preview.colorlib.com/theme/persuit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/persuit-free-template.jpg  
Shipped: https://modista.free.componentdock.com

Modista is a single-page fashion e-commerce shop template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Persuit" free template (source: https://colorlib.com/wp/template/persuit/), built under a DIFFERENT name (**Modista**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;600;700**, **Poppins**

## Design tokens (`apps/modista/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-red` | `#d91522` | brand red |
| `--color-brand-dark` | `#262121` | brand dark |
| `--color-footer-bg` | `#0b1033` | footer bg |
| `--color-text-primary` | `#000` | text primary |
| `--color-text-heading` | `#333333` | text heading |
| `--color-text-secondary` | `#666666` | text secondary |
| `--color-text-muted` | `#999999` | text muted |
| `--color-border-light` | `#e5e5e5` | border light |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fee2e2` | primary 100 |
| `--color-primary-200` | `#fecaca` | primary 200 |
| `--color-primary-300` | `#fca5a5` | primary 300 |
| `--color-primary-400` | `#f87171` | primary 400 |
| `--color-primary-500` | `#d91522` | primary 500 |
| `--color-primary-600` | `#d42421` | primary 600 |
| `--color-primary-700` | `#b91c1c` | primary 700 |
| `--color-primary-800` | `#991b1b` | primary 800 |
| `--color-primary-900` | `#7f1d1d` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |

> The spec has no section-level requirements; the order below is read from `apps/modista/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `HeroSlider` | — | no dedicated spec block |
| 4 | `FeatureAds` | — | no dedicated spec block |
| 5 | `LatestProducts` | — | no dedicated spec block |
| 6 | `PromoBanners` | — | no dedicated spec block |
| 7 | `CategoryListing` | — | no dedicated spec block |
| 8 | `FeaturedProducts` | — | no dedicated spec block |
| 9 | `BlogSection` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — banner · User account · Shopping cart

### `Navbar`
*anchors only* — navigation · Main · Search

### `HeroSlider`
*anchors only* — Hero slider · Best Summer Collection · Read More

### `FeatureAds`
*anchors only* — Feature advertisements · Shop Now

### `LatestProducts`
*anchors only* — Latest products · Compare · Wishlist

### `PromoBanners`
*anchors only* — Promotional banners · Best Summer Collection · Shop Now

### `CategoryListing`
*anchors only* — Category listing

### `FeaturedProducts`
*anchors only* — Featured products

### `BlogSection`
*anchors only* — Blog · From The Blog

### `Footer`
*anchors only* — contentinfo · MODISTA · Information · Customer Service · Extras · My Account

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
- **Provenance ban.** No file under `apps/modista/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/modista/public/CNAME` = `modista.free.componentdock.com`
  and the package `homepage` = `https://modista.free.componentdock.com`.
