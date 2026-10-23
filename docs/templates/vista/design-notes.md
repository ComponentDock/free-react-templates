# Vista — Design Notes

Reference: **Colorlib Error 404 11** — `https://colorlib.com/wp/template/colorlib-error-404-11/`  
Live preview: `https://colorlib.com/etc/404/colorlib-error-404-11/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-error-404-11.jpg  
Shipped: https://vista.free.componentdock.com

Vista is a single-page 404 error page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Colorlib Error 404 V11" error page design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@400;700**, **Passion One**

## Design tokens (`apps/vista/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#222225` | brand |
| `--color-accent` | `#ff00b4` | accent |
| `--font-display` | `'Passion One', cursive` | font display |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |
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

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `ErrorSection` | Error section with image background | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Vista", a "Home" link, and a dark-mode toggle button.

### `ErrorSection`
The system SHALL render a full-viewport error section with a scenic background image (decorative, with a dark overlay) and a translucent glass content box containing a large "404" heading, an "Oops! Page Not Found" subheading, a search bar, social media icon links, and a "Back to homepage" link pointing to the page root.

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
- **Provenance ban.** No file under `apps/vista/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vista/public/CNAME` = `vista.free.componentdock.com`
  and the package `homepage` = `https://vista.free.componentdock.com`.
