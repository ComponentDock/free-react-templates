# Endpoint — Design Notes

Reference: **Apiforge** — `https://colorlib.com/wp/template/apiforge/`  
Live preview: `https://preview.colorlib.com/theme/apiforge/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/apiforge-template-1771944059634.jpg  
Shipped: https://endpoint.free.componentdock.com

Endpoint is a single-page API platform landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Apiforge" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Outfit**, **Outfit:wght@400;500;600;700;800**

## Design tokens (`apps/endpoint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff7ed` | primary 50 |
| `--color-primary-100` | `#ffedd5` | primary 100 |
| `--color-primary-200` | `#fed7aa` | primary 200 |
| `--color-primary-300` | `#fdba74` | primary 300 |
| `--color-primary-400` | `#fb923c` | primary 400 |
| `--color-primary-500` | `#f97316` | primary 500 |
| `--color-primary-600` | `#ea580c` | primary 600 |
| `--color-primary-700` | `#c2410c` | primary 700 |
| `--color-primary-800` | `#9a3412` | primary 800 |
| `--color-primary-900` | `#7c2d12` | primary 900 |
| `--color-paper` | `#f9fafb` | paper |
| `--color-ink` | `#111827` | ink |
| `--color-body` | `#6b7280` | body |
| `--color-muted` | `#9ca3af` | muted |
| `--color-night` | `#030712` | night |
| `--color-carbon` | `#111827` | carbon |
| `--color-slate` | `#1f2937` | slate |
| `--font-sans` | `'Outfit', ui-sans-serif, system-ui, sans-serif` | Original font: "Outfit" (Google Fonts <link> in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Stats` | Stats band | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `Contact` | Contact section | see fidelity note below |
| 7 | `Faq` | FAQ section | see fidelity note below |
| 8 | `Cta` | CTA band | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Endpoint", anchor links to the page's sections, a "Get API Key" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with an eyebrow line, a headline, a blurb, two CTA buttons, a stats row, and a terminal window.

### `Stats`
The system SHALL render a stats band repeating the hero metrics.

### `Features`
The system SHALL render a features section with a heading and six feature cards.

### `Testimonials`
The system SHALL render a testimonials section with a heading and a carousel of quotes with previous/next controls.

### `Contact`
The system SHALL render a contact section with a validated form and contact info cards.

### `Faq`
The system SHALL render an FAQ section with an accordion of questions.

### `Cta`
The system SHALL render a call-to-action band with a heading and two buttons.

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
- **Provenance ban.** No file under `apps/endpoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/endpoint/public/CNAME` = `endpoint.free.componentdock.com`
  and the package `homepage` = `https://endpoint.free.componentdock.com`.
