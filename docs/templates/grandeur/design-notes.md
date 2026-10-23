# Grandeur — Design Notes

Reference: **Radisson** — `https://colorlib.com/wp/template/radisson/`  
Live preview: `https://preview.colorlib.com/theme/radisson/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/radisson-free-template.jpg  
Shipped: https://grandeur.free.componentdock.com

A luxury hotel template with hero, booking form, about, rooms, blog posts and footer sections. Recreation of ColorLib's **Radisson** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page site.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/grandeur/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4d8eff` | brand |
| `--color-brand-hover` | `#3a7ae6` | brand hover |
| `--color-ink` | `#222222` | ink |
| `--color-body` | `#777777` | body |
| `--color-light-alt` | `#f1f9ff` | light alt |
| `--color-white` | `#ffffff` | white |
| `--font-heading` | `'Playfair Display', Georgia, serif` | font heading |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with brand name and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section displays welcome heading with play button | see fidelity note below |
| 3 | `BookingForm` | Booking form with date inputs and CTA | see fidelity note below |
| 4 | `About` | About Us section with heading and video area | see fidelity note below |
| 5 | `Rooms` | Rooms section with room cards and amenities | see fidelity note below |
| 6 | `Testimonials` | Testimonials section with star ratings | see fidelity note below |
| 7 | `BlogPosts` | Blog posts section with 3-column grid | see fidelity note below |
| 8 | `Footer` | Footer with 4 columns and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar shall display the brand name "Grandeur" with navigation links: Home, About, Gallery, Pages (dropdown), Blog (dropdown), Contact. A top bar shall show contact phone number and currency/language selects.

### `Hero`
The hero section shall show a full-width background image with an overlay, centered "Welcome to" subtitle, "Grandeur" heading, description paragraph, and a circular play video button.

### `BookingForm`
The booking form shall show 4 fields in a row: Check-in date, Check-out date, Total guests, and a "Check Availability" button with a coupon code link.

### `About`
The about section shall display a centered subtitle, heading "About Us Our History Mission & Vision", description text, "Request Custom Price" button, and a video area with play overlay.

### `Rooms`
The rooms section shall display the heading "Our Rooms", a description, and 2 room cards. Each card shows a room image, price per night, room name, description, 6 amenity icons, and a "Book Now" button.

### `Testimonials`
The testimonials section shall display 3 testimonial cards on a light blue background, each with an avatar, author name, 5-star rating, and quote text.

### `BlogPosts`
The blog posts section shall display the heading "Our Blog Posts", a description, and 3 blog cards on a light blue background. Each card shows an image, Travel category tag, date, comment count, title, and excerpt.

### `Footer`
The footer shall display 4 columns: About, Quick Links (2 sublists), Newsletter (email input + subscribe), Instagram (image grid). The bottom bar shall show copyright, a link to Component Dock (https://www.componentdock.com/), and social icons.

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
- **Provenance ban.** No file under `apps/grandeur/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/grandeur/public/CNAME` = `grandeur.free.componentdock.com`
  and the package `homepage` = `https://grandeur.free.componentdock.com`.
