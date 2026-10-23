# Logineclipse — Design Notes

Reference: **Login Form V9** — `https://colorlib.com/wp/template/login-form-v9/`  
Live preview: `https://colorlib.com/etc/lf/Login_v9/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v9.jpg  
Shipped: https://logineclipse.free.componentdock.com

A Login Form template with full-viewport gradient, login, sign in title, username/email input field and password input field sections. Recreation of ColorLib **Login Form V9** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Source Sans 3**, **Source Sans 3:wght@400;600;700**

## Design tokens (`apps/logineclipse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-source` | `'Source Sans 3', sans-serif` | font source |
| `--color-brand-purple` | `#bd59d4` | brand purple |
| `--color-brand-purple-dark` | `#9b24bd` | brand purple dark |
| `--color-text-deep` | `#4b2354` | text deep |
| `--color-text-muted` | `#999999` | text muted |
| `--color-fb-blue` | `#3b5998` | fb blue |
| `--color-validation-error` | `#fa4251` | validation error |
| `--color-validation-success` | `#57b846` | validation success |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginCard` | Login card renders centered | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `LoginCard`
A white card SHALL be centered on the page with rounded corners and a subtle box shadow.

### `Footer`
The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/logineclipse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/logineclipse/public/CNAME` = `logineclipse.free.componentdock.com`
  and the package `homepage` = `https://logineclipse.free.componentdock.com`.
