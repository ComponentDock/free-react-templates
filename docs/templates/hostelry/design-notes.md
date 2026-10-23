# Hostelry — Design Notes

Reference: **Royal** — `https://colorlib.com/wp/template/royal/`  
Live preview: `https://preview.colorlib.com/theme/royal/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/royal-free-template.jpg  
Shipped: https://hostelry.free.componentdock.com

Hostelry is a single-page hotel website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/hostelry/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f3c300` | brand |
| `--color-brand-dark` | `#f8b600` | brand dark |
| `--color-sky` | `#52c5fd` | Sky — light blue accent (room prices, nav link hover, blog title hover). |
| `--color-night` | `#04091e` | Night — near-black section backgrounds (#04091e). |
| `--color-ink` | `#222222` | Ink — headings (#222222) and dark buttons. |
| `--color-smoke` | `#777777` | Smoke — body text grey (#777777). |
| `--color-mist` | `#f9f9ff` | Mist — light section background (#f9f9ff: testimonials). |
| `--color-primary-50` | `#fffbeb` | primary 50 |
| `--color-primary-100` | `#fef3c7` | primary 100 |
| `--color-primary-200` | `#fde68a` | primary 200 |
| `--color-primary-300` | `#fcd34d` | primary 300 |
| `--color-primary-400` | `#fbbf24` | primary 400 |
| `--color-primary-500` | `#f59e0b` | primary 500 |
| `--color-primary-600` | `#f3c300` | primary 600 |
| `--color-primary-700` | `#b8860b` | primary 700 |
| `--color-primary-800` | `#92600a` | primary 800 |
| `--color-primary-900` | `#6b4a08` | primary 900 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `BookingWidget` | Booking widget | see fidelity note below |
| 4 | `Accomodation` | Accomodation | see fidelity note below |
| 5 | `Facilities` | Facilities | see fidelity note below |
| 6 | `About` | About | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Blog` | Blog | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a header over the hero with a logo, a brand wordmark, six navigation links with a Blog dropdown, a light-blue hover/active state, and a mobile hamburger menu.

### `Hero`
The system SHALL render a dark hero on a photo background with a kicker, a large white headline, a paragraph, and a yellow "Get Started" button.

### `BookingWidget`
The system SHALL render a dark "Book Your Room" booking widget with arrival and departure date fields, Adult / Child / Number of Rooms selects, and a full-width yellow "Book Now" button.

### `Accomodation`
The system SHALL render a white "Hotel Accomodation" section with a heading, subtitle, and four room cards (image with a yellow "Book Now" overlay and hover zoom, title, blue price, blurb).

### `Facilities`
The system SHALL render a dark "Royal Facilities" section on a photo background with six bordered icon cards.

### `About`
The system SHALL render an "About Us Our History Mission & Vision" split section with copy, a dark "Request Custom Price" button, and a photo.

### `Testimonials`
The system SHALL render a light-grey "Testimonial from our Clients" section with a slider of white quote cards (avatar, name, quote).

### `Blog`
The system SHALL render a "latest posts from blog" section with three blog cards (thumbnail with hover zoom-rotate, date, tag, title, excerpt).

### `Footer`
The system SHALL render a near-black footer with four widgets (About Agency with social icons, Navigation Links, Newsletter, InstaFeed) and a copyright bar.

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
- **Provenance ban.** No file under `apps/hostelry/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hostelry/public/CNAME` = `hostelry.free.componentdock.com`
  and the package `homepage` = `https://hostelry.free.componentdock.com`.
