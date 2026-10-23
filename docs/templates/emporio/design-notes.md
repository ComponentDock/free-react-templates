# Emporio — Design Notes

Reference: **Capitalshop** — `https://colorlib.com/wp/template/capitalshop/`  
Live preview: `https://preview.colorlib.com/theme/capitalshop/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/capitalshop-free-template.jpg  
Shipped: https://emporio.free.componentdock.com

Emporio is a single-page fashion e-commerce / online-shop website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Clicker Script**, **Jost**, **Roboto**

## Design tokens (`apps/emporio/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff2020` | brand |
| `--color-charcoal` | `#292621` | charcoal |
| `--color-footer` | `#171613` | footer |
| `--color-testimonial` | `#f3ead8` | testimonial |
| `--color-blog` | `#f6f6f6` | blog |
| `--color-strike` | `#cebd9c` | strike |
| `--color-copy` | `#57667e` | copy |
| `--color-footer-link` | `#bbb9b5` | footer link |
| `--color-line-soft` | `#edeff2` | line soft |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Jost', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-script` | `'Clicker Script', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with utility top bar, main nav and promo strip | see fidelity note below |
| 2 | `HeroSlider` | Hero slider with two fashion slides | see fidelity note below |
| 3 | `CategoryCards` | Three fashion category cards | see fidelity note below |
| 4 | `TrendingProducts` | Trending This Week with filter tabs and product cards | see fidelity note below |
| 5 | `Testimonial` | Testimonial band | see fidelity note below |
| 6 | `MayLike` | You May Like carousel | see fidelity note below |
| 7 | `LatestNews` | Latest News blog cards | see fidelity note below |
| 8 | `ServicesStrip` | Services strip with four features | see fidelity note below |
| 9 | `Footer` | Dark footer with newsletter, link columns and Component Dock credit | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a three-part header: a white utility top bar with links and social icons, a white main bar with logo, centered nav (two dropdowns), and right-side icons, and a dark promo strip with a "Shop Now" link.

### `HeroSlider`
The system SHALL render a full-width hero carousel with two slides, each showing a red cursive eyebrow, a large dark headline, subcopy, and a red pill "Shop Now" button.

### `CategoryCards`
The system SHALL render three photo cards (Men's, Women's, Baby Fashion), each with a dark gradient overlay, a white title, and a "Shop Now" link.

### `TrendingProducts`
The system SHALL render a "Trending This Week" section with Men/Women/Baby/ Fashion filter tabs and a products carousel whose cards show a photo, hover-revealed action icons, a product name, and a sale price with a strikethrough original price.

### `Testimonial`
The system SHALL render a cream `#F3EAD8` testimonial band with a heading, copy, and an author line that does not reference ColorLib.

### `MayLike`
The system SHALL render a second products carousel under a "You May Like" heading, using the same product-card kind as the Trending section.

### `LatestNews`
The system SHALL render a light-grey `#F6F6F6` blog section with a "Latest News" heading and three blog cards, each with a photo, a "Fashion Tips" tag, a title, an excerpt, and a dark "Read More" button.

### `ServicesStrip`
The system SHALL render a four-column services strip with an icon, a title, and a sub-line for each of: Fast & Free Delivery, Secure Payment, Money Back Guarantee, and Online Support.

### `Footer`
The system SHALL render a dark `#171613` footer with a subscribe area (heading, email form with red square button, social icons), a link-column area (logo + Shop Men / Shop Women / Baby Collection / Quick Links), and a copyright bar linking Component Dock.

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
- **Provenance ban.** No file under `apps/emporio/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/emporio/public/CNAME` = `emporio.free.componentdock.com`
  and the package `homepage` = `https://emporio.free.componentdock.com`.
