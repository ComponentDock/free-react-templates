# Photomuse — Design Notes

Reference: **Louie** — `https://colorlib.com/wp/template/louie/`  
Live preview: `https://preview.colorlib.com/theme/louie/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/louie-free-template.jpg  
Shipped: https://photomuse.free.componentdock.com

A photographer portfolio template featuring a fixed sidebar navigation, split hero section with author info, Instagram photo grid, and dark footer with contact details.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Herr Von Muellerhoff**, **Montserrat**, **Poppins**

## Design tokens (`apps/photomuse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#f0f9fd` | Photomuse brand palette — light blue accent (#78d5ef) |
| `--color-brand-100` | `#daf1fa` | brand 100 |
| `--color-brand-200` | `#b8e5f5` | brand 200 |
| `--color-brand-300` | `#78d5ef` | brand 300 |
| `--color-brand-400` | `#4cc4e8` | brand 400 |
| `--color-brand-500` | `#2aaddb` | brand 500 |
| `--color-brand-600` | `#1a8fbf` | brand 600 |
| `--color-brand-700` | `#16739a` | brand 700 |
| `--color-brand-800` | `#165f7f` | brand 800 |
| `--color-brand-900` | `#17506a` | brand 900 |
| `--color-dark` | `#343a40` | dark |
| `--color-heading` | `#1f1f1f` | heading |
| `--color-body` | `#212529` | body |
| `--color-muted` | `#6c757d` | muted |
| `--color-tan` | `#ccb78f` | tan |
| `--color-watermark` | `#ededed` | watermark |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-signature` | `'Herr Von Muellerhoff', cursive` | font signature |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `InstagramGrid` | Instagram photo grid | see fidelity note below |
| 4 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The template SHALL display a fixed left sidebar with author avatar, name, navigation links, and newsletter signup.

### `Hero`
The template SHALL display a split hero section with a photographer portrait on the left and author info on the right.

### `InstagramGrid`
The template SHALL display an Instagram photo grid with a heading and five images.

### `Footer`
The template SHALL display a dark footer with recent photos, archives, and contact information.

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
- **Provenance ban.** No file under `apps/photomuse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/photomuse/public/CNAME` = `photomuse.free.componentdock.com`
  and the package `homepage` = `https://photomuse.free.componentdock.com`.
