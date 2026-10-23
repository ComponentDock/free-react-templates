# Mentory — Design Notes

Reference: **Tutor** — `https://colorlib.com/wp/template/tutor/`  
Live preview: `https://preview.colorlib.com/theme/tutor/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tutor-free-template.jpg  
Shipped: https://mentory.free.componentdock.com

Mentory is a single-page education/tutorial template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@300;400;700;900**

## Design tokens (`apps/mentory/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0779e4` | Brand palette — primary blue of the tutorial-hub design. |
| `--color-brand-dark` | `#0665bf` | brand dark |
| `--color-body` | `#364d59` | body |
| `--color-meta` | `#a6a6a6` | meta |
| `--color-light` | `#f8f9fa` | light |
| `--color-control` | `#efefef` | control |
| `--color-control-focus` | `#e2e2e2` | control focus |
| `--color-star` | `#ffc107` | star |
| `--color-footer-link` | `rgba(0, 0, 0, 0.5)` | footer link |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | Raleway (300/400/700/900) loaded via Google Fonts in index.html. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Transparent navbar over the hero | see fidelity note below |
| 2 | `Hero` | Transparent navbar over the hero | see fidelity note below |
| 3 | `Featured` | Featured tutorials overlapping the hero | see fidelity note below |
| 4 | `ChooseCourse` | Choose Course tiles | see fidelity note below |
| 5 | `Tutorials` | Featured tutorials overlapping the hero | see fidelity note below |
| 6 | `Reviews` | Student Reviews testimonials | see fidelity note below |
| 7 | `Footer` | Light footer with link columns | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render an absolute transparent navbar over the hero with a text logo, white nav links and a mobile off-canvas menu.

### `Hero`
The system SHALL render an absolute transparent navbar over the hero with a text logo, white nav links and a mobile off-canvas menu.

### `Featured`
The system SHALL render a light-grey featured band whose white cards overlap the hero's bottom edge.

### `ChooseCourse`
The system SHALL render six brand-icon course tiles in a heading-led white section.

### `Tutorials`
The system SHALL render a light-grey featured band whose white cards overlap the hero's bottom edge.

### `Reviews`
The system SHALL render three testimonial cards with star ratings, quotes and author avatars.

### `Footer`
The system SHALL render a light footer with an about column, social circles, four link columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/mentory/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mentory/public/CNAME` = `mentory.free.componentdock.com`
  and the package `homepage` = `https://mentory.free.componentdock.com`.
