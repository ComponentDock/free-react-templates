# Credence — Design Notes

Reference: **Cvportfolio** — `https://colorlib.com/wp/template/cvportfolio/`  
Live preview: `https://preview.colorlib.com/theme/cvportfolio/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cvportfolio-free-template.jpg  
Shipped: https://credence.free.componentdock.com

Credence is a personal CV/portfolio landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Cvportfolio" design, built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**

## Design tokens (`apps/credence/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f5a623` | brand |
| `--color-brand-dark` | `#e09500` | brand dark |
| `--color-brand-light` | `#ffe9c4` | brand light |
| `--color-ink` | `#333333` | Ink — dark gray headings/text (#333 from the original). |
| `--color-ink-light` | `#555555` | ink light |
| `--color-mist` | `#999999` | Mist — muted body text (#999 from the original). |
| `--color-paper` | `#ffffff` | Paper — white background. |
| `--color-primary-50` | `#fff8ed` | primary 50 |
| `--color-primary-100` | `#ffedc8` | primary 100 |
| `--color-primary-200` | `#ffd78a` | primary 200 |
| `--color-primary-300` | `#ffc04d` | primary 300 |
| `--color-primary-400` | `#f5a623` | primary 400 |
| `--color-primary-500` | `#e09500` | primary 500 |
| `--color-primary-600` | `#c27f00` | primary 600 |
| `--color-primary-700` | `#a06900` | primary 700 |
| `--color-primary-800` | `#7d5100` | primary 800 |
| `--color-primary-900` | `#5c3b00` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "Open Sans" (Google Fonts). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactBar` | Contact bar | see fidelity note below |
| 2 | `Hero` | Hero section with profile | see fidelity note below |
| 3 | `Portfolio` | Portfolio section with filter tabs | see fidelity note below |
| 4 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `ContactBar`
The system SHALL render a full-width orange contact bar at the top with three columns: address, phone/hours, and email/response time.

### `Hero`
The system SHALL render a hero section with a background image, a centered circular profile photo, the person's name, role, personal details, social links, and a "Download CV" button.

### `Portfolio`
The system SHALL render a portfolio section with category filter tabs and an image grid.

### `Footer`
The system SHALL render a footer that links to Component Dock.

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
- **Provenance ban.** No file under `apps/credence/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/credence/public/CNAME` = `credence.free.componentdock.com`
  and the package `homepage` = `https://credence.free.componentdock.com`.
