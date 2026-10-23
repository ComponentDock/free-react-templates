# Sky — Design Notes

Reference: **Colorlib Error 404 2** — `https://colorlib.com/wp/template/colorlib-error-404-2/`  
Live preview: `https://colorlib.com/etc/404/colorlib-error-404-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-error-404-2.jpg  
Shipped: https://sky.free.componentdock.com

Sky is a single-page 404 error page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Colorlib Error 404 V2" error page design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;700**

## Design tokens (`apps/sky/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00b7ff` | brand |
| `--color-primary-50` | `#f0f9ff` | primary 50 |
| `--color-primary-100` | `#e0f2fe` | primary 100 |
| `--color-primary-200` | `#bae6fd` | primary 200 |
| `--color-primary-300` | `#7dd3fc` | primary 300 |
| `--color-primary-400` | `#38bdf8` | primary 400 |
| `--color-primary-500` | `#0ea5e9` | primary 500 |
| `--color-primary-600` | `#0284c7` | primary 600 |
| `--color-primary-700` | `#0369a1` | primary 700 |
| `--color-primary-800` | `#075985` | primary 800 |
| `--color-primary-900` | `#0c4a6e` | primary 900 |
| `--color-primary-950` | `#082f49` | primary 950 |
| `--font-display` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `ErrorSection` | Error section with blue-zero display and search form | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Sky", a "Home" link, and a dark-mode toggle button.

### `ErrorSection`
The system SHALL render a centered white card with a giant "404" heading whose middle digit is brand blue, an uppercase "the page you requested could not found" message, and a pill search form with a circular search button.

### `Footer`
The system SHALL render a minimal footer with the site name, a short tagline, and social links.

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
- **Provenance ban.** No file under `apps/sky/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sky/public/CNAME` = `sky.free.componentdock.com`
  and the package `homepage` = `https://sky.free.componentdock.com`.
