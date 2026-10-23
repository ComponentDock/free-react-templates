# Flick — Design Notes

Reference: **Colorlib Error 404 15** — `https://colorlib.com/wp/template/colorlib-error-404-15/`  
Live preview: `https://colorlib.com/etc/404/colorlib-error-404-15/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-error-404-15.jpg  
Shipped: https://flick.free.componentdock.com

Flick is a single-page 404 error page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Colorlib Error 404 V15" error page design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Fredoka**, **Fredoka:wght@500;600;700**, **Nunito Sans**

## Design tokens (`apps/flick/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8b5cf6` | brand |
| `--color-primary-50` | `#f5f3ff` | primary 50 |
| `--color-primary-100` | `#ede9fe` | primary 100 |
| `--color-primary-200` | `#ddd6fe` | primary 200 |
| `--color-primary-300` | `#c4b5fd` | primary 300 |
| `--color-primary-400` | `#a78bfa` | primary 400 |
| `--color-primary-500` | `#8b5cf6` | primary 500 |
| `--color-primary-600` | `#7c3aed` | primary 600 |
| `--color-primary-700` | `#6d28d9` | primary 700 |
| `--color-primary-800` | `#5b21b6` | primary 800 |
| `--color-primary-900` | `#4c1d95` | primary 900 |
| `--color-primary-950` | `#2e1065` | primary 950 |
| `--font-display` | `'Fredoka', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `ErrorSection` | Error section with animated illustration | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Flick", a "Home" link, and a dark-mode toggle button.

### `ErrorSection`
The system SHALL render a centered error section with an animated illustration, a large "404" heading, a "Page not found" subheading, a short explanatory message, a "Back to home" button that links to the page root, and social icon links.

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
- **Provenance ban.** No file under `apps/flick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/flick/public/CNAME` = `flick.free.componentdock.com`
  and the package `homepage` = `https://flick.free.componentdock.com`.
