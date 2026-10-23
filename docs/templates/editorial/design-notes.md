# Editorial — Design Notes

Reference: **Megazine** — `https://colorlib.com/wp/template/megazine/`  
Live preview: `https://preview.colorlib.com/theme/megazine/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/megazine-free-template.jpg  
Shipped: https://editorial.free.componentdock.com

Editorial is a magazine and blog template with a fixed sidebar navigation, a full-viewport hero slider, an asymmetric post grid and pagination. It recreates the ColorLib **Megazine** design (https://colorlib.com/wp/template/megazine/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/editorial/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f75940` | brand |
| `--color-brand-dark` | `#d94a35` | brand dark |
| `--color-surface` | `#ffffff` | surface |
| `--color-surface-dark` | `#111827` | surface dark |
| `--color-text` | `#000000` | text |
| `--color-text-light` | `rgba(0, 0, 0, 0.6)` | text light |
| `--color-text-lighter` | `rgba(0, 0, 0, 0.7)` | text lighter |
| `--color-text-muted` | `#b3b3b3` | text muted |
| `--color-sidebar-bg` | `#ffffff` | sidebar bg |
| `--color-overlay` | `rgba(0, 0, 0, 0.45)` | overlay |
| `--font-sans` | `'Montserrat', Arial, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar with navigation | see fidelity note below |
| 2 | `HeroSlider` | Hero image slider | see fidelity note below |
| 3 | `BlogGrid` | Blog post grid | see fidelity note below |
| 4 | `Pagination` | Pagination | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The template SHALL render a fixed left sidebar containing a logo ("Editorial"), seven navigation links (Home, Style, Fashion, Travel, Sports, Video, Archives), and a footer with copyright text linking to Component Dock and social media icons.

### `HeroSlider`
The template SHALL render a full-viewport hero section that auto-advances through slides every 5 seconds, with dot indicators for manual navigation.

### `BlogGrid`
The template SHALL render an asymmetric grid of blog post cards, each with a background image, dark overlay, category tag, title, and description.

### `Pagination`
The template SHALL render a pagination component with numbered page buttons and previous/next arrows.

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
- **Provenance ban.** No file under `apps/editorial/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/editorial/public/CNAME` = `editorial.free.componentdock.com`
  and the package `homepage` = `https://editorial.free.componentdock.com`.
