# Eddy — Design Notes

Reference: **Theriver** — `https://colorlib.com/wp/template/theriver/`  
Live preview: `https://preview.colorlib.com/theme/theriver/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/theriver-free-template.jpg  
Shipped: https://eddy.free.componentdock.com

Eddy is a single-page hotel and resort template with a photographic hero, service features, a gallery, an about block, guest testimonials, a book-your-stay availability form and a latest-news row.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/eddy/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffa37b` | brand |
| `--color-charcoal` | `#393939` | charcoal |
| `--font-heading` | `'Playfair Display', serif` | font heading |
| `--font-body` | `'Roboto', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar And Hero | see fidelity note below |
| 2 | `Hero` | Navbar And Hero | see fidelity note below |
| 3 | `Features` | — | no dedicated spec block |
| 4 | `Gallery` | Services And Gallery | see fidelity note below |
| 5 | `About` | About And Testimonials | see fidelity note below |
| 6 | `Testimonials` | About And Testimonials | see fidelity note below |
| 7 | `Booking` | Booking Enquiry | see fidelity note below |
| 8 | `Blog` | — | no dedicated spec block |
| 9 | `Footer` | Latest News And Component Dock Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The page SHALL open with a navbar (brand, links, mobile toggle) and a full-width hero whose headline is `Relax, Unwind, and Enjoy`.

### `Hero`
The page SHALL open with a navbar (brand, links, mobile toggle) and a full-width hero whose headline is `Relax, Unwind, and Enjoy`.

### `Features`
*anchors only* — Features · Our Services · Discover the exceptional amenities and services that make your stay unforgettable.

### `Gallery`
The page SHALL render an `Our Services` section and an `Our Gallery` section, the latter as an image grid where every image has meaningful alt text.

### `About`
The page SHALL include an about block headlined `The River` with an experience counter (`10 years of excellence`) and a testimonial section whose cards carry a quote, guest name (`Samantha Brown`) and role (`Travel Blogger`).

### `Testimonials`
The page SHALL include an about block headlined `The River` with an experience counter (`10 years of excellence`) and a testimonial section whose cards carry a quote, guest name (`Samantha Brown`) and role (`Travel Blogger`).

### `Booking`
The booking section SHALL be headed `Book Your Stay` and collect arrival date, departure date, adults, children and room count. Both date fields SHALL be `required` so the browser blocks an incomplete submission, and submitting SHALL be handled client-side (no navigation, no backend).

### `Blog`
*anchors only* — Blog · Latest News · Stay updated with the latest happenings and events at our resort. · Read More

### `Footer`
The page SHALL render a `Latest News` card row and a footer with `Address`, `Reservations`, `Newsletter` and `Follow Us` columns that links `https://www.componentdock.com/`.

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
- **Provenance ban.** No file under `apps/eddy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/eddy/public/CNAME` = `eddy.free.componentdock.com`
  and the package `homepage` = `https://eddy.free.componentdock.com`.
