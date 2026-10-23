# Fragstorm — Design Notes

Reference: **Amin** — `https://colorlib.com/wp/template/amin/`  
Live preview: `https://preview.colorlib.com/theme/amin/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/amin-free-template.jpg  
Shipped: https://fragstorm.free.componentdock.com

Fragstorm is a gaming magazine template that recreates the ColorLib "Amin" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. It provides a dark-themed gaming news site with hero articles, review previews, tabbed update news, video guides, and Instagram posts.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cinzel**, **Cinzel:wght@400;700;900**, **Montserrat**

## Design tokens (`apps/fragstorm/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c20000` | brand |
| `--color-brand-light` | `#e10000` | brand light |
| `--color-nav` | `#9e0303` | nav |
| `--color-nav-hover` | `#a81d1d` | nav hover |
| `--color-nav-dark` | `#310a0a` | nav dark |
| `--color-nav-item` | `#4e0808` | nav item |
| `--color-logo-bg` | `#0d0d0d` | logo bg |
| `--color-body-bg` | `#080808` | body bg |
| `--color-card-bg` | `#161616` | card bg |
| `--color-text-primary` | `#ffffff` | text primary |
| `--color-text-body` | `#c4c4c4` | text body |
| `--color-text-muted` | `#666666` | text muted |
| `--color-border` | `#252525` | border |
| `--font-heading` | `'Cinzel', ui-serif, Georgia, serif` | font heading |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays weather, date, and social links | see fidelity note below |
| 2 | `Logo` | Logo section shows brand name centered | see fidelity note below |
| 3 | `Navbar` | Navbar provides navigation with mobile support | see fidelity note below |
| 4 | `Hero` | Hero section displays featured article and trending posts | see fidelity note below |
| 5 | `LatestPreview` | Latest Preview shows review-score cards in a grid | see fidelity note below |
| 6 | `UpdateNews` | Update News provides tabbed content by platform | see fidelity note below |
| 7 | `VideoGuide` | Video Guide shows 3-column video cards | see fidelity note below |
| 8 | `InstagramPosts` | Instagram Posts shows image grid with hover overlay | see fidelity note below |
| 9 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
Users SHALL see a thin top bar with a weather widget, date, and social media icon links.

### `Logo`
Users SHALL see the "Fragstorm" brand name centered on a dark background.

### `Navbar`
Users SHALL see a red navigation bar with links to Home, Platform, Pages, Reviews, Windows, and Videos. On mobile, a hamburger menu SHALL toggle the nav links.

### `Hero`
Users SHALL see a featured article with headline, author, and date on the left, and trending posts on the right.

### `LatestPreview`
Users SHALL see game review cards with images and circular score indicators.

### `UpdateNews`
Users SHALL see news articles organized by platform tabs (PlayStation, Windows, Mobile, Xbox). Clicking a tab SHALL show articles for that platform.

### `VideoGuide`
Users SHALL see video guide cards with thumbnails, play overlay on hover, and metadata.

### `InstagramPosts`
Users SHALL see a 4-column Instagram image grid with a follow overlay on hover.

### `Footer`
Users SHALL see a footer with link columns and a copyright line linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/fragstorm/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fragstorm/public/CNAME` = `fragstorm.free.componentdock.com`
  and the package `homepage` = `https://fragstorm.free.componentdock.com`.
