# Brio — Design Notes

Reference: **Typo** — `https://colorlib.com/wp/template/typo/`  
Live preview: `https://preview.colorlib.com/theme/typo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/typo-bright-free-app-landing-page-template.jpg  
Shipped: https://brio.free.componentdock.com

Brio is a bright app landing page template recreating the ColorLib Typo design. It showcases a hero with warm gradient, feature sections, a dark offer area, process grid, newsletter subscription, and a full footer — all built with React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/brio/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-brio-coral` | `#f76268` | brio coral |
| `--color-brio-yellow` | `#fce08a` | brio yellow |
| `--color-brio-pink` | `#f67590` | brio pink |
| `--color-brio-teal` | `#4cd3e3` | brio teal |
| `--color-brio-blue` | `#38a4ff` | brio blue |
| `--color-brio-red` | `#f44a40` | brio red |
| `--color-brio-dark` | `#222222` | brio dark |
| `--color-brio-muted` | `#777777` | brio muted |
| `--color-brio-light` | `#f9f9ff` | brio light |
| `--color-brio-white` | `#ffffff` | brio white |
| `--color-brio-black` | `#000000` | brio black |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Hero` | Hero section with gradient overlay | see fidelity note below |
| 2 | `Navbar` | Navbar with mobile toggle | see fidelity note below |
| 3 | `AboutTop` | About Top section with split layout | see fidelity note below |
| 4 | `Features` | Features section with three columns | see fidelity note below |
| 5 | `Offer` | Offer section with dark background | see fidelity note below |
| 6 | `AboutBottom` | About Bottom section with CTA | see fidelity note below |
| 7 | `Process` | Process section with 3x3 grid | see fidelity note below |
| 8 | `Newsletter` | Newsletter subscription form | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Hero`
The template SHALL display a full-width hero with a coral-to-yellow gradient background, heading, description text, and a "Get Started" CTA button linking to the about section.

### `Navbar`
The template SHALL display a navigation bar with the "Brio" logo, desktop nav links (About, Features, Services, Process), and a mobile hamburger toggle.

### `AboutTop`
The template SHALL display a split layout with an image on the left and two feature items (icon + heading + description) on the right.

### `Features`
The template SHALL display a three-column features section with two text features and one image.

### `Offer`
The template SHALL display a dark-background offer section with heading, app screen image, and description.

### `AboutBottom`
The template SHALL display a split layout with text and a "Learn More" CTA on the left and an image on the right.

### `Process`
The template SHALL display a 3x3 grid of 9 process items, each with an icon, title, and description.

### `Newsletter`
The template SHALL display a dark-background newsletter section with an email subscription form.

### `Footer`
The template SHALL display a 4-column footer (Top Products, Navigation, Compare, About) with copyright and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/brio/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/brio/public/CNAME` = `brio.free.componentdock.com`
  and the package `homepage` = `https://brio.free.componentdock.com`.
