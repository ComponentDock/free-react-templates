# Bugguard — Design Notes

Reference: **Pestcontrol** — `https://colorlib.com/wp/template/pestcontrol/`  
Live preview: `https://preview.colorlib.com/theme/pestcontrol/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pestcontrol-colorlib-template.jpg  
Shipped: https://bugguard.free.componentdock.com

Recreation of the ColorLib **Pestcontrol** template (https://colorlib.com/wp/template/pestcontrol/) as a single-page React application. Live preview analyzed: https://preview.colorlib.com/theme/pestcontrol/ **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700;900**

## Design tokens (`apps/bugguard/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#d7553b` | brand |
| `--color-brand-dark` | `#c04a32` | brand dark |
| `--color-accent-blue` | `#1c6ab8` | accent blue |
| `--color-ink` | `#0d0d0d` | Ink — near-black headings (#0d0d0d). |
| `--color-ink-dark` | `#111111` | ink dark |
| `--color-paper` | `#f2f4f5` | Paper — light section background (#f2f4f5). |
| `--color-mist` | `#4e4e4e` | Mist — muted body text (#4e4e4e). |
| `--color-primary-50` | `#fdf3f0` | primary 50 |
| `--color-primary-100` | `#fbe3dc` | primary 100 |
| `--color-primary-200` | `#f5c4b8` | primary 200 |
| `--color-primary-300` | `#ee9e8a` | primary 300 |
| `--color-primary-400` | `#e47a5f` | primary 400 |
| `--color-primary-500` | `#d7553b` | primary 500 |
| `--color-primary-600` | `#c04a32` | primary 600 |
| `--color-primary-700` | `#a03d2a` | primary 700 |
| `--color-primary-800` | `#833324` | primary 800 |
| `--color-primary-900` | `#6c2c20` | primary 900 |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header navigation and contact bar | see fidelity note below |
| 2 | `Hero` | Hero section with background image | see fidelity note below |
| 3 | `About` | About section with image gallery | see fidelity note below |
| 4 | `Services` | Services section with 8 pest control cards | see fidelity note below |
| 5 | `ChooseUs` | Choose Us section with features | see fidelity note below |
| 6 | `Counter` | Counter statistics bar | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `LatestBlog` | Latest Blog section | see fidelity note below |
| 9 | `Footer` | Footer with 4 columns and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a top bar with address, hours, phone, and social icons, and a main navigation bar with logo, links, and Appointment CTA.

### `Hero`
The template SHALL display a full-width hero with background image, dark overlay, subtitle, heading, tagline, and CTA button.

### `About`
The template SHALL display a two-column about section with heading, description, info sub-items, CTA button, and image gallery.

### `Services`
The template SHALL display a 2x4 grid of 8 service cards, each with a circular icon, title, and description.

### `ChooseUs`
The template SHALL display a three-column layout with heading, description, CTA, image, and 3 feature items.

### `Counter`
The template SHALL display a full-width blue background bar with 4 stat columns.

### `Testimonials`
The template SHALL display a heading, rating widget, and testimonial quotes.

### `LatestBlog`
The template SHALL display a 2-column blog layout with 1 featured post and 3 smaller posts.

### `Footer`
The template SHALL display a dark footer with 4 columns, copyright bar, and link to Component Dock.

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
- **Provenance ban.** No file under `apps/bugguard/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bugguard/public/CNAME` = `bugguard.free.componentdock.com`
  and the package `homepage` = `https://bugguard.free.componentdock.com`.
