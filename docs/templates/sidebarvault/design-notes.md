# Sidebarvault — Design Notes

Reference: **Colorlib Sidebar V01** — `https://colorlib.com/wp/template/colorlib-sidebar-v01/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-sidebar-v01/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-sidebar-v01.jpg  
Shipped: https://sidebarvault.free.componentdock.com

A social-media-style sidebar navigation template with a profile panel, stats, icon-based nav, and a blog post grid. Recreation of ColorLib Sidebar V01. Source: https://colorlib.com/wp/template/colorlib-sidebar-v01/ Preview: https://preview.colorlib.com/theme/colorlib-sidebar-v01/

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/sidebarvault/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sidebar-bg` | `#ffffff` | sidebar bg |
| `--color-sidebar-text` | `#333333` | sidebar text |
| `--color-sidebar-hover` | `#f0f0f0` | sidebar hover |
| `--color-accent` | `#e74c3c` | accent |
| `--color-accent-hover` | `#c0392b` | accent hover |
| `--color-content-bg` | `#f5f5f5` | content bg |
| `--color-card-bg` | `#ffffff` | card bg |
| `--color-body-text` | `#333333` | body text |
| `--color-secondary-text` | `#999999` | secondary text |
| `--color-heading-text` | `#222222` | heading text |
| `--color-border` | `#e0e0e0` | border |
| `--font-family-body` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font family body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar profile section | see fidelity note below |
| 2 | `PostCard` | Post grid | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The sidebar SHALL display a circular profile photo, user name, and location.

### `PostCard`
The main content area SHALL display blog post cards in a responsive 2-column grid.

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
- **Provenance ban.** No file under `apps/sidebarvault/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sidebarvault/public/CNAME` = `sidebarvault.free.componentdock.com`
  and the package `homepage` = `https://sidebarvault.free.componentdock.com`.
