# Carousel-glide — Design Notes

Reference: **Carousel 18** — `https://colorlib.com/wp/template/carousel-18/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/carousel-18/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-18.jpg  
Shipped: https://carousel-glide.free.componentdock.com

Recreation of ColorLib **Carousel 18** (`https://colorlib.com/wp/template/carousel-18/`), a modern split-design responsive carousel featuring an immersive image showcase on one side and interactive testimonial/content cards with smooth slide navigation on the other. Built for Vite, React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/carousel-glide/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Inter', 'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--color-primary-50` | `#f3e8fd` | primary 50 |
| `--color-primary-100` | `#e9d5fc` | primary 100 |
| `--color-primary-200` | `#d6b4fa` | primary 200 |
| `--color-primary-300` | `#ba8df6` | primary 300 |
| `--color-primary-400` | `#a25ef0` | primary 400 |
| `--color-primary-500` | `#8b3ae8` | primary 500 |
| `--color-primary-600` | `#7f53ac` | primary 600 |
| `--color-primary-700` | `#6b3fa0` | primary 700 |
| `--color-primary-800` | `#573485` | primary 800 |
| `--color-primary-900` | `#492d6e` | primary 900 |
| `--color-primary-950` | `#2a1740` | primary 950 |
| `--color-secondary-50` | `#eef0fd` | secondary 50 |
| `--color-secondary-100` | `#dde1fc` | secondary 100 |
| `--color-secondary-200` | `#bcbff8` | secondary 200 |
| `--color-secondary-300` | `#9390f3` | secondary 300 |
| `--color-secondary-400` | `#756eec` | secondary 400 |
| `--color-secondary-500` | `#647dee` | secondary 500 |
| `--color-secondary-600` | `#4e5ce4` | secondary 600 |
| `--color-secondary-700` | `#3f46c6` | secondary 700 |
| `--color-secondary-800` | `#353a9d` | secondary 800 |
| `--color-secondary-900` | `#30347e` | secondary 900 |
| `--color-secondary-950` | `#1a1d4a` | secondary 950 |
| `--color-dark` | `#1a202c` | dark |
| `--color-muted` | `#718096` | muted |
| `--color-accent` | `#ff6b6b` | accent |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SplitCarousel` | Split hero carousel | see fidelity note below |
| 2 | `FeaturesSection` | Features section | see fidelity note below |
| 3 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `SplitCarousel`
The system SHALL render a split-screen carousel with an image on the left and tabbed content on the right, with prev/next navigation arrows.

### `FeaturesSection`
The system SHALL render a features section with a heading and four feature cards, each containing an icon, title, and description.

### `Footer`
The system SHALL render a footer containing a link to `https://www.componentdock.com/`.

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
- **Provenance ban.** No file under `apps/carousel-glide/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carousel-glide/public/CNAME` = `carousel-glide.free.componentdock.com`
  and the package `homepage` = `https://carousel-glide.free.componentdock.com`.
