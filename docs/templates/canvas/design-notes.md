# Canvas — Design Notes

Reference: **Approach** — `https://colorlib.com/wp/template/approach/`  
Live preview: `https://preview.colorlib.com/theme/approach/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/approach-free-template.jpg  
Shipped: https://canvas.free.componentdock.com

Canvas is a single-page creative-agency / design-studio website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;700;900**, **Source Serif Pro**

## Design tokens (`apps/canvas/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3b4eda` | Canvas brand palette — single indigo accent on black and white. |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#6c7b95` | body |
| `--color-mist` | `#f8f9fa` | mist |
| `--font-serif` | `'Source Serif Pro', Georgia, 'Times New Roman', serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with sticky state | see fidelity note below |
| 2 | `Hero` | Black hero with play button | see fidelity note below |
| 3 | `PortfolioMosaic` | Portfolio mosaic | see fidelity note below |
| 4 | `Services` | Services row | see fidelity note below |
| 5 | `BlogCarousel` | — | no dedicated spec block |
| 6 | `ClientLogos` | Client logos row | see fidelity note below |
| 7 | `Footer` | White footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a transparent absolute navbar over the black hero with an uppercase brand, top-level links, and a white sticky state on scroll.

### `Hero`
The system SHALL render the solid-black full-height hero with the display headline, lead copy, and a round video-play button.

### `PortfolioMosaic`
The system SHALL render the asymmetric portfolio collage that overlaps the hero's bottom edge over a black band.

### `Services`
The system SHALL render the three services cards with large indigo icons on white.

### `BlogCarousel`
*anchors only* — Blog updates · Previous posts · Next posts

### `ClientLogos`
The system SHALL render the light-gray client logos row with four wordmarks.

### `Footer`
The system SHALL render the white footer with an indigo brand mark, three link columns, and a social + copyright band.

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
- **Provenance ban.** No file under `apps/canvas/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/canvas/public/CNAME` = `canvas.free.componentdock.com`
  and the package `homepage` = `https://canvas.free.componentdock.com`.
