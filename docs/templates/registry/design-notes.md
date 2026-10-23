# Registry — Design Notes

Reference: **Colorlib Regform 18** — `https://colorlib.com/wp/template/colorlib-regform-18/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-18/`  
Screenshot:   
Shipped: https://registry.free.componentdock.com

Registry is a free registration form template recreating ColorLib "Colorlib Reg Form V18" (https://colorlib.com/wp/template/colorlib-regform-18/). It features a full-viewport background image with a centered card containing a registration form.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Mulish**, **Mulish:wght@400;600;700**

## Design tokens (`apps/registry/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ae3c33` | brand |
| `--color-brand-dark` | `#f11a09` | brand dark |
| `--color-card-bg` | `#ffffff` | card bg |
| `--color-label` | `#999999` | label |
| `--color-border` | `#cccccc` | border |
| `--color-heading` | `#333333` | heading |
| `--color-body` | `#666666` | body |
| `--color-bg` | `#e8e8e8` | bg |
| `--font-sans` | `'Mulish', system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Background` | — | no dedicated spec block |
| 2 | `RegistrationForm` | Registration form heading | see fidelity note below |
| 3 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Background`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `RegistrationForm`
The card SHALL display the heading "REGISTRATION FORM" in bold uppercase text.

### `Footer`
The page SHALL display a footer that links to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/registry/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/registry/public/CNAME` = `registry.free.componentdock.com`
  and the package `homepage` = `https://registry.free.componentdock.com`.
