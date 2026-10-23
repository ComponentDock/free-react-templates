# Dropkit — Design Notes

Reference: **Dropdown 01** — `https://colorlib.com/wp/template/dropdown-01/`  
Live preview: `https://preview.colorlib.com/theme/dropdown-01/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-01.jpg  
Shipped: https://dropkit.free.componentdock.com

A single-page React component showcase displaying four Bootstrap-style dropdown menu variations (dropdown, dropup, dropright, dropleft), each with a regular and split button variant. Serves as a reference implementation for interactive dropdown menus built with React and Tailwind CSS.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/dropkit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0075f6` | brand |
| `--color-brand-hover` | `#005dc3` | brand hover |
| `--color-bg-page` | `#fafafa` | bg page |
| `--color-bg-menu` | `#ffffff` | bg menu |
| `--color-text-body` | `#6c757d` | text body |
| `--color-text-heading` | `#000000` | text heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `DropdownShowcase` | Regular dropdown button behavior | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `DropdownShowcase`
Each variation column SHALL contain a regular dropdown button that toggles a dropdown menu on click.

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
- **Provenance ban.** No file under `apps/dropkit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dropkit/public/CNAME` = `dropkit.free.componentdock.com`
  and the package `homepage` = `https://dropkit.free.componentdock.com`.
