# Modalshift — Design Notes

Reference: **Modal 17** — `https://colorlib.com/wp/template/modal-17/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/modal-17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-17.jpg  
Shipped: https://modalshift.free.componentdock.com

Recreation of the ColorLib "Modal V17" template — a login form pop-up modal with an orange top border accent, light-gray background, clean Roboto typography, and shadow-styled inputs. The page shows a centered "Modal #7" heading and a "Launch modal" button; clicking it opens a centered modal dialog with a login form.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/modalshift/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-hover` | `#0069d9` | brand hover |
| `--color-accent` | `#ed5107` | accent |
| `--color-modal-bg` | `#efefef` | modal bg |
| `--color-note` | `#999` | note |
| `--color-note-link` | `#555` | note link |
| `--color-paragraph` | `#777` | paragraph |
| `--font-roboto` | `'Roboto', sans-serif` | font roboto |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LaunchSection` | — | no dedicated spec block |
| 2 | `Footer` | Modal displays login form | see fidelity note below |
| 3 | `LoginModal` | Modal opens on button click | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `LaunchSection`
*anchors only* — ModalShift · A login form popup with a clean design. Click the button below to see it in action. · Launch modal

### `Footer`
The modal SHALL contain a login form with all required fields.

### `LoginModal`
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
- **Provenance ban.** No file under `apps/modalshift/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/modalshift/public/CNAME` = `modalshift.free.componentdock.com`
  and the package `homepage` = `https://modalshift.free.componentdock.com`.
