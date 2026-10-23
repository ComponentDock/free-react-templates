# Vynl — Design Notes

Reference: **Dj** — `https://colorlib.com/wp/template/dj/`  
Live preview: `https://preview.colorlib.com/theme/dj/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dj-free-template.jpg  
Shipped: https://vynl.free.componentdock.com

Vynl is a DJ/music event website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Dj" website template design, built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;700**, **Nunito**

## Design tokens (`apps/vynl/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-gold` | `#e4ae50` | brand gold |
| `--color-brand-dark` | `#000000` | brand dark |
| `--color-brand-body` | `rgba(255, 255, 255, 0.5)` | brand body |
| `--color-brand-footer-text` | `#737373` | brand footer text |
| `--color-brand-footer-link` | `#999999` | brand footer link |
| `--font-heading` | `'Montserrat', sans-serif` | font heading |
| `--font-body` | `'Nunito', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and dropdown | see fidelity note below |
| 2 | `Hero` | Hero section with background image and CTA | see fidelity note below |
| 3 | `FeaturedEvents` | Featured Events section with 3 event cards | see fidelity note below |
| 4 | `UpcomingEvents` | Upcoming Events section with asymmetric grid | see fidelity note below |
| 5 | `VideoAbout` | Video/About section with play button | see fidelity note below |
| 6 | `Footer` | Footer with about, social, subscribe, and video | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed navigation bar with the brand name "Vynl." with a gold dot accent, desktop navigation links (Home, DJs, Shows, Events, About, Contact), a dropdown submenu under Shows, and a mobile hamburger menu that toggles open/closed.

### `Hero`
The template SHALL display a hero section with a full-width background image, a "Vynl Music Fest" heading, descriptive text, and a "Join Us" button linking to the events section.

### `FeaturedEvents`
The template SHALL display a "Featured Events" section with 3 event cards in a responsive grid. Each card SHALL have an image, date badge (day and month), title, description, and "Info" link.

### `UpcomingEvents`
The template SHALL display an "Upcoming Events" section with an asymmetric image grid: one large image on the left and two smaller stacked images on the right, each with an overlay title.

### `VideoAbout`
The template SHALL display a two-column section with a video thumbnail and play button on the left, and a "We Love Music" heading with description and "Join Us" button on the right.

### `Footer`
The template SHALL display a footer with three columns: About Us with navigation links, Follow Us with social icons and a Subscribe form, and Watch Video with a video thumbnail. The footer bottom SHALL contain a copyright notice with a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/vynl/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vynl/public/CNAME` = `vynl.free.componentdock.com`
  and the package `homepage` = `https://vynl.free.componentdock.com`.
