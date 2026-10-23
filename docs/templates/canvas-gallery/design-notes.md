# Canvas-gallery — Design Notes

Reference: **Mona** — `https://colorlib.com/wp/template/mona/`  
Live preview: `https://preview.colorlib.com/theme/mona/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/mona-free-template.jpg  
Shipped: https://canvas-gallery.free.componentdock.com

Recreation of ColorLib's **Mona** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page template. Mona is a modeling/talent agency website with a pink brand palette, hero slider, about section with service cards, tabbed portfolio gallery, testimonials carousel, CTA banner, blog grid, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **HK Grotesk**, **HK Grotesk:wght@400;500;600;700**

## Design tokens (`apps/canvas-gallery/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ed489d` | CanvasGallery brand palette — modeling/talent agency with hot pink primary |
| `--color-brand-light` | `#f6a4ce` | brand light |
| `--color-text-dark` | `#232323` | text dark |
| `--color-text-muted` | `#666666` | text muted |
| `--color-bg-white` | `#ffffff` | bg white |
| `--color-bg-gray` | `#f0f0f0` | bg gray |
| `--color-border` | `#ebebeb` | border |
| `--color-dark` | `#000000` | dark |
| `--color-secondary` | `#a6a6a6` | secondary |
| `--font-sans` | `'HK Grotesk', ui-sans-serif, system-ui, sans-serif` | HK Grotesk — loaded via Google Fonts in index.html |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with logo, links, and search | see fidelity note below |
| 2 | `HeroSlider` | Hero slider displays model slides | see fidelity note below |
| 3 | `About` | About section displays agency info and services | see fidelity note below |
| 4 | `Gallery` | Gallery shows filterable portfolio | see fidelity note below |
| 5 | `Testimonials` | Testimonials section displays client feedback | see fidelity note below |
| 6 | `CtaBanner` | CTA banner renders with heading and button | see fidelity note below |
| 7 | `Blog` | Blog section shows latest posts | see fidelity note below |
| 8 | `Footer` | Footer renders with three columns and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display a logo, navigation links (Home, Pages, Project, Models, Casting, Blog, Contact), and a search icon button.

### `HeroSlider`
The hero section SHALL display a carousel of model slides with names, subtitles, social icons, and CTA buttons.

### `About`
The about section SHALL show heading, description text, thumbnail images, and 4 service cards.

### `Gallery`
The gallery section SHALL display tabs (All, Model, Actor, Singer) that filter a grid of model items.

### `Testimonials`
The testimonials section SHALL show client quotes, star ratings, names, roles, and navigation arrows.

### `CtaBanner`
The CTA section SHALL display a pink background banner with a heading and contact button.

### `Blog`
The blog section SHALL display a grid of blog post cards with thumbnails, titles, and dates.

### `Footer`
The footer SHALL display three columns (brand/copyright, links, contact) and link to Component Dock.

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
- **Provenance ban.** No file under `apps/canvas-gallery/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/canvas-gallery/public/CNAME` = `canvas-gallery.free.componentdock.com`
  and the package `homepage` = `https://canvas-gallery.free.componentdock.com`.
