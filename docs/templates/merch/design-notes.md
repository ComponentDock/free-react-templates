# Merch — Design Notes

Reference: **Product** — `https://colorlib.com/wp/template/product/`  
Live preview: `https://preview.colorlib.com/theme/product/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/product-free-template.jpg  
Shipped: https://merch.free.componentdock.com

Merch is a single-page e-commerce fashion store template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Libre Baskerville**, **Libre Baskerville:wght@400;700**, **Muli**

## Design tokens (`apps/merch/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e6faf2` | primary 50 |
| `--color-primary-100` | `#b3f0db` | primary 100 |
| `--color-primary-200` | `#80e6c4` | primary 200 |
| `--color-primary-300` | `#4ddcad` | primary 300 |
| `--color-primary-400` | `#0fb78d` | primary 400 |
| `--color-primary-500` | `#0da67f` | primary 500 |
| `--color-primary-600` | `#0b8566` | primary 600 |
| `--color-primary-700` | `#09644d` | primary 700 |
| `--color-primary-800` | `#064333` | primary 800 |
| `--color-primary-900` | `#03221a` | primary 900 |
| `--color-accent-400` | `#11ca9c` | Button hover green (ColorLib .btn-primary:hover #11ca9c). |
| `--color-ink` | `#333333` | Muted body text (ColorLib #333333). |
| `--color-mist` | `#f8f9fa` | Light section background (ColorLib .bg-light). |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | Libre Baskerville (headings) + Muli (body) via Google Fonts <link>. |
| `--font-display` | `'Libre Baskerville', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays logo and navigation | see fidelity note below |
| 2 | `Hero` | Hero section displays promotional content | see fidelity note below |
| 3 | `Features` | Features bar shows three benefits | see fidelity note below |
| 4 | `NewArrivals` | New Arrivals product grid | see fidelity note below |
| 5 | `DealOfWeek` | — | no dedicated spec block |
| 6 | `PopularItems` | Popular Items section | see fidelity note below |
| 7 | `Newsletter` | Newsletter signup form | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The template SHALL display a sticky top navigation bar with the logo "Merch" (with green dot accent), menu links (New, Men, Women, Accessories, Jewelry, About, Contact), and action icons (search, user, cart).

### `Hero`
The template SHALL display a full-width hero section with a background image, overlay text, and a call-to-action button.

### `Features`
The template SHALL display a 3-column features section with icons and descriptions for Worldwide Delivery, Secure Payments, and Simple Returns.

### `NewArrivals`
The template SHALL display a "New Arrivals" section with a 3-column grid of 6 product cards, each showing an image, name, price, badge, and add-to-cart button.

### `DealOfWeek`
*anchors only* — Week Deal · Hodina Watch · Premium craftsmanship meets modern design. This limited-time offer won't last forever. · Shop Now

### `PopularItems`
The template SHALL display a "Popular Items" section with a 3-column grid of 6 product cards using the same card pattern.

### `Newsletter`
The template SHALL display a newsletter section with an email input and subscribe button.

### `Footer`
The template SHALL display a footer with Help, About, and Shop link columns, a newsletter signup, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/merch/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/merch/public/CNAME` = `merch.free.componentdock.com`
  and the package `homepage` = `https://merch.free.componentdock.com`.
