# Knob — Design Notes

Reference: **Checkbox 18** — `https://colorlib.com/wp/template/checkbox-18/`  
Live preview: `https://preview.colorlib.com/theme/checkbox-18/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-18.jpg  
Shipped: https://knob.free.componentdock.com

A toggle buttons template showcasing smooth, pill-shaped toggle switches in various states (on/off, disabled, color variants). Clean centered layout with a heading, subtitle, and a vertical stack of toggle controls.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/knob/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4f46e5` | brand |
| `--color-brand-light` | `#818cf8` | brand light |
| `--color-track-on` | `#4f46e5` | track on |
| `--color-track-off` | `#d1d5db` | track off |
| `--color-knob` | `#ffffff` | knob |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ToggleShowcase` | Toggle showcase section | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `ToggleShowcase`
The template SHALL display a showcase section with a heading, subtitle, and a vertical stack of 4 toggle switches in different states.

### `Footer`
The Footer component SHALL display the template name and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/knob/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/knob/public/CNAME` = `knob.free.componentdock.com`
  and the package `homepage` = `https://knob.free.componentdock.com`.
