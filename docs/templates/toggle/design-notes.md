# Toggle — Design Notes

Reference: **Checkbox 08** — `https://colorlib.com/wp/template/checkbox-08/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/checkbox-08/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-08.jpg  
Shipped: https://toggle.free.componentdock.com

Toggle is a single-page UI-component demo template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/toggle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-amber` | `#f1bc31` | brand amber |
| `--color-brand-amber-light` | `#f6d379` | brand amber light |
| `--color-toggle-track` | `#e6e6e6` | toggle track |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `DemoSection` | — | no dedicated spec block |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `DemoSection`
*anchors only* — Day/Night toggle 1 · Day/Night toggle 2 · Toggle #08 · Day &amp; Night Switch Toggle

### `Footer`
The page SHALL include a footer with a Component Dock link.

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
- **Provenance ban.** No file under `apps/toggle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/toggle/public/CNAME` = `toggle.free.componentdock.com`
  and the package `homepage` = `https://toggle.free.componentdock.com`.
