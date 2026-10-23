# Splitform — Design Notes

Reference: **Modal 02** — `https://colorlib.com/wp/template/modal-02/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/modal-02/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-02.jpg  
Shipped: https://splitform.free.componentdock.com

Splitform is a dual-panel sign-in/sign-up modal template recreating ColorLib Modal 02. It provides a centered modal dialog split into two halves: a sign-in form on the left and a sign-up form on the right, separated by a vertical divider.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/splitform/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e7f1ff` | primary 50 |
| `--color-primary-100` | `#bcd9ff` | primary 100 |
| `--color-primary-200` | `#8dbdff` | primary 200 |
| `--color-primary-300` | `#5a9dff` | primary 300 |
| `--color-primary-400` | `#3385ff` | primary 400 |
| `--color-primary-500` | `#007bff` | primary 500 |
| `--color-primary-600` | `#0069e0` | primary 600 |
| `--color-primary-700` | `#0053b8` | primary 700 |
| `--color-primary-800` | `#003d8f` | primary 800 |
| `--color-primary-900` | `#002866` | primary 900 |
| `--color-primary-950` | `#001640` | primary 950 |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Landing` | Landing page with modal trigger | see fidelity note below |
| 3 | `Footer` | Footer with Component Dock link | see fidelity note below |
| 4 | `SplitModal` | Split-panel modal with sign-in and sign-up forms | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Splitform · Home

### `Landing`
The template SHALL display a centered landing section with the site name "Splitform" as a heading, a subtitle, and a "Launch Modal" button that opens the modal dialog.

### `Footer`
The template footer SHALL display the site name, a tagline, and a link to https://www.componentdock.com/ branded as "Component Dock".

### `SplitModal`
The modal SHALL contain two panels separated by a vertical divider: a sign-in form (left) and a sign-up form (right).

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
- **Provenance ban.** No file under `apps/splitform/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/splitform/public/CNAME` = `splitform.free.componentdock.com`
  and the package `homepage` = `https://splitform.free.componentdock.com`.
