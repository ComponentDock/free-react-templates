# Searchpea — Design Notes

Reference: **Colorlib Search 23** — `https://colorlib.com/wp/template/colorlib-search-23/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-23/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-23.jpg  
Shipped: https://searchpea.free.componentdock.com

Recreation of ColorLib "Colorlib Search Form V23" — a pill-shaped search widget with a green-tinted input area, dark green SEARCH button, and a subtle hint text below. Features a floating card design with rounded corners and box shadow, positioned in the upper portion of a full-viewport background.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500**

## Design tokens (`apps/searchpea/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-searchpea-mint` | `#d9f1e3` | searchpea mint |
| `--color-searchpea-green` | `#00ad5f` | searchpea green |
| `--color-searchpea-green-dark` | `#009451` | searchpea green dark |
| `--color-searchpea-hint` | `#cccccc` | searchpea hint |
| `--color-searchpea-icon` | `#222222` | searchpea icon |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchBar` | Centered pill-shaped search card | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `SearchBar`
The page SHALL display a pill-shaped floating search card centered horizontally, positioned approximately 24vh from the top, with a max-width of approximately 790px, rounded corners (~34px radius), and a soft drop shadow.

### `Footer`
The page SHALL display a footer with a link to https://www.componentdock.com/ labeled "Component Dock".

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
- **Provenance ban.** No file under `apps/searchpea/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchpea/public/CNAME` = `searchpea.free.componentdock.com`
  and the package `homepage` = `https://searchpea.free.componentdock.com`.
