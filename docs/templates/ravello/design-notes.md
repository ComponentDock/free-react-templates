# Ravello — Design Notes

Reference: **Carousel 09** — `https://colorlib.com/wp/template/carousel-09/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/carousel-09/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-09.jpg  
Shipped: https://ravello.free.componentdock.com

Ravello is a single-section full-bleed image carousel template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/ravello/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff5959` | brand |
| `--color-brand-dark` | `#e04848` | brand dark |
| `--color-ink` | `#212529` | ink |
| `--color-ink-light` | `#495057` | ink light |
| `--font-family-sans` | `'Poppins', Arial, sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Carousel` | Carousel behavior | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Carousel`
The system SHALL display exactly one slide per view at every breakpoint (1/1/1); it SHALL loop; slide changes SHALL cross-fade; autoplay SHALL advance every ~5 seconds without pausing on hover.

### `Footer`
The source demo has no footer, but the monorepo mandate requires every template's footer to link https://www.componentdock.com/ ("Component Dock"). The system SHALL render a minimal footer with that link.

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
- **Provenance ban.** No file under `apps/ravello/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ravello/public/CNAME` = `ravello.free.componentdock.com`
  and the package `homepage` = `https://ravello.free.componentdock.com`.
