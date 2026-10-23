# Fortis — Design Notes

Reference: **Mighty** — `https://colorlib.com/wp/template/mighty/`  
Live preview: `https://preview.colorlib.com/theme/mighty/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/mighty-free-template.jpg  
Shipped: https://fortis.free.componentdock.com

Fortis is a single-page web-design-agency landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;500;700**

## Design tokens (`apps/fortis/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#01d28e` | brand |
| `--color-light` | `#f6f5f5` | Custom light section background (services, counters, testimonials). |
| `--color-footer` | `#efefef` | Footer background. |
| `--color-body` | `#364d59` | Body copy (#364d59) and muted text (#777) from the reference. |
| `--color-muted` | `#777` | muted |
| `--color-primary-50` | `#ecfdf5` | primary 50 |
| `--color-primary-100` | `#d1fae5` | primary 100 |
| `--color-primary-200` | `#a7f3d0` | primary 200 |
| `--color-primary-300` | `#6ee7b7` | primary 300 |
| `--color-primary-400` | `#34d399` | primary 400 |
| `--color-primary-500` | `#10b981` | primary 500 |
| `--color-primary-600` | `#01d28e` | primary 600 |
| `--color-primary-700` | `#01b87c` | primary 700 |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Fixed navbar with brand, hamburger menu and sticky white state | see fidelity note below |
| 2 | `Hero` | Full-height hero with photo background, headline and ghost CTA | see fidelity note below |
| 3 | `About` | About section with three columns | see fidelity note below |
| 4 | `Services` | Services section with four icon cards | see fidelity note below |
| 5 | `Works` | Works gallery with six hoverable tiles | see fidelity note below |
| 6 | `Counters` | Counters band with four stats | see fidelity note below |
| 7 | `Studio` | See Our Studio video block | see fidelity note below |
| 8 | `Testimonials` | Testimonials section with three quotes | see fidelity note below |
| 9 | `Blog` | Blog section with three post cards | see fidelity note below |
| 10 | `Footer` | Light footer with four widget columns and copyright bar | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed top navbar with the brand "Fortis." on the left and a hamburger toggler on the right. Activating the toggler SHALL open an off-canvas/full-screen menu with the links Home, About, Work, Journal and Contact. When the page is scrolled, the navbar SHALL switch to a solid white background with a subtle shadow, the brand SHALL turn green `#01d28e`, and the menu links SHALL turn black.

### `Hero`
The system SHALL render a hero section with a full-viewport-height photo background darkened by a `rgba(0,0,0,0.7)` overlay, a centered white headline "Fortis Web Design Agency", a short paragraph, and a ghost pill button "Contact Us".

### `About`
The system SHALL render an About section as three columns: text with the heading "About Us", two paragraphs and a solid green "Our works" pill button; a centered photo; and a "Our expertise and skills" column with four progress bars (Writing 55%, WordPress 85%, Bootstrap 93%, jQuery 83%).

### `Services`
The system SHALL render a light `#f6f5f5` services section with the heading "Our Services" (centered, double-underline) and four white cards — Web Design, Graphic Design, Web Apps, Ecommerce — each with an icon, a title and a short description, gaining a soft shadow on hover.

### `Works`
The system SHALL render a "Our Works" section with six photo tiles in a responsive 3-column grid; hovering a tile SHALL reveal a dark overlay and a centered white plus icon.

### `Counters`
The system SHALL render a light-background counters band with four icon-plus-number stats: 83 Happy Clients, 3892 Cup of Coffee, 3,923,892 Line of Codes and 3892 Project Finish.

### `Studio`
The system SHALL render a "See Our Studio" section with a centered image and a circular play button (70px, white 2px border) overlaying it, with a subtle dark veil.

### `Testimonials`
The system SHALL render a light-background testimonials section with the heading "Testimonials" and three columns, each with a 70px circular headshot, an italic quote and an attribution.

### `Blog`
The system SHALL render a white blog section with the heading "Blog" and three post cards, each with an image, a title link, a meta line (date · by Author) and an excerpt.

### `Footer`
The system SHALL render a light `#efefef` footer with four widget columns — "About Me" text, "Quick Links", "Connect" social icons plus "Newsletter" form — and a bottom copyright bar.

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
- **Provenance ban.** No file under `apps/fortis/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fortis/public/CNAME` = `fortis.free.componentdock.com`
  and the package `homepage` = `https://fortis.free.componentdock.com`.
