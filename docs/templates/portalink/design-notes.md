# Portalink — Design Notes

Reference: **Login Form 15** — `https://colorlib.com/wp/template/login-form-15/`  
Live preview: `https://preview.colorlib.com/theme/login-form-15/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-15-2.jpg  
Shipped: https://portalink.free.componentdock.com

Portalink provides a centered white login card on a light gray background with a hero image spanning the top of the card. It features social login icons (Facebook, Twitter), username and password fields with a password visibility toggle, a green pill-shaped "Sign In" button, remember-me checkbox, forgot-password link, and sign-up CTA.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/portalink/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#f5f5f5` | Page background — light gray (#f5f5f5). |
| `--color-card` | `#ffffff` | Card background — white. |
| `--color-primary` | `#4ecdc4` | Primary accent — teal/mint green (#4ecdc4). |
| `--color-primary-hover` | `#3dbdb5` | Primary hover — darker teal (#3dbdb5). |
| `--color-ink` | `#333333` | Text ink — dark gray (#333333). |
| `--color-caption` | `#999999` | Caption text — medium gray (#999999). |
| `--color-border` | `rgba(0, 0, 0, 0.1)` | Input border — subtle. |
| `--color-social-border` | `rgba(0, 0, 0, 0.1)` | Social icon border. |
| `--color-social-text` | `#aaaaaa` | Social icon text — gray (#aaaaaa). |
| `--color-shadow` | `rgba(0, 0, 0, 0.08)` | Card shadow. |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font: Poppins via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeroImage` | — | no dedicated spec block |
| 2 | `LoginForm` | Login form fields | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `HeroImage`
*anchors only* — Decorative hero image

### `LoginForm`
The template SHALL render a login form with username and password inputs.

### `Footer`
The template SHALL render a footer with a Component Dock link.

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
- **Provenance ban.** No file under `apps/portalink/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/portalink/public/CNAME` = `portalink.free.componentdock.com`
  and the package `homepage` = `https://portalink.free.componentdock.com`.
