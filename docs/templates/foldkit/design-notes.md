# Foldkit — Design Notes

Reference: **Accordion 15** — `https://colorlib.com/wp/template/accordion-15/`  
Live preview: `https://preview.colorlib.com/theme/accordion-15/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-15.jpg  
Shipped: https://foldkit.free.componentdock.com

FoldKit is a single-page Bootstrap accordion widget template with four expandable profile sections, nested navigation links and a clean Roboto type scale on a light grey page.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/foldkit/src/index.css` `@theme`)

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

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Accordion` | Four Accordion Rows | see fidelity note below |
| 2 | `Footer` | Component Dock Footer | see fidelity note below |

## Section-by-section fidelity

### `Accordion`
The widget SHALL render exactly four accordion rows — Profile, Messages, Settings, Logout — each exposed as a button with `aria-expanded` and `aria-controls` pointing at its panel.

### `Footer`
The footer SHALL link `https://www.componentdock.com/` branded as "More templates at Component Dock", plus the current year copyright line.

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
- **Provenance ban.** No file under `apps/foldkit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/foldkit/public/CNAME` = `foldkit.free.componentdock.com`
  and the package `homepage` = `https://foldkit.free.componentdock.com`.
