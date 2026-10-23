# Facet — Design Notes

Reference: **Square** — `https://colorlib.com/wp/template/square/`  
Live preview: `https://preview.colorlib.com/theme/square/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/square-free-template.jpg  
Shipped: https://facet.free.componentdock.com

Facet is a single-page architecture landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rubik:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/facet/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#2e9e5b` | brand |
| `--color-brand-dark` | `#268a4f` | brand dark |
| `--color-accent` | `#fdb72c` | Accent — yellow #fdb72c from the original. |
| `--color-ink` | `#000000` | Ink — headings (#000000 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#8f8f8f / #6c757d from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light chip backgrounds (#f8f9fa from the original). |
| `--color-charcoal` | `#212529` | Charcoal — dark footer (#212529 from the original). |
| `--color-primary-50` | `#eef8f1` | primary 50 |
| `--color-primary-100` | `#d7efe0` | primary 100 |
| `--color-primary-200` | `#aedec1` | primary 200 |
| `--color-primary-300` | `#7fd29d` | primary 300 |
| `--color-primary-400` | `#4db878` | primary 400 |
| `--color-primary-500` | `#2e9e5b` | primary 500 |
| `--color-primary-600` | `#268a4f` | primary 600 |
| `--color-primary-700` | `#1f7042` | primary 700 |
| `--color-primary-800` | `#185834` | primary 800 |
| `--color-primary-900` | `#114125` | primary 900 |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | Original font: Rubik (Google Fonts link in index.html). |
| `--font-display` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Cta` | — | no dedicated spec block |
| 5 | `Stats` | Stats section | see fidelity note below |
| 6 | `Projects` | Projects section | see fidelity note below |
| 7 | `Team` | Team section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Contact` | Contact section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Facet", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, subtext, and action buttons.

### `Services`
The system SHALL render a services section with at least three feature cards.

### `Cta`
*anchors only* — Call to action · Be Part of our Business · Select your services and let us build the space you dream about. · Request A Quote

### `Stats`
The system SHALL render a stats section with a heading and counters.

### `Projects`
The system SHALL render a projects section with a heading and a project gallery.

### `Team`
The system SHALL render a team section with a heading and member cards.

### `Blog`
The system SHALL render a blog section with a heading and blog post cards.

### `Contact`
The system SHALL render a contact section with a heading and contact details.

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
- **Provenance ban.** No file under `apps/facet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/facet/public/CNAME` = `facet.free.componentdock.com`
  and the package `homepage` = `https://facet.free.componentdock.com`.
