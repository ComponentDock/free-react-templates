# Boutiquehaus — Design Notes

Reference: **Shop** — `https://colorlib.com/wp/template/shop/`  
Live preview: `https://preview.colorlib.com/theme/shop/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/shop-free-ecommerce-website-template.jpg  
Shipped: https://boutiquehaus.free.componentdock.com

An Online Shop template with banner, category, hotdeal and brand sections. Recreation of the ColorLib **Shop** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/boutiquehaus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f41068` | brand |
| `--color-brand-dark` | `#d40e5a` | brand dark |
| `--color-ink` | `#222222` | Dark surface for footer, dark sections. |
| `--color-ink-dark` | `#1a1a1a` | ink dark |
| `--color-mist` | `#777777` | Muted body text. |
| `--color-primary-50` | `#fef2f7` | Primary scale so shared Button/ButtonLink `primary` variants resolve to pink. |
| `--color-primary-100` | `#fde6ef` | primary 100 |
| `--color-primary-200` | `#fccee0` | primary 200 |
| `--color-primary-300` | `#faa6c4` | primary 300 |
| `--color-primary-400` | `#f66ea0` | primary 400 |
| `--color-primary-500` | `#f41068` | primary 500 |
| `--color-primary-600` | `#e40a5a` | primary 600 |
| `--color-primary-700` | `#c00648` | primary 700 |
| `--color-primary-800` | `#9e083e` | primary 800 |
| `--color-primary-900` | `#850b38` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Banner` | Hero banner | see fidelity note below |
| 3 | `Category` | Category section | see fidelity note below |
| 4 | `MenProducts` | Men's products | see fidelity note below |
| 5 | `WomenProducts` | Women's products | see fidelity note below |
| 6 | `HotDeal` | Hot deal countdown | see fidelity note below |
| 7 | `RelatedProducts` | Related products | see fidelity note below |
| 8 | `Brand` | Brand logos | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Main · Search · Mobile

### `Banner`
The application SHALL display a full-width hero banner with a promotional offer.

### `Category`
The application SHALL display category cards for different product types.

### `MenProducts`
The application SHALL display men's products on a dark background.

### `WomenProducts`
The application SHALL display women's products.

### `HotDeal`
The application SHALL display a countdown timer for a hot deal.

### `RelatedProducts`
The application SHALL display related product items.

### `Brand`
The application SHALL display partner brand logos.

### `Footer`
The application SHALL display a dark footer with widget columns and Component Dock branding.

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
- **Provenance ban.** No file under `apps/boutiquehaus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/boutiquehaus/public/CNAME` = `boutiquehaus.free.componentdock.com`
  and the package `homepage` = `https://boutiquehaus.free.componentdock.com`.
