# Vow — Design Notes

Reference: **Wish** — `https://colorlib.com/wp/template/wish/`  
Live preview: `https://preview.colorlib.com/theme/wish/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wish-free-template-1.jpg  
Shipped: https://vow.free.componentdock.com

Vow is a single-page fashion/e-commerce shop landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Wish" free template (source: https://colorlib.com/wp/template/wish/), built under a DIFFERENT name (**Vow**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**

## Design tokens (`apps/vow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#937c6f` | brand |
| `--color-brand-dark` | `#7d6a5f` | brand dark |
| `--color-heading` | `#2f2f2f` | heading |
| `--color-body-text` | `#929191` | body text |
| `--color-dark` | `#232323` | dark |
| `--color-light-bg` | `#f9f5f5` | light bg |
| `--color-red-accent` | `#db5246` | red accent |
| `--font-sans` | `'Open Sans', sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `PromoSection` | Promo section | see fidelity note below |
| 4 | `NewArrivals` | New arrivals | see fidelity note below |
| 5 | `ExtraPromos` | Extra promos | see fidelity note below |
| 6 | `Gallery` | Gallery | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Newsletter` | Newsletter | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The header SHALL display the Vow logo, navigation links, search input, cart icon with count, wishlist star with count, and avatar icon.

### `HeroSlider`
The hero section SHALL render a full-width background image carousel with "Promo Prices" subtitle and "New Collection" heading.

### `PromoSection`
A promo section SHALL display "only the best" subtitle and "promo prices" title with 3 promo cards in a grid.

### `NewArrivals`
A new arrivals section SHALL display 6 products in a 3-column grid with images, ratings, names, prices, and action buttons.

### `ExtraPromos`
Two side-by-side promo banners SHALL display with background images, titles, descriptions, and "check out" buttons.

### `Gallery`
A gallery section SHALL display hashtags, description, submit button, and an image slider.

### `Testimonials`
A testimonials section SHALL display customer quotes with author details.

### `Newsletter`
A newsletter section SHALL render with a background image, heading, email input, and subscribe button.

### `Footer`
The footer SHALL render a centered layout with logo, nav links, social icons, and copyright with Component Dock link.

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
- **Provenance ban.** No file under `apps/vow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vow/public/CNAME` = `vow.free.componentdock.com`
  and the package `homepage` = `https://vow.free.componentdock.com`.
