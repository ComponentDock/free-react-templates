# Crinkle — Design Notes

Reference: **Accordion 18** — `https://colorlib.com/wp/template/accordion-18/`  
Live preview: `https://preview.colorlib.com/theme/bac/accordion-18/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-18.jpg  
Shipped: https://crinkle.free.componentdock.com

Crinkle is a bootstrap accordion component page with an accordion and footer. It recreates the ColorLib **Accordion 18** design (https://colorlib.com/wp/template/accordion-18/, preview: https://preview.colorlib.com/theme/bac/accordion-18/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/crinkle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#f9f9f9` | Light gray page background (brand palette: #f9f9f9 item background). |
| `--color-brand` | `#72c02c` | Signature brand green — the only accent color on the page. |
| `--color-header-inactive` | `#999999` | Inactive header text color. |
| `--color-header-active` | `#72c02c` | Active header text color. |
| `--color-body-text` | `#888888` | Body text color. |
| `--color-header-bg` | `#ffffff` | Header background (white). |
| `--color-icon-bg-inactive` | `#efefef` | Icon background inactive. |
| `--color-body-bg` | `#f5f5f5` | Panel body background (light grey). |
| `--color-separator` | `#e6e6e6` | Separator/border color. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/crinkle/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Accordion` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Accordion`
*anchors only* — region

### `Footer`
*anchors only* — More templates at Component Dock

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
- **Provenance ban.** No file under `apps/crinkle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crinkle/public/CNAME` = `crinkle.free.componentdock.com`
  and the package `homepage` = `https://crinkle.free.componentdock.com`.
