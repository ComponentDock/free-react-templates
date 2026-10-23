# Gatepass — Design Notes

Reference: **Login Form 05** — `https://colorlib.com/wp/template/login-form-05/`  
Live preview: `https://preview.colorlib.com/theme/login-form-05/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-05.jpg  
Shipped: https://gatepass.free.componentdock.com

A modern, eye-catchy login form template featuring a dark gradient background, split-screen layout with decorative hero image, centered white card with email/password fields, social login buttons (Google, Facebook), remember me checkbox, forgot password link, and create account link.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/gatepass/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-bg-start` | `#1a1a2e` | Background gradient start — deep navy (#1a1a2e). |
| `--color-bg-end` | `#0f3460` | Background gradient end — dark teal (#0f3460). |
| `--color-card` | `#ffffff` | Card white. |
| `--color-brand` | `#6c63ff` | Brand accent — violet (#6c63ff), used for buttons and highlights. |
| `--color-brand-hover` | `#5a52d5` | Brand hover — darker violet (#5a52d5). |
| `--color-input` | `#f0f0f0` | Input background — light gray (#f0f0f0). |
| `--color-ink` | `#333333` | Text color — dark gray (#333333). |
| `--color-caption` | `#888888` | Caption/link color — medium gray (#888888). |
| `--color-placeholder` | `#999999` | Placeholder text color — medium gray (#999999). |
| `--color-social-border` | `#dddddd` | Social button border — light gray (#dddddd). |
| `--color-divider` | `#e0e0e0` | Divider color — light gray (#e0e0e0). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeroBackground` | — | no dedicated spec block |
| 2 | `LoginCard` | Renders social login buttons | see fidelity note below |
| 3 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `HeroBackground`
*anchors only* — Decorative hero image

### `LoginCard`
Users SHALL see Google and Facebook social login buttons.

### `Footer`
The footer SHALL contain a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/gatepass/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gatepass/public/CNAME` = `gatepass.free.componentdock.com`
  and the package `homepage` = `https://gatepass.free.componentdock.com`.
