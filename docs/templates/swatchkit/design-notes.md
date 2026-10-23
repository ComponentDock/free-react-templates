# Swatchkit — Design Notes

Reference: **Equip Ui Kit** — `https://colorlib.com/wp/template/equip-ui-kit/`  
Live preview: `https://preview.colorlib.com/theme/equip-ui-kit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/equip-free-template.jpg  
Shipped: https://swatchkit.free.componentdock.com

Swatchkit is a single-page UI KIT / COMPONENT SHOWCASE in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/swatchkit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e91e63` | brand |
| `--color-brand-dark` | `#c2185b` | brand dark |
| `--color-success` | `#4caf50` | success |
| `--color-danger` | `#f44336` | danger |
| `--color-warning` | `#ff9800` | warning |
| `--color-info` | `#00bcd4` | info |
| `--color-light` | `#f5f5f5` | light |
| `--color-dark` | `#212121` | dark |
| `--font-heading` | `'Poppins', sans-serif` | font heading |
| `--font-body` | `'Poppins', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `BasicElements` | Basic Elements section — Buttons showcase | see fidelity note below |
| 4 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark transparent navbar with logo, navigation, and action button.

### `Hero`
The system SHALL render a full-viewport hero with a dark background image, heading, subtitle, and two CTA buttons.

### `BasicElements`
The system SHALL render a "Basic Elements" section showcasing button variations in organized groups.

### `Footer`
The system SHALL include the required attribution footer.

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
- **Provenance ban.** No file under `apps/swatchkit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/swatchkit/public/CNAME` = `swatchkit.free.componentdock.com`
  and the package `homepage` = `https://swatchkit.free.componentdock.com`.
