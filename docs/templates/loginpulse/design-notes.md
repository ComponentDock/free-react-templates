# Loginpulse — Design Notes

Reference: **Login Form V5** — `https://colorlib.com/wp/template/login-form-v5/`  
Live preview: `https://colorlib.com/etc/lf/Login_v5/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v5.jpg  
Shipped: https://loginpulse.free.componentdock.com

A Login Form template with hover effects, focus effects, social login buttons, username field, password field and sign in button sections. Recreation of ColorLib's **Login Form V5** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page login page.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600**, **Poppins**

## Design tokens (`apps/loginpulse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-montserrat` | `'Montserrat', sans-serif` | font montserrat |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-brand-cyan` | `#00dbde` | brand cyan |
| `--color-brand-magenta` | `#fc00ff` | brand magenta |
| `--color-card-bg` | `#ffffff` | card bg |
| `--color-text-heading` | `#555555` | text heading |
| `--color-text-label` | `#555555` | text label |
| `--color-text-muted` | `#999999` | text muted |
| `--color-text-input` | `#333333` | text input |
| `--color-text-placeholder` | `#555555` | text placeholder |
| `--color-input-bg` | `#f7f7f7` | input bg |
| `--color-input-border` | `#e6e6e6` | input border |
| `--color-button-bg` | `#333333` | button bg |
| `--color-button-text` | `#ffffff` | button text |
| `--color-facebook-blue` | `#3b5998` | facebook blue |
| `--color-focus-border` | `#fc00ff` | focus border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `GeometricPattern` | — | no dedicated spec block |
| 2 | `LoginForm` | Social login buttons | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `GeometricPattern`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `LoginForm`
The page SHALL display Facebook and Google social login buttons side by side with appropriate styling and hover effects.

### `Footer`
The page SHALL display a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/loginpulse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginpulse/public/CNAME` = `loginpulse.free.componentdock.com`
  and the package `homepage` = `https://loginpulse.free.componentdock.com`.
