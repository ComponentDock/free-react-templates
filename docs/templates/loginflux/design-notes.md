# Loginflux — Design Notes

Reference: **Login Form V13** — `https://colorlib.com/wp/template/login-form-v13/`  
Live preview: `https://preview.colorlib.com/theme/login-form-v13/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v13.jpg  
Shipped: https://loginflux.free.componentdock.com

A Sign-Up Form template with full-page split-screen, left, sign-up form with five, email and username and terms agreement checkbox sections. Recreation of ColorLib "Login Form 13" (slug: `login-form-v13`).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/loginflux/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-start` | `#9b59b6` | Brand gradient — purple #9B59B6 to pink #E91E8C. |
| `--color-brand-end` | `#e91e8c` | brand end |
| `--color-heading` | `#1a1a1a` | Text colors. |
| `--color-body` | `#333333` | body |
| `--color-label` | `#888888` | label |
| `--color-link` | `#333333` | link |
| `--color-input-border` | `#e0e0e0` | Form elements. |
| `--color-input-focus` | `#9b59b6` | input focus |
| `--color-input-text` | `#333333` | input text |
| `--color-checkmark` | `#2ecc71` | checkmark |
| `--color-btn-text` | `#ffffff` | Button. |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Font: Inter via Google Fonts. |
| `--font-heading` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Sign-up form with five fields | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The right panel SHALL contain a sign-up form with five labeled input fields.

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
- **Provenance ban.** No file under `apps/loginflux/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginflux/public/CNAME` = `loginflux.free.componentdock.com`
  and the package `homepage` = `https://loginflux.free.componentdock.com`.
