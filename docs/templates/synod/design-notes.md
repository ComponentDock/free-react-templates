# Synod — Design Notes

Reference: **Church Wordpress Themes** — `https://colorlib.com/wp/template/church-wordpress-themes/`  
Live preview: `https://preview.colorlib.com/theme/church-wordpress-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wordpress-church-themes-1.jpg  
Shipped: https://synod.free.componentdock.com

Recreate the ColorLib "Church WordPress Themes" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page church landing template under the name "Synod". The original preview was unreachable; the design is derived from the ColorLib screenshot.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/synod/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c0392b` | brand |
| `--color-dark` | `#333333` | dark |
| `--color-heading` | `#222222` | heading |
| `--color-muted` | `#777777` | muted |
| `--color-border` | `#eeeeee` | border |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar with countdown and donate CTA | see fidelity note below |
| 2 | `Hero` | Hero section with background image and CTA | see fidelity note below |
| 3 | `Sermon` | Sermon section with media actions | see fidelity note below |
| 4 | `About` | About section with image and text | see fidelity note below |
| 5 | `Features` | Features grid | see fidelity note below |
| 6 | `Events` | Events section | see fidelity note below |
| 7 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a dark countdown bar at the top showing time remaining to an event, a navbar with logo, desktop navigation links, search icon, and a red "Donate" button. The mobile hamburger menu SHALL toggle open/closed on click and close when a link is tapped.

### `Hero`
The template SHALL display a full-width hero section with a background image, a large heading, subtitle text, and a "Join us" CTA button linking to the about section. Decorative slide arrows SHALL be rendered.

### `Sermon`
The template SHALL display a sermon section with a circular pastor avatar, a red quote heading, sermon metadata (speaker, date, category), and four media action buttons (watch, listen, gallery, links).

### `About`
The template SHALL render a two-column about section with an image on the left and heading, paragraphs, and a "Read More" link on the right.

### `Features`
The template SHALL display a three-column grid of feature cards, each with an icon, title, and description text.

### `Events`
The template SHALL show upcoming church events in a grid, each with a date, title, and location.

### `Footer`
The template SHALL render a dark footer with three columns (about, quick links, contact info), a copyright line, and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/synod/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/synod/public/CNAME` = `synod.free.componentdock.com`
  and the package `homepage` = `https://synod.free.componentdock.com`.
