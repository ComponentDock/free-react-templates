# Signvane — Design Notes

Reference: **Signup Form 14** — `https://colorlib.com/wp/template/signup-form-14/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-14.jpg  
Shipped: https://signvane.free.componentdock.com

A centered signup form with pill-shaped inputs, golden accent, social login buttons, and "Sign In" link. Recreation of ColorLib **Signup Form 14**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/signvane/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#d5c455` | brand |
| `--color-brand-dark` | `#c4b344` | brand dark |
| `--color-facebook` | `#44629b` | facebook |
| `--color-twitter` | `#1dade9` | twitter |
| `--color-input-shadow` | `rgba(0, 0, 0, 0.1)` | input shadow |
| `--color-input-focus-shadow` | `rgba(0, 0, 0, 0.17)` | input focus shadow |
| `--color-btn-shadow` | `rgba(0, 0, 0, 0.29)` | btn shadow |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SignupForm` | — | no dedicated spec block |
| 2 | `SocialLogin` | Social login buttons | see fidelity note below |
| 3 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `SignupForm`
*anchors only* — First Name · Last Name · Email Address · Password · Confirm Password

### `SocialLogin`
The form SHALL display Facebook and Twitter social login buttons below the form.

### `Footer`
The template footer SHALL display the site name and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/signvane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signvane/public/CNAME` = `signvane.free.componentdock.com`
  and the package `homepage` = `https://signvane.free.componentdock.com`.
