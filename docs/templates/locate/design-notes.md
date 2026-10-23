# Locate — Design Notes

Reference: **Browse** — `https://colorlib.com/wp/template/browse/`  
Live preview: `https://preview.colorlib.com/theme/browse/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/browse-free-template.jpg  
Shipped: https://locate.free.componentdock.com

Recreation of ColorLib "Browse" (https://colorlib.com/wp/template/browse/). A directory listing / "find nearby" landing page for discovering local places, attractions, restaurants, and services.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rubik:wght@300;400;500;600;700**

## Design tokens (`apps/locate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e6f7f7` | primary 50 |
| `--color-primary-100` | `#b3e8e8` | primary 100 |
| `--color-primary-200` | `#80d9d9` | primary 200 |
| `--color-primary-300` | `#4dcaca` | primary 300 |
| `--color-primary-400` | `#26bebe` | primary 400 |
| `--color-primary-500` | `#00918e` | primary 500 |
| `--color-primary-600` | `#007a77` | primary 600 |
| `--color-primary-700` | `#006361` | primary 700 |
| `--color-primary-800` | `#004d4c` | primary 800 |
| `--color-primary-900` | `#003636` | primary 900 |
| `--color-mist` | `#f4f4f4` | mist |
| `--color-smoke` | `#737373` | smoke |
| `--color-muted` | `#999999` | muted |
| `--color-ink` | `#4d4d4d` | ink |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with logo and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section with search form | see fidelity note below |
| 3 | `MostVisited` | Most Visited Places section | see fidelity note below |
| 4 | `PopularCategories` | Popular Categories section | see fidelity note below |
| 5 | `WhyUs` | Why Us accordion section | see fidelity note below |
| 6 | `HowItWorks` | How It Works section | see fidelity note below |
| 7 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 8 | `BlogTips` | Blog / Tips section | see fidelity note below |
| 9 | `CTA` | CTA banner | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a navigation bar with the "Scout" logo and links to Home, Directory, About, Blog, and Contact.

### `Hero`
The template SHALL display a hero section with a background image, "Find Nearby" heading with animated typed text, and a search form with keyword, location, category, and search button.

### `MostVisited`
The template SHALL display a 3-column grid of 6 listing cards with images, bookmark buttons, category badges, names, and addresses.

### `PopularCategories`
The template SHALL display 6 category tiles with icons, names, and listing counts, plus a "View All Categories" button.

### `WhyUs`
The template SHALL display an image alongside a 4-item accordion FAQ that expands/collapses on click.

### `HowItWorks`
The template SHALL display 3 numbered step cards with icons, titles, and descriptions.

### `Testimonials`
The template SHALL display a carousel of customer testimonials with previous/next navigation and dot indicators.

### `BlogTips`
The template SHALL display 3 blog post preview cards with images, titles, authors, dates, and excerpts.

### `CTA`
The template SHALL display a full-width primary-colored call-to-action banner with heading, subtitle, and Sign Up button.

### `Footer`
The template SHALL display a footer with link columns, social icons, newsletter signup, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/locate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/locate/public/CNAME` = `locate.free.componentdock.com`
  and the package `homepage` = `https://locate.free.componentdock.com`.
