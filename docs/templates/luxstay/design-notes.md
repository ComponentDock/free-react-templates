# Luxstay — Design Notes

Reference: **Luxehotel** — `https://colorlib.com/wp/template/luxehotel/`  
Live preview: `https://preview.colorlib.com/theme/luxehotel/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/luxehotel-free-template.jpg  
Shipped: https://luxstay.free.componentdock.com

LuxStay is a single-page luxury hotel landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Luxehotel" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700**, **Poppins**

## Design tokens (`apps/luxstay/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-blue` | `#4586ff` | brand blue |
| `--color-accent-orange` | `#f96d00` | accent orange |
| `--color-gold-star` | `#f7af1d` | gold star |
| `--color-star-empty` | `#fce3b1` | star empty |
| `--color-dark-purple` | `#302939` | dark purple |
| `--color-bg-light-grey` | `#fafafa` | bg light grey |
| `--color-icon-circle` | `#f7f7f7` | icon circle |
| `--color-text-body` | `#595959` | text body |
| `--font-heading` | `'Playfair Display', serif` | font heading |
| `--font-body` | `'Poppins', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar displays site info and social links | see fidelity note below |
| 2 | `Navbar` | Reservation form bar overlapping hero | see fidelity note below |
| 3 | `HeroSlider` | Hero slider with fullscreen slides and CTA buttons | see fidelity note below |
| 4 | `ReservationBar` | — | no dedicated spec block |
| 5 | `Services` | Services section with 4 service cards | see fidelity note below |
| 6 | `Rooms` | Rooms and Suites carousel | see fidelity note below |
| 7 | `DiningBar` | Dining and Bar section with tabbed menu | see fidelity note below |
| 8 | `Blog` | Blog section with video and posts | see fidelity note below |
| 9 | `Testimonials` | Testimonials with customer reviews | see fidelity note below |
| 10 | `Newsletter` | Newsletter section collects emails | see fidelity note below |
| 11 | `Footer` | Footer with 4 columns and Component Dock link | see fidelity note below |
| 12 | `BackToTop` | Back to top button appears on scroll | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a top bar at the very top of the page with a light grey background, site URL on the left, phone number on the right, and social icons.

### `Navbar`
The system SHALL render a dark purple reservation bar that overlaps the hero with date pickers, guest selects, and a search button.

### `HeroSlider`
The system SHALL render a fullscreen hero slider with at least 4 slides, each having a background image, dark overlay, headline, and two CTA buttons.

### `ReservationBar`
*anchors only* — Reservation form · Check-in Date · Check-out Date · Adults · Children · Search

### `Services`
The system SHALL render a Services section with a white background, centered heading with 5 gold stars, and 4 service cards with circular icons.

### `Rooms`
The system SHALL render a Rooms & Suites section with light grey background, centered heading with 5 gold stars, and a carousel of room cards with images, prices, and Book Now buttons.

### `DiningBar`
The system SHALL render a Dining & Bar section with orange background, tabbed menu (Mains/Desserts/Drinks), and a cover image on the right.

### `Blog`
The system SHALL render a Blog section with a white background, video thumbnail with play button, and 3 blog post entries.

### `Testimonials`
The system SHALL render a Testimonials section with light grey background, centered heading with 3 gold stars, and 3 testimonial cards.

### `Newsletter`
The system SHALL render a Newsletter section with a background image and dark overlay, email input, and Subscribe button.

### `Footer`
The system SHALL render a footer with 4 columns (Brand, Quick Links, Recent Blog Posts, Contact Information) and a copyright line linking to Component Dock.

### `BackToTop`
The system SHALL render a fixed back-to-top button in the bottom-right corner that appears when the user scrolls past 200px.

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
- **Provenance ban.** No file under `apps/luxstay/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/luxstay/public/CNAME` = `luxstay.free.componentdock.com`
  and the package `homepage` = `https://luxstay.free.componentdock.com`.
