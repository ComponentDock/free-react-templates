# Paneline — Design Notes

Reference: **Bootstrap Sidebar 08** — `https://colorlib.com/wp/template/bootstrap-sidebar-08/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-sidebar-08/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170710.jpg  
Shipped: https://paneline.free.componentdock.com

Paneline is a sidebar navigation template featuring a right-aligned sidebar with collapsible product categories, a tag cloud, and a newsletter subscription form. The sidebar has a clean white design with pink accent color, designed for product catalogs and e-commerce dashboards.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/paneline/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sidebar-bg` | `#ffffff` | sidebar bg |
| `--color-sidebar-text` | `#000000` | sidebar text |
| `--color-sidebar-border` | `rgba(0, 0, 0, 0.05)` | sidebar border |
| `--color-page-bg` | `#ffffff` | page bg |
| `--color-heading-text` | `#000000` | heading text |
| `--color-body-text` | `#6c757d` | body text |
| `--color-accent` | `#fc7fb2` | accent |
| `--color-accent-hover` | `#e06a9e` | accent hover |
| `--color-tag-border` | `#cccccc` | tag border |
| `--font-family-body` | `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font family body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `MainContent` | Footer with Component Dock | see fidelity note below |
| 2 | `Sidebar` | — | no dedicated spec block |
| 3 | `Footer` | Footer with Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `MainContent`
The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

### `Sidebar`
*anchors only* — Toggle sidebar · Categories · Tag Cloud · Newsletter

### `Footer`
The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/paneline/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/paneline/public/CNAME` = `paneline.free.componentdock.com`
  and the package `homepage` = `https://paneline.free.componentdock.com`.
