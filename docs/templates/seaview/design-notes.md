# Seaview — Design Notes

Reference: **Marimar** — `https://colorlib.com/wp/template/marimar/`  
Live preview: `https://preview.colorlib.com/theme/marimar/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/marimar-free-template.jpg  
Shipped: https://seaview.free.componentdock.com

Build a production-ready React recreation of the ColorLib Marimar hotel landing template under the new name "Seaview". The original template is a luxury hotel landing page with a parallax hero, booking form, room showcases, discover carousel, testimonials, and a branded footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700;900**, **Playfair Display**

## Design tokens (`apps/seaview/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-400` | `#ff9000` | primary 400 |
| `--color-primary-500` | `#e88200` | primary 500 |
| `--color-primary-600` | `#cc7300` | primary 600 |
| `--color-navy` | `#0e0923` | Dark navy backgrounds. |
| `--color-ink` | `#4a4f59` | Body and muted text. |
| `--color-smoke` | `#a5a5a5` | smoke |
| `--color-mist` | `#f4f5fa` | Light section backgrounds. |
| `--color-salmon` | `#ffa07f` | Secondary accent. |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with navigation and CTA | see fidelity note below |
| 2 | `Hero` | Hero section displays with parallax background | see fidelity note below |
| 3 | `BookingForm` | Booking form captures guest details | see fidelity note below |
| 4 | `Intro` | Intro section shows welcome and gallery | see fidelity note below |
| 5 | `RoomsShowcase` | Rooms showcase displays two room options | see fidelity note below |
| 6 | `Discover` | Discover section shows services | see fidelity note below |
| 7 | `Testimonials` | Testimonials section displays client reviews | see fidelity note below |
| 8 | `Footer` | Footer shows contact info and Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed top navigation bar with the "Seaview" logo, horizontal navigation links (Home, About, Rooms, News, Contact), and a "Book Now" CTA button. A hamburger menu toggle SHALL appear on mobile devices.

### `Hero`
The template SHALL display a full-viewport hero section with a background image, dark overlay, centered heading "Book Your Stay", subtitle text, and a "Book Now" CTA button.

### `BookingForm`
The template SHALL display a horizontal booking form with check-in date input, check-out date input, adults dropdown (1-5), children dropdown (0-5), and a "Book Now" submit button.

### `Intro`
The template SHALL display a welcome section with a subtitle "Welcome", heading "Amazing Hotel in front of the Sea", description paragraph, and a 4-column image gallery with hover overlay "+ See More" on each image.

### `RoomsShowcase`
The template SHALL display two alternating room showcase blocks. Each block contains an image, section title, description, feature checklist with check icons, price per night, and a "Book Now" button. The first block has image left / content right; the second flips.

### `Discover`
The template SHALL display a "Discover Seaview Hotel" section with a heading, highlight paragraph, "Discover" button, and a 3-card grid of service images (Weddings, Parties, Relax) with dark overlays and category headings.

### `Testimonials`
The template SHALL display a "Testimonials" section with a heading and 3 testimonial cards, each containing a quote, author image, author name, and "Client" role label.

### `Footer`
The template SHALL display a footer with the "Seaview" logo, 3-column contact info (Phone, Address, Email), a "More templates at Component Dock" link to https://www.componentdock.com/, and a copyright line.

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
- **Provenance ban.** No file under `apps/seaview/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seaview/public/CNAME` = `seaview.free.componentdock.com`
  and the package `homepage` = `https://seaview.free.componentdock.com`.
