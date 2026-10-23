# Lacecraft — Design Notes

Reference: **Solestyle** — `https://colorlib.com/wp/template/solestyle/`  
Live preview: `https://preview.colorlib.com/theme/solestyle/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/solestyle-template-1770211411401.jpg  
Shipped: https://lacecraft.free.componentdock.com

Lacecraft is a single-page e-commerce shoe store template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**, **Outfit**

## Design tokens (`apps/lacecraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff7ed` | Primary scale — orange accent. |
| `--color-primary-100` | `#ffedd5` | primary 100 |
| `--color-primary-200` | `#fed7aa` | primary 200 |
| `--color-primary-300` | `#fdba74` | primary 300 |
| `--color-primary-400` | `#fb923c` | primary 400 |
| `--color-primary-500` | `#f97316` | primary 500 |
| `--color-primary-600` | `#ea580c` | primary 600 |
| `--color-primary-700` | `#c2410c` | primary 700 |
| `--color-primary-800` | `#9a3412` | primary 800 |
| `--color-primary-900` | `#7c2d12` | primary 900 |
| `--font-display` | `'Outfit', ui-sans-serif, system-ui, sans-serif` | Font families — Outfit for display/headings, Inter for body. |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `AnnouncementBar` | — | no dedicated spec block |
| 2 | `Navbar` | Navbar displays brand and navigation | see fidelity note below |
| 3 | `Hero` | Hero displays headline and CTA | see fidelity note below |
| 4 | `Categories` | Shop by Category section | see fidelity note below |
| 5 | `FeaturedCollection` | Featured Collection product grid | see fidelity note below |
| 6 | `BenefitsStrip` | Benefits strip | see fidelity note below |
| 7 | `NewArrivals` | New Arrivals section | see fidelity note below |
| 8 | `Testimonials` | Customer Testimonials | see fidelity note below |
| 9 | `Newsletter` | Newsletter CTA | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `AnnouncementBar`
*anchors only* — LACE20

### `Navbar`
Users SHALL see the brand name "Lacecraft" in the navbar with navigation links.

### `Hero`
Users SHALL see a large hero section with headline, subtext, and call-to-action buttons.

### `Categories`
Users SHALL see product categories with counts.

### `FeaturedCollection`
Users SHALL see featured products with ratings, prices, and badges.

### `BenefitsStrip`
Users SHALL see four value proposition items.

### `NewArrivals`
Users SHALL see new arrival products with NEW badges.

### `Testimonials`
Users SHALL see customer reviews with star ratings and trust stats.

### `Newsletter`
Users SHALL see a newsletter signup form with email input and submit button.

### `Footer`
Users SHALL see footer with brand, navigation links, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/lacecraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lacecraft/public/CNAME` = `lacecraft.free.componentdock.com`
  and the package `homepage` = `https://lacecraft.free.componentdock.com`.
