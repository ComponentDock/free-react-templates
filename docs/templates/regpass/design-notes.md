# Regpass — Design Notes

Reference: **Colorlib Regform 19** — `https://colorlib.com/wp/template/colorlib-regform-19/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-19/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-19.jpg  
Shipped: https://regpass.free.componentdock.com

A Registration Forms template with all form fields, form fields, user and form sections. Recreation of ColorLib "Regform 19" (https://colorlib.com/wp/template/colorlib-regform-19/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript registration form template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display:wght@400;500;600;700**

## Design tokens (`apps/regpass/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#d4a76a` | brand |
| `--color-brand-dark` | `#c4975a` | brand dark |
| `--color-bg-page` | `#e8e4e0` | bg page |
| `--color-bg-card` | `#ffffff` | bg card |
| `--color-text-primary` | `#333333` | text primary |
| `--color-text-secondary` | `#999999` | text secondary |
| `--color-text-label` | `#555555` | text label |
| `--color-input-border` | `#e0e0e0` | input border |
| `--color-input-bg` | `#fafafa` | input bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeroImage` | — | no dedicated spec block |
| 2 | `RegistrationForm` | — | no dedicated spec block |
| 3 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `HeroImage`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `RegistrationForm`
*anchors only* — username · email · password · repeatPassword · country · gender

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
- **Provenance ban.** No file under `apps/regpass/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regpass/public/CNAME` = `regpass.free.componentdock.com`
  and the package `homepage` = `https://regpass.free.componentdock.com`.
