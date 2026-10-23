# Sidepane — Design Notes

Reference: **Colorlib Sidebar V06** — `https://colorlib.com/wp/template/colorlib-sidebar-v06/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-sidebar-v06/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-sidebar-v06.jpg  
Shipped: https://sidepane.free.componentdock.com

A sidebar navigation template with a branded logo, search input, icon-based nav menu, and a two-column blog post grid in the main content area. Recreation of ColorLib Sidebar V06.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter:wght@400;500;600;700**

## Design tokens (`apps/sidepane/src/index.css` `@theme`)

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
| 1 | `Sidebar` | Sidebar rendering | see fidelity note below |
| 2 | `ArticleGrid` | — | no dedicated spec block |
| 3 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Sidebar`
The template SHALL render a fixed left sidebar with a white background, containing a logo, search input, and navigation menu.

### `ArticleGrid`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
The template SHALL render a footer that links to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/sidepane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sidepane/public/CNAME` = `sidepane.free.componentdock.com`
  and the package `homepage` = `https://sidepane.free.componentdock.com`.
