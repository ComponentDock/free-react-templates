# Studio — Design Notes

Reference: **Carousel 20** — `https://colorlib.com/wp/template/carousel-20/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/carousel-20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-20.jpg  
Shipped: https://studio.free.componentdock.com

Studio is a single-section creative-studio landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;900**

## Design tokens (`apps/studio/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#272343` | brand |
| `--color-accent` | `#007bff` | accent |
| `--color-heading` | `#ffffff` | heading |
| `--color-body` | `#b3b3b3` | body |
| `--color-subtext` | `#808080` | subtext |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto — loaded via Google Fonts in index.html (weights 300, 400, 900). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Hero` | Split hero layout (desktop) | see fidelity note below |

## Section-by-section fidelity

### `Hero`
The system SHALL render a full-viewport hero split into an image half and a text half.

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
- **Provenance ban.** No file under `apps/studio/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/studio/public/CNAME` = `studio.free.componentdock.com`
  and the package `homepage` = `https://studio.free.componentdock.com`.
