# Odyssey — Design Notes

Reference: **Ruft** — `https://colorlib.com/wp/template/ruft/`  
Live preview: `https://preview.colorlib.com/theme/ruft/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ruft-free-template.jpg  
Shipped: https://odyssey.free.componentdock.com

Odyssey is a single-page blog/magazine template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Ruft" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@300;400;600;700**, **Roboto**

## Design tokens (`apps/odyssey/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f3eeff` | primary 50 |
| `--color-primary-100` | `#e5d9ff` | primary 100 |
| `--color-primary-200` | `#cbb3ff` | primary 200 |
| `--color-primary-300` | `#a98aff` | primary 300 |
| `--color-primary-400` | `#8f66fc` | primary 400 |
| `--color-primary-500` | `#8050fa` | primary 500 |
| `--color-primary-600` | `#6f3df0` | primary 600 |
| `--color-primary-700` | `#5a2cd6` | primary 700 |
| `--color-primary-800` | `#4722ad` | primary 800 |
| `--color-primary-900` | `#381b87` | primary 900 |
| `--color-brand` | `#8050fa` | brand |
| `--color-ink` | `#222222` | ink |
| `--color-mist` | `#f9f9ff` | mist |
| `--color-soft` | `#e9e9e9` | soft |
| `--color-meta` | `#888888` | meta |
| `--font-serif` | `'Playfair Display', Georgia, serif` | font serif |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Banner hero | see fidelity note below |
| 3 | `PostSlider` | Featured post slider | see fidelity note below |
| 4 | `BlogList` | Blog post list | see fidelity note below |
| 5 | `Sidebar` | Sidebar widgets | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed top navigation bar with a logo, the site name "Odyssey", navigation links, and a scroll-aware background.

### `Hero`
The system SHALL render a full-width hero with an image background, a purple overlay, and a two-line level-1 headline.

### `PostSlider`
The system SHALL render a carousel of featured posts, each with a thumbnail, meta information, title, excerpt, and a read-more button.

### `BlogList`
The system SHALL render a list of blog posts, each with a thumbnail, meta line, title, excerpt, and a continue-reading link.

### `Sidebar`
The system SHALL render a sidebar with a search widget, an author widget, a popular posts list, a categories list, and a newsletter widget.

### `Footer`
The system SHALL render a footer with an About column, a Newsletter column, an Instagram feed column, a social column, and a bottom bar.

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
- **Provenance ban.** No file under `apps/odyssey/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/odyssey/public/CNAME` = `odyssey.free.componentdock.com`
  and the package `homepage` = `https://odyssey.free.componentdock.com`.
