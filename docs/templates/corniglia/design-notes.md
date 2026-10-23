# Corniglia — Design Notes

Reference: **Carousel 19** — `https://colorlib.com/wp/template/carousel-19/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/carousel-19/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-19.jpg  
Shipped: https://corniglia.free.componentdock.com

Corniglia is a dark single-section testimonials carousel template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Arbutus Slab**, **Roboto**

## Design tokens (`apps/corniglia/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-slate-dark` | `#393e46` | Dark slate palette — from the Carousel 19 design |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Font families |
| `--font-serif` | `'Arbutus Slab', Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CarouselSection` | Quote carousel slides | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `CarouselSection`
The carousel SHALL show four slides, each a blockquote with a large white serif quote paragraph and a small author attribution line, per the source's `blockquote.testimony-29101` pattern.

### `Footer`
Every monorepo template SHALL ship a minimal footer linking Component Dock.

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
- **Provenance ban.** No file under `apps/corniglia/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/corniglia/public/CNAME` = `corniglia.free.componentdock.com`
  and the package `homepage` = `https://corniglia.free.componentdock.com`.
