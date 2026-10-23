# Lumiere — Design Notes

Reference: **Mostudio** — `https://colorlib.com/wp/template/mostudio/`  
Live preview: `https://preview.colorlib.com/theme/mostudio/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/mostudio-free-template.jpg  
Shipped: https://lumiere.free.componentdock.com

A free photography portfolio template with sidebar navigation, featuring an alternating zigzag layout of portfolio items (image + text) and a dark sidebar with newsletter subscription.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Abril Fatface**, **Poppins**

## Design tokens (`apps/lumiere/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#fff7ed` | Lumiere brand palette — warm orange accent (#F96D00) |
| `--color-brand-100` | `#ffedd5` | brand 100 |
| `--color-brand-200` | `#fed7aa` | brand 200 |
| `--color-brand-300` | `#fdba74` | brand 300 |
| `--color-brand-400` | `#fb923c` | brand 400 |
| `--color-brand-500` | `#f97316` | brand 500 |
| `--color-brand-600` | `#ea580c` | brand 600 |
| `--color-brand-700` | `#c2410c` | brand 700 |
| `--color-brand-800` | `#9a3412` | brand 800 |
| `--color-brand-900` | `#7c2d12` | brand 900 |
| `--color-dark` | `#000000` | dark |
| `--color-heading` | `#1f1f1f` | heading |
| `--color-body` | `#212529` | body |
| `--color-muted` | `#6c757d` | muted |
| `--color-light` | `#ffffff` | light |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Abril Fatface', ui-sans-serif, system-ui, sans-serif` | font display |

> The spec has no section-level requirements; the order below is read from `apps/lumiere/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | — | no dedicated spec block |
| 2 | `PortfolioGrid` | — | no dedicated spec block |
| 3 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Sidebar`
*anchors only* — complementary · navigation · Email address for newsletter · Subscribe

### `PortfolioGrid`
*anchors only* — Load more

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
- **Provenance ban.** No file under `apps/lumiere/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lumiere/public/CNAME` = `lumiere.free.componentdock.com`
  and the package `homepage` = `https://lumiere.free.componentdock.com`.
