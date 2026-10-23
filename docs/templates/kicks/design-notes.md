# Kicks — Design Notes

Reference: **Footwear** — `https://colorlib.com/wp/template/footwear/`  
Live preview: `https://preview.colorlib.com/theme/footwear/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/footwear-free-template.jpg  
Shipped: https://kicks.free.componentdock.com

Kicks is a shoe store e-commerce landing page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Footwear" website template design (see TEMPLATES.md), built under the new name **Kicks** with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**, **Rokkitt**

## Design tokens (`apps/kicks/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#eff6ff` | Kicks brand palette — blue accent from Footwear design |
| `--color-brand-100` | `#dbeafe` | brand 100 |
| `--color-brand-200` | `#bfdbfe` | brand 200 |
| `--color-brand-300` | `#93c5fd` | brand 300 |
| `--color-brand-400` | `#60a5fa` | brand 400 |
| `--color-brand-500` | `#007bff` | brand 500 |
| `--color-brand-600` | `#0056b3` | brand 600 |
| `--color-brand-700` | `#004085` | brand 700 |
| `--color-brand-800` | `#002752` | brand 800 |
| `--color-brand-900` | `#001a36` | brand 900 |
| `--color-dark` | `#343a40` | dark |
| `--color-body` | `#212529` | body |
| `--color-muted` | `#6c757d` | muted |
| `--font-heading` | `'Rokkitt', Georgia, serif` | font heading |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `SaleBanner` | Sale banner | see fidelity note below |
| 3 | `Hero` | Hero slider | see fidelity note below |
| 4 | `Intro` | Intro quote | see fidelity note below |
| 5 | `ShopByGender` | Shop by gender | see fidelity note below |
| 6 | `BestSellers` | Best sellers | see fidelity note below |
| 7 | `Partners` | Partners | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Kicks", a search input, navigation links, and a cart indicator.

### `SaleBanner`
The system SHALL render a sale announcement banner below the navigation.

### `Hero`
The system SHALL render a hero section with a background image slideshow and centered text overlays.

### `Intro`
The system SHALL render a centered introductory quote section.

### `ShopByGender`
The system SHALL render a two-column section linking to Men's and Women's collections.

### `BestSellers`
The system SHALL render a product grid of 16 best-selling items.

### `Partners`
The system SHALL render a trusted partners section with brand placeholders.

### `Footer`
The system SHALL render a footer with about information, navigation links, contact details, social media icons, and a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/kicks/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kicks/public/CNAME` = `kicks.free.componentdock.com`
  and the package `homepage` = `https://kicks.free.componentdock.com`.
