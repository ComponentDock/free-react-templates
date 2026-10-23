# Frontpage — Design Notes

Reference: **Aznews** — `https://colorlib.com/wp/template/aznews/`  
Live preview: `https://preview.colorlib.com/theme/aznews/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/aznews-free-template.jpg  
Shipped: https://frontpage.free.componentdock.com

FrontPage is a single-page news & magazine template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Aznews" template (news/magazine portal), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. Design tokens captured from the original:

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700;900**

## Design tokens (`apps/frontpage/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fc3f00` | FrontPage brand palette |
| `--color-brand-light` | `#ff5722` | brand light |
| `--color-body` | `#506172` | body |
| `--color-heading` | `#000000` | heading |
| `--color-badge-pink` | `#ffe7e6` | Category badge palette |
| `--color-badge-green` | `#f4ffd5` | badge green |
| `--color-badge-blue` | `#e1fcff` | badge blue |
| `--color-badge-yellow` | `#fff9c6` | badge yellow |
| `--color-section-gray` | `#f7f7fd` | Section backgrounds |
| `--color-topbar` | `#000000` | topbar |
| `--color-footer` | `#191a25` | footer |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeaderTopBar` | Header middle | see fidelity note below |
| 2 | `HeaderMiddle` | — | no dedicated spec block |
| 3 | `Navbar` | Top bar | see fidelity note below |
| 4 | `TrendingArea` | Trending area | see fidelity note below |
| 5 | `WeeklyTopNews` | Weekly top news | see fidelity note below |
| 6 | `WhatsNew` | What's new section | see fidelity note below |
| 7 | `WeeklyTopNews2` | Weekly top news 2 | see fidelity note below |
| 8 | `RecentArticles` | Recent articles | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `HeaderTopBar`
The system SHALL render a header section with the site logo on the left and a banner ad placeholder on the right.

### `HeaderMiddle`
*anchors only* — Front · Page

### `Navbar`
The system SHALL render a black top bar with a date display and social media icons (Twitter, Instagram, Pinterest).

### `TrendingArea`
The system SHALL render a trending section with a large hero card (image + category badge + title overlay) alongside a list of smaller news cards and a sidebar with thumbnail items.

### `WeeklyTopNews`
The system SHALL render a "Weekly Top News" section with a horizontal list of four news cards, each showing an image, category badge, and title.

### `WhatsNew`
The system SHALL render a tabbed "What's New" section with category tabs (All, Lifestyle, Travel, Fashion, Sports, Technology), a 2x2 grid of news cards, a "Follow Us" sidebar with social follower counts, and an ad poster.

### `WeeklyTopNews2`
The system SHALL render a second "Weekly Top News" section on a gray background with news cards showing date, category badge, and title.

### `RecentArticles`
The system SHALL render a "Recent Articles" section with four news cards showing images, category badges, and titles.

### `Footer`
The system SHALL render a dark footer with three columns: logo + description + social icons, a newsletter subscription form, and an Instagram photo grid. A bottom bar SHALL show copyright text and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/frontpage/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/frontpage/public/CNAME` = `frontpage.free.componentdock.com`
  and the package `homepage` = `https://frontpage.free.componentdock.com`.
