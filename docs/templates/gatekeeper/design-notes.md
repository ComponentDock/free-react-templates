# Gatekeeper — Design Notes

Reference: **Login Form 18** — `https://colorlib.com/wp/template/login-form-18/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/login-form-18/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-18-2.jpg  
Shipped: https://gatekeeper.free.componentdock.com

A Login Form template with heading, icon circle, username input field, password input field, remember me checkbox and forgot password sections. Recreation of ColorLib's **Login Form V18** (slug: `login-form-18`).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/gatekeeper/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8d448b` | brand |
| `--color-brand-light` | `#a65d9f` | brand light |
| `--color-brand-dark` | `#733a71` | brand dark |
| `--color-bg-page` | `#f8f9fd` | bg page |
| `--color-input-bg` | `rgba(0, 0, 0, 0.05)` | input bg |
| `--color-input-focus-bg` | `rgba(0, 0, 0, 0.07)` | input focus bg |
| `--font-sans` | `'Lato', Arial, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginCard` | Page renders the login card centered on the viewport | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `LoginCard`
The login card SHALL be displayed centered horizontally and vertically on the page, with a white background, rounded corners (10px), and a subtle box-shadow.

### `Footer`
A footer or attribution link to "https://www.componentdock.com/" SHALL be present.

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
- **Provenance ban.** No file under `apps/gatekeeper/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gatekeeper/public/CNAME` = `gatekeeper.free.componentdock.com`
  and the package `homepage` = `https://gatekeeper.free.componentdock.com`.
