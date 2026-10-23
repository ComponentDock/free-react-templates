# Journeybar — Design Notes

Reference: **Colorlib Search 17** — `https://colorlib.com/wp/template/colorlib-search-17/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-search-17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-17.jpg  
Shipped: https://journeybar.free.componentdock.com

Journeybar is a travel search-bar widget template: a photographic hero headline over a tabbed multi-service search bar that switches between hotel, car and flight searches and submits the selected criteria.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/journeybar/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-amber-50` | `#fffbeb` | JourneyBar brand palette — warm orange/amber tones inspired by travel. |
| `--color-amber-100` | `#fef3c7` | amber 100 |
| `--color-amber-200` | `#fde68a` | amber 200 |
| `--color-amber-300` | `#fcd34d` | amber 300 |
| `--color-amber-400` | `#fbbf24` | amber 400 |
| `--color-amber-500` | `#f59e0b` | amber 500 |
| `--color-amber-600` | `#d97706` | amber 600 |
| `--color-amber-700` | `#b45309` | amber 700 |
| `--color-amber-800` | `#92400e` | amber 800 |
| `--color-amber-900` | `#78350f` | amber 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `JourneyBar` | — | no dedicated spec block |
| 2 | `Footer` | Component Dock Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `JourneyBar`
*anchors only* — Destination · Check-in date · Check-out date · Number of guests · Pick-up location · Pick-up date

### `Footer`
The footer SHALL link `https://www.componentdock.com/`.

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
- **Provenance ban.** No file under `apps/journeybar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/journeybar/public/CNAME` = `journeybar.free.componentdock.com`
  and the package `homepage` = `https://journeybar.free.componentdock.com`.
