# Tickbox — Design Notes

Reference: **Checkbox 10** — `https://colorlib.com/wp/template/checkbox-10/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/checkbox-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-10.jpg  
Shipped: https://tickbox.free.componentdock.com

Tickbox is a single-page UI-component demo template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/tickbox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-indigo` | `#4f46e5` | brand indigo |
| `--color-brand-indigo-light` | `#818cf8` | brand indigo light |
| `--color-brand-indigo-dark` | `#3730a3` | brand indigo dark |
| `--color-text-dark` | `#333333` | text dark |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `DemoSection` | — | no dedicated spec block |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `DemoSection`
*anchors only* — Checkbox #10

### `Footer`
The app SHALL display a footer containing a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/tickbox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tickbox/public/CNAME` = `tickbox.free.componentdock.com`
  and the package `homepage` = `https://tickbox.free.componentdock.com`.
