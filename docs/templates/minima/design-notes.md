# Minima — Design Notes

Reference: **Avo** — `https://colorlib.com/wp/template/avo/`  
Live preview: `https://preview.colorlib.com/theme/avo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/avo-free-templatel.jpg  
Shipped: https://minima.free.componentdock.com

Minima is a minimalist portfolio/agency landing page template, recreating the ColorLib "Avo" design under a new name. It features a dark hero with stat counters, about/services section, portfolio showcase, testimonials, CTA banner, blog grid, and multi-column footer with Component Dock branding.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@400;600;700;800**

## Design tokens (`apps/minima/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-nunito` | `'Nunito Sans', sans-serif` | font nunito |
| `--color-brand` | `#d1002c` | brand |
| `--color-brand-dark` | `#a80023` | brand dark |
| `--color-ink` | `#000000` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--color-surface` | `#ffffff` | surface |
| `--color-surface-alt` | `#f3f3f3` | surface alt |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar with responsive mobile menu | see fidelity note below |
| 2 | `Hero` | Hero section with stats and CTA | see fidelity note below |
| 3 | `About` | About section with services and welcome text | see fidelity note below |
| 4 | `Portfolio` | Portfolio showcase with alternating layout | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `CtaBanner` | CTA banner with dark background | see fidelity note below |
| 7 | `Blog` | Blog grid with 4 posts | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a fixed top navigation bar with the brand logo and links to all sections (Home, About, Services, Portfolio, Blog, Contact).

### `Hero`
The template SHALL render a full-screen hero section with a dark overlay background image, stat counters, headline, description, and a CTA button.

### `About`
The template SHALL display a services grid with 5 service cards and a split about section with text and an image.

### `Portfolio`
The template SHALL display 3 portfolio items with alternating image/text layout, each with category, title, description, author, and CTA.

### `Testimonials`
The template SHALL display client testimonials with quotes, author names, and positions.

### `CtaBanner`
The template SHALL display a call-to-action banner with a dark background, heading, and primary action button.

### `Blog`
The template SHALL display 4 recent blog post cards with images, titles, dates, authors, and comment counts.

### `Footer`
The template SHALL render a multi-column footer with brand info, link columns, contact information, and a copyright line linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/minima/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/minima/public/CNAME` = `minima.free.componentdock.com`
  and the package `homepage` = `https://minima.free.componentdock.com`.
