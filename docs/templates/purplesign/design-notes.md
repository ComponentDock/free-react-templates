# Purplesign — Design Notes

Reference: **Login Form 12** — `https://colorlib.com/wp/template/login-form-12/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/login-form-12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-12-2.jpg  
Shipped: https://purplesign.free.componentdock.com

A modern transparent login form template with social sign-in options, built on a vibrant purple background. Recreation of ColorLib's "Login Form V12".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700**

## Design tokens (`apps/purplesign/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-purple` | `#c859ff` | Brand purple — full-page background (#c859ff). |
| `--color-brand-yellow` | `#f6f078` | Brand yellow — buttons, checkbox, links (#f6f078). |
| `--color-text` | `rgba(255, 255, 255, 0.9)` | Text — white with slight transparency. |
| `--color-placeholder` | `rgba(255, 255, 255, 0.8)` | Input placeholder — semi-transparent white. |
| `--color-input-border` | `rgba(255, 255, 255, 0.2)` | Input border — subtle white. |
| `--color-input-focus` | `rgba(255, 255, 255, 0.4)` | Input focus border — slightly brighter white. |
| `--color-social-border` | `rgba(255, 255, 255, 0.4)` | Social button border. |
| `--font-sans` | `'Lato', Arial, sans-serif` | Font: Lato via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `LoginCard` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `LoginCard`
*anchors only* — Sign In · Remember Me · Forgot Password · Or Sign In With

### `Footer`
*anchors only* — More templates at Component Dock

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
- **Provenance ban.** No file under `apps/purplesign/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/purplesign/public/CNAME` = `purplesign.free.componentdock.com`
  and the package `homepage` = `https://purplesign.free.componentdock.com`.
