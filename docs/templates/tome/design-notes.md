# Tome — Design Notes

Reference: **Libro** — `https://colorlib.com/wp/template/libro/`  
Live preview: `https://preview.colorlib.com/theme/libro/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/libro-free-template.jpg  
Shipped: https://tome.free.componentdock.com

Tome is a single-page fashion/lifestyle blog website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600**, **Work Sans**

## Design tokens (`apps/tome/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ee76ad` | brand |
| `--color-primary` | `#ee76ad` | primary scale so shared Button/ButtonLink (bg-primary-600) render brand pink |
| `--color-primary-50` | `#fef3f8` | primary 50 |
| `--color-primary-100` | `#fde7f1` | primary 100 |
| `--color-primary-200` | `#fbcfe2` | primary 200 |
| `--color-primary-300` | `#f8a8c9` | primary 300 |
| `--color-primary-400` | `#f37aab` | primary 400 |
| `--color-primary-500` | `#ee76ad` | primary 500 |
| `--color-primary-600` | `#ee76ad` | primary 600 |
| `--color-primary-700` | `#d14f88` | primary 700 |
| `--color-primary-800` | `#b03a6e` | primary 800 |
| `--color-primary-900` | `#8f2f5a` | primary 900 |
| `--color-cyan` | `#29bae4` | cyan |
| `--color-body` | `#737373` | body |
| `--color-line` | `#cccccc` | line |
| `--color-loader` | `#f96d00` | loader |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with logo and hamburger | see fidelity note below |
| 2 | `SlideOutNav` | Slide-out navigation panel | see fidelity note below |
| 3 | `HeroSlider` | Hero slider | see fidelity note below |
| 4 | `BlogGrid` | Blog grid | see fidelity note below |
| 5 | `Pagination` | Pagination | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a header with the site name "Tome" in uppercase letter-spaced type and a hamburger menu trigger.

### `SlideOutNav`
The system SHALL render a full-height slide-out navigation panel that opens from the left with the site name, a link list, and a copyright line.

### `HeroSlider`
The system SHALL render a full-height hero image carousel on the left half of the viewport with a category tag and a headline per slide.

### `BlogGrid`
The system SHALL render a two-column grid of blog entries to the right of the hero, each with an image, a meta line, a heading, and an excerpt.

### `Pagination`
The system SHALL render circular pagination controls below the blog grid with the first page active.

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
- **Provenance ban.** No file under `apps/tome/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tome/public/CNAME` = `tome.free.componentdock.com`
  and the package `homepage` = `https://tome.free.componentdock.com`.
