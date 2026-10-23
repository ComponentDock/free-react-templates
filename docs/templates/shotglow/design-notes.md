# Shotglow — Design Notes

Reference: **Shotgear** — `https://colorlib.com/wp/template/shotgear/`  
Live preview: `https://preview.colorlib.com/theme/shotgear/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/shotgear-free-template.jpg  
Shipped: https://shotglow.free.componentdock.com

Shotglow is a photography studio portfolio template with a bold, dark-hero aesthetic. It targets freelance photographers and creative studios who need a single-page landing with gallery, services, testimonials, pricing, and blog sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/shotglow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-slate-900` | `#182028` | Shotglow brand palette — photography studio (dark navy + warm tones) |
| `--color-slate-700` | `#1e2528` | slate 700 |
| `--color-gray-400` | `#888888` | gray 400 |
| `--color-gray-200` | `#dddfdf` | gray 200 |
| `--color-gray-100` | `#eaecee` | gray 100 |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Oswald for headings, Roboto for body — Google Fonts via index.html |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Gallery` | Gallery category filtering | see fidelity note below |
| 5 | `Services` | — | no dedicated spec block |
| 6 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 7 | `Pricing` | — | no dedicated spec block |
| 8 | `Blog` | — | no dedicated spec block |
| 9 | `Footer` | Footer contains Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Shopping bag · Toggle navigation · Shotglow

### `Hero`
*anchors only* — Model Photography · Creative · Studio · Capturing moments from today · View Work

### `About`
*anchors only* — About our studio · The Camera Is An Instrument That Teaches People How to See without a Camera · Read More

### `Gallery`
Users SHALL be able to filter gallery items by category (All, Wedding, Fashion, Portrait, Magazine).

### `Services`
*anchors only* — Our service · What We Offer · Read More

### `Testimonials`
Users SHALL be able to navigate between testimonials using previous/next buttons.

### `Pricing`
*anchors only* — Price table · Pricing Plan · Book Now

### `Blog`
*anchors only* — Our blog · Latest Story

### `Footer`
The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/shotglow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shotglow/public/CNAME` = `shotglow.free.componentdock.com`
  and the package `homepage` = `https://shotglow.free.componentdock.com`.
