# Rafter — Design Notes

Reference: **Woodrox** — `https://colorlib.com/wp/template/woodrox/`  
Live preview: `https://preview.colorlib.com/theme/woodrox/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/woodrox-free-template.jpg  
Shipped: https://rafter.free.componentdock.com

Rafter is a single-page architecture & furniture landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Woodrox" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Heebo**, **Heebo:wght@400;500;700;800**, **Roboto**

## Design tokens (`apps/rafter/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#faba00` | brand |
| `--color-brand-dark` | `#d89f00` | brand dark |
| `--color-accent` | `#ffc93c` | Accent — brighter yellow used on hover states. |
| `--color-ink` | `#222222` | Ink — headings & footer (#222222 from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light chip backgrounds (#f9f9ff from the original). |
| `--color-charcoal` | `#222222` | Charcoal — dark hero/footer background (#222222 from the original). |
| `--color-primary-50` | `#fffbea` | primary 50 |
| `--color-primary-100` | `#fff3c4` | primary 100 |
| `--color-primary-200` | `#ffe685` | primary 200 |
| `--color-primary-300` | `#ffd43d` | primary 300 |
| `--color-primary-400` | `#faba00` | primary 400 |
| `--color-primary-500` | `#e0a800` | primary 500 |
| `--color-primary-600` | `#c28e00` | primary 600 |
| `--color-primary-700` | `#9a7200` | primary 700 |
| `--color-primary-800` | `#7a5a00` | primary 800 |
| `--color-primary-900` | `#5c4400` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Heebo', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Furniture` | Furniture section | see fidelity note below |
| 4 | `Projects` | Projects section | see fidelity note below |
| 5 | `Features` | Features section | see fidelity note below |
| 6 | `Blog` | Blog section | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Rafter", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and a "Get Started" button.

### `Furniture`
The system SHALL render a furniture section with a heading and product cards.

### `Projects`
The system SHALL render a projects section with a project gallery.

### `Features`
The system SHALL render a features section with a heading and six feature cards.

### `Blog`
The system SHALL render a blog section with post cards.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/rafter/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rafter/public/CNAME` = `rafter.free.componentdock.com`
  and the package `homepage` = `https://rafter.free.componentdock.com`.
