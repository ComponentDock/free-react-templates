# Accessgate — Design Notes

Reference: **Login Form V6** — `https://colorlib.com/wp/template/login-form-v6/`  
Live preview: `https://preview.colorlib.com/theme/login-form-v6/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v6.jpg  
Shipped: https://accessgate.free.componentdock.com

AccessGate is a single-page LOGIN FORM in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Login Form V6" free template (source: https://colorlib.com/wp/template/login-form-v6/, preview: https://preview.colorlib.com/theme/login-form-v6/), built under a DIFFERENT name (**AccessGate**), with the monorep…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto Condensed**, **Roboto Condensed:wght@300;400;700**

## Design tokens (`apps/accessgate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-text` | `#000000` | text |
| `--color-border` | `rgba(0, 0, 0, 0.2)` | border |
| `--font-sans` | `'Roboto Condensed', ui-sans-serif, system-ui, sans-serif` | Font: Roboto Condensed via Google Fonts. |
| `--font-heading` | `'Roboto Condensed', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The footer SHALL contain a link to Component Dock.

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
- **Provenance ban.** No file under `apps/accessgate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/accessgate/public/CNAME` = `accessgate.free.componentdock.com`
  and the package `homepage` = `https://accessgate.free.componentdock.com`.
