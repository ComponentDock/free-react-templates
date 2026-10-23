# Forno — Design Notes

Reference: **Feliciano** — `https://colorlib.com/wp/template/feliciano/`  
Live preview: `https://preview.colorlib.com/theme/feliciano/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/feliciano-free-template.jpg  
Shipped: https://forno.free.componentdock.com

Forno is a single-page restaurant website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Feliciano" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Great Vibes**, **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/forno/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#faf6ee` | primary 50 |
| `--color-primary-100` | `#f5ecdb` | primary 100 |
| `--color-primary-200` | `#ecd9b6` | primary 200 |
| `--color-primary-300` | `#e2c491` | primary 300 |
| `--color-primary-400` | `#d5b285` | primary 400 |
| `--color-primary-500` | `#c8a97e` | primary 500 |
| `--color-primary-600` | `#b59161` | primary 600 |
| `--color-primary-700` | `#9c784b` | primary 700 |
| `--color-primary-800` | `#7f5f3c` | primary 800 |
| `--color-primary-900` | `#64492f` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-script` | `'Great Vibes', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top info bar | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `HeroSlider` | Hero slider | see fidelity note below |
| 4 | `FeaturedDishes` | Featured dishes | see fidelity note below |
| 5 | `Welcome` | Welcome section | see fidelity note below |
| 6 | `Counter` | Counter strip | see fidelity note below |
| 7 | `Services` | Services | see fidelity note below |
| 8 | `MenuSection` | Reservation | see fidelity note below |
| 9 | `Chefs` | Chef team | see fidelity note below |
| 10 | `Reservation` | Reservation | see fidelity note below |
| 11 | `Testimonials` | Testimonials | see fidelity note below |
| 12 | `BlogPosts` | Recent posts | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a slim black top bar above the navigation.

### `Navbar`
*anchors only* — Main · Forno home · Toggle mobile menu

### `HeroSlider`
The system SHALL render a full-height hero carousel with three slides.

### `FeaturedDishes`
The system SHALL render a strip of four featured dish cards below the hero.

### `Welcome`
The system SHALL render a two-column welcome/about section.

### `Counter`
The system SHALL render a statistics counter band with a photo background.

### `Services`
The system SHALL render four service cards.

### `MenuSection`
The system SHALL render a reservation form with an open-hours panel.

### `Chefs`
The system SHALL render a team section with four chefs.

### `Reservation`
The system SHALL render a reservation form with an open-hours panel.

### `Testimonials`
The system SHALL render a customer testimonial carousel.

### `BlogPosts`
The system SHALL render a blog section with three post cards.

### `Footer`
The system SHALL render a dark footer with four columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/forno/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/forno/public/CNAME` = `forno.free.componentdock.com`
  and the package `homepage` = `https://forno.free.componentdock.com`.
