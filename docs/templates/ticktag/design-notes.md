# Ticktag — Design Notes

Reference: **Checkbox 03** — `https://colorlib.com/wp/template/checkbox-03/`  
Live preview: `https://preview.colorlib.com/theme/checkbox-03/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-03.jpg  
Shipped: https://ticktag.free.componentdock.com

Ticktag is a single-page UI-component demo template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/ticktag/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-amber` | `#fec771` | brand amber |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `DemoSection` | Demo section with heading | see fidelity note below |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `DemoSection`
The system SHALL render a single centered demo section with a large black heading "Checkbox #03" on a white background.

### `Footer`
*anchors only* — Ticktag · Tag-style checkbox UI components for React. · Component Dock

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
- **Provenance ban.** No file under `apps/ticktag/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ticktag/public/CNAME` = `ticktag.free.componentdock.com`
  and the package `homepage` = `https://ticktag.free.componentdock.com`.
