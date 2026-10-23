# Optbundle — Design Notes

Reference: **Multiselect 08** — `https://colorlib.com/wp/template/multiselect-08/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/multiselect-08/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-08.jpg  
Shipped: https://optbundle.free.componentdock.com

A clean multiselect dropdown demonstration page with categorized groupings. Recreation of ColorLib **Multiselect 08**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato:wght@300;400;700**

## Design tokens (`apps/optbundle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0f7e6` | primary 50 |
| `--color-primary-100` | `#ddefc2` | primary 100 |
| `--color-primary-200` | `#c5e49d` | primary 200 |
| `--color-primary-300` | `#add978` | primary 300 |
| `--color-primary-400` | `#9ad05c` | primary 400 |
| `--color-primary-500` | `#a7d129` | primary 500 |
| `--color-primary-600` | `#8fb824` | primary 600 |
| `--color-primary-700` | `#739a1d` | primary 700 |
| `--color-primary-800` | `#577c16` | primary 800 |
| `--color-primary-900` | `#3c5e0f` | primary 900 |
| `--color-primary-950` | `#213f08` | primary 950 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Multiselect` | Multiselect dropdown renders with categories | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Multiselect`
The multiselect SHALL display a dropdown with placeholder text and support categorized options.

### `Footer`
The page footer SHALL link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/optbundle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/optbundle/public/CNAME` = `optbundle.free.componentdock.com`
  and the package `homepage` = `https://optbundle.free.componentdock.com`.
