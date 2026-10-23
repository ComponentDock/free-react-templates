# Joinflow — Design Notes

Reference: **Signup Form 10** — `https://colorlib.com/wp/template/signup-form-10/`  
Live preview: `https://preview.colorlib.com/theme/signup-form-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-10.jpg  
Shipped: https://joinflow.free.componentdock.com

Joinflow is a single-page signup/registration form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/joinflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#38d39f` | Brand palette — teal green accent. |
| `--color-brand-hover` | `#29bb8a` | brand hover |
| `--color-brand-focus` | `rgba(56, 211, 159, 0.25)` | brand focus |
| `--color-facebook` | `#3b5998` | Social button colors. |
| `--color-facebook-hover` | `#344e86` | facebook hover |
| `--color-twitter` | `#1da1f2` | twitter |
| `--color-twitter-hover` | `#0d95e8` | twitter hover |
| `--color-google` | `#ea4335` | google |
| `--color-google-hover` | `#e82e1e` | google hover |
| `--color-caption` | `#888` | Caption / link grey. |
| `--color-checkbox-idle` | `#e6e6e6` | Checkbox unchecked indicator. |
| `--color-checkbox-hover` | `#ccc` | checkbox hover |
| `--color-muted` | `#b3b3b3` | Muted text. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto — Google Fonts loaded in index.html (weight 300 body, 400 labels/heading). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SocialLogin` | Left column — social login section | see fidelity note below |
| 2 | `RegisterForm` | Register submit button | see fidelity note below |
| 3 | `Footer` | Component Dock footer | see fidelity note below |

## Section-by-section fidelity

### `SocialLogin`
The left column SHALL display the text "Or register with" followed by three full-width social login buttons stacked vertically: Facebook, Twitter, and Google. Each button SHALL display the platform name and be colored with the platform's brand color.

### `RegisterForm`
A "Register" button SHALL be visible as the form's submit button, styled as a pill shape (`border-radius: 30px`, height 54px) with a teal/green primary background (`#38d39f`) and white text.

### `Footer`
The template SHALL include a footer with a link to https://www.componentdock.com/ (branded "Component Dock").

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
- **Provenance ban.** No file under `apps/joinflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/joinflow/public/CNAME` = `joinflow.free.componentdock.com`
  and the package `homepage` = `https://joinflow.free.componentdock.com`.
