# Zine — Design Notes

Reference: **Katt** — `https://colorlib.com/wp/template/katt/`  
Live preview: `https://preview.colorlib.com/theme/katt/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/katt-free-creative-blog-website-template.jpg  
Shipped: https://zine.free.componentdock.com

Zine is a single-page creative blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Katt" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700**, **PT Serif**

## Design tokens (`apps/zine/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f5de87` | brand |
| `--color-primary` | `#f5de87` | primary scale so shared Button/ButtonLink (bg-primary-600) render brand yellow |
| `--color-primary-50` | `#fefcec` | primary 50 |
| `--color-primary-100` | `#fbf7d8` | primary 100 |
| `--color-primary-200` | `#f8efb0` | primary 200 |
| `--color-primary-300` | `#f6e88e` | primary 300 |
| `--color-primary-400` | `#f5e287` | primary 400 |
| `--color-primary-500` | `#f5e087` | primary 500 |
| `--color-primary-600` | `#f5de87` | primary 600 |
| `--color-primary-700` | `#d9c05f` | primary 700 |
| `--color-primary-800` | `#b79e3f` | primary 800 |
| `--color-primary-900` | `#937f2b` | primary 900 |
| `--color-charcoal` | `#2f2f2b` | charcoal |
| `--color-overlay` | `#3a3a37` | overlay |
| `--color-overlay-hover` | `#464642` | overlay hover |
| `--color-cream` | `#faf8f3` | cream |
| `--color-footer` | `#50504c` | footer |
| `--color-heart` | `#e76f7d` | heart |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-serif` | `'PT Serif', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `HeroSlider` | Hero slider post | see fidelity note below |
| 3 | `BlogList` | Blog post rows | see fidelity note below |
| 4 | `LoadMore` | Load more articles button | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main menu

### `HeroSlider`
The system SHALL render a full-width image slider as the first post, with an overlaid title and category.

### `BlogList`
The system SHALL render alternating blog post rows with the reference layout variants (image left, image right, and text-only).

### `LoadMore`
The system SHALL render a "Load more articles" block button below the posts.

### `Footer`
The system SHALL render a footer with a link, a centered logo, and social links.

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
- **Provenance ban.** No file under `apps/zine/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/zine/public/CNAME` = `zine.free.componentdock.com`
  and the package `homepage` = `https://zine.free.componentdock.com`.
