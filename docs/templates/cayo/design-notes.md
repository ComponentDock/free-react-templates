# Cayo — Design Notes

Reference: **Islagrande** — `https://colorlib.com/wp/template/islagrande/`  
Live preview: `https://preview.colorlib.com/theme/islagrande/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/islagrande-free-template.jpg  
Shipped: https://cayo.free.componentdock.com

A hotel template with hero, booking form, services, rooms, counter and video about sections. Recreation of ColorLib "Islagrande" hotel template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600;700**, **Poppins**

## Design tokens (`apps/cayo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#78d5ef` | brand |
| `--color-accent` | `#f96d00` | accent |
| `--color-nav-hover` | `#fb929e` | nav hover |
| `--color-ink` | `#19191a` | ink |
| `--color-paper` | `#f9f8f6` | paper |
| `--color-mist` | `#777c81` | mist |
| `--color-primary-50` | `#eef9fd` | primary 50 |
| `--color-primary-100` | `#d4f0f9` | primary 100 |
| `--color-primary-200` | `#ade3f4` | primary 200 |
| `--color-primary-300` | `#78d5ef` | primary 300 |
| `--color-primary-400` | `#3bbfe5` | primary 400 |
| `--color-primary-500` | `#1da5d1` | primary 500 |
| `--color-primary-600` | `#1785b2` | primary 600 |
| `--color-primary-700` | `#186b91` | primary 700 |
| `--color-primary-800` | `#1b5877` | primary 800 |
| `--color-primary-900` | `#1c4964` | primary 900 |
| `--color-primary-950` | `#0f2e42` | primary 950 |
| `--font-heading` | `'Poppins', sans-serif` | font heading |
| `--font-serif` | `'Playfair Display', serif` | font serif |
| `--font-sans` | `'Poppins', sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays brand and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section displays hotel heading with image slider | see fidelity note below |
| 3 | `BookingForm` | Booking form allows room reservation | see fidelity note below |
| 4 | `Services` | Services section displays amenities | see fidelity note below |
| 5 | `Rooms` | Rooms section displays room types with prices | see fidelity note below |
| 6 | `Restaurant` | Restaurant section displays tabbed menu | see fidelity note below |
| 7 | `Counter` | Footer with brand and links | see fidelity note below |
| 8 | `About` | — | no dedicated spec block |
| 9 | `Testimonials` | — | no dedicated spec block |
| 10 | `Blog` | — | no dedicated spec block |
| 11 | `Footer` | Footer with brand and links | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL display the brand logo "Cayo" and navigation links: Home, About, Amenities, Rooms, Restaurant, Blog, Contact, plus a "Book Now" CTA button.

### `Hero`
The hero SHALL display a split layout with heading text and "Make A Booking" CTA on the left, and an image slider with navigation arrows on the right.

### `BookingForm`
The booking form SHALL provide check-in date, check-out date, room type select, adults select, children select, and a Reserve button.

### `Services`
The services section SHALL display 4 service cards: 24/7 Front Desk, Restaurant Bar, Transfer Services, Spa Suites.

### `Rooms`
The rooms section SHALL display 6 room cards with images, star ratings, prices, and Reserve buttons.

### `Restaurant`
The restaurant section SHALL display a tabbed interface with Main Dish, Drinks, and Desserts tabs.

### `Counter`
The footer SHALL display the "Cayo" brand, Company links, Services links, Contact info (address, phone, email), social media icons, and a copyright notice linking to Component Dock.

### `About`
*anchors only* — Play video · About Us · Watch Our Video

### `Testimonials`
*anchors only* — Previous testimonial · Next testimonial · Testimonials · What Our Guests Say

### `Blog`
*anchors only* — Latest News · Our Blog · Read More

### `Footer`
The footer SHALL display the "Cayo" brand, Company links, Services links, Contact info (address, phone, email), social media icons, and a copyright notice linking to Component Dock.

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
- **Provenance ban.** No file under `apps/cayo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cayo/public/CNAME` = `cayo.free.componentdock.com`
  and the package `homepage` = `https://cayo.free.componentdock.com`.
