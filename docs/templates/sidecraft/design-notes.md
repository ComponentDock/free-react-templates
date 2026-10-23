# Sidecraft — Design Notes

Reference: **Bootstrap Sidebar 02** — `https://colorlib.com/wp/template/bootstrap-sidebar-02/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-sidebar-02/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170618.jpg  
Shipped: https://sidecraft.free.componentdock.com

A Sidebar Navigation template with hamburger and main sections. Recreation of ColorLib **Bootstrap Sidebar 02** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/sidecraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sidebar-bg` | `#6c4ab6` | sidebar bg |
| `--color-sidebar-text` | `#ffffff` | sidebar text |
| `--color-sidebar-hover` | `#5a3da0` | sidebar hover |
| `--color-page-bg` | `#f5f5f5` | page bg |
| `--color-heading-text` | `#333333` | heading text |
| `--color-body-text` | `#555555` | body text |
| `--color-accent` | `#6c4ab6` | accent |
| `--color-accent-hover` | `#5a3da0` | accent hover |
| `--font-family-body` | `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font family body |

> The spec has no section-level requirements; the order below is read from `apps/sidecraft/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | — | no dedicated spec block |
| 2 | `MainContent` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Sidebar`
*anchors only* — Sidebar navigation · Email address for newsletter · Toggle sidebar

### `MainContent`
*anchors only* — Sidebar #02

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
- **Provenance ban.** No file under `apps/sidecraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sidecraft/public/CNAME` = `sidecraft.free.componentdock.com`
  and the package `homepage` = `https://sidecraft.free.componentdock.com`.
