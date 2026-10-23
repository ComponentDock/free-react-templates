# Opulux — Design Notes

Reference: **Deluxe** — `https://colorlib.com/wp/template/deluxe/`  
Live preview: `https://preview.colorlib.com/theme/deluxe/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/deluxe-free-template.jpg  
Shipped: https://opulux.free.componentdock.com

Recreation of ColorLib's "Deluxe" hotel template as a React 19 + Vite + Tailwind 4 + TypeScript template. The Opulux template provides a luxury hotel/resort website with booking functionality, room showcases, testimonials, and Instagram feed sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:ital,wght@0,400;0,700;1,400**, **Poppins**

## Design tokens (`apps/opulux/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-gold` | `#c9af7e` | gold |
| `--color-gold-light` | `#d1ba90` | gold light |
| `--color-gold-dark` | `#8d703b` | gold dark |
| `--color-brown` | `#7b6233` | brown |
| `--color-dark-brown` | `#3c312e` | dark brown |
| `--color-cyan` | `#4ac7ea` | cyan |
| `--color-cyan-hover` | `#56caeb` | cyan hover |
| `--color-cyan-light` | `#78d5ef` | cyan light |
| `--color-dark-bg` | `#1d2124` | dark bg |
| `--color-dark-alt` | `#232323` | dark alt |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--color-off-white` | `#f6f2ea` | off white |
| `--font-heading` | `'Playfair Display', Georgia, serif` | font heading |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `BookingForm` | Booking Form | see fidelity note below |
| 4 | `About` | About Section | see fidelity note below |
| 5 | `Rooms` | Rooms Section | see fidelity note below |
| 6 | `Counter` | Counter Section | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Blog` | Blog Section | see fidelity note below |
| 9 | `InstagramGallery` | Instagram Gallery | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — navigation · Main navigation · Opulux

### `Hero`
The hero SHALL display a full-width background image with overlay and welcome text.

### `BookingForm`
The booking form SHALL allow users to select check-in/out dates, room type, and guest count.

### `About`
The about section SHALL display hotel features with icons.

### `Rooms`
The rooms section SHALL display 6 room cards with pricing.

### `Counter`
The counter section SHALL display hotel statistics.

### `Testimonials`
The testimonials section SHALL display guest quotes with navigation.

### `Blog`
The blog section SHALL display 3 recent posts.

### `InstagramGallery`
The instagram gallery SHALL display 6 images with hover effect.

### `Footer`
The footer SHALL display brand info, links, contact, and newsletter.

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
- **Provenance ban.** No file under `apps/opulux/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/opulux/public/CNAME` = `opulux.free.componentdock.com`
  and the package `homepage` = `https://opulux.free.componentdock.com`.
