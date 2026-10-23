# Radiant — Design Notes

Reference: **Quantum** — `https://colorlib.com/wp/template/quantum/`  
Live preview: `https://preview.colorlib.com/theme/quantum/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/quantum-free-template.jpg  
Shipped: https://radiant.free.componentdock.com

Radiant is a business/agency landing page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Libre Baskerville**, **Libre Baskerville:wght@400;700**, **Mulish**

## Design tokens (`apps/radiant/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#edfafa` | primary 50 |
| `--color-primary-100` | `#d1f2f0` | primary 100 |
| `--color-primary-200` | `#a8e5e2` | primary 200 |
| `--color-primary-300` | `#7ad7d3` | primary 300 |
| `--color-primary-400` | `#5cccc9` | primary 400 |
| `--color-primary-500` | `#3fb8b4` | primary 500 |
| `--color-primary-600` | `#339693` | primary 600 |
| `--color-primary-700` | `#2d7977` | primary 700 |
| `--color-primary-800` | `#296160` | primary 800 |
| `--color-primary-900` | `#275050` | primary 900 |
| `--color-ink` | `#1a1a1a` | ink |
| `--color-smoke` | `#7b7b7b` | smoke |
| `--font-sans` | `'Mulish', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Libre Baskerville', Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders navigation links | see fidelity note below |
| 2 | `Hero` | Hero section displays headline and feature cards | see fidelity note below |
| 3 | `AboutUs` | About Us section shows three feature columns | see fidelity note below |
| 4 | `Gallery` | Gallery renders masonry grid of images | see fidelity note below |
| 5 | `Pricing` | Pricing section shows three plans | see fidelity note below |
| 6 | `Features` | Features split section displays two feature cards | see fidelity note below |
| 7 | `Testimonial` | Testimonial section shows a quote | see fidelity note below |
| 8 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navbar with the logo "Radiant." (teal dot accent), navigation links, search button, and social icons.

### `Hero`
The template SHALL display a split hero with a headline on the left, two feature cards (Creative, Design), and an image with "Modern Design" overlay on the right.

### `AboutUs`
The template SHALL display an About Us section with subtitle, heading, and three feature columns (Years of Experience, Innovative, Solutions).

### `Gallery`
The template SHALL display a masonry-style image gallery with 5 placeholder images.

### `Pricing`
The template SHALL display a pricing section with three plans: Free ($0.00), Premium ($99.00), Enterprise ($180.00), each with feature lists and "Get started" CTA buttons.

### `Features`
The template SHALL display a split layout with a heading on the left and two feature cards (Creativity, Solutions) on the right.

### `Testimonial`
The template SHALL display a split testimonial with a background image on the left and a blockquote with person name and role on the right.

### `Footer`
The template SHALL display a footer with four columns (Help, About, Support, Subscribe) and a copyright line linking to https://www.componentdock.com/ as "Component Dock".

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
- **Provenance ban.** No file under `apps/radiant/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/radiant/public/CNAME` = `radiant.free.componentdock.com`
  and the package `homepage` = `https://radiant.free.componentdock.com`.
