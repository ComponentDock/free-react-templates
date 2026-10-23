# Lumier — Design Notes

Reference: **Elit** — `https://colorlib.com/wp/template/elit/`  
Live preview: `https://preview.colorlib.com/theme/elit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/elit-free-template.jpg  
Shipped: https://lumier.free.componentdock.com

Lumier is a single-page photographer portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Elit" photography website template design, built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Quicksand**, **Quicksand:wght@300;400;500;700;900**

## Design tokens (`apps/lumier/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#df0e62` | brand |
| `--color-ink` | `#ffffff` | ink |
| `--color-body` | `#808080` | body |
| `--color-dark` | `#1a1a1a` | dark |
| `--color-night` | `#000000` | night |
| `--color-muted` | `#737373` | muted |
| `--color-check` | `#8bc34a` | check |
| `--font-heading` | `'Oswald', arial, sans-serif` | font heading |
| `--font-sans` | `'Quicksand', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Gallery` | Photo gallery | see fidelity note below |
| 4 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 5 | `Biography` | Biography section | see fidelity note below |
| 6 | `Blog` | Blog section | see fidelity note below |
| 7 | `Contact` | Contact form | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The template SHALL display a fixed left sidebar (250px wide, black background) with logo, navigation links, and social icons.

### `Hero`
The template SHALL display a full-viewport hero section with a background image, heading, description, and call-to-action button.

### `Gallery`
The template SHALL display a 3-column photo grid with hover effects and lightbox.

### `Testimonials`
The template SHALL display a testimonials section with a carousel of testimonials.

### `Biography`
The template SHALL display a biography section with portrait, bio text, and skill checklist.

### `Blog`
The template SHALL display a blog section with paginated post entries.

### `Contact`
The template SHALL display a contact form with name, email, subject, and message fields.

### `Footer`
The template SHALL display a footer with a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/lumier/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lumier/public/CNAME` = `lumier.free.componentdock.com`
  and the package `homepage` = `https://lumier.free.componentdock.com`.
