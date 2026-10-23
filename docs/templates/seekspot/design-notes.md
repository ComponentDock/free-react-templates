# Seekspot — Design Notes

Reference: **Search Form Bar 10** — `https://colorlib.com/wp/template/search-form-bar-10/`  
Live preview: `https://preview.colorlib.com/theme/search-form-bar-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-10.jpg  
Shipped: https://seekspot.free.componentdock.com

Recreation of ColorLib "Search Form Bar 10" — a standalone search form bar widget. Features a centered title heading and a pill-shaped search input with a soft pink/lavender background, paired with a circular pink/magenta button containing an "X" (clear/close) icon.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700**

## Design tokens (`apps/seekspot/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c96eb5` | brand |
| `--color-brand-light` | `#dfb8e0` | brand light |
| `--color-brand-dark` | `#b55ea1` | brand dark |
| `--font-sans` | `'Montserrat', sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `SearchBar` | Pill-shaped search input | see fidelity note below |
| 2 | `Footer` | Component Dock footer | see fidelity note below |

## Section-by-section fidelity

### `SearchBar`
The search form SHALL contain a pill-shaped input container with a soft pink/lavender background.

### `Footer`
Every template SHALL include a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/seekspot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seekspot/public/CNAME` = `seekspot.free.componentdock.com`
  and the package `homepage` = `https://seekspot.free.componentdock.com`.
