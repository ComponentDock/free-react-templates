# Patisserie — Design Notes

Reference: **Cakeshop** — `https://colorlib.com/wp/template/cakeshop/`  
Live preview: `https://preview.colorlib.com/theme/cakeshop/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cakeshop-colorlib-template.jpg  
Shipped: https://patisserie.free.componentdock.com

Patisserie is a single-page dark bakery / cake shop website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Cakeshop" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@200;300;400;500;600;700;800**, **Poiret One**

## Design tokens (`apps/patisserie/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e5bf4a` | brand |
| `--color-ink` | `#0a0a0a` | ink |
| `--color-heading` | `#dfdfdf` | heading |
| `--color-heading-light` | `#2a2a2a` | heading light |
| `--color-copy` | `#545454` | copy |
| `--color-line` | `rgba(255, 255, 255, 0.2)` | line |
| `--font-display` | `'Poiret One', cursive` | Display face: Poiret One (thin elegant cursive). |
| `--font-sans` | `'Jost', ui-sans-serif, system-ui, sans-serif` | Body: Jost (200-800). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Dark header with top bar, centered logo and nav | see fidelity note below |
| 2 | `Hero` | Full-width cupcake hero with gold CTA | see fidelity note below |
| 3 | `About` | About section with gold underline heading | see fidelity note below |
| 4 | `LatestCakes` | Latest Cakes product carousel | see fidelity note below |
| 5 | `VideoBand` | Video section with pulsing play button | see fidelity note below |
| 6 | `Testimonials` | "Food Lover's Say" testimonial cards | see fidelity note below |
| 7 | `Blog` | Our Blogs heading with two alternating post rows | see fidelity note below |
| 8 | `Instagram` | Instagram grid with handle | see fidelity note below |
| 9 | `Footer` | Footer with links, widgets, and Component Dock credit | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a dark header with a top info bar, a centered logo wordmark, a centered uppercase nav (one dropdown), and a mobile hamburger menu.

### `Hero`
The system SHALL render a 700px-tall hero with a cover photo background, a thin white display headline, and a large square gold "Order Now" button.

### `About`
The system SHALL render a dark About section with a centered heading carrying a gold underline bar, a caption column with a gold h2 and two paragraphs, and a round cake photo.

### `LatestCakes`
The system SHALL render a carousel of four product cards, each with a photo, a hover "Add to cart" gold bar, a title, and a gold price, with side arrows.

### `VideoBand`
The system SHALL render a full-width background-photo band with a centered 100px circular play button with a gold pulse ring.

### `Testimonials`
The system SHALL render a centered "Food Lover's Say" heading and three testimonial cards, each with five gold stars, a quote, an avatar, and the author name.

### `Blog`
The system SHALL render an "Our Blogs" heading with a "More Blog" button on the right and two alternating image/caption rows below, each with a photo, an h3 title, a paragraph, and a gold "Learn More" underline link.

### `Instagram`
The system SHALL render a "Follow us on Instagram" heading with the brand handle and a four-column grid of four square photos.

### `Footer`
The system SHALL render a dark footer with centered menu links, an about blurb with social icons, Location and Contact widgets, and a copyright bar linking Component Dock.

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
- **Provenance ban.** No file under `apps/patisserie/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/patisserie/public/CNAME` = `patisserie.free.componentdock.com`
  and the package `homepage` = `https://patisserie.free.componentdock.com`.
