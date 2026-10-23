# Cargomate — Design Notes

Reference: **Lagoon** — `https://colorlib.com/wp/template/lagoon/`  
Live preview: `https://preview.colorlib.com/theme/lagoon/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lagoon-free-template.jpg  
Shipped: https://cargomate.free.componentdock.com

Cargomate is a logistics & freight company home-page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto Condensed**, **Roboto Condensed:wght@400;700**

## Design tokens (`apps/cargomate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e72727` | brand |
| `--color-navy` | `#262533` | navy |
| `--color-ink` | `#222222` | ink |
| `--color-mist` | `#f8f8f8` | mist |
| `--color-fog` | `#e4e4e4` | fog |
| `--color-line` | `#e4e7e9` | line |
| `--color-formline` | `#ced4da` | formline |
| `--color-footline` | `#444444` | footline |
| `--color-silver` | `#cccccc` | silver |
| `--color-muted` | `#8f8f8f` | muted |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Roboto Condensed', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopStrip` | Top strip and header | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero | see fidelity note below |
| 4 | `Features` | Feature grid | see fidelity note below |
| 5 | `About` | About and statistics | see fidelity note below |
| 6 | `Services` | Services | see fidelity note below |
| 7 | `Quote` | Quote form | see fidelity note below |
| 8 | `Testimonial` | Testimonials | see fidelity note below |
| 9 | `Blog` | Blog posts | see fidelity note below |
| 10 | `Cta` | CTA band | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopStrip`
The system SHALL render a dark top strip with social links and contact info, plus a light navbar with the logo, nav menu, dropdowns, and a mobile toggle.

### `Navbar`
*anchors only* — Toggle menu · ARGOMATE

### `Hero`
The system SHALL render a full-width hero photo with a split content block: a dark headline panel and a white copy panel with a CTA button.

### `Features`
The system SHALL render a 2×2 grid of four feature cards next to an "About Our Company" title block with a CTA.

### `About`
The system SHALL render a brand-logo grid and four animated counters.

### `Services`
The system SHALL render a dark services section with three image-topped cards.

### `Quote`
The system SHALL render a tabbed quote/estimate card with a ten-field form shared by both tabs.

### `Testimonial`
The system SHALL render a red testimonial slider with two slides.

### `Blog`
The system SHALL render three blog cards, the third on a dark image overlay.

### `Cta`
The system SHALL render a red call-to-action band with a white button.

### `Footer`
The system SHALL render a dark footer with About, Newsletter, social links, and the Component Dock credit.

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
- **Provenance ban.** No file under `apps/cargomate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cargomate/public/CNAME` = `cargomate.free.componentdock.com`
  and the package `homepage` = `https://cargomate.free.componentdock.com`.
