# Retreat — Design Notes

Reference: **Roberto** — `https://colorlib.com/wp/template/roberto/`  
Live preview: `https://preview.colorlib.com/theme/roberto/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/roberto-free-template-1-1.jpg  
Shipped: https://retreat.free.componentdock.com

Provide a premium hotel and resort landing page with top bar, navbar, hero, booking form, about, services, rooms, testimonials, gallery, blog, CTA, partners, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/retreat/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1cc3b2` | brand |
| `--color-brand-dark` | `#16a08f` | brand dark |
| `--color-navy` | `#0e2737` | navy |
| `--color-body` | `#2a303b` | body |
| `--color-muted` | `#636a76` | muted |
| `--font-body` | `'Poppins', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays contact information and social links | see fidelity note below |
| 2 | `Navbar` | Navbar provides navigation and booking CTA | see fidelity note below |
| 3 | `Hero` | Hero section displays welcome message and CTA | see fidelity note below |
| 4 | `BookingForm` | BookingForm allows date and guest selection | see fidelity note below |
| 5 | `About` | About section displays hotel information | see fidelity note below |
| 6 | `Services` | Services section displays 5 service items | see fidelity note below |
| 7 | `Rooms` | Rooms section displays room cards with pricing | see fidelity note below |
| 8 | `Testimonials` | Testimonials section displays guest feedback | see fidelity note below |
| 9 | `Gallery` | Gallery section displays resort images | see fidelity note below |
| 10 | `Blog` | Blog section displays latest news | see fidelity note below |
| 11 | `CTA` | Navbar provides navigation and booking CTA | see fidelity note below |
| 12 | `Partners` | Partners section displays partner logos | see fidelity note below |
| 13 | `Footer` | Footer provides contact, links, and newsletter | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The top bar SHALL display phone number, email address, and social media icons (Facebook, Twitter, Instagram).

### `Navbar`
The navbar SHALL display the "Retreat" logo, navigation links (Home, Rooms, About, Pages, News, Contact), a search icon, and a "Book Now" call-to-action button.

### `Hero`
The hero SHALL display a full-width background image with dark overlay, a "Hotel & Resort" subtitle, the heading "Welcome To Retreat", and a "Discover Now" call-to-action button.

### `BookingForm`
The booking form SHALL provide check-in and check-out date inputs, room count, adult count, and children count dropdowns, and a "Check Availability" submit button.

### `About`
The about section SHALL display a heading, a description about the hotel group, and the manager name "Michen Taylor".

### `Services`
The services section SHALL display 5 service items: Transport, Travel Service, Spa & Relaxation, Restaurant, Bar & Drinks.

### `Rooms`
The rooms section SHALL display at least 2 room cards, each with a name, price per day, and a "View Details" button.

### `Testimonials`
The testimonials section SHALL display a testimonial quote, a 5-star rating, and the author name "Sarah Mitchell".

### `Gallery`
The gallery section SHALL display 4 gallery items with hover overlay effects.

### `Blog`
The blog section SHALL display 3 blog post cards with image, date, category, title, excerpt, and "Read More" link.

### `CTA`
The navbar SHALL display the "Retreat" logo, navigation links (Home, Rooms, About, Pages, News, Contact), a search icon, and a "Book Now" call-to-action button.

### `Partners`
The partners section SHALL display 5 partner name placeholders.

### `Footer`
The footer SHALL display contact information, recent blog posts, navigation links, and a newsletter subscribe form with email input.

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
- **Provenance ban.** No file under `apps/retreat/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/retreat/public/CNAME` = `retreat.free.componentdock.com`
  and the package `homepage` = `https://retreat.free.componentdock.com`.
