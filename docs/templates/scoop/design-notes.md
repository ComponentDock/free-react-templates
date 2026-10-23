# Scoop — Design Notes

Reference: **Force** — `https://colorlib.com/wp/template/force/`  
Live preview: `https://preview.colorlib.com/theme/force/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/force-free-template.jpg  
Shipped: https://scoop.free.componentdock.com

Scoop is a news/magazine template — a React recreation of the ColorLib free "Force" template (preview: https://preview.colorlib.com/theme/force/). Built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. **Source mapping:** `apps/scoop` recreates `https://colorlib.com/wp/template/force/`.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**, **Roboto**

## Design tokens (`apps/scoop/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff1857` | Scoop brand palette — hot pink accent |
| `--color-brand-hover` | `#e0154d` | brand hover |
| `--color-body` | `#777777` | body |
| `--color-heading` | `#222222` | heading |
| `--color-section-bg` | `#f9f9ff` | Section backgrounds |
| `--color-footer-bg` | `#04091e` | footer bg |
| `--color-footer-title-bg` | `#161a29` | footer title bg |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Fonts |
| `--font-heading` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top menu bar | see fidelity note below |
| 2 | `LogoHeader` | Logo header with banner ad | see fidelity note below |
| 3 | `Navbar` | Main navigation bar | see fidelity note below |
| 4 | `HeroBanner` | Hero banner carousel | see fidelity note below |
| 5 | `EditorsChoice` | Editor's Choice grid | see fidelity note below |
| 6 | `LatestNews` | — | no dedicated spec block |
| 7 | `TravelFood` | — | no dedicated spec block |
| 8 | `WeddingAdventure` | — | no dedicated spec block |
| 9 | `MostPopularNews` | — | no dedicated spec block |
| 10 | `SocialNetworks` | — | no dedicated spec block |
| 11 | `Newsletter` | — | no dedicated spec block |
| 12 | `ProductListArea` | Product List area (3-column) | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a thin top bar with the current date on the left and social media icon links (Facebook, Twitter, Dribbble, Behance) on the right.

### `LogoHeader`
The system SHALL render a logo section containing the site logo on the left and a banner/magazine advertisement image on the right.

### `Navbar`
The system SHALL render a main navigation with the site logo (mobile brand), main links (Home, Category, Archive, Elements, Contact), and a search icon on the right. The nav collapses into a hamburger menu on mobile.

### `HeroBanner`
The system SHALL render a full-width hero banner with a Bootstrap-style carousel containing 3 slides, each with a category tag, date, comment count, headline text, and a "Read More" button. The carousel has dot/line indicators and auto-advances.

### `EditorsChoice`
The system SHALL render an "Editor's Choice" section with 4 equal-width article cards in a row, each containing an image, category tag ("Gadgets"), date, comment count, headline, and description paragraph.

### `LatestNews`
*anchors only* — Gadgets · March 14, 2018 · Latest News

### `TravelFood`
*anchors only* — March 14, 2018 · Travel and food · Gadgets

### `WeddingAdventure`
*anchors only* — Wedding adventure · Gadgets · March 14, 2018

### `MostPopularNews`
*anchors only* — Previous · Next · Most Popular News · Gadgets · March 14, 2018 · Mar 14

### `SocialNetworks`
*anchors only* — Social Networks

### `Newsletter`
*anchors only* — Email address · Newsletter · Subscribe to our Newsletter · Subscribe

### `ProductListArea`
The system SHALL render a product list area with 3 equal columns, each with a heading and 4 horizontal article cards (thumbnail + headline + date + comments). Columns: "Best Product Deals", "Tech Culture", "Brilliant Ideas".

### `Footer`
The system SHALL render a three-column footer with: 1. Left: site logo + description paragraph 2. Center: "Quick Links" heading with two columns of link lists (Sitemaps, Categories, Archives, Advertise, Ad Choice / Privacy Policy, Terms of Use, Help Center, Newsletters, Feedback) 3. Right: "Most Viewed News" heading with 2 article cards (thumbnail + headline + date + comments) The footer bottom SHALL contain a copyright line linking to Component Dock (instead of ColorLib) and social media icon links (Facebook, Twitter, YouTube, Pinterest, RSS).

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
- **Provenance ban.** No file under `apps/scoop/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/scoop/public/CNAME` = `scoop.free.componentdock.com`
  and the package `homepage` = `https://scoop.free.componentdock.com`.
