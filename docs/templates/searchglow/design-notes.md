# Searchglow — Design Notes

Reference: **Colorlib Search 22** — `https://colorlib.com/wp/template/colorlib-search-22/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-22/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-22.jpg  
Shipped: https://searchglow.free.componentdock.com

Recreation of ColorLib "Colorlib Search Form V22" — a standalone search bar widget overlaid on a photographic background image. Features a single input field with a large magnifying glass icon on the left, transparent background, white text, and a semi-transparent white bottom border that brightens on focus.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600**

## Design tokens (`apps/searchglow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-searchglow-bg` | `#1a1a2e` | searchglow bg |
| `--color-searchglow-border` | `rgba(255, 255, 255, 0.5)` | searchglow border |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchInput` | Centered search form | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `SearchInput`
The search form SHALL be centered vertically and horizontally on the page with a max-width of approximately 390px.

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
- **Provenance ban.** No file under `apps/searchglow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchglow/public/CNAME` = `searchglow.free.componentdock.com`
  and the package `homepage` = `https://searchglow.free.componentdock.com`.
