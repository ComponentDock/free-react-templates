# Carousel-vane — Design Notes

Reference: **Carousel 16** — `https://colorlib.com/wp/template/carousel-16/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/carousel-16/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-16.jpg  
Shipped: https://carousel-vane.free.componentdock.com

Recreation of ColorLib Carousel V16 (`https://colorlib.com/wp/template/carousel-16/`), a modern and minimal free feedback/testimonial carousel template featuring customer reviews, opinions, avatars, and ratings. Built as a Vite + React 19 + Tailwind CSS 4 + TypeScript app in `apps/carousel-vane`.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;700**

## Design tokens (`apps/carousel-vane/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--color-dark` | `#212529` | dark |
| `--color-muted` | `#999999` | muted |
| `--color-bg-left` | `#f8f9fa` | bg left |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TestimonialCarousel` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TestimonialCarousel`
*anchors only* — Previous testimonials · Next testimonials

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
- **Provenance ban.** No file under `apps/carousel-vane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carousel-vane/public/CNAME` = `carousel-vane.free.componentdock.com`
  and the package `homepage` = `https://carousel-vane.free.componentdock.com`.
