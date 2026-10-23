# Formly — Design Notes

Reference: **Colorlib Regform 5** — `https://colorlib.com/wp/template/colorlib-regform-5/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-5/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-5.jpg  
Shipped: https://formly.free.componentdock.com

An Event Registration Form template with name field, company field, email field, phone field, subject dropdown and customer radio buttons sections. Recreation of **ColorLib Regform 5** (`colorlib-regform-5`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

## Design tokens (`apps/formly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f5f3ff` | primary 50 |
| `--color-primary-100` | `#ede9fe` | primary 100 |
| `--color-primary-200` | `#ddd6fe` | primary 200 |
| `--color-primary-300` | `#c4b5fd` | primary 300 |
| `--color-primary-400` | `#a78bfa` | primary 400 |
| `--color-primary-500` | `#8b5cf6` | primary 500 |
| `--color-primary-600` | `#7c3aed` | primary 600 |
| `--color-primary-700` | `#6d28d9` | primary 700 |
| `--color-primary-800` | `#5b21b6` | primary 800 |
| `--color-primary-900` | `#4c1d95` | primary 900 |
| `--color-primary-950` | `#2e1065` | primary 950 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `RegistrationForm` | Page renders the registration form | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `RegistrationForm`
Users SHALL see a centered event registration form with gradient background.

### `Footer`
The footer SHALL contain a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/formly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formly/public/CNAME` = `formly.free.componentdock.com`
  and the package `homepage` = `https://formly.free.componentdock.com`.
