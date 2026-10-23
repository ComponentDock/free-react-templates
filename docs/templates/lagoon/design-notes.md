# Lagoon — Design Notes

Reference: **Colorlib Error 404 17** — `https://colorlib.com/wp/template/colorlib-error-404-17/`  
Live preview: `https://colorlib.com/etc/404/colorlib-error-404-17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-error-404-17.jpg  
Shipped: https://lagoon.free.componentdock.com

Lagoon is a single-page 404 error page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Colorlib Error 404 V17" error page design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Passion One**, **Passion One:wght@400;700;900**, **Raleway**

## Design tokens (`apps/lagoon/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00b5c3` | brand |
| `--color-ink` | `#292929` | Text colors from the original stylesheet (css/style.css). |
| `--color-body` | `#333333` | body |
| `--font-display` | `'Passion One', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `ErrorSection` | Error section with teal emoticon | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Lagoon", a "Home" link, and a dark-mode toggle button.

### `ErrorSection`
The system SHALL render a centered error section with a teal `:(` emoticon display, an uppercase "404 - Page not found" heading, an explanatory paragraph, and a "home page" pill button linking to the page root with a teal hover state.

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
- **Provenance ban.** No file under `apps/lagoon/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lagoon/public/CNAME` = `lagoon.free.componentdock.com`
  and the package `homepage` = `https://lagoon.free.componentdock.com`.
