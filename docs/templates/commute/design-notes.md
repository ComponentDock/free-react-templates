# Commute — Design Notes

Reference: **Login Form 06** — `https://colorlib.com/wp/template/login-form-06/`  
Live preview: `https://preview.colorlib.com/theme/login-form-06/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-06.jpg  
Shipped: https://commute.free.componentdock.com

Commute is a login form template with a hero image, login form and footer. It recreates the ColorLib **Login Form 06** design (https://colorlib.com/wp/template/login-form-06/, preview: https://preview.colorlib.com/theme/bootstrap/login-form-06/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/commute/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1a73e8` | Brand accent — vivid blue (#1a73e8), used for primary button and links. |
| `--color-brand-hover` | `#1557b0` | Brand hover — deeper blue (#1557b0). |
| `--color-card` | `#ffffff` | Card / form panel background — white. |
| `--color-input` | `#f0f0f0` | Input background — light gray (#f0f0f0). |
| `--color-ink` | `#333333` | Text color — dark charcoal (#333333). |
| `--color-caption` | `#888888` | Subtitle / caption — medium gray (#888888). |
| `--color-placeholder` | `#999999` | Placeholder text — medium gray (#999999). |
| `--color-fb` | `#3b5998` | Facebook brand blue (#3b5998). |
| `--color-twitter` | `#1da1f2` | Twitter / X brand blue (#1da1f2). |
| `--color-google` | `#db4437` | Google brand red (#db4437). |
| `--color-divider` | `#e0e0e0` | Divider color — light gray (#e0e0e0). |
| `--color-link` | `#1a73e8` | Link color — blue (#1a73e8). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |
| 3 | `HeroImage` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `LoginForm`
*anchors only* — Login with Facebook · Login with Twitter · Login with Google

### `Footer`
*anchors only* — More templates at Component Dock

### `HeroImage`
*anchors only* — Decorative city street image

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
- **Provenance ban.** No file under `apps/commute/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/commute/public/CNAME` = `commute.free.componentdock.com`
  and the package `homepage` = `https://commute.free.componentdock.com`.
