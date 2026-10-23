# Mechbot — Design Notes

Reference: **Robotics** — `https://colorlib.com/wp/template/robotics/`  
Live preview: `https://preview.colorlib.com/theme/robotics/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/robotics-free-template.jpg  
Shipped: https://mechbot.free.componentdock.com

Mechbot is a single-page robotics company landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Robotics" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/mechbot/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8a90ff` | brand |
| `--color-brand-light` | `#e8eaff` | brand light |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#777777` | body |
| `--color-surface` | `#f9f9ff` | surface |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero / Banner | see fidelity note below |
| 3 | `Products` | Products | see fidelity note below |
| 4 | `HomeAbout` | HomeAbout | see fidelity note below |
| 5 | `Features` | Features | see fidelity note below |
| 6 | `BrandLogos` | BrandLogos | see fidelity note below |
| 7 | `AboutVideo` | AboutVideo | see fidelity note below |
| 8 | `Blog` | Blog | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky white navbar with the site wordmark, section links, and a call-to-action.

### `Hero`
The system SHALL render a split hero section with text on the left and a robot image on the right, on a light background.

### `Products`
The system SHALL render a light-background section with a centered heading and four product cards.

### `HomeAbout`
The system SHALL render a split about section with an image on the left and text on the right, on a light background.

### `Features`
The system SHALL render a dark-background section with a centered heading and six feature cards in a 3×2 grid.

### `BrandLogos`
The system SHALL render a strip of five brand / partner logos.

### `AboutVideo`
The system SHALL render a split section with text on the left and a video overlay (thumbnail + play button) on the right.

### `Blog`
The system SHALL render a light-background blog section with a centered heading and two blog cards.

### `Footer`
The system SHALL render a dark four-column footer with brand info, product links, a newsletter form, and additional links, plus a bottom copyright bar. The footer MUST include a link to `https://www.componentdock.com/` branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/mechbot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mechbot/public/CNAME` = `mechbot.free.componentdock.com`
  and the package `homepage` = `https://mechbot.free.componentdock.com`.
