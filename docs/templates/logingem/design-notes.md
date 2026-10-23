# Logingem — Design Notes

Reference: **Login Form V4** — `https://colorlib.com/wp/template/login-form-v4/`  
Live preview: `https://colorlib.com/etc/lf/Login_v4/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v4.jpg  
Shipped: https://logingem.free.componentdock.com

LoginGem is a single-page LOGIN FORM in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Login Form V4" free template (source: https://colorlib.com/wp/template/login-form-v4/, preview: https://colorlib.com/etc/lf/Login_v4/index.html), built under a DIFFERENT name (**LoginGem**), with the monorepo stac…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;700**

## Design tokens (`apps/logingem/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-heading` | `#333333` | heading |
| `--color-text-body` | `#666666` | text body |
| `--color-text-input` | `#333333` | text input |
| `--color-text-label` | `#333333` | text label |
| `--color-input-border` | `#d9d9d9` | input border |
| `--color-input-placeholder` | `#adadad` | input placeholder |
| `--color-icon` | `#adadad` | icon |
| `--color-icon-focus` | `#a64bf4` | icon focus |
| `--color-focus-border` | `#7f7f7f` | focus border |
| `--color-button-gradient-start` | `#00dbde` | button gradient start |
| `--color-button-gradient-end` | `#fc00ff` | button gradient end |
| `--color-facebook` | `#3b5998` | facebook |
| `--color-twitter` | `#1da1f2` | twitter |
| `--color-google` | `#ea4335` | google |
| `--color-social-hover` | `#333333` | social hover |
| `--color-error` | `#c80000` | error |
| `--color-page-bg` | `#1a1a2e` | page bg |
| `--color-signup-text` | `#333333` | signup text |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | White login card is centered on screen | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `LoginForm`
Users SHALL see a white card centered vertically and horizontally on the viewport with rounded corners.

### `Footer`
Users SHALL see a footer with a link to Component Dock.

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
- **Provenance ban.** No file under `apps/logingem/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/logingem/public/CNAME` = `logingem.free.componentdock.com`
  and the package `homepage` = `https://logingem.free.componentdock.com`.
