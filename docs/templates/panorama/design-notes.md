# Panorama — Design Notes

Reference: **Scenic** — `https://colorlib.com/wp/template/scenic/`  
Live preview: `https://preview.colorlib.com/theme/scenic/`  
Screenshot:   
Shipped: https://panorama.free.componentdock.com

Recreation of ColorLib "Scenic" (https://colorlib.com/wp/template/scenic/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page portfolio template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**

## Design tokens (`apps/panorama/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-ocean-50` | `#eef3f8` | Panorama brand palette — blue primary (#4a76a9) |
| `--color-ocean-100` | `#d5e2ef` | ocean 100 |
| `--color-ocean-200` | `#adc5df` | ocean 200 |
| `--color-ocean-300` | `#7fa3ca` | ocean 300 |
| `--color-ocean-400` | `#4a76a9` | ocean 400 |
| `--color-ocean-500` | `#3a6090` | ocean 500 |
| `--color-ocean-600` | `#2d4b72` | ocean 600 |
| `--color-ocean-700` | `#223856` | ocean 700 |
| `--color-ocean-800` | `#18263b` | ocean 800 |
| `--color-ocean-900` | `#0e1520` | ocean 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section with background image and CTA | see fidelity note below |
| 3 | `About` | About section with overlapping images | see fidelity note below |
| 4 | `Stats` | Stats counter section | see fidelity note below |
| 5 | `Services` | Services grid with 6 cards | see fidelity note below |
| 6 | `Portfolio` | Filterable portfolio grid | see fidelity note below |
| 7 | `VideoCta` | Video CTA section | see fidelity note below |
| 8 | `Blog` | Blog posts section | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky navbar with the brand name "Panorama" and navigation links: Home, About, Portfolio, Services, Blog, Contact. On mobile, a hamburger toggle SHALL show/hide a slide-down menu.

### `Hero`
The template SHALL render a full-viewport hero section with a background image, dark overlay, heading "We Are Panorama", descriptive text, and a "Get in touch" CTA button. A scroll-down arrow SHALL link to the about section.

### `About`
The template SHALL render an About section with subtitle "About Us", heading "Who Are You Guys", description paragraphs, a "Read more about us" link, and two overlapping images.

### `Stats`
The template SHALL render a 4-column stats section showing: Completed Projects (2393), Awards (54), Team (120), Lines of Code (550).

### `Services`
The template SHALL render a services section with light background, subtitle "Our Services", heading "Services", and 6 service cards (Graphic Design, Marketing Strategy, Web Design, SEO, Market Leading, Pixel Perfect Design). A "View All Services" button SHALL be present.

### `Portfolio`
The template SHALL render a portfolio section with filter buttons (All, Web, Design, Brand) and a 3-column image grid. Clicking a filter SHALL show only items in that category.

### `VideoCta`
The template SHALL render a video call-to-action section with a video thumbnail, play button, subtitle "Watch the video", heading "We Are Web Agency", and description text.

### `Blog`
The template SHALL render a blog section with subtitle "Read the latest post", heading "Blog Posts", and 4 blog cards each with image, title, author, date, and comment count.

### `Footer`
The template SHALL render a footer with 4 columns (Products, Company, Support, Contact Us with social icons), a copyright line, and a link to https://www.componentdock.com/ branded as "Component Dock". A scroll-to-top button SHALL be present.

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
- **Provenance ban.** No file under `apps/panorama/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/panorama/public/CNAME` = `panorama.free.componentdock.com`
  and the package `homepage` = `https://panorama.free.componentdock.com`.
