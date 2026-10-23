# Modalbox — Design Notes

Reference: **Modal 14** — `https://colorlib.com/wp/template/modal-14/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/modal-14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-14.jpg  
Shipped: https://modalbox.free.componentdock.com

A coupon form pop-up modal with warm cream background, promotional image, dashed coupon code box, and full-width CTA button. Recreation of the ColorLib "Modal V14" template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**

## Design tokens (`apps/modalbox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-hover` | `#0069d9` | brand hover |
| `--color-cream` | `#fff4e4` | cream |
| `--color-cream-dark` | `#e8d5b8` | cream dark |
| `--font-roboto` | `'Roboto', sans-serif` | font roboto |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LaunchSection` | — | no dedicated spec block |
| 2 | `Footer` | Footer | see fidelity note below |
| 3 | `CouponModal` | Modal opens on button click | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `LaunchSection`
*anchors only* — Modalbox · A clean coupon modal for your next project. · Launch modal

### `Footer`
The template SHALL include a footer linking to Component Dock.

### `CouponModal`
The modal SHALL open when the user clicks the launch button.

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
- **Provenance ban.** No file under `apps/modalbox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/modalbox/public/CNAME` = `modalbox.free.componentdock.com`
  and the package `homepage` = `https://modalbox.free.componentdock.com`.
