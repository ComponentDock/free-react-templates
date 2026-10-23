# Entrivy — Design Notes

Reference: **Login Form 07** — `https://colorlib.com/wp/template/login-form-07/`  
Live preview: `https://preview.colorlib.com/theme/login-form-07/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-07.jpg  
Shipped: https://entrivy.free.componentdock.com

Recreate the ColorLib Login Form 07 template as a React 19 + Tailwind CSS 4 + TypeScript application. The template features a split-screen login form with a decorative illustration on the left and a styled login form with social login buttons on the right.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/entrivy/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6c63ff` | Brand accent — purple (#6c63ff), used for primary button and checkbox. |
| `--color-brand-hover` | `#5a52d5` | Brand hover — deeper purple (#5a52d5). |
| `--color-page` | `#f8fafb` | Page background — light gray-blue (#f8fafb). |
| `--color-field` | `#edf2f5` | Form field background — light gray (#edf2f5). |
| `--color-field-border` | `#e6edf1` | Field border — subtle gray (#e6edf1). |
| `--color-ink` | `#333333` | Text color — dark (#333333). |
| `--color-caption` | `#b3b3b3` | Subtitle / caption — medium gray (#b3b3b3). |
| `--color-link` | `#888888` | Link / forgot password — medium gray (#888888). |
| `--color-fb` | `#3b5998` | Facebook brand blue (#3b5998). |
| `--color-twitter` | `#1da1f2` | Twitter brand blue (#1da1f2). |
| `--color-google` | `#ea4335` | Google brand red (#ea4335). |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Font: Roboto via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Illustration` | — | no dedicated spec block |
| 2 | `LoginForm` | Login form | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Illustration`
*anchors only* — Decorative illustration

### `LoginForm`
The template SHALL display a login form with username, password, remember me checkbox, forgot password link, and a submit button.

### `Footer`
The template SHALL display a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/entrivy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/entrivy/public/CNAME` = `entrivy.free.componentdock.com`
  and the package `homepage` = `https://entrivy.free.componentdock.com`.
