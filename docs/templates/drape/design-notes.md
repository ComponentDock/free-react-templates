# Drape — Design Notes

Reference: **Fashe** — `https://colorlib.com/wp/template/fashe/`  
Live preview: `https://preview.colorlib.com/theme/fashe/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fashe-free-ecommerce-website-template.jpg  
Shipped: https://drape.free.componentdock.com

Drape is a modern fashion e-commerce landing page template with a warm terracotta palette, sharp corners, and the Assistant typeface. It recreates the ColorLib Fashe design under a different name with React 19 + Tailwind CSS 4.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Assistant**, **Assistant:wght@400;500;600;700**

## Design tokens (`apps/drape/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-terra-50` | `#fdf3ef` | Drape brand palette — terracotta accent from Fashe design |
| `--color-terra-100` | `#fbe4da` | terra 100 |
| `--color-terra-200` | `#f5c5b0` | terra 200 |
| `--color-terra-300` | `#eda080` | terra 300 |
| `--color-terra-400` | `#c8553d` | terra 400 |
| `--color-terra-500` | `#b44530` | terra 500 |
| `--color-terra-600` | `#9a3826` | terra 600 |
| `--color-terra-700` | `#7e2d1f` | terra 700 |
| `--color-terra-800` | `#66261c` | terra 800 |
| `--color-terra-900` | `#52211a` | terra 900 |
| `--color-warm-50` | `#faf9f7` | warm 50 |
| `--color-warm-100` | `#f4f2ee` | warm 100 |
| `--color-warm-200` | `#e8e4dc` | warm 200 |
| `--color-warm-300` | `#d4cec3` | warm 300 |
| `--color-warm-400` | `#b8b0a0` | warm 400 |
| `--color-warm-500` | `#9a9080` | warm 500 |
| `--color-warm-600` | `#7a7060` | warm 600 |
| `--color-warm-700` | `#5a5248` | warm 700 |
| `--color-warm-800` | `#3a3530` | warm 800 |
| `--color-warm-900` | `#1a1814` | warm 900 |
| `--font-sans` | `'Assistant', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `AnnouncementBar` | Announcement bar | see fidelity note below |
| 2 | `Header` | Sticky header with navigation | see fidelity note below |
| 3 | `Hero` | Hero banner | see fidelity note below |
| 4 | `Marquee` | Marquee strip | see fidelity note below |
| 5 | `ShopByCategory` | Shop by category section | see fidelity note below |
| 6 | `NewArrivals` | New arrivals product grid | see fidelity note below |
| 7 | `ImageWithText` | — | no dedicated spec block |
| 8 | `Features` | Features grid | see fidelity note below |
| 9 | `Journal` | Journal section | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `AnnouncementBar`
The template SHALL display a dark announcement bar with promotional text at the top.

### `Header`
The template SHALL have a sticky header with the brand logo, desktop navigation links, and icon actions.

### `Hero`
The template SHALL display a full-height hero banner with a background image, headline, and call-to-action.

### `Marquee`
The template SHALL display a scrolling marquee with promotional text items.

### `ShopByCategory`
The template SHALL display a grid of category cards with images.

### `NewArrivals`
The template SHALL display a grid of product cards with images, titles, and prices.

### `ImageWithText`
*anchors only* — Made to last · Our story

### `Features`
The template SHALL display a three-column grid of feature highlights.

### `Journal`
The template SHALL display a grid of blog article cards.

### `Footer`
The template SHALL have a footer with newsletter form, navigation links, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/drape/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/drape/public/CNAME` = `drape.free.componentdock.com`
  and the package `homepage` = `https://drape.free.componentdock.com`.
