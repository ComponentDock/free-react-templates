# Stackly — Design Notes

Reference: **Accordion 08** — `https://colorlib.com/wp/template/accordion-08/`  
Live preview: `https://preview.colorlib.com/theme/accordion-08/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-08.jpg  
Shipped: https://stackly.free.componentdock.com

Recreation of ColorLib **Accordion 08** (`https://colorlib.com/wp/template/accordion-08/`). Preview URL: `https://preview.colorlib.com/theme/accordion-08/` (returns 404 — fallback to screenshot analysis). Stack: Vite + React 19 + TypeScript + Tailwind CSS 4.

## Design tokens (`apps/stackly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#f8fafc` | Light neutral page background — brand palette: #f8fafc. |
| `--color-accordion-bg` | `#ffffff` | White accordion card background. |
| `--color-border-row` | `#e2e8f0` | Border between accordion rows — brand palette: #e2e8f0. |
| `--color-text-header` | `#0f172a` | Header title text — brand palette: #0f172a. |
| `--color-text-body` | `#475569` | Body text inside expanded panel — brand palette: #475569. |
| `--color-accent` | `#0ea5e9` | Accent / active indicator — brand palette: #0ea5e9 (sky-500). |
| `--color-muted` | `#64748b` | Muted text (footer). |
| `--font-sans` | `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | System font stack. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Accordion` | The page SHALL render with a heading and accordion items | see fidelity note below |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Accordion`
The page SHALL render with a centered heading "Accordion #08" and a series of interactive accordion items vertically stacked on a neutral light background.

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
- **Provenance ban.** No file under `apps/stackly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stackly/public/CNAME` = `stackly.free.componentdock.com`
  and the package `homepage` = `https://stackly.free.componentdock.com`.
