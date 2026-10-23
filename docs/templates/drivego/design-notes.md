# Drivego — Design Notes

Reference: **Carrentals** — `https://colorlib.com/wp/template/carrentals/`  
Live preview: `https://preview.colorlib.com/theme/carrentals/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carrentals-free-template.jpg  
Shipped: https://drivego.free.componentdock.com

A Car Rental template with hero, how it works, promo, car listings, features and cta banner sections. Recreation of ColorLib **Carrentals** template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;700;900**

## Design tokens (`apps/drivego/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0779e4` | DriveGo brand palette — #0779e4 blue for primary CTAs and accents. |
| `--color-brand-dark` | `#0565c0` | brand dark |
| `--color-ink` | `#000000` | Ink — headings (#000000 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa from the original). |
| `--color-coal` | `#1b1b1b` | Coal — dark footer / overlays (#1b1b1b from the original). |
| `--color-primary-50` | `#e8f4fd` | primary 50 |
| `--color-primary-100` | `#c6e4fa` | primary 100 |
| `--color-primary-200` | `#96d0f5` | primary 200 |
| `--color-primary-300` | `#5eb8ee` | primary 300 |
| `--color-primary-400` | `#2da0e8` | primary 400 |
| `--color-primary-500` | `#0779e4` | primary 500 |
| `--color-primary-600` | `#0565c0` | primary 600 |
| `--color-primary-700` | `#04529a` | primary 700 |
| `--color-primary-800` | `#033f75` | primary 800 |
| `--color-primary-900` | `#022d52` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Font: Roboto from Google Fonts (loaded via index.html). |
| `--font-display` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays correctly | see fidelity note below |
| 2 | `Hero` | Hero section renders | see fidelity note below |
| 3 | `HowItWorks` | How It Works section shows 3 steps | see fidelity note below |
| 4 | `Promo` | Promo section shows car image with text | see fidelity note below |
| 5 | `CarListings` | Car Listings shows 6 vehicle cards | see fidelity note below |
| 6 | `Features` | Features section shows 6 service cards | see fidelity note below |
| 7 | `Testimonials` | Testimonials section shows 3 reviews | see fidelity note below |
| 8 | `CtaBanner` | CTA banner is present | see fidelity note below |
| 9 | `Footer` | Footer is complete | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL show the DriveGo logo on the left and navigation links (Home, Listing, Testimonials, Blog, About, Contact) on the right, be sticky on scroll, and show a mobile hamburger menu on small screens.

### `Hero`
The hero SHALL be full-viewport height with a background image, headline, subtitle, and a search form with Select Type dropdown, Pick up/Drop off date inputs, and a Search Now button.

### `HowItWorks`
The section SHALL display 3 numbered steps (Select a car, Fill up form, Payment) with blue numbers and a "Video how it works" link.

### `Promo`
The promo section SHALL display a split layout with text on the left and a car image on the right, plus a CTA button.

### `CarListings`
The listings section SHALL display 6 car cards in a 3-column grid, each with image, name, price per day, specs (Luggage, Doors, Passenger), description, and Rent Now button.

### `Features`
The features section SHALL display 6 service cards in a 3x2 grid with circle icons, title, description, and Learn more link.

### `Testimonials`
The testimonials section SHALL display 3 testimonial cards with quote, avatar, name, and role.

### `CtaBanner`
The CTA banner SHALL have a blue background with "What are you waiting for?" heading and a "Rent a car now" button.

### `Footer`
The footer SHALL contain About Us text, social icons, 4 link columns (Quick Links, Resources, Support, Company), copyright line, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/drivego/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/drivego/public/CNAME` = `drivego.free.componentdock.com`
  and the package `homepage` = `https://drivego.free.componentdock.com`.
