# Sidepanel — Design Notes

Reference: **Bootstrap Sidebar 01** — `https://colorlib.com/wp/template/bootstrap-sidebar-01/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-sidebar-01/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170612.jpg  
Shipped: https://sidepanel.free.componentdock.com

Sidepanel is a fixed-sidebar layout template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**

## Design tokens (`apps/sidepanel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sidebar-bg` | `#212529` | sidebar bg |
| `--color-sidebar-text` | `#ffffff` | sidebar text |
| `--color-sidebar-hover` | `#2c3034` | sidebar hover |
| `--color-accent` | `#f0ad4e` | accent |
| `--color-accent-hover` | `#ec971f` | accent hover |
| `--color-body-text` | `#666666` | body text |
| `--color-heading-text` | `#212529` | heading text |
| `--color-page-bg` | `#ffffff` | page bg |
| `--font-family-body` | `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font family body |

> The spec has no section-level requirements; the order below is read from `apps/sidepanel/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | — | no dedicated spec block |
| 2 | `Topbar` | — | no dedicated spec block |
| 3 | `MainContent` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Sidebar`
*anchors only* — Sidebar navigation · Toggle sidebar · Copyright &copy; 2024 All rights reserved · Component Dock

### `Topbar`
*anchors only* — Open sidebar menu · Top navigation

### `MainContent`
*anchors only* — SidePanel

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
- **Provenance ban.** No file under `apps/sidepanel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sidepanel/public/CNAME` = `sidepanel.free.componentdock.com`
  and the package `homepage` = `https://sidepanel.free.componentdock.com`.
