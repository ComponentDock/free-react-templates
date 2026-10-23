# Regline — Design Notes

Reference: **Colorlib Regform 6** — `https://colorlib.com/wp/template/colorlib-regform-6/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-6/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-6.jpg  
Shipped: https://regline.free.componentdock.com

A centered job application form on a dark background with labeled fields (full name, email, message textarea, CV upload) and a blue submit button. Recreation of ColorLib "Colorlib Regform 6".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@400;600;700**

## Design tokens (`apps/regline/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef0ff` | primary 50 |
| `--color-primary-100` | `#dce1ff` | primary 100 |
| `--color-primary-200` | `#b9c4ff` | primary 200 |
| `--color-primary-300` | `#8da2ff` | primary 300 |
| `--color-primary-400` | `#6a86ff` | primary 400 |
| `--color-primary-500` | `#4a6cf7` | primary 500 |
| `--color-primary-600` | `#3b5de7` | primary 600 |
| `--color-primary-700` | `#2d4ad0` | primary 700 |
| `--color-primary-800` | `#243da8` | primary 800 |
| `--color-primary-900` | `#1e3385` | primary 900 |
| `--color-primary-950` | `#132052` | primary 950 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ApplicationForm` | Full name field validation | see fidelity note below |
| 2 | `Footer` | Footer link | see fidelity note below |

## Section-by-section fidelity

### `ApplicationForm`
Users SHALL be able to enter their full name, and the field SHALL be required.

### `Footer`
The footer SHALL link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/regline/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regline/public/CNAME` = `regline.free.componentdock.com`
  and the package `homepage` = `https://regline.free.componentdock.com`.
