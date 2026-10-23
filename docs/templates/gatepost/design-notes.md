# Gatepost — Design Notes

Reference: **Login Form V16** — `https://colorlib.com/wp/template/login-form-v16/`  
Live preview: `https://preview.colorlib.com/theme/login-form-v16/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v16.jpg  
Shipped: https://gatepost.free.componentdock.com

A Login Form template with full-viewport background, centered login, username input with icon, password input with icon and sign in button sections. Recreation of ColorLib "Login Form V16" (slug: `login-form-v16`).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/gatepost/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#e65c4a` | Brand color — warm red-orange (#e65c4a). |
| `--color-ink` | `#ffffff` | Text on dark — white. |
| `--color-caption` | `rgba(255, 255, 255, 0.7)` | Subtitle text — white/70. |
| `--color-glass` | `rgba(255, 255, 255, 0.1)` | Input background — white/10. |
| `--color-glass-border` | `rgba(255, 255, 255, 0.4)` | Input border on focus — white/40. |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font: Poppins via Google Fonts. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | Centered login card | see fidelity note below |
| 2 | `Footer` | Component Dock footer | see fidelity note below |

## Section-by-section fidelity

### `LoginForm`
The login form SHALL be displayed in a centered, semi-transparent card with backdrop blur.

### `Footer`
The page SHALL include a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/gatepost/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gatepost/public/CNAME` = `gatepost.free.componentdock.com`
  and the package `homepage` = `https://gatepost.free.componentdock.com`.
