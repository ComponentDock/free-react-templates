# Gallery — Design Notes

Reference: **Reopen** — `https://colorlib.com/wp/template/reopen/`  
Live preview: `https://preview.colorlib.com/theme/reopen/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/portfolio-website-templates-1.jpg — the ROW's slug `portfolio-wordpress-themes`, not the spec's `reopen`  
Shipped: https://gallery.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `portfolio-wordpress-themes` for this app while the spec records `reopen`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Gallery is a creative portfolio and resources landing page template. It recreates the ColorLib "Reopen" design (https://colorlib.com/wp/template/reopen/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;600;700**, **Roboto**

## Design tokens (`apps/gallery/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e74c3c` | Brand palette: red accent from the original design |
| `--color-brand-dark` | `#c0392b` | brand dark |
| `--color-ink` | `#333333` | Text colors |
| `--color-body` | `#666666` | body |
| `--color-muted` | `#999999` | muted |
| `--color-surface` | `#ffffff` | Surfaces |
| `--color-surface-alt` | `#f8f8f8` | surface alt |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Fonts |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo, navigation links, and dark mode toggle | see fidelity note below |
| 2 | `Hero` | Hero section with heading and subtitle | see fidelity note below |
| 3 | `PortfolioGrid` | Portfolio grid with 9 items and hover overlays | see fidelity note below |
| 4 | `LoadMore` | Load more button | see fidelity note below |
| 5 | `Footer` | Footer with Component Dock link and social icons | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky navbar with the "Gallery" brand text, navigation links (Home, About, Story, Blog, Contact), and a dark mode toggle button.

### `Hero`
The template SHALL render a hero section with a large heading about design resources and a subtitle about free downloads.

### `PortfolioGrid`
The template SHALL render a responsive 3-column masonry grid of 9 portfolio items, each with a placeholder image and a hover overlay showing category and type labels.

### `LoadMore`
The template SHALL render a centered load-more button below the portfolio grid.

### `Footer`
The template SHALL render a footer with copyright text, a link to Component Dock, and social media icon links.

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
- **Provenance ban.** No file under `apps/gallery/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gallery/public/CNAME` = `gallery.free.componentdock.com`
  and the package `homepage` = `https://gallery.free.componentdock.com`.
