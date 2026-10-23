# Haute — Design Notes

Reference: **Instylr** — `https://colorlib.com/wp/template/instylr/`  
Live preview: `https://preview.colorlib.com/theme/instylr/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/instylr-free-template.jpg  
Shipped: https://haute.free.componentdock.com

Haute is a single-page fashion template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Instylr" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/haute/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff006c` | brand |
| `--color-brand-deep` | `#d4005c` | brand deep |
| `--color-header` | `#262626` | header |
| `--color-ink` | `#081624` | ink |
| `--color-mist` | `#71767b` | mist |
| `--color-copyright` | `#888888` | copyright |
| `--color-rule` | `#e3e3e3` | rule |
| `--color-primary-50` | `#fff0f7` | primary 50 |
| `--color-primary-100` | `#ffd9eb` | primary 100 |
| `--color-primary-200` | `#ffb3d7` | primary 200 |
| `--color-primary-300` | `#ff80bd` | primary 300 |
| `--color-primary-400` | `#ff4d9f` | primary 400 |
| `--color-primary-500` | `#ff006c` | primary 500 |
| `--color-primary-600` | `#d4005c` | primary 600 |
| `--color-primary-700` | `#a8004a` | primary 700 |
| `--color-primary-800` | `#800039` | primary 800 |
| `--color-primary-900` | `#590028` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Welcome hero | see fidelity note below |
| 3 | `Intro` | Intro quote | see fidelity note below |
| 4 | `Portfolio` | Portfolio grid | see fidelity note below |
| 5 | `Blog` | — | no dedicated spec block |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Haute", the original nav links, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width photo hero section with a headline and a "Read More" button.

### `Intro`
The system SHALL render an intro section with a fashion quote.

### `Portfolio`
The system SHALL render a portfolio section with at least six tiles.

### `Blog`
*anchors only* — Recent Posts · Fashion, Event, Lifestyle

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
- **Provenance ban.** No file under `apps/haute/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/haute/public/CNAME` = `haute.free.componentdock.com`
  and the package `homepage` = `https://haute.free.componentdock.com`.
