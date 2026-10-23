# Mocha — Design Notes

Reference: **Brewhouse** — `https://colorlib.com/wp/template/brewhouse/`  
Live preview: `https://preview.colorlib.com/theme/brewhouse/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/brewhouse-template-1770211139958.jpg  
Shipped: https://mocha.free.componentdock.com

Mocha is a single-page coffee shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Brewhouse" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000**, **Playfair Display**

## Design tokens (`apps/mocha/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fdf8f6` | primary 50 |
| `--color-primary-100` | `#f2e8e5` | primary 100 |
| `--color-primary-200` | `#eaddd7` | primary 200 |
| `--color-primary-300` | `#e0cec7` | primary 300 |
| `--color-primary-400` | `#d2bab0` | primary 400 |
| `--color-primary-500` | `#a18072` | primary 500 |
| `--color-primary-600` | `#846358` | primary 600 |
| `--color-primary-700` | `#6f574d` | primary 700 |
| `--color-primary-800` | `#5c4a41` | primary 800 |
| `--color-primary-900` | `#4a3b34` | primary 900 |
| `--color-primary-950` | `#362b26` | primary 950 |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Menu` | Menu section | see fidelity note below |
| 4 | `Story` | Story section | see fidelity note below |
| 5 | `Process` | Process section | see fidelity note below |
| 6 | `Shop` | Shop section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Newsletter` | Newsletter section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Mocha", anchor links to the page's sections, an "Order Online" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with an eyebrow, a level-1 headline, a blurb, and two call-to-action links.

### `Menu`
The system SHALL render a menu section with a heading and at least three drink categories, each with priced items.

### `Story`
The system SHALL render a story section with a stats row, a heading, a blurb, and a link.

### `Process`
The system SHALL render a process section with a heading and four numbered steps.

### `Shop`
The system SHALL render a shop section with a heading and three products, each with a price and an "Add to Cart" button.

### `Testimonials`
The system SHALL render a testimonials section with a heading and three quotes with attributed names.

### `Newsletter`
The system SHALL render a newsletter section with a heading, an email input, and a subscribe button that confirms a successful subscription.

### `Footer`
The system SHALL render a footer with link columns, hours, contact details, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/mocha/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mocha/public/CNAME` = `mocha.free.componentdock.com`
  and the package `homepage` = `https://mocha.free.componentdock.com`.
