# Belmont — Design Notes

Reference: **Samira** — `https://colorlib.com/wp/template/samira/`  
Live preview: `https://preview.colorlib.com/theme/samira/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/samira-free-template.jpg  
Shipped: https://belmont.free.componentdock.com

Belmont is a free luxury hotel website template that recreates the ColorLib Samira design in React 19 + Tailwind CSS 4 + TypeScript. It provides a complete landing page for a luxury resort/hotel with navigation, hero slider, booking bar, intro section, featured room, room listings, image gallery, newsletter signup, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**, **Playfair Display**

## Design tokens (`apps/belmont/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#5a2360` | Belmont brand palette — deep purple (#5a2360) inspired by the original design. |
| `--color-brand-dark` | `#320d36` | brand dark |
| `--color-brand-darker` | `#081123` | brand darker |
| `--color-brand-darkest` | `#010918` | brand darkest |
| `--color-accent` | `#d6baa0` | Accent — warm tan (#d6baa0). |
| `--color-ink` | `#333333` | Ink — dark text (#333333). |
| `--color-mist` | `#8d8d8d` | Mist — muted text (#8d8d8d). |
| `--color-light` | `#a5a5a5` | Light text (#a5a5a5). |
| `--color-link` | `#ffa07f` | Link color — peach (#ffa07f). |
| `--color-paper` | `#ffffff` | Paper — white. |
| `--color-primary-50` | `#f5e6f6` | Primary scale so shared Button/ButtonLink `primary` variants resolve. |
| `--color-primary-100` | `#e6c2e8` | primary 100 |
| `--color-primary-200` | `#cc85d0` | primary 200 |
| `--color-primary-300` | `#a84db5` | primary 300 |
| `--color-primary-400` | `#7a2d82` | primary 400 |
| `--color-primary-500` | `#5a2360` | primary 500 |
| `--color-primary-600` | `#4a1d50` | primary 600 |
| `--color-primary-700` | `#3a1740` | primary 700 |
| `--color-primary-800` | `#2a1130` | primary 800 |
| `--color-primary-900` | `#1a0b20` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Fonts — Montserrat (body) + Playfair Display (headings). |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with brand, navigation, and book button | see fidelity note below |
| 2 | `Hero` | Hero section displays headline and CTA | see fidelity note below |
| 3 | `BookingBar` | Booking bar with date and room selectors | see fidelity note below |
| 4 | `Intro` | Intro section with text and overlapping images | see fidelity note below |
| 5 | `BigRoom` | Big room feature section with image slider and testimonial | see fidelity note below |
| 6 | `Rooms` | Rooms grid with three room cards | see fidelity note below |
| 7 | `Gallery` | Gallery with image carousel | see fidelity note below |
| 8 | `Newsletter` | Newsletter subscription form | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a transparent navigation bar with the brand logo ("hotel" + "Belmont" + 5 stars), navigation links (Home, About Us, Rooms, News, Contact), and a "Book Your Stay" button.

### `Hero`
The template SHALL display a full-width hero section with a background image, a subtitle "luxury resort", a heading "Amazing Services, Location & Facilities", and a "Book Your Stay" CTA button.

### `BookingBar`
The template SHALL display a white booking bar section with three select dropdowns (Arrival Date, Departure Date, Rooms) and a "Request a Quote" button.

### `Intro`
The template SHALL display a split intro section with left-side text content (subtitle "luxury resort", heading "Relax in our Hotel", description paragraph, "View Rooms" link, "Book Your Stay" button) and right-side overlapping images.

### `BigRoom`
The template SHALL display a split section with a left-side image slider (with prev/next navigation) and right-side text content (heading "Rooms with private swimming pool", description, and a testimonial with 5 stars, a quote, and an author name).

### `Rooms`
The template SHALL display a "Our Rooms" section with three room cards in a grid. Each card has an image, price, type label, title, description, and a "Book Now" button.

### `Gallery`
The template SHALL display an "Our Gallery" section with an image carousel showing photos with a hover overlay (+ icon) and prev/next navigation buttons.

### `Newsletter`
The template SHALL display a newsletter section split into left text ("Our Newsletter" heading) and right email input with a "Subscribe" button.

### `Footer`
The template SHALL display a dark footer with the Belmont logo, navigation menu, contact info (address, phone, email), and a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/belmont/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/belmont/public/CNAME` = `belmont.free.componentdock.com`
  and the package `homepage` = `https://belmont.free.componentdock.com`.
