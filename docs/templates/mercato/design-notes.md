# Mercato — Design Notes

Reference: **Karma** — `https://colorlib.com/wp/template/karma/`  
Live preview: `https://preview.colorlib.com/theme/karma/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/karma-free-template.jpg  
Shipped: https://mercato.free.componentdock.com

Mercato is a single-page ecommerce/shopping website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**, **Roboto**

## Design tokens (`apps/mercato/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffba00` | Mercato brand palette — warm yellow-orange gradient #ffba00 → #ff6c00. |
| `--color-brand-dark` | `#ff6c00` | brand dark |
| `--color-heading` | `#222222` | Heading color — dark charcoal. |
| `--color-ink` | `#777777` | Body text — medium grey. |
| `--color-border` | `#ececec` | Border / divider color. |
| `--color-surface` | `#ffffff` | White background. |
| `--color-bg-light` | `#f9f9ff` | Light grey background for sections. |
| `--color-primary-50` | `#fff8e6` | Primary scale for shared UI Button/ButtonLink primary variants. |
| `--color-primary-100` | `#ffefb3` | primary 100 |
| `--color-primary-200` | `#ffe580` | primary 200 |
| `--color-primary-300` | `#ffdb4d` | primary 300 |
| `--color-primary-400` | `#ffba00` | primary 400 |
| `--color-primary-500` | `#ffba00` | primary 500 |
| `--color-primary-600` | `#ff6c00` | primary 600 |
| `--color-primary-700` | `#e55e00` | primary 700 |
| `--color-primary-800` | `#cc5200` | primary 800 |
| `--color-primary-900` | `#993d00` | primary 900 |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Fonts: Poppins for headings, Roboto for body. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero product carousel | see fidelity note below |
| 3 | `Features` | Features row | see fidelity note below |
| 4 | `CategoryGrid` | Category image grid | see fidelity note below |
| 5 | `ProductCarousel` | Product carousel with tabs | see fidelity note below |
| 6 | `ExclusiveDeal` | Exclusive deal countdown | see fidelity note below |
| 7 | `BrandLogos` | Brand logos row | see fidelity note below |
| 8 | `DealsOfTheWeek` | — | no dedicated spec block |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Shopping bag · Search · Submit search

### `Hero`
The template SHALL display a fullscreen hero section with product headline and CTA.

### `Features`
The template SHALL display 4 feature cards in a row.

### `CategoryGrid`
The template SHALL display category cards in a grid layout.

### `ProductCarousel`
The template SHALL display product cards with tab switching.

### `ExclusiveDeal`
The template SHALL display a countdown timer with product overlay.

### `BrandLogos`
The template SHALL display brand logo images.

### `DealsOfTheWeek`
*anchors only* — Deals of the Week · Don't miss our best weekly offers

### `Footer`
The template SHALL display a footer with newsletter, social links, and copyright.

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
- **Provenance ban.** No file under `apps/mercato/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mercato/public/CNAME` = `mercato.free.componentdock.com`
  and the package `homepage` = `https://mercato.free.componentdock.com`.
