# Roadly — Design Notes

Reference: **Autoroad** — `https://colorlib.com/wp/template/autoroad/`  
Live preview: `https://preview.colorlib.com/theme/autoroad/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/autoraod-free-template.jpg  
Shipped: https://roadly.free.componentdock.com

Roadly is a single-page car rental landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Autoroad" website template design (https://colorlib.com/wp/template/autoroad/), built under a NEW name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700;800**

## Design tokens (`apps/roadly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fc983c` | brand |
| `--color-brand-dark` | `#e07f1f` | brand dark |
| `--color-accent` | `#f7b71d` | Accent — yellow #f7b71d secondary accent. |
| `--color-ink` | `#212529` | Ink — headings (#212529 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa from the original). |
| `--color-coal` | `#212529` | Coal — dark footer / navbar (#212529 from the original). |
| `--color-primary-50` | `#fff8ef` | primary 50 |
| `--color-primary-100` | `#ffeed9` | primary 100 |
| `--color-primary-200` | `#ffd9ab` | primary 200 |
| `--color-primary-300` | `#ffbf73` | primary 300 |
| `--color-primary-400` | `#ff9d3a` | primary 400 |
| `--color-primary-500` | `#fc983c` | primary 500 |
| `--color-primary-600` | `#e07f1f` | primary 600 |
| `--color-primary-700` | `#c2650e` | primary 700 |
| `--color-primary-800` | `#9b510f` | primary 800 |
| `--color-primary-900` | `#7d4312` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts via index.html). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `SearchBar` | Search strip | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Cars` | Cars section | see fidelity note below |
| 6 | `HowItWorks` | How it works section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `About` | — | no dedicated spec block |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Roadly", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width image hero with a headline, a play button, and a booking form.

### `SearchBar`
The system SHALL render a car filter strip with model, brand, year and price dropdowns and a search button.

### `Services`
The system SHALL render a services section with four service cards.

### `Cars`
The system SHALL render a car selection section with car cards.

### `HowItWorks`
The system SHALL render a how-it-works section with four steps.

### `Testimonials`
The system SHALL render a testimonials section with quotes.

### `About`
*anchors only* — About us · Choose A Perfect Car · Search Vehicle

### `Blog`
The system SHALL render a recent blog section with post cards.

### `Footer`
The system SHALL render a footer with link columns, contact details, and a copyright line.

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
- **Provenance ban.** No file under `apps/roadly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/roadly/public/CNAME` = `roadly.free.componentdock.com`
  and the package `homepage` = `https://roadly.free.componentdock.com`.
