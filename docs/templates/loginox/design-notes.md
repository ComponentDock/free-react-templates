# Loginox — Design Notes

Reference: **Login Form 20** — `https://colorlib.com/wp/template/login-form-20/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/login-form-20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-20-1.jpg  
Shipped: https://loginox.free.componentdock.com

A Login Form template with full-viewport background, centered narrow login, title heading, glass-like form inputs and pill-shaped sections. Recreation of ColorLib "Login Form V20" (slug: `login-form-20`).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/loginox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#fbceb5` | Brand color — peach/salmon (#fbceb5). |
| `--color-ink` | `#ffffff` | Text on dark — white. |
| `--color-caption` | `rgba(255, 255, 255, 0.9)` | Semi-transparent text — rgba(255,255,255,0.9). |
| `--color-glass` | `rgba(255, 255, 255, 0.08)` | Glass input background — rgba(255,255,255,0.08). |
| `--color-glass-border` | `rgba(255, 255, 255, 0.4)` | Glass input border on focus — rgba(255,255,255,0.4). |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | Font: Lato via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | Centered narrow login column | see fidelity note below |
| 2 | `SocialButtons` | Social login divider and buttons | see fidelity note below |
| 3 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `LoginForm`
The template SHALL center a narrow column (max-width ~400px) containing the login content.

### `SocialButtons`
The template SHALL display a divider and social login buttons below the form.

### `Footer`
Every template footer MUST link to `https://www.componentdock.com/` branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/loginox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginox/public/CNAME` = `loginox.free.componentdock.com`
  and the package `homepage` = `https://loginox.free.componentdock.com`.
