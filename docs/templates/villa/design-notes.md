# Villa — Design Notes

Reference: **Layal** — `https://colorlib.com/wp/template/layal/`  
Live preview: `https://preview.colorlib.com/theme/layal/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/layal-free-interior-design-wwebsite-template.jpg  
Shipped: https://villa.free.componentdock.com

Villa is a single-page interior design / architecture landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Layal" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/villa/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#77d5f7` | brand |
| `--color-brand-dark` | `#3c50ca` | brand dark |
| `--color-ink` | `#222222` | Ink — headings (#222222 from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff from the original). |
| `--color-coal` | `#000000` | Coal — dark feature band (#000000 from the original). |
| `--color-primary-50` | `#f0faff` | primary 50 |
| `--color-primary-100` | `#dcf3fd` | primary 100 |
| `--color-primary-200` | `#bceafc` | primary 200 |
| `--color-primary-300` | `#8ddcf8` | primary 300 |
| `--color-primary-400` | `#77d5f7` | primary 400 |
| `--color-primary-500` | `#38b9ec` | primary 500 |
| `--color-primary-600` | `#1b9fd9` | primary 600 |
| `--color-primary-700` | `#1780b0` | primary 700 |
| `--color-primary-800` | `#19698f` | primary 800 |
| `--color-primary-900` | `#1a5776` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts via index.html). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Features` | Feature section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Projects` | Projects section | see fidelity note below |
| 6 | `Newsletter` | Newsletter section | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Villa", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
*anchors only* — Villa Interior Studio · Design with · Get Started

### `Features`
The system SHALL render a features section on a dark band with numbered feature steps.

### `Services`
The system SHALL render a services section with a heading and service cards.

### `Projects`
The system SHALL render a projects section with a heading and a project gallery on a dark photo band.

### `Newsletter`
The system SHALL render a newsletter band with an email input.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/villa/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/villa/public/CNAME` = `villa.free.componentdock.com`
  and the package `homepage` = `https://villa.free.componentdock.com`.
