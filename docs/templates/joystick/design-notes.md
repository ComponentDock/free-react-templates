# Joystick — Design Notes

Reference: **Egames** — `https://colorlib.com/wp/template/egames/`  
Live preview: `https://preview.colorlib.com/theme/egames/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/egames-free-template-1.jpg  
Shipped: https://joystick.free.componentdock.com

Joystick is a gaming magazine website template featuring a hero slider, game showcase grid, tabbed monthly picks, video reviews with interactive navigation, latest articles section, and a full footer. It recreates the ColorLib Egames design using React, Tailwind CSS 4, and TypeScript under the "Joystick" brand name.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**

## Design tokens (`apps/joystick/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e6fbfb` | primary 50 |
| `--color-primary-100` | `#b3f3f3` | primary 100 |
| `--color-primary-200` | `#80eaea` | primary 200 |
| `--color-primary-300` | `#4de1e1` | primary 300 |
| `--color-primary-400` | `#20d8da` | primary 400 |
| `--color-primary-500` | `#1ac0c2` | primary 500 |
| `--color-primary-600` | `#159a9c` | primary 600 |
| `--color-primary-700` | `#107476` | primary 700 |
| `--color-primary-800` | `#0b4e50` | primary 800 |
| `--color-primary-900` | `#06282a` | primary 900 |
| `--color-dark` | `#1a1a1a` | Dark section backgrounds. |
| `--color-darker` | `#111111` | darker |
| `--color-ink` | `#424242` | Heading color (ColorLib #424242). |
| `--color-smoke` | `#939393` | Muted body text (ColorLib #939393). |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Open Sans via Google Fonts <link> in index.html. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with brand, search, login, and navigation | see fidelity note below |
| 2 | `Hero` | Hero section with background image and overlay | see fidelity note below |
| 3 | `Games` | Games showcase grid | see fidelity note below |
| 4 | `MonthlyPicks` | Monthly Picks with tabbed interface | see fidelity note below |
| 5 | `VideoReviews` | Video Reviews with interactive navigation | see fidelity note below |
| 6 | `LatestArticles` | Latest Articles section | see fidelity note below |
| 7 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Joystick SHALL render a top bar with brand logo, search form, and login link, followed by a sticky dark navigation bar with links (Home, Games, Articles, Reviews, Contact) and social media icons.

### `Hero`
Joystick SHALL display a full-width hero section with a background image, dark overlay, heading text "The Power of Gaming", and descriptive paragraph.

### `Games`
Joystick SHALL display a 3-column grid of game cards, each with a game image and a "View Games" button.

### `MonthlyPicks`
Joystick SHALL display a "This Month's Pick" section with three tabs (Popular, Latest, Editor's Pick) that show different game cards when clicked. Each game card shows an image, title, user rating, and genre badge.

### `VideoReviews`
Joystick SHALL display a video reviews section with a vertical list of video items on the left and a main video preview area on the right. Clicking a video item updates the active selection and main preview.

### `LatestArticles`
Joystick SHALL display a "Latest Articles" section with article cards (thumbnail, title, date, comment count, excerpt) and a sidebar with a deal/promo widget.

### `Footer`
Joystick SHALL render a 4-column footer with brand description, Game Reviews links, Useful Links, and What's New links. The copyright bar MUST link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/joystick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/joystick/public/CNAME` = `joystick.free.componentdock.com`
  and the package `homepage` = `https://joystick.free.componentdock.com`.
