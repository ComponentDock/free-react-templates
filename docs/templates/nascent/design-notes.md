# Nascent — Design Notes

Reference: **Thestartup** — `https://colorlib.com/wp/template/thestartup/`  
Live preview: `https://preview.colorlib.com/theme/thestartup/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thestartup-free-template.jpg  
Shipped: https://nascent.free.componentdock.com

A Landing Page template with hero, services, about, pricing, features and blog sections. Recreation of ColorLib "Thestartup" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page startup landing site.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;500;600;700**, **Roboto**

## Design tokens (`apps/nascent/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-orange-50` | `#fff7ed` | Nascent brand palette — orange startup aesthetic |
| `--color-orange-100` | `#ffedd5` | orange 100 |
| `--color-orange-200` | `#fed7aa` | orange 200 |
| `--color-orange-300` | `#fdba74` | orange 300 |
| `--color-orange-400` | `#ff9100` | orange 400 |
| `--color-orange-500` | `#ff9100` | orange 500 |
| `--color-orange-600` | `#df7e00` | orange 600 |
| `--color-orange-700` | `#c26e00` | orange 700 |
| `--color-orange-800` | `#9a5700` | orange 800 |
| `--color-orange-900` | `#7c4700` | orange 900 |
| `--color-plum` | `#2d0a31` | plum |
| `--color-peach` | `#ffddb5` | peach |
| `--color-body` | `#5e5e5e` | body |
| `--font-heading` | `'Josefin Sans', sans-serif` | font heading |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar functionality | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Pricing` | Pricing section | see fidelity note below |
| 6 | `FeaturesAccordion` | Features accordion | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a sticky navigation bar with logo, nav links, and a "Join Us" CTA button.

### `Hero`
Users SHALL see a split hero section with tagline, heading, subtext, CTA, and hero image on a peach background.

### `Services`
Users SHALL see three service cards with icons, titles, descriptions, and "Let's Talk" links.

### `About`
Users SHALL see a split about section with image, philosophy heading, description paragraphs, and CEO attribution.

### `Pricing`
Users SHALL see three pricing cards with plans, prices, features, and CTA buttons.

### `FeaturesAccordion`
Users SHALL see a collapsible accordion with four feature items and an image.

### `Testimonials`
Users SHALL see a testimonials carousel on a dark purple background with dot pagination.

### `Blog`
Users SHALL see three blog cards with images, category badges, titles, and excerpts.

### `Footer`
Users SHALL see a four-column footer with black background and Component Dock link.

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
- **Provenance ban.** No file under `apps/nascent/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nascent/public/CNAME` = `nascent.free.componentdock.com`
  and the package `homepage` = `https://nascent.free.componentdock.com`.
