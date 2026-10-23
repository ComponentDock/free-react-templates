# Pressroom — Design Notes

Reference: **News** — `https://colorlib.com/wp/template/news/`  
Live preview: `https://preview.colorlib.com/theme/news/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/news-free-template.jpg  
Shipped: https://pressroom.free.componentdock.com

Pressroom is a single-page news/magazine portal template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow**, **Barlow:wght@400;500;600;700;800**, **Roboto**

## Design tokens (`apps/pressroom/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff2143` | brand |
| `--color-brand-deep` | `#ca292e` | brand deep |
| `--color-badge-red` | `#ed4141` | badge red |
| `--color-badge-blue` | `#0077b5` | badge blue |
| `--color-badge-green` | `#13c600` | badge green |
| `--color-badge-purple` | `#8a3ab9` | badge purple |
| `--color-navy` | `#051441` | navy |
| `--color-footer` | `#070b11` | footer |
| `--color-footertext` | `#9fa6bd` | footertext |
| `--color-toptxt` | `#cdcfd8` | toptxt |
| `--color-meta` | `#707b8e` | meta |
| `--color-meta2` | `#888888` | meta2 |
| `--color-surface` | `#f4f4f4` | surface |
| `--font-heading` | `'Barlow', ui-sans-serif, system-ui, sans-serif` | Barlow (headings) + Roboto (body) — Google Fonts via index.html |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | 3-row header (black top bar, gray mid bar, red nav) | see fidelity note below |
| 2 | `MidBar` | — | no dedicated spec block |
| 3 | `Navbar` | — | no dedicated spec block |
| 4 | `Hero` | Hero featured slider with mini-article column | see fidelity note below |
| 5 | `WhatsNew` | What's New section with category tabs and news grid | see fidelity note below |
| 6 | `BannerAd` | Full-width banner ad | see fidelity note below |
| 7 | `MostRecent` | Most Recent row | see fidelity note below |
| 8 | `TrendingNews` | Trending News carousel with Most Popular widget | see fidelity note below |
| 9 | `VideoSection` | — | no dedicated spec block |
| 10 | `OldSpondon` | Old Spondon News dot carousel | see fidelity note below |
| 11 | `Footer` | Near-black footer with Popular post widget | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a header of three stacked bars: a black top bar with a "trending" label, a short headline, and a phone number; a gray mid bar with the red square "Pressroom" logo (red background, white wordmark), a banner-ad image on the right, and social icons; and a bright red (`#ff2143`) sticky navigation bar with uppercase white links Home, About, Category, Latest News, Pages, Blog, Blog Details, Element, and Contact, plus a search icon and social icons on the right.

### `MidBar`
*anchors only* — Pressroom home · Pressroom

### `Navbar`
*anchors only* — Main · Toggle menu · Search · Mobile

### `Hero`
The system SHALL render a hero row on a gray background: on the left, a featured slider with three slides, each showing a large news photo, a red category badge (e.g. "Business"), a big white headline, and a byline; on the right, a column with two stacked mini articles, each with a small photo and a colored category badge (blue "Fashion", green "Tech").

### `WhatsNew`
The system SHALL render a "What's New" section with the heading "Whats New", category tabs (Lifestyle, Travel, Fashion, Sports, Technology), and a news grid of cards. Each card SHALL show a rounded image, a title, and a byline; hovering a card title SHALL color it red.

### `BannerAd`
The system SHALL render a full-width banner ad image between the What's New section and the Most Recent section, and a second full-width banner image inside a gray band (`banner-area`) after the Old Spondon News carousel.

### `MostRecent`
The system SHALL render a "Most Recent" row with the heading "Most Recent" and large news cards, each showing an image with a purple category badge, a title, and a byline.

### `TrendingNews`
The system SHALL render a "Trending News" section (gray background) with the heading "Trending News" and a carousel of news cards, plus a "Most Popular" widget listing small posts with a thumbnail, title, and byline.

### `VideoSection`
*anchors only* — Latest videos · Latest Video - 2020

### `OldSpondon`
The system SHALL render an "Old Spondon News - 2020" section with a dot-style carousel of news cards, each showing an image, a title, and a date.

### `Footer`
The system SHALL render a footer with a near-black background (`#070b11`) and three columns: an "About" column (logo, paragraph, address, phone numbers), a "Popular post" widget listing three small posts, and a banner ad image. A centered copyright line SHALL appear at the bottom.

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
- **Provenance ban.** No file under `apps/pressroom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pressroom/public/CNAME` = `pressroom.free.componentdock.com`
  and the package `homepage` = `https://pressroom.free.componentdock.com`.
