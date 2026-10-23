# Regent — Design Notes

Reference: **Suites** — `https://colorlib.com/wp/template/suites/`  
Live preview: `https://preview.colorlib.com/theme/suites/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/suites-free-template.jpg  
Shipped: https://regent.free.componentdock.com

Regent is a luxury hotel & resort landing page template built with React 19, Tailwind CSS 4, and TypeScript. It showcases rooms, amenities, gallery, events, and testimonials — matching the structure and design tokens of the ColorLib Suites template under a new original name.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700**, **Work Sans**

## Design tokens (`apps/regent/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f23a2e` | brand |
| `--color-brand-hover` | `#d9322a` | brand hover |
| `--color-dark` | `#000000` | dark |
| `--color-offwhite` | `#f8f9fa` | offwhite |
| `--color-ink` | `#333333` | ink |
| `--color-muted` | `#777777` | muted |
| `--font-heading` | `'Playfair Display', Georgia, serif` | font heading |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays brand and navigation links | see fidelity note below |
| 2 | `Hero` | Hero displays carousel slides | see fidelity note below |
| 3 | `Rooms` | Rooms section displays room cards | see fidelity note below |
| 4 | `About` | About section shows hotel description | see fidelity note below |
| 5 | `Features` | Features section displays amenities | see fidelity note below |
| 6 | `Promo` | Promo banner displays offer | see fidelity note below |
| 7 | `Gallery` | Gallery section shows hotel images | see fidelity note below |
| 8 | `Events` | Events section displays upcoming events | see fidelity note below |
| 9 | `Testimonials` | Testimonials section shows guest reviews | see fidelity note below |
| 10 | `Footer` | Footer displays contact and branding | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL show the brand name and navigation links with a working dropdown.

### `Hero`
The hero section SHALL show a carousel with 3 slides and navigation controls.

### `Rooms`
The rooms section SHALL display 6 room cards in a grid layout.

### `About`
The about section SHALL display a two-column layout with image and text.

### `Features`
The features section SHALL display 8 hotel amenity items with icons.

### `Promo`
The promo section SHALL display a promotional offer with a parallax background.

### `Gallery`
The gallery section SHALL display a grid of 8 hotel images.

### `Events`
The events section SHALL show 3 event cards with details.

### `Testimonials`
The testimonials section SHALL display 3 guest testimonials.

### `Footer`
The footer SHALL show contact information and link to Component Dock.

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
- **Provenance ban.** No file under `apps/regent/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regent/public/CNAME` = `regent.free.componentdock.com`
  and the package `homepage` = `https://regent.free.componentdock.com`.
