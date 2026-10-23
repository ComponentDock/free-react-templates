# Gable — Design Notes

Reference: **Kd** — `https://colorlib.com/wp/template/kd/`  
Live preview: `https://preview.colorlib.com/theme/kd/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/kd-free-template.jpg  
Shipped: https://gable.free.componentdock.com

Gable is a single-page architecture landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Kd" website template design (source: https://colorlib.com/wp/template/kd/), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**, **Work Sans**

## Design tokens (`apps/gable/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ccb78f` | brand |
| `--color-brand-dark` | `#b59a68` | Deeper gold for hover states. |
| `--color-ink` | `#212529` | Ink — headings and dark text (#212529 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa from the original). |
| `--color-coal` | `#000000` | Coal — dark footer/hero background (#000000 from the original). |
| `--color-primary-50` | `#faf6ef` | primary 50 |
| `--color-primary-100` | `#f3ead9` | primary 100 |
| `--color-primary-200` | `#e6d4b1` | primary 200 |
| `--color-primary-300` | `#ccb78f` | primary 300 |
| `--color-primary-400` | `#c0a474` | primary 400 |
| `--color-primary-500` | `#b28f58` | primary 500 |
| `--color-primary-600` | `#a17b49` | primary 600 |
| `--color-primary-700` | `#86633e` | primary 700 |
| `--color-primary-800` | `#6e5037` | primary 800 |
| `--color-primary-900` | `#5a432f` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Work Sans" (display) + "Poppins" (body). |
| `--font-display` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Projects` | Projects section | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Gable", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and supporting copy.

### `About`
The system SHALL render an about section with a heading, stat counters, and at least three feature cards.

### `Projects`
The system SHALL render a projects section with a project gallery and a "View All Projects" button.

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
- **Provenance ban.** No file under `apps/gable/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gable/public/CNAME` = `gable.free.componentdock.com`
  and the package `homepage` = `https://gable.free.componentdock.com`.
