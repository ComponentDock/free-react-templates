# Fleetly — Design Notes

Reference: **Car Rental** — `https://colorlib.com/wp/template/car-rental/`  
Live preview: `https://preview.colorlib.com/theme/carrental/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carrental-free-template.jpg  
Shipped: https://fleetly.free.componentdock.com

A Car Rental template with hero/banner, features, about, car models, facts/stats and reviews sections. Recreation of the ColorLib "Car Rental" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page car rental template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400**

## Design tokens (`apps/fleetly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fab700` | brand |
| `--color-brand-dark` | `#e0a500` | brand dark |
| `--color-footer` | `#04091e` | footer |
| `--color-text` | `#222` | text |
| `--color-text-light` | `#777` | text light |
| `--color-bg-alt` | `#f9f9ff` | bg alt |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero Banner | see fidelity note below |
| 3 | `Features` | Features Section | see fidelity note below |
| 4 | `About` | About Section | see fidelity note below |
| 5 | `CarModels` | Car Models Section | see fidelity note below |
| 6 | `Facts` | Facts/Stats Section | see fidelity note below |
| 7 | `Reviews` | Reviews Section | see fidelity note below |
| 8 | `CallToAction` | Call-to-Action Section | see fidelity note below |
| 9 | `Blog` | Blog Section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed-top navigation bar with logo, section links, and a Pages dropdown.

### `Hero`
The template SHALL display a full-screen hero section with background image, dark overlay, headline text, CTA button, and a car booking form.

### `Features`
The template SHALL display 6 feature cards in a 3x2 grid with icons, titles, and descriptions.

### `About`
The template SHALL display a split layout with image on the left and text content with CTA on the right.

### `CarModels`
The template SHALL display a carousel of car model cards with image, specs, pricing, and booking CTA.

### `Facts`
The template SHALL display a full-width yellow statistics bar with 5 counter items.

### `Reviews`
The template SHALL display 6 review cards in a 3x2 grid with star ratings.

### `CallToAction`
The template SHALL display a call-to-action section with background image, dark overlay, and white heading.

### `Blog`
The template SHALL display 4 blog cards in a 4-column grid with thumbnails, metadata, and engagement counts.

### `Footer`
The template SHALL display a dark navy footer with link columns, newsletter form, social icons, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/fleetly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fleetly/public/CNAME` = `fleetly.free.componentdock.com`
  and the package `homepage` = `https://fleetly.free.componentdock.com`.
