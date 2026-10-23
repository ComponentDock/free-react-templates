# Carouseldrift — Design Notes

Reference: **Carousel 15** — `https://colorlib.com/wp/template/carousel-15/`  
Live preview: `https://preview.colorlib.com/theme/carousel-15/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-15.jpg  
Shipped: https://carouseldrift.free.componentdock.com

CarouselDrift is a modern, responsive interactive carousel and slide showcase template featuring a hero section, an immersive multi-item carousel slider with thumbnails/controls, feature highlights, a newsletter subscription banner, and a footer linking to Component Dock.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700;800;900**

## Design tokens (`apps/carouseldrift/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0284c7` | Brand palette: sky blue accent |
| `--color-primary-50` | `#f0f9ff` | primary 50 |
| `--color-primary-100` | `#e0f2fe` | primary 100 |
| `--color-primary-200` | `#bae6fd` | primary 200 |
| `--color-primary-300` | `#7dd3fc` | primary 300 |
| `--color-primary-400` | `#38bdf8` | primary 400 |
| `--color-primary-500` | `#0ea5e9` | primary 500 |
| `--color-primary-600` | `#0284c7` | primary 600 |
| `--color-primary-700` | `#0369a1` | primary 700 |
| `--color-primary-800` | `#075985` | primary 800 |
| `--color-primary-900` | `#0c4a6e` | primary 900 |
| `--color-primary-950` | `#082f49` | primary 950 |
| `--color-accent-50` | `#f0f9ff` | accent 50 |
| `--color-accent-100` | `#e0f2fe` | accent 100 |
| `--color-accent-200` | `#bae6fd` | accent 200 |
| `--color-accent-300` | `#7dd3fc` | accent 300 |
| `--color-accent-400` | `#38bdf8` | accent 400 |
| `--color-accent-500` | `#0ea5e9` | accent 500 |
| `--color-accent-600` | `#0284c7` | accent 600 |
| `--color-accent-700` | `#0369a1` | accent 700 |
| `--color-accent-800` | `#075985` | accent 800 |
| `--color-accent-900` | `#0c4a6e` | accent 900 |
| `--color-accent-950` | `#082f49` | accent 950 |
| `--font-display` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar and Navigation | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `Carousel` | Interactive Carousel Slider | see fidelity note below |
| 4 | `Features` | Features and Highlights Grid | see fidelity note below |
| 5 | `Newsletter` | Newsletter Subscription | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky or fixed header with branding, navigation links (Home, Products), and a dark-mode toggle button.

### `Hero`
The template SHALL display a prominent hero banner with a bold headline, descriptive subtitle, and call-to-action links to the carousel and features sections.

### `Carousel`
The template SHALL display an interactive carousel with multiple slide items, each showing an image, title, and description, with prev/next navigation controls and clickable thumbnail indicators.

### `Features`
The template SHALL display a grid of feature cards showcasing key carousel capabilities, each with an icon, title, and description.

### `Newsletter`
The template SHALL display a newsletter subscription form with email input, validation, loading/success states, and a privacy policy link.

### `Footer`
The template SHALL display a footer with the site name, a tagline, copyright notice, and a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/carouseldrift/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carouseldrift/public/CNAME` = `carouseldrift.free.componentdock.com`
  and the package `homepage` = `https://carouseldrift.free.componentdock.com`.
