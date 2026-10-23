# Podium — Design Notes

Reference: **Eventor** — `https://colorlib.com/wp/template/eventor/`  
Live preview: `https://preview.colorlib.com/theme/eventor/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/eventor-template-1770211156837.jpg  
Shipped: https://podium.free.componentdock.com

Podium is a single-page tech conference landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Space Grotesk**, **Space Grotesk:wght@400;500;600;700**

## Design tokens (`apps/podium/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f5f3ff` | primary 50 |
| `--color-primary-100` | `#ede9fe` | primary 100 |
| `--color-primary-200` | `#ddd6fe` | primary 200 |
| `--color-primary-300` | `#c4b5fd` | primary 300 |
| `--color-primary-400` | `#a78bfa` | primary 400 |
| `--color-primary-500` | `#8b5cf6` | primary 500 |
| `--color-primary-600` | `#7c3aed` | primary 600 |
| `--color-primary-700` | `#6d28d9` | primary 700 |
| `--color-primary-800` | `#5b21b6` | primary 800 |
| `--color-primary-900` | `#4c1d95` | primary 900 |
| `--color-primary-950` | `#2e1065` | primary 950 |
| `--color-accent-50` | `#fff1f2` | accent 50 |
| `--color-accent-100` | `#ffe4e6` | accent 100 |
| `--color-accent-200` | `#fecdd3` | accent 200 |
| `--color-accent-300` | `#fda4af` | accent 300 |
| `--color-accent-400` | `#fb7185` | accent 400 |
| `--color-accent-500` | `#f43f5e` | accent 500 |
| `--color-accent-600` | `#e11d48` | accent 600 |
| `--color-accent-700` | `#be123c` | accent 700 |
| `--color-accent-800` | `#9f1239` | accent 800 |
| `--color-accent-900` | `#881337` | accent 900 |
| `--color-accent-950` | `#4c0519` | accent 950 |
| `--font-sans` | `'Space Grotesk', ui-sans-serif, system-ui, sans-serif` | Space Grotesk — the original's typeface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Speakers` | Speakers section | see fidelity note below |
| 4 | `Schedule` | Schedule section | see fidelity note below |
| 5 | `Tickets` | Tickets section | see fidelity note below |
| 6 | `Sponsors` | Sponsors section | see fidelity note below |
| 7 | `Venue` | Venue section | see fidelity note below |
| 8 | `CtaBanner` | CTA banner | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed top navigation bar with the brand wordmark, section links, a gradient CTA, a dark-mode toggle and a mobile menu.

### `Hero`
The system SHALL render a full-screen dark hero with an aurora gradient background, a date badge, a headline with a gradient accent, a countdown timer, two CTAs and a stats row.

### `Speakers`
The system SHALL render a "Learn From the Best" section with six speaker cards, each with a photo, a talk title, a name, a role and social links.

### `Schedule`
The system SHALL render a three-day event schedule with day tabs and a timeline of events per day, each with a time, type badge, title, speaker, location and an Add to Calendar action.

### `Tickets`
The system SHALL render a "Get Your Tickets" section with four pricing tiers, each with a name, description, price, feature list and a call to action.

### `Sponsors`
The system SHALL render a "Proudly Sponsored By" section with four sponsor tiers and a "Become a Sponsor" callout with two CTAs.

### `Venue`
The system SHALL render an "Event Venue" section with venue details, a features list, recommended hotels and a directions action.

### `CtaBanner`
The system SHALL render a dark "Don't Miss Out" banner with an eyebrow, headline, date and venue lines, a gradient CTA and a trust row.

### `Footer`
The system SHALL render a footer with brand info, event links, resource links, contact details and legal links.

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
- **Provenance ban.** No file under `apps/podium/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/podium/public/CNAME` = `podium.free.componentdock.com`
  and the package `homepage` = `https://podium.free.componentdock.com`.
