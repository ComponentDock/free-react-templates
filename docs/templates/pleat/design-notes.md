# Pleat — Design Notes

Reference: `https://colorlib.com/wp/template/accordion-13/` (the design page the spec records)  
Live preview: `https://preview.colorlib.com/theme/bac/accordion-13/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-01.jpg — the ROW's slug `accordion-01`, not the spec's `accordion-13`  
Shipped: https://pleat.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `accordion-01` for this app while the spec records `accordion-13`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Recreation of ColorLib **Accordion 13** (`https://colorlib.com/wp/template/accordion-13/`), preview URL: `https://preview.colorlib.com/theme/bac/accordion-13/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/pleat/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#ffffff` | White page background — brand palette: #ffffff. |
| `--color-accordion-bg` | `#ffffff` | White accordion card background. |
| `--color-border-row` | `#efefef` | Border between accordion rows — brand palette: #efefef. |
| `--color-text-header` | `#333333` | Header title text — brand palette: #333333. |
| `--color-text-body` | `#888888` | Body text inside expanded panel — brand palette: #888888. |
| `--color-accent` | `#72c02c` | Accent / active indicator — brand palette: #72c02c (green). |
| `--color-muted` | `#999999` | Muted text (footer). |
| `--font-sans` | `'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Roboto font stack — brand palette. |

> The spec has no section-level requirements; the order below is read from `apps/pleat/src/App.tsx` and the copy anchors from each component.

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
- **Provenance ban.** No file under `apps/pleat/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pleat/public/CNAME` = `pleat.free.componentdock.com`
  and the package `homepage` = `https://pleat.free.componentdock.com`.
