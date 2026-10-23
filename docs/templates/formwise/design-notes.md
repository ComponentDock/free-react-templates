# Formwise — Design Notes

Reference: **Colorlib Regform 7** — `https://colorlib.com/wp/template/colorlib-regform-7/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-7/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-7.jpg  
Shipped: https://formwise.free.componentdock.com

Recreation of ColorLib Regform 7 (https://colorlib.com/wp/template/colorlib-regform-7/). A creative signup form template featuring two alternative form layouts with underline-style inputs, workspace illustrations, and a steel-blue register button.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/formwise/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#5b8fb9` | brand |
| `--color-brand-dark` | `#4a7da8` | brand dark |
| `--color-surface` | `#f5f5f5` | surface |
| `--color-card` | `#ffffff` | card |
| `--color-heading` | `#333333` | heading |
| `--color-body` | `#555555` | body |
| `--color-muted` | `#999999` | muted |
| `--color-border` | `#dddddd` | border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SignupForm` | First signup form card | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `SignupForm`
The first card SHALL display a "Sign up" heading, four underline-style input fields (Name, Email, Password, Repeat Password) with left-aligned lucide-react icons, a terms checkbox, a steel-blue "Register" button, and an "I am already member" link. The illustration SHALL appear on the right side.

### `Footer`
The page footer SHALL contain a "Made with Component Dock" link pointing to https://www.componentdock.com/, opening in a new tab.

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
- **Provenance ban.** No file under `apps/formwise/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formwise/public/CNAME` = `formwise.free.componentdock.com`
  and the package `homepage` = `https://formwise.free.componentdock.com`.
