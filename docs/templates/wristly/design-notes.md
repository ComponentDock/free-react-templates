# Wristly — Design Notes

Reference: **Watch** — `https://colorlib.com/wp/template/watch/`  
Live preview: `https://preview.colorlib.com/theme/watch/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/watch-free-template.jpg  
Shipped: https://wristly.free.componentdock.com

Wristly is a smartwatch product landing page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/wristly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#eef4ff` | Wristly brand palette — brand blue #235ee7, accent cyan #4ae7fa. |
| `--color-brand-100` | `#d9e5ff` | brand 100 |
| `--color-brand-200` | `#bcd2ff` | brand 200 |
| `--color-brand-300` | `#8eb5ff` | brand 300 |
| `--color-brand-400` | `#598eff` | brand 400 |
| `--color-brand-500` | `#235ee7` | brand 500 |
| `--color-brand-600` | `#1a4bc2` | brand 600 |
| `--color-brand-700` | `#163d9e` | brand 700 |
| `--color-brand-800` | `#163482` | brand 800 |
| `--color-brand-900` | `#182e6b` | brand 900 |
| `--color-cyan-accent` | `#4ae7fa` | cyan accent |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins — the original template's typeface (Google Fonts via index.html) |

> The spec has no section-level requirements; the order below is read from `apps/wristly/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Features` | — | no dedicated spec block |
| 5 | `Services` | — | no dedicated spec block |
| 6 | `Products` | — | no dedicated spec block |
| 7 | `Reviews` | — | no dedicated spec block |
| 8 | `Faq` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation · Wristly

### `Hero`
*anchors only* — Feel the Future · Shop Now

### `About`
*anchors only* — Brand new tech to blow your mind · We&#39;ve made a life that will change you · We are here to listen from you and deliver excellence. · Get Started

### `Features`
*anchors only* — Top Features · What makes our smartwatch stand out

### `Services`
*anchors only* — Some Features That Made Us Unique · Who are in extremely love with eco friendly system.

### `Products`
*anchors only* — Unique Features · Who are in extremely love with eco friendly system. · Pre Order

### `Reviews`
*anchors only* — Some Features That Made Us Unique · Who are in extremely love with eco friendly system.

### `Faq`
*anchors only* — Frequently Asked Questions · Who are in extremely love with eco friendly system.

### `Footer`
*anchors only* — Email for newsletter · About Us · Component Dock · Newsletter · Stay updated with our latest · Subscribe

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
- **Provenance ban.** No file under `apps/wristly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wristly/public/CNAME` = `wristly.free.componentdock.com`
  and the package `homepage` = `https://wristly.free.componentdock.com`.
