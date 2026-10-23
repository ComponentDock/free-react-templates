# Sartorial — Design Notes

Reference: **Menztailor** — `https://colorlib.com/wp/template/menztailor/`  
Live preview: `https://preview.colorlib.com/theme/menztailor/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/menztailor-free-template.jpg  
Shipped: https://sartorial.free.componentdock.com

Sartorial is a men's tailor shop template with a navbar, hero, clients, services, history, testimonials, visit us and footer. It recreates the ColorLib **Menztailor** design (https://colorlib.com/wp/template/menztailor/, preview: https://preview.colorlib.com/theme/menztailor/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Great Vibes**, **Josefin Sans**, **Montserrat**

## Design tokens (`apps/sartorial/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c6a16e` | brand |
| `--color-brand-dark` | `#b99562` | brand dark |
| `--color-ink` | `#0b1c39` | Ink — dark headings (#0b1c39 from the original). |
| `--color-ink-dark` | `#071224` | ink dark |
| `--color-midnight` | `#0b1416` | Midnight — dark body background (#0b1416 from the original). |
| `--color-paper` | `#ffffff` | Soapstone — light section background. |
| `--color-mist` | `#96989a` | Mist — muted body text (#96989a from the original). |
| `--color-primary-50` | `#faf6f0` | primary 50 |
| `--color-primary-100` | `#f3e8d6` | primary 100 |
| `--color-primary-200` | `#e8d2b0` | primary 200 |
| `--color-primary-300` | `#dbb885` | primary 300 |
| `--color-primary-400` | `#d0a164` | primary 400 |
| `--color-primary-500` | `#c6a16e` | primary 500 |
| `--color-primary-600` | `#b99562` | primary 600 |
| `--color-primary-700` | `#9a7a50` | primary 700 |
| `--color-primary-800` | `#7d6240` | primary 800 |
| `--color-primary-900` | `#665035` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-script` | `'Great Vibes', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Clients` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `History` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `VisitUs` | — | no dedicated spec block |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Search · Wishlist · Cart · Toggle menu

### `Hero`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Clients`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Services`
*anchors only* — What we offer

### `History`
*anchors only* — Play video · Our History · The Art of Tailoring · Learn More

### `Testimonials`
*anchors only* — Client Feedback · What Our Clients Say

### `VisitUs`
*anchors only* — Visit Us · Visit Our Tailor · Mon – Thu: 10:00 am – 01:00 am · Fri – Sun: 10:00 am – 02:00 am

### `Footer`
*anchors only* — Facebook · Instagram · Twitter

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
- **Provenance ban.** No file under `apps/sartorial/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sartorial/public/CNAME` = `sartorial.free.componentdock.com`
  and the package `homepage` = `https://sartorial.free.componentdock.com`.
