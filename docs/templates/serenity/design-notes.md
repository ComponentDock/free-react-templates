# Serenity — Design Notes

Reference: **Energen** — `https://colorlib.com/wp/template/energen/`  
Live preview: `https://preview.colorlib.com/theme/energen/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/energen-free-template.jpg  
Shipped: https://serenity.free.componentdock.com

Serenity is a single-page spa & beauty center website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Energen" design (see TEMPLATES.md — Beauty & Spa category), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;500;600;700**, **Prata**

## Design tokens (`apps/serenity/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#d9bf77` | brand |
| `--color-ink` | `#212529` | ink |
| `--color-mist` | `#a6a6a6` | mist |
| `--color-fog` | `#f8f9fa` | fog |
| `--color-line` | `#e9ecef` | line |
| `--color-night` | `#212529` | night |
| `--color-primary-50` | `#fbf7ec` | primary 50 |
| `--color-primary-100` | `#f6eed7` | primary 100 |
| `--color-primary-200` | `#edddae` | primary 200 |
| `--color-primary-300` | `#e4cc85` | primary 300 |
| `--color-primary-400` | `#ddc47c` | primary 400 |
| `--color-primary-500` | `#d9bf77` | primary 500 |
| `--color-primary-600` | `#c6a95e` | primary 600 |
| `--color-primary-700` | `#b08f45` | primary 700 |
| `--color-primary-800` | `#8e7236` | primary 800 |
| `--color-primary-900` | `#6f5829` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Prata', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Welcome hero | see fidelity note below |
| 3 | `Intro` | Intro cards | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `Treatments` | Treatments | see fidelity note below |
| 6 | `Therapies` | Therapies | see fidelity note below |
| 7 | `Pricing` | Pricing tables | see fidelity note below |
| 8 | `Testimony` | Testimony band | see fidelity note below |
| 9 | `Counter` | Footer | see fidelity note below |
| 10 | `Blog` | Blog posts | see fidelity note below |
| 11 | `Gallery` | Gallery | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Serenity", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero section with a headline.

### `Intro`
The system SHALL render an intro section with a heading and three cards.

### `Services`
The system SHALL render a "Services" section with at least four icon cards.

### `Treatments`
The system SHALL render a "Treatments" section with at least four tiles.

### `Therapies`
The system SHALL render a therapies section with at least four cards.

### `Pricing`
The system SHALL render a "Pricing Treatments" section with at least three pricing cards.

### `Testimony`
The system SHALL render a "Successful Stories" testimony band.

### `Counter`
The system SHALL render a footer with the site name and link columns.

### `Blog`
The system SHALL render a "Recent Posts" section with at least three post cards.

### `Gallery`
The system SHALL render a gallery section with the heading "See the latest photos" and at least six photo tiles.

### `Footer`
The system SHALL render a footer with the site name and link columns.

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
- **Provenance ban.** No file under `apps/serenity/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/serenity/public/CNAME` = `serenity.free.componentdock.com`
  and the package `homepage` = `https://serenity.free.componentdock.com`.
