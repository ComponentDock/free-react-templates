# Focal — Design Notes

Reference: **Bato** — `https://colorlib.com/wp/template/bato/`  
Live preview: `https://preview.colorlib.com/theme/bato/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bato-free-template.jpg  
Shipped: https://focal.free.componentdock.com

Focal is a photography portfolio template with a navbar, hero, work gallery, about band, contact and footer. It recreates the ColorLib **Bato** design (https://colorlib.com/wp/template/bato/, preview: https://preview.colorlib.com/theme/bato/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Karla**, **Karla:wght@400;700**, **Playfair Display**

## Design tokens (`apps/focal/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f9ce00` | Brand accent: golden yellow (#F9CE00) |
| `--color-brand-hover` | `#ffd614` | brand hover |
| `--color-surface` | `#ffffff` | Neutral palette |
| `--color-surface-dark` | `#111111` | surface dark |
| `--color-text-primary` | `rgba(0, 0, 0, 0.8)` | text primary |
| `--color-text-body` | `#6b7280` | text body |
| `--color-text-muted` | `rgba(114, 114, 114, 0.8)` | text muted |
| `--font-sans` | `'Karla', Arial, sans-serif` | Fonts |
| `--font-display` | `'Playfair Display', Georgia, serif` | font display |

> The spec has no section-level requirements; the order below is read from `apps/focal/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Gallery` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Contact` | — | no dedicated spec block |
| 6 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Open navigation menu · presentation · navigation · Main navigation

### `Hero`
*anchors only* — Hero carousel · Previous slide · Next slide

### `Gallery`
*anchors only* — Work gallery · Portfolio · Our Work

### `About`
*anchors only* — About us · We love photography

### `Contact`
*anchors only* — Contact us · name · email · message

### `Footer`
*anchors only* — Component Dock

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
- **Provenance ban.** No file under `apps/focal/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/focal/public/CNAME` = `focal.free.componentdock.com`
  and the package `homepage` = `https://focal.free.componentdock.com`.
