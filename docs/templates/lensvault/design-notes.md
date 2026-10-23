# Lensvault — Design Notes

Reference: **Bitmap** — `https://colorlib.com/wp/template/bitmap/`  
Live preview: `https://preview.colorlib.com/theme/bitmap/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bitmap-free-template.jpg  
Shipped: https://lensvault.free.componentdock.com

LensVault is a photography portfolio website template featuring a sticky navigation bar, a full-width hero banner with parallax overlay, a filterable 4-column photo gallery, client testimonials, a services grid, an Instagram feed, and a dark footer with newsletter signup and Component Dock attribution.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/lensvault/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-brand` | `#fcdc00` | brand |
| `--color-brand-dark` | `#04091e` | brand dark |
| `--color-text-primary` | `#222222` | text primary |
| `--color-text-secondary` | `#777777` | text secondary |
| `--color-white` | `#ffffff` | white |
| `--color-black` | `#000000` | black |
| `--color-footer-bg` | `#222222` | footer bg |
| `--color-footer-text` | `rgba(255, 255, 255, 0.6)` | footer text |
| `--color-footer-heading` | `rgba(255, 255, 255, 0.9)` | footer heading |
| `--color-border` | `#eeeeee` | border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `Gallery` | Filterable photo gallery | see fidelity note below |
| 4 | `Testimonials` | Client testimonials | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `InstagramFeed` | Instagram feed | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky top navigation bar with logo text, navigation links, and a search icon button.

### `Hero`
The template SHALL display a full-width hero banner with a dark background image, centered heading, subtitle, and a CTA button.

### `Gallery`
The template SHALL display a 4-column grid of 12 photography items with filter tabs, hover overlays, and a "Load More" button.

### `Testimonials`
The template SHALL display a two-column testimonials section with a heading and multiple testimonial entries.

### `Services`
The template SHALL display a services section with a heading and 6 service cards in a 3-column grid.

### `InstagramFeed`
The template SHALL display an Instagram feed section with a follow button and a row of 6 images.

### `Footer`
The template SHALL display a dark footer with three columns: About Me, Newsletter, and Follow Me, plus a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/lensvault/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lensvault/public/CNAME` = `lensvault.free.componentdock.com`
  and the package `homepage` = `https://lensvault.free.componentdock.com`.
