# Remedy — Design Notes

Reference: **Pharmative** — `https://colorlib.com/wp/template/pharmative/`  
Live preview: `https://preview.colorlib.com/theme/pharmative/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pharmative-free-template.jpg  
Shipped: https://remedy.free.componentdock.com

Recreate the ColorLib "Pharmative" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Remedy". The template is a pharmacy and supplement store landing page with hero carousel, feature banners, product cards, newsletter CTA, testimonials, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito**, **Nunito:wght@300;400;600;700;800;900**

## Design tokens (`apps/remedy/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#75b239` | brand |
| `--color-brand-dark` | `#5a8f2d` | brand dark |
| `--color-ink` | `#25262a` | Ink — dark headings (#25262a from the original). |
| `--color-ink-dark` | `#1a1b1e` | ink dark |
| `--color-paper` | `#f8f9fa` | Paper — light section background (#f8f9fa from the original). |
| `--color-mist` | `#8c92a0` | Mist — muted body text (#8c92a0 from the original). |
| `--color-footer-link` | `#5c626e` | Footer link color (#5c626e from the original). |
| `--color-page` | `#efefef` | Page background (#efefef from the original). |
| `--color-primary-50` | `#f0f9e8` | primary 50 |
| `--color-primary-100` | `#d4edc0` | primary 100 |
| `--color-primary-200` | `#b8e098` | primary 200 |
| `--color-primary-300` | `#9cd370` | primary 300 |
| `--color-primary-400` | `#75b239` | primary 400 |
| `--color-primary-500` | `#5a8f2d` | primary 500 |
| `--color-primary-600` | `#4a7826` | primary 600 |
| `--color-primary-700` | `#3a601f` | primary 700 |
| `--color-primary-800` | `#2a4818` | primary 800 |
| `--color-primary-900` | `#1a3010` | primary 900 |
| `--font-sans` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | Fonts: Nunito (Google Fonts). |
| `--font-display` | `'Nunito', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo, navigation, search, and cart | see fidelity note below |
| 2 | `Hero` | Hero carousel with slides | see fidelity note below |
| 3 | `FeatureBanners` | Feature banners section | see fidelity note below |
| 4 | `Products` | Products section | see fidelity note below |
| 5 | `Newsletter` | Newsletter signup CTA | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `WhyUs` | Why Us section | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navbar with the "Remedy" logo (green brand color), desktop navigation links (Home, Store, Products with dropdown, About, Contact), search toggle, shopping cart icon, and mobile hamburger menu.

### `Hero`
The template SHALL display a hero carousel with two slides featuring background images, centered headings, descriptions, and "Shop Now" call-to-action buttons.

### `FeatureBanners`
The template SHALL display three feature banners in a row: Free Delivery, New Medicine Everyday, and Medicines Guaranteed, each with an icon, title, description, and "Learn more" link.

### `Products`
The template SHALL display a "Pharmacy Products" heading and a grid of 4 product cards with images, optional sale badges, names, and prices.

### `Newsletter`
The template SHALL display a full-width green banner with a discount heading, description, and email signup form.

### `Testimonials`
The template SHALL display a "Happy Customers" heading and 3 testimonial cards with quotes and author names.

### `WhyUs`
The template SHALL display a "Why Us" heading and 3 numbered items with descriptions.

### `Footer`
The template SHALL display a footer with About Remedy description, Navigation links, Contact info, and a copyright line linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/remedy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/remedy/public/CNAME` = `remedy.free.componentdock.com`
  and the package `homepage` = `https://remedy.free.componentdock.com`.
