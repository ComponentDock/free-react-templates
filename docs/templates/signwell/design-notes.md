# Signwell — Design Notes

Reference: **Login Form 10** — `https://colorlib.com/wp/template/login-form-10/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/login-form-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-10-2.jpg  
Shipped: https://signwell.free.componentdock.com

Recreation of ColorLib "Login Form 10" (https://colorlib.com/wp/template/login-form-10/). A clean, modern login page with social login buttons on the left and a traditional username/password form on the right, separated by a divider. Reference re-read 2026-10-23: `https://preview.colorlib.com/theme/bootstrap/login-form-10/` answers **HTTP 200** (5,028 B) and its sheet `css/style.css?v=32eff87a` (16,446 B, sha256 `457117e0d2a6…`) is the token authority — the prep-time 404 / "design based on screenshot" note is superseded.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/signwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e6faf8` | primary 50 |
| `--color-primary-100` | `#b3f0eb` | primary 100 |
| `--color-primary-200` | `#80e6de` | primary 200 |
| `--color-primary-300` | `#4ecdc4` | primary 300 |
| `--color-primary-400` | `#3dbcb3` | primary 400 |
| `--color-primary-500` | `#2cab9f` | primary 500 |
| `--color-primary-600` | `#239a8e` | primary 600 |
| `--color-primary-700` | `#1a8a7e` | primary 700 |
| `--color-primary-800` | `#12796e` | primary 800 |
| `--color-primary-900` | `#0a695e` | primary 900 |
| `--color-primary-950` | `#03594e` | primary 950 |
| `--color-facebook` | `#3b5998` | facebook |
| `--color-twitter` | `#1da1f2` | twitter |
| `--color-google` | `#dd4b39` | google |
| `--color-surface` | `#f5f5f5` | surface |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `SocialLogin` | Social login buttons | see fidelity note below |
| 3 | `Divider` | Divider | see fidelity note below |
| 4 | `LoginForm` | Login form fields | see fidelity note below |
| 5 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — SignWell · Home

### `SocialLogin`
The page SHALL display three social login buttons (Facebook, Twitter, Google) with appropriate brand colors.

### `Divider`
The page SHALL display a divider between the social and form sections.

### `LoginForm`
The login form SHALL include username and password inputs, a remember-me checkbox, a forgot-password link, and a log-in button.

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
- **Provenance ban.** No file under `apps/signwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signwell/public/CNAME` = `signwell.free.componentdock.com`
  and the package `homepage` = `https://signwell.free.componentdock.com`.
