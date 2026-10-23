# Signupbloom — Design Notes

Reference: **Signup Form 08** — `https://colorlib.com/wp/template/signup-form-08/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-08/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-08.jpg  
Shipped: https://signupbloom.free.componentdock.com

Recreation of ColorLib **Signup Form 08** (`https://colorlib.com/wp/template/signup-form-08/`). Preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-08/`. Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. This is a full-page split-layout signup form.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@400;500;700**

## Design tokens (`apps/signupbloom/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#38d39f` | brand |
| `--color-brand-dark` | `#29bb8a` | brand dark |
| `--color-brand-focus` | `rgba(53, 185, 141, 0.5)` | brand focus |
| `--color-facebook` | `#3b5998` | facebook |
| `--color-twitter` | `#1da1f2` | twitter |
| `--color-google` | `#ea4335` | google |
| `--color-input-border` | `#cccccc` | input border |
| `--color-text-heading` | `#212529` | text heading |
| `--color-text-sub` | `#6c757d` | text sub |
| `--color-placeholder` | `#aaaaaa` | placeholder |
| `--color-bg-page` | `#ffffff` | bg page |
| `--color-checkbox-unchecked` | `#e6e6e6` | checkbox unchecked |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `RegistrationForm` | Illustration | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |
| 3 | `Illustration` | Illustration | see fidelity note below |

## Section-by-section fidelity

### `RegistrationForm`
The page SHALL display an illustration on the right side of the split layout.

### `Footer`
The page footer SHALL link to `https://www.componentdock.com/` branded as "Component Dock".

### `Illustration`
The page SHALL display an illustration on the right side of the split layout.

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
- **Provenance ban.** No file under `apps/signupbloom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signupbloom/public/CNAME` = `signupbloom.free.componentdock.com`
  and the package `homepage` = `https://signupbloom.free.componentdock.com`.
