# Warp — Design Notes

Reference: **Checkbox 20** — `https://colorlib.com/wp/template/checkbox-20/`  
Live preview: `https://preview.colorlib.com/theme/checkbox-20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-20.jpg  
Shipped: https://warp.free.componentdock.com

Warp is a single-page UI-component demo template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/warp/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent-green` | `#4cd964` | accent green |
| `--color-track-border` | `#ccc` | track border |
| `--color-track-dot` | `#ccc` | track dot |
| `--color-caption-grey` | `#6c757d` | caption grey |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ToggleShowcase` | Four-state toggle list | see fidelity note below |
| 2 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ToggleShowcase`
The system SHALL render four stacked codrops-style teleport toggle switches demonstrating every state: checked, unchecked, disabled, and disabled-and-checked — each with its caption and an "Off … On" label row.

### `Footer`
*anchors only* — Warp · Teleport Toggle Switch Demo · Component Dock

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
- **Provenance ban.** No file under `apps/warp/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/warp/public/CNAME` = `warp.free.componentdock.com`
  and the package `homepage` = `https://warp.free.componentdock.com`.
