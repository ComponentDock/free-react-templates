# Cantilever — Design Notes

Reference: **Maxitechture** — `https://colorlib.com/wp/template/maxitechture/`  
Live preview: `https://preview.colorlib.com/theme/maxitechture/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/maxitechture-free-template.jpg  
Shipped: https://cantilever.free.componentdock.com

Cantilever is a single-page architecture landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Maxitechture" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Heebo**, **Heebo:wght@400;500;700**, **Roboto**

## Design tokens (`apps/cantilever/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#a7cb00` | brand |
| `--color-brand-dark` | `#8fae00` | brand dark |
| `--color-ink` | `#222222` | Ink — headings (#222222 from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff from the original). |
| `--color-charcoal` | `#1f1f1f` | Charcoal — dark footer band. |
| `--color-primary-50` | `#f8fceb` | primary 50 |
| `--color-primary-100` | `#eef8cd` | primary 100 |
| `--color-primary-200` | `#ddef9c` | primary 200 |
| `--color-primary-300` | `#c8e45f` | primary 300 |
| `--color-primary-400` | `#b2d92f` | primary 400 |
| `--color-primary-500` | `#a7cb00` | primary 500 |
| `--color-primary-600` | `#8fae00` | primary 600 |
| `--color-primary-700` | `#778f00` | primary 700 |
| `--color-primary-800` | `#5c7000` | primary 800 |
| `--color-primary-900` | `#495800` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Heebo', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | Welcome (About) section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Projects` | Projects section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Clients` | Client logos section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Cantilever", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and a "Get Started" button.

### `About`
The system SHALL render a welcome section with a small eyebrow heading, a headline, a sub-heading, and a "More About Us" button.

### `Services`
The system SHALL render a services section with a heading and at least three service cards.

### `Projects`
The system SHALL render a projects section with a heading and a project gallery.

### `Testimonials`
The system SHALL render a testimonials section with a heading and a rotating quote carousel.

### `Clients`
The system SHALL render a client logos strip.

### `Blog`
The system SHALL render a blog section with a heading and at least three post cards.

### `Footer`
The system SHALL render a footer with an About Me column, a Newsletter form, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/cantilever/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cantilever/public/CNAME` = `cantilever.free.componentdock.com`
  and the package `homepage` = `https://cantilever.free.componentdock.com`.
