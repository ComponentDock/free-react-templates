# Signupgale — Design Notes

Reference: **Signup Form 07** — `https://colorlib.com/wp/template/signup-form-07/`  
Live preview: `https://preview.colorlib.com/theme/signup-form-07/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-07.jpg  
Shipped: https://signupgale.free.componentdock.com

A split-screen registration page with a flat vector illustration on the left and a centered signup form on the right. It also includes featuring social login buttons. Recreation of ColorLib **Signup Form 07**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@400;500;600**

## Design tokens (`apps/signupgale/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#7c6bf5` | brand |
| `--color-brand-dark` | `#6a5ae0` | brand dark |
| `--color-facebook` | `#3b5998` | facebook |
| `--color-twitter` | `#1da1f2` | twitter |
| `--color-google` | `#dd4b39` | google |
| `--color-input-border` | `#e0e0e0` | input border |
| `--color-text-heading` | `#2d2d2d` | text heading |
| `--color-text-sub` | `#999999` | text sub |
| `--color-placeholder` | `#aaaaaa` | placeholder |
| `--color-bg-page` | `#f8f9fa` | bg page |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Illustration` | Flat vector illustration | see fidelity note below |
| 2 | `RegistrationForm` | — | no dedicated spec block |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Illustration`
The left panel SHALL display a flat vector illustration of a person at a desk with office elements.

### `RegistrationForm`
*anchors only* — Register with Facebook · Register with Twitter · Register with Google

### `Footer`
The page SHALL include a minimal footer with Component Dock branding.

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
- **Provenance ban.** No file under `apps/signupgale/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signupgale/public/CNAME` = `signupgale.free.componentdock.com`
  and the package `homepage` = `https://signupgale.free.componentdock.com`.
