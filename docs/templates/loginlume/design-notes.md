# Loginlume — Design Notes

Reference: **Login Form V18** — `https://colorlib.com/wp/template/login-form-v18/`  
Live preview: `https://colorlib.com/etc/lf/Login_v18/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v18.jpg  
Shipped: https://loginlume.free.componentdock.com

LoginLume is a login form template that recreates ColorLib Login Form V18 (preview: https://colorlib.com/etc/lf/Login_v18/index.html). It provides a centered card layout with a login form (email, password, remember me, social buttons) on the left and a decorative image panel on the right, fully responsive down to mobile.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;600;700**, **Poppins**

## Design tokens (`apps/loginlume/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--font-montserrat` | `'Montserrat', sans-serif` | font montserrat |
| `--color-brand` | `#6675df` | brand |
| `--color-brand-hover` | `#333333` | brand hover |
| `--color-input-border` | `#e6e6e6` | input border |
| `--color-input-placeholder` | `#999999` | input placeholder |
| `--color-text-body` | `#666666` | text body |
| `--color-text-title` | `#333333` | text title |
| `--color-text-label` | `#555555` | text label |
| `--color-page-bg` | `#f2f2f2` | page bg |
| `--color-form-bg` | `#f7f7f7` | form bg |
| `--color-error` | `#c80000` | error |
| `--color-facebook` | `#3b5998` | facebook |
| `--color-twitter` | `#1da1f2` | twitter |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ImagePanel` | — | no dedicated spec block |
| 2 | `LoginForm` | Login form renders all fields and controls | see fidelity note below |
| 3 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ImagePanel`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `LoginForm`
Users SHALL see a login form with email input, password input, remember me checkbox, forgot password link, login button, social signup buttons, and a decorative image panel.

### `Footer`
The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/loginlume/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginlume/public/CNAME` = `loginlume.free.componentdock.com`
  and the package `homepage` = `https://loginlume.free.componentdock.com`.
