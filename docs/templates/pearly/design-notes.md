# Pearly — Design Notes

Reference: **Dental** — `https://colorlib.com/wp/template/dental/`  
Live preview: `https://preview.colorlib.com/theme/dental/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dental-colorlib-template.jpg  
Shipped: https://pearly.free.componentdock.com

Pearly is a single-page dental-clinic website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Dental" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Chivo**, **Chivo:wght@300;400;500;700;900**

## Design tokens (`apps/pearly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-mint` | `#39cca4` | mint |
| `--color-navy` | `#122c77` | navy |
| `--color-royal` | `#2845ba` | royal |
| `--color-mist` | `#f9fcfc` | mist |
| `--color-soft` | `#f9f9ff` | soft |
| `--color-body` | `#737b92` | body |
| `--font-sans` | `'Chivo', ui-sans-serif, system-ui, sans-serif` | Chivo — single sans family used across the source design. |
| `--font-display` | `'Chivo', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About / clinic info | see fidelity note below |
| 4 | `Treatments` | Treatments | see fidelity note below |
| 5 | `Testimonials` | Testimonials | see fidelity note below |
| 6 | `Blog` | Blog | see fidelity note below |
| 7 | `CallBackCta` | Call-back CTA | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a transparent-overlay header with the site logo, centered nav links, and a solid mint appointment button, which becomes sticky on scroll.

### `Hero`
The system SHALL render a split hero with a headline, paragraph, a 3D-roll-style appointment button, a decorative tooth shape, and a photo.

### `About`
The system SHALL render an about section with a photo panel, an outline appointment button, and three clinic contact blocks.

### `Treatments`
The system SHALL render a treatments section titled "Our treatment keeps you smile" with five distinct treatment cards.

### `Testimonials`
The system SHALL render a testimonials carousel of bordered quote cards with at least three distinct patient quotes.

### `Blog`
The system SHALL render a "Latest blog" section with three blog cards, each with a photo, title, excerpt, and Read More link.

### `CallBackCta`
The system SHALL render a "Get a Call Back" band with a mint overlay, a headphone icon, name and phone inputs, and a solid royal-blue Submit button.

### `Footer`
The system SHALL render a footer with logo + blurb, square social icons, a map placeholder, three contact columns, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/pearly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pearly/public/CNAME` = `pearly.free.componentdock.com`
  and the package `homepage` = `https://pearly.free.componentdock.com`.
