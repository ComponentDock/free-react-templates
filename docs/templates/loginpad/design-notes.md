# Loginpad — Design Notes

Reference: **Login Form V14** — `https://colorlib.com/wp/template/login-form-v14/`  
Live preview: `https://preview.colorlib.com/theme/login-form-v14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v14.jpg  
Shipped: https://loginpad.free.componentdock.com

A centered card login form template with account login fields and a pill-shaped sign-in button. Recreation of ColorLib **Login Form V14** as a React 19 + Vite + Tailwind 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@400;500;600;700**

## Design tokens (`apps/loginpad/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#ebebeb` | Page background — light gray (#ebebeb). |
| `--color-card` | `#ffffff` | Card background — white. |
| `--color-ink` | `#555555` | Text dark — labels, title (#555555). |
| `--color-muted` | `#999999` | Placeholder / muted text (#999999). |
| `--color-border` | `#e6e6e6` | Input border — subtle gray (#e6e6e6). |
| `--color-accent` | `#57b846` | Focus / accent green (#57b846). |
| `--color-button` | `#333333` | Button background — dark (#333333). |
| `--color-button-text` | `#ffffff` | Button text — white. |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | Font: Raleway via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | Renders account login form | see fidelity note below |
| 2 | `Footer` | Component Dock footer | see fidelity note below |

## Section-by-section fidelity

### `LoginForm`
The login form SHALL display an "Account Login" heading, username input, password input with visibility toggle, remember-me checkbox, forgot password link, and login button.

### `Footer`
The footer SHALL link to https://www.componentdock.com/ with the text "More templates at Component Dock" and open in a new tab.

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
- **Provenance ban.** No file under `apps/loginpad/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginpad/public/CNAME` = `loginpad.free.componentdock.com`
  and the package `homepage` = `https://loginpad.free.componentdock.com`.
