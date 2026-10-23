# Propwise — Design Notes

Reference: **Real Estate** — `https://colorlib.com/wp/template/real-estate/`  
Live preview: `https://preview.colorlib.com/theme/real-estate/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/realestate-free-realstate-website-template.jpg  
Shipped: https://propwise.free.componentdock.com

Propwise is a single-page real estate agency website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/propwise/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-heading` | `#1a1a2e` | heading |
| `--color-body` | `#666666` | body |
| `--color-brand` | `#e74c3c` | brand |
| `--color-accent` | `#f39c12` | accent |
| `--color-card` | `#ffffff` | card |
| `--color-bg-alt` | `#f8f9fa` | bg alt |
| `--color-dark` | `#1a1a2e` | dark |
| `--font-sans` | `'Poppins', sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `UtilityBar` | Top utility bar renders contact and auth links | see fidelity note below |
| 2 | `Navbar` | Navbar renders navigation links | see fidelity note below |
| 3 | `Hero` | Hero section displays headline and property search | see fidelity note below |
| 4 | `Features` | Features section shows three service cards | see fidelity note below |
| 5 | `PropertyListings` | Property listings section displays properties | see fidelity note below |
| 6 | `CTA` | About/CTA section renders | see fidelity note below |
| 7 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `UtilityBar`
The template SHALL display a thin top utility bar above the main navbar with a phone number, "Sell / Rent Property" link, and "Login / Register" link, right-aligned.

### `Navbar`
The template SHALL display a sticky navbar with a logo ("Propwise" or similar brand mark) and navigation links (Home, Service, Property, Contact).

### `Hero`
The template SHALL display a full-width hero section with a cityscape background image, a warm golden overlay, a bold white heading ("We're Real Estate King"), and a property search form card.

### `Features`
The template SHALL display a "Why we are the best" section with three feature cards in a row: Expert Technicians, Professional Service, and Great Support, each with an icon, heading, and description.

### `PropertyListings`
The template SHALL display a property listings section with property cards showing an image, price, location, and key details (bedrooms, bathrooms, area).

### `CTA`
The template SHALL display a call-to-action section with a background image, heading, description, and action button.

### `Footer`
The template SHALL display a footer with navigation links, company info, and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/propwise/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/propwise/public/CNAME` = `propwise.free.componentdock.com`
  and the package `homepage` = `https://propwise.free.componentdock.com`.
