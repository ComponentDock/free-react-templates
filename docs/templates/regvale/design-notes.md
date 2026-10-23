# Regvale — Design Notes

Reference: **Colorlib Regform 36** — `https://colorlib.com/wp/template/colorlib-regform-36/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-36/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-36.jpg  
Shipped: https://regvale.free.componentdock.com

Recreation of ColorLib Regform 36 (https://colorlib.com/wp/template/colorlib-regform-36/) as a React 19 + Tailwind CSS 4 registration form template. Preview was unavailable at time of implementation; screenshot used as primary reference.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/regvale/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#463acc` | brand |
| `--color-brand-dark` | `#3a2fb5` | brand dark |
| `--color-bg-page` | `#edf2fc` | bg page |
| `--color-text-primary` | `#333333` | text primary |
| `--color-text-secondary` | `#777777` | text secondary |
| `--color-input-border` | `#dddddd` | input border |
| `--color-input-focus` | `#463acc` | input focus |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `RegistrationCard` | Page renders with registration form | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `RegistrationCard`
Users SHALL see a centered registration card with a heading and subtitle.

### `Footer`
Users SHALL see a footer with a link to Component Dock.

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
- **Provenance ban.** No file under `apps/regvale/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regvale/public/CNAME` = `regvale.free.componentdock.com`
  and the package `homepage` = `https://regvale.free.componentdock.com`.
