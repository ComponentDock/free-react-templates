# Regsnap — Design Notes

Reference: **Colorlib Regform 2** — `https://colorlib.com/wp/template/colorlib-regform-2/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-2.jpg  
Shipped: https://regsnap.free.componentdock.com

Recreate Colorlib Regform 2 as a React template named Regsnap. This is a food class registration form with a split-screen card layout: hero image on the left, form fields on the right, set against a vibrant red background.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/regsnap/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#57b846` | brand |
| `--color-brand-dark` | `#4dae3c` | brand dark |
| `--color-bg-page` | `#fa4251` | bg page |
| `--color-bg-card` | `#ffffff` | bg card |
| `--color-text-input` | `#666666` | text input |
| `--color-text-placeholder` | `#808080` | text placeholder |
| `--color-border-input` | `#e5e5e5` | border input |
| `--color-icon-muted` | `#cccccc` | icon muted |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeroImage` | — | no dedicated spec block |
| 2 | `RegistrationForm` | Registration form fields | see fidelity note below |
| 3 | `Footer` | Footer branding | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `HeroImage`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `RegistrationForm`
The form SHALL include: Name (text input), Birthdate (text input with calendar icon), Gender (select dropdown: Male/Female/Other), Class (select dropdown: Class 1/2/3), Registration Code (text input), and a green Search submit button.

### `Footer`
The footer SHALL display "More templates at Component Dock" with a link to https://www.componentdock.com/ that opens in a new tab.

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
- **Provenance ban.** No file under `apps/regsnap/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regsnap/public/CNAME` = `regsnap.free.componentdock.com`
  and the package `homepage` = `https://regsnap.free.componentdock.com`.
