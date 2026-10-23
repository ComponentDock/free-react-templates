# Voyager — Design Notes

Reference: **Tour** — `https://colorlib.com/wp/template/tour/`  
Live preview: `https://preview.colorlib.com/theme/tour/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tour-free-template.jpg  
Shipped: https://voyager.free.componentdock.com

Voyager is a full-page travel agency website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Tour" travel agency design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Quicksand**, **Quicksand:wght@300;400;500;600;700**

## Design tokens (`apps/voyager/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fffde7` | primary 50 |
| `--color-primary-100` | `#fff9c4` | primary 100 |
| `--color-primary-200` | `#fff59d` | primary 200 |
| `--color-primary-300` | `#fff176` | primary 300 |
| `--color-primary-400` | `#ffee58` | primary 400 |
| `--color-primary-500` | `#ffdd00` | primary 500 |
| `--color-primary-600` | `#f5c400` | primary 600 |
| `--color-primary-700` | `#e6b800` | primary 700 |
| `--color-primary-800` | `#d4a800` | primary 800 |
| `--color-primary-900` | `#b8920a` | primary 900 |
| `--color-primary-950` | `#8a6d00` | primary 950 |
| `--font-family-heading` | `'Quicksand', Arial, sans-serif` | font family heading |
| `--font-family-body` | `'Quicksand', Arial, sans-serif` | font family body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `Reservation` | Reservation search | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `PopularDestinations` | Popular destinations | see fidelity note below |
| 6 | `RecentBlog` | Recent blog | see fidelity note below |
| 7 | `PromoSale` | Promotional sale | see fidelity note below |
| 8 | `RecommendedHotels` | Recommended hotels | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `PopularCountries` | Popular countries | see fidelity note below |
| 11 | `Newsletter` | Newsletter signup | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name "Voyager" and navigation links: Home, Tours (with dropdown: Destination, Cruises, Hotels, Booking), Hotels, Services, Blog, About, Contact.

### `HeroSlider`
The system SHALL render a full-width hero section with background images and centered text overlays.

### `Reservation`
The system SHALL render a tabbed reservation search form with Flight, Hotel, Car Rent, and Cruises tabs.

### `Services`
The system SHALL render a 4-column services section with icons and descriptions.

### `PopularDestinations`
The system SHALL render a grid of popular destination cards with images, star ratings, titles, cities, and prices.

### `RecentBlog`
The system SHALL render a blog section with a featured image and three blog entries.

### `PromoSale`
The system SHALL render a parallax promotional section with a discount offer and video placeholder.

### `RecommendedHotels`
The system SHALL render a grid of recommended hotel cards with images, prices, star ratings, names, locations, and descriptions.

### `Testimonials`
The system SHALL render a testimonials section with guest quotes, avatars, names, and locations.

### `PopularCountries`
The system SHALL render a split layout section with tour images and a country description with city links.

### `Newsletter`
The system SHALL render a newsletter section with an email input and subscribe button.

### `Footer`
The system SHALL render a footer with brand information, navigation links, contact details, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/voyager/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/voyager/public/CNAME` = `voyager.free.componentdock.com`
  and the package `homepage` = `https://voyager.free.componentdock.com`.
