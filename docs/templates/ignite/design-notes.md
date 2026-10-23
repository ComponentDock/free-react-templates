# Ignite — Design Notes

Reference: **Youthconnect** — `https://colorlib.com/wp/template/youthconnect/`  
Live preview: `https://preview.colorlib.com/theme/youthconnect/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/youthconnect-template-1770211452999.jpg  
Shipped: https://ignite.free.componentdock.com

Ignite is a single-page youth ministry / church youth-group landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Bebas Neue**, **Plus Jakarta Sans**

## Design tokens (`apps/ignite/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#ecfeff` | primary 50 |
| `--color-primary-100` | `#cffafe` | primary 100 |
| `--color-primary-200` | `#a5f3fc` | primary 200 |
| `--color-primary-300` | `#67e8f9` | primary 300 |
| `--color-primary-400` | `#22d3ee` | primary 400 |
| `--color-primary-500` | `#06b6d4` | primary 500 |
| `--color-primary-600` | `#0891b2` | primary 600 |
| `--color-primary-700` | `#0e7490` | primary 700 |
| `--color-primary-800` | `#155e75` | primary 800 |
| `--color-primary-900` | `#164e63` | primary 900 |
| `--color-primary-950` | `#083344` | primary 950 |
| `--color-navy-700` | `#312e81` | navy 700 |
| `--color-navy-800` | `#1e1b4b` | navy 800 |
| `--color-navy-900` | `#0f0d24` | navy 900 |
| `--color-navy-950` | `#080716` | navy 950 |
| `--color-accent-400` | `#fb923c` | accent 400 |
| `--color-accent-500` | `#f97316` | accent 500 |
| `--color-accent-600` | `#ea580c` | accent 600 |
| `--font-sans` | `'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Bebas Neue', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Events` | Events section | see fidelity note below |
| 4 | `Groups` | Small groups section | see fidelity note below |
| 5 | `Content` | Content section | see fidelity note below |
| 6 | `Leaders` | Leaders section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `CtaSection` | Final call-to-action | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name "Ignite Youth", anchor links to the page's sections, an "I'm New" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-screen hero with a badge line, a gradient display headline, a blurb, two call-to-action buttons, and a stats band.

### `Events`
The system SHALL render an upcoming events section with event cards, some marked as featured.

### `Groups`
The system SHALL render a small groups section with filter chips and four group cards.

### `Content`
The system SHALL render a latest content section with media cards showing a media type and duration.

### `Leaders`
The system SHALL render a leaders section with at least four profile cards and a volunteer call-to-action.

### `Testimonials`
The system SHALL render a testimonials section with student quotes.

### `CtaSection`
The system SHALL render a closing call-to-action band with two buttons.

### `Footer`
The system SHALL render a footer with service times, a ministry blurb, link columns, and contact details.

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
- **Provenance ban.** No file under `apps/ignite/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ignite/public/CNAME` = `ignite.free.componentdock.com`
  and the package `homepage` = `https://ignite.free.componentdock.com`.
