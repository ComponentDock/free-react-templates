# Savory — Design Notes

Reference: **Bueno** — `https://colorlib.com/wp/template/bueno/`  
Live preview: `https://preview.colorlib.com/theme/bueno/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bueno-free-template.jpg  
Shipped: https://savory.free.componentdock.com

Savory is a single-page food-blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Bueno" entry in TEMPLATES.md (Beauty category — the design is a food/recipe blog), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**, **Playfair Display**

## Design tokens (`apps/savory/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#b0c364` | brand |
| `--color-brand-deep` | `#a3b65a` | brand deep |
| `--color-ink` | `#404040` | ink |
| `--color-meta` | `#7a7a7a` | meta |
| `--color-panel` | `#dadfe5` | panel |
| `--color-footer-text` | `#666666` | footer text |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Preloader` | Preloader | see fidelity note below |
| 2 | `TopBar` | Top header bar | see fidelity note below |
| 3 | `Navbar` | Navigation bar | see fidelity note below |
| 4 | `Hero` | Hero carousel | see fidelity note below |
| 5 | `CategoryCards` | Category cards | see fidelity note below |
| 6 | `BigPosts` | Big posts | see fidelity note below |
| 7 | `PostGrid` | Post grid and sidebar | see fidelity note below |
| 8 | `Sidebar` | Post grid and sidebar | see fidelity note below |
| 9 | `InstagramFeed` | Instagram feed | see fidelity note below |
| 10 | `TrendingPanel` | Trending panel | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Preloader`
The system SHALL render a full-screen sage-green preloader with a cooking animation that disappears once the page has loaded.

### `TopBar`
The system SHALL render a dark photo-overlay top bar with social icons on the left and a search form on the right.

### `Navbar`
The system SHALL render a centered-logo navigation bar with the site wordmark, page links, a Recipes mega menu, a Login/Register link and a hamburger trigger.

### `Hero`
The system SHALL render a hero carousel of post slides, each with a full-width image and a centered white overlay card, with previous/next controls.

### `CategoryCards`
The system SHALL render a 3-column row of category cards, each an image with a centered white content box that flips to sage green on hover.

### `BigPosts`
The system SHALL render two alternating large post rows, each with an image and centered text content including a Read More button.

### `PostGrid`
The system SHALL render a 3-column grid of small posts beside a sidebar with an ad widget and a recent-posts list.

### `Sidebar`
The system SHALL render a 3-column grid of small posts beside a sidebar with an ad widget and a recent-posts list.

### `InstagramFeed`
The system SHALL render a strip of 10 square image tiles labeled as an Instagram feed.

### `TrendingPanel`
The system SHALL render a slide-in trending posts panel on the right edge, opened by the hamburger trigger and closed by its close icon.

### `Footer`
The system SHALL render a footer with a copyright line and navigation links.

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
- **Provenance ban.** No file under `apps/savory/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/savory/public/CNAME` = `savory.free.componentdock.com`
  and the package `homepage` = `https://savory.free.componentdock.com`.
