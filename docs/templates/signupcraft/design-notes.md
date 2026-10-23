# Signupcraft — Design Notes

Reference: **Signup Form 05** — `https://colorlib.com/wp/template/signup-form-05/`  
Live preview: `https://preview.colorlib.com/theme/signup-form-05/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-05.jpg  
Shipped: https://signupcraft.free.componentdock.com

A split-screen registration page with a lifestyle background image on the left and a clean white card containing a signup form. It also includes with email/password fields, terms checkbox, primary register button, and social login buttons on the right. Recreation of the ColorLib "Signup Form 05" template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@400;600;700**

## Design tokens (`apps/signupcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f5a623` | brand |
| `--color-brand-dark` | `#e6951d` | brand dark |
| `--color-facebook` | `#3b5998` | facebook |
| `--color-twitter` | `#1da1f2` | twitter |
| `--color-google` | `#dd4b39` | google |
| `--color-input-border` | `#e0e0e0` | input border |
| `--color-text-heading` | `#333333` | text heading |
| `--color-text-sub` | `#666666` | text sub |
| `--color-placeholder` | `#aaaaaa` | placeholder |
| `--color-bg-page` | `#f5f5f5` | bg page |
| `--color-bg-card` | `#ffffff` | bg card |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `RegistrationForm` | — | no dedicated spec block |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `RegistrationForm`
*anchors only* — Register with Facebook · Register with Twitter · Register with Google

### `Footer`
The template SHALL include a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/signupcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signupcraft/public/CNAME` = `signupcraft.free.componentdock.com`
  and the package `homepage` = `https://signupcraft.free.componentdock.com`.
