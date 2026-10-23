# Feast — Design Notes

Reference: **Flatter** — `https://colorlib.com/wp/template/flatter/`  
Live preview: `https://preview.colorlib.com/theme/foodblog/` (the ROW's slug `foodblog`, probed 200 on 2026-10-23) — the spec names `flatter` and records no demo.  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/foodblog-free-template.jpg — the ROW's slug `foodblog`, not the spec's `flatter`  
Shipped: https://feast.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `foodblog` for this app while the spec records `flatter`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

A food catering service landing page with centered navigation, hero slider, services grid, video banner, popular orders, testimonials, brand logos, and a multi-column footer. The design uses warm red-orange tones and a zigzag/wave aesthetic on section borders.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;600;700**

## Design tokens (`apps/feast/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fef3f0` | Feast brand palette — warm red-orange primary, deep navy dark background |
| `--color-primary-100` | `#fde2d8` | primary 100 |
| `--color-primary-200` | `#fac3b0` | primary 200 |
| `--color-primary-300` | `#f5987a` | primary 300 |
| `--color-primary-400` | `#ef6d42` | primary 400 |
| `--color-primary-500` | `#e8511b` | primary 500 |
| `--color-primary-600` | `#d13e12` | primary 600 |
| `--color-primary-700` | `#ae3010` | primary 700 |
| `--color-primary-800` | `#8c2814` | primary 800 |
| `--color-primary-900` | `#722414` | primary 900 |
| `--color-navy` | `#020c26` | navy |
| `--color-navy-light` | `#0a1a3a` | navy light |
| `--font-sans` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and CTA | see fidelity note below |
| 2 | `Hero` | Hero section with heading and background | see fidelity note below |
| 3 | `Services` | Services section with 6 service cards | see fidelity note below |
| 4 | `VideoBanner` | Video banner with play button | see fidelity note below |
| 5 | `PopularOrders` | Popular Orders section with 6 meal cards | see fidelity note below |
| 6 | `Testimonials` | Testimonials section with customer feedback | see fidelity note below |
| 7 | `Brands` | Brands section with logo grid | see fidelity note below |
| 8 | `Footer` | Footer with newsletter and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky navbar with logo, navigation links (About, Services, Menu, Gallery, Blog dropdown, Pages dropdown, Contact), and a "Custom Order" CTA button.

### `Hero`
The template SHALL render a full-width hero section with a heading, description text, and background image.

### `Services`
The template SHALL render a services section with a heading and 6 service cards in a grid layout.

### `VideoBanner`
The template SHALL render a dark video banner section with a heading and play button.

### `PopularOrders`
The template SHALL render a popular orders section with 6 meal cards, each showing a food image, price, name, ingredients, and "Order Now!" button.

### `Testimonials`
The template SHALL render a testimonials section with customer cards showing avatar, name, role, and quote.

### `Brands`
The template SHALL render a brands section with 8 placeholder brand logos.

### `Footer`
The template SHALL render a footer with link columns, newsletter form, social icons, and a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/feast/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/feast/public/CNAME` = `feast.free.componentdock.com`
  and the package `homepage` = `https://feast.free.componentdock.com`.
