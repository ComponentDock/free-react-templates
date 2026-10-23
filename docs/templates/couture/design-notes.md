# Couture — Design Notes

Reference: **Modist** — `https://colorlib.com/wp/template/modist/`  
Live preview: `https://preview.colorlib.com/theme/modist/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modist-free-template.jpg  
Shipped: https://couture.free.componentdock.com

Couture is a single-page fashion-shop template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Modist" design (see TEMPLATES.md — line 225, Beauty section), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Roboto Condensed**, **Roboto Condensed:wght@300;400;700**

## Design tokens (`apps/couture/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f1b8c4` | brand |
| `--color-brand-deep` | `#d998a8` | brand deep |
| `--color-ink` | `#212529` | ink |
| `--color-mist` | `#6c757d` | mist |
| `--color-cream` | `#f8f9fa` | cream |
| `--color-rule` | `#e9ecef` | rule |
| `--color-primary-50` | `#fdf3f5` | primary 50 |
| `--color-primary-100` | `#fbe7eb` | primary 100 |
| `--color-primary-200` | `#f6cfd7` | primary 200 |
| `--color-primary-300` | `#f1b8c4` | primary 300 |
| `--color-primary-400` | `#e79aac` | primary 400 |
| `--color-primary-500` | `#db7f95` | primary 500 |
| `--color-primary-600` | `#c95f79` | primary 600 |
| `--color-primary-700` | `#a94a62` | primary 700 |
| `--color-primary-800` | `#8a3e51` | primary 800 |
| `--color-primary-900` | `#733644` | primary 900 |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Roboto Condensed', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Welcome hero | see fidelity note below |
| 3 | `Trending` | Trending | see fidelity note below |
| 4 | `Intro` | — | no dedicated spec block |
| 5 | `Products` | Our Products | see fidelity note below |
| 6 | `Sale` | Summer Sale band | see fidelity note below |
| 7 | `Testimony` | Testimony | see fidelity note below |
| 8 | `Blog` | Recent Blog | see fidelity note below |
| 9 | `Counter` | Footer | see fidelity note below |
| 10 | `Services` | Services | see fidelity note below |
| 11 | `Subscribe` | Subscribe band | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Couture", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero section with a headline.

### `Trending`
The system SHALL render a "Trending" section with at least four product tiles.

### `Intro`
*anchors only* — Couture · Online · Fashion Shop

### `Products`
The system SHALL render an "Our Products" section with at least four product tiles.

### `Sale`
The system SHALL render a "Summer Sale" promo band.

### `Testimony`
The system SHALL render a testimony band with a customer quote.

### `Blog`
The system SHALL render a "Recent Blog" section with three post cards.

### `Counter`
The system SHALL render a footer with the site name and link columns.

### `Services`
The system SHALL render a services section with three cards.

### `Subscribe`
The system SHALL render a newsletter subscribe band.

### `Footer`
The system SHALL render a footer with the site name and link columns.

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
- **Provenance ban.** No file under `apps/couture/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/couture/public/CNAME` = `couture.free.componentdock.com`
  and the package `homepage` = `https://couture.free.componentdock.com`.
