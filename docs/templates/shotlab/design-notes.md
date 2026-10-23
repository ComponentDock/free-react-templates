# Shotlab — Design Notes

Reference: **Mostudio** — `https://colorlib.com/wp/template/mostudio/`  
Live preview: `https://preview.colorlib.com/theme/mostudio/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/mostudio-free-template.jpg  
Shipped: https://shotlab.free.componentdock.com

A photography portfolio template with sidebar navigation, portfolio gallery, about, pricing and contact sections. ShotLab is a single-page PHOTOGRAPHY PORTFOLIO recreation of ColorLib's "Mostudio" template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Abril Fatface**, **Poppins**

## Design tokens (`apps/shotlab/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#fefce8` | ShotLab brand palette — golden yellow accent (#f3c623) |
| `--color-brand-100` | `#fef9c3` | brand 100 |
| `--color-brand-200` | `#fef08a` | brand 200 |
| `--color-brand-300` | `#fde047` | brand 300 |
| `--color-brand-400` | `#f3c623` | brand 400 |
| `--color-brand-500` | `#eab308` | brand 500 |
| `--color-brand-600` | `#ca8a04` | brand 600 |
| `--color-brand-700` | `#a16207` | brand 700 |
| `--color-brand-800` | `#854d0e` | brand 800 |
| `--color-brand-900` | `#713f12` | brand 900 |
| `--color-dark` | `#000000` | dark |
| `--color-heading` | `#ffffff` | heading |
| `--color-body` | `#ffffff` | body |
| `--color-muted` | `rgba(255, 255, 255, 0.6)` | muted |
| `--color-subtle` | `rgba(255, 255, 255, 0.2)` | subtle |
| `--color-light` | `#ffffff` | light |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Abril Fatface', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar Navigation | see fidelity note below |
| 2 | `PortfolioGrid` | Portfolio Gallery | see fidelity note below |
| 3 | `About` | About Section | see fidelity note below |
| 4 | `Pricing` | Pricing Section | see fidelity note below |
| 5 | `Contact` | Contact Section | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
Desktop sidebar is visible on large screens with logo, nav links, newsletter signup, and copyright.

### `PortfolioGrid`
Portfolio items display in alternating rows with image on one side and text on the other.

### `About`
About section displays founder info with team member photos on a dark background.

### `Pricing`
Pricing section displays 4 plan cards in a row.

### `Contact`
Contact form with transparent inputs and bottom-border styling.

### `Footer`
Footer displays copyright with Component Dock link.

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
- **Provenance ban.** No file under `apps/shotlab/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shotlab/public/CNAME` = `shotlab.free.componentdock.com`
  and the package `homepage` = `https://shotlab.free.componentdock.com`.
