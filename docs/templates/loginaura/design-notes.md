# Loginaura — Design Notes

Reference: **Login Form V12** — `https://colorlib.com/wp/template/login-form-v12/`  
Live preview: `https://colorlib.com/etc/lf/Login_v12/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v12.jpg  
Shipped: https://loginaura.free.componentdock.com

A full-viewport centered login with a circular avatar, blue gradient background (#005bea → #00c6fb) with photo overlay. It also includes username/password inputs with left icons, dark Login button with gradient hover reveal, and "Create new account" CTA. Recreation of ColorLib Login Form V12 as Loginaura.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;600;700;800**

## Design tokens (`apps/loginaura/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-gradient-start` | `#005bea` | Gradient — blue #005bea to cyan #00c6fb. |
| `--color-gradient-end` | `#00c6fb` | gradient end |
| `--color-card` | `transparent` | Card — transparent (no solid background). |
| `--color-btn` | `#333333` | Button — dark #333333. |
| `--color-btn-hover` | `#005bea` | btn hover |
| `--color-avatar-ring` | `#ffffff` | Avatar ring — white. |
| `--color-heading` | `#ffffff` | Text colors. |
| `--color-body` | `#cccccc` | body |
| `--color-link` | `#cccccc` | link |
| `--color-input` | `#ffffff` | input |
| `--color-input-text` | `#333333` | input text |
| `--color-placeholder` | `#999999` | placeholder |
| `--color-icon` | `#999999` | icon |
| `--color-icon-focus` | `#00c6fb` | icon focus |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Font: Montserrat via Google Fonts. |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Avatar` | Circular avatar | see fidelity note below |
| 2 | `LoginForm` | Login form with rounded inputs | see fidelity note below |
| 3 | `Footer` | Component Dock footer | see fidelity note below |

## Section-by-section fidelity

### `Avatar`
The template SHALL display a circular avatar image (120×120px) centered above the login form, with a white border ring.

### `LoginForm`
The template SHALL provide username and password inputs with rounded pill shape, white background, left-aligned icons (User, Lock), and placeholder text.

### `Footer`
The template SHALL display a footer linking to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/loginaura/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginaura/public/CNAME` = `loginaura.free.componentdock.com`
  and the package `homepage` = `https://loginaura.free.componentdock.com`.
