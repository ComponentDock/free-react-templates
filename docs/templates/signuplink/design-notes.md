# Signuplink — Design Notes

Reference: **Signup Form 09** — `https://colorlib.com/wp/template/signup-form-09/`  
Live preview: `https://preview.colorlib.com/theme/signup-form-09/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-09.jpg  
Shipped: https://signuplink.free.componentdock.com

A minimal, clean registration form template with floating label inputs, custom checkbox, social login buttons, and a centered layout. Recreates the ColorLib Signup Form 09 design in React + Tailwind CSS.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500**

## Design tokens (`apps/signuplink/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eafaf3` | primary 50 |
| `--color-primary-100` | `#d0f3e1` | primary 100 |
| `--color-primary-200` | `#a1e7c4` | primary 200 |
| `--color-primary-300` | `#6ddba4` | primary 300 |
| `--color-primary-400` | `#38d39f` | primary 400 |
| `--color-primary-500` | `#29bb8a` | primary 500 |
| `--color-primary-600` | `#22a077` | primary 600 |
| `--color-primary-700` | `#1b8060` | primary 700 |
| `--color-primary-800` | `#14604a` | primary 800 |
| `--color-primary-900` | `#0d4033` | primary 900 |
| `--color-primary-950` | `#07201c` | primary 950 |
| `--color-text` | `#212529` | text |
| `--color-muted` | `#888888` | muted |
| `--color-border` | `#cccccc` | border |
| `--color-surface` | `#ffffff` | surface |
| `--color-facebook` | `#3b5998` | facebook |
| `--color-twitter` | `#1da1f2` | twitter |
| `--color-google` | `#ea4335` | google |
| `--font-roboto` | `'Roboto', sans-serif` | font roboto |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SignupForm` | Renders sign-up heading | see fidelity note below |
| 2 | `Footer` | Renders Component Dock footer | see fidelity note below |

## Section-by-section fidelity

### `SignupForm`
The template SHALL display a "Sign Up" heading above the form.

### `Footer`
The template SHALL display a footer linking to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/signuplink/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signuplink/public/CNAME` = `signuplink.free.componentdock.com`
  and the package `homepage` = `https://signuplink.free.componentdock.com`.
