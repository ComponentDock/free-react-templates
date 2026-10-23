# Palatable — Design Notes

Reference: **Delicious** — `https://colorlib.com/wp/template/delicious/`  
Live preview: `https://preview.colorlib.com/theme/delicious/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/delicious-free-template.jpg  
Shipped: https://palatable.free.componentdock.com

A Food / Recipe Blog template with top header, sticky, hero carousel, top categories, best recipes and cta banner sections. Recreation of ColorLib's **Delicious** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**

## Design tokens (`apps/palatable/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Open Sans', sans-serif` | font sans |
| `--color-brand` | `#40ba37` | brand |
| `--color-brand-dark` | `#1c8314` | brand dark |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#9b9b9b` | body |
| `--color-link` | `#474747` | link |
| `--color-input-bg` | `#f3f5f8` | input bg |
| `--color-overlay` | `rgba(10, 12, 18, 0.55)` | overlay |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopHeader` | Top header bar | see fidelity note below |
| 2 | `Navbar` | Sticky navbar | see fidelity note below |
| 3 | `HeroCarousel` | Hero carousel | see fidelity note below |
| 4 | `TopCategories` | Top categories section | see fidelity note below |
| 5 | `BestRecipes` | Best recipes grid | see fidelity note below |
| 6 | `CtaBanner` | CTA banner | see fidelity note below |
| 7 | `SmallRecipes` | Small recipes list | see fidelity note below |
| 8 | `QuoteNewsletterAd` | Quote newsletter ad section | see fidelity note below |
| 9 | `InstagramGallery` | Instagram gallery | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopHeader`
The template SHALL display a top header bar with breaking news ticker and social media icons.

### `Navbar`
The template SHALL display a sticky navbar with logo, navigation links, and search icon.

### `HeroCarousel`
The template SHALL display a hero carousel with 3 slides that auto-rotate.

### `TopCategories`
The template SHALL display 2 featured category cards in a 2-column layout.

### `BestRecipes`
The template SHALL display 6 recipe cards in a 3-column responsive grid.

### `CtaBanner`
The template SHALL display a full-width CTA banner with background image and dark overlay.

### `SmallRecipes`
The template SHALL display 9 recipe items in a 2-column layout with thumbnails.

### `QuoteNewsletterAd`
The template SHALL display a 3-column layout with quote, newsletter form, and ad.

### `InstagramGallery`
The template SHALL display 6 images in a horizontal row with hover overlay.

### `Footer`
The template SHALL display a footer with social icons, logo, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/palatable/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/palatable/public/CNAME` = `palatable.free.componentdock.com`
  and the package `homepage` = `https://palatable.free.componentdock.com`.
