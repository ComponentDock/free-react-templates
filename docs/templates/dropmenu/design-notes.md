# Dropmenu — Design Notes

Reference: **Dropdown 18** — `https://colorlib.com/wp/template/dropdown-18/`  
Live preview: `https://preview.colorlib.com/theme/dropdown-18/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-18.jpg  
Shipped: https://dropmenu.free.componentdock.com

Recreation of ColorLib **Dropdown 18** — a profile dropdown snippet for membership sites and social networks, featuring a circular avatar, name/location, and a dropdown menu with icon-labeled items and badges.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/dropmenu/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-dropmenu-bg` | `#efefef` | dropmenu bg |
| `--color-dropmenu-text` | `#b3b3b3` | dropmenu text |
| `--color-dropmenu-heading` | `#000000` | dropmenu heading |
| `--color-dropmenu-trigger` | `#000000` | dropmenu trigger |
| `--color-dropmenu-menu-bg` | `#ffffff` | dropmenu menu bg |
| `--color-dropmenu-menu-text` | `#b2bac1` | dropmenu menu text |
| `--color-dropmenu-menu-hover` | `#000000` | dropmenu menu hover |
| `--color-dropmenu-border` | `rgba(0, 0, 0, 0.1)` | dropmenu border |
| `--color-dropmenu-badge` | `#fd7e14` | dropmenu badge |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ProfileDropdown` | Profile dropdown renders with trigger and toggle behavior | see fidelity note below |
| 2 | `Footer` | Accessibility and footer | see fidelity note below |

## Section-by-section fidelity

### `ProfileDropdown`
The dropdown component SHALL render a profile trigger that toggles a dropdown menu.

### `Footer`
The dropdown SHALL use proper ARIA attributes and the page SHALL include a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/dropmenu/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dropmenu/public/CNAME` = `dropmenu.free.componentdock.com`
  and the package `homepage` = `https://dropmenu.free.componentdock.com`.
