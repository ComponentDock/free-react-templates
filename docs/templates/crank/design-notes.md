# Crank — Design Notes

Reference: **Accordion 17** — `https://colorlib.com/wp/template/accordion-17/`  
Live preview: `https://preview.colorlib.com/theme/accordion-17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-17.jpg  
Shipped: https://crank.free.componentdock.com

Crank is a clean, minimal FAQ accordion page with a plus/minus toggle style. It recreates the ColorLib Accordion V17 design using React, Tailwind CSS 4, and accessible accordion patterns.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/crank/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#efefef` | Page background — brand palette: #efefef. |
| `--color-accordion-bg` | `#f9f9f9` | Accordion item background — brand palette: #f9f9f9. |
| `--color-text-header` | `#212529` | Header title text — brand palette: #212529. |
| `--color-text-body` | `#888888` | Body text inside expanded panel — brand palette: #888888. |
| `--color-accent` | `#72c02c` | Active/expanded button text — brand palette: #72c02c (green). |
| `--color-muted` | `#999999` | Muted text (collapsed buttons, footer). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Accordion` | Renders the accordion heading | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Accordion`
The page SHALL display a centered heading "Bootstrap Accordion #7" above the accordion.

### `Footer`
The page SHALL render a footer with copyright year, template name, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/crank/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crank/public/CNAME` = `crank.free.componentdock.com`
  and the package `homepage` = `https://crank.free.componentdock.com`.
