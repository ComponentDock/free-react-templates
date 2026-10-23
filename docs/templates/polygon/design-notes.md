# Polygon — Design Notes

Reference: **Hexa** — `https://colorlib.com/wp/template/hexa/`  
Live preview: `https://preview.colorlib.com/theme/hexa/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hexa-free-template.jpg  
Shipped: https://polygon.free.componentdock.com

An architecture/design agency website template. Recreation of ColorLib "Hexa". **Source:** https://colorlib.com/wp/template/hexa/ **Preview:** https://preview.colorlib.com/theme/hexa/ **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**

## Design tokens (`apps/polygon/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e74208` | brand |
| `--color-brand-dark` | `#c23707` | brand dark |
| `--color-brand-light` | `#fa9774` | brand light |
| `--color-ink` | `#212529` | ink |
| `--color-ink-dark` | `#16181b` | ink dark |
| `--color-paper` | `#f8f9fa` | paper |
| `--color-mist` | `#6c757d` | mist |
| `--color-primary-50` | `#fff4ed` | primary 50 |
| `--color-primary-100` | `#ffe6d5` | primary 100 |
| `--color-primary-200` | `#ffc8aa` | primary 200 |
| `--color-primary-300` | `#fa9774` | primary 300 |
| `--color-primary-400` | `#f06a36` | primary 400 |
| `--color-primary-500` | `#e74208` | primary 500 |
| `--color-primary-600` | `#c23707` | primary 600 |
| `--color-primary-700` | `#b63406` | primary 700 |
| `--color-primary-800` | `#8a2605` | primary 800 |
| `--color-primary-900` | `#6b1e04` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders correctly | see fidelity note below |
| 2 | `Hero` | Hero section displays correctly | see fidelity note below |
| 3 | `Features` | Features section shows three cards | see fidelity note below |
| 4 | `About` | About sections show numbered content | see fidelity note below |
| 5 | `Projects` | Projects grid shows project cards | see fidelity note below |
| 6 | `Testimonial` | Testimonials display correctly | see fidelity note below |
| 7 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a dark navbar with brand name, navigation links, and a CTA button.

### `Hero`
The template SHALL display a full-viewport hero slider with heading, subtext, and CTA buttons.

### `Features`
The template SHALL display three feature cards with icons, headings, and descriptions.

### `About`
The template SHALL display two about sections with numbered headings and alternating layouts.

### `Projects`
The template SHALL display a 3-column grid of project images with hover overlays.

### `Testimonial`
The template SHALL display testimonial cards with avatars, names, and quotes.

### `Footer`
The template SHALL display a dark footer with About, Quick Links, Follow Links, newsletter subscription, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/polygon/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/polygon/public/CNAME` = `polygon.free.componentdock.com`
  and the package `homepage` = `https://polygon.free.componentdock.com`.
