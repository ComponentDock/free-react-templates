# Grocerly — Design Notes

Reference: **Ogani** — `https://colorlib.com/wp/template/ogani/`  
Live preview: `https://preview.colorlib.com/theme/ogani/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ogani-free-template.jpeg  
Shipped: https://grocerly.free.componentdock.com

Grocerly is a single-page ecommerce (fresh grocery / organic food store) website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cairo**, **Cairo:wght@400;700;800**

## Design tokens (`apps/grocerly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#7fad39` | brand |
| `--color-ink` | `#1c1c1c` | ink |
| `--color-muted` | `#6f6f6f` | muted |
| `--color-topbar` | `#f5f5f5` | topbar |
| `--color-footerbg` | `#f3f6fa` | footerbg |
| `--color-line` | `#ebebeb` | line |
| `--color-primary-50` | `#f5f9ec` | primary 50 |
| `--color-primary-100` | `#e7f1d3` | primary 100 |
| `--color-primary-200` | `#d0e3a9` | primary 200 |
| `--color-primary-300` | `#b4d277` | primary 300 |
| `--color-primary-400` | `#96bf4d` | primary 400 |
| `--color-primary-500` | `#7fad39` | primary 500 |
| `--color-primary-600` | `#6d9430` | primary 600 |
| `--color-primary-700` | `#587627` | primary 700 |
| `--color-primary-800` | `#445c1e` | primary 800 |
| `--color-primary-900` | `#2f3f14` | primary 900 |
| `--font-sans` | `'Cairo', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with top bar, nav and cart | see fidelity note below |
| 2 | `HeroRow` | Hero row with departments, search and phone | see fidelity note below |
| 3 | `HeroBanner` | Hero banner | see fidelity note below |
| 4 | `Categories` | Categories strip | see fidelity note below |
| 5 | `FeaturedProducts` | Featured products with filter tabs | see fidelity note below |
| 6 | `BannerBand` | Banner band | see fidelity note below |
| 7 | `LatestProducts` | Latest / Top Rated / Review product columns | see fidelity note below |
| 8 | `BlogSection` | — | no dedicated spec block |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render the reference two-row header: a light top bar (email + free-shipping notice left, language selector + Login + social right), a white mid row (logo, nav with a Pages dropdown, cart with wishlist/bag counts and item total), and a mobile hamburger toggle.

### `HeroRow`
The system SHALL render the hero row: a green "All departments" dropdown with 11 department links, a search bar with category select + SEARCH button, and a phone block.

### `HeroBanner`
The system SHALL render the full-width photo banner (431px tall) with the green eyebrow "FRUIT FRESH", a two-line headline, a support line and a green SHOP NOW button.

### `Categories`
The system SHALL render a strip of five photo category cards (270px tall) with centered bottom labels.

### `FeaturedProducts`
The system SHALL render the "Featured Product" section: green-underlined section title, filter tabs (All, Oranges, Fresh Meat, Vegetables, Fastfood) and an 8-card product grid whose items filter by tab.

### `BannerBand`
The system SHALL render two side-by-side promotional image banners.

### `LatestProducts`
The system SHALL render a three-column product list with headers "Latest Products", "Top Rated Products" and "Review Products", each showing six small product rows (pic + title + price).

### `BlogSection`
*anchors only* — From the blog

### `Footer`
The system SHALL render the light footer (`#F3F6FA`) with the About column (address/phone/email), a Useful Links widget (two link lists), a newsletter form, social icons and a copyright bar.

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
- **Provenance ban.** No file under `apps/grocerly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/grocerly/public/CNAME` = `grocerly.free.componentdock.com`
  and the package `homepage` = `https://grocerly.free.componentdock.com`.
