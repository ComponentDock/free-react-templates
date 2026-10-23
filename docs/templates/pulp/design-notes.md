# Pulp — Design Notes

Reference: **Erase** — `https://colorlib.com/wp/template/erase/`  
Live preview: `https://preview.colorlib.com/theme/erase/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/erase-free-template.jpg  
Shipped: https://pulp.free.componentdock.com

Pulp is a single-page magazine/fashion editorial template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Erase" design (see TEMPLATES.md — line 217, first unchecked item whose prep did not exist on main), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Abril Fatface**, **Poppins**

## Design tokens (`apps/pulp/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#69779b` | brand |
| `--color-gold` | `#f8b500` | gold |
| `--color-night` | `#212121` | night |
| `--color-cobalt` | `#064acb` | cobalt |
| `--color-ink` | `#000000` | ink |
| `--color-mist` | `#737373` | mist |
| `--color-fog` | `#f8f9fa` | fog |
| `--color-line` | `#e9ecef` | line |
| `--color-primary-50` | `#f2f4f8` | primary 50 |
| `--color-primary-100` | `#e0e4ec` | primary 100 |
| `--color-primary-200` | `#c2c9d9` | primary 200 |
| `--color-primary-300` | `#9aa5bf` | primary 300 |
| `--color-primary-400` | `#7c8aab` | primary 400 |
| `--color-primary-500` | `#69779b` | primary 500 |
| `--color-primary-600` | `#5a6788` | primary 600 |
| `--color-primary-700` | `#495471` | primary 700 |
| `--color-primary-800` | `#394158` | primary 800 |
| `--color-primary-900` | `#2a303f` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Abril Fatface', ui-serif, Georgia, serif` | font display |
| `--animate-hero-cycle` | `hero-cycle 20s ease-in-out infinite` | animate hero cycle |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header bar | see fidelity note below |
| 2 | `NavOverlay` | Fullscreen navigation overlay | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `EditorialList` | Editorial article list | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a transparent header fixed over the hero with a logo, a tagline, and the hamburger control.

### `NavOverlay`
The system SHALL render a fullscreen overlay menu opened from a hamburger control, with the site logo, primary links, and a close control.

### `Hero`
The system SHALL render a full-height hero with a giant image-filled wordmark and letter-spaced magazine labels.

### `EditorialList`
The system SHALL render an edge-to-edge list of alternating article rows, each with an image half and a text half containing an author chip, headline, excerpt, and read-more button.

### `Footer`
The system SHALL render a dark footer with brand, social links, recent blog entries, site links, and contact information.

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
- **Provenance ban.** No file under `apps/pulp/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pulp/public/CNAME` = `pulp.free.componentdock.com`
  and the package `homepage` = `https://pulp.free.componentdock.com`.
