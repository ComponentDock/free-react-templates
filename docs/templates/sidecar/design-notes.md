# Sidecar — Design Notes

Reference: **Colorlib Sidebar V09** — `https://colorlib.com/wp/template/colorlib-sidebar-v09/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-sidebar-v09/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-sidebar-v09.jpg  
Shipped: https://sidecar.free.componentdock.com

Recreation of ColorLib **Sidebar V09** — a right-hand sliding shopping bag sidebar with a blog-post grid as the main content area. The sidebar opens from the header bag counter, showing product thumbnails, prices, remove links, subtotal, and a Checkout button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/sidecar/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1a73e8` | brand |
| `--color-brand-hover` | `#1464cc` | brand hover |
| `--color-text-primary` | `#26282b` | text primary |
| `--color-text-secondary` | `#6b7280` | text secondary |
| `--color-border` | `#e0e0e0` | border |
| `--color-page-bg` | `#ffffff` | page bg |
| `--color-sidebar-bg` | `#ffffff` | sidebar bg |
| `--color-card-bg` | `#ffffff` | card bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header bag counter | see fidelity note below |
| 2 | `BlogGrid` | Blog post grid | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |
| 4 | `CartSidebar` | Shopping bag sidebar | see fidelity note below |

## Section-by-section fidelity

### `Header`
The page header SHALL display a shopping bag icon with the item count and total price ("$150 / 3 items"), right-aligned.

### `BlogGrid`
The main content area SHALL display a 2-column grid of blog post cards, each with a circular author avatar, post title, and date.

### `Footer`
The template SHALL include a footer linking to https://www.componentdock.com/ branded as "Component Dock".

### `CartSidebar`
The sidebar SHALL slide in from the right, showing the heading "YOUR BAG", a list of products, subtotal, and checkout button.

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
- **Provenance ban.** No file under `apps/sidecar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sidecar/public/CNAME` = `sidecar.free.componentdock.com`
  and the package `homepage` = `https://sidecar.free.componentdock.com`.
