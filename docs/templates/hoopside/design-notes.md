# Hoopside — Design Notes

Reference: **Thebasketball** — `https://colorlib.com/wp/template/thebasketball/`  
Live preview: `https://preview.colorlib.com/theme/thebasketball/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thebasketball-free-template.jpg  
Shipped: https://hoopside.free.componentdock.com

Recreation of ColorLib Thebasketball (https://colorlib.com/wp/template/thebasketball/) — a basketball sports landing page with hero countdown, latest match results, team roster, player statistics with tabs, latest videos carousel, product shop, and a fan club CTA. The new name is "Hoopside".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/hoopside/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#e02529` | primary |
| `--color-primary-dark` | `#c41e22` | primary dark |
| `--color-secondary` | `#2f76c7` | secondary |
| `--color-gold` | `#ecba0b` | gold |
| `--color-dark-bg` | `#100303` | dark bg |
| `--color-dark-surface` | `#111111` | dark surface |
| `--color-dark-card` | `#211e1e` | dark card |
| `--color-dark-muted` | `#2f2c2c` | dark muted |
| `--color-dark-border` | `#332d2e` | dark border |
| `--color-body-text` | `#111111` | body text |
| `--color-muted-text` | `#888888` | muted text |
| `--color-light-bg` | `#f5f5f5` | light bg |
| `--color-light-surface` | `#f7f5fa` | light surface |
| `--font-heading` | `'Oswald', sans-serif` | font heading |
| `--font-body` | `'Roboto', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with top bar and navigation | see fidelity note below |
| 2 | `Hero` | Hero section with countdown | see fidelity note below |
| 3 | `LatestResults` | Latest Results section | see fidelity note below |
| 4 | `TeamRoster` | Team roster section | see fidelity note below |
| 5 | `PlayerStatistics` | Player Statistics section with tabs | see fidelity note below |
| 6 | `LatestVideos` | Latest Videos section | see fidelity note below |
| 7 | `ProductShop` | Product/Shop section | see fidelity note below |
| 8 | `FanClubCTA` | — | no dedicated spec block |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The page SHALL render a header with a top bar (team email, support email, cart), a logo, and desktop navigation links (Home, About, Player, Shop, Pages, Blog, Contact).

### `Hero`
The page SHALL render a full-width hero section with a background image, overlay, headline about national leagues, a countdown timer (hours, minutes, seconds), and a "Book Tickets" CTA button.

### `LatestResults`
The page SHALL render a latest results section with a section title, a match results table, and a featured match display showing two teams.

### `TeamRoster`
The page SHALL render a team section with a heading, player cards showing player images, names, and positions.

### `PlayerStatistics`
The page SHALL render a statistics section with tabbed navigation (Goalkeepers, Defenders, Midfielders, Attackers), a player statistics slider, and a league points table.

### `LatestVideos`
The page SHALL render a latest videos section with a carousel of video thumbnails with titles.

### `ProductShop`
The page SHALL render a product section with category filters and a product carousel showing items with images, names, prices, and "Add to Cart" buttons.

### `FanClubCTA`
*anchors only* — Join Our Team · Join Our Fan Club and Get Free Tickets · Register

### `Footer`
The page SHALL render a footer with contact information, latest news links, a newsletter subscription form, and a copyright bar.

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
- **Provenance ban.** No file under `apps/hoopside/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hoopside/public/CNAME` = `hoopside.free.componentdock.com`
  and the package `homepage` = `https://hoopside.free.componentdock.com`.
