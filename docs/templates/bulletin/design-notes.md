# Bulletin — Design Notes

Reference: **Newsflex** — `https://colorlib.com/wp/template/newsflex/`  
Live preview: `https://preview.colorlib.com/theme/newsbox/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/newsbox-free-template.jpg  
Shipped: https://bulletin.free.componentdock.com

Bulletin is a single-page news magazine website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "NewsFlex" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/bulletin/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#ef1b48` | accent |
| `--color-mist` | `#f0f4f8` | mist |
| `--color-ink` | `#232323` | ink |
| `--color-inklight` | `#404040` | inklight |
| `--color-meta` | `#636363` | meta |
| `--color-ash` | `#8a8a8a` | ash |
| `--color-pale` | `#a9a9a9` | pale |
| `--color-hairline` | `#d6dfe2` | hairline |
| `--color-field` | `#d4dfe3` | field |
| `--color-primary` | `#ef1b48` | primary |
| `--color-primary-50` | `#fef2f5` | primary 50 |
| `--color-primary-100` | `#fddde5` | primary 100 |
| `--color-primary-200` | `#fbb8ca` | primary 200 |
| `--color-primary-300` | `#f88da9` | primary 300 |
| `--color-primary-400` | `#f45d84` | primary 400 |
| `--color-primary-500` | `#f13562` | primary 500 |
| `--color-primary-600` | `#ef1b48` | primary 600 |
| `--color-primary-700` | `#c8143b` | primary 700 |
| `--color-primary-800` | `#a31030` | primary 800 |
| `--color-primary-900` | `#7e0d26` | primary 900 |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Ticker` | Breaking news ticker | see fidelity note below |
| 3 | `Hero` | Hero carousel | see fidelity note below |
| 4 | `NewsTabs` | All the news tabs | see fidelity note below |
| 5 | `Sidebar` | — | no dedicated spec block |
| 6 | `VideoSection` | Video section | see fidelity note below |
| 7 | `TopNews` | Top news grid | see fidelity note below |
| 8 | `BigAdd` | Big add area | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a navbar with the site name "Bulletin", anchor links to the page's sections, and a header add area.

### `Ticker`
The system SHALL render a breaking-news bar below the navbar with a "Trending" label and a scrolling list of headlines.

### `Hero`
The system SHALL render a hero carousel of featured posts that auto-advances and supports manual navigation.

### `NewsTabs`
The system SHALL render a tabbed news section titled "All the news" with LATEST, POPULAR, INTERNATIONAL, and LOCAL tabs, each pane containing two large cards and six small thumb-left rows.

### `Sidebar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `VideoSection`
The system SHALL render a full-width video section with a centered play button, date, title, and a strip of video post cards below.

### `TopNews`
The system SHALL render a "top news" grid of six post cards in three columns.

### `BigAdd`
The system SHALL render a full-width advertisement placeholder below the top news grid.

### `Footer`
The system SHALL render a footer with a centered logo, footer nav links, social icons, and a copyright bar.

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
- **Provenance ban.** No file under `apps/bulletin/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bulletin/public/CNAME` = `bulletin.free.componentdock.com`
  and the package `homepage` = `https://bulletin.free.componentdock.com`.
