# Sidegate — Design Notes

Reference: **Colorlib Sidebar V08** — `https://colorlib.com/wp/template/colorlib-sidebar-v08/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-sidebar-v08/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-sidebar-v08.jpg  
Shipped: https://sidegate.free.componentdock.com

Sidegate is a sidebar navigation layout. It recreates the ColorLib **Colorlib Sidebar V08** design (https://colorlib.com/wp/template/colorlib-sidebar-v08/, preview: https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v08/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/sidegate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sidebar-bg` | `#ffffff` | sidebar bg |
| `--color-sidebar-text` | `#555555` | sidebar text |
| `--color-sidebar-hover` | `#f8f9fa` | sidebar hover |
| `--color-accent` | `#6c757d` | accent |
| `--color-accent-hover` | `#5a6268` | accent hover |
| `--color-content-bg` | `#f5f5f5` | content bg |
| `--color-card-bg` | `#ffffff` | card bg |
| `--color-body-text` | `#333333` | body text |
| `--color-secondary-text` | `#999999` | secondary text |
| `--color-heading-text` | `#222222` | heading text |
| `--color-border` | `#e9ecef` | border |
| `--font-family-body` | `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font family body |

> The spec has no section-level requirements; the order below is read from `apps/sidegate/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | — | no dedicated spec block |
| 2 | `PostCard` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Sidebar`
*anchors only* — Close sidebar · Open sidebar · Sidebar navigation

### `PostCard`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

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
- **Provenance ban.** No file under `apps/sidegate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sidegate/public/CNAME` = `sidegate.free.componentdock.com`
  and the package `homepage` = `https://sidegate.free.componentdock.com`.
