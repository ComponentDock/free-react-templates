# Droplist — Design Notes

Reference: **Dropdown 20** — `https://colorlib.com/wp/template/dropdown-20/`  
Live preview: `https://preview.colorlib.com/theme/dropdown-20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-20.jpg  
Shipped: https://droplist.free.componentdock.com

A single-page React component showcase displaying a multi-section/sub-category dropdown navigation menu. The original ColorLib snippet offers multiple sections and elements within a single dropdown menu, organized by category and sub-category.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/droplist/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0071bc` | brand |
| `--color-brand-dark` | `#005a96` | brand dark |
| `--color-surface` | `#ffffff` | surface |
| `--color-surface-alt` | `#f8f9fa` | surface alt |
| `--color-border` | `#dee2e6` | border |
| `--color-text` | `#333333` | text |
| `--color-text-muted` | `#6c757d` | text muted |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Dropdown` | Multi-section dropdown menu | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Dropdown`
The dropdown menu SHALL contain multiple category sections, each with sub-category items organized in a structured layout.

### `Footer`
The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/droplist/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/droplist/public/CNAME` = `droplist.free.componentdock.com`
  and the package `homepage` = `https://droplist.free.componentdock.com`.
