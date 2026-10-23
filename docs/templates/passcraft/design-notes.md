# Passcraft — Design Notes

Reference: **Login Form 03** — `https://colorlib.com/wp/template/login-form-03/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/login-form-03/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-03.jpg  
Shipped: https://passcraft.free.componentdock.com

A login form template with a hero section, a centered login card and a Component Dock footer. Recreation of ColorLib "Login Form 03" (`login-form-03`).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/passcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-body` | `#f6f7fc` | Body background — light lavender-gray (#f6f7fc). |
| `--color-card` | `#ffffff` | Card white. |
| `--color-input` | `#efefef` | Input background — light gray (#efefef). |
| `--color-brand` | `#fb771a` | Brand accent — orange (#fb771a), used for buttons and checkbox. |
| `--color-caption` | `#888888` | Link / caption color — gray (#888888). |
| `--color-ink` | `#333333` | Input text color — dark gray. |
| `--color-placeholder` | `#999999` | Placeholder text color — medium gray. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original font: "Roboto" via Google Fonts (loaded in index.html). |

> The spec has no section-level requirements; the order below is read from `apps/passcraft/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeroSection` | — | no dedicated spec block |
| 2 | `LoginCard` | — | no dedicated spec block |
| 3 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `HeroSection`
*anchors only* — Decorative hero image

### `LoginCard`
*anchors only* — Login to · PassCraft · Username · Password · Remember me · Forgot Password

### `Footer`
*anchors only* — More templates at Component Dock

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
- **Provenance ban.** No file under `apps/passcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/passcraft/public/CNAME` = `passcraft.free.componentdock.com`
  and the package `homepage` = `https://passcraft.free.componentdock.com`.
