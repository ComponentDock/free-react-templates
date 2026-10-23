# Regvibe — Design Notes

Reference: **Colorlib Regform 33** — `https://colorlib.com/wp/template/colorlib-regform-33/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-33/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-33.jpg  
Shipped: https://regvibe.free.componentdock.com

RegVibe is a free registration form template that recreates the ColorLib "Reg Form V33" design.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**

## Design tokens (`apps/regvibe/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-gradient-start` | `#fee140` | gradient start |
| `--color-gradient-end` | `#fa709a` | gradient end |
| `--color-label` | `#666666` | Form label color from the original CSS (#666). |
| `--color-input-border` | `#e5e5e5` | Input border color from the original CSS (#e5e5e5). |
| `--color-input-focus` | `#fa709a` | Input focus border: the pink accent. |
| `--color-btn-register` | `#6dab3c` | Register button green from the original CSS (#6DAB3C). |
| `--color-btn-register-hover` | `#5f9434` | Register button hover green. |
| `--color-card-shadow` | `rgba(0, 0, 0, 0.15)` | Card shadow from the original CSS. |
| `--color-ink` | `#333333` | Text colors. |
| `--color-muted` | `#999999` | muted |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Original font: Open Sans via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `RegistrationForm` | Registration form with all fields | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `RegistrationForm`
The card's right panel SHALL display a registration form with username, email, password, and confirm password fields, a register button, and a sign-in link.

### `Footer`
The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/regvibe/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regvibe/public/CNAME` = `regvibe.free.componentdock.com`
  and the package `homepage` = `https://regvibe.free.componentdock.com`.
