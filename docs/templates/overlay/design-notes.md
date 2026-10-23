# Overlay — Design Notes

Reference: **Modal 01** — `https://colorlib.com/wp/template/modal-01/`  
Live preview: `https://preview.colorlib.com/theme/modal-01/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-01.jpg  
Shipped: https://overlay.free.componentdock.com

Overlay is a sign-in popup template recreating ColorLib Modal 01. It provides a centered modal dialog with a login form (username, password, remember me, forgot password) triggered by a landing page button. The design uses Poppins font, Bootstrap-inspired blue primary color, and clean white card styling.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/overlay/src/index.css` `@theme`)

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
| 4 | `SignInModal` | Sign-in modal with form | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Overlay · Home

### `Landing`
The template SHALL display a centered landing section with the site name "Overlay" as a heading, a subtitle, and a "Sign In" button that opens the modal dialog.

### `Footer`
The template footer SHALL display the site name, a tagline, and a link to https://www.componentdock.com/ branded as "Component Dock".

### `SignInModal`
The modal SHALL contain a person icon, "Sign In" heading, username input, password input, "Login" submit button, "Remember Me" checkbox, "Forgot Password" link, and a footer with "Not a member? Create an account".

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
- **Provenance ban.** No file under `apps/overlay/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/overlay/public/CNAME` = `overlay.free.componentdock.com`
  and the package `homepage` = `https://overlay.free.componentdock.com`.
