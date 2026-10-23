# Ochre — Design Notes

Reference: **Lifeleck** — `https://colorlib.com/wp/template/lifeleck/`  
Live preview: `https://preview.colorlib.com/theme/lifeleck/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lifeleck-free-template.jpg  
Shipped: https://ochre.free.componentdock.com

Ochre is a single-page lifestyle/fashion blog website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cardo**, **Cardo:ital,wght@0,400;0,700;1,400**, **Lora**

## Design tokens (`apps/ochre/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fc4600` | brand |
| `--color-primary` | `#fc4600` | primary scale so shared Button/ButtonLink (bg-primary-600) render brand orange |
| `--color-primary-50` | `#fff2ec` | primary 50 |
| `--color-primary-100` | `#ffe4d6` | primary 100 |
| `--color-primary-200` | `#ffc7ab` | primary 200 |
| `--color-primary-300` | `#ffa273` | primary 300 |
| `--color-primary-400` | `#ff7d3d` | primary 400 |
| `--color-primary-500` | `#fc5c16` | primary 500 |
| `--color-primary-600` | `#fc4600` | primary 600 |
| `--color-primary-700` | `#d63a00` | primary 700 |
| `--color-primary-800` | `#ad2f00` | primary 800 |
| `--color-primary-900` | `#852400` | primary 900 |
| `--color-ink` | `#2a2a2a` | ink |
| `--color-body` | `#888888` | body |
| `--color-muted` | `#999999` | muted |
| `--color-line` | `#eeeeee` | line |
| `--color-soft` | `#f7f7f7` | soft |
| `--font-sans` | `'Lora', ui-serif, Georgia, serif` | font sans |
| `--font-display` | `'Lora', ui-serif, Georgia, serif` | font display |
| `--font-serif` | `'Cardo', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Banner` | Banner posts | see fidelity note below |
| 3 | `BlogGrid` | Blog grid | see fidelity note below |
| 4 | `LoadMore` | Load more button and pagination | see fidelity note below |
| 5 | `Pagination` | Load more button and pagination | see fidelity note below |
| 6 | `Sidebar` | Sidebar | see fidelity note below |
| 7 | `SocialConnect` | Social connect strip | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main · Mobile

### `Banner`
The system SHALL render three banner image posts, each with an overlapping white card containing a category, a title, and a date.

### `BlogGrid`
The system SHALL render a two-column grid of blog posts, each with an image and an overlapping white card with a category, a title, and a date.

### `LoadMore`
The system SHALL render a centered "Load More" button and plain-text pagination below the grid.

### `Pagination`
The system SHALL render a centered "Load More" button and plain-text pagination below the grid.

### `Sidebar`
The system SHALL render a sidebar with a search form, a Categories list, a Popular Feeds list, and a Subscribe form.

### `SocialConnect`
The system SHALL render a full-width strip of six image tiles with Instagram-style hover overlays.

### `Footer`
The system SHALL render a light-gray footer with four widget columns and a copyright line.

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
- **Provenance ban.** No file under `apps/ochre/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ochre/public/CNAME` = `ochre.free.componentdock.com`
  and the package `homepage` = `https://ochre.free.componentdock.com`.
