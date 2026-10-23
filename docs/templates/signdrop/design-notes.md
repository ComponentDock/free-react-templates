# Signdrop — Design Notes

Reference: **Signup Form 06** — `https://colorlib.com/wp/template/signup-form-06/`  
Live preview: `https://preview.colorlib.com/theme/signup-form-06/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-06.jpg  
Shipped: https://signdrop.free.componentdock.com

Signdrop is a registration form template — a recreation of ColorLib Signup Form 06 (https://colorlib.com/wp/template/signup-form-06/). It features a split viewport layout with a centered registration form on the left and a full-height hero image on the right.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@400;600;700**

## Design tokens (`apps/signdrop/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4a7cf7` | brand |
| `--color-brand-dark` | `#3a62c5` | brand dark |
| `--color-facebook` | `#3b5998` | facebook |
| `--color-twitter` | `#1da1f2` | twitter |
| `--color-google` | `#dd4b39` | google |
| `--color-input-border` | `#e6e6e6` | input border |
| `--color-text-heading` | `#333333` | text heading |
| `--color-text-sub` | `#999999` | text sub |
| `--color-bg-form` | `#ffffff` | bg form |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `RegistrationForm` | Page renders with registration form | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `RegistrationForm`
Users SHALL see a full-viewport split layout with a white form panel on the left and a hero image on the right.

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
- **Provenance ban.** No file under `apps/signdrop/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signdrop/public/CNAME` = `signdrop.free.componentdock.com`
  and the package `homepage` = `https://signdrop.free.componentdock.com`.
