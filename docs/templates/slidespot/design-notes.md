# Slidespot — Design Notes

Reference: **Carousel 06** — `https://colorlib.com/wp/template/carousel-06/`  
Live preview: `https://preview.colorlib.com/theme/carousel-06/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-06.jpg  
Shipped: https://slidespot.free.componentdock.com

Recreation of ColorLib "Carousel 06" (https://colorlib.com/wp/template/carousel-06/, live preview at https://preview.colorlib.com/theme/bootstrap/carousel-06/). A split-screen carousel template with gorgeous background imagery, text overlay, contact details, and primary CTA buttons.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/slidespot/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f43f5e` | brand |
| `--color-brand-dark` | `#e11d48` | brand dark |
| `--color-surface` | `#fff3f1` | surface |
| `--color-ink` | `#111827` | ink |
| `--color-ink-light` | `#1f2937` | ink light |
| `--font-family-sans` | `'Poppins', sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Carousel` | Interactive Split-Screen Carousel | see fidelity note below |
| 3 | `Footer` | Component Dock Footer Attribution | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — SlideSpot · Carousel · About · Contact

### `Carousel`
The carousel SHALL display split-screen slides with a background image on one side and text content on the other. Users SHALL be able to navigate between slides using Prev/Next arrows and pagination dots.

### `Footer`
The footer SHALL display a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/slidespot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/slidespot/public/CNAME` = `slidespot.free.componentdock.com`
  and the package `homepage` = `https://slidespot.free.componentdock.com`.
