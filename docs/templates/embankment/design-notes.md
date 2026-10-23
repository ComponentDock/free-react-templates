# Embankment — Design Notes

Reference: **Builder** — `https://colorlib.com/wp/template/builder/`  
Live preview: `https://preview.colorlib.com/theme/builder/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/builder-free-template.jpg  
Shipped: https://embankment.free.componentdock.com

Embankment is a single-page construction company website in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Builder" free template, built under a DIFFERENT name (**Embankment**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@300;400;500;700**, **Poppins**, **Roboto**

## Design tokens (`apps/embankment/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-oswald` | `'Oswald', sans-serif` | font oswald |
| `--font-roboto` | `'Roboto', sans-serif` | font roboto |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-accent` | `#fab700` | accent |
| `--color-dark` | `#222222` | dark |
| `--color-muted` | `#777777` | muted |
| `--color-border` | `#eeeeee` | border |
| `--color-testimonial-bg` | `#f9f9ff` | testimonial bg |
| `--color-accent-hover` | `#f8b600` | accent hover |
| `--color-dark-overlay` | `rgba(0, 0, 0, 0.5)` | dark overlay |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopMenu` | Top menu bar with social icons and CTA | see fidelity note below |
| 2 | `Navbar` | Navigation bar with dropdowns | see fidelity note below |
| 3 | `HeroBanner` | Hero banner with centered content | see fidelity note below |
| 4 | `Services` | Services section with 3 cards | see fidelity note below |
| 5 | `Projects` | Latest projects gallery with hover overlay | see fidelity note below |
| 6 | `Team` | Team section with golden hover overlay | see fidelity note below |
| 7 | `Counter` | Counter statistics bar | see fidelity note below |
| 8 | `Features` | Features section with bordered cards | see fidelity note below |
| 9 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 10 | `ClientLogos` | Client logos | see fidelity note below |
| 11 | `Footer` | Footer with newsletter and Component Dock | see fidelity note below |

## Section-by-section fidelity

### `TopMenu`
The page SHALL display a thin top menu bar with social media icons (Facebook, Twitter, Dribbble), a language selector dropdown, and a golden "Free Quote!" button.

### `Navbar`
The page SHALL display a white navigation bar with a logo, 5 nav links (Home, About, Services, Pages with dropdown, Blog with dropdown, Contact), and a search icon. The navbar SHALL become sticky with a shadow on scroll.

### `HeroBanner`
The page SHALL display a full-width hero banner with a background image, centered heading "Build Your Dream" (with "Dream" in golden), a subtitle, and a dark "Discover Now" CTA button.

### `Services`
The page SHALL display 3 service cards (Building Drawings, Painting Constructions, Repairing Constructions) each with an icon, title link, and description.

### `Projects`
The page SHALL display 6 project cards in a 3-column grid. Each card shows a construction project image, and hovering reveals centered title and description text.

### `Team`
The page SHALL display 4 team member cards with photos, names, and positions. Hovering shows a golden semi-transparent overlay with social icons.

### `Counter`
The page SHALL display a golden background section with 5 animated stat blocks (Projects Completed, Happy Clients, Total Tasks, Cups of Coffee, In House Professionals).

### `Features`
The page SHALL display 6 feature cards in a 3-column grid, each with a line icon, title, and description, on white background with subtle border.

### `Testimonials`
The page SHALL display a carousel of testimonials with avatar images, quote text, names, and roles on a light purple-gray background.

### `ClientLogos`
The page SHALL display a row of grayscale client logos that brighten on hover.

### `Footer`
The page SHALL display a dark footer with About Us, Contact Us, and Newsletter sections, a newsletter form with email input and golden submit button, social media icons, and a copyright line with a Component Dock link.

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
- **Provenance ban.** No file under `apps/embankment/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/embankment/public/CNAME` = `embankment.free.componentdock.com`
  and the package `homepage` = `https://embankment.free.componentdock.com`.
