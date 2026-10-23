# Keynote — Design Notes

Reference: **Ai Summit** — `https://colorlib.com/wp/template/ai-summit/`  
Live preview: `https://preview.colorlib.com/theme/ai-summit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/aisummit-template-1770211095695.jpg  
Shipped: https://keynote.free.componentdock.com

Keynote is a single-page AI conference landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Ai Summit" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Outfit**, **Outfit:wght@300;400;500;600;700**, **Space Grotesk**

## Design tokens (`apps/keynote/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0fdf4` | primary 50 |
| `--color-primary-100` | `#dcfce7` | primary 100 |
| `--color-primary-200` | `#bbf7d0` | primary 200 |
| `--color-primary-300` | `#86efac` | primary 300 |
| `--color-primary-400` | `#4ade80` | primary 400 |
| `--color-primary-500` | `#22c55e` | primary 500 |
| `--color-primary-600` | `#16a34a` | primary 600 |
| `--color-primary-700` | `#15803d` | primary 700 |
| `--color-primary-800` | `#166534` | primary 800 |
| `--color-primary-900` | `#14532d` | primary 900 |
| `--font-sans` | `'Outfit', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Space Grotesk', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Speakers` | Speakers section | see fidelity note below |
| 4 | `Tracks` | Tracks section | see fidelity note below |
| 5 | `Schedule` | Schedule section | see fidelity note below |
| 6 | `Tickets` | Tickets section | see fidelity note below |
| 7 | `Sponsors` | Sponsors section | see fidelity note below |
| 8 | `Venue` | Venue section | see fidelity note below |
| 9 | `Faq` | FAQ section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Keynote", anchor links to the page's sections, a "Get Your Ticket" call-to-action, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero with a level-1 headline, a blurb, two CTA buttons, a countdown timer, and a statistics row.

### `Speakers`
The system SHALL render a speakers section with a heading and at least eight speaker cards.

### `Tracks`
The system SHALL render a tracks section with a heading and three track cards.

### `Schedule`
The system SHALL render a schedule section with a heading and sessions.

### `Tickets`
The system SHALL render a tickets section with a heading and four pricing tiers.

### `Sponsors`
The system SHALL render a sponsors section with a heading and partner tiers.

### `Venue`
The system SHALL render a venue section with a heading, description, and address.

### `Faq`
The system SHALL render an FAQ section with a heading and an accordion of questions.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/keynote/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/keynote/public/CNAME` = `keynote.free.componentdock.com`
  and the package `homepage` = `https://keynote.free.componentdock.com`.
