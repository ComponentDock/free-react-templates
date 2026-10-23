# Glyph — Design Notes

Reference: **Opium** — `https://colorlib.com/wp/template/opium/`  
Live preview: `https://preview.colorlib.com/theme/opium/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/opium-free-template.jpg  
Shipped: https://glyph.free.componentdock.com

Glyph is a single-page blog website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Opium" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inconsolata**, **Inconsolata:wght@400;700**

## Design tokens (`apps/glyph/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#6f6fff` | accent |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#777777` | body |
| `--color-meta` | `#777777` | meta |
| `--color-soft` | `#f9f9ff` | soft |
| `--color-line` | `#e9e9e9` | line |
| `--color-footer` | `#222222` | footer |
| `--color-foot-input` | `#191919` | foot input |
| `--color-primary` | `#6f6fff` | primary |
| `--color-primary-50` | `#efefff` | primary 50 |
| `--color-primary-100` | `#e0e0ff` | primary 100 |
| `--color-primary-200` | `#c4c4ff` | primary 200 |
| `--color-primary-300` | `#a3a3ff` | primary 300 |
| `--color-primary-400` | `#8585ff` | primary 400 |
| `--color-primary-500` | `#6f6fff` | primary 500 |
| `--color-primary-600` | `#6f6fff` | primary 600 |
| `--color-primary-700` | `#5a5aef` | primary 700 |
| `--color-primary-800` | `#4747cc` | primary 800 |
| `--color-primary-900` | `#3a3aa6` | primary 900 |
| `--font-sans` | `'Inconsolata', ui-monospace, SFMono-Regular, Menlo, monospace` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero banner slider | see fidelity note below |
| 3 | `BlogGrid` | Blog post grid | see fidelity note below |
| 4 | `Pagination` | Pagination | see fidelity note below |
| 5 | `Sidebar` | Sidebar widgets | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent header with the site name, social icons, and anchor links to the page's sections.

### `Hero`
The system SHALL render a hero banner with a background image and an auto-advancing text slider of featured posts on the right side.

### `BlogGrid`
The system SHALL render a grid of nine blog posts, three per row on desktop, each with an image and an overlapping white text panel.

### `Pagination`
The system SHALL render pagination below the blog grid.

### `Sidebar`
The system SHALL render a right sidebar with search, author, popular posts, newsletter, and post categories widgets.

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
- **Provenance ban.** No file under `apps/glyph/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/glyph/public/CNAME` = `glyph.free.componentdock.com`
  and the package `homepage` = `https://glyph.free.componentdock.com`.
