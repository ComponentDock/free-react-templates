# Trowel — Design Notes

Reference: **Sintec** — `https://colorlib.com/wp/template/sintec/`  
Live preview: `https://preview.colorlib.com/theme/sintec/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sintec-free-template.jpg  
Shipped: https://trowel.free.componentdock.com

A construction company template with hero, about, services, projects, stats, testimonials and blog sections. Recreation of the ColorLib **Sintec** building company template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@300;400;500;600;700**

## Design tokens (`apps/trowel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#fef2f1` | Trowel brand palette — red accent (#e74c3c) from the original design |
| `--color-brand-100` | `#fde1de` | brand 100 |
| `--color-brand-200` | `#fcc8c3` | brand 200 |
| `--color-brand-300` | `#f9a099` | brand 300 |
| `--color-brand-400` | `#f26b5e` | brand 400 |
| `--color-brand-500` | `#e74c3c` | brand 500 |
| `--color-brand-600` | `#d43424` | brand 600 |
| `--color-brand-700` | `#b2281a` | brand 700 |
| `--color-brand-800` | `#93241a` | brand 800 |
| `--color-brand-900` | `#7b231c` | brand 900 |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | Raleway — the original template's typeface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `AboutSection` | AboutSection | see fidelity note below |
| 4 | `ServicesSection` | ServicesSection | see fidelity note below |
| 5 | `ProjectSection` | ProjectSection | see fidelity note below |
| 6 | `StatsSection` | StatsSection | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `BlogSection` | BlogSection | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a two-tier sticky navigation bar with a top info bar and a main navigation bar containing the logo and primary links.

### `Hero`
The system SHALL render a full-width hero section with a background image, a dark parallax overlay, a subtitle, a headline, and a CTA button.

### `AboutSection`
The system SHALL render a two-column about section with an image on the left and content on the right including a heading, description, and "Learn More" button.

### `ServicesSection`
The system SHALL render a services section with a heading and 4 service cards in a responsive grid layout.

### `ProjectSection`
The system SHALL render a projects/portfolio section with a heading, filterable gallery grid, and 4 project cards with hover overlay.

### `StatsSection`
The system SHALL render a stats section with a split layout: image on the left, heading and animated stat counters on the right.

### `Testimonials`
The system SHALL render a testimonials section with a heading and a carousel of customer review cards.

### `BlogSection`
The system SHALL render a blog section with a heading and 3 blog post cards in a responsive grid.

### `Footer`
The system SHALL render a dark footer with three content columns and a bottom copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/trowel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/trowel/public/CNAME` = `trowel.free.componentdock.com`
  and the package `homepage` = `https://trowel.free.componentdock.com`.
