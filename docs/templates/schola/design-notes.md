# Schola — Design Notes

Reference: **Academix** — `https://colorlib.com/wp/template/academix/`  
Live preview: `https://preview.colorlib.com/theme/academix/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/academix-template-1770211029932.jpg  
Shipped: https://schola.free.componentdock.com

Schola is a single-page education/e-learning landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Academix" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@400;500;600;700**, **Space Grotesk**

## Design tokens (`apps/schola/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e6f7f4` | primary 50 |
| `--color-primary-100` | `#c8ede7` | primary 100 |
| `--color-primary-200` | `#97dccf` | primary 200 |
| `--color-primary-300` | `#5fc4b1` | primary 300 |
| `--color-primary-400` | `#2ba892` | primary 400 |
| `--color-primary-500` | `#008574` | primary 500 |
| `--color-primary-600` | `#006f61` | primary 600 |
| `--color-primary-700` | `#005a4f` | primary 700 |
| `--color-primary-800` | `#00463e` | primary 800 |
| `--color-primary-900` | `#003730` | primary 900 |
| `--color-accent-50` | `#fdf1eb` | accent 50 |
| `--color-accent-100` | `#fbe0d2` | accent 100 |
| `--color-accent-300` | `#f29762` | accent 300 |
| `--color-accent-400` | `#ee7b3d` | accent 400 |
| `--color-accent-500` | `#e65f2a` | accent 500 |
| `--color-accent-600` | `#c74e1f` | accent 600 |
| `--color-accent-700` | `#a23d18` | accent 700 |
| `--color-accent-900` | `#5c210c` | accent 900 |
| `--color-ink` | `#111827` | Ink — headings on light surfaces (gray-900). |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Space Grotesk', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Categories` | Categories section | see fidelity note below |
| 4 | `Courses` | Featured courses | see fidelity note below |
| 5 | `Features` | Features section | see fidelity note below |
| 6 | `Instructors` | Instructors section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `CtaBand` | CTA band | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with a logo, anchor links to the page's sections, a "Get Started" CTA, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a badge, a headline, a blurb, two CTA buttons, a course-card visual, and a stats strip.

### `Categories`
The system SHALL render a categories section with a heading and at least six category cards.

### `Courses`
The system SHALL render a featured-courses section with at least three course cards, each showing a title, category, instructor, rating, and price.

### `Features`
The system SHALL render a features section with a heading and at least six feature tiles.

### `Instructors`
The system SHALL render an instructors section with a heading and at least four instructor profile cards.

### `Testimonials`
The system SHALL render a testimonials section with a heading and at least three learner quotes.

### `Pricing`
The system SHALL render a pricing section with a billing-period toggle and three plans.

### `CtaBand`
The system SHALL render a call-to-action band with a headline and two CTA buttons.

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
- **Provenance ban.** No file under `apps/schola/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/schola/public/CNAME` = `schola.free.componentdock.com`
  and the package `homepage` = `https://schola.free.componentdock.com`.
