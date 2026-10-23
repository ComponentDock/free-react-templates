# Dapper — Design Notes

Reference: **Barcut** — `https://colorlib.com/wp/template/barcut/`  
Live preview: `https://preview.colorlib.com/theme/barcut/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/barcut-free-template.jpg  
Shipped: https://dapper.free.componentdock.com

Dapper is a single-page barber-shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Barcut" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600;700;800**, **Roboto**

## Design tokens (`apps/dapper/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ba9236` | brand |
| `--color-brand-dark` | `#9a7a2e` | brand dark |
| `--color-brand-light` | `#fdc136` | brand light |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff / #fafaff from the original). |
| `--color-ink` | `#222222` | Ink — headings + body text (dark charcoal from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-primary-50` | `#fbf8ef` | primary 50 |
| `--color-primary-100` | `#f5eed8` | primary 100 |
| `--color-primary-200` | `#eadbb0` | primary 200 |
| `--color-primary-300` | `#ddc481` | primary 300 |
| `--color-primary-400` | `#d1ac55` | primary 400 |
| `--color-primary-500` | `#c79a3f` | primary 500 |
| `--color-primary-600` | `#ba9236` | primary 600 |
| `--color-primary-700` | `#9a7a2e` | primary 700 |
| `--color-primary-800` | `#7c6129` | primary 800 |
| `--color-primary-900` | `#665024` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About split | see fidelity note below |
| 4 | `Services` | Services grid | see fidelity note below |
| 5 | `Catalogue` | — | no dedicated spec block |
| 6 | `Team` | Barbers team | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Pricing` | Pricing packages | see fidelity note below |
| 9 | `Blog` | Blog row | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Dapper", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline, and a call-to-action button.

### `About`
The system SHALL render an about section with a heading, a lead paragraph, and a "Learn More" button.

### `Services`
The system SHALL render a "What We Can Do for You" section with at least four service cards.

### `Catalogue`
*anchors only* — tablist · Style categories · Select Your Style · View Gallery...

### `Team`
The system SHALL render a "We Have All Famous Barbers" section with three member cards with names and roles.

### `Testimonials`
The system SHALL render a testimonials section with at least one quote and author name.

### `Pricing`
The system SHALL render a "Choose Your Package" section with three pricing cards, each with a price, an item list, and an "Order Now" button.

### `Blog`
The system SHALL render a "Latest From Blog" section with at least three post cards, each with a title and an excerpt.

### `Footer`
The system SHALL render a footer with the site name, a short tagline, quick links, a newsletter field, and social links.

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
- **Provenance ban.** No file under `apps/dapper/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dapper/public/CNAME` = `dapper.free.componentdock.com`
  and the package `homepage` = `https://dapper.free.componentdock.com`.
