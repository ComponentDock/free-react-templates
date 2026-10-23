# Moda — Design Notes

Reference: **Shopper** — `https://colorlib.com/wp/template/shopper/`  
Live preview: `https://preview.colorlib.com/theme/shopper/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/shopper-template-1770211205661.jpg  
Shipped: https://moda.free.componentdock.com

Moda is a single-page fashion e-commerce landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**, **Outfit**

## Design tokens (`apps/moda/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fdf4ff` | primary 50 |
| `--color-primary-100` | `#fae8ff` | primary 100 |
| `--color-primary-200` | `#f5d0fe` | primary 200 |
| `--color-primary-300` | `#f0abfc` | primary 300 |
| `--color-primary-400` | `#e879f9` | primary 400 |
| `--color-primary-500` | `#d946ef` | primary 500 |
| `--color-primary-600` | `#c026d3` | primary 600 |
| `--color-primary-700` | `#a21caf` | primary 700 |
| `--color-primary-800` | `#86198f` | primary 800 |
| `--color-primary-900` | `#701a75` | primary 900 |
| `--color-primary-950` | `#4a044e` | primary 950 |
| `--color-accent-200` | `#fed7aa` | Accent orange #F97316 — sale/discount badges |
| `--color-accent-400` | `#fb923c` | accent 400 |
| `--color-accent-500` | `#f97316` | accent 500 |
| `--color-accent-900` | `#7c2d12` | accent 900 |
| `--font-display` | `'Outfit', ui-sans-serif, system-ui, sans-serif` | Display font — Outfit (headings, logo, countdown digits) |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Body font — Inter |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `AnnouncementBar` | Announcement bar | see fidelity note below |
| 2 | `Navbar` | Trust bar | see fidelity note below |
| 3 | `Hero` | Hero | see fidelity note below |
| 4 | `TrustBar` | — | no dedicated spec block |
| 5 | `FeaturedProducts` | Featured products grid | see fidelity note below |
| 6 | `Categories` | Shop by category | see fidelity note below |
| 7 | `NewArrivals` | New arrivals | see fidelity note below |
| 8 | `SeasonSale` | Season sale with countdown | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `Newsletter` | Newsletter section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |
| 12 | `CookieBanner` | — | no dedicated spec block |
| 13 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `AnnouncementBar`
The system SHALL render a solid brand-colored announcement strip above the header with a shipping promo and a promo code.

### `Navbar`
The system SHALL render a four-column feature strip below the hero.

### `Hero`
The system SHALL render a full-height hero with a background photo, dark gradient overlay, headline, two CTAs, a stats row, trust chips, and a scroll indicator.

### `TrustBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `FeaturedProducts`
The system SHALL render a "Featured Products" section with a heading, a "View All Products" link, and an 8-card product grid.

### `Categories`
The system SHALL render a "Shop by Category" section with six category cards.

### `NewArrivals`
The system SHALL render a "Just Dropped" new-arrivals row with four product cards and a "See All New" link.

### `SeasonSale`
The system SHALL render a brand-gradient "Season Sale" section with a live countdown timer and four sale product cards.

### `Testimonials`
The system SHALL render a testimonials section with three customer quote cards and a trust row.

### `Newsletter`
The system SHALL render a dark newsletter section with an email form, a consent line, and a four-feature row.

### `Footer`
The system SHALL render a footer with a mini newsletter, brand blurb, three link columns, and a bottom bar.

### `CookieBanner`
*anchors only* — region · Cookie consent · Decline · Accept All

### `BackToTop`
*anchors only* — Back to top

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
- **Provenance ban.** No file under `apps/moda/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/moda/public/CNAME` = `moda.free.componentdock.com`
  and the package `homepage` = `https://moda.free.componentdock.com`.
