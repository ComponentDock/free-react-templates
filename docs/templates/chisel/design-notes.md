# Chisel — Design Notes

Reference: **Reshape** — `https://colorlib.com/wp/template/reshape/`  
Live preview: `https://preview.colorlib.com/theme/reshape/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/reshape-free-template.jpg  
Shipped: https://chisel.free.componentdock.com

Chisel is a single-page architecture firm website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Reshape" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Mulish**, **Mulish:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/chisel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0779e4` | brand |
| `--color-brand-dark` | `#0883f7` | brand dark |
| `--color-ink` | `#000000` | Ink — headings (#000000 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d bootstrap muted from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light chip backgrounds (#f8f9fa from the original). |
| `--color-charcoal` | `#222222` | Charcoal — dark footer (#222 from the original). |
| `--color-primary-50` | `#eef6fe` | primary 50 |
| `--color-primary-100` | `#d8ebfd` | primary 100 |
| `--color-primary-200` | `#b3d6fb` | primary 200 |
| `--color-primary-300` | `#85bdf8` | primary 300 |
| `--color-primary-400` | `#4d9ef3` | primary 400 |
| `--color-primary-500` | `#0779e4` | primary 500 |
| `--color-primary-600` | `#066ecf` | primary 600 |
| `--color-primary-700` | `#055fb2` | primary 700 |
| `--color-primary-800` | `#044f93` | primary 800 |
| `--color-primary-900` | `#033d72` | primary 900 |
| `--font-sans` | `'Mulish', ui-sans-serif, system-ui, sans-serif` | Original font: Mulish (Google Fonts link in index.html). |
| `--font-display` | `'Mulish', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Stats` | Stats band | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Portfolio` | Portfolio section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Chisel" (plus a blue dot), anchor links to the page's sections, a dark-mode toggle button, and a mobile menu.

### `Hero`
The system SHALL render a full-viewport hero with an eyebrow paragraph, a level-1 heading, and two call-to-action buttons.

### `Stats`
The system SHALL render a dark stats band with four counters and labels.

### `About`
The system SHALL render an about section with an image, a heading, copy, and a read-more link.

### `Services`
The system SHALL render a services section with an eyebrow, an intro heading, and six service cards.

### `Portfolio`
The system SHALL render a portfolio section with a heading and a project slider that advances with prev/next buttons.

### `Testimonials`
The system SHALL render a testimonials section with a quote and an author.

### `Blog`
The system SHALL render a blog section with four post cards, each with an image, a title, and a meta line.

### `Footer`
The system SHALL render a dark footer with link columns, contact details, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/chisel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/chisel/public/CNAME` = `chisel.free.componentdock.com`
  and the package `homepage` = `https://chisel.free.componentdock.com`.
