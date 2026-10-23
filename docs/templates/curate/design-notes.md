# Curate — Design Notes

Reference: **Portfolio** — `https://colorlib.com/wp/template/portfolio/`  
Live preview: `https://preview.colorlib.com/theme/portfolio/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/portfolio-free-template.jpg  
Shipped: https://curate.free.componentdock.com

Curate is a multi-section portfolio/creative agency landing page. It showcases filterable portfolio work, services, and client testimonials. Recreation of ColorLib "Portfolio" under a new name with the same section structure and visual design.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display:wght@400;600;700;800**, **Poppins**

## Design tokens (`apps/curate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8ab92d` | brand |
| `--color-brand-dark` | `#7aa525` | brand dark |
| `--color-ink` | `#222222` | Ink — dark headings (#222222 from the original). |
| `--color-paper` | `#f9f9ff` | Soapstone — light section background (#f9f9ff from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-star` | `#f5c518` | Star rating gold. |
| `--color-primary-50` | `#f4f9e8` | primary 50 |
| `--color-primary-100` | `#e6f2cc` | primary 100 |
| `--color-primary-200` | `#cce599` | primary 200 |
| `--color-primary-300` | `#b3d866` | primary 300 |
| `--color-primary-400` | `#99cc33` | primary 400 |
| `--color-primary-500` | `#8ab92d` | primary 500 |
| `--color-primary-600` | `#7aa525` | primary 600 |
| `--color-primary-700` | `#5e7d1c` | primary 700 |
| `--color-primary-800` | `#435813` | primary 800 |
| `--color-primary-900` | `#29340b` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (headings + body). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation links | see fidelity note below |
| 2 | `Hero` | Hero section with CTA | see fidelity note below |
| 3 | `PortfolioGrid` | Filterable portfolio grid | see fidelity note below |
| 4 | `ServicesBanner` | Services section | see fidelity note below |
| 5 | `ServicesCards` | — | no dedicated spec block |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The template SHALL display a fixed navigation bar with brand name and links to all sections.

### `Hero`
The template SHALL display a full-viewport hero with dark overlay, headline text, and a green CTA button.

### `PortfolioGrid`
The template SHALL display a 3-column grid of portfolio items with category filter buttons.

### `ServicesBanner`
The template SHALL display a dark overlay banner followed by 3 service cards with icons and descriptions.

### `ServicesCards`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Testimonials`
The template SHALL display 4 customer testimonials in a 2-column grid.

### `Footer`
The template SHALL display a footer with About Us, Newsletter signup, and social links. It MUST link to componentdock.com.

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
- **Provenance ban.** No file under `apps/curate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/curate/public/CNAME` = `curate.free.componentdock.com`
  and the package `homepage` = `https://curate.free.componentdock.com`.
