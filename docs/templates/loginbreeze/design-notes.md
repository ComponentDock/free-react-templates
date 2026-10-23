# Loginbreeze — Design Notes

Reference: **Login Form V3** — `https://colorlib.com/wp/template/login-form-v3/`  
Live preview: `https://preview.colorlib.com/theme/login-form-v3/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v3.jpg  
Shipped: https://loginbreeze.free.componentdock.com

Recreation of ColorLib "Login Form V3" (`login-form-v3`). Preview: https://preview.colorlib.com/theme/login-form-v3/ (unreachable — design tokens extracted from screenshot). Source page: https://colorlib.com/wp/template/login-form-v3/ Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/loginbreeze/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-card-start` | `#7c3aed` | Card gradient start — purple (#7c3aed). |
| `--color-card-end` | `#6366f1` | Card gradient end — indigo (#6366f1). |
| `--color-input-border` | `rgba(255, 255, 255, 0.3)` | Input underline — rgba white (30% opacity). |
| `--color-accent` | `#818cf8` | Checkbox accent — indigo (#818cf8). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font: Poppins via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | Login card with gradient | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `LoginForm`
The login card SHALL display a purple-to-indigo gradient background with rounded corners and centered content.

### `Footer`
The template SHALL include a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/loginbreeze/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginbreeze/public/CNAME` = `loginbreeze.free.componentdock.com`
  and the package `homepage` = `https://loginbreeze.free.componentdock.com`.
