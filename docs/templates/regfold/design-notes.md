# Regfold — Design Notes

Reference: **Colorlib Regform 4** — `https://colorlib.com/wp/template/colorlib-regform-4/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-4/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-4.jpg  
Shipped: https://regfold.free.componentdock.com

A Registration Form template with form fields and form submission sections. Recreation of **ColorLib Regform 4** (`colorlib-regform-4`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/regfold/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-start` | `#fc2c77` | RegFold brand palette — pink-to-purple gradient (#fc2c77 → #6c4079). |
| `--color-brand-end` | `#6c4079` | brand end |
| `--color-accent` | `#4272d7` | Blue submit button (#4272d7). |
| `--color-accent-hover` | `#3868cd` | accent hover |
| `--color-input-bg` | `#fafafa` | Input background (#fafafa). |
| `--color-label` | `#666666` | Label text (#666). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `RegistrationForm` | Page renders the registration form | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `RegistrationForm`
Users SHALL see a registration form with all required fields.

### `Footer`
Users SHALL see a footer with a Component Dock link.

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
- **Provenance ban.** No file under `apps/regfold/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regfold/public/CNAME` = `regfold.free.componentdock.com`
  and the package `homepage` = `https://regfold.free.componentdock.com`.
