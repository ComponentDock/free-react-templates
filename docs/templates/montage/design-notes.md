# Montage — Design Notes

Reference: **Videomag** — `https://colorlib.com/wp/template/videomag/`  
Live preview: `https://preview.colorlib.com/theme/videomag/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/videomag-free-template.jpg  
Shipped: https://montage.free.componentdock.com

Montage is a single-page video & magazine landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Videomag" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/montage/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff1662` | brand |
| `--color-brand-dark` | `#e10735` | brand dark |
| `--color-ink` | `#000000` | ink |
| `--color-coal` | `#282828` | coal |
| `--color-smoke` | `#312e2e` | smoke |
| `--color-footer` | `#1f1c1c` | footer |
| `--color-mist` | `#edf1f4` | mist |
| `--color-body` | `#6a6a6a` | body |
| `--color-mute` | `#a5a5a5` | mute |
| `--color-line` | `#dcdcdc` | line |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Top header bar | see fidelity note below |
| 2 | `Navbar` | Main navigation bar | see fidelity note below |
| 3 | `HeroGrid` | Hero featured grid | see fidelity note below |
| 4 | `VideoTabs` | Travel videos section | see fidelity note below |
| 5 | `TravelVideos` | Small videos section | see fidelity note below |
| 6 | `SmallVideos` | Tabbed video carousels | see fidelity note below |
| 7 | `AdBanner` | Ad banner | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a pink top header bar with the site logo on the left and an ad-banner placeholder on the right.

### `Navbar`
The system SHALL render a dark navbar below the header with the menu items Home, Videos, Pages, Features, Music, Contact and a search input.

### `HeroGrid`
The system SHALL render a masonry-style hero grid of featured video cards on a light background, with one large primary card and several smaller cards.

### `VideoTabs`
The system SHALL render a "Travel Videos" section below the tabs with a featured card and a list of video posts.

### `TravelVideos`
The system SHALL render a "small videos" content area with a mix of vertical cards and horizontal thumbnail-left rows.

### `SmallVideos`
The system SHALL render a tabbed section with three tabs (Latest, Top Viewed, See All Videos), each showing a row of video cards with prev/next controls.

### `AdBanner`
The system SHALL render a full-width ad-banner placeholder between the content sections and the footer.

### `Footer`
The system SHALL render a dark footer with widget columns (Useful Links, About Us, Video Categories), social links and a copyright bar.

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
- **Provenance ban.** No file under `apps/montage/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/montage/public/CNAME` = `montage.free.componentdock.com`
  and the package `homepage` = `https://montage.free.componentdock.com`.
