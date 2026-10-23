# Logincove — Design Notes

Reference: **Login Form 14** — `https://colorlib.com/wp/template/login-form-14/`  
Live preview: `https://preview.colorlib.com/theme/login-form-14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-14-2.jpg  
Shipped: https://logincove.free.componentdock.com

A split-screen sign-in form template with gold accent, Lato font, Facebook/Twitter social login, and "Not a member? Sign Up" CTA. Recreation of ColorLib Login Form 14 as Logincove.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/logincove/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#f8f9fd` | Page background — light gray-blue (#f8f9fd). |
| `--color-card` | `#ffffff` | Card background — white. |
| `--color-primary` | `#e3b04b` | Primary accent — gold/amber (#e3b04b), used for button, links, focus border. |
| `--color-primary-hover` | `#d4a040` | Primary hover — deeper gold (#d4a040). |
| `--color-ink` | `#000000` | Text color — black (#000000). |
| `--color-caption` | `#666666` | Caption / body text — gray (#666666). |
| `--color-border` | `rgba(0, 0, 0, 0.1)` | Input border — subtle (#rgba(0,0,0,0.1)). |
| `--color-social-border` | `rgba(0, 0, 0, 0.05)` | Social icon border — very subtle (#rgba(0,0,0,0.05)). |
| `--color-social-text` | `#999999` | Social icon text — gray (#999999). |
| `--color-shadow` | `rgba(0, 0, 0, 0.24)` | Card shadow color. |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | Font: Lato via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Illustration` | — | no dedicated spec block |
| 2 | `LoginForm` | Split-screen login layout | see fidelity note below |
| 3 | `Footer` | Component Dock footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Illustration`
*anchors only* — Decorative illustration

### `LoginForm`
The template SHALL render a split-screen layout with a decorative illustration on the left half (hidden on mobile) and a login form on the right half, wrapped in a white card with rounded corners and box shadow.

### `Footer`
The template SHALL include a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/logincove/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/logincove/public/CNAME` = `logincove.free.componentdock.com`
  and the package `homepage` = `https://logincove.free.componentdock.com`.
