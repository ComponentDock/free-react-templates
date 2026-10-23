# Regpilot — Design Notes

Reference: **Colorlib Regform 17** — `https://colorlib.com/wp/template/colorlib-regform-17/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-17.jpg  
Shipped: https://regpilot.free.componentdock.com

Registration form template with a split-panel layout: a hero image on the left, and a registration form on the right featuring name fields, username, email, gender select, password confirmation, and a register button. Recreation of ColorLib "Colorlib Regform 17" (https://colorlib.com/wp/template/colorlib-regform-17/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/regpilot/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#222222` | brand |
| `--color-brand-dark` | `#333333` | brand dark |
| `--color-card-bg` | `#ffffff` | card bg |
| `--color-label` | `#999999` | label |
| `--color-border` | `#dddddd` | border |
| `--color-heading` | `#222222` | heading |
| `--color-bg` | `#e8e8e8` | bg |
| `--font-sans` | `'Poppins', system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Background` | Background | see fidelity note below |
| 2 | `RegistrationForm` | Registration form fields | see fidelity note below |
| 3 | `Footer` | Component Dock footer | see fidelity note below |

## Section-by-section fidelity

### `Background`
The template SHALL display a light gray (#e8e8e8) background filling the full viewport.

### `RegistrationForm`
The form SHALL contain the following fields: First Name (required, text), Last Name (required, text), Username (required, text with user icon), Email Address (required, email with mail icon), Gender (required, select dropdown), Password (required, password with lock icon), Confirm Password (required, password with lock icon).

### `Footer`
The footer SHALL link to https://www.componentdock.com/ with the text "Made with Component Dock".

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
- **Provenance ban.** No file under `apps/regpilot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regpilot/public/CNAME` = `regpilot.free.componentdock.com`
  and the package `homepage` = `https://regpilot.free.componentdock.com`.
