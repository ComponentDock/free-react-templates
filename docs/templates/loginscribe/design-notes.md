# Loginscribe — Design Notes

Reference: **Login Form V2** — `https://colorlib.com/wp/template/login-form-v2/`  
Live preview: `https://preview.colorlib.com/theme/login-form-v2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v2.jpg  
Shipped: https://loginscribe.free.componentdock.com

A Welcome Login Form template with email input with gradient and gradient login button sections. Recreate the ColorLib Login Form V2 (https://colorlib.com/wp/template/login-form-v2/) as a centered welcome login card with gradient accents, avatar icon, email/password inputs with visibility toggle, and a gradient pill-shaped submit button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/loginscribe/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#e8e8e8` | Page background — light gray (#e8e8e8). |
| `--color-card` | `#ffffff` | Card background — white. |
| `--color-primary-start` | `#00d2ff` | Primary gradient start — cyan (#00d2ff). |
| `--color-primary-end` | `#a855f7` | Primary gradient end — purple (#a855f7). |
| `--color-ink` | `#333333` | Text color — dark (#333333). |
| `--color-heading` | `#222222` | Heading text — near black (#222222). |
| `--color-caption` | `#999999` | Caption / label text — gray (#999999). |
| `--color-border` | `#e0e0e0` | Input underline — light gray (#e0e0e0). |
| `--color-avatar` | `#3a3a3a` | Avatar background — charcoal (#3a3a3a). |
| `--color-shadow` | `rgba(0, 0, 0, 0.1)` | Card shadow color. |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font: Poppins via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | Gradient LOGIN button | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `LoginForm`
Users SHALL see a full-width, pill-shaped LOGIN button with a cyan-to-purple gradient background.

### `Footer`
Users SHALL see a "Don't have an account? Sign Up" line in the footer, where "Sign Up" links to Component Dock.

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
- **Provenance ban.** No file under `apps/loginscribe/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginscribe/public/CNAME` = `loginscribe.free.componentdock.com`
  and the package `homepage` = `https://loginscribe.free.componentdock.com`.
