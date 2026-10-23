# Credix — Design Notes

Reference: **Credit** — `https://colorlib.com/wp/template/credit/`  
Live preview: `https://preview.colorlib.com/theme/credit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/credit-free-template.jpg  
Shipped: https://credix.free.componentdock.com

A loan and credit company landing page with navy blue and golden accent, featuring a hero section, feature highlights, skill indicators. It also includes services grid, contact/news section, newsletter signup, and a 4-column footer. Recreation of ColorLib "Credit" (https://colorlib.com/wp/template/credit/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**, **Open Sans**

## Design tokens (`apps/credix/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-navy-50` | `#f1f7f9` | navy 50 |
| `--color-navy-100` | `#e1eef4` | navy 100 |
| `--color-navy-200` | `#afbace` | navy 200 |
| `--color-navy-300` | `#636b75` | navy 300 |
| `--color-navy-400` | `#3c4450` | navy 400 |
| `--color-navy-500` | `#003679` | navy 500 |
| `--color-navy-600` | `#002d66` | navy 600 |
| `--color-navy-700` | `#021c3c` | navy 700 |
| `--color-navy-800` | `#011329` | navy 800 |
| `--color-navy-900` | `#010a17` | navy 900 |
| `--color-gold-50` | `#fff8e6` | gold 50 |
| `--color-gold-100` | `#ffefbf` | gold 100 |
| `--color-gold-200` | `#ffe599` | gold 200 |
| `--color-gold-300` | `#ffdb73` | gold 300 |
| `--color-gold-400` | `#ffbb38` | gold 400 |
| `--color-gold-500` | `#f5a623` | gold 500 |
| `--color-gold-600` | `#cc8a1a` | gold 600 |
| `--color-gold-700` | `#996713` | gold 700 |
| `--color-gold-800` | `#66440d` | gold 800 |
| `--color-gold-900` | `#332206` | gold 900 |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with mobile toggle | see fidelity note below |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Features` | Features section with loan information | see fidelity note below |
| 4 | `Stats` | Stats section with skill indicators | see fidelity note below |
| 5 | `CtaBanner` | — | no dedicated spec block |
| 6 | `Services` | Services section with 6 service cards | see fidelity note below |
| 7 | `ContactNews` | — | no dedicated spec block |
| 8 | `Newsletter` | Newsletter section with email signup | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL display navigation links and support a mobile toggle.

### `Hero`
*anchors only* — Discover

### `Features`
The features section SHALL display a heading card with "Our Loans" title and three image cards highlighting loan benefits.

### `Stats`
The stats section SHALL display three circular progress indicators showing Energy (90%), Power (75%), and Resource (97%).

### `CtaBanner`
*anchors only* — Are you in need for a loan? Get in touch with us. · Read More

### `Services`
The services section SHALL display 6 service cards in a 3-column grid, each with an icon, title, and description.

### `ContactNews`
*anchors only* — Get in touch · Franklin, LA 70538 · The news

### `Newsletter`
The newsletter section SHALL display an email input field and a subscribe button.

### `Footer`
The footer SHALL display 4 widget columns and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/credix/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/credix/public/CNAME` = `credix.free.componentdock.com`
  and the package `homepage` = `https://credix.free.componentdock.com`.
