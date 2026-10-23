# Hamlin — Design Notes

Reference: **Hamlet** — `https://colorlib.com/wp/template/hamlet/`  
Live preview: `https://preview.colorlib.com/theme/hamlet/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hamlet-free-template-1.jpg  
Shipped: https://hamlin.free.componentdock.com

Provide a real estate agency landing page template featuring a hero slider with property details, a property search form, recently listed properties, about/services sections, customer testimonials, and a full footer with newsletter signup.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Rubik**, **Rubik:wght@300;400;500;700;900**

## Design tokens (`apps/hamlin/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-rubik` | `'Rubik', sans-serif` | font rubik |
| `--font-playfair` | `'Playfair Display', serif` | font playfair |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-hover` | `#0056b3` | brand hover |
| `--color-accent` | `#f96d00` | accent |
| `--color-dark` | `#343a40` | dark |
| `--color-dark-lighter` | `#495057` | dark lighter |
| `--color-text-primary` | `#000000` | text primary |
| `--color-text-secondary` | `#6c757d` | text secondary |
| `--color-bg-light` | `#f8f9fa` | bg light |
| `--color-bg-white` | `#ffffff` | bg white |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and CTA | see fidelity note below |
| 2 | `Hero` | Hero section with property showcase | see fidelity note below |
| 3 | `SearchForm` | Property search form | see fidelity note below |
| 4 | `RecentlyAdded` | Recently Added properties | see fidelity note below |
| 5 | `About` | About section with features | see fidelity note below |
| 6 | `Services` | Services section with property cards | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Footer` | Footer with newsletter and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed dark navbar with the brand name "Hamlin.", navigation links (Home, Properties, Agents, Blog, About, Contact), and a Sign Up CTA button.

### `Hero`
The template SHALL display a full-width hero section with a background property image, dark overlay, headline text, description, and a property details card with specs (area, bedrooms, bathrooms, garage) and a "View Properties" button.

### `SearchForm`
The template SHALL display a search form with Location (text input), Property Type (select), Property Status (select), Price Limit (select), and a Search button.

### `RecentlyAdded`
The template SHALL display a grid of 5 property cards, each showing an image, sale/rent tag, property name, price, location, and bed/bath information.

### `About`
The template SHALL display an about section with a background image, heading, description, 4 feature items (Find Places, Agents, Buy & Rent, Making Money), and a "Learn More" link.

### `Services`
The template SHALL display a services section with two side-by-side image cards (Buying and Renting) with overlay text and "Read more" links.

### `Testimonials`
The template SHALL display a dark-background testimonials section with customer quotes, names, and roles.

### `Footer`
The template SHALL display a dark footer with 5 columns (About, Company, Explore, Get Started, Newsletter), social links, a newsletter email form, and a "Component Dock" branded link.

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
- **Provenance ban.** No file under `apps/hamlin/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hamlin/public/CNAME` = `hamlin.free.componentdock.com`
  and the package `homepage` = `https://hamlin.free.componentdock.com`.
