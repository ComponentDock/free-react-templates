# Truss — Design Notes

Reference: **Kraft** — `https://colorlib.com/wp/template/kraft/`  
Live preview: `https://preview.colorlib.com/theme/kraft/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/kraft-free-template.jpg  
Shipped: https://truss.free.componentdock.com

Truss is a single-page architecture landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Kraft" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700;800**

## Design tokens (`apps/truss/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff5200` | brand |
| `--color-brand-hover` | `#ff6014` | Slightly lighter orange for hover states (#ff6014 from the original). |
| `--color-ink` | `#000000` | Ink — headings and primary text (#000000 from the original). |
| `--color-mist` | `#888888` | Mist — muted body text (#888 from the original footer, #333 body). |
| `--color-faint` | `#bfbfbf` | Faint — small uppercase section labels (#bfbfbf subtext). |
| `--color-paper` | `#efefef` | Paper — light footer background (#efefef from the original). |
| `--color-coal` | `#000000` | Coal — dark surfaces (#000000 from the original). |
| `--color-primary-50` | `#fff6f2` | primary 50 |
| `--color-primary-100` | `#ffe9df` | primary 100 |
| `--color-primary-200` | `#ffd0bd` | primary 200 |
| `--color-primary-300` | `#ffab8a` | primary 300 |
| `--color-primary-400` | `#ff7d4d` | primary 400 |
| `--color-primary-500` | `#ff5c1f` | primary 500 |
| `--color-primary-600` | `#ff5200` | primary 600 |
| `--color-primary-700` | `#e04700` | primary 700 |
| `--color-primary-800` | `#b83a00` | primary 800 |
| `--color-primary-900` | `#8f2d00` | primary 900 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Original font: Bootstrap system sans stack — recreated with Inter. |
| `--font-display` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Testimonials` | Testimonials section | see fidelity note below |
| 5 | `Projects` | Projects section | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Truss", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, an intro label, a call-to-action, and three stat counters.

### `Services`
The system SHALL render a services section with a heading and at least four service cards.

### `Testimonials`
The system SHALL render a testimonials carousel with slide controls.

### `Projects`
The system SHALL render a projects section with a heading and a project gallery.

### `Footer`
The system SHALL render a footer with an about blurb, social links, link columns, contact details, and a copyright line.

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
- **Provenance ban.** No file under `apps/truss/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/truss/public/CNAME` = `truss.free.componentdock.com`
  and the package `homepage` = `https://truss.free.componentdock.com`.
