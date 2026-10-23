# Stratos — Design Notes

Reference: **Cloudnest** — `https://colorlib.com/wp/template/cloudnest/`  
Live preview: `https://preview.colorlib.com/theme/cloudnest/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cloudnest-template-1771944017064.jpg  
Shipped: https://stratos.free.componentdock.com

Stratos is a single-page cloud platform landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400**

## Design tokens (`apps/stratos/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef2ff` | primary 50 |
| `--color-primary-100` | `#e0e7ff` | primary 100 |
| `--color-primary-200` | `#c7d2fe` | primary 200 |
| `--color-primary-300` | `#a5b4fc` | primary 300 |
| `--color-primary-400` | `#818cf8` | primary 400 |
| `--color-primary-500` | `#6366f1` | primary 500 |
| `--color-primary-600` | `#4f46e5` | primary 600 |
| `--color-primary-700` | `#4338ca` | primary 700 |
| `--color-primary-800` | `#3730a3` | primary 800 |
| `--color-primary-900` | `#312e81` | primary 900 |
| `--color-primary-950` | `#1e1b4b` | primary 950 |
| `--color-accent-400` | `#38bdf8` | accent 400 |
| `--color-paper` | `#f9fafb` | paper |
| `--color-ink` | `#111827` | ink |
| `--color-body` | `#6b7280` | body |
| `--color-muted` | `#9ca3af` | muted |
| `--color-night` | `#030712` | night |
| `--color-carbon` | `#111827` | carbon |
| `--color-slate` | `#1f2937` | slate |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "DM Sans" (Google Fonts <link> in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Stats` | Stats band | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `Faq` | FAQ section | see fidelity note below |
| 7 | `Cta` | CTA section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Stratos", anchor links to the page's sections, a "Get Started Free" CTA, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width dark hero with a badge, a headline, a blurb, two CTAs, a stats row, and a terminal mockup.

### `Stats`
The system SHALL render a stats band with four headline statistics.

### `Features`
The system SHALL render a features section with a heading and six feature cards.

### `Testimonials`
The system SHALL render a testimonials section with a heading and three quote cards.

### `Faq`
The system SHALL render an FAQ section with an accordion of five questions.

### `Cta`
The system SHALL render a gradient CTA section with a heading and two buttons.

### `Footer`
The system SHALL render a footer with a blurb, contact details, link columns, and a copyright line.

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
- **Provenance ban.** No file under `apps/stratos/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stratos/public/CNAME` = `stratos.free.componentdock.com`
  and the package `homepage` = `https://stratos.free.componentdock.com`.
