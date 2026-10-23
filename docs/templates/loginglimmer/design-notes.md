# Loginglimmer — Design Notes

Reference: **Login Form V19** — `https://colorlib.com/wp/template/login-form-v19/`  
Live preview: `https://preview.colorlib.com/theme/login-form-v19/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v19.jpg  
Shipped: https://loginglimmer.free.componentdock.com

LoginGlimmer is a clean, minimalist login form template that recreates ColorLib Login Form V19 (preview: https://colorlib.com/wp/template/login-form-v19/; live preview unreachable — spec derived from screenshot).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600**

## Design tokens (`apps/loginglimmer/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-opensans` | `'Open Sans', sans-serif` | font opensans |
| `--color-brand` | `#4272d7` | brand |
| `--color-brand-hover` | `#333333` | brand hover |
| `--color-input-border` | `#e6e6e6` | input border |
| `--color-text-body` | `#666666` | text body |
| `--color-text-title` | `#555555` | text title |
| `--color-text-muted` | `#999999` | text muted |
| `--color-link` | `#4272d7` | link |
| `--color-page-bg` | `#e9faff` | page bg |
| `--color-error` | `#c80000` | error |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | Login form renders all fields and controls | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `LoginForm`
Users SHALL see a login form with email input, password input, sign-in button, forgot password link, and create account link.

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
- **Provenance ban.** No file under `apps/loginglimmer/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginglimmer/public/CNAME` = `loginglimmer.free.componentdock.com`
  and the package `homepage` = `https://loginglimmer.free.componentdock.com`.
