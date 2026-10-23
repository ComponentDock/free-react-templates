# Nova — Design Notes

Reference: **Colorlib Error 404 19** — `https://colorlib.com/wp/template/colorlib-error-404-19/`  
Live preview: `https://colorlib.com/etc/404/colorlib-error-404-19/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-error-404-19.jpg  
Shipped: https://nova.free.componentdock.com

Nova is a single-page 404 error page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Colorlib Error 404 V19" error page design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Kanit**, **Kanit:wght@200;400**

## Design tokens (`apps/nova/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff6f68` | brand |
| `--color-flame` | `#ffa34f` | flame |
| `--font-sans` | `'Kanit', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `ErrorSection` | Error section with gradient 404 | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Nova", a "Home" link, and a dark-mode toggle button.

### `ErrorSection`
The system SHALL render a centered error section with a large gradient "404" heading, an "Oops! Nothing was found" subheading, a short explanatory message, and a "Return to homepage" link to the page root.

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
- **Provenance ban.** No file under `apps/nova/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nova/public/CNAME` = `nova.free.componentdock.com`
  and the package `homepage` = `https://nova.free.componentdock.com`.
