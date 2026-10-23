# Panelbar — Design Notes

Reference: **Bootstrap Sidebar 04** — `https://colorlib.com/wp/template/bootstrap-sidebar-04/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-sidebar-04/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170630.jpg  
Shipped: https://panelbar.free.componentdock.com

Recreation of ColorLib Bootstrap Sidebar 04 as a React template named "Panelbar". A fixed left sidebar with a blue brand bar, icon-enhanced navigation links, hamburger toggle, and a clean white content area.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;700**

## Design tokens (`apps/panelbar/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sidebar-bg` | `#212121` | sidebar bg |
| `--color-brand` | `#2f89fc` | brand |
| `--color-brand-hover` | `#1a7aef` | brand hover |
| `--color-sidebar-text` | `#ffffff` | sidebar text |
| `--color-sidebar-link` | `rgba(255, 255, 255, 0.6)` | sidebar link |
| `--color-sidebar-active` | `#ffffff` | sidebar active |
| `--color-page-bg` | `#ffffff` | page bg |
| `--color-heading-text` | `#212529` | heading text |
| `--color-body-text` | `#495057` | body text |
| `--font-family-body` | `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font family body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar layout | see fidelity note below |
| 2 | `MainContent` | Main content | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The template SHALL render a fixed left sidebar (250px wide) with a dark background (#212121) and a main content area to its right.

### `MainContent`
The main content area SHALL display a heading "Sidebar #04" followed by two paragraphs of descriptive text on a white background.

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
- **Provenance ban.** No file under `apps/panelbar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/panelbar/public/CNAME` = `panelbar.free.componentdock.com`
  and the package `homepage` = `https://panelbar.free.componentdock.com`.
