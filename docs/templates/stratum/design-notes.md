# Stratum — Design Notes

Reference: **Unearth** — `https://colorlib.com/wp/template/unearth/`  
Live preview: `https://preview.colorlib.com/theme/unearth/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/unearth-free-template.jpg  
Shipped: https://stratum.free.componentdock.com

Recreation of ColorLib "Unearth" (https://colorlib.com/wp/template/unearth/) as a modern mining/industrial company landing page. Built with Vite, React 19, Tailwind CSS 4, and TypeScript under the new name **Stratum**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Rubik**

## Design tokens (`apps/stratum/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#ff8b00` | primary |
| `--color-primary-deep` | `#e07b00` | primary deep |
| `--color-gradient-start` | `#7a5e86` | gradient start |
| `--color-gradient-mid` | `#a75e67` | gradient mid |
| `--color-gradient-end` | `#f77b2e` | gradient end |
| `--color-light` | `#f8f9fa` | light |
| `--color-body` | `#939393` | body |
| `--color-heading` | `#000000` | heading |
| `--color-border` | `#e9ecef` | border |
| `--color-muted` | `#b8b8b8` | muted |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Rubik (body) + Oswald (headings) via Google Fonts <link> in index.html. |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top Bar | see fidelity note below |
| 2 | `Navbar` | Sticky Navbar | see fidelity note below |
| 3 | `HeroSlider` | Hero Slider | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `FeaturesGrid` | Features Grid | see fidelity note below |
| 6 | `AboutVideo` | About / Video Section | see fidelity note below |
| 7 | `Team` | Team Section | see fidelity note below |
| 8 | `Pricing` | Pricing Section | see fidelity note below |
| 9 | `FAQ` | FAQ Section | see fidelity note below |
| 10 | `Press` | Press Section | see fidelity note below |
| 11 | `Testimonials` | Testimonials | see fidelity note below |
| 12 | `Blog` | Blog Section | see fidelity note below |
| 13 | `Contact` | Contact Section | see fidelity note below |
| 14 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The top bar SHALL display contact info and social links with a gradient background.

### `Navbar`
The navbar SHALL display a logo and navigation links with a dropdown for About Us.

### `HeroSlider`
The hero section SHALL display rotating slides with background images, headings, and CTAs.

### `Services`
The services section SHALL display alternating image-text feature blocks.

### `FeaturesGrid`
The features section SHALL display a grid of service offerings.

### `AboutVideo`
The about section SHALL display company stats and a video thumbnail.

### `Team`
The team section SHALL display team member cards with photos, names, roles, and social links.

### `Pricing`
The pricing section SHALL display three pricing tiers with feature lists.

### `FAQ`
The FAQ section SHALL display frequently asked questions in a two-column layout.

### `Press`
The press section SHALL display press articles with dates and descriptions.

### `Testimonials`
The testimonials section SHALL display client testimonials with quotes and photos.

### `Blog`
The blog section SHALL display recent blog posts with images and metadata.

### `Contact`
The contact section SHALL display a contact form and sidebar CTA.

### `Footer`
The footer SHALL display company info, newsletter form, social links, and link to Component Dock.

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
- **Provenance ban.** No file under `apps/stratum/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stratum/public/CNAME` = `stratum.free.componentdock.com`
  and the package `homepage` = `https://stratum.free.componentdock.com`.
