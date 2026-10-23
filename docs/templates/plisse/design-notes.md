# Plisse — Design Notes

Reference: **Accordion 12** — `https://colorlib.com/wp/template/accordion-12/`  
Live preview: `https://preview.colorlib.com/theme/bac/accordion-12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-12.jpg  
Shipped: https://plisse.free.componentdock.com

The source is a self-contained Bootstrap 4 component snippet, not a full page: a centred page heading above a three-row vertical accordion in which exactly one row is open at a time.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/plisse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#ffffff` | Page background — brand palette: #ffffff. |
| `--color-item-bg` | `#ffffff` | Accordion row background — brand palette: #ffffff. |
| `--color-border-row` | `#efefef` | Hairline border on closed rows — brand palette: #efefef. |
| `--color-heading` | `#212529` | Page heading and body text — brand palette: #212529. |
| `--color-body-text` | `#888888` | Copy inside an open panel — brand palette: #888888. |
| `--color-accent` | `#72c02c` | Active row fill — brand palette: #72c02c (vibrant green). |
| `--color-muted` | `#999999` | Closed row label — brand palette: #999999. |
| `--font-sans` | `'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Roboto font stack — brand palette. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Accordion` | Accordion rows | see fidelity note below |
| 2 | `Footer` | Component Dock footer | see fidelity note below |

## Section-by-section fidelity

### `Accordion`
The accordion SHALL render three rows, in source order, labelled "How to download and register?", "How to create your paypal account?" and "How to link your paypal and bank account?", each a `button` with `aria-expanded`, `aria-controls` pointing at its panel id and a panel whose `aria-labelledby` points back at the button. Each row SHALL carry a 4px radius and an absolute chevron glyph 15px from its left edge.

### `Footer`
The page SHALL end with a footer carrying a copyright line and a link labelled "More templates at Component Dock" pointing at `https://www.componentdock.com/` (no external attribution links).

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
- **Provenance ban.** No file under `apps/plisse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/plisse/public/CNAME` = `plisse.free.componentdock.com`
  and the package `homepage` = `https://plisse.free.componentdock.com`.
