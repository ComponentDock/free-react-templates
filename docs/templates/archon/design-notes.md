# Archon — Design Notes

Reference: **Alpha** — `https://colorlib.com/wp/template/alpha/`  
Live preview: `https://preview.colorlib.com/theme/alpha/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/alpha-free-template.jpg  
Shipped: https://archon.free.componentdock.com

Archon is a single-page architecture/agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Alpha" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;600;700;800**

## Design tokens (`apps/archon/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff926b` | brand |
| `--color-brand-dark` | `#ffa585` | Lighter coral for hover states. |
| `--color-ink` | `#000000` | Near-black ink: headings, hero box border, CTA pill. |
| `--color-paper` | `#f5f5f5` | Light section band (mission / news / testimonials backgrounds). |
| `--color-mist` | `#878787` | Muted secondary text. |
| `--color-coal` | `#191919` | Footer charcoal. |
| `--color-line` | `#e6e6e6` | Borders / dividers. |
| `--color-primary-50` | `#fff5f1` | primary 50 |
| `--color-primary-100` | `#ffe9e1` | primary 100 |
| `--color-primary-200` | `#ffd3c2` | primary 200 |
| `--color-primary-300` | `#ffb99d` | primary 300 |
| `--color-primary-400` | `#ffa585` | primary 400 |
| `--color-primary-500` | `#ff926b` | primary 500 |
| `--color-primary-600` | `#f07f56` | primary 600 |
| `--color-primary-700` | `#d96843` | primary 700 |
| `--color-primary-800` | `#b54f30` | primary 800 |
| `--color-primary-900` | `#8f3a21` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Original font: "Montserrat" (Google Fonts). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Mission` | Mission section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `News` | News section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Archon", anchor links to the page's sections, a dropdown menu, a CTA button, a dark-mode toggle, and a mobile menu.

### `Hero`
The system SHALL render a full-width photo hero with an overlapping blockquote (quote + author), a bordered "Get Quote" box with a button, and a share row.

### `Mission`
The system SHALL render a mission section with two alternating blocks and three counters.

### `Services`
The system SHALL render a services section with an intro and four service cards.

### `News`
The system SHALL render a news section with a grey band, four dated entries, and a "Our Blog Posts" button.

### `Testimonials`
The system SHALL render a testimonials carousel with three people and previous/next controls.

### `Footer`
The system SHALL render a dark footer with an about widget, navigation columns, social icons, a subscribe form, recent posts, and a copyright line.

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
- **Provenance ban.** No file under `apps/archon/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/archon/public/CNAME` = `archon.free.componentdock.com`
  and the package `homepage` = `https://archon.free.componentdock.com`.
