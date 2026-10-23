# Anipulse — Design Notes

Reference: **Anime** — `https://colorlib.com/wp/template/anime/`  
Live preview: `https://preview.colorlib.com/theme/anime/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/anime-free-template.jpg  
Shipped: https://anipulse.free.componentdock.com

Anipulse is an anime streaming / catalog website template recreating the ColorLib "Anime" design under a new original name. It provides a dark-themed anime content site with a hero carousel, trending/popular/recent show grids, a sidebar with top views and comments, and a minimal footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Mulish**, **Mulish:wght@300;400;500;600;700;800;900**, **Oswald**

## Design tokens (`apps/anipulse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e53637` | brand |
| `--color-brand-dark` | `#ca2027` | brand dark |
| `--color-brand-hover` | `#ff4343` | brand hover |
| `--color-navy` | `#0b0c2a` | navy |
| `--color-navy-deep` | `#070720` | navy deep |
| `--color-navy-card` | `#0e1035` | navy card |
| `--color-navy-card-hover` | `#141640` | navy card hover |
| `--color-text-white` | `#ffffff` | text white |
| `--color-text-light` | `#b7b7b7` | text light |
| `--color-text-muted` | `#a6a6a6` | text muted |
| `--color-badge-dark` | `#3d3d3d` | badge dark |
| `--color-accent-gold` | `#e89f12` | accent gold |
| `--color-border-dark` | `#1a1c4a` | border dark |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Mulish', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Top bar with logo and navigation | see fidelity note below |
| 2 | `HeroCarousel` | Hero carousel with anime show slides | see fidelity note below |
| 3 | `ShowGrid` | Trending Now section with anime card grid | see fidelity note below |
| 4 | `Sidebar` | Sidebar with Top Views and filter tabs | see fidelity note below |
| 5 | `Footer` | Dark footer with navigation and copyright | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The top bar SHALL display the site logo on the left and main navigation links (Homepage, Categories, Our Blog, Contacts) on the right on a dark background.

### `HeroCarousel`
The hero section SHALL display a full-width carousel of anime show slides. Each slide SHALL have a background image with overlay, a category label (e.g., "Adventure"), show title, description text, and a "Watch Now" button with right arrow icon. The carousel SHALL auto-rotate between slides.

### `ShowGrid`
The trending section SHALL display a "Trending Now" heading with a red left accent bar, a "View All" link on the right, and a grid of anime cards on a dark background. Each card SHALL have a thumbnail image (325px height, 5px rounded corners), episode count badge (red, top-left), comment count badge (gray, bottom-left), view count badge (gray, bottom-right), genre tags (pill-shaped), and show title.

### `Sidebar`
The sidebar SHALL display a "Top Views" heading with filter tabs (Day, Week, Month, Years) and a list of top-viewed anime shows with episode counts, comment counts, and view counts.

### `Footer`
The footer SHALL display on a dark `#070720` background with centered navigation links (Homepage, Categories, Our Blog, Contacts) and a copyright line with "Made with ♥ by Component Dock" linking to https://www.componentdock.com/. A scroll-to-top button SHALL be present above the footer.

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
- **Provenance ban.** No file under `apps/anipulse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/anipulse/public/CNAME` = `anipulse.free.componentdock.com`
  and the package `homepage` = `https://anipulse.free.componentdock.com`.
