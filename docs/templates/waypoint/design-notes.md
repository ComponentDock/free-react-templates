# Waypoint — Design Notes

Reference: **Colorlib Search 12** — `https://colorlib.com/wp/template/colorlib-search-12/`  
Live preview: `https://colorlib.com/etc/searchf/colorlib-search-12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-12.jpg  
Shipped: https://waypoint.free.componentdock.com

Waypoint is a hotel and travel search form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@400;700;900**, **Poppins**

## Design tokens (`apps/waypoint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-waypoint-navy` | `#002c71` | waypoint navy |
| `--color-waypoint-orange` | `#ff8300` | waypoint orange |
| `--color-waypoint-orange-hover` | `#e67600` | waypoint orange hover |
| `--color-waypoint-text` | `#333333` | waypoint text |
| `--color-waypoint-muted` | `#555555` | waypoint muted |
| `--color-waypoint-placeholder` | `#808080` | waypoint placeholder |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-body` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchForm` | Search form with gradient overlay | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `SearchForm`
The template SHALL display a centered search form with a blue-to-cyan gradient background, 10px border-radius, and padding matching the original design.

### `Footer`
The template SHALL display a footer with the Component Dock brand link (https://www.componentdock.com/) and copyright text.

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
- **Provenance ban.** No file under `apps/waypoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/waypoint/public/CNAME` = `waypoint.free.componentdock.com`
  and the package `homepage` = `https://waypoint.free.componentdock.com`.
