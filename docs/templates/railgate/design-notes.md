# Railgate — Design Notes

Reference: **Bootstrap Sidebar 09** — `https://colorlib.com/wp/template/bootstrap-sidebar-09/`  
Live preview: `https://colorlib.com/etc/bootstrap-sidebar/sidebar-09/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170718.jpg  
Shipped: https://railgate.free.componentdock.com

Railgate is a sidebar navigation template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Bootstrap Sidebar 09" free template (source: https://colorlib.com/wp/template/bootstrap-sidebar-09/), built under a DIFFERENT name (**Railgate**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + T…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;700**

## Design tokens (`apps/railgate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sidebar-bg` | `#32373d` | sidebar bg |
| `--color-accent` | `#2f89fc` | accent |
| `--color-accent-hover` | `#0069d9` | accent hover |
| `--color-heading` | `#000000` | heading |
| `--color-body-text` | `#6c757d` | body text |
| `--color-page-bg` | `#ffffff` | page bg |
| `--color-sidebar-text` | `rgba(255, 255, 255, 0.6)` | sidebar text |
| `--color-sidebar-text-hover` | `#ffffff` | sidebar text hover |
| `--color-nav-border` | `rgba(255, 255, 255, 0.05)` | nav border |
| `--color-overlay` | `rgba(0, 0, 0, 0.3)` | overlay |
| `--color-badge` | `#dc3545` | badge |
| `--font-family-body` | `'Poppins', Arial, sans-serif` | font family body |

> The spec has no section-level requirements; the order below is read from `apps/railgate/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | — | no dedicated spec block |
| 2 | `MainContent` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Sidebar`
*anchors only* — Sidebar navigation · Alex Morgan

### `MainContent`
*anchors only* — Railgate · Component Dock

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
- **Provenance ban.** No file under `apps/railgate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/railgate/public/CNAME` = `railgate.free.componentdock.com`
  and the package `homepage` = `https://railgate.free.componentdock.com`.
