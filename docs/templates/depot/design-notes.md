# Depot — Design Notes

Reference: **Warehouse** — `https://colorlib.com/wp/template/warehouse/`  
Live preview: `https://preview.colorlib.com/theme/warehouse/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/warehouse-free-template.jpg  
Shipped: https://depot.free.componentdock.com

Depot is a single-page real-estate property landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@300;400;500;600**, **Roboto**

## Design tokens (`apps/depot/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#37cfa2` | Brand palette — teal real-estate design. |
| `--color-brand-dark` | `#343a40` | brand dark |
| `--color-body` | `#808080` | body |
| `--color-section` | `#f8f9fa` | section |
| `--color-footer` | `#333333` | footer |
| `--color-footer-text` | `#737373` | footer text |
| `--color-muted` | `#a2a2a2` | muted |
| `--color-muted-2` | `#c4c4c4` | muted 2 |
| `--color-card-hover` | `#939393` | card hover |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Oswald (headings + nav, uppercase) + Roboto (body) via Google Fonts. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Transparent navbar with brand and links | see fidelity note below |
| 2 | `Hero` | Full-screen photo hero carousel | see fidelity note below |
| 3 | `Properties` | Properties grid | see fidelity note below |
| 4 | `Agents` | Real estate agents | see fidelity note below |
| 5 | `HowItWorks` | How It Works steps | see fidelity note below |
| 6 | `About` | About split with checklist | see fidelity note below |
| 7 | `Services` | Services grid | see fidelity note below |
| 8 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 9 | `News` | News & Events | see fidelity note below |
| 10 | `Contact` | Contact form and info | see fidelity note below |
| 11 | `Footer` | Dark footer with widgets and copyright | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar over the hero with a brand, uppercase links and a mobile menu.

### `Hero`
The system SHALL render a full-viewport hero carousel with two slides, dark overlay and CTA.

### `Properties`
The system SHALL render a grid of six property listing cards.

### `Agents`
The system SHALL render an agents section with three member cards.

### `HowItWorks`
The system SHALL render a teal how-it-works section with three numbered steps.

### `About`
The system SHALL render an about section with an image, checklist and CTA.

### `Services`
The system SHALL render a light-grey services section with six icon cards.

### `Testimonials`
The system SHALL render a testimonials section with member quotes.

### `News`
The system SHALL render a news section with three blog cards.

### `Contact`
The system SHALL render a contact section with a form and an info column.

### `Footer`
The system SHALL render a dark footer with widget columns, newsletter, socials and a copyright bar.

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
- **Provenance ban.** No file under `apps/depot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/depot/public/CNAME` = `depot.free.componentdock.com`
  and the package `homepage` = `https://depot.free.componentdock.com`.
