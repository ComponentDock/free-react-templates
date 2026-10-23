# Loginveil — Design Notes

Reference: **Login Form 16** — `https://colorlib.com/wp/template/login-form-16/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/login-form-16/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-16-2.jpg  
Shipped: https://loginveil.free.componentdock.com

A Login Form template with split-screen login card, left half, right half and form submission prevents sections. Recreation of ColorLib "Login Form 16" (slug: `login-form-16`).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/loginveil/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#b96b9f` | Brand palette: #b96b9f purple-mauve. |
| `--color-primary-hover` | `#a85a8e` | primary hover |
| `--color-page` | `#f8f9fd` | Page background: #f8f9fd light blue-gray. |
| `--color-card` | `#ffffff` | Card background: white. |
| `--color-btn` | `#17223b` | Submit button: #17223b dark navy. |
| `--color-btn-hover` | `#17223b` | btn hover |
| `--color-ink` | `#000000` | Text: black. |
| `--color-border` | `rgba(0, 0, 0, 0.1)` | Input border: subtle. |
| `--color-social-bg` | `#ffffff` | Social icon text: brand color on white. |
| `--color-social-text` | `#b96b9f` | social text |
| `--color-shadow` | `rgba(0, 0, 0, 0.24)` | Card shadow. |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | Font: Lato via Google Fonts. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | Split-screen login card layout | see fidelity note below |
| 2 | `RightPanel` | Right half contains submit and social options | see fidelity note below |
| 3 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `LoginForm`
The template SHALL display a centered card with two halves side-by-side on desktop and stacked on mobile.

### `RightPanel`
The right half SHALL contain a submit button, a "Remember Me" checkbox (checked by default), a "Forgot Password" link, a divider, and social login icons.

### `Footer`
Every template footer MUST link to `https://www.componentdock.com/` branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/loginveil/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginveil/public/CNAME` = `loginveil.free.componentdock.com`
  and the package `homepage` = `https://loginveil.free.componentdock.com`.
