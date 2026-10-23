# Fragzone — Design Notes

Reference: **Game Warrior** — `https://colorlib.com/wp/template/game-warrior/`  
Live preview: `https://preview.colorlib.com/theme/game-warrior/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/gamewarrior-free-template.jpg  
Shipped: https://fragzone.free.componentdock.com

Fragzone is a gaming website template recreating the ColorLib Game Warrior design under a new original name. It provides a complete gaming community site with navbar, hero banner, latest news ticker, game category cards, recent games gallery, tournament listings, review cards, and a dark footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@300;400;500;600;700**

## Design tokens (`apps/fragzone/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#ffb320` | primary |
| `--color-primary-dark` | `#e5a01a` | primary dark |
| `--color-heading` | `#131313` | heading |
| `--color-card` | `#252525` | card |
| `--color-surface` | `#eef2f6` | surface |
| `--color-ink` | `#222222` | ink |
| `--color-badge-red` | `#ff205f` | badge red |
| `--color-badge-green` | `#4eae60` | badge green |
| `--color-badge-purple` | `#694eae` | badge purple |
| `--color-badge-blue` | `#40abf5` | badge blue |
| `--color-badge-orange` | `#fb6e10` | badge orange |
| `--color-badge-gold` | `#ffb320` | badge gold |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo, navigation links, and join button | see fidelity note below |
| 2 | `Hero` | Hero section with background image and CTA | see fidelity note below |
| 3 | `LatestNews` | Latest news ticker bar | see fidelity note below |
| 4 | `GameTypes` | Game types category cards | see fidelity note below |
| 5 | `RecentGames` | Recent games gallery | see fidelity note below |
| 6 | `Tournaments` | Tournament listings | see fidelity note below |
| 7 | `RecentReviews` | Recent reviews section | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display a logo with gaming icon, navigation links to all sections, and a "Join Now" pill button. The mobile view SHALL show a hamburger menu that toggles a dropdown.

### `Hero`
The hero section SHALL display a full-width background image with a dark overlay, a heading "The Best Games Out There" with a gold-accented "Games" word, descriptive text, and an "Explore Games" call-to-action button.

### `LatestNews`
The latest news section SHALL show a split bar with a gold "Latest News" label on the left and a dark ticker on the right with badge-tagged news items.

### `GameTypes`
The game types section SHALL display four equal-width cards with background images, dark overlays, category badges (New Release, Strategy, RPG, Racing), titles, descriptions, and comment counts.

### `RecentGames`
The recent games section SHALL display three game cards on a light background, each with a badge overlay, image, title, description, and comment count.

### `Tournaments`
The tournaments section SHALL display two tournament cards on a dark background, each with a "Premium Tournament" badge, image, game title, dates, participant count, organizer, and prize information.

### `RecentReviews`
The recent reviews section SHALL display four review cards on a dark background, each with a color-coded circular rating badge, game image, title, and description.

### `Footer`
The footer SHALL display a dark background with three columns (brand, latest posts, top comments), and a bottom bar with "Made with ♥ by Component Dock" linking to https://www.componentdock.com/ and footer navigation links.

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
- **Provenance ban.** No file under `apps/fragzone/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fragzone/public/CNAME` = `fragzone.free.componentdock.com`
  and the package `homepage` = `https://fragzone.free.componentdock.com`.
