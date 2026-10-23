# Clutch — Design Notes

Reference: **Hvac** — `https://colorlib.com/wp/template/hvac/`  
Live preview: `https://preview.colorlib.com/theme/hvac/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hvac-free-template.jpg  
Shipped: https://clutch.free.componentdock.com

Clutch is a single-page car-dealership landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Hvac" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@400;700;900**

## Design tokens (`apps/clutch/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#db2d2e` | brand |
| `--color-brand-dark` | `#c22426` | brand dark |
| `--color-ink` | `#353535` | Ink — headings (#353535 from the original). |
| `--color-mist` | `#727171` | Mist — muted body text (#727171 / #8d8d8d from the original). |
| `--color-mist-light` | `#8d8d8d` | mist light |
| `--color-paper` | `#f7f7f7` | Paper — light section backgrounds (#f7f7f7 from the original). |
| `--color-coal` | `#323232` | Coal — dark footer / overlays (#323232 from the original footer). |
| `--color-primary-50` | `#fdf0f0` | primary 50 |
| `--color-primary-100` | `#fbdede` | primary 100 |
| `--color-primary-200` | `#f7bcbd` | primary 200 |
| `--color-primary-300` | `#f09192` | primary 300 |
| `--color-primary-400` | `#e85f61` | primary 400 |
| `--color-primary-500` | `#e03c3e` | primary 500 |
| `--color-primary-600` | `#db2d2e` | primary 600 |
| `--color-primary-700` | `#b91c1d` | primary 700 |
| `--color-primary-800` | `#9a1b1c` | primary 800 |
| `--color-primary-900` | `#7f1c1d` | primary 900 |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | Original font: "Lato" (Google Fonts via index.html). |
| `--font-display` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Services` | Services | see fidelity note below |
| 4 | `Feature` | Feature section | see fidelity note below |
| 5 | `CarOffers` | Vehicle offers | see fidelity note below |
| 6 | `ChooseUs` | Choose us | see fidelity note below |
| 7 | `Blog` | Blog row | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Clutch", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a featured car heading, a price, and call-to-action buttons.

### `Services`
The system SHALL render a "What We Offers" section with four service cards.

### `Feature`
The system SHALL render a "We Are a Trusted Name In Auto" section with two paragraphs, action buttons, and a feature list.

### `CarOffers`
The system SHALL render a "Best Vehicle Offers" section with car cards, each showing a model name, a year, and a price.

### `ChooseUs`
The system SHALL render a "Why People Choose Us" section with a checkmark list and a video play button.

### `Blog`
The system SHALL render a "Latest News Updates" section with three post cards.

### `Footer`
The system SHALL render a footer with the site name, a short tagline, contact information, and social links.

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
- **Provenance ban.** No file under `apps/clutch/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/clutch/public/CNAME` = `clutch.free.componentdock.com`
  and the package `homepage` = `https://clutch.free.componentdock.com`.
