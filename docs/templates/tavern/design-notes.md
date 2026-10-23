# Tavern — Design Notes

Reference: **Eatery** — `https://colorlib.com/wp/template/eatery/`  
Live preview: `https://preview.colorlib.com/theme/eatery/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/eatery-free-template.jpg  
Shipped: https://tavern.free.componentdock.com

Tavern is a restaurant landing template with a navbar, hero, feature cards, special dishes, our menu, testimonials, blog and footer. It recreates the ColorLib **Eatery** design (https://colorlib.com/wp/template/eatery/, preview: https://preview.colorlib.com/theme/eatery/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**

## Design tokens (`apps/tavern/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-flame-50` | `#fef2f1` | Tavern brand palette — recreated from ColorLib Eatery design (red #cf1d16). |
| `--color-flame-100` | `#fde3e1` | flame 100 |
| `--color-flame-200` | `#fccbc7` | flame 200 |
| `--color-flame-300` | `#f9a69f` | flame 300 |
| `--color-flame-400` | `#f3756a` | flame 400 |
| `--color-flame-500` | `#e9483e` | flame 500 |
| `--color-flame-600` | `#cf1d16` | flame 600 |
| `--color-flame-700` | `#ae1812` | flame 700 |
| `--color-flame-800` | `#8f1712` | flame 800 |
| `--color-flame-900` | `#781915` | flame 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Open Sans — the original template's typeface (Google Fonts via index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Features` | — | no dedicated spec block |
| 4 | `SpecialDishes` | — | no dedicated spec block |
| 5 | `OurMenu` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `Blog` | — | no dedicated spec block |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Tavern

### `Hero`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Features`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `SpecialDishes`
*anchors only* — Special Dishes

### `OurMenu`
*anchors only* — Our Menu

### `Testimonials`
*anchors only* — Testimonial

### `Blog`
*anchors only* — Blog · Read More

### `Footer`
*anchors only* — Email for newsletter · Subscribe · Subscribe Newsletter · Get the latest updates on our dishes and events delivered to your inbox. · About Us · Opening Hours

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
- **Provenance ban.** No file under `apps/tavern/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tavern/public/CNAME` = `tavern.free.componentdock.com`
  and the package `homepage` = `https://tavern.free.componentdock.com`.
