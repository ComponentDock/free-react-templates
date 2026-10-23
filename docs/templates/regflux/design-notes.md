# Regflux — Design Notes

Reference: **Colorlib Regform 14** — `https://colorlib.com/wp/template/colorlib-regform-14/`  
Live preview: `https://colorlib.com/etc/regform/colorlib-regform-14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-14.jpg  
Shipped: https://regflux.free.componentdock.com

Recreation of ColorLib Regform 14 (https://colorlib.com/wp/template/colorlib-regform-14/). A centered registration form on a light blue background with gender toggle buttons, collapsible additional info section, and clean uppercase labels.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/regflux/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c5e4f3` | Regflux brand palette — light blue background (#c5e4f3). |
| `--color-accent` | `#5ba4cf` | Blue accent for buttons and toggle (#5ba4cf). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `RegistrationForm` | — | no dedicated spec block |
| 2 | `Footer` | Form renders all required fields | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `RegistrationForm`
*anchors only* — firstName · lastName · birthDate · phone · password · repeatPassword

### `Footer`
The registration form SHALL display First Name, Last Name, Birth Date, Gender toggle (Male/Female), Phone Number, Password, and Repeat Your Password fields.

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
- **Provenance ban.** No file under `apps/regflux/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regflux/public/CNAME` = `regflux.free.componentdock.com`
  and the package `homepage` = `https://regflux.free.componentdock.com`.
