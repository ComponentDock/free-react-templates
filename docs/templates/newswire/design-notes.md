# Newswire — Design Notes

Reference: **Meranda** — `https://colorlib.com/wp/template/meranda/`  
Live preview: `https://preview.colorlib.com/theme/meranda/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/meranda-free-template.jpg  
Shipped: https://newswire.free.componentdock.com

Newswire is a single-page news-magazine landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Meranda" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **B612 Mono**, **B612 Mono:wght@400;700**, **Cabin**

## Design tokens (`apps/newswire/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#8bc34a` | accent |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#808080` | body |
| `--color-soft` | `#f8f9fa` | soft |
| `--color-line` | `#dee2e6` | line |
| `--color-primary` | `#8bc34a` | primary scale so shared Button/ButtonLink (bg-primary-600) render accent lime |
| `--color-primary-50` | `#f7fbf0` | primary 50 |
| `--color-primary-100` | `#edf7de` | primary 100 |
| `--color-primary-200` | `#dbefbd` | primary 200 |
| `--color-primary-300` | `#c2e496` | primary 300 |
| `--color-primary-400` | `#a7d76c` | primary 400 |
| `--color-primary-500` | `#8bc34a` | primary 500 |
| `--color-primary-600` | `#7cb342` | primary 600 |
| `--color-primary-700` | `#689a38` | primary 700 |
| `--color-primary-800` | `#54792f` | primary 800 |
| `--color-primary-900` | `#445f27` | primary 900 |
| `--font-sans` | `'Cabin', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-mono` | `'B612 Mono', ui-monospace, SFMono-Regular, monospace` | font mono |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Navigation bar | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `HeroCarousel` | Hero carousel | see fidelity note below |
| 4 | `EditorsPick` | Editor's Pick section | see fidelity note below |
| 5 | `TrendingList` | Trending section | see fidelity note below |
| 6 | `FeaturedPost` | — | no dedicated spec block |
| 7 | `CategoryColumns` | Category sections | see fidelity note below |
| 8 | `RecentNews` | Recent News section | see fidelity note below |
| 9 | `PopularPosts` | Popular Posts section | see fidelity note below |
| 10 | `Pagination` | Pagination | see fidelity note below |
| 11 | `Subscribe` | Newsletter subscribe | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a top bar (site name, social icons, search input) and a sticky navigation bar with section links and a mobile off-canvas menu.

### `Navbar`
*anchors only* — Main

### `HeroCarousel`
The system SHALL render a hero carousel of featured-post slides, each with an image panel, an "Editor's Pick" caption, a headline, an excerpt, and post metadata, navigable with prev/next arrows and a dot nav.

### `EditorsPick`
The system SHALL render an "Editor's Pick" section with one large post card and a list of smaller post rows.

### `TrendingList`
The system SHALL render a "Trending" section with numbered post entries and a "See All Trends" link.

### `FeaturedPost`
*anchors only* — Featured post

### `CategoryColumns`
The system SHALL render Politics and Business category columns, each with a heading and a list of post entries.

### `RecentNews`
The system SHALL render a "Recent News" section with a list of post rows.

### `PopularPosts`
The system SHALL render a "Popular Posts" section with numbered post entries and a "See All Popular" link.

### `Pagination`
The system SHALL render a pagination control with numbered page links.

### `Subscribe`
The system SHALL render a light-background subscribe section with an email input and a submit button.

### `Footer`
The system SHALL render a footer with a copyright bar crediting the template origin.

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
- **Provenance ban.** No file under `apps/newswire/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/newswire/public/CNAME` = `newswire.free.componentdock.com`
  and the package `homepage` = `https://newswire.free.componentdock.com`.
