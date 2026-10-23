# Modish — Design Notes

Reference: **Divisima** — `https://colorlib.com/wp/template/divisima/`  
Live preview: `https://preview.colorlib.com/theme/divisima/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/divisima-free-template.jpg  
Shipped: https://modish.free.componentdock.com

Modish is a single-page fashion e-commerce website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;500;600;700**

## Design tokens (`apps/modish/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f51167` | brand |
| `--color-brand-dark` | `#ec105a` | brand dark |
| `--color-blush` | `#f96790` | blush |
| `--color-ink` | `#414141` | ink |
| `--color-coal` | `#111111` | coal |
| `--color-night` | `#282828` | night |
| `--color-fog` | `#f0f0f0` | fog |
| `--color-snow` | `#f8f8f8` | snow |
| `--color-ash` | `#ebebeb` | ash |
| `--color-mint` | `#50e550` | mint |
| `--color-mist` | `#8f8f8f` | mist |
| `--color-primary-50` | `#fde7ef` | primary 50 |
| `--color-primary-100` | `#fbcfe0` | primary 100 |
| `--color-primary-200` | `#f79fc1` | primary 200 |
| `--color-primary-300` | `#f36fa2` | primary 300 |
| `--color-primary-400` | `#f53e84` | primary 400 |
| `--color-primary-500` | `#f51167` | primary 500 |
| `--color-primary-600` | `#e20d5b` | primary 600 |
| `--color-primary-700` | `#ec105a` | primary 700 |
| `--color-primary-800` | `#b30b48` | primary 800 |
| `--color-primary-900` | `#8a0938` | primary 900 |
| `--font-sans` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header top bar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `Features` | Features bar | see fidelity note below |
| 4 | `LatestProducts` | Latest products | see fidelity note below |
| 5 | `TopSelling` | Top selling filter | see fidelity note below |
| 6 | `Banner` | Promo banner | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a white header top bar with a logo, a search input, and a user panel.

### `Hero`
The system SHALL render a full-width hero with a darkened photo slider, an eyebrow, a headline, two call-to-action pills, and a circular offer badge.

### `Features`
The system SHALL render a three-column feature bar with icons, the middle column highlighted.

### `LatestProducts`
The system SHALL render a "LATEST PRODUCTS" section with a heading and product cards showing photo, price, name, and hover actions.

### `TopSelling`
The system SHALL render a "BROWSE TOP SELLING PRODUCTS" section with filter pills, a product grid, and a load-more button.

### `Banner`
The system SHALL render a photo banner with a NEW tag, an eyebrow, a headline, and a shop-now button.

### `Footer`
The system SHALL render a dark footer with logo, About, Questions, latest posts, contact, and social widgets plus a copyright bar.

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
- **Provenance ban.** No file under `apps/modish/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/modish/public/CNAME` = `modish.free.componentdock.com`
  and the package `homepage` = `https://modish.free.componentdock.com`.
