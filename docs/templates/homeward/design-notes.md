# Homeward — Design Notes

Reference: **Myhome** — `https://colorlib.com/wp/template/myhome/`  
Live preview: `https://preview.colorlib.com/theme/myhome/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/myhome-free-template.jpg  
Shipped: https://homeward.free.componentdock.com

Homeward is a real estate landing page with a property-showcase hero, a search bar, a featured listings grid, a map section and testimonials. It recreates the ColorLib **Myhome** design as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800**

## Design tokens (`apps/homeward/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#55407d` | brand |
| `--color-brand-dark` | `#443366` | brand dark |
| `--color-accent` | `#adc867` | accent |
| `--color-accent-dark` | `#95b350` | accent dark |
| `--color-heading` | `#2b2e35` | heading |
| `--color-body` | `#a2b0bf` | body |
| `--color-subtitle` | `#bdc4d4` | subtitle |
| `--color-price` | `#db5246` | price |
| `--color-dark` | `#2b2e35` | dark |
| `--color-primary-50` | `#f3f0f9` | primary 50 |
| `--color-primary-100` | `#e5dff2` | primary 100 |
| `--color-primary-200` | `#c9bee6` | primary 200 |
| `--color-primary-300` | `#a997d6` | primary 300 |
| `--color-primary-400` | `#7d68b0` | primary 400 |
| `--color-primary-500` | `#55407d` | primary 500 |
| `--color-primary-600` | `#443366` | primary 600 |
| `--color-primary-700` | `#33264f` | primary 700 |
| `--color-primary-800` | `#221a33` | primary 800 |
| `--color-primary-900` | `#110d1a` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeaderBar` | Header with contact bar and navigation | see fidelity note below |
| 2 | `Navbar` | Search bar for property filtering | see fidelity note below |
| 3 | `Hero` | Hero section with property showcase | see fidelity note below |
| 4 | `SearchBar` | — | no dedicated spec block |
| 5 | `FeaturedProperties` | Featured properties grid | see fidelity note below |
| 6 | `MapSection` | Map section with location selector | see fidelity note below |
| 7 | `HotDeal` | Hot deal featured property | see fidelity note below |
| 8 | `Testimonials` | Client testimonials section | see fidelity note below |
| 9 | `Footer` | Footer with navigation and branding | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `HeaderBar`
The template SHALL display a purple top bar with phone, address, and email contact info, social links, and login/register. Below, a navigation bar with the "Homeward" logo, main navigation links, and a green "submit listing" button.

### `Navbar`
The template SHALL display a search section with "Find your home" title, three input fields (property type, rooms, location), and a submit button.

### `Hero`
The template SHALL display a full-width hero section with a property image background, property address title, and price tag overlay.

### `SearchBar`
*anchors only* — Find Your Home · Property Type · Select Type · House · Apartment · Condo

### `FeaturedProperties`
The template SHALL display a 3-column grid of property cards, each with an image, tags (house/for sale or rent), price, address, and property specs (sqft, beds, baths, garages).

### `MapSection`
The template SHALL display a 7/5 split section with a map placeholder on the left and a location list with radio buttons on the right.

### `HotDeal`
The template SHALL display a 6/6 split section with a property image on the left and detailed property information (price, title, description, agent info, specs) on the right.

### `Testimonials`
The template SHALL display a 6/6 split section with a background image on the left and client testimonials with quotes on the right.

### `Footer`
The template SHALL display a 4-column footer with about section, contact info, useful links, property types, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/homeward/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/homeward/public/CNAME` = `homeward.free.componentdock.com`
  and the package `homepage` = `https://homeward.free.componentdock.com`.
