# Carouselhub — Design Notes

Reference: **Carousel 03** — `https://colorlib.com/wp/template/carousel-03/`  
Live preview: `https://preview.colorlib.com/theme/carousel-03/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-03.jpg  
Shipped: https://carouselhub.free.componentdock.com

CarouselHub is a single-page carousel gallery template with a three-slide hero carousel, collection grids, a horizontal work slider and a newsletter capture, all in a sky-blue-on-slate palette with dark-mode support.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/carouselhub/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0284c7` | brand |
| `--color-brand-dark` | `#0369a1` | brand dark |
| `--color-slate-dark` | `#0f172a` | slate dark |
| `--color-slate-light` | `#f8fafc` | slate light |
| `--font-family-sans` | `'Inter', system-ui, sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Carousel` | Hero Carousel | see fidelity note below |
| 3 | `FeaturedGrid` | — | no dedicated spec block |
| 4 | `SliderSection` | Collection And Work Sections | see fidelity note below |
| 5 | `Footer` | Component Dock Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL expose the brand, the section links, a mobile menu toggle (`Open menu` / `Close menu`) and a dark-mode toggle whose name flips between `Switch to dark mode` and `Switch to light mode`.

### `Carousel`
The hero SHALL be a three-slide carousel with circular `Previous slide` and `Next slide` controls and one dot button per slide named `Go to slide 1` … `Go to slide 3`.

### `FeaturedGrid`
*anchors only* — Featured Collections · Explore our curated portfolio of creative works

### `SliderSection`
The page SHALL render a `Featured Collections` grid and an `Explore Our Work` slider section, each laid out as an h2 heading over a responsive card grid.

### `Footer`
The footer SHALL link `https://www.componentdock.com/` branded as Component Dock.

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
- **Provenance ban.** No file under `apps/carouselhub/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carouselhub/public/CNAME` = `carouselhub.free.componentdock.com`
  and the package `homepage` = `https://carouselhub.free.componentdock.com`.
