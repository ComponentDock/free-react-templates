# Dropvane — Design Notes

Reference: **Dropdown 10** — `https://colorlib.com/wp/template/dropdown-10/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/dropdown-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-10.jpg  
Shipped: https://dropvane.free.componentdock.com

Recreate the ColorLib Dropdown 10 template as "DropVane" — a responsive dropdown snippet that reveals a consultation form when the user clicks a "Request A Quote" button. The design uses a clean light background, Roboto font, olive-green accent (#94aa2a), and a white dropdown panel with shadow and arrow indicator.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/dropvane/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#94aa2a` | brand |
| `--color-brand-hover` | `#708120` | brand hover |
| `--color-bg-page` | `#fafafa` | bg page |
| `--color-bg-menu` | `#ffffff` | bg menu |
| `--color-text-body` | `#6c757d` | text body |
| `--color-text-heading` | `#000000` | text heading |
| `--color-text-link` | `#94aa2a` | text link |
| `--color-text-link-hover` | `#708120` | text link hover |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `DropdownShowcase` | Dropdown trigger button is visible | see fidelity note below |
| 2 | `Footer` | Footer renders Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `DropdownShowcase`
The page SHALL display a "Request A Quote" button styled with the brand accent color (#94aa2a).

### `Footer`
The page SHALL display a footer with a link to Component Dock.

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
- **Provenance ban.** No file under `apps/dropvane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dropvane/public/CNAME` = `dropvane.free.componentdock.com`
  and the package `homepage` = `https://dropvane.free.componentdock.com`.
