# Palate — Design Notes

Reference: **Appetizer** — `https://colorlib.com/wp/template/appetizer/`  
Live preview: `https://preview.colorlib.com/theme/appetizer/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/appetizer-free-template.jpg  
Shipped: https://palate.free.componentdock.com

Palate is a single-page restaurant website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Miss Fajardose**, **Monoton**, **Poppins**, **Poppins:wght@300;400;500;600;700;900**

## Design tokens (`apps/palate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffa323` | brand |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#666666` | body |
| `--color-footer` | `#141313` | footer |
| `--color-mist` | `#fafafa` | mist |
| `--font-display` | `'Monoton', 'Poppins', sans-serif` | font display |
| `--font-script` | `'Miss Fajardose', 'Poppins', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top info bar | see fidelity note below |
| 2 | `Navbar` | Navbar with CTA and scrolled state | see fidelity note below |
| 3 | `HeroSlider` | Hero slider | see fidelity note below |
| 4 | `About` | About block with video button | see fidelity note below |
| 5 | `Counter` | Stats counter band | see fidelity note below |
| 6 | `Services` | Catering services row | see fidelity note below |
| 7 | `MenuSection` | Reservation form with map | see fidelity note below |
| 8 | `Reservation` | Reservation form with map | see fidelity note below |
| 9 | `Chefs` | Master chef row | see fidelity note below |
| 10 | `Testimony` | Testimonial carousel | see fidelity note below |
| 11 | `Footer` | Dark footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a black info strip above the navbar with contact details and opening hours.

### `Navbar`
The system SHALL render a transparent navbar over the hero with the brand, top-level links, an orange "Book a table" pill, and a fixed white state on scroll.

### `HeroSlider`
The system SHALL render a 750px-tall hero slider with three full-width photo slides, a black overlay, display-font headlines, and two call-to-action buttons.

### `About`
The system SHALL render the centered "Appetizer Restaurant" about block with a script subheading, intro copy, and a floating orange play button.

### `Counter`
The system SHALL render the photo counter band with four animated count-up statistics.

### `Services`
The system SHALL render the three catering-service cards with black circular icon badges on a light background.

### `MenuSection`
The system SHALL render the "Make Reservation" split: a booking form on the left and a map placeholder on the right.

### `Reservation`
The system SHALL render the "Make Reservation" split: a booking form on the left and a map placeholder on the right.

### `Chefs`
The system SHALL render the "Our Master Chef" row: four staff cards with photos, roles, blurbs, and social icons.

### `Testimony`
The system SHALL render the "Happy Customer" testimonial carousel over a photo with a white overlay: five testimonials, one slide at a time, with avatars and quote badges.

### `Footer`
The system SHALL render the dark `#141313` footer with four widgets (brand + social, open hours, newsletter, Instagram) and a copyright bar.

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
- **Provenance ban.** No file under `apps/palate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/palate/public/CNAME` = `palate.free.componentdock.com`
  and the package `homepage` = `https://palate.free.componentdock.com`.
