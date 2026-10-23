# Pinnacle — Design Notes

Reference: **Sparsh** — `https://colorlib.com/wp/template/sparsh/`  
Live preview: `https://preview.colorlib.com/theme/sparsh/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sparsh-free-template.jpg  
Shipped: https://pinnacle.free.componentdock.com

Pinnacle is a single-page architecture studio landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Sparsh" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/pinnacle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f9cc41` | brand |
| `--color-brand-dark` | `#e2b62a` | brand dark |
| `--color-ink` | `#262533` | Ink — dark navy headings/buttons (#262533 from the original). |
| `--color-mist` | `#8f8f8f` | Mist — muted body text (#8f8f8f from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light section background (#f9f9ff from the original). |
| `--color-night` | `#262533` | Night — dark section background (#262533 hero/footer base). |
| `--color-primary-50` | `#fef9e7` | primary 50 |
| `--color-primary-100` | `#fdf0c4` | primary 100 |
| `--color-primary-200` | `#fbe28e` | primary 200 |
| `--color-primary-300` | `#f9d455` | primary 300 |
| `--color-primary-400` | `#f9cc41` | primary 400 |
| `--color-primary-500` | `#f0b91f` | primary 500 |
| `--color-primary-600` | `#d9a312` | primary 600 |
| `--color-primary-700` | `#b5840e` | primary 700 |
| `--color-primary-800` | `#8f680c` | primary 800 |
| `--color-primary-900` | `#6b4d09` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Overview` | Overview section | see fidelity note below |
| 5 | `Portfolio` | Portfolio section | see fidelity note below |
| 6 | `Estimate` | Estimate call to action | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Pinnacle", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero carousel with a headline and a "Details" button.

### `About`
The system SHALL render an about section with a heading, copy, and a "26 Years of Creativity" badge.

### `Overview`
The system SHALL render an overview section with four stat counters.

### `Portfolio`
The system SHALL render a portfolio section with project cards and a "Load More Projects" button.

### `Estimate`
The system SHALL render a yellow call-to-action band with a "Get Estimate" button.

### `Testimonials`
The system SHALL render a testimonials section with quote cards.

### `Footer`
The system SHALL render a footer with link columns, a newsletter form, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/pinnacle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pinnacle/public/CNAME` = `pinnacle.free.componentdock.com`
  and the package `homepage` = `https://pinnacle.free.componentdock.com`.
