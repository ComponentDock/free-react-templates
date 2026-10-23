# Sojourn — Design Notes

Reference: **Sasha** — `https://colorlib.com/wp/template/sasha/`  
Live preview: `https://preview.colorlib.com/theme/sasha/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sasha-free-template.jpg  
Shipped: https://sojourn.free.componentdock.com

Sojourn is a single-page blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Sasha" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Poppins**, **Poppins:wght@300;400;500;600;700**, **Raleway**

## Design tokens (`apps/sojourn/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#faf3ef` | primary 50 |
| `--color-primary-100` | `#f2e2d8` | primary 100 |
| `--color-primary-200` | `#e2c3af` | primary 200 |
| `--color-primary-300` | `#d0a284` | primary 300 |
| `--color-primary-400` | `#c18868` | primary 400 |
| `--color-primary-500` | `#af7152` | primary 500 |
| `--color-primary-600` | `#9a6145` | primary 600 |
| `--color-primary-700` | `#83513a` | primary 700 |
| `--color-primary-800` | `#6b4230` | primary 800 |
| `--color-primary-900` | `#553527` | primary 900 |
| `--color-brand` | `#af7152` | brand |
| `--color-ink` | `#171717` | ink |
| `--color-mist` | `#f7f7f7` | mist |
| `--color-soft` | `#e1e1e1` | soft |
| `--color-hairline` | `#eaeaea` | hairline |
| `--color-meta` | `#999999` | meta |
| `--font-serif` | `'Poppins', Georgia, serif` | font serif |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-body` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `BannerSlider` | Banner slider | see fidelity note below |
| 3 | `PostGrid` | Post grid | see fidelity note below |
| 4 | `Sidebar` | Sidebar widgets | see fidelity note below |
| 5 | `InstagramStrip` | Instagram strip | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a two-tier header: a light top bar with the site logo and a hamburger trigger, and a dark navigation bar below it.

### `BannerSlider`
The system SHALL render a full-width carousel of featured posts, each slide with an image background, a dark overlay, and centered white content.

### `PostGrid`
The system SHALL render a centered two-column grid of blog post cards, each with a thumbnail, category, title, meta line, excerpt, and a read-more button, with the first and sixth cards spanning the full width.

### `Sidebar`
The system SHALL render a right-hand sidebar with About, Newsletter, Instagram, Recent Posts, and Ad widgets.

### `InstagramStrip`
The system SHALL render a full-width Instagram feed strip below the main content with hover-overlay tiles.

### `Footer`
The system SHALL render a footer with a container row, social icons, and a copyright bar.

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
- **Provenance ban.** No file under `apps/sojourn/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sojourn/public/CNAME` = `sojourn.free.componentdock.com`
  and the package `homepage` = `https://sojourn.free.componentdock.com`.
