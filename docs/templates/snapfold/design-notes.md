# Snapfold — Design Notes

Reference: **Photogallery** — `https://colorlib.com/wp/template/photogallery/`  
Live preview: `https://preview.colorlib.com/theme/photogallery/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/photogallery-free-template.jpg  
Shipped: https://snapfold.free.componentdock.com

Snapfold is a photography portfolio gallery landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Photogallery" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **PT Sans**, **PT Sans:wght@400;700**

## Design tokens (`apps/snapfold/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'PT Sans', sans-serif` | font sans |
| `--color-snap-primary` | `#323232` | snap primary |
| `--color-snap-body` | `#898d90` | snap body |
| `--color-snap-accent` | `#c6d7d8` | snap accent |
| `--color-snap-white` | `#ffffff` | snap white |
| `--color-snap-black` | `#000000` | snap black |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Preloader` | Preloader | see fidelity note below |
| 2 | `Sidebar` | Sidebar navigation | see fidelity note below |
| 3 | `HeroSlider` | Hero image slider | see fidelity note below |
| 4 | `SlideCounter` | Slide counter | see fidelity note below |
| 5 | `SearchOverlay` | Search overlay | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Preloader`
The system SHALL display a full-screen black preloader with an animated spinning loader while the page assets load. The preloader SHALL automatically dismiss once the page is ready.

### `Sidebar`
The system SHALL render a fixed left sidebar containing the site name "Snapfold", a hamburger menu toggle, navigation links (Home, Gallery, Blog, Contact), social media icon links (Behance, Dribbble, Twitter, Facebook, Pinterest), and a copyright bar at the bottom.

### `HeroSlider`
The system SHALL render a full-viewport hero section with at least two image slides. Each slide SHALL display a full-bleed background photo with a white text box containing a category label ("Photography"), a project title ("Project No. N"), a description paragraph, and a "Read More" CTA button.

### `SlideCounter`
The system SHALL display a fixed slide counter at the bottom-right of the viewport showing the current slide number and total slide count.

### `SearchOverlay`
The system SHALL provide a search icon in the top-right controls area. Clicking the search icon SHALL open a fullscreen search overlay with a large centered text input and a circular close button.

### `Footer`
The system SHALL render a footer with a "Made with Component Dock" link pointing to `https://www.componentdock.com/`.

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
- **Provenance ban.** No file under `apps/snapfold/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/snapfold/public/CNAME` = `snapfold.free.componentdock.com`
  and the package `homepage` = `https://snapfold.free.componentdock.com`.
