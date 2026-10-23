# Catalog — Design Notes

Reference: **Directoryads** — `https://colorlib.com/wp/template/directoryads/`  
Live preview: `https://preview.colorlib.com/theme/directoryads/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/directoryads-free-template.jpg  
Shipped: https://catalog.free.componentdock.com

Recreate ColorLib Directoryads as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Catalog". The original uses Nanum Gothic font, blue (#2f89fc) primary color, and dark (#333) footer. No ColorLib assets are copied; images use picsum.photos placeholders, icons use lucide-react, and brand icons use inline SVGs.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nanum Gothic**, **Nanum Gothic:wght@400;700;800**

## Design tokens (`apps/catalog/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e8f1ff` | primary 50 |
| `--color-primary-100` | `#c5deff` | primary 100 |
| `--color-primary-200` | `#9ec6ff` | primary 200 |
| `--color-primary-300` | `#74adff` | primary 300 |
| `--color-primary-400` | `#4d97ff` | primary 400 |
| `--color-primary-500` | `#2f89fc` | primary 500 |
| `--color-primary-600` | `#1a6fd4` | primary 600 |
| `--color-primary-700` | `#0f57ab` | primary 700 |
| `--color-primary-800` | `#0a4285` | primary 800 |
| `--color-primary-900` | `#072f5e` | primary 900 |
| `--color-ink` | `#1a1a1a` | ink |
| `--color-body` | `#4d4d4d` | body |
| `--color-muted` | `#737373` | muted |
| `--color-footer-bg` | `#333333` | footer bg |
| `--color-star` | `#ffc107` | star |
| `--color-card-bg` | `#e9ecef` | card bg |
| `--font-sans` | `'Nanum Gothic', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Nanum Gothic', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar mobile menu toggles | see fidelity note below |
| 2 | `Hero` | Hero search form is interactive | see fidelity note below |
| 3 | `FeaturedAds` | FeaturedAds displays listing cards | see fidelity note below |
| 4 | `PopularCategories` | PopularCategories displays category grid | see fidelity note below |
| 5 | `TrendingToday` | TrendingToday displays listing cards in 2-column grid | see fidelity note below |
| 6 | `Testimonials` | Testimonials carousel navigates correctly | see fidelity note below |
| 7 | `Blog` | Blog section displays three posts | see fidelity note below |
| 8 | `Newsletter` | Newsletter form is interactive | see fidelity note below |
| 9 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The Navbar SHALL have a mobile hamburger menu that opens/closes on toggle click. Clicking a mobile nav link SHALL close the menu.

### `Hero`
The hero section SHALL contain a search form with keyword input, location input, category dropdown, and search button. Submitting the form SHALL prevent default.

### `FeaturedAds`
The FeaturedAds section SHALL display four listing cards with image, category, title, address, star rating, and bookmark button.

### `PopularCategories`
The PopularCategories section SHALL display six category cards in a grid, each with an icon, name, and count.

### `TrendingToday`
The TrendingToday section SHALL display four listing cards in a 2-column grid.

### `Testimonials`
The Testimonials section SHALL display a carousel with prev/next buttons and dot indicators. Navigation SHALL wrap around at boundaries.

### `Blog`
The Blog section SHALL display three blog post cards with image, title, author, date, category, and excerpt, plus a "View All Posts" button.

### `Newsletter`
The Newsletter section SHALL contain an email input and subscribe button. Submitting the form SHALL prevent default.

### `Footer`
The Footer SHALL link to https://www.componentdock.com/ with text "Component Dock" and display a copyright notice with the current year.

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
- **Provenance ban.** No file under `apps/catalog/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/catalog/public/CNAME` = `catalog.free.componentdock.com`
  and the package `homepage` = `https://catalog.free.componentdock.com`.
