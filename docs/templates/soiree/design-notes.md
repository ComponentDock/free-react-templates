# Soiree — Design Notes

Reference: **Evento** — `https://colorlib.com/wp/template/evento/`  
Live preview: `https://preview.colorlib.com/theme/evento/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/evento-free-template.jpg  
Shipped: https://soiree.free.componentdock.com

Recreation of ColorLib "Evento" (https://colorlib.com/wp/template/evento/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Soiree". An event/conference landing page with hero, countdown, speakers, pricing, calendar, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;700;900**

## Design tokens (`apps/soiree/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-montserrat` | `'Montserrat', sans-serif` | font montserrat |
| `--color-brand` | `#f50136` | brand |
| `--color-brand-dark` | `#d9002e` | brand dark |
| `--color-heading` | `#18181c` | heading |
| `--color-body` | `#838383` | body |
| `--color-bg-gray` | `#f5f5f5` | bg gray |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `EventInfo` | Event info boxes | see fidelity note below |
| 4 | `Countdown` | Countdown timer | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Speakers` | Speakers section | see fidelity note below |
| 7 | `Pricing` | Pricing section | see fidelity note below |
| 8 | `Calendar` | Calendar section | see fidelity note below |
| 9 | `Partners` | Partners section | see fidelity note below |
| 10 | `GetTickets` | Get tickets section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The template SHALL render a fixed-top navbar with logo, navigation links, and search icon.

### `Hero`
The template SHALL render a full-width hero with background image, heading, date, and CTA button.

### `EventInfo`
The template SHALL display 4 event information boxes in a grid.

### `Countdown`
The template SHALL display a live countdown to the event date.

### `About`
The template SHALL display event description and feature cards.

### `Speakers`
The template SHALL display speaker cards with photos and info.

### `Pricing`
The template SHALL display 3 pricing tiers with features and CTA.

### `Calendar`
The template SHALL display upcoming events in a table.

### `Partners`
The template SHALL display partner logos on a gray background.

### `GetTickets`
The template SHALL display a call-to-action section with background image.

### `Footer`
The template SHALL render a footer with about info, social links, newsletter, and copyright.

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
- **Provenance ban.** No file under `apps/soiree/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/soiree/public/CNAME` = `soiree.free.componentdock.com`
  and the package `homepage` = `https://soiree.free.componentdock.com`.
