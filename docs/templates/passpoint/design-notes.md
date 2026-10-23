# Passpoint — Design Notes

Reference: **Login Form 09** — `https://colorlib.com/wp/template/login-form-09/`  
Live preview: `https://preview.colorlib.com/theme/login-form-09/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-09.jpg  
Shipped: https://passpoint.free.componentdock.com

Recreation of ColorLib "Login Form 09" (`login-form-09`). Preview: https://preview.colorlib.com/theme/login-form-09/ (404 as of 2026-09-23 — design tokens extracted from source CSS at GitHub LoginRadius/awesome-login-pages).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/passpoint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#f8fafb` | page |
| `--color-ink` | `#333333` | ink |
| `--color-caption` | `#b3b3b3` | caption |
| `--color-muted` | `#888888` | muted |
| `--color-input-border` | `#cccccc` | input border |
| `--color-btn-primary` | `#007bff` | btn primary |
| `--color-btn-primary-hover` | `#0069d9` | btn primary hover |
| `--color-checkbox-accent` | `#38d39f` | checkbox accent |
| `--color-checkbox-unchecked` | `#e6e6e6` | checkbox unchecked |
| `--color-fb` | `#3b5998` | fb |
| `--color-twitter` | `#1da1f2` | twitter |
| `--color-google` | `#ea4335` | google |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginForm` | Login button | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |
| 3 | `Illustration` | Illustration | see fidelity note below |

## Section-by-section fidelity

### `LoginForm`
The form SHALL include a full-width "Log In" button with blue background, white text, and default Bootstrap border-radius.

### `Footer`
The template SHALL include a footer linking to Component Dock.

### `Illustration`
The right column SHALL display a decorative illustration using a placeholder image.

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
- **Provenance ban.** No file under `apps/passpoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/passpoint/public/CNAME` = `passpoint.free.componentdock.com`
  and the package `homepage` = `https://passpoint.free.componentdock.com`.
