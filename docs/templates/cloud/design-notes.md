# Cloud — Design Notes

Reference: **Colorlib Error 404 14** — `https://colorlib.com/wp/template/colorlib-error-404-14/`  
Live preview: `https://colorlib.com/etc/404/colorlib-error-404-14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-error-404-14.jpg  
Shipped: https://cloud.free.componentdock.com

Cloud is a single-page 404 error page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Colorlib Error 404 V14" error page design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Baloo 2**, **Baloo 2:wght@500;600;700**, **Nunito Sans**

## Design tokens (`apps/cloud/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0ea5e9` | brand |
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
| `--font-display` | `'Baloo 2', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `ErrorSection` | Error section with cloud illustration | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Cloud", a "Home" link, and a dark-mode toggle button.

### `ErrorSection`
The system SHALL render a centered error section with a cloud illustration, a large "404" heading, a "Page not found" subheading, a short explanatory message, a "Back to home" button that links to the page root, and social icon links.

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
- **Provenance ban.** No file under `apps/cloud/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cloud/public/CNAME` = `cloud.free.componentdock.com`
  and the package `homepage` = `https://cloud.free.componentdock.com`.
