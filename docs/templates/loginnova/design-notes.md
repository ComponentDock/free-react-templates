# Loginnova — Design Notes

Reference: **Login Form V20** — `https://colorlib.com/wp/template/login-form-v20/`  
Live preview: `https://preview.colorlib.com/theme/login-form-v20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v20.jpg  
Shipped: https://loginnova.free.componentdock.com

A side-by-side login form template with gradient panel, account sign-in card, input validation and forgot-password link. Recreation of ColorLib **Login Form V20** as a React 19 + Vite + Tailwind 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**

## Design tokens (`apps/loginnova/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-gradient-start` | `#6a11cb` | Purple-to-blue gradient — from left to right. |
| `--color-gradient-end` | `#2575fc` | gradient end |
| `--color-heading` | `#fefefe` | Heading text — near-white. |
| `--color-input` | `#555555` | Input text — muted gray. |
| `--color-input-border` | `#e0e0e0` | Input border. |
| `--color-label-focus` | `#111111` | Label focused — near-black. |
| `--color-button` | `#111111` | Button background — near-black. |
| `--color-button-text` | `#ffffff` | Button text — white. |
| `--color-link` | `#cccccc` | Forgot password link — light gray. |
| `--color-error` | `#c80000` | Validation error — red. |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Font: Open Sans via Google Fonts. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | Renders "ACCOUNT LOGIN" heading | see fidelity note below |
| 2 | `Footer` | Renders "Forgot password?" link | see fidelity note below |

## Section-by-section fidelity

### `LoginForm`
The form SHALL display a white uppercase heading above the input fields.

### `Footer`
The form SHALL display a centered "Forgot password?" link below the button.

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
- **Provenance ban.** No file under `apps/loginnova/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginnova/public/CNAME` = `loginnova.free.componentdock.com`
  and the package `homepage` = `https://loginnova.free.componentdock.com`.
