# Lede — Design Notes

Reference: **Magazine** — `https://colorlib.com/wp/template/magazine/`  
Live preview: `https://preview.colorlib.com/theme/magazine/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/magazine-free-template.jpg  
Shipped: https://lede.free.componentdock.com

Lede is a single-page news-magazine landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Magazine" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/lede/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-navy` | `#04091e` | navy |
| `--color-primary` | `#f6214b` | primary |
| `--color-primary-50` | `#fef1f4` | primary 50 |
| `--color-primary-100` | `#fde3e9` | primary 100 |
| `--color-primary-200` | `#fbc7d3` | primary 200 |
| `--color-primary-300` | `#f89aae` | primary 300 |
| `--color-primary-400` | `#f4627f` | primary 400 |
| `--color-primary-500` | `#f6214b` | primary 500 |
| `--color-primary-600` | `#f6214b` | primary 600 |
| `--color-primary-700` | `#d40f38` | primary 700 |
| `--color-primary-800` | `#af0f32` | primary 800 |
| `--color-primary-900` | `#8f112f` | primary 900 |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#777777` | body |
| `--color-page` | `#ecf0f1` | page |
| `--color-fb` | `#4c63a2` | fb |
| `--color-tw` | `#69c9ff` | tw |
| `--color-yt` | `#c41713` | yt |
| `--color-rss` | `#f17300` | rss |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins (body + headings) via Google Fonts <link> in index.html. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Header with top bar, logo strip, and navigation | see fidelity note below |
| 2 | `LogoStrip` | — | no dedicated spec block |
| 3 | `Navbar` | — | no dedicated spec block |
| 4 | `TopPosts` | Top posts hero | see fidelity note below |
| 5 | `NewsTicker` | Breaking news ticker | see fidelity note below |
| 6 | `LatestNews` | Latest news list | see fidelity note below |
| 7 | `AdWidget` | Ad widget | see fidelity note below |
| 8 | `PopularPosts` | Popular posts | see fidelity note below |
| 9 | `RelevantStories` | Relevant stories | see fidelity note below |
| 10 | `Sidebar` | Sidebar widgets | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a header composed of a dark top utility bar, a white logo strip, and a dark navigation bar with links and a search control.

### `LogoStrip`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Navbar`
*anchors only* — Main navigation · search · region · Mobile menu

### `TopPosts`
The system SHALL render a hero area with one large feature post on the left and two smaller stacked posts on the right, each with a category tag, title, and meta line.

### `NewsTicker`
The system SHALL render a white ticker strip with a "Breaking News" label and a headline link.

### `LatestNews`
The system SHALL render a "Latest News" section with at least four image-left/text-right post rows, each with a tag, title, meta, and excerpt.

### `AdWidget`
The system SHALL render a full-width ad banner between the Latest News list and the Popular Posts section.

### `PopularPosts`
The system SHALL render a "Popular Posts" section with one full-width feature post followed by a two-column grid of two posts.

### `RelevantStories`
The system SHALL render a "Relevant Stories" section with at least three image-left/text-right post rows.

### `Sidebar`
The system SHALL render a sidebar with Editor's Pick, ad, Newsletter, Most Popular, and Social Networks widgets.

### `Footer`
The system SHALL render a dark footer with five widget columns, a copyright line, and social icons.

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
- **Provenance ban.** No file under `apps/lede/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lede/public/CNAME` = `lede.free.componentdock.com`
  and the package `homepage` = `https://lede.free.componentdock.com`.
