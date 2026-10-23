# Wares — Design Notes

Reference: **E Shop** — `https://colorlib.com/wp/template/e-shop/`  
Live preview: `https://preview.colorlib.com/theme/e-shop/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/e-shop-free-ecommerce-website-template.jpg  
Shipped: https://wares.free.componentdock.com

Wares is a free e-commerce React template that recreates the ColorLib "E Shop" design. It provides a storefront layout with navbar, category navigation, hero banners, product sliders, daily deals with countdown, latest products, picked-for-you recommendations, and a dark footer with newsletter signup.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Hind**, **Hind:wght@300;400;500;600;700**

## Design tokens (`apps/wares/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f8694a` | brand |
| `--color-brand-dark` | `#e55a3a` | brand dark |
| `--color-ink` | `#30323a` | Ink — dark headers/footer (#30323A from the original). |
| `--color-ink-dark` | `#24262e` | ink dark |
| `--color-paper` | `#f6f7f8` | Paper — light section background (#F6F7F8 from the original). |
| `--color-mist` | `#4a4e5a` | Mist — muted body text (#4A4E5A from the original). |
| `--color-primary-50` | `#fff4ed` | primary 50 |
| `--color-primary-100` | `#ffe6d5` | primary 100 |
| `--color-primary-200` | `#ffc8aa` | primary 200 |
| `--color-primary-300` | `#ffa274` | primary 300 |
| `--color-primary-400` | `#ff8355` | primary 400 |
| `--color-primary-500` | `#f8694a` | primary 500 |
| `--color-primary-600` | `#e55a3a` | primary 600 |
| `--color-primary-700` | `#c44a2d` | primary 700 |
| `--color-primary-800` | `#a03c24` | primary 800 |
| `--color-primary-900` | `#82321e` | primary 900 |
| `--font-sans` | `'Hind', ui-sans-serif, system-ui, sans-serif` | Original font: "Hind" from Google Fonts. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with search and cart | see fidelity note below |
| 2 | `CategoryNav` | Category navigation | see fidelity note below |
| 3 | `HeroBanners` | Hero banners | see fidelity note below |
| 4 | `ProductSlider` | Latest products | see fidelity note below |
| 5 | `DealsOfTheDay` | — | no dedicated spec block |
| 6 | `LatestProducts` | Product slider section | see fidelity note below |
| 7 | `PickedForYou` | Picked for you | see fidelity note below |
| 8 | `Footer` | Footer with newsletter | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The template SHALL display a sticky dark navbar with logo, search input, account icon, and cart icon with badge count.

### `CategoryNav`
The template SHALL display a horizontal category navigation bar below the navbar.

### `HeroBanners`
The template SHALL display two side-by-side promotional banners.

### `ProductSlider`
The template SHALL display a "Latest Products" grid section.

### `DealsOfTheDay`
*anchors only* — Deals Of The Day

### `LatestProducts`
The template SHALL display a "New Product Collection" section with product cards.

### `PickedForYou`
The template SHALL display a "Picked For You" recommendation grid.

### `Footer`
The template SHALL display a dark footer with logo, social links, account/service links, newsletter signup, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/wares/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wares/public/CNAME` = `wares.free.componentdock.com`
  and the package `homepage` = `https://wares.free.componentdock.com`.
