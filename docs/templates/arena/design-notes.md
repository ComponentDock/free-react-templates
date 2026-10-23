# Arena — Design Notes

Reference: **Beko** — `https://colorlib.com/wp/template/beko/`  
Live preview: `https://preview.colorlib.com/theme/beko/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/beko-free-template.jpg  
Shipped: https://arena.free.componentdock.com

Arena is a single-page gaming/esports landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Beko" design (see TEMPLATES.md, Bootstrap category), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Aclonica**, **Poppins**

## Design tokens (`apps/arena/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-ember-400` | `#ff4040` | ember 400 |
| `--color-ember-500` | `#ff0000` | ember 500 |
| `--color-ember-600` | `#d10000` | ember 600 |
| `--color-magenta-500` | `#c6019a` | magenta 500 |
| `--color-magenta-600` | `#a1017d` | magenta 600 |
| `--color-navy-700` | `#182031` | navy 700 |
| `--color-navy-800` | `#0b111f` | navy 800 |
| `--color-navy-900` | `#070a13` | navy 900 |
| `--color-navy-950` | `#05070d` | navy 950 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Aclonica', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `ClientLogos` | Client logos | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `LiveStreams` | Live streams | see fidelity note below |
| 6 | `LatestWar` | Latest war banner | see fidelity note below |
| 7 | `Gallery` | Gallery | see fidelity note below |
| 8 | `UpcomingFighter` | Upcoming fighter | see fidelity note below |
| 9 | `Pricing` | Pricing | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Arena", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width dark hero with a level-1 headline, supporting copy, two call-to-action buttons, and a graphic.

### `ClientLogos`
The system SHALL render a client-logo strip with at least four logo images.

### `About`
The system SHALL render an about section with a heading, supporting copy, two call-to-action buttons, and an image.

### `LiveStreams`
The system SHALL render a live-streams section with a heading, an "install now" button, and at least two match cards.

### `LatestWar`
The system SHALL render a feature banner section with a heading and a full-width war-match card.

### `Gallery`
The system SHALL render a gallery section with a heading and a masonry grid of at least six image tiles with hover overlay captions.

### `UpcomingFighter`
The system SHALL render an upcoming-event section with a heading, a fighter name, a countdown timer, and an "open" button.

### `Pricing`
The system SHALL render a pricing section with a heading and at least three pricing cards.

### `Footer`
The system SHALL render a footer with the site name, link/info columns, a newsletter form, and a copyright line.

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
- **Provenance ban.** No file under `apps/arena/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/arena/public/CNAME` = `arena.free.componentdock.com`
  and the package `homepage` = `https://arena.free.componentdock.com`.
