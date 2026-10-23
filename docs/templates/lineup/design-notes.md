# Lineup — Design Notes

Reference: **Agenda** — `https://colorlib.com/wp/template/agenda/`  
Live preview: `https://preview.colorlib.com/theme/agenda/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/agenda-free-template.jpg  
Shipped: https://lineup.free.componentdock.com

Lineup is an event calendar and concert listing landing page template. It provides a hero with countdown, event showcases, regional event browsing with location filtering, and newsletter signup — styled with a purple gradient brand palette.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@300;400;500;600;700;800**

## Design tokens (`apps/lineup/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-start` | `#ab00e5` | primary start |
| `--color-primary-end` | `#581479` | primary end |
| `--color-dark-btn` | `#231e23` | dark btn |
| `--color-body` | `#2f2f2f` | body |
| `--color-heading` | `#222222` | heading |
| `--color-muted` | `#777777` | muted |
| `--color-light-bg` | `#f8f8f8` | light bg |
| `--color-footer-bg` | `#231e23` | footer bg |
| `--color-rating` | `#9a28d7` | rating |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and CTA | see fidelity note below |
| 2 | `Hero` | Hero section with countdown | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `FeaturedEvents` | Featured events grid | see fidelity note below |
| 5 | `NextEvents` | Next events section | see fidelity note below |
| 6 | `RegionalEvents` | Regional events section | see fidelity note below |
| 7 | `Newsletter` | Newsletter subscription form | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a fixed navigation bar with logo, nav links (Home, About us, Events, News, Contact), and a "Buy Tickets" gradient CTA button. The navbar SHALL scroll from transparent to white with shadow. The navbar SHALL include a hamburger menu toggle for mobile viewports that opens/closes the mobile nav.

### `Hero`
The template SHALL render a full-width hero section with a background image, a countdown display (Days, Hours, Minutes, Seconds), a heading "We have the best events. Get your ticket now!", and an "Order here" gradient CTA button. Slide navigation arrows SHALL be present.

### `About`
The template SHALL render a two-column about section with an illustration image on the left, a heading "What is Lineup and why choose our services?", a description paragraph, and two CTA buttons ("Read More" gradient and "Register Now" dark).

### `FeaturedEvents`
The template SHALL render a grid of event cards with images, titles, and dates. Cards SHALL use a mix of full-width and half-width layouts. Each card SHALL have a hover zoom effect on the image.

### `NextEvents`
The template SHALL render an "Our next events" section with a heading, description, and three event cards. Each card SHALL display an image, rating badge, title, date, description, and "Buy Tickets" link.

### `RegionalEvents`
The template SHALL render an "Events in [Location]" section with a location dropdown selector, a horizontal event slider with overlay links, and a partners section with partner name badges. Changing the location dropdown SHALL update the heading.

### `Newsletter`
The template SHALL render a newsletter section with a heading, subtitle, and a form with Name input, Email input, and Subscribe gradient button. Form submission SHALL be prevented (no page reload).

### `Footer`
The template SHALL render a footer with logo, navigation links, copyright text with a "Component Dock" link (https://www.componentdock.com/), and social media icons (Twitter/X, Instagram, LinkedIn, Facebook).

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
- **Provenance ban.** No file under `apps/lineup/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lineup/public/CNAME` = `lineup.free.componentdock.com`
  and the package `homepage` = `https://lineup.free.componentdock.com`.
