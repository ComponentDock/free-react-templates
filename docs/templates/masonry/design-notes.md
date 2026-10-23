# Masonry — Design Notes

Reference: **Astral** — `https://colorlib.com/wp/template/astral/`  
Live preview: `https://preview.colorlib.com/theme/astral/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/astral-free-template.jpg  
Shipped: https://masonry.free.componentdock.com

Masonry is a single-page architecture landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Astral" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/masonry/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f9cc41` | brand |
| `--color-brand-dark` | `#f8b600` | Deeper yellow for hover states (#f8b600 from the original). |
| `--color-ink` | `#222222` | Ink — headings and dark text (#222222 from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff from the original). |
| `--color-coal` | `#000410` | Coal — footer background (#000410 from the original stylesheet). |
| `--color-aqua` | `#4cd3e3` | Accents used sparingly in the original (#4cd3e3 cyan, #38a4ff blue). |
| `--color-sky-blue` | `#38a4ff` | sky blue |
| `--color-primary-50` | `#fef9e8` | primary 50 |
| `--color-primary-100` | `#fdf0c2` | primary 100 |
| `--color-primary-200` | `#fbdf85` | primary 200 |
| `--color-primary-300` | `#f9cc41` | primary 300 |
| `--color-primary-400` | `#f2b51d` | primary 400 |
| `--color-primary-500` | `#d99410` | primary 500 |
| `--color-primary-600` | `#b3720c` | primary 600 |
| `--color-primary-700` | `#8f530e` | primary 700 |
| `--color-primary-800` | `#774212` | primary 800 |
| `--color-primary-900` | `#663714` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Oswald" (display) + "Roboto" (body). |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Portfolio` | Portfolio section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Contact` | Contact section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Masonry", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and a "Get Started" button.

### `About`
The system SHALL render an about section with a heading and fact boxes.

### `Services`
The system SHALL render a services section with a heading and at least three service cards.

### `Portfolio`
The system SHALL render a portfolio section with a heading and a project gallery.

### `Testimonials`
The system SHALL render a testimonials section with a quote slider.

### `Contact`
The system SHALL render a contact section with a heading and contact info.

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
- **Provenance ban.** No file under `apps/masonry/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/masonry/public/CNAME` = `masonry.free.componentdock.com`
  and the package `homepage` = `https://masonry.free.componentdock.com`.
