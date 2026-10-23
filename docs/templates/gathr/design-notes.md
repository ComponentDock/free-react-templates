# Gathr — Design Notes

Reference: **Evento** — `https://colorlib.com/wp/template/evento/`  
Live preview: `https://preview.colorlib.com/theme/evento/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/evento-free-template.jpg  
Shipped: https://gathr.free.componentdock.com

Gathr is a single-page event/conference landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Evento" free template (source: https://colorlib.com/wp/template/evento/), built under a DIFFERENT name (**Gathr**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800**

## Design tokens (`apps/gathr/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#f50136` | Gathr brand palette — vivid red primary |
| `--color-primary-dark` | `#d4002e` | primary dark |
| `--color-dark` | `#18181c` | dark |
| `--color-body-text` | `#838383` | body text |
| `--color-light` | `#ffffff` | light |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Montserrat — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `EventInfo` | Event info cards | see fidelity note below |
| 4 | `Countdown` | Countdown timer | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Features` | Features grid | see fidelity note below |
| 7 | `Speakers` | Speakers gallery | see fidelity note below |
| 8 | `Pricing` | Pricing table | see fidelity note below |
| 9 | `Calendar` | Event calendar table | see fidelity note below |
| 10 | `Partners` | Partners section | see fidelity note below |
| 11 | `CtaBanner` | CTA banner | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed-top navigation bar with logo text and nav links.

### `Hero`
The system SHALL render a full-screen hero with event headline, date, and CTA button.

### `EventInfo`
The system SHALL render 4 event info cards in a row.

### `Countdown`
The system SHALL render a countdown section with a timer counting down to a target date.

### `About`
The system SHALL render an "About the Event" section with descriptive text.

### `Features`
The system SHALL render 4 feature cards with icons.

### `Speakers`
The system SHALL render a speakers section with speaker cards.

### `Pricing`
The system SHALL render 3 pricing tiers with feature lists.

### `Calendar`
The system SHALL render an upcoming events table.

### `Partners`
The system SHALL render partner logos on a gray background.

### `CtaBanner`
The system SHALL render a full-width dark CTA section.

### `Footer`
The system SHALL render a 3-column footer with brand info, instagram grid, and newsletter form.

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
- **Provenance ban.** No file under `apps/gathr/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gathr/public/CNAME` = `gathr.free.componentdock.com`
  and the package `homepage` = `https://gathr.free.componentdock.com`.
