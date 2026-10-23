# Vendly — Design Notes

Reference: **Shoppers** — `https://colorlib.com/wp/template/shoppers/`  
Live preview: `https://preview.colorlib.com/theme/shoppers/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/shoppers-free-template.jpg  
Shipped: https://vendly.free.componentdock.com

Vendly is a single-page e-commerce / fashion-store template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Mukta**, **Mukta:wght@300;400;700**

## Design tokens (`apps/vendly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#7971ea` | brand |
| `--color-ink` | `#25262a` | ink |
| `--color-body` | `#8c92a0` | body |
| `--color-band` | `#f8f9fa` | band |
| `--color-line` | `#edf0f5` | line |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Hero | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Perks` | Perks strip | see fidelity note below |
| 4 | `Collections` | Collections | see fidelity note below |
| 5 | `FeaturedProducts` | Featured products | see fidelity note below |
| 6 | `BigSale` | Big Sale | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a full-height photo hero with right-aligned copy.

### `Hero`
The system SHALL render a full-height photo hero with right-aligned copy.

### `Perks`
The system SHALL render three service perk columns below the hero.

### `Collections`
The system SHALL render three image collection cards.

### `FeaturedProducts`
The system SHALL render a light-gray band with product cards.

### `BigSale`
The system SHALL render the "Big Sale!" split section.

### `Footer`
The system SHALL render the four-part footer with subscribe form.

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
- **Provenance ban.** No file under `apps/vendly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vendly/public/CNAME` = `vendly.free.componentdock.com`
  and the package `homepage` = `https://vendly.free.componentdock.com`.
