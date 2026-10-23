# Dashlet — Design Notes

Reference: **Colorlib Sidebar V05** — `https://colorlib.com/wp/template/colorlib-sidebar-v05/`  
Live preview: `https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v05/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-sidebar-v05.jpg  
Shipped: https://dashlet.free.componentdock.com

A left-sidebar navigation template with a content grid. The sidebar contains branding, navigation links, and a "Featured Users" section with avatar cards. The main content area shows article cards in a 2-column grid.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter:wght@400;500;600;700**

## Design tokens (`apps/dashlet/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1a73e8` | brand |
| `--color-brand-dark` | `#1464cc` | brand dark |
| `--color-sidebar-bg` | `#ffffff` | sidebar bg |
| `--color-content-bg` | `#f5f5f5` | content bg |
| `--color-text-primary` | `#26282b` | text primary |
| `--color-text-secondary` | `#777777` | text secondary |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar navigation | see fidelity note below |
| 2 | `ArticleGrid` | Article grid | see fidelity note below |
| 3 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The sidebar SHALL display a logo circle with the initial letter "D", navigation links (Home, Videos, Books, Store), and highlight the active link with a blue left border.

### `ArticleGrid`
The main content area SHALL display 8 article cards in a 2-column responsive grid. Each card SHALL contain a thumbnail image, a title, and a posted date.

### `Footer`
The page footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/dashlet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dashlet/public/CNAME` = `dashlet.free.componentdock.com`
  and the package `homepage` = `https://dashlet.free.componentdock.com`.
