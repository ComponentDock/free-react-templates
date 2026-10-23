# Liturgy — Design Notes

Reference: **Advent** — `https://colorlib.com/wp/template/advent/`  
Live preview: `https://preview.colorlib.com/theme/advent/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/advent-free-template.jpg  
Shipped: https://liturgy.free.componentdock.com

A church template with hero slider, upcoming events, worship time and recent sermons sections. Recreation of ColorLib's **Advent** church website template (`https://colorlib.com/wp/template/advent/`) as a React 19 + Vite + Tailwind 4 + TypeScript application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;700;800**, **Playfair Display**

## Design tokens (`apps/liturgy/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-golden-50` | `#fff8e1` | Liturgy brand palette — recreated from the ColorLib Advent church design |
| `--color-golden-100` | `#ffecb3` | golden 100 |
| `--color-golden-200` | `#ffe082` | golden 200 |
| `--color-golden-300` | `#ffd54f` | golden 300 |
| `--color-golden-400` | `#ffc107` | golden 400 |
| `--color-golden-500` | `#ffb300` | golden 500 |
| `--color-golden-600` | `#ffa000` | golden 600 |
| `--color-golden-700` | `#ff8f00` | golden 700 |
| `--color-golden-800` | `#ff6f00` | golden 800 |
| `--color-golden-900` | `#e65100` | golden 900 |
| `--color-charcoal-50` | `#f5f5f5` | charcoal 50 |
| `--color-charcoal-100` | `#e0e0e0` | charcoal 100 |
| `--color-charcoal-200` | `#b3b3b3` | charcoal 200 |
| `--color-charcoal-300` | `#808080` | charcoal 300 |
| `--color-charcoal-400` | `#555555` | charcoal 400 |
| `--color-charcoal-500` | `#404040` | charcoal 500 |
| `--color-charcoal-600` | `#333333` | charcoal 600 |
| `--color-charcoal-700` | `#2e2e2e` | charcoal 700 |
| `--color-charcoal-800` | `#262626` | charcoal 800 |
| `--color-charcoal-900` | `#1a1a1a` | charcoal 900 |
| `--font-heading` | `'Playfair Display', Times, serif` | font heading |
| `--font-body` | `'Open Sans', Arial, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `UpcomingEvents` | Upcoming events section | see fidelity note below |
| 4 | `WorshipTime` | Worship time section | see fidelity note below |
| 5 | `RecentSermons` | Recent sermons section | see fidelity note below |
| 6 | `Ministries` | Ministries section | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The app SHALL display a transparent navigation bar at the top of the page with the brand name "Liturgy" on the left and navigation links on the right.

### `HeroSlider`
The app SHALL display a full-viewport image carousel with centered white text and outline-white CTA buttons.

### `UpcomingEvents`
The app SHALL display an upcoming events section with a dark background, yellow section badge, event details, and a countdown timer.

### `WorshipTime`
The app SHALL display a worship time section with a split layout showing a schedule list on the left and an image on the right.

### `RecentSermons`
The app SHALL display a recent sermons section with 3 sermon cards in a grid, each with title, author, date, and an audio player.

### `Ministries`
The app SHALL display a ministries section with 3 ministry cards showing thumbnail, title, category, and description.

### `Footer`
The app SHALL display a dark footer with 3 columns (About, Quick Links, Contact Info), social icons, and a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/liturgy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/liturgy/public/CNAME` = `liturgy.free.componentdock.com`
  and the package `homepage` = `https://liturgy.free.componentdock.com`.
