# Regwell — Design Notes

Reference: **Colorlib Regform 12** — `https://colorlib.com/wp/template/colorlib-regform-12/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-12.jpg  
Shipped: https://regwell.free.componentdock.com

Regwell is an education appointment form template with a form card. It recreates the ColorLib **Colorlib Regform 12** design (https://colorlib.com/wp/template/colorlib-regform-12/, preview: https://colorlib.com/etc/regform/colorlib-regform-12/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**

## Design tokens (`apps/regwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4e5b87` | brand |
| `--color-brand-dark` | `#3d4a6e` | brand dark |
| `--color-card-bg` | `#ffffff` | card bg |
| `--color-label` | `#999999` | label |
| `--color-border` | `#dddddd` | border |
| `--color-heading` | `#222222` | heading |
| `--font-sans` | `'Inter', system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Background` | — | no dedicated spec block |
| 2 | `AppointmentForm` | — | no dedicated spec block |
| 3 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Background`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `AppointmentForm`
*anchors only* — Education appointment form · Title · Your Name · Email · Phone number · Course Type

### `Footer`
*anchors only* — Component Dock

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
- **Provenance ban.** No file under `apps/regwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regwell/public/CNAME` = `regwell.free.componentdock.com`
  and the package `homepage` = `https://regwell.free.componentdock.com`.
