# Showkit — Design Notes

Reference: **Susan** — `https://colorlib.com/wp/template/susan/`  
Live preview: `https://preview.colorlib.com/theme/susan/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/susan-free-app-showcase-website-template.jpg  
Shipped: https://showkit.free.componentdock.com

Showkit is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "SuSan" website template design (see TEMPLATES.md), built under a **different name** with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;600;700**, **Open Sans**

## Design tokens (`apps/showkit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fef2f4` | primary 50 |
| `--color-primary-100` | `#fde3e8` | primary 100 |
| `--color-primary-200` | `#fbcbd5` | primary 200 |
| `--color-primary-300` | `#f8a3b5` | primary 300 |
| `--color-primary-400` | `#f56482` | primary 400 |
| `--color-primary-500` | `#f8395d` | primary 500 |
| `--color-primary-600` | `#e0214a` | primary 600 |
| `--color-primary-700` | `#bd1a3e` | primary 700 |
| `--color-primary-800` | `#9c1a37` | primary 800 |
| `--color-primary-900` | `#841a33` | primary 900 |
| `--color-grape-400` | `#b95ee0` | Purple gradient partner (ColorLib #a640d0). |
| `--color-grape-500` | `#a640d0` | grape 500 |
| `--color-grape-600` | `#8b2fb3` | grape 600 |
| `--color-grape-700` | `#732795` | grape 700 |
| `--color-ink` | `#191919` | Dark ink (ColorLib #191919) + muted caption (ColorLib #4f4f4f). |
| `--color-caption` | `#4f4f4f` | caption |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `HomeDemos` | Home onepage demos section | see fidelity note below |
| 4 | `BlogDemos` | Blog page demos section | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Showkit" and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width gradient hero with a headline, a tagline, a blurb, and two buttons.

### `HomeDemos`
The system SHALL render a home onepage demo showcase with two demo cards.

### `BlogDemos`
The system SHALL render a blog demo showcase with four demo cards.

### `Footer`
The system SHALL render a footer with a copyright line.

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
- **Provenance ban.** No file under `apps/showkit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/showkit/public/CNAME` = `showkit.free.componentdock.com`
  and the package `homepage` = `https://showkit.free.componentdock.com`.
