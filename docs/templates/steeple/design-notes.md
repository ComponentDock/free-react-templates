# Steeple — Design Notes

Reference: **Reborn** — `https://colorlib.com/wp/template/reborn/`  
Live preview: `https://preview.colorlib.com/theme/reborn/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/reborn-free-template.jpg  
Shipped: https://steeple.free.componentdock.com

Steeple is a single-page church & religious community website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:ital,wght@0,200;0,300;0,400;0,700;0,900;1,300;1,400**

## Design tokens (`apps/steeple/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-500` | `#71899f` | primary 500 |
| `--color-primary-600` | `#5c7893` | primary 600 |
| `--color-primary-700` | `#4d657b` | primary 700 |
| `--color-primary-800` | `#485e74` | primary 800 |
| `--color-accent` | `#eec60a` | accent |
| `--color-footer` | `#4d667d` | footer |
| `--color-light` | `#f8f9fa` | light |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `rgb(0 0 0 / 0.5)` | body |
| `--color-navlink` | `rgb(0 0 0 / 0.6)` | navlink |
| `--color-postdate` | `rgb(0 0 0 / 0.4)` | postdate |
| `--color-footlink` | `rgb(255 255 255 / 0.3)` | footlink |
| `--color-dot` | `#cccccc` | dot |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `LatestSermon` | Latest Sermon section | see fidelity note below |
| 4 | `About` | About Our Church section | see fidelity note below |
| 5 | `FeatureGrid` | Feature grid | see fidelity note below |
| 6 | `RecentEvents` | Recent Events carousel | see fidelity note below |
| 7 | `QuickContact` | Quick contact strip | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed white navbar with a light-grey inner bar, a light-weight text logo, uppercase navigation links, a two-level Beliefs dropdown, and a mobile hamburger menu.

### `Hero`
The system SHALL render a full-viewport hero slider with two slides, each with a background image and a centered white headline with a bold accent phrase, plus side navigation arrows.

### `LatestSermon`
The system SHALL render a light-grey section with a centered heading, a featured sermon line, and an audio player.

### `About`
The system SHALL render a split about section with a photo in a gold offset frame with a circular play button, a heading, a sub-line, body copy, and a "Watch Video" link.

### `FeatureGrid`
The system SHALL render a light-grey 2×2 feature grid with four items, each with an icon, uppercase title, blurb, and "Read More" link.

### `RecentEvents`
The system SHALL render a white events section with a centered heading and a carousel of event cards.

### `QuickContact`
The system SHALL render a steel-blue contact strip with three columns: Location, Service Times, and Get In Touch.

### `Footer`
The system SHALL render a slate-blue footer with an About column and pill button, two link columns, social icons, and a bottom bar.

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
- **Provenance ban.** No file under `apps/steeple/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/steeple/public/CNAME` = `steeple.free.componentdock.com`
  and the package `homepage` = `https://steeple.free.componentdock.com`.
