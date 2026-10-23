# Bytecraft — Design Notes

Reference: **Datarc** — `https://colorlib.com/wp/template/datarc/`  
Live preview: `https://preview.colorlib.com/theme/datarc/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/datarc-digital-agency-free-website-template.jpg  
Shipped: https://bytecraft.free.componentdock.com

ByteCraft is a full-page digital agency website template in the free-react-templates monorepo. It is a React recreation of the ColorLib "Datarc" free template (source: https://colorlib.com/wp/template/datarc/), built under a DIFFERENT name (**ByteCraft**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/bytecraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00ff8c` | brand |
| `--color-brand-dark` | `#00cc70` | brand dark |
| `--color-dark` | `#222222` | dark |
| `--color-gray-bg` | `#f9f9ff` | gray bg |
| `--color-text` | `#222222` | text |
| `--color-text-muted` | `#777777` | text muted |
| `--color-white` | `#ffffff` | white |
| `--color-purple-start` | `#3c3f8f` | purple start |
| `--color-purple-end` | `#5b61cf` | purple end |
| `--color-pricing-head` | `#4a4fad` | pricing head |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | CTA bar | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section (dark background) | see fidelity note below |
| 5 | `Portfolio` | Portfolio section with filtering | see fidelity note below |
| 6 | `Team` | Team section | see fidelity note below |
| 7 | `Studio` | Studio/parallax section | see fidelity note below |
| 8 | `Pricing` | Pricing tables | see fidelity note below |
| 9 | `Instagram` | Instagram feed strip | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Contact` | Contact section | see fidelity note below |
| 12 | `CTA` | CTA bar | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a full-width CTA section with purple-blue gradient.

### `Hero`
The system SHALL render a fullscreen hero banner with dark overlay, centered white text, and a green CTA button.

### `About`
The system SHALL render an about section with centered heading and three service feature cards.

### `Services`
The system SHALL render a dark-background section with four feature cards.

### `Portfolio`
The system SHALL render a filterable portfolio gallery with category tabs and a responsive image grid.

### `Team`
The system SHALL render a team section with four team member cards in a grid.

### `Studio`
The system SHALL render a full-width parallax section with purple-blue gradient overlay, white text, and a green CTA.

### `Pricing`
The system SHALL render three pricing table columns with dark headers and green CTAs.

### `Instagram`
The system SHALL render a row of square images as an Instagram-style feed.

### `Blog`
The system SHALL render a blog grid with four article cards.

### `Contact`
The system SHALL render a contact section with address info and a contact form.

### `CTA`
The system SHALL render a full-width CTA section with purple-blue gradient.

### `Footer`
The system SHALL render a multi-column footer with about text, navigation links, and newsletter, plus a footer bottom bar.

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
- **Provenance ban.** No file under `apps/bytecraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bytecraft/public/CNAME` = `bytecraft.free.componentdock.com`
  and the package `homepage` = `https://bytecraft.free.componentdock.com`.
