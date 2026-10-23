# Beanery — Design Notes

Reference: **Decoffee** — `https://colorlib.com/wp/template/decoffee/`  
Live preview: `https://preview.colorlib.com/theme/decoffee/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/decoffee-colorlib-template.jpg  
Shipped: https://beanery.free.componentdock.com

Beanery is a single-page coffee-shop / boutique-cafe website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Decoffee" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Chivo**, **Chivo:wght@300;400;500;700;900**, **Shippori Mincho**

## Design tokens (`apps/beanery/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-copper` | `#c46b48` | copper |
| `--color-amber` | `#d6a04c` | amber |
| `--color-navy` | `#202738` | navy |
| `--color-links` | `#c3d4e4` | links |
| `--color-cream` | `#f6f1ea` | cream |
| `--color-soft` | `#f9f9ff` | soft |
| `--font-display` | `'Shippori Mincho', ui-serif, Georgia, serif` | Shippori Mincho serif for display headlines, Chivo sans for body. |
| `--font-sans` | `'Chivo', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar header | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Menu` | Menu section | see fidelity note below |
| 5 | `Services` | Services band | see fidelity note below |
| 6 | `Gallery` | Gallery | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `InstagramBand` | Instagram band | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The system SHALL render a dark fixed left sidebar with the site logo, nav links, an order button, contact info, and social icons, which collapses into an off-canvas drawer on smaller screens.

### `Hero`
The system SHALL render a full-height hero with a background photo, dark overlay, serif headline with a colored accent span, subtext, and a solid copper call-to-action button.

### `About`
The system SHALL render a cream about section with a serif headline, paragraph, signature image, and three hours blocks, followed by a full-width image.

### `Menu`
The system SHALL render a centered menu section with three category columns, each containing five items with dotted-leader names, prices, and descriptions.

### `Services`
The system SHALL render a background-image band with four centered service cards, each with an icon and white descriptive text.

### `Gallery`
The system SHALL render a staggered gallery of four coffee-shop photos pulled up over the services band.

### `Testimonials`
The system SHALL render a testimonial carousel with quotes, founder photos, names, and roles.

### `InstagramBand`
The system SHALL render an instagram strip offset to the right of the sidebar with several square photos and an "@handle" outline button.

### `Footer`
The system SHALL render a cream footer with a contact column, a brand column with social icons, a navigation column, and a copyright bar.

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
- **Provenance ban.** No file under `apps/beanery/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/beanery/public/CNAME` = `beanery.free.componentdock.com`
  and the package `homepage` = `https://beanery.free.componentdock.com`.
