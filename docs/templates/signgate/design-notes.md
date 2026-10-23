# Signgate — Design Notes

Reference: **Modal 15** — `https://colorlib.com/wp/template/modal-15/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/modal-15/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-15.jpg  
Shipped: https://signgate.free.componentdock.com

A sign-up form pop-up modal with a promotional image on the left, three-field form (email, name, password) on the right. It also includes and a full-width "Sign up" CTA button. Recreation of the ColorLib "Modal 15" template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400**

## Design tokens (`apps/signgate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eff6ff` | primary 50 |
| `--color-primary-100` | `#dbeafe` | primary 100 |
| `--color-primary-200` | `#bfdbfe` | primary 200 |
| `--color-primary-300` | `#93c5fd` | primary 300 |
| `--color-primary-400` | `#60a5fa` | primary 400 |
| `--color-primary-500` | `#007bff` | primary 500 |
| `--color-primary-600` | `#0069d9` | primary 600 |
| `--color-primary-700` | `#0056b3` | primary 700 |
| `--color-primary-800` | `#004085` | primary 800 |
| `--color-primary-900` | `#00275c` | primary 900 |
| `--color-primary-950` | `#001a3d` | primary 950 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LaunchSection` | — | no dedicated spec block |
| 2 | `SignUpModal` | Modal opens on button click | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `LaunchSection`
*anchors only* — Signgate · Launch modal

### `SignUpModal`
The modal SHALL open when the user clicks the launch button.

### `Footer`
The template SHALL include a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/signgate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signgate/public/CNAME` = `signgate.free.componentdock.com`
  and the package `homepage` = `https://signgate.free.componentdock.com`.
