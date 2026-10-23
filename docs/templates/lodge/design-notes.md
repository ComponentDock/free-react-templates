# Lodge — Design Notes

Reference: **Hotel** — `https://colorlib.com/wp/template/hotel/`  
Live preview: `https://preview.colorlib.com/theme/hotel/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hotel-free-template.jpg  
Shipped: https://lodge.free.componentdock.com

Lodge is a single-page hotel landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Hotel" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**, **Taviraj**

## Design tokens (`apps/lodge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-lodge-900` | `#1a1a2e` | lodge 900 |
| `--color-lodge-800` | `#222240` | lodge 800 |
| `--color-lodge-700` | `#2d2d4a` | lodge 700 |
| `--color-lodge-600` | `#3d3d5c` | lodge 600 |
| `--color-lodge-500` | `#555577` | lodge 500 |
| `--color-lodge-400` | `#777799` | lodge 400 |
| `--color-lodge-300` | `#9999bb` | lodge 300 |
| `--color-lodge-200` | `#ccccdd` | lodge 200 |
| `--color-lodge-100` | `#e8e4df` | lodge 100 |
| `--color-lodge-50` | `#f5f0eb` | lodge 50 |
| `--color-gold-500` | `#d4a853` | gold 500 |
| `--color-gold-600` | `#c49a45` | gold 600 |
| `--color-gold-700` | `#b08a3a` | gold 700 |
| `--font-heading` | `'Taviraj', Georgia, serif` | font heading |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar navigation | see fidelity note below |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `RoomBooking` | — | no dedicated spec block |
| 4 | `Quote` | — | no dedicated spec block |
| 5 | `Facilities` | Facilities section displays correctly | see fidelity note below |
| 6 | `Guestbook` | Guestbook testimonials | see fidelity note below |
| 7 | `Instagram` | Instagram gallery | see fidelity note below |
| 8 | `Footer` | Footer contains Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL provide navigation links that scroll to the corresponding sections, with a dropdown for Facilities and a mobile-responsive menu.

### `Hero`
*anchors only* — We hope you&apos;ll enjoy

### `RoomBooking`
*anchors only* — Adults · Children · Rooms

### `Quote`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Facilities`
The facilities section SHALL display facility cards with title, description, and CTA button in an alternating image-text layout.

### `Guestbook`
The guestbook section SHALL display tabbed testimonials with star ratings, dates, author photos, and quotes.

### `Instagram`
The Instagram section SHALL display a 4-column photo grid linking to Instagram.

### `Footer`
The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock", plus quick links, newsletter, and copyright.

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
- **Provenance ban.** No file under `apps/lodge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lodge/public/CNAME` = `lodge.free.componentdock.com`
  and the package `homepage` = `https://lodge.free.componentdock.com`.
