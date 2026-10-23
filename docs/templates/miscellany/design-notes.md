# Miscellany — Design Notes

Reference: **Stuff** — `https://colorlib.com/wp/template/stuff/`  
Live preview: `https://preview.colorlib.com/theme/stuff/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/stuff-free-template.jpg  
Shipped: https://miscellany.free.componentdock.com

Miscellany is a single-page blog/magazine landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Stuff" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/miscellany/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fef2ee` | primary 50 |
| `--color-primary-100` | `#fde0d5` | primary 100 |
| `--color-primary-200` | `#fbc0aa` | primary 200 |
| `--color-primary-300` | `#f99974` | primary 300 |
| `--color-primary-400` | `#f76d3d` | primary 400 |
| `--color-primary-500` | `#f6490d` | primary 500 |
| `--color-primary-600` | `#f75b26` | primary 600 |
| `--color-primary-700` | `#c93a0a` | primary 700 |
| `--color-primary-800` | `#a12f08` | primary 800 |
| `--color-primary-900` | `#7c2406` | primary 900 |
| `--color-brand` | `#f6490d` | brand |
| `--color-accent` | `#f7af1d` | accent |
| `--color-ink` | `#666666` | ink |
| `--color-heading` | `#000000` | heading |
| `--color-coal` | `#212125` | coal |
| `--color-paper` | `#f8f9fa` | paper |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `BlogGrid` | Blog grid | see fidelity note below |
| 4 | `InstagramStrip` | Instagram strip | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Miscellany", anchor links to the page's sections, a Blog dropdown, and a dark-mode toggle button.

### `HeroSlider`
The system SHALL render a full-width hero slider with multiple slides, each a full-bleed photo with a subtle overlay and a white article-preview box.

### `BlogGrid`
The system SHALL render a masonry-style blog grid of `.blog-entry` cards, each with an image, a white overlapping description box (category, date, author, bold title, excerpt).

### `InstagramStrip`
The system SHALL render a strip of eight square image tiles with a heading "Instagram".

### `Footer`
The system SHALL render a dark footer with four columns, tag chips, and a copyright line.

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
- **Provenance ban.** No file under `apps/miscellany/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/miscellany/public/CNAME` = `miscellany.free.componentdock.com`
  and the package `homepage` = `https://miscellany.free.componentdock.com`.
