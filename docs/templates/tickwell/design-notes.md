# Tickwell — Design Notes

Reference: **Checkbox 05** — `https://colorlib.com/wp/template/checkbox-05/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/checkbox-05/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-05.jpg  
Shipped: https://tickwell.free.componentdock.com

Tickwell is a modern animated checkmark checkbox UI component template. It provides a clean, interactive checkbox experience with smooth SVG stroke-dashoffset animation for the checkmark drawing effect, indigo brand accent color, and a minimal centered layout.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter:wght@300;400;500;600;700**

## Design tokens (`apps/tickwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-indigo` | `#6366f1` | brand indigo |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CheckboxShowcase` | Animated Checkbox Component | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock | see fidelity note below |

## Section-by-section fidelity

### `CheckboxShowcase`
Tickwell SHALL render individual checkbox items with an animated SVG checkmark that draws in when checked and retracts when unchecked.

### `Footer`
Tickwell SHALL include a footer with the template name and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/tickwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tickwell/public/CNAME` = `tickwell.free.componentdock.com`
  and the package `homepage` = `https://tickwell.free.componentdock.com`.
