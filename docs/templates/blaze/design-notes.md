# Blaze — Design Notes

Reference: **Colorlib Error 404 13** — `https://colorlib.com/wp/template/colorlib-error-404-13/`  
Live preview: `https://colorlib.com/etc/404/colorlib-error-404-13/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-error-404-13.jpg  
Shipped: https://blaze.free.componentdock.com

Blaze is a single-page 404 error page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Colorlib Error 404 V13" error page design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Chango**, **Montserrat**

## Design tokens (`apps/blaze/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e01818` | Blaze brand red — extracted from the reference design (css/style.css, brand color #e01818). |
| `--color-primary-50` | `#eef2ff` | primary 50 |
| `--color-primary-100` | `#e0e7ff` | primary 100 |
| `--color-primary-200` | `#c7d2fe` | primary 200 |
| `--color-primary-300` | `#a5b4fc` | primary 300 |
| `--color-primary-400` | `#818cf8` | primary 400 |
| `--color-primary-500` | `#6366f1` | primary 500 |
| `--color-primary-600` | `#4f46e5` | primary 600 |
| `--color-primary-700` | `#4338ca` | primary 700 |
| `--color-primary-800` | `#3730a3` | primary 800 |
| `--color-primary-900` | `#312e81` | primary 900 |
| `--color-primary-950` | `#1e1b4b` | primary 950 |
| `--font-display` | `'Chango', cursive` | font display |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `ErrorSection` | Error section with bold notification | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Blaze", a "Home" link, and a dark-mode toggle button.

### `ErrorSection`
The system SHALL render a centered error section with a red exclamation illustration, a bold "Error 404" headline, an explanatory message, and a red "Back to homepage" link pointing to the page root.

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
- **Provenance ban.** No file under `apps/blaze/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/blaze/public/CNAME` = `blaze.free.componentdock.com`
  and the package `homepage` = `https://blaze.free.componentdock.com`.
