# Regmint — Design Notes

Reference: **Signup Form 02** — `https://colorlib.com/wp/template/signup-form-02/`  
Live preview: `https://preview.colorlib.com/theme/signup-form-02/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-02.jpg  
Shipped: https://regmint.free.componentdock.com

RegMint is a split-panel registration form template that recreates ColorLib "Signup Form 02" (https://colorlib.com/wp/template/signup-form-02/) as a React 19 + Tailwind CSS 4 + TypeScript application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/regmint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fb771a` | Brand orange — the single focal accent on the page. |
| `--color-brand-hover` | `#eb6304` | brand hover |
| `--color-brand-active` | `#de5e04` | brand active |
| `--color-area` | `#f6f7fc` | Form area background (left panel). |
| `--color-field` | `#ffffff` | Input field background. |
| `--color-caption` | `#888` | Caption / link grey. |
| `--color-checkbox-idle` | `#e6e6e6` | Checkbox unchecked indicator. |
| `--color-checkbox-hover` | `#ccc` | checkbox hover |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto — Google Fonts loaded in index.html (weight 300 body, 400 labels/heading). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `RegistrationForm` | Registration form displays all required fields | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `RegistrationForm`
Users SHALL see a "Register" heading, descriptive subtitle, first name, last name, email, phone, website, password, re-type password, terms checkbox, and register button.

### `Footer`
Users SHALL see a footer link to Component Dock.

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
- **Provenance ban.** No file under `apps/regmint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regmint/public/CNAME` = `regmint.free.componentdock.com`
  and the package `homepage` = `https://regmint.free.componentdock.com`.
