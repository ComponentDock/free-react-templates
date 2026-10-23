# Helios — Design Notes

Reference: **Solarshift** — `https://colorlib.com/wp/template/solarshift/`  
Live preview: `https://preview.colorlib.com/theme/solarshift/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/solarshift-template.jpg  
Shipped: https://helios.free.componentdock.com

Helios is a single-page solar energy company landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Manrope**, **Manrope:wght@300;400;500;600;700;800**

## Design tokens (`apps/helios/src/index.css` `@theme`)

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
| `--color-primary-950` | `#052e16` | primary 950 |
| `--color-accent-100` | `#fef3c7` | Accent amber #F59E0B — "Best Value" corner badges |
| `--color-accent-400` | `#fbbf24` | accent 400 |
| `--color-accent-500` | `#f59e0b` | accent 500 |
| `--color-accent-600` | `#d97706` | accent 600 |
| `--color-accent-700` | `#b45309` | accent 700 |
| `--font-sans` | `'Manrope', ui-sans-serif, system-ui, sans-serif` | Display/body font — Manrope |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `StatsBar` | Stats bar | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Products` | Products section | see fidelity note below |
| 6 | `Impact` | Impact section | see fidelity note below |
| 7 | `Financing` | Financing section | see fidelity note below |
| 8 | `Process` | Process section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `CtaBanner` | — | no dedicated spec block |
| 11 | `Faq` | FAQ section | see fidelity note below |
| 12 | `QuoteForm` | Quote form | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |
| 14 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Helios", anchor links to the page's sections, a "Get Free Quote" CTA, and a dark-mode toggle button.

### `Hero`
The system SHALL render a light hero with a badge, a headline, CTAs, a social-proof line, and a savings calculator card.

### `StatsBar`
The system SHALL render a stats bar with four key metrics.

### `Services`
The system SHALL render a services section with six service cards.

### `Products`
The system SHALL render a products section with three product cards.

### `Impact`
The system SHALL render an impact section on a green band with four animated counters.

### `Financing`
The system SHALL render a financing section with three pricing cards.

### `Process`
The system SHALL render a four-step process section.

### `Testimonials`
The system SHALL render a testimonials carousel with at least three quote cards.

### `CtaBanner`
*anchors only* — Ready to Go Solar? · Get Free Quote · Call (555) 123-4567

### `Faq`
The system SHALL render an FAQ section with at least four accordion items.

### `QuoteForm`
The system SHALL render a contact form with name, email, service, and message fields, plus a submit button.

### `Footer`
The system SHALL render a dark footer with link columns, contact info, and a copyright line.

### `BackToTop`
*anchors only* — Back to top

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
- **Provenance ban.** No file under `apps/helios/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/helios/public/CNAME` = `helios.free.componentdock.com`
  and the package `homepage` = `https://helios.free.componentdock.com`.
