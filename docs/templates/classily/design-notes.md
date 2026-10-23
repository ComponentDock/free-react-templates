# Classily — Design Notes

Reference: **Classy Ads** — `https://colorlib.com/wp/template/classy-ads/`  
Live preview: `https://preview.colorlib.com/theme/classy-ads/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/classyads-free-template.jpg  
Shipped: https://classily.free.componentdock.com

A Classified Ads Platform template with hero, category stats and featured ads sections. Recreation of ColorLib's **Classy Ads** classified ads website template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/classily/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00c9b7` | brand |
| `--color-brand-dark` | `#00a896` | brand dark |
| `--color-ink` | `#26282b` | Ink — dark text (#26282b from the original). |
| `--color-ink-light` | `#3a3d42` | ink light |
| `--color-paper` | `#f5f5f5` | Paper — light page background (#f5f5f5). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999). |
| `--color-primary-50` | `#e6faf8` | primary 50 |
| `--color-primary-100` | `#b3f0eb` | primary 100 |
| `--color-primary-200` | `#80e6dd` | primary 200 |
| `--color-primary-300` | `#4ddcce` | primary 300 |
| `--color-primary-400` | `#26d4c3` | primary 400 |
| `--color-primary-500` | `#00c9b7` | primary 500 |
| `--color-primary-600` | `#00a896` | primary 600 |
| `--color-primary-700` | `#008775` | primary 700 |
| `--color-primary-800` | `#006654` | primary 800 |
| `--color-primary-900` | `#004533` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with all navigation links | see fidelity note below |
| 2 | `Hero` | Hero section shows search bar over background image | see fidelity note below |
| 3 | `CategoryStats` | Category Stats section shows 6 category items | see fidelity note below |
| 4 | `FeaturedAds` | Featured Ads section shows ad cards in grid | see fidelity note below |
| 5 | `Footer` | Footer contains Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the site logo, navigation links, login/register links, and a "Post an Ad" CTA button.

### `Hero`
The hero SHALL display a full-width background image with centered text and a horizontal search bar.

### `CategoryStats`
The category stats section SHALL display 6 category items in a row with icons, names, and count badges.

### `FeaturedAds`
The featured ads section SHALL display ad listing cards in a 4-column grid with images, titles, prices, and locations.

### `Footer`
The footer SHALL display the brand name, quick links, contact info, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/classily/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/classily/public/CNAME` = `classily.free.componentdock.com`
  and the package `homepage` = `https://classily.free.componentdock.com`.
