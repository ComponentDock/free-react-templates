# Stayhaven — Design Notes

Reference: **Redplanet** — `https://colorlib.com/wp/template/redplanet/`  
Live preview: `https://preview.colorlib.com/theme/redplanet/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/redplanet-free-template.jpg  
Shipped: https://stayhaven.free.componentdock.com

Stayhaven is a single-page hotel & travel website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700**, **Roboto**

## Design tokens (`apps/stayhaven/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff0000` | brand |
| `--color-brand-dark` | `#cc0000` | brand dark |
| `--color-mist` | `#f2f4fb` | Mist — light section background (#f2f4fb: about, photos, events). |
| `--color-ink` | `#191919` | Ink — near-black headings / footer + dark overlays over photos. |
| `--color-smoke` | `#6c757d` | Smoke — body text grey (#6c757d). |
| `--color-primary-50` | `#fff5f5` | primary 50 |
| `--color-primary-100` | `#ffe0e0` | primary 100 |
| `--color-primary-200` | `#ffb3b3` | primary 200 |
| `--color-primary-300` | `#ff8080` | primary 300 |
| `--color-primary-400` | `#ff4d4d` | primary 400 |
| `--color-primary-500` | `#ff1a1a` | primary 500 |
| `--color-primary-600` | `#ff0000` | primary 600 |
| `--color-primary-700` | `#cc0000` | primary 700 |
| `--color-primary-800` | `#990000` | primary 800 |
| `--color-primary-900` | `#660000` | primary 900 |
| `--font-display` | `'Playfair Display', Georgia, 'Times New Roman', serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `BookingBar` | Booking bar | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Team` | Team carousel | see fidelity note below |
| 6 | `Rooms` | Rooms grid | see fidelity note below |
| 7 | `PhotoSlider` | Photos slider | see fidelity note below |
| 8 | `MenuTabs` | Restaurant menu tabs | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `Events` | Events | see fidelity note below |
| 11 | `Contact` | Contact section | see fidelity note below |
| 12 | `CtaBand` | CTA band and reservation modal | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent-over-hero navbar with a brand, anchor navigation links, a "Get Started" pill, and a mobile hamburger collapse.

### `Hero`
The system SHALL render a full-viewport hero with a background photo, dark overlay, centered white headline, and a mouse scroll indicator.

### `BookingBar`
The system SHALL render a white booking form with check-in/check-out date fields, adults/children selects, and a red availability button.

### `About`
The system SHALL render a light-grey split about section with copy, a "Watch the video" button, and a photo.

### `Team`
The system SHALL render a "Leadership" section with three team members, each with a photo, name, role, and quote.

### `Rooms`
The system SHALL render a "Rooms & Suites" section with three room cards.

### `PhotoSlider`
The system SHALL render a light-grey "Photos" section with an image slider.

### `MenuTabs`
The system SHALL render a dark background-image menu section with Food, Desserts, and Drinks tabs, each listing six items with a price, title, and description.

### `Testimonials`
The system SHALL render a "People Says" section with a testimonial slider.

### `Events`
The system SHALL render an "Events" section with three blog-style post cards.

### `Contact`
The system SHALL render a "Contact Us" section with address, phone, and email info blocks.

### `CtaBand`
The system SHALL render a full-width background-image CTA band with a "Reserve Now" button that opens a reservation modal form.

### `Footer`
The system SHALL render a dark footer with two link columns, contact info, a newsletter signup, social icons, and a bottom bar.

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
- **Provenance ban.** No file under `apps/stayhaven/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stayhaven/public/CNAME` = `stayhaven.free.componentdock.com`
  and the package `homepage` = `https://stayhaven.free.componentdock.com`.
