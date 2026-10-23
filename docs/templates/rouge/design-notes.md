# Rouge — Design Notes

Reference: **Diva** — `https://colorlib.com/wp/template/diva/`  
Live preview: `https://preview.colorlib.com/theme/diva/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/diva-free-template.jpg  
Shipped: https://rouge.free.componentdock.com

Rouge is a single-page beauty-salon landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Diva" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@400;500;600;700**

## Design tokens (`apps/rouge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-rouge-50` | `#fef2f6` | rouge 50 |
| `--color-rouge-100` | `#fde5ee` | rouge 100 |
| `--color-rouge-200` | `#fbcbdc` | rouge 200 |
| `--color-rouge-300` | `#f8a1bf` | rouge 300 |
| `--color-rouge-400` | `#f36d99` | rouge 400 |
| `--color-rouge-500` | `#ea4278` | rouge 500 |
| `--color-rouge-600` | `#e22b63` | rouge 600 |
| `--color-rouge-700` | `#c11c4f` | rouge 700 |
| `--color-rouge-800` | `#a11b45` | rouge 800 |
| `--color-rouge-900` | `#861b3e` | rouge 900 |
| `--color-primary-50` | `#fef2f6` | primary 50 |
| `--color-primary-100` | `#fde5ee` | primary 100 |
| `--color-primary-200` | `#fbcbdc` | primary 200 |
| `--color-primary-300` | `#f8a1bf` | primary 300 |
| `--color-primary-400` | `#f36d99` | primary 400 |
| `--color-primary-500` | `#ea4278` | primary 500 |
| `--color-primary-600` | `#e22b63` | primary 600 |
| `--color-primary-700` | `#c11c4f` | primary 700 |
| `--color-primary-800` | `#a11b45` | primary 800 |
| `--color-primary-900` | `#861b3e` | primary 900 |
| `--color-ink` | `#1e1e1e` | Ink — dark text (#1e1e1e / #4a4a4a from the original). |
| `--font-sans` | `'Jost', 'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Intro` | Intro section with stats | see fidelity note below |
| 4 | `Services` | Services grid | see fidelity note below |
| 5 | `Testimonials` | Testimonials | see fidelity note below |
| 6 | `Brands` | — | no dedicated spec block |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Rouge", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline, and call-to-action buttons.

### `Intro`
The system SHALL render an intro section with a heading, supporting copy, and stat counters.

### `Services`
The system SHALL render a "Our Services" section with at least six service cards.

### `Testimonials`
The system SHALL render a testimonials section with a heading, a quote, and an author.

### `Brands`
*anchors only* — Brands

### `Footer`
The system SHALL render a footer with the site name, quick links, an appointment form, and social links.

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
- **Provenance ban.** No file under `apps/rouge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rouge/public/CNAME` = `rouge.free.componentdock.com`
  and the package `homepage` = `https://rouge.free.componentdock.com`.
