# Checksnap — Design Notes

Reference: **Checkbox 16** — `https://colorlib.com/wp/template/checkbox-16/`  
Live preview: `https://preview.colorlib.com/theme/checkbox-16/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-16.jpg  
Shipped: https://checksnap.free.componentdock.com

Checksnap is a single-page UI-component demo template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/checksnap/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0fdf4` | primary 50 |
| `--color-primary-100` | `#dcfce7` | primary 100 |
| `--color-primary-200` | `#bbf7d0` | primary 200 |
| `--color-primary-300` | `#86efac` | primary 300 |
| `--color-primary-400` | `#4ade80` | primary 400 |
| `--color-primary-500` | `#22c55e` | primary 500 |
| `--color-primary-600` | `#16a34a` | primary 600 |
| `--color-primary-700` | `#15803d` | primary 700 |
| `--color-primary-800` | `#166534` | primary 800 |
| `--color-primary-900` | `#14532d` | primary 900 |
| `--color-primary-950` | `#052e16` | primary 950 |
| `--color-bootstrap-green` | `#28a745` | bootstrap green |
| `--color-bootstrap-green-hover` | `#218838` | bootstrap green hover |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CheckboxShowcase` | Renders four checkbox items with correct states | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `CheckboxShowcase`
The template SHALL render four labeled checkboxes: "First checkbox" (checked by default), "Second checkbox" (unchecked), "Disabled" (unchecked and disabled), and "Disabled & checked" (checked and disabled).

### `Footer`
The template SHALL display a footer with the template name "Checksnap" and a link to Component Dock (https://www.componentdock.com/).

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
- **Provenance ban.** No file under `apps/checksnap/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/checksnap/public/CNAME` = `checksnap.free.componentdock.com`
  and the package `homepage` = `https://checksnap.free.componentdock.com`.
