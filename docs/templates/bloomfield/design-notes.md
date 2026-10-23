# Bloomfield — Design Notes

Reference: **Florist** — `https://colorlib.com/wp/template/florist/`  
Live preview: `https://preview.colorlib.com/theme/florist/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/florist-free-template.jpg  
Shipped: https://bloomfield.free.componentdock.com

Bloomfield is a single-page florist shop website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Libre Baskerville**, **Libre Baskerville:ital,wght@0,400;0,700;1,400**, **Quicksand**

## Design tokens (`apps/bloomfield/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-bloom-50` | `#fff0f5` | bloom 50 |
| `--color-bloom-100` | `#ffe1eb` | bloom 100 |
| `--color-bloom-200` | `#ffc2d6` | bloom 200 |
| `--color-bloom-300` | `#ff94b5` | bloom 300 |
| `--color-bloom-400` | `#f45d96` | bloom 400 |
| `--color-bloom-500` | `#e83a7a` | bloom 500 |
| `--color-bloom-600` | `#d41f5f` | bloom 600 |
| `--color-bloom-700` | `#b11548` | bloom 700 |
| `--color-bloom-800` | `#931540` | bloom 800 |
| `--color-bloom-900` | `#7c1639` | bloom 900 |
| `--font-heading` | `'Libre Baskerville', serif` | font heading |
| `--font-sans` | `'Quicksand', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders navigation and actions | see fidelity note below |
| 2 | `Hero` | Hero section displays main heading and CTA | see fidelity note below |
| 3 | `Benefits` | Benefits section shows four benefit cards | see fidelity note below |
| 4 | `Categories` | Categories section shows four category cards | see fidelity note below |
| 5 | `About` | About section displays two-column layout | see fidelity note below |
| 6 | `NewArrivals` | New Arrivals section displays product grid with filters | see fidelity note below |
| 7 | `CallToAction` | Call to Action section displays CTA buttons | see fidelity note below |
| 8 | `Blog` | Blog section shows three blog posts | see fidelity note below |
| 9 | `Testimonials` | Testimonials section shows carousel | see fidelity note below |
| 10 | `InstagramFeed` | Instagram feed shows five images | see fidelity note below |
| 11 | `Footer` | Footer includes ComponentDock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navbar with the Bloomfield logo and navigation links (Home, About, Shop, Blog, Contact) and action icons (search, wishlist, cart) with a mobile hamburger toggle.

### `Hero`
The template SHALL display a full-width hero with background image, tagline "Fresh Flower & Gift Shop", heading "Making beautiful flowers a part of your life.", and a "Shop now" CTA button.

### `Benefits`
The template SHALL display a 4-column grid of benefit items: 100% Freshness, Made by artist, Own courier, 100% Quality.

### `Categories`
The template SHALL display a 4-column grid of category cards with background images: Fresh Flower (25 items), Succulent plants (162 items), Cactus plants (58 items), Furniture tree (25 items).

### `About`
The template SHALL display an about section with a heading, description text, video placeholder with play button, sub-heading, and "Contact us" CTA.

### `NewArrivals`
The template SHALL display filter tabs (All, Bouquet, Flower box, Flower shelf, Basket, Gift combos) and a product grid. Clicking a tab filters the displayed products.

### `CallToAction`
The template SHALL display a full-width CTA banner with "Custom flower" tagline, heading, "Order Now" button, and "Contact Us" button.

### `Blog`
The template SHALL display a 3-column grid of blog posts with tags, dates, and a "View all posts" link.

### `Testimonials`
The template SHALL display a testimonial carousel with quote text, name, role, and prev/next navigation buttons.

### `InstagramFeed`
The template SHALL display a 5-column grid of Instagram images with hover overlay showing "Follow us @bloomfield".

### `Footer`
The template SHALL display a footer with logo, description, social links, Company/Account columns, newsletter form, and "More templates at Component Dock" link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/bloomfield/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bloomfield/public/CNAME` = `bloomfield.free.componentdock.com`
  and the package `homepage` = `https://bloomfield.free.componentdock.com`.
