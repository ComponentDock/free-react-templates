# Clareo — Design Notes

Reference: **Imahe** — `https://colorlib.com/wp/template/imahe/`  
Live preview: `https://preview.colorlib.com/theme/imahe/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/imahe-free-template-1.jpg  
Shipped: https://clareo.free.componentdock.com

Recreation of ColorLib "Imahe" (https://colorlib.com/wp/template/imahe/) as a React 19 + Vite + Tailwind CSS 4 template. Photography portfolio with bold yellow accent, full-screen hero, services grid, about section, gallery, blog, instagram feed, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Amatic SC**, **Amatic SC:wght@400;700**, **Josefin Sans**

## Design tokens (`apps/clareo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#fffde6` | Clareo brand palette — yellow/gold primary (#FFDD00) |
| `--color-brand-100` | `#fff9b3` | brand 100 |
| `--color-brand-200` | `#fff480` | brand 200 |
| `--color-brand-300` | `#ffee4d` | brand 300 |
| `--color-brand-400` | `#ffdd00` | brand 400 |
| `--color-brand-500` | `#e6c500` | brand 500 |
| `--color-brand-600` | `#b39a00` | brand 600 |
| `--color-brand-700` | `#806e00` | brand 700 |
| `--color-brand-800` | `#4d4200` | brand 800 |
| `--color-brand-900` | `#1a1600` | brand 900 |
| `--color-surface` | `#f5f5f5` | surface |
| `--color-surface-alt` | `#ffffff` | surface alt |
| `--font-sans` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Amatic SC', cursive` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar with responsive mobile menu | see fidelity note below |
| 2 | `Hero` | Hero section with background image | see fidelity note below |
| 3 | `Services` | Services section with three service cards | see fidelity note below |
| 4 | `About` | About section with split layout | see fidelity note below |
| 5 | `Gallery` | Gallery section with image grid and hover captions | see fidelity note below |
| 6 | `Blog` | Blog section with post cards | see fidelity note below |
| 7 | `Instagram` | Instagram section with image tiles | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed navigation bar with logo and menu items, with a hamburger toggle on mobile.

### `Hero`
The template SHALL display a full-screen hero section with a background image, dark overlay, heading, subtitle, and CTA button.

### `Services`
The template SHALL display three service cards in a row with icons, titles, and descriptions.

### `About`
The template SHALL display a split layout with an image on the left and text on the right.

### `Gallery`
The template SHALL display a grid of gallery images that show captions on hover.

### `Blog`
The template SHALL display three blog post cards with images, dates, and titles.

### `Instagram`
The template SHALL display a row of 8 Instagram-style image tiles.

### `Footer`
The template SHALL display a footer with four columns and a copyright linking to Component Dock.

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
- **Provenance ban.** No file under `apps/clareo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/clareo/public/CNAME` = `clareo.free.componentdock.com`
  and the package `homepage` = `https://clareo.free.componentdock.com`.
