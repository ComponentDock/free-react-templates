# Signupnest — Design Notes

Reference: **Colorlib Regform 28** — `https://colorlib.com/wp/template/colorlib-regform-28/`  
Live preview: `https://colorlib.com/etc/regform/colorlib-regform-28/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-28.jpg  
Shipped: https://signupnest.free.componentdock.com

A split-panel registration form with a hero image on the left and a form on the right, centered on a pastel gradient background. Recreation of ColorLib **Regform 28**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700;900**

## Design tokens (`apps/signupnest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-bg-start` | `#e0c3fc` | Brand palette: lavender → sky blue gradient background. |
| `--color-brand-bg-end` | `#8ec5fc` | brand bg end |
| `--color-heading` | `#333333` | Text colors. |
| `--color-label` | `#666666` | label |
| `--color-input-text` | `#333333` | input text |
| `--color-placeholder` | `#999999` | placeholder |
| `--color-form-bg` | `#ffffff` | Form card. |
| `--color-input-border` | `#e5e5e5` | input border |
| `--color-input-focus` | `#53c83c` | input focus |
| `--color-btn-primary` | `#3b63ca` | Register button. |
| `--color-btn-primary-hover` | `#3356b0` | btn primary hover |
| `--color-link` | `#385cb9` | Checkbox link. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Fonts: Roboto (matches original). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `RegistrationCard` | Registration form fields | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `RegistrationCard`
The form SHALL contain four input fields: Full Name, Your Email, Password, and Confirm Password, each with a label.

### `Footer`
The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/signupnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signupnest/public/CNAME` = `signupnest.free.componentdock.com`
  and the package `homepage` = `https://signupnest.free.componentdock.com`.
