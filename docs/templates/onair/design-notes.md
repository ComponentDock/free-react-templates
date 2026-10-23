# Onair — Design Notes

Reference: **Razo** — `https://colorlib.com/wp/template/razo/`  
Live preview: `https://preview.colorlib.com/theme/razo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/razo-free-template.jpg  
Shipped: https://onair.free.componentdock.com

OnAir is a free React website template that recreates the ColorLib Razo radio/music template as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. It provides a radio station website with hero, blog, music charts, video, app download, schedule, and news sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**, **Oswald**

## Design tokens (`apps/onair/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#dc2878` | brand |
| `--color-brand-dark` | `#c0206a` | brand dark |
| `--color-heading` | `#191919` | heading |
| `--color-body` | `#6e6e6e` | body |
| `--color-gray-bg` | `#e7f2fd` | gray bg |
| `--color-overlay` | `#000000` | overlay |
| `--color-border` | `#e5e5e5` | border |
| `--color-secondary` | `#a6a6a6` | secondary |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Open Sans (body) + Oswald (headings) via Google Fonts link in index.html |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with brand and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section displays with CTA | see fidelity note below |
| 3 | `Blog` | Blog section shows featured and trending posts | see fidelity note below |
| 4 | `MusicCharts` | Music charts section shows track listings | see fidelity note below |
| 5 | `TrendingVideo` | Trending video section renders | see fidelity note below |
| 6 | `AppDownload` | App download section renders | see fidelity note below |
| 7 | `WeeklySchedule` | Weekly schedule table renders | see fidelity note below |
| 8 | `LatestNews` | Latest news section renders | see fidelity note below |
| 9 | `Footer` | Footer contains Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navbar with the OnAir brand logo and navigation links for Home, Shows, Charts, Podcasts, Events, and Blog.

### `Hero`
The template SHALL display a full-width hero section with a background image, main headline, subtitle, and a "Book Now" call-to-action button.

### `Blog`
The template SHALL display a two-column blog section with a featured post, small posts, and a trending sidebar.

### `MusicCharts`
The template SHALL display a dark overlay section with music track listings including thumbnails, titles, artists, and price buttons.

### `TrendingVideo`
The template SHALL display a video section with a featured video area and a grid of video thumbnails.

### `AppDownload`
The template SHALL display a dark overlay section with app download information and store buttons.

### `WeeklySchedule`
The template SHALL display a responsive schedule table with day columns and show listings.

### `LatestNews`
The template SHALL display a grid of news posts with background images and overlay text.

### `Footer`
The template SHALL display a footer with brand, contact info, social feeds, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/onair/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/onair/public/CNAME` = `onair.free.componentdock.com`
  and the package `homepage` = `https://onair.free.componentdock.com`.
