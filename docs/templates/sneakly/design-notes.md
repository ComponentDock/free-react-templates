# Sneakly — Design Notes

Reference: **Minishop** — `https://colorlib.com/wp/template/minishop/`  
Live preview: `https://preview.colorlib.com/theme/minishop/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/minishop-free-template.jpg  
Shipped: https://sneakly.free.componentdock.com

Sneakly is a single-page eCommerce shoe-store landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800;900**

## Design tokens (`apps/sneakly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#dbcc8f` | brand |
| `--color-gold` | `#c2a942` | gold |
| `--color-ink` | `#000000` | ink |
| `--color-light` | `#f8f9fa` | light |
| `--color-muted` | `#b3b3b3` | muted |
| `--color-body` | `rgb(0 0 0 / 0.8)` | body |
| `--color-footer` | `rgb(255 255 255 / 0.8)` | footer |
| `--color-primary-50` | `#fbf8ef` | primary 50 |
| `--color-primary-100` | `#f5efdb` | primary 100 |
| `--color-primary-200` | `#ecdfb8` | primary 200 |
| `--color-primary-300` | `#e3cf95` | primary 300 |
| `--color-primary-400` | `#dfc58a` | primary 400 |
| `--color-primary-500` | `#dbcc8f` | primary 500 |
| `--color-primary-600` | `#dbcc8f` | primary 600 |
| `--color-primary-700` | `#c9b87a` | primary 700 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Topbar` | Top bar | see fidelity note below |
| 2 | `Navbar` | Navbar | see fidelity note below |
| 3 | `Hero` | Hero slider | see fidelity note below |
| 4 | `Services` | Services row | see fidelity note below |
| 5 | `Products` | New Shoes Arrival product grid | see fidelity note below |
| 6 | `Choose` | Choose section | see fidelity note below |
| 7 | `Deal` | Deal of the month | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Gallery` | Instagram gallery | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Topbar`
The system SHALL render a black top strip above the navbar with three items: a phone number, an email address, and a right-aligned shipping promo line, all in small uppercase white text.

### `Navbar`
The system SHALL render a transparent (absolute-positioned) navbar with a black brand, uppercase spaced nav links, a Catalog dropdown, and a cart icon with a "0" badge.

### `Hero`
The system SHALL render a full-height hero slider with two slides, each showing a photo on the right and a text block on the left with a subheading, a large uppercase headline, a paragraph, and a gold "Discover Now" button.

### `Services`
The system SHALL render three centered benefit columns with circular line-art icons and headings: Free Shipping, Support Customer, Secure Payments.

### `Products`
The system SHALL render a light-grey (`#f8f9fa`) section headed "New Shoes Arrival" with eight product cards in a 4-column grid, each with a photo, category label, star rating, bold uppercase product name, and price (some with a strikethrough sale price).

### `Choose`
The system SHALL render a 2×2 grid of tall image cards — Men's Collection, Women's Collection, Extra 50% Off, Best Sellers — each with a black "Shop now" button.

### `Deal`
The system SHALL render a gold (`#dbcc8f`) deal band with a product photo, white "Deal of the month" heading, a four-part countdown timer (days/hours/minutes/seconds), a product name with strikethrough + sale price, and three circular thumbnails.

### `Testimonials`
The system SHALL render a "Our satisfied customer says" section with a testimonial carousel of five items, each with a circular photo, quote badge, quote text, name, and role.

### `Gallery`
The system SHALL render a "Follow Us On Instagram" section with a heading, a paragraph, and six square photo tiles in one row on lg.

### `Footer`
The system SHALL render a black footer with four widget columns — brand + social icons, Menu links, Help links, and contact info — plus a copyright bar.

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
- **Provenance ban.** No file under `apps/sneakly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sneakly/public/CNAME` = `sneakly.free.componentdock.com`
  and the package `homepage` = `https://sneakly.free.componentdock.com`.
