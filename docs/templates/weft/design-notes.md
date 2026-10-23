# Weft — Design Notes

Reference: **Cocoon** — `https://colorlib.com/wp/template/cocoon/`  
Live preview: `https://preview.colorlib.com/theme/cocoon/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cocoon-free-template.jpg  
Shipped: https://weft.free.componentdock.com

Weft is a CREATIVE AGENCY / PORTFOLIO template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Cocoon" free template (source: https://colorlib.com/wp/template/cocoon/), built under a DIFFERENT name (**Weft**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/weft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sidebar` | `#18181c` | sidebar |
| `--color-accent` | `#99896e` | accent |
| `--color-text` | `#9c9ca9` | text |
| `--color-heading` | `#18181c` | heading |
| `--color-bg` | `#ffffff` | bg |
| `--color-bg-light` | `#f7f7f7` | bg light |
| `--color-btn-dark` | `#18181c` | btn dark |
| `--color-btn-primary` | `#99896e` | btn primary |
| `--color-white` | `#ffffff` | white |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Side navigation | see fidelity note below |
| 2 | `PortfolioGrid` | Portfolio grid | see fidelity note below |
| 3 | `AboutSection` | About section | see fidelity note below |
| 4 | `ServicesSection` | Services section | see fidelity note below |
| 5 | `BlogSection` | Blog section | see fidelity note below |
| 6 | `ContactSection` | Contact section | see fidelity note below |
| 7 | `Footer` | Copyright / Footer | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The system SHALL render a fixed dark sidebar on the left with the brand name, navigation links, portfolio filter controls, social icons, and copyright.

### `PortfolioGrid`
The system SHALL render a masonry-style portfolio grid in the main content area with filterable project images.

### `AboutSection`
The system SHALL render an about section with agency description content.

### `ServicesSection`
The system SHALL render a services section with service offerings.

### `BlogSection`
The system SHALL render a blog section with post previews.

### `ContactSection`
The system SHALL render a contact section with a form.

### `Footer`
The system SHALL render a copyright line in the sidebar with Component Dock attribution.

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
- **Provenance ban.** No file under `apps/weft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/weft/public/CNAME` = `weft.free.componentdock.com`
  and the package `homepage` = `https://weft.free.componentdock.com`.
