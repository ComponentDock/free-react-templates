# Artgallery — Design Notes

Reference: **Art Museum** — `https://colorlib.com/wp/template/art-museum/`  
Live preview: `https://preview.colorlib.com/theme/art-museum/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/artmuseum-free-template-1.jpg  
Shipped: https://artgallery.free.componentdock.com

A Landing Page template with top bar with utility, full-viewport hero with art, three info cards with icons and decorative quote sections. Recreation of ColorLib **Art Museum** template as a free React museum and art gallery website template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;600;700**, **Poppins**

## Design tokens (`apps/artgallery/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-playfair` | `'Playfair Display', serif` | font playfair |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-accent` | `#7ec843` | accent |
| `--color-accent-dark` | `#6ab535` | accent dark |
| `--color-navy` | `#1a2b3c` | navy |
| `--color-navy-light` | `#243a50` | navy light |
| `--color-body` | `#333333` | body |
| `--color-muted` | `#777777` | muted |
| `--color-light-bg` | `#f5f5f5` | light bg |
| `--color-white` | `#ffffff` | white |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar with utility links and social icons | see fidelity note below |
| 2 | `Navbar` | Transparent navbar with mobile menu | see fidelity note below |
| 3 | `Hero` | Full-viewport hero with art background | see fidelity note below |
| 4 | `InfoCards` | Three info cards with icons | see fidelity note below |
| 5 | `Quote` | Decorative quote section | see fidelity note below |
| 6 | `Gallery` | Image gallery with lightbox | see fidelity note below |
| 7 | `Events` | Upcoming events section | see fidelity note below |
| 8 | `Ticket` | Ticket pricing section | see fidelity note below |
| 9 | `Blog` | Blog post previews | see fidelity note below |
| 10 | `Contact` | Contact form and map placeholder | see fidelity note below |
| 11 | `Footer` | Dark footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL display a thin dark navy top bar with utility links and social icons.

### `Navbar`
The template SHALL display a transparent navbar overlaid on the hero that becomes solid on scroll, with a mobile hamburger menu.

### `Hero`
The template SHALL display a full-viewport hero section with an art background image, dark overlay, exhibition heading, and green CTA button.

### `InfoCards`
The template SHALL display three info cards in a row on a white background with green icons.

### `Quote`
The template SHALL display a decorative quote with description text.

### `Gallery`
The template SHALL display a grid of artwork images that opens a lightbox overlay on click.

### `Events`
The template SHALL display upcoming event cards with date, title, description, and location.

### `Ticket`
The template SHALL display ticket pricing cards with features and buy buttons.

### `Blog`
The template SHALL display blog post preview cards with image, title, excerpt, and date.

### `Contact`
The template SHALL display a contact form with fields and a map placeholder.

### `Footer`
The template SHALL display a dark footer with multiple columns, social icons, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/artgallery/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/artgallery/public/CNAME` = `artgallery.free.componentdock.com`
  and the package `homepage` = `https://artgallery.free.componentdock.com`.
