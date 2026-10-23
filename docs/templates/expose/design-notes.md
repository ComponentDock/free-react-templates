# Expose — Design Notes

Reference: **Shutter** — `https://colorlib.com/wp/template/shutter/`  
Live preview: `https://preview.colorlib.com/theme/shutter/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/shutter-free-template.jpg  
Shipped: https://expose.free.componentdock.com

Expose is a single-page photographer-portfolio template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Quicksand**, **Quicksand:wght@300;400;500;700**

## Design tokens (`apps/expose/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ef6c57` | brand |
| `--color-ink` | `#000000` | ink |
| `--color-meta` | `#cccccc` | meta |
| `--color-menu-link` | `#212529` | menu link |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Right sidebar header | see fidelity note below |
| 2 | `MobileMenu` | Mobile header and slide-in menu | see fidelity note below |
| 3 | `PhotoGrid` | Photo grid | see fidelity note below |
| 4 | `Footer` | Footer credit | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The system SHALL render the fixed black right sidebar with logo, nav and social icons.

### `MobileMenu`
The system SHALL collapse the sidebar to a 70px top bar on mobile and open the menu from a slide-in panel.

### `PhotoGrid`
The system SHALL render the masonry photo grid with hover overlays.

### `Footer`
The system SHALL render the centered copyright row.

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
- **Provenance ban.** No file under `apps/expose/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/expose/public/CNAME` = `expose.free.componentdock.com`
  and the package `homepage` = `https://expose.free.componentdock.com`.
