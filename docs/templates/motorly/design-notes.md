# Motorly — Design Notes

Reference: **Automotive** — `https://colorlib.com/wp/template/automotive/`  
Live preview: `https://preview.colorlib.com/theme/automotive/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/automotive-free-template.jpg  
Shipped: https://motorly.free.componentdock.com

Motorly is a single-page auto garage / car service landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Public Sans**, **Public Sans:wght@400;500;600;700;800**

## Design tokens (`apps/motorly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#5f67ff` | brand |
| `--color-brand-dark` | `#454dd6` | brand dark |
| `--color-ink` | `#353535` | Ink — headings (#353535 / #323232 from the original). |
| `--color-mist` | `#727171` | Mist — muted body text (#727171 from the original). |
| `--color-paper` | `#f7f7f7` | Paper — light section backgrounds (#f7f7f7 from the original). |
| `--color-coal` | `#000000` | Coal — dark top bar / footer (#000000 from the original). |
| `--color-primary-50` | `#eef0ff` | primary 50 |
| `--color-primary-100` | `#dfe2ff` | primary 100 |
| `--color-primary-200` | `#c4c9ff` | primary 200 |
| `--color-primary-300` | `#a0a8ff` | primary 300 |
| `--color-primary-400` | `#7d86ff` | primary 400 |
| `--color-primary-500` | `#5f67ff` | primary 500 |
| `--color-primary-600` | `#454dd6` | primary 600 |
| `--color-primary-700` | `#3a41b8` | primary 700 |
| `--color-primary-800` | `#31379a` | primary 800 |
| `--color-primary-900` | `#2a2f80` | primary 900 |
| `--font-sans` | `'Public Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "Public Sans" (Google Fonts via index.html). |
| `--font-display` | `'Public Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `ChooseUs` | — | no dedicated spec block |
| 5 | `Products` | Products section | see fidelity note below |
| 6 | `Stats` | Statistics section | see fidelity note below |
| 7 | `News` | News section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Motorly", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and a services button.

### `Services`
The system SHALL render a services section with four service cards.

### `ChooseUs`
*anchors only* — We Have 20 Years Of Experience In Auto Car · About Us

### `Products`
The system SHALL render a products section with product cards.

### `Stats`
The system SHALL render a statistics section with four counters.

### `News`
The system SHALL render a latest news section with blog post cards.

### `Footer`
The system SHALL render a footer with link columns and a copyright line.

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
- **Provenance ban.** No file under `apps/motorly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/motorly/public/CNAME` = `motorly.free.componentdock.com`
  and the package `homepage` = `https://motorly.free.componentdock.com`.
