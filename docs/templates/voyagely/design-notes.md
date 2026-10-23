# Voyagely — Design Notes

Reference: **Colorlib Regform 11** — `https://colorlib.com/wp/template/colorlib-regform-11/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-11/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-11.jpg  
Shipped: https://voyagely.free.componentdock.com

Voyagely is a single-page travel-booking form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/voyagely/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f8ba0f` | brand |
| `--color-brand-hover` | `#ce9906` | Brand hover — the source .submit:hover background (#ce9906). |
| `--color-panel` | `rgba(11, 13, 24, 0.6)` | panel |
| `--color-ink` | `#222` | Ink — input text color (#222). |
| `--color-muted` | `#999` | muted |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `VoyageForm` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `VoyageForm`
*anchors only* — Destination · From · Quantity · Increase quantity · Decrease quantity · status

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
- **Provenance ban.** No file under `apps/voyagely/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/voyagely/public/CNAME` = `voyagely.free.componentdock.com`
  and the package `homepage` = `https://voyagely.free.componentdock.com`.
