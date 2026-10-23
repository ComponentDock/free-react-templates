# Homemark — Design Notes

Reference: **Estate** — `https://colorlib.com/wp/template/estate/`  
Live preview: `https://preview.colorlib.com/theme/estate/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/estate-free-template.jpg  
Shipped: https://homemark.free.componentdock.com

Homestead is a single-page real-estate website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Sarabun**, **Sarabun:wght@300;400;500;600;700**

## Design tokens (`apps/homemark/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#12c7b8` | brand |
| `--color-navy` | `#081624` | navy |
| `--color-body` | `#73778e` | body |
| `--color-light-bg` | `#f2f3f4` | light bg |
| `--color-divider` | `#e0e1e8` | divider |
| `--color-subtle` | `#83869b` | subtle |
| `--color-primary-50` | `#e6faf8` | primary 50 |
| `--color-primary-100` | `#b3f0eb` | primary 100 |
| `--color-primary-200` | `#80e6de` | primary 200 |
| `--color-primary-300` | `#4ddcd1` | primary 300 |
| `--color-primary-400` | `#26d4c8` | primary 400 |
| `--color-primary-500` | `#12c7b8` | primary 500 |
| `--color-primary-600` | `#0fb5a8` | primary 600 |
| `--color-primary-700` | `#0c9d92` | primary 700 |
| `--color-primary-800` | `#09857c` | primary 800 |
| `--color-primary-900` | `#065f58` | primary 900 |
| `--font-sans` | `'Sarabun', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header / Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `FeatureIcons` | Features section | see fidelity note below |
| 4 | `Intro` | Intro / Our Houses section | see fidelity note below |
| 5 | `Gallery` | Design / Gallery section | see fidelity note below |
| 6 | `Location` | Location section | see fidelity note below |
| 7 | `Features` | Features section | see fidelity note below |
| 8 | `CallToAction` | Call to Action section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a header with a brand logo on the left and six nav links on the right, with a hamburger toggler on mobile.

### `Hero`
The system SHALL render a hero section with a background image, a headline, social icons, and a details panel showing property information.

### `FeatureIcons`
The system SHALL render a features carousel with icon boxes.

### `Intro`
The system SHALL render an "Our Houses" section with two alternating image+text rows.

### `Gallery`
The system SHALL render a dark-background gallery section with image thumbnails and two text columns.

### `Location`
The system SHALL render a tabbed location section with large images and thumbnail navigation tabs.

### `Features`
The system SHALL render a features carousel with icon boxes.

### `CallToAction`
The system SHALL render a CTA section with a background image, heading, and action button.

### `Footer`
The system SHALL render a dark footer with brand logo, link columns, social icons, and a copyright bar linking Component Dock.

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
- **Provenance ban.** No file under `apps/homemark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/homemark/public/CNAME` = `homemark.free.componentdock.com`
  and the package `homepage` = `https://homemark.free.componentdock.com`.
