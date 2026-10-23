# Luma — Design Notes

Reference: **Photon** — `https://colorlib.com/wp/template/photon/`  
Live preview: `https://preview.colorlib.com/theme/photon/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/photon-free-template.jpg  
Shipped: https://luma.free.componentdock.com

Luma is a photography portfolio single-page template featuring a full-screen image carousel with category slides, a sticky navbar with social links, and a branded footer. The design uses a teal (#20c997) accent, Josefin Sans font, and dark overlay on hover.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;700**

## Design tokens (`apps/luma/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#20c997` | brand |
| `--color-brand-dark` | `#1aa179` | brand dark |
| `--color-brand-light` | `#2ee0a8` | brand light |
| `--color-heading` | `#000000` | heading |
| `--color-body-text` | `#737373` | body text |
| `--color-surface` | `#ffffff` | surface |
| `--color-muted` | `#f8f9fa` | muted |
| `--color-border` | `#dee2e6` | border |
| `--color-footer-bg` | `#333333` | footer bg |
| `--color-footer-text` | `#737373` | footer text |
| `--color-footer-link` | `#999999` | footer link |
| `--font-heading` | `'Josefin Sans', sans-serif` | font heading |
| `--font-body` | `'Josefin Sans', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with brand and navigation | see fidelity note below |
| 2 | `Hero` | Hero carousel displays photography categories | see fidelity note below |
| 3 | `Footer` | Footer displays copyright and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navbar with the brand name "Luma", navigation links (Home, Gallery, Services, Blog, About, Reviews, Contact), and social icon links (Facebook, Twitter, Instagram, YouTube).

### `Hero`
The template SHALL display a full-screen image carousel with 7 category slides (Nature, Portrait, People, Architecture, Animals, Sports, Travel), each with a background image, centered title, and "More Photos" button. Navigation arrows and pagination dots SHALL be provided.

### `Footer`
The template SHALL display a dark footer with copyright text and a "Component Dock" link pointing to https://www.componentdock.com/ that opens in a new tab.

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
- **Provenance ban.** No file under `apps/luma/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/luma/public/CNAME` = `luma.free.componentdock.com`
  and the package `homepage` = `https://luma.free.componentdock.com`.
