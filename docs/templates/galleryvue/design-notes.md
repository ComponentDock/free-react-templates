# Galleryvue — Design Notes

Reference: **Capture** — `https://colorlib.com/wp/template/capture/`  
Live preview: `https://preview.colorlib.com/theme/capture/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/capture-free-template.jpg  
Shipped: https://galleryvue.free.componentdock.com

Galleryvue is a photography gallery website template featuring a fixed sidebar navigation, a 3-column masonry-style image gallery with hover overlays, and a dark footer with categories, archives, and contact information. It recreates the ColorLib "Capture" design faithfully using React, Tailwind CSS, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Work Sans**, **Work Sans:wght@300;400;500;600;700**

## Design tokens (`apps/galleryvue/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-worksans` | `'Work Sans', sans-serif` | font worksans |
| `--font-montserrat` | `'Montserrat', sans-serif` | font montserrat |
| `--color-brand` | `#000000` | brand |
| `--color-text-primary` | `#212529` | text primary |
| `--color-text-secondary` | `#6c757d` | text secondary |
| `--color-bg-light` | `#f8f9fa` | bg light |
| `--color-white` | `#ffffff` | white |
| `--color-black` | `#000000` | black |
| `--color-footer-bg` | `#242423` | footer bg |
| `--color-footer-text` | `rgba(255, 255, 255, 0.5)` | footer text |
| `--color-footer-heading` | `rgba(255, 255, 255, 0.8)` | footer heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar navigation | see fidelity note below |
| 2 | `Gallery` | Gallery grid | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The template SHALL display a fixed left sidebar (20% width on desktop, collapsible on mobile) containing a logo, navigation links, and social media icons.

### `Gallery`
The template SHALL display a responsive grid of 12 photography items with background images, dark overlays, and hover-revealed text.

### `Footer`
The template SHALL display a dark footer with category links, archive links, contact information, and a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/galleryvue/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/galleryvue/public/CNAME` = `galleryvue.free.componentdock.com`
  and the package `homepage` = `https://galleryvue.free.componentdock.com`.
