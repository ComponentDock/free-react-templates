# Regcraft — Design Notes

Reference: **Colorlib Regform 1** — `https://colorlib.com/wp/template/colorlib-regform-1/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-1/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-1.jpg  
Shipped: https://regcraft.free.componentdock.com

Regcraft is a free class registration form template recreating ColorLib "Reg Form V1" (https://colorlib.com/wp/template/colorlib-regform-1/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**

## Design tokens (`apps/regcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#2563eb` | Regcraft brand palette — bright blue background (#2563eb). |
| `--color-accent` | `#4ade80` | Green submit button (#4ade80). |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `RegistrationForm` | Registration form heading | see fidelity note below |
| 3 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Regcraft · Home

### `RegistrationForm`
The card SHALL display the heading "Registration Info" above the form fields.

### `Footer`
The page SHALL display a footer that links to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/regcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regcraft/public/CNAME` = `regcraft.free.componentdock.com`
  and the package `homepage` = `https://regcraft.free.componentdock.com`.
