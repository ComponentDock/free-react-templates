# Chrono — Design Notes

Reference: **Timezone** — `https://colorlib.com/wp/template/timezone/`  
Live preview: `https://preview.colorlib.com/theme/timezone/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/timezone-free-template.jpg  
Shipped: https://chrono.free.componentdock.com

Chrono is a single-page watch-store eCommerce template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@400;600;700**, **Roboto**

## Design tokens (`apps/chrono/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff2020` | brand |
| `--color-herobtn` | `#4a4a4b` | herobtn |
| `--color-navy` | `#002d5b` | navy |
| `--color-band` | `#ea0000` | band |
| `--color-badge` | `#ff003c` | badge |
| `--color-addbar` | `#f81f1f` | addbar |
| `--color-ink` | `#141517` | ink |
| `--color-muted` | `#868c98` | muted |
| `--color-herobg` | `#f0f0f2` | herobg |
| `--color-paper` | `#ffffff` | paper |
| `--font-sans` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-body` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header — logo, nav, icons, mobile menu | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `NewArrivals` | New Arrivals | see fidelity note below |
| 4 | `Gallery` | Gallery mosaic | see fidelity note below |
| 5 | `PopularItems` | Popular Items | see fidelity note below |
| 6 | `VideoBanner` | Video banner | see fidelity note below |
| 7 | `WatchChoice` | Watch of Choice | see fidelity note below |
| 8 | `ShopMethods` | Shop methods | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a white sticky header with the brand logo on the left, a centered nav (Home / Shop / About / Latest with a red badge / Blog / Pages / Contact), and a right cluster with search, user, and cart icons. On mobile a hamburger SHALL open a dropdown with the same nav links.

### `HeroSlider`
The system SHALL render a 2-slide hero on a light-grey `#f0f0f2` background: left column with a large bold headline ("Select Your New Perfect Style"), a short paragraph, and a dark "Shop Now" button (red sweep on hover); right column with a large watch photo (red vertical stripe behind it). Arrow controls SHALL navigate between the slides.

### `NewArrivals`
The system SHALL render a "New Arrivals" section (black 48px section title) with three product cards, each showing a product photo, a name, and a red price, with the photo zooming slightly on hover.

### `Gallery`
The system SHALL render a mosaic gallery of four photo tiles (two large and two small), each revealing a dark overlay on hover.

### `PopularItems`
The system SHALL render a "Popular Items" section with a centered title, an intro paragraph, a sort select, six product cards in a 3-column grid (each with photo, hover "Add to cart" bar, heart icon, name, price), and a "View More Products" button below the grid.

### `VideoBanner`
The system SHALL render a full-width video section with a background photo and a centered round play button.

### `WatchChoice`
The system SHALL render a "Watch of Choice" feature section with two alternating rows (image / text, then flipped), each showing a watch photo, a 56px heading, a paragraph, and a red "Show Watches" button.

### `ShopMethods`
The system SHALL render a full-width red `#ea0000` band with three columns, each showing an icon, a title, and a short paragraph (Free Shipping Method, Secure Payment System, Return & Exchange Policy).

### `Footer`
The system SHALL render a white footer with four columns (about-brand blurb, Quick Links, New Products, Support) and a copyright bar with social icons on the right; the bar SHALL read "Copyright © <year> All rights reserved | This template is made with ♥ by **Component Dock**" where "Component Dock" links https://www.componentdock.com/ (no Colorlib credit).

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
- **Provenance ban.** No file under `apps/chrono/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/chrono/public/CNAME` = `chrono.free.componentdock.com`
  and the package `homepage` = `https://chrono.free.componentdock.com`.
