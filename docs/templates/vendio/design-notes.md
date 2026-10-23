# Vendio — Design Notes

Reference: **Sublime** — `https://colorlib.com/wp/template/sublime/`  
Live preview: `https://preview.colorlib.com/theme/sublime/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sublime-free-template.jpg  
Shipped: https://vendio.free.componentdock.com

Vendio is a single-page e-commerce / online-shop website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;900**

## Design tokens (`apps/vendio/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1b1b1b` | brand |
| `--color-accent` | `#e95a5a` | accent |
| `--color-ink` | `#1b1b1b` | ink |
| `--color-muted` | `#767676` | muted |
| `--color-price` | `#6c6a74` | price |
| `--color-line` | `#787878` | line |
| `--color-faint` | `#e3e3e3` | faint |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header and navbar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `AdsRow` | Ads row | see fidelity note below |
| 4 | `ProductGrid` | Product grid | see fidelity note below |
| 5 | `XlAd` | XL ad banner | see fidelity note below |
| 6 | `IconBoxes` | Icon boxes | see fidelity note below |
| 7 | `Newsletter` | Newsletter | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a fixed full-width white header (130px tall) with the brand wordmark "Vendio" (30px, weight 700, ink `#1b1b1b`) on the left, a centered nav with links Home, Categories, Accessories, Offers, Contact (16px weight 600, `#767676`; hover/active `#1b1b1b`), and a right cluster: a cart link with a bag icon and a visible "(0)" count, a search icon that opens a search input panel, and (on mobile) a hamburger opening a full-screen white menu. When the page is scrolled, the header SHALL shrink to 70px and the logo to 24px (200ms transition).

### `HeroSlider`
The system SHALL render a 950px-tall hero with a full-bleed dark cover background photo (placeholder) and left-aligned content in a 580px column at ~32% height: a 60px weight-600 white headline "A new Online Shop experience.", a 14px white subtitle paragraph, and a "Shop Now" outline button (178×61px, 2px white border, white 16px weight-600 text; on hover a white sweep fills the button and the text turns ink). The slider SHALL cycle 3 slides (same copy, varied placeholder photos) with numbered dots "01."/"02."/"03." bottom-left, the active dot in accent red `#e95a5a`, and accessible prev/next or dot controls.

### `AdsRow`
The system SHALL render two side-by-side ad banners (490px tall): a small one (~39% width, 2px white inner border) with a cover photo, a bottom-right "20 %" discount badge (60px weight-700 ink "20" with a superscript "%" and a 14px "Discount" label), a 48px weight-600 white title "Smart Phones" and a "See More" link with a 1px white underline; and a large one (~61% width) with a cover photo under a `rgba(0,0,0,0.63)` overlay containing the 48px white title "Professional Cameras", a 14px white paragraph, and a "See More" link.

### `ProductGrid`
The system SHALL render a white section with a responsive 4-column grid of 8 product cards (placeholder images; titles paraphrased — source repeats "Smart Phone", price "$670"). Each card SHALL have a cover image, an optional rotated-90° corner badge (NEW = `#6c6a74`, SALE = `#e95a5a`, HOT = `#1b1b1b`, white 16px text), a product title (18px weight 500 ink; hover accent red) and a price (16px weight 500 `#6c6a74`). Badge layout per the source: item 1 NEW, items 2 and 8 SALE, item 6 HOT, the rest plain.

### `XlAd`
The system SHALL render a full-width cover-photo banner with a dark overlay and left-aligned content: a 48px weight-600 white title "Amazing Devices", a 14px white paragraph, and a "See More" link with a white underline.

### `IconBoxes`
The system SHALL render a white section with 3 centered benefit columns, each with a 75×75 icon (lucide-react), a title 18px weight 500 ink, and a muted 14px paragraph: "Free Shipping Worldwide", "Free Returns", "24h Fast Support".

### `Newsletter`
The system SHALL render a white section with a 2px `#e3e3e3` top border, centered: a 30px weight-500 ink title "Subscribe to our newsletter", a muted intro paragraph, and a form with an email input (40px, no border except a 2px `#787878` bottom line, centered text) and a "Subscribe" button (178×61px, 2px ink border, white bg, 16px weight-600 ink; hover sweep inverts). Empty or invalid email SHALL block submission with a validation message.

### `Footer`
The system SHALL render a light footer (static, in normal document flow) with the "Vendio" wordmark (30px weight 700 ink) on the left, a centered copyright line "Copyright © <year> All rights reserved | Made with ♥ by Component Dock" where "Component Dock" links https://www.componentdock.com/ (replacing the source's Colorlib credit), and three right-aligned social icon links (17px ink; hover white).

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
- **Provenance ban.** No file under `apps/vendio/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vendio/public/CNAME` = `vendio.free.componentdock.com`
  and the package `homepage` = `https://vendio.free.componentdock.com`.
