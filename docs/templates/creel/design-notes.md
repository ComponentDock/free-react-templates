# Creel — Design Notes

Reference: **Accordion 12** — `https://colorlib.com/wp/template/accordion-12/`  
Live preview: `https://preview.colorlib.com/theme/accordion-12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-12.jpg  
Shipped: https://creel.free.componentdock.com

Recreation of ColorLib **Accordion 12** (`https://colorlib.com/wp/template/accordion-12/`), preview URL: `https://preview.colorlib.com/theme/accordion-12/` (preview unreachable, fell back to screenshot and standard ColorLib accordion theme specifications). Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.

## Design tokens (`apps/creel/src/index.css` `@theme`)

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

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Accordion` | Interactive Accordion & FAQ Showcase | see fidelity note below |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Accordion`
The system SHALL provide an interactive accordion FAQ section with collapsible panels for browsing structured content.

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
- **Provenance ban.** No file under `apps/creel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/creel/public/CNAME` = `creel.free.componentdock.com`
  and the package `homepage` = `https://creel.free.componentdock.com`.
