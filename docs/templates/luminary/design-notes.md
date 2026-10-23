# Luminary — Design Notes

Reference: **Inspire** — `https://colorlib.com/wp/template/inspire/`  
Live preview: `https://preview.colorlib.com/theme/inspire/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/inspire-free-template.jpg  
Shipped: https://luminary.free.componentdock.com

An Inspiration / Creative Agency template with hero, services, about, concept and feature cta sections. Recreation of ColorLib "Inspire" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rubik:wght@300;400;500;700**

## Design tokens (`apps/luminary/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1daff3` | brand |
| `--color-brand-hover` | `#30b6f4` | brand hover |
| `--color-dark` | `#2c3e50` | dark |
| `--color-footer-bg` | `#2c3e50` | footer bg |
| `--color-copyright-bg` | `#243342` | copyright bg |
| `--color-heading` | `#212121` | heading |
| `--color-body-text` | `#777777` | body text |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--color-highlight` | `#1daff3` | highlight |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | Fonts: Rubik via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with logo and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section displays headline and play button | see fidelity note below |
| 3 | `Services` | Services section shows four service cards | see fidelity note below |
| 4 | `About` | About section displays features and image | see fidelity note below |
| 5 | `Concept` | Concept section shows parallax background | see fidelity note below |
| 6 | `Testimonials` | Testimonials carousel displays reviews | see fidelity note below |
| 7 | `FeatureCta` | Feature CTA section shows sharing prompt | see fidelity note below |
| 8 | `Footer` | Footer contains contact info, links, and Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar MUST display the logo "Luminary" with a colored dot accent, navigation links (Home, Services, FAQ, About, Contact), and be sticky on scroll. The mobile hamburger MUST toggle the mobile menu.

### `Hero`
The hero MUST display a full-width background image, centered headline, subtext, circular play button, and social icons.

### `Services`
The services section MUST display four cards in a row with icons, headings, and descriptions on a light background.

### `About`
The about section MUST show a heading, descriptive text with highlighted phrases, a 2x2 feature grid, and an image.

### `Concept`
The concept section MUST display a parallax background image, heading, description, and CTA button.

### `Testimonials`
The testimonials section MUST show testimonial cards with images, quotes, names, and prev/next navigation.

### `FeatureCta`
The feature CTA section MUST show a heading, description, author attribution, and image on a light background.

### `Footer`
The footer MUST have a dark background, three-column layout, social icons, and a "Component Dock" link in the copyright.

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
- **Provenance ban.** No file under `apps/luminary/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/luminary/public/CNAME` = `luminary.free.componentdock.com`
  and the package `homepage` = `https://luminary.free.componentdock.com`.
