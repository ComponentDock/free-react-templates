# Silhouette — Design Notes

Reference: **Fashion 2** — `https://colorlib.com/wp/template/fashion-2/`  
Live preview: `https://preview.colorlib.com/theme/fashion/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fashion-free-template.jpg  
Shipped: https://silhouette.free.componentdock.com

A single-page apparel store landing template with hero, product grid, about section, testimonials, blog posts, newsletter signup, and footer. Minimalist fashion aesthetic **measured from the live page**: Lato body + Playfair Display headings, coral `#ff6363` lead (30 declarations) on white, hairline `#efefef` column rules, no dark bands. The *shipped app* still paints an earlier invented green/lavender/charcoal palette — that is app debt, recorded in §Reference identity below and in the spec's prep correction.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700;900**, **Playfair Display**

## Design tokens (`apps/silhouette/src/index.css` `@theme`)

> **This table is the shipped app's own record, not the reference.** It lists what
> `apps/silhouette` paints today; none of these values occurs in the reference
> sheet. The measured design is the coral table in §Reference identity — a rebuild
> follows that one, and the app is the debt.

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Lato', sans-serif` | font sans |
| `--font-serif` | `'Playfair Display', serif` | font serif |
| `--color-brand` | `#6dab3c` | brand |
| `--color-brand-dark` | `#5f9434` | brand dark |
| `--color-accent` | `#b97ebb` | accent |
| `--color-ink` | `#1a1a2e` | ink |
| `--color-surface` | `#f7f7f7` | surface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with mobile toggle | see fidelity note below |
| 2 | `Hero` | Hero section with CTA | see fidelity note below |
| 3 | `Products` | Products grid | see fidelity note below |
| 4 | `About` | About section with features | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `Blog` | Blog section | see fidelity note below |
| 7 | `Newsletter` | Newsletter signup | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky top navigation bar with the brand logo "Silhouette" and links to Home, About, Collections, Blog, and Contact sections. On mobile, a hamburger button SHALL toggle the mobile menu.

### `Hero`
The template SHALL display a hero section with a headline "Define Your Own Style", descriptive subtext about fashion trends, and a "Shop Now" CTA button.

### `Products`
The template SHALL display a 4-column grid of 8 product cards, each with an image, product name, and price.

### `About`
The template SHALL display a split layout about section with an image on the left and a feature list on the right. The feature list SHALL include Free Shipping, Secure Payment, and Sustainable items with lucide-react icons.

### `Testimonials`
The template SHALL display 3 testimonials with quote text, author name, and role.

### `Blog`
The template SHALL display a 3-column grid of blog post cards with image, date, title, and excerpt.

### `Newsletter`
The template SHALL display a newsletter section with an email input and subscribe button. The form SHALL prevent default submission.

### `Footer`
The template SHALL display a 3-column footer with About text, Quick Links, and Contact information. The bottom bar SHALL show the copyright year and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/silhouette/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/silhouette/public/CNAME` = `silhouette.free.componentdock.com`
  and the package `homepage` = `https://silhouette.free.componentdock.com`.

## Reference identity — catalogue URL collision (measured 2026-10-24)

- The demo is live: `https://preview.colorlib.com/theme/fashion/` (HTTP 200,
  26,584 B; sheet `css/style.css` 29,430 B, sha256 `75499322b02a2b2d…`). The
  `theme/fashion-2/`, `theme/fashion2/` and `theme/bootstrap/fashion-2/` paths
  all 404 — the entry's screenshot (`fashion-free-template.jpg`) renders the
  coral design at `theme/fashion/`.
- **Two catalogue entries, one demo.** `catalog-141306` (`/wp/template/fashion/`,
  thumbnail `fashion-bold-free-fashion-website-template-768x619.jpg`, the bold
  green→yellow design) and key `fashion` (`/wp/template/fashion-2/`, thumbnail
  `fashion-free-template.jpg`) both carry `url: theme/fashion/`. The directory
  renders the **`fashion-2`** post's page — the post's own `og:image` is
  `fashion-free-template.jpg` (2026-10-24). The bold design's own demo is dead on
  every prefix probed (`fashion-2/`, `fashion2/`, `ashion/`, `bootstrap/fashion-2/`
  404; `theme/bold/` is a different ColorLib post, coral `#ff926b` + Raleway) and
  all three archive guesses 404 (`fashion.zip`, `fashion-2.zip`, `asion.zip`), so
  the directory's identity is settled by the live render, not by the catalogue key.
- **Accent is coral `#ff6363`** (30 declarations — `a`, `.text-primary`, nav
  active, mobile menu, dropdown active), hover `#ff7777` (2, `.btn-primary:hover`).
  Ink `#000000`; body muted `#a09b9b`; hairlines `#efefef` (`.lines-wrap` column
  rules); white surface.
- Lato body 14 px + Playfair Display headings, h1 at 100 px desktop.
- The green `#6DAB3C` / lavender `#B97EBB` / charcoal `#1a1a2e` palette above is
  **invented** — 0 occurrences in the sheet. `apps/silhouette` paints it → app
  debt.
- Structure: nav (`Fashion.` wordmark, Home, Dropdown, Menu Three, Inner Page,
  Contact Us) → hero (three stacked h1 lines, "1 of 0" counter) → Collections
  carousel (Minimal $29, Collecta $21, Nine8 $38, Hut $49) → "A Fashion Boutique"
  band → Testimonials (3) → Blog Posts (3) → 3-column footer. **No form or input
  exists on the page** — the newsletter in the spec is a documented addition.
- Spec: `openspec/specs/template-silhouette/spec.md`.
