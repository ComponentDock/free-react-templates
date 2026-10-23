# Savor — Design Notes

Reference: **Foodeiblog** — `https://colorlib.com/wp/template/foodeiblog/`  
Live preview: `https://preview.colorlib.com/theme/foodeiblog/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/foodeiblog-free-template.jpg  
Shipped: https://savor.free.componentdock.com

Savor is a single-page food-blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Foodeiblog" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@300;400;600;700;800**, **Unna**

## Design tokens (`apps/savor/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#f4952f` | primary |
| `--color-primary-50` | `#fef6ec` | primary scale so shared Button/ButtonLink (bg-primary-600) render in brand orange |
| `--color-primary-100` | `#fdebd3` | primary 100 |
| `--color-primary-200` | `#fad4a6` | primary 200 |
| `--color-primary-300` | `#f8b96e` | primary 300 |
| `--color-primary-400` | `#f6a34a` | primary 400 |
| `--color-primary-500` | `#f4952f` | primary 500 |
| `--color-primary-600` | `#e07a12` | primary 600 |
| `--color-primary-700` | `#b95f0c` | primary 700 |
| `--color-primary-800` | `#944c0e` | primary 800 |
| `--color-primary-900` | `#7a3f10` | primary 900 |
| `--color-ink` | `#111111` | ink |
| `--color-body` | `#444444` | body |
| `--color-meta` | `#888888` | meta |
| `--color-soft` | `#f5f5f5` | soft |
| `--color-chips` | `#ebebeb` | chips |
| `--color-line` | `#e1e1e1` | line |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Unna', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header and navigation | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `CategoryTiles` | Category tiles | see fidelity note below |
| 4 | `BlogGrid` | Blog post grid | see fidelity note below |
| 5 | `Sidebar` | Sidebar widgets | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a top header with a hamburger button, a main navigation bar, a search form, a subscribe button, a centered wordmark logo, and a row of social icons.

### `HeroSlider`
The system SHALL render a full-width hero carousel of blog-post slides with overlaid content and prev/next controls.

### `CategoryTiles`
The system SHALL render a row of square category tiles with hover text.

### `BlogGrid`
The system SHALL render the blog feed as a grid of post cards with a load-more control.

### `Sidebar`
The system SHALL render a sidebar with About Me, Follow, Featured Posts, Categories, and Subscribe widgets.

### `Footer`
The system SHALL render a footer with an Instagram strip, footer text with social links, and a copyright bar.

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
- **Provenance ban.** No file under `apps/savor/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/savor/public/CNAME` = `savor.free.componentdock.com`
  and the package `homepage` = `https://savor.free.componentdock.com`.
