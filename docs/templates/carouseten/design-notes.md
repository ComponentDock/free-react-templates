# Carouseten — Design Notes

Reference: **Carousel 10** — `https://colorlib.com/wp/template/carousel-10/`  
Live preview: `https://preview.colorlib.com/theme/carousel-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-10.jpg  
Shipped: https://carouseten.free.componentdock.com

A Carousel Showcase template with hero banner & overview, interactive thumbnail, feature highlights grid and newsletter subscription sections. Recreation of ColorLib `carousel-10` (`https://colorlib.com/wp/template/carousel-10/`), built as a modern, responsive React 19 + Tailwind CSS 4 + TypeScript web application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700;800;900**

## Design tokens (`apps/carouseten/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4f46e5` | Brand palette: indigo primary, red accent for thumbnails and highlights |
| `--color-primary-50` | `#eef2ff` | primary 50 |
| `--color-primary-100` | `#e0e7ff` | primary 100 |
| `--color-primary-200` | `#c7d2fe` | primary 200 |
| `--color-primary-300` | `#a5b4fc` | primary 300 |
| `--color-primary-400` | `#818cf8` | primary 400 |
| `--color-primary-500` | `#6366f1` | primary 500 |
| `--color-primary-600` | `#4f46e5` | primary 600 |
| `--color-primary-700` | `#4338ca` | primary 700 |
| `--color-primary-800` | `#3730a3` | primary 800 |
| `--color-primary-900` | `#312e81` | primary 900 |
| `--color-primary-950` | `#1e1b4b` | primary 950 |
| `--color-accent-50` | `#fef2f2` | accent 50 |
| `--color-accent-100` | `#fee2e2` | accent 100 |
| `--color-accent-200` | `#fecaca` | accent 200 |
| `--color-accent-300` | `#fca5a5` | accent 300 |
| `--color-accent-400` | `#f87171` | accent 400 |
| `--color-accent-500` | `#ef4444` | accent 500 |
| `--color-accent-600` | `#dc2626` | accent 600 |
| `--color-accent-700` | `#b91c1c` | accent 700 |
| `--color-accent-800` | `#991b1b` | accent 800 |
| `--color-accent-900` | `#7f1d1d` | accent 900 |
| `--color-accent-950` | `#450a0a` | accent 950 |
| `--font-display` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Font: Inter (clean sans-serif for headings and body) |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero Banner & Overview | see fidelity note below |
| 3 | `Carousel` | Interactive Thumbnail Carousel | see fidelity note below |
| 4 | `Features` | Feature Highlights Grid | see fidelity note below |
| 5 | `Newsletter` | Newsletter Subscription | see fidelity note below |
| 6 | `Footer` | Footer & Branding | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Carouseten · Home

### `Hero`
The hero section SHALL display a compelling headline, description, and quick action buttons to explore the carousel slides.

### `Carousel`
The carousel component SHALL display multiple slides with thumbnail previews, navigation arrows, and active slide indicators.

### `Features`
The feature grid section SHALL display cards detailing responsive layouts, touch gesture support, custom styling, and performance.

### `Newsletter`
The newsletter form SHALL validate email input and display subscription status.

### `Footer`
The footer SHALL display the template name, copyright notice, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/carouseten/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carouseten/public/CNAME` = `carouseten.free.componentdock.com`
  and the package `homepage` = `https://carouseten.free.componentdock.com`.
