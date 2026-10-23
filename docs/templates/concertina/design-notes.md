# Concertina — Design Notes

Reference: `https://colorlib.com/wp/template/accordion-05/` (the design page the spec records)  
Live preview: `https://preview.colorlib.com/theme/bac/accordion-16/` (the ROW's slug `accordion-16`, probed 200 on 2026-10-23) — the spec names `accordion-05` and records no demo.  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-16.jpg — the ROW's slug `accordion-16`, not the spec's `accordion-05`  
Shipped: https://concertina.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `accordion-16` for this app while the spec records `accordion-05`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

An Accordion & FAQ Showcase template with sticky navigation header, hero banner, interactive accordion & faq and feature highlights grid sections. Recreation of ColorLib `accordion-05` (`https://colorlib.com/wp/template/accordion-05/`).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**, **Roboto Slab**

## Design tokens (`apps/concertina/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#ffffff` | White page background — brand palette: #ffffff. |
| `--color-accordion-bg` | `#ffffff` | White accordion card background. |
| `--color-border-row` | `#e0e0e0` | Border between accordion rows — brand palette: #e0e0e0. |
| `--color-text-header` | `#333333` | Header title text — brand palette: #333333. |
| `--color-text-body` | `#6b6b6b` | Body text inside expanded panel — brand palette: #6b6b6b. |
| `--color-accent` | `#563d7c` | Accent / active indicator — brand palette: #563d7c (deep purple). |
| `--color-muted` | `#999999` | Muted text (footer). |
| `--font-sans` | `'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Open Sans + Roboto Slab font stack — brand palette. |
| `--font-heading` | `'Roboto Slab', 'Open Sans', system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Accordion` | Interactive Accordion & FAQ Section | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock Attribution | see fidelity note below |

## Section-by-section fidelity

### `Accordion`
- Interactive accordion items that expand and collapse smoothly to reveal detailed content.

### `Footer`
- Footer containing site links, copyright, and required attribution link to `https://www.componentdock.com/`.

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
- **Provenance ban.** No file under `apps/concertina/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/concertina/public/CNAME` = `concertina.free.componentdock.com`
  and the package `homepage` = `https://concertina.free.componentdock.com`.
