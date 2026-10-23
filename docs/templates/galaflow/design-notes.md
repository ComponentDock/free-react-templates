# Galaflow — Design Notes

Reference: **Eventro** — `https://colorlib.com/wp/template/eventro/`  
Live preview: `https://preview.colorlib.com/theme/eventro/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/eventro-free-template.jpg  
Shipped: https://galaflow.free.componentdock.com

A conference/event landing page template. Recreation of ColorLib **Eventro**. **ColorLib source:** https://colorlib.com/wp/template/eventro/ **Live preview:** https://preview.colorlib.com/theme/eventro/ **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/eventro-free-template.jpg **Stack:** Vite · React 19 · Tailwind CSS 4…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@200;300;400;500;600;700**, **Roboto**

## Design tokens (`apps/galaflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#fde449` | primary |
| `--color-primary-dark` | `#e6cf3f` | primary dark |
| `--color-secondary` | `#302072` | secondary |
| `--color-secondary-dark` | `#1e1450` | secondary dark |
| `--color-body-text` | `#79709d` | body text |
| `--color-heading` | `#302072` | heading |
| `--color-bg-light` | `#f6f7ff` | bg light |
| `--color-bg-blue` | `#0154f7` | bg blue |
| `--color-dark` | `#000000` | dark |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays correctly | see fidelity note below |
| 2 | `Hero` | Hero slider renders | see fidelity note below |
| 3 | `About` | About Conference section renders | see fidelity note below |
| 4 | `NewEra` | The New Era section renders | see fidelity note below |
| 5 | `Subscribe` | Subscribe section renders | see fidelity note below |
| 6 | `ProgramSchedule` | Program Schedule renders with tabs | see fidelity note below |
| 7 | `Speakers` | Speakers section renders | see fidelity note below |
| 8 | `BookSeat` | Book Your Seat section renders | see fidelity note below |
| 9 | `Footer` | Footer renders | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a transparent navbar with logo, navigation links, and a "Buy Ticket" button that becomes sticky with white background on scroll.

### `Hero`
Users SHALL see a full-viewport hero slider with two slides that auto-advance every 5 seconds.

### `About`
Users SHALL see the About section with a two-column layout containing conference information.

### `NewEra`
Users SHALL see The New Era section with a two-column layout and a call-to-action button.

### `Subscribe`
Users SHALL see a subscribe section with a background image and an email subscription form.

### `ProgramSchedule`
Users SHALL see a tabbed program schedule with 4 date tabs and 3 program entries per tab.

### `Speakers`
Users SHALL see a speakers section with a 4-column grid of speaker cards with hover effects.

### `BookSeat`
Users SHALL see a call-to-action section with a background image and a ticket purchase button.

### `Footer`
Users SHALL see a dark purple footer with three columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/galaflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/galaflow/public/CNAME` = `galaflow.free.componentdock.com`
  and the package `homepage` = `https://galaflow.free.componentdock.com`.
