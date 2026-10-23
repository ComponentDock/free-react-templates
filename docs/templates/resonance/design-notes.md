# Resonance — Design Notes

Reference: **Echo** — `https://colorlib.com/wp/template/echo/`  
Live preview: `https://preview.colorlib.com/theme/echo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/echo-free-template.jpg  
Shipped: https://resonance.free.componentdock.com

Resonance is a single-page digital marketing & SEO agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Echo" website template (https://colorlib.com/wp/template/echo/), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800**

## Design tokens (`apps/resonance/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#081158` | brand |
| `--color-brand-dark` | `#070e4b` | brand dark |
| `--color-accent` | `#fbb244` | accent |
| `--color-ink` | `#1c2135` | ink |
| `--color-body` | `#7a7f99` | body |
| `--color-primary-50` | `#eef0fb` | primary 50 |
| `--color-primary-100` | `#d9def5` | primary 100 |
| `--color-primary-200` | `#b3bde8` | primary 200 |
| `--color-primary-300` | `#8593d6` | primary 300 |
| `--color-primary-400` | `#5666c1` | primary 400 |
| `--color-primary-500` | `#2f3d9e` | primary 500 |
| `--color-primary-600` | `#081158` | primary 600 |
| `--color-primary-700` | `#070e4b` | primary 700 |
| `--color-primary-800` | `#060d42` | primary 800 |
| `--color-primary-900` | `#060e46` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Resonance", section anchor links, and a "Download now" call-to-action pill.

### `Hero`
The system SHALL render a split hero with a heading, supporting copy, two call-to-action buttons, and a placeholder illustration.

### `Features`
The system SHALL render a centered features section with three cards.

### `About`
The system SHALL render a split about section with an image, a check-list, and a call-to-action button.

### `Services`
The system SHALL render a services section with six cards in a two-column grid.

### `Testimonials`
The system SHALL render a testimonials band on a light background with three quote cards.

### `Footer`
The system SHALL render a four-column footer with a branded Component Dock attribution.

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
- **Provenance ban.** No file under `apps/resonance/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/resonance/public/CNAME` = `resonance.free.componentdock.com`
  and the package `homepage` = `https://resonance.free.componentdock.com`.
