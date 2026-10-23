# Hotelbreeze — Design Notes

Reference: **Bright Hotel** — `https://colorlib.com/wp/template/bright-hotel/`  
Live preview: `https://preview.colorlib.com/theme/bright-hotel/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/brighthotel-free-template.jpg  
Shipped: https://hotelbreeze.free.componentdock.com

Recreation of ColorLib Bright Hotel (https://colorlib.com/wp/template/bright-hotel/) — a clean, minimal and sophisticated luxury hotel website template. The new name is "Hotelbreeze". Preview: https://preview.colorlib.com/theme/bright-hotel/ (UNREACHABLE at prep time — 404). Screenshot analysis used as primary reference.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/hotelbreeze/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e74c3c` | brand |
| `--color-brand-dark` | `#c0392b` | brand dark |
| `--color-ink` | `#26282b` | Ink — dark body text (#26282b). |
| `--color-ink-dark` | `#1a1c1e` | ink dark |
| `--color-paper` | `#f5f5f5` | Paper — light section background (#f5f5f5). |
| `--color-mist` | `#999999` | Mist — muted text (#999999). |
| `--color-primary-50` | `#fdf2f2` | primary 50 |
| `--color-primary-100` | `#fce4e4` | primary 100 |
| `--color-primary-200` | `#f9cece` | primary 200 |
| `--color-primary-300` | `#f3a8a8` | primary 300 |
| `--color-primary-400` | `#eb7878` | primary 400 |
| `--color-primary-500` | `#e74c3c` | primary 500 |
| `--color-primary-600` | `#c0392b` | primary 600 |
| `--color-primary-700` | `#a53124` | primary 700 |
| `--color-primary-800` | `#892b21` | primary 800 |
| `--color-primary-900` | `#732920` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font: Poppins (Google Fonts) — light/regular/medium for clean modern feel. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Transparent navigation bar | see fidelity note below |
| 2 | `Hero` | Full-width hero section | see fidelity note below |
| 3 | `BookingBar` | Booking availability bar | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Rooms` | Rooms section | see fidelity note below |
| 6 | `About` | About section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Contact` | Contact section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page SHALL render a transparent header with the "Hotelbreeze" logo on the left and navigation links (Home, Rooms, Services, About Us, Blog, Contact) on the right, overlaid on the hero image.

### `Hero`
The page SHALL render a full-width hero section with a background image (restaurant/dining setting), dark overlay, "WELCOME" subtitle with horizontal line, "Simple & Elegant" heading, and "LEARN MORE" CTA button. Left/right slider arrows shall be present.

### `BookingBar`
The page SHALL render a white booking bar overlapping the bottom of the hero, containing Check In date picker, Check Out date picker, Adults dropdown (default 1), Children dropdown (default 1), and a red "CHECK AVAILABILITY" button.

### `Services`
The page SHALL render a "Services" section with a section heading "SERVICES" (uppercase with underline accent) and service cards describing hotel offerings.

### `Rooms`
The page SHALL render a "Rooms" section showcasing available room types with images, names, descriptions, and prices.

### `About`
The page SHALL render an "About" section with a heading, description text, and supporting imagery or layout.

### `Testimonials`
The page SHALL render a testimonials section with guest reviews, names, and ratings.

### `Contact`
The page SHALL render a contact section with contact information and/or a contact form.

### `Footer`
The page SHALL render a footer with contact info, quick links, and a link to Component Dock (https://www.componentdock.com/).

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
- **Provenance ban.** No file under `apps/hotelbreeze/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hotelbreeze/public/CNAME` = `hotelbreeze.free.componentdock.com`
  and the package `homepage` = `https://hotelbreeze.free.componentdock.com`.
