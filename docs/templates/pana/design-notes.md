# Pana — Design Notes

Reference: **Tulen** — `https://colorlib.com/wp/template/tulen/`  
Live preview: `https://preview.colorlib.com/theme/tulen/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tulen-free-template.jpg  
Shipped: https://pana.free.componentdock.com

Pana is a photography portfolio single-page template featuring a dark-themed accordion-style hero gallery where five full-bleed images expand/collapse to reveal overlay text (category tag, title, author). The design uses Montserrat font, a vivid purple (#2916e0) accent, dark background (#0f0f0f), and an offcanvas sidebar menu.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/pana/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#2916e0` | brand |
| `--color-brand-dark` | `#1f10b0` | brand dark |
| `--color-brand-light` | `#4a3af0` | brand light |
| `--color-heading` | `#ffffff` | heading |
| `--color-body-text` | `#b2b2b2` | body text |
| `--color-surface` | `#0f0f0f` | surface |
| `--color-surface-dark` | `#000000` | surface dark |
| `--color-muted` | `#1a1a1a` | muted |
| `--color-border` | `#2a2a2a` | border |
| `--color-footer-bg` | `#0a0a0a` | footer bg |
| `--color-footer-text` | `#b2b2b2` | footer text |
| `--color-footer-link` | `#ffffff` | footer link |
| `--color-tag-bg` | `#ffffff` | tag bg |
| `--color-tag-text` | `#2916e0` | tag text |
| `--color-error` | `#e21010` | error |
| `--font-heading` | `'Montserrat', sans-serif` | font heading |
| `--font-body` | `'Montserrat', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `OffcanvasMenu` | Offcanvas sidebar menu | see fidelity note below |
| 2 | `HeroAccordion` | Hero accordion gallery | see fidelity note below |
| 3 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `OffcanvasMenu`
The template SHALL display a sidebar menu triggered by a hamburger icon in the top-left corner. The menu contains the brand logo, navigation links (Home, About, Gallery, Blog, Contact), social icon links, and a close button.

### `HeroAccordion`
The template SHALL display a full-bleed hero section with 5 photo items arranged as an accordion. Each item shows a background image. When expanded, the item reveals an overlay with a category tag, a title, and an author block (avatar + name).

### `Footer`
The template SHALL display a dark footer with copyright text and a "Component Dock" link pointing to https://www.componentdock.com/ that opens in a new tab.

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
- **Provenance ban.** No file under `apps/pana/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pana/public/CNAME` = `pana.free.componentdock.com`
  and the package `homepage` = `https://pana.free.componentdock.com`.
