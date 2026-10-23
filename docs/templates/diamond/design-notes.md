# Diamond — Design Notes

Reference: **Colorlib Error 404 9** — `https://colorlib.com/wp/template/colorlib-error-404-9/`  
Live preview: `https://colorlib.com/etc/404/colorlib-error-404-9/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-error-404-9.jpg  
Shipped: https://diamond.free.componentdock.com

Diamond is a single-page 404 error page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Colorlib Error 404 V9" error page design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cabin**, **Cabin:wght@400;700**

## Design tokens (`apps/diamond/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffa200` | brand |
| `--color-smoke` | `#8f8f8f` | Pill button gray — the "home page" link background (#8f8f8f). |
| `--color-charcoal` | `#2c2c2c` | Pill button hover — the darkened link background (#2c2c2c). |
| `--font-sans` | `'Cabin', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `ErrorSection` | Error section with amber diamond badge | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Diamond", a "Home" link, and a dark-mode toggle button.

### `ErrorSection`
The system SHALL render a centered error section on a light background with a diamond-shaped amber badge containing the "404" display, a "Page not found" label, an explanation paragraph, and a "Go to homepage" link to the page root.

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
- **Provenance ban.** No file under `apps/diamond/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/diamond/public/CNAME` = `diamond.free.componentdock.com`
  and the package `homepage` = `https://diamond.free.componentdock.com`.
