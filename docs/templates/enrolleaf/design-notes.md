# Enrolleaf — Design Notes

Reference: **Signup Form 01** — `https://colorlib.com/wp/template/signup-form-01/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-01/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-01.jpg  
Shipped: https://enrolleaf.free.componentdock.com

A full-viewport split-screen signup form with a background image on one side and a clean registration form on the other. Recreation of the ColorLib "Signup Form V01" template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700**

## Design tokens (`apps/enrolleaf/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#007bff` | Brand palette: Bootstrap-inspired blue. |
| `--color-primary-hover` | `#0069d9` | primary hover |
| `--color-body-text` | `#212529` | Text. |
| `--color-heading` | `#212529` | heading |
| `--color-placeholder` | `#6c757d` | placeholder |
| `--color-caption` | `#888888` | caption |
| `--color-link` | `#007bff` | link |
| `--color-link-hover` | `#0056b3` | link hover |
| `--color-input-border` | `#ced4da` | Form controls. |
| `--color-input-focus` | `#80bdff` | input focus |
| `--color-checkbox-unchecked` | `#e6e6e6` | Checkbox. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Fonts: Roboto (matches original). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SignupForm` | Signup form heading | see fidelity note below |
| 2 | `Footer` | Form validation | see fidelity note below |

## Section-by-section fidelity

### `SignupForm`
The form SHALL display a "Sign Up" heading.

### `Footer`
The form SHALL prevent submission when required fields are empty.

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
- **Provenance ban.** No file under `apps/enrolleaf/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/enrolleaf/public/CNAME` = `enrolleaf.free.componentdock.com`
  and the package `homepage` = `https://enrolleaf.free.componentdock.com`.
