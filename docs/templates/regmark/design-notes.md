# Regmark — Design Notes

Reference: **Colorlib Regform 10** — `https://colorlib.com/wp/template/colorlib-regform-10/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-10.jpg  
Shipped: https://regmark.free.componentdock.com

A clean, centered registration form with user type selection, built with React 19, Tailwind CSS 4, and TypeScript. Recreates ColorLib Regform 10 under a different name. **Source:** https://preview.colorlib.com/theme/colorlib-regform-10/ **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-10.jpg

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/regmark/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#5b9bd5` | Regmark brand palette — blue accent (#5b9bd5) from the original design. |
| `--color-bg` | `#e8ecf1` | Light blue-gray page background. |
| `--color-card` | `#ffffff` | White card. |
| `--color-muted` | `#9ca3af` | Placeholder / muted text. |
| `--color-ink` | `#1f2937` | Heading / body text. |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `RegistrationForm` | Registration Form Fields | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Regmark · Home

### `RegistrationForm`
The form SHALL include Full name, Email, and Password fields with bottom-border styling.

### `Footer`
The footer SHALL link to Component Dock.

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
- **Provenance ban.** No file under `apps/regmark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regmark/public/CNAME` = `regmark.free.componentdock.com`
  and the package `homepage` = `https://regmark.free.componentdock.com`.
