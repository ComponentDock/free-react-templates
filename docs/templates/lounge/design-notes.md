# Lounge — Design Notes

Reference: **Cozy** — `https://colorlib.com/wp/template/cozy/`  
Live preview: `https://preview.colorlib.com/theme/cozy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cozy-free-template.jpg  
Shipped: https://lounge.free.componentdock.com

A warm, boutique hotel landing page with hero carousel, reservation form, services tabs, room showcase, parallax conference section, restaurant menu, testimonials, blog, events, and Instagram gallery.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;600;700**, **Playfair Display**

## Design tokens (`apps/lounge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-lounge-900` | `#2c2727` | lounge 900 |
| `--color-lounge-800` | `#3c312e` | lounge 800 |
| `--color-lounge-700` | `#4a3f3c` | lounge 700 |
| `--color-lounge-600` | `#5c504d` | lounge 600 |
| `--color-lounge-500` | `#7a6e6b` | lounge 500 |
| `--color-lounge-400` | `#9a8e8b` | lounge 400 |
| `--color-lounge-300` | `#bab0ad` | lounge 300 |
| `--color-lounge-200` | `#d5cfcd` | lounge 200 |
| `--color-lounge-100` | `#eae6e5` | lounge 100 |
| `--color-lounge-50` | `#f5f2f1` | lounge 50 |
| `--color-brand` | `#ff6138` | brand |
| `--color-brand-hover` | `#ff4312` | brand hover |
| `--font-heading` | `'Playfair Display', Georgia, serif` | font heading |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero Carousel | see fidelity note below |
| 3 | `ReservationForm` | Reservation Form | see fidelity note below |
| 4 | `Services` | Services Section | see fidelity note below |
| 5 | `RoomShowcase` | Room Showcase | see fidelity note below |
| 6 | `ParallaxConference` | Parallax Conference | see fidelity note below |
| 7 | `RestaurantMenu` | Restaurant Menu | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Blog` | Blog | see fidelity note below |
| 10 | `Events` | Events | see fidelity note below |
| 11 | `InstagramGallery` | Instagram Gallery | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle menu · Lounge

### `Hero`
Users SHALL see a full-height hero carousel with auto-advancing slides.

### `ReservationForm`
Users SHALL be able to fill in a reservation form with check-in/out dates, guests, and room type.

### `Services`
Users SHALL see a tabbed services section with amenities.

### `RoomShowcase`
Users SHALL see a horizontal scrollable list of room cards with images and prices.

### `ParallaxConference`
Users SHALL see a full-width parallax section for the conference center.

### `RestaurantMenu`
Users SHALL see a tabbed restaurant menu with food items.

### `Testimonials`
Users SHALL see guest testimonials with ratings and quotes.

### `Blog`
Users SHALL see recent blog posts.

### `Events`
Users SHALL see upcoming events with date badges and action buttons.

### `InstagramGallery`
Users SHALL see an Instagram image gallery with hover effects.

### `Footer`
Users SHALL see a footer with contact information and a Component Dock link.

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
- **Provenance ban.** No file under `apps/lounge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lounge/public/CNAME` = `lounge.free.componentdock.com`
  and the package `homepage` = `https://lounge.free.componentdock.com`.
