# Prelude — Design Notes

Reference: **01 Comming Soon** — `https://colorlib.com/wp/template/01-comming-soon/`  
Live preview: `https://preview.colorlib.com/theme/01-comming-soon/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-16.jpg  
Shipped: https://prelude.free.componentdock.com

A split-screen coming soon page template — dark left panel with countdown timer and email signup, right panel with background image. The preview at https://preview.colorlib.com/theme/01-comming-soon/ was unavailable; design based on the ColorLib page description ("split-screen design") and the screenshot. Design tokens:

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;600;700**

## Design tokens (`apps/prelude/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SplitHero` | Split-screen hero layout | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `SplitHero`
The template SHALL render a full-viewport-height split-screen layout with a dark content panel on the left (50% width) and a background image on the right (50% width).

### `Footer`
The template SHALL display a footer linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/prelude/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/prelude/public/CNAME` = `prelude.free.componentdock.com`
  and the package `homepage` = `https://prelude.free.componentdock.com`.
