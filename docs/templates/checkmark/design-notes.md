# Checkmark — Design Notes

Reference: **Checkbox 07** — `https://colorlib.com/wp/template/checkbox-07/`  
Live preview: `https://preview.colorlib.com/theme/checkbox-07/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-07.jpg  
Shipped: https://checkmark.free.componentdock.com

Checkmark is a single-page UI-component demo template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/checkmark/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-violet` | `#7c3aed` | brand violet |
| `--color-brand-violet-light` | `#ede9fe` | brand violet light |
| `--color-brand-violet-dark` | `#5b21b6` | brand violet dark |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CheckboxShowcase` | Checkboxes have correct default states | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `CheckboxShowcase`
Two checkboxes SHALL be pre-checked by default: "Email notifications" and "Share activity with friends". All other checkboxes SHALL be unchecked.

### `Footer`
The template SHALL display a footer containing the template name "Checkmark" and a link to https://www.componentdock.com/ labeled "Component Dock" that opens in a new tab.

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
- **Provenance ban.** No file under `apps/checkmark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/checkmark/public/CNAME` = `checkmark.free.componentdock.com`
  and the package `homepage` = `https://checkmark.free.componentdock.com`.
