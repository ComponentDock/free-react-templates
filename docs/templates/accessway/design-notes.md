# Accessway — Design Notes

Reference: **Login Form 19** — `https://colorlib.com/wp/template/login-form-19/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/login-form-19/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-19-1.jpg  
Shipped: https://accessway.free.componentdock.com

Recreation of ColorLib "Login Form 19" (https://colorlib.com/wp/template/login-form-19/). A centered dark navy login card with circular avatar, username/password fields with icons, and a Get Started button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/accessway/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#ffffff` | Page background — white. |
| `--color-card` | `#000232` | Card background — deep navy (#000232). |
| `--color-primary` | `#007bff` | Primary accent — Bootstrap blue (#007bff), used for button. |
| `--color-primary-hover` | `#0056b3` | Primary hover — deeper blue (#0056b3). |
| `--color-ink` | `#ffffff` | Text on dark card — white. |
| `--color-caption` | `rgba(255, 255, 255, 0.5)` | Caption text — white 50% opacity. |
| `--color-border` | `rgba(255, 255, 255, 0.2)` | Input border — subtle white. |
| `--color-shadow` | `rgba(0, 0, 0, 0.24)` | Card shadow color. |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | Font: Lato via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Avatar` | Display the avatar | see fidelity note below |
| 2 | `LoginForm` | Render the login card layout | see fidelity note below |
| 3 | `Footer` | Link to Component Dock in footer | see fidelity note below |

## Section-by-section fidelity

### `Avatar`
The template SHALL display a 100px circular avatar image at the top center of the card.

### `LoginForm`
The template SHALL display a centered card with a dark navy background (#000232), rounded corners, and a drop shadow.

### `Footer`
The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/accessway/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/accessway/public/CNAME` = `accessway.free.componentdock.com`
  and the package `homepage` = `https://accessway.free.componentdock.com`.
