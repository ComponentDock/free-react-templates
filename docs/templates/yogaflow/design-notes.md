# Yogaflow — Design Notes

Reference: **Colorlib Regform 22** — `https://colorlib.com/wp/template/colorlib-regform-22/`  
Live preview: `https://colorlib.com/etc/regform/colorlib-regform-22/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-22.jpg  
Shipped: https://yogaflow.free.componentdock.com

A free yoga class registration form template that suits other sports and activities too. Recreation of ColorLib **Regform 22**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **El Messiri**, **El Messiri:wght@600**, **Montserrat**

## Design tokens (`apps/yogaflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#84cde1` | Brand palette from the original registration form stylesheet. |
| `--color-brand-hover` | `#17c8f8` | brand hover |
| `--color-ink` | `#333` | Body text: #666, headings: #333 — from the original stylesheet. |
| `--color-body` | `#666` | body |
| `--color-border` | `#e6e6e6` | Input borders and focus ring from the original stylesheet. |
| `--color-focus` | `#f4d5cc` | focus |
| `--color-placeholder` | `#999` | Placeholder color from the original stylesheet. |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Fonts: Montserrat (body/inputs) + El Messiri (heading) — via Google Fonts. |
| `--font-heading` | `'El Messiri', ui-sans-serif, system-ui, sans-serif` | font heading |

> The spec has no section-level requirements; the order below is read from `apps/yogaflow/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `RegistrationForm` | — | no dedicated spec block |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `RegistrationForm`
*anchors only* — Make An Appointment · Choose Your Class · Book Now

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
- **Provenance ban.** No file under `apps/yogaflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/yogaflow/public/CNAME` = `yogaflow.free.componentdock.com`
  and the package `homepage` = `https://yogaflow.free.componentdock.com`.
