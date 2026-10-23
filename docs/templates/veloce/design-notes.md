# Veloce — Design Notes

Reference: **Automotive** — `https://colorlib.com/wp/template/automotive/`  
Live preview: `https://preview.colorlib.com/theme/automotive/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/automotive-free-template.jpg  
Shipped: https://veloce.free.componentdock.com

Veloce is a free automotive service landing page template that recreates the ColorLib Automotive design (https://colorlib.com/wp/template/automotive/) under a new name. It provides a professional auto garage landing page with hero, services grid, product cards, testimonials, stats, and a news section.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Public Sans**, **Public Sans:wght@400;500;600;700;800;900**

## Design tokens (`apps/veloce/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0f0ff` | primary 50 |
| `--color-primary-100` | `#e0e0ff` | primary 100 |
| `--color-primary-200` | `#c4c4ff` | primary 200 |
| `--color-primary-300` | `#9e9eff` | primary 300 |
| `--color-primary-400` | `#5f67ff` | primary 400 |
| `--color-primary-500` | `#4a52e0` | primary 500 |
| `--color-primary-600` | `#3a40b8` | primary 600 |
| `--color-primary-700` | `#2d3190` | primary 700 |
| `--color-primary-800` | `#222568` | primary 800 |
| `--color-primary-900` | `#1a1c50` | primary 900 |
| `--color-smoke` | `#727171` | Muted copy (ColorLib #727171 / #353535). |
| `--color-ink` | `#111111` | ink |
| `--color-body` | `#353535` | body |
| `--color-mist` | `#f7f7f7` | mist |
| `--color-dark-bg` | `#25282c` | dark bg |
| `--font-sans` | `'Public Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Public Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Product cards show hover actions | see fidelity note below |
| 3 | `Services` | — | no dedicated spec block |
| 4 | `ChooseUs` | — | no dedicated spec block |
| 5 | `Products` | — | no dedicated spec block |
| 6 | `Testimonial` | Testimonial carousel navigates | see fidelity note below |
| 7 | `Stats` | — | no dedicated spec block |
| 8 | `LatestNews` | — | no dedicated spec block |
| 9 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — banner · Facebook · Twitter · Instagram · LinkedIn · Main navigation

### `Hero`
Each product card SHALL display heart, eye, and exchange icon buttons on hover.

### `Services`
*anchors only* — What We Do? · Professional automotive services delivered with precision and care.

### `ChooseUs`
*anchors only* — We Have 20 Years · Of Experience In Auto Car · Trusted by thousands of car owners for reliable, professional automotive care. · About Us

### `Products`
*anchors only* — Our Products · Quality automotive parts and accessories for every need.

### `Testimonial`
The testimonial section SHALL allow switching between 3 testimonials via dot buttons.

### `Stats`
*anchors only* — About Our Statistics · Numbers that speak for our commitment to excellence.

### `LatestNews`
*anchors only* — Latest News · Stay updated with automotive tips and industry insights. · Continue Reading

### `Footer`
The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/veloce/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/veloce/public/CNAME` = `veloce.free.componentdock.com`
  and the package `homepage` = `https://veloce.free.componentdock.com`.
