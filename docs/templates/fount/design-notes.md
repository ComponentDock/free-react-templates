# Fount — Design Notes

Reference: **Dropdown 14** — `https://colorlib.com/wp/template/dropdown-14/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/dropdown-14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-14.jpg  
Shipped: https://fount.free.componentdock.com

Fount is a single-page UI-component demo template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400**

## Design tokens (`apps/fount/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-fount-text` | `#888888` | fount text |
| `--color-fount-title` | `#212529` | fount title |
| `--color-fount-heading` | `#212529` | fount heading |
| `--color-fount-dot` | `#efefef` | fount dot |
| `--color-fount-dot-hover` | `#007bff` | fount dot hover |
| `--color-fount-item-title` | `#000000` | fount item title |
| `--color-fount-item-subtitle` | `#999999` | fount item subtitle |
| `--color-fount-border` | `#efefef` | fount border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Dropdown` | Dropdown menu behavior | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Dropdown`
The system SHALL open the source-picker card on trigger click, close it on outside click, Escape, or trigger re-click, and keep only one menu open at a time.

### `Footer`
The system SHALL render the mandatory monorepo footer with the Component Dock credit link (the source demo has no footer — this is a monorepo addition per conventions.md).

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
- **Provenance ban.** No file under `apps/fount/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fount/public/CNAME` = `fount.free.componentdock.com`
  and the package `homepage` = `https://fount.free.componentdock.com`.
