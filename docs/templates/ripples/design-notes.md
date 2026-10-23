# Ripples — Design Notes

Reference: **Accordion 11** — `https://colorlib.com/wp/template/accordion-11/`  
Live preview: `https://preview.colorlib.com/theme/bac/accordion-11/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-11.jpg  
Shipped: https://ripples.free.componentdock.com

An Interactive Accordion Showcase & FAQ template with interactive accordion and footer brand sections. Recreation of ColorLib **Accordion 11** (`https://colorlib.com/wp/template/accordion-11/`), preview URL: `https://preview.colorlib.com/theme/bac/accordion-11/`. Design category: UI Component Showcase & FAQ / Interactive Accordion.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/ripples/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#f1f5f9` | Light slate page background — brand palette: #f1f5f9. |
| `--color-accordion-bg` | `#ffffff` | White accordion card background. |
| `--color-border-row` | `#cbd5e1` | Border between accordion rows — brand palette: #cbd5e1. |
| `--color-text-header` | `#1e293b` | Header title text — brand palette: #1e293b. |
| `--color-text-body` | `#334155` | Body text inside expanded panel — brand palette: #334155. |
| `--color-accent` | `#2563eb` | Accent / active indicator — brand palette: #2563eb (blue-600). |
| `--color-muted` | `#64748b` | Muted text (footer). |
| `--font-sans` | `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | System font stack. |

> The spec has no section-level requirements; the order below is read from `apps/ripples/src/App.tsx` and the copy anchors from each component.

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
- **Provenance ban.** No file under `apps/ripples/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ripples/public/CNAME` = `ripples.free.componentdock.com`
  and the package `homepage` = `https://ripples.free.componentdock.com`.
