# Swipe — Design Notes

Reference: **Carousel 08** — `https://colorlib.com/wp/template/carousel-08/`  
Live preview: `https://preview.colorlib.com/theme/carousel-08/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-08.jpg  
Shipped: https://swipe.free.componentdock.com

Swipe is a single-section testimonials carousel page in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Carousel 08" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700**, **Poppins**

## Design tokens (`apps/swipe/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#dbcc8f` | brand |
| `--color-brand-dark` | `#c4b67a` | brand dark |
| `--font-family-sans` | `'Poppins', sans-serif` | font family sans |
| `--font-family-serif` | `'Playfair Display', serif` | font family serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TestimonialCarousel` | Carousel displays testimonial cards | see fidelity note below |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TestimonialCarousel`
The carousel SHALL display testimonial slides in a 50/50 split layout.

### `Footer`
*anchors only* — Component Dock

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
- **Provenance ban.** No file under `apps/swipe/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/swipe/public/CNAME` = `swipe.free.componentdock.com`
  and the package `homepage` = `https://swipe.free.componentdock.com`.
