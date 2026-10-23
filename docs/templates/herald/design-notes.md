# Herald — Design Notes

Reference: **Ednews** — `https://colorlib.com/wp/template/ednews/`  
Live preview: `https://preview.colorlib.com/theme/ednews/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ednews-free-template.jpg  
Shipped: https://herald.free.componentdock.com

Herald is a single-page news-portal template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Ednews" website template (see TEMPLATES.md, Blog section, line 256), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Encode Sans Expanded**, **Encode Sans Expanded:wght@400;600;700**, **Roboto**

## Design tokens (`apps/herald/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#0c0e68` | primary |
| `--color-primary-dark` | `#050658` | primary dark |
| `--color-nav` | `#0a2d8b` | nav |
| `--color-accent` | `#e3493d` | accent |
| `--color-linkblue` | `#2458c5` | linkblue |
| `--color-ash` | `#888888` | ash |
| `--color-fb` | `#4270e8` | fb |
| `--color-twtr` | `#39cbf0` | twtr |
| `--color-gogl` | `#f63f39` | gogl |
| `--color-rss` | `#edaa15` | rss |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Encode Sans Expanded', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top utility bar | see fidelity note below |
| 2 | `MiddleHeader` | Middle header with ad banner | see fidelity note below |
| 3 | `NavBar` | — | no dedicated spec block |
| 4 | `BreakingNews` | Breaking news strip | see fidelity note below |
| 5 | `HeroGrid` | Hero slider grid | see fidelity note below |
| 6 | `TodayFeatured` | Today featured + news list (main column) | see fidelity note below |
| 7 | `SidebarOne` | Sidebar — Stay Connect, news list, review | see fidelity note below |
| 8 | `VideoSection` | Featured video section | see fidelity note below |
| 9 | `CategorySection` | Category sections (Politics, Sport) | see fidelity note below |
| 10 | `CategoryGrid` | 2×2 category grid (Lifestyle, Business, Culture, Tech) | see fidelity note below |
| 11 | `SidebarTwo` | Sidebar — Most Read, Authors, Banner, Newsletter | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a thin top bar above the header with location/weather, date/time on the left and social icon links on the right.

### `MiddleHeader`
The system SHALL render a header row with the site logo on the left and a photo-backed ad banner with a white READ MORE button on the right.

### `NavBar`
*anchors only* — Main

### `BreakingNews`
The system SHALL render a breaking-news bar with a red BREAKING NEWS tag, a ticker headline link, and a search form.

### `HeroGrid`
The system SHALL render a bento-style hero grid of four photo cards with gradient overlays, uppercase headlines, and meta rows.

### `TodayFeatured`
The system SHALL render a "TODAY FEATURED" card followed by six side-thumbnail news cards in the main column.

### `SidebarOne`
The system SHALL render a sidebar with a social-follower card, a news list, and a review card.

### `VideoSection`
The system SHALL render a navy "FEATURED VIDEO" section with four video cards that show a play overlay on hover.

### `CategorySection`
The system SHALL render POLITICS and SPORT cards, each with a lead image + headline + excerpt and four left-bordered mini headlines.

### `CategoryGrid`
The system SHALL render a two-column grid of four category cards, each with an image, headline, meta, divider, and three paragraphs.

### `SidebarTwo`
The system SHALL render a sidebar with MOST READ, ARTICLES BY AUTHOR, a photo banner card, and a NEWSLETTER signup card.

### `Footer`
The system SHALL render a navy footer with a faint map background, four link columns, a bottom row (logo, blurb, social icons), and a dark bottom bar.

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
- **Provenance ban.** No file under `apps/herald/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/herald/public/CNAME` = `herald.free.componentdock.com`
  and the package `homepage` = `https://herald.free.componentdock.com`.
