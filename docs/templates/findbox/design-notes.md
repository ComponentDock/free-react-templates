# Findbox — Design Notes

Reference: **Search Form Bar 11** — `https://colorlib.com/wp/template/search-form-bar-11/`  
Live preview: `https://preview.colorlib.com/theme/search-form-bar-11/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-11.jpg  
Shipped: https://findbox.free.componentdock.com

Findbox is a search form bar component with a navbar and footer. It recreates the ColorLib **Search Form Bar 11** design (https://colorlib.com/wp/template/search-form-bar-11/, preview: https://preview.colorlib.com/theme/bootstrap/search-form-bar-11/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens (`apps/findbox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4a90d9` | brand |
| `--color-brand-dark` | `#3a7bc8` | brand dark |

> The spec has no section-level requirements; the order below is read from `apps/findbox/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `ContentArea` | — | no dedicated spec block |
| 3 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — search · Search keyword · FindBox

### `ContentArea`
*anchors only* — Please click the search icon to toggle the search bar.

### `Footer`
*anchors only* — Component Dock

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
- **Provenance ban.** No file under `apps/findbox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/findbox/public/CNAME` = `findbox.free.componentdock.com`
  and the package `homepage` = `https://findbox.free.componentdock.com`.
