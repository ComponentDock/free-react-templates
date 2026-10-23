# Spread — Design Notes

Reference: **Mag** — `https://colorlib.com/wp/template/mag/`  
Live preview: `https://preview.colorlib.com/theme/mag/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/mag-free-template.jpg  
Shipped: https://spread.free.componentdock.com

Spread is a video/magazine template — a React recreation of the ColorLib free "Mag" template (preview: https://preview.colorlib.com/theme/mag/). Built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. **Source mapping:** `apps/spread` recreates `https://colorlib.com/wp/template/mag/`.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/spread/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ed3974` | Spread brand palette — pink/magenta accent |
| `--color-brand-hover` | `#d63068` | brand hover |
| `--color-gold` | `#bb8950` | gold |
| `--color-section-bg` | `#f2f4f5` | Section backgrounds |
| `--color-footer-bg` | `#252324` | footer bg |
| `--color-nav-bg` | `#1a1a1a` | nav bg |
| `--color-body` | `#3d3d3d` | Text |
| `--color-muted` | `#777777` | muted |
| `--color-heading` | `#111111` | heading |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Fonts |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with logo and navigation links | see fidelity note below |
| 2 | `HeroCarousel` | Hero carousel renders 3 slides | see fidelity note below |
| 3 | `FeaturedVideo` | Featured video section displays main content | see fidelity note below |
| 4 | `TrendingNow` | Trending Now section displays 3 cards | see fidelity note below |
| 5 | `FeaturedVideos` | Featured Videos grid displays 4 posts | see fidelity note below |
| 6 | `MostViewedVideos` | — | no dedicated spec block |
| 7 | `Sidebar` | Sidebar shows Most Popular and Latest Videos | see fidelity note below |
| 8 | `Footer` | Footer contains branding and Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
Spread SHALL render a sticky top navigation bar with the "Spread" logo, navigation links (Home, Archive, Pages, Mega, Categories), a search icon, and a mobile hamburger toggle.

### `HeroCarousel`
Spread SHALL render a hero section with 3 carousel slides, each showing a background image, dark overlay, category badge, title, and a play button.

### `FeaturedVideo`
Spread SHALL render a featured video section with a large video card, play button, category badge, title, excerpt, share buttons, and social links.

### `TrendingNow`
Spread SHALL render a "Trending Now" section with 3 post cards in a grid.

### `FeaturedVideos`
Spread SHALL render a "Featured Videos" section with 4 video post cards in a 2-column grid.

### `MostViewedVideos`
*anchors only* — Most Viewed Videos

### `Sidebar`
Spread SHALL render a sidebar with "Most Popular" posts (5 items with thumbnails) and "Latest Videos" posts (5 items with thumbnails), plus an ad placeholder.

### `Footer`
Spread SHALL render a footer with About section, Quick Links, Categories, Newsletter signup, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/spread/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/spread/public/CNAME` = `spread.free.componentdock.com`
  and the package `homepage` = `https://spread.free.componentdock.com`.
