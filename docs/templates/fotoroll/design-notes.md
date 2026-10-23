# Fotoroll — Design Notes

Reference: **Photography 2** — `https://colorlib.com/wp/template/photography-2/`  
Live preview: `https://preview.colorlib.com/theme/photography-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/photography-2-free-template-1.jpg  
Shipped: https://fotoroll.free.componentdock.com

Fotoroll is a photography portfolio template with a navbar, hero, portfolio, blog and footer. It recreates the ColorLib **Photography 2** design (https://colorlib.com/wp/template/photography-2/, preview: https://preview.colorlib.com/theme/photography2/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/fotoroll/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4ecdc4` | brand |
| `--color-brand-dark` | `#3dbdb5` | brand dark |
| `--color-ink` | `#333333` | ink |
| `--color-ink-light` | `#888888` | ink light |
| `--color-paper` | `#ffffff` | paper |
| `--color-gallery` | `#f5f5f5` | gallery |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/fotoroll/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Portfolio` | — | no dedicated spec block |
| 4 | `Blog` | — | no dedicated spec block |
| 5 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main · navigation · Mobile

### `Hero`
*anchors only* — Previous slide · Next slide · View Projects

### `Portfolio`
*anchors only* — Our Portfolio

### `Blog`
*anchors only* — Latest from the Blog

### `Footer`
*anchors only* — Facebook · Twitter · Instagram · Dribbble

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
- **Provenance ban.** No file under `apps/fotoroll/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fotoroll/public/CNAME` = `fotoroll.free.componentdock.com`
  and the package `homepage` = `https://fotoroll.free.componentdock.com`.
