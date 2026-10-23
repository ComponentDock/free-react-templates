# Sovereign — Design Notes

Reference: **The Palatin** — `https://colorlib.com/wp/template/the-palatin/`  
Live preview: `https://preview.colorlib.com/theme/the-palatin/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thepalatin-free-template.jpg  
Shipped: https://sovereign.free.componentdock.com

Sovereign is a modern hotel booking website with a booking-form hero, room types, amenities, a gallery and testimonials. It recreates ColorLib's **The Palatin** design.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cormorant Garamond**, **Cormorant Garamond:wght@400;500;600;700**, **Poppins**

## Design tokens (`apps/sovereign/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1a73e8` | brand |
| `--color-brand-hover` | `#1557b0` | brand hover |
| `--color-dark` | `#1a1a2e` | dark |
| `--color-offwhite` | `#f8f9fa` | offwhite |
| `--color-ink` | `#333333` | ink |
| `--color-muted` | `#777777` | muted |
| `--font-heading` | `'Cormorant Garamond', Georgia, serif` | font heading |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar navigation | see fidelity note below |
| 2 | `Hero` | Hero section with booking form | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Rooms` | Rooms section | see fidelity note below |
| 5 | `Amenities` | Amenities section | see fidelity note below |
| 6 | `Gallery` | Gallery section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `BookingCta` | Booking CTA section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed navigation bar with logo, links, and a Book Now CTA button.

### `Hero`
The template SHALL display a full-width hero section with a background image, heading, and booking form.

### `About`
The template SHALL display a two-column about section with heading, paragraph, and image.

### `Rooms`
The template SHALL display a grid of room cards with images, names, descriptions, prices, and book buttons.

### `Amenities`
The template SHALL display a grid of amenity items with icons and descriptions on a dark background.

### `Gallery`
The template SHALL display a responsive grid of hotel photos with hover overlay effects.

### `Testimonials`
The template SHALL display guest reviews with avatars, star ratings, names, roles, and quotes.

### `BookingCta`
The template SHALL display a full-width call-to-action section with background image, heading, and booking button.

### `Footer`
The template SHALL display a multi-column footer with about text, quick links, contact info, social icons, and copyright.

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
- **Provenance ban.** No file under `apps/sovereign/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sovereign/public/CNAME` = `sovereign.free.componentdock.com`
  and the package `homepage` = `https://sovereign.free.componentdock.com`.
