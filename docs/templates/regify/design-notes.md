# Regify — Design Notes

Reference: **Colorlib Regform 8** — `https://colorlib.com/wp/template/colorlib-regform-8/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-8/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-8.jpg  
Shipped: https://regify.free.componentdock.com

Regify is a free account application registration form template that recreates ColorLib "Colorlib Reg Form V8" (https://colorlib.com/wp/template/colorlib-regform-8/) as a React 19 + Tailwind CSS 4 + TypeScript application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat:wght@400;500;600;700;900**

## Design tokens (`apps/regify/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#74ebd5` | brand |
| `--color-brand-end` | `#9face6` | brand end |
| `--color-surface` | `#f5f5f5` | surface |
| `--color-card` | `#ffffff` | card |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#555555` | body |
| `--color-muted` | `#999999` | muted |
| `--color-border` | `#ebebeb` | border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SignupCard` | Signup form displays all required fields | see fidelity note below |
| 2 | `Footer` | Form accepts user input | see fidelity note below |

## Section-by-section fidelity

### `SignupCard`
Users SHALL see a "Create account" heading, name input, email input, password input with show/hide toggle, repeat password input, terms checkbox, and "Sign up" submit button.

### `Footer`
Users SHALL be able to type in all form fields and toggle the terms checkbox.

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
- **Provenance ban.** No file under `apps/regify/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regify/public/CNAME` = `regify.free.componentdock.com`
  and the package `homepage` = `https://regify.free.componentdock.com`.
