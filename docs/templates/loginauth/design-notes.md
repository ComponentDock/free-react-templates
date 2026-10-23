# Loginauth — Design Notes

Reference: **Login Form V15** — `https://colorlib.com/wp/template/login-form-v15/`  
Live preview: `https://colorlib.com/etc/lf/Login_v15/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v15.jpg  
Shipped: https://loginauth.free.componentdock.com

A minimal login form template with a centered sign-in card, username and password fields. Recreation of ColorLib **Login Form V15** as a React 19 + Vite + Tailwind 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/loginauth/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#57b846` | Brand green — #57b846. |
| `--color-accent-hover` | `#333333` | Button hover — #333333. |
| `--color-page-bg` | `#ebeeef` | Page background — #ebeeef. |
| `--color-card` | `#ffffff` | Card background — white. |
| `--color-title-overlay` | `rgba(54, 84, 99, 0.7)` | Title overlay — rgba(54,84,99,0.7). |
| `--color-title` | `#ffffff` | Text colors. |
| `--color-label` | `#808080` | label |
| `--color-body` | `#666666` | body |
| `--color-input-text` | `#555555` | input text |
| `--color-placeholder` | `#999999` | placeholder |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font: Poppins via Google Fonts. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `LoginForm`
*anchors only* — Username · Password · Remember me · Forgot Password? · Login

### `Footer`
*anchors only* — More templates at Component Dock

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
- **Provenance ban.** No file under `apps/loginauth/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginauth/public/CNAME` = `loginauth.free.componentdock.com`
  and the package `homepage` = `https://loginauth.free.componentdock.com`.
