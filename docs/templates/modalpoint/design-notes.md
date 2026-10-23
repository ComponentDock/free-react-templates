# Modalpoint — Design Notes

Reference: **Modal 16** — `https://colorlib.com/wp/template/modal-16/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/modal-16/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-16.jpg  
Shipped: https://modalpoint.free.componentdock.com

Recreation of the ColorLib "Modal V16" template — a split-screen registration form pop-up modal with a left-side background image and a right-side form panel. The page shows a centered "Launch modal" button; clicking it opens a full-screen modal with a side-by-side image + form layout.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**

## Design tokens (`apps/modalpoint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-hover` | `#0069d9` | brand hover |
| `--color-form-bg` | `#efefef` | form bg |
| `--font-roboto` | `'Roboto', sans-serif` | font roboto |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LaunchSection` | Page loads with launch button visible | see fidelity note below |
| 2 | `Footer` | — | no dedicated spec block |
| 3 | `RegistrationModal` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `LaunchSection`
Given the user navigates to the template page Then a heading "Registration Modal" is visible And a "Launch Modal" button is displayed in the center of the viewport

### `Footer`
*anchors only* — ModalPoint · A registration modal for your next project. · More templates at Component Dock

### `RegistrationModal`
*anchors only* — dialog · Registration modal · Close · country · Month · Year

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
- **Provenance ban.** No file under `apps/modalpoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/modalpoint/public/CNAME` = `modalpoint.free.componentdock.com`
  and the package `homepage` = `https://modalpoint.free.componentdock.com`.
