# Loginsplash — Design Notes

Reference: **Login Form V11** — `https://colorlib.com/wp/template/login-form-v11/`  
Live preview: `https://preview.colorlib.com/theme/login-form-v11/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v11.jpg  
Shipped: https://loginsplash.free.componentdock.com

A centered login form on a vibrant blue-to-pink gradient background, with Poppins/Raleway fonts. It also includes email/password inputs with left-aligned icons, remember-me checkbox, pink login button, Facebook/Google social buttons, and "Not a member? Sign up now" CTA. Recreation of ColorLib Login Form V11 as Loginsplash.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**, **Raleway**

## Design tokens (`apps/loginsplash/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page-start` | `#0250c5` | Page background — gradient from blue (#0250c5) to pink (#d43f8d). |
| `--color-page-end` | `#d43f8d` | page end |
| `--color-card` | `#ffffff` | Card background — white. |
| `--color-primary` | `#d33f8d` | Primary accent — pink/magenta (#d33f8d), used for button, focus, checkbox. |
| `--color-primary-hover` | `#333333` | Primary hover — dark (#333333). |
| `--color-ink` | `#333333` | Text color — dark (#333333). |
| `--color-body` | `#666666` | Body text — gray (#666666). |
| `--color-caption` | `#999999` | Caption / secondary text — gray (#999999). |
| `--color-input-bg` | `#e6e6e6` | Input background — light gray (#e6e6e6). |
| `--color-input-text` | `#686868` | Input text — dark gray (#686868). |
| `--color-placeholder` | `#acacac` | Placeholder text — gray (#acacac). |
| `--color-social-border` | `#e6e6e6` | Social button border — light gray (#e6e6e6). |
| `--color-facebook` | `#3b5998` | Facebook blue. |
| `--color-google` | `#555555` | Google gray. |
| `--color-error` | `#c80000` | Error red. |
| `--font-body` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font: Poppins (body) + Raleway (headings/buttons). |
| `--font-heading` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | Login heading | see fidelity note below |
| 2 | `Footer` | Component Dock footer | see fidelity note below |

## Section-by-section fidelity

### `LoginForm`
The template SHALL display an uppercase "Login" heading in Raleway-Black font inside the card.

### `Footer`
The template SHALL render a footer linking to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/loginsplash/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginsplash/public/CNAME` = `loginsplash.free.componentdock.com`
  and the package `homepage` = `https://loginsplash.free.componentdock.com`.
