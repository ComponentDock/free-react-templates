# Keygate — Design Notes

Reference: **Login Form 13** — `https://colorlib.com/wp/template/login-form-13/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/login-form-13/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-13.jpg  
Shipped: https://keygate.free.componentdock.com

Recreation of ColorLib Login Form 13 (https://colorlib.com/wp/template/login-form-13/) — a clean white-card login form template with icon inputs, green accent, and social icons in the header. The new name is "Keygate".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato:wght@300;400;700**

## Design tokens (`apps/keygate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#a0c334` | brand |
| `--color-brand-hover` | `#8bb32e` | brand hover |
| `--color-page-bg` | `#f8f9fd` | page bg |
| `--color-card-bg` | `#ffffff` | card bg |
| `--color-text-heading` | `#000000` | text heading |
| `--color-text-body` | `#212529` | text body |
| `--color-text-gray` | `#999999` | text gray |
| `--color-icon-bg` | `#a0c334` | icon bg |
| `--color-icon-text` | `#ffffff` | icon text |
| `--color-border-input` | `rgba(0, 0, 0, 0.1)` | border input |
| `--color-social-border` | `rgba(0, 0, 0, 0.05)` | social border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginCard` | Login card with white background | see fidelity note below |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `LoginCard`
The page SHALL render a centered white card with rounded corners and drop shadow.

### `Footer`
The page SHALL render a footer with a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/keygate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/keygate/public/CNAME` = `keygate.free.componentdock.com`
  and the package `homepage` = `https://keygate.free.componentdock.com`.
