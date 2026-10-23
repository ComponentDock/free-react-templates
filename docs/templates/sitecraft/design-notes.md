# Sitecraft — Design Notes

Reference: **Complex** — `https://colorlib.com/wp/template/complex/`  
Live preview: `https://preview.colorlib.com/theme/complex/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/complex-free-template.jpg  
Shipped: https://sitecraft.free.componentdock.com

Sitecraft is a construction company landing page. It recreates the ColorLib **Complex** design (https://colorlib.com/wp/template/complex/, preview: https://preview.colorlib.com/theme/complex/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/sitecraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f7b633` | brand |
| `--color-surface` | `#f5f5f5` | Near-white body background (whitesmoke in the original). |
| `--color-ink` | `#111827` | Dark ink for headings (#000 in the original). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/sitecraft/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `ServicesTabs` | — | no dedicated spec block |
| 4 | `ServicesGrid` | — | no dedicated spec block |
| 5 | `Counters` | — | no dedicated spec block |
| 6 | `ProjectGallery` | — | no dedicated spec block |
| 7 | `TeamSection` | — | no dedicated spec block |
| 8 | `Testimonials` | — | no dedicated spec block |
| 9 | `Newsletter` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Sitecraft

### `Hero`
*anchors only* — Hero · Our Obsession Is Distinctive Interiors · Providing All Kinds of Construction Services

### `ServicesTabs`
*anchors only* — What We Offer · tablist · tabpanel

### `ServicesGrid`
*anchors only* — Services

### `Counters`
*anchors only* — Statistics

### `ProjectGallery`
*anchors only* — Our Projects

### `TeamSection`
*anchors only* — Our Team

### `Testimonials`
*anchors only* — Testimonials · Client Says

### `Newsletter`
*anchors only* — Newsletter · Subscribe Newsletter · Subscribe our newsletter and get latest update · Email address · Subscribe Now

### `Footer`
*anchors only* — About Sitecraft · Information · Instagram · Contact Info · Component Dock

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
- **Provenance ban.** No file under `apps/sitecraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sitecraft/public/CNAME` = `sitecraft.free.componentdock.com`
  and the package `homepage` = `https://sitecraft.free.componentdock.com`.
