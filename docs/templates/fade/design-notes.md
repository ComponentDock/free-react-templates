# Fade — Design Notes

Reference: **Barberkraft** — `https://colorlib.com/wp/template/barberkraft/`  
Live preview: `https://preview.colorlib.com/theme/barberkraft/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/barberkraft-template.jpg  
Shipped: https://fade.free.componentdock.com

Fade is a single-page barbershop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Barberkraft" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Space Grotesk**, **Space Grotesk:wght@300;400;500;600;700**

## Design tokens (`apps/fade/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent-50` | `#fffbeb` | accent 50 |
| `--color-accent-100` | `#fef3c7` | accent 100 |
| `--color-accent-200` | `#fde68a` | accent 200 |
| `--color-accent-300` | `#fcd34d` | accent 300 |
| `--color-accent-400` | `#fbbf24` | accent 400 |
| `--color-accent-500` | `#f59e0b` | accent 500 |
| `--color-accent-600` | `#d97706` | accent 600 |
| `--color-accent-700` | `#b45309` | accent 700 |
| `--color-accent-800` | `#92400e` | accent 800 |
| `--color-accent-900` | `#78350f` | accent 900 |
| `--color-paper` | `#f9fafb` | paper |
| `--color-ink` | `#111827` | ink |
| `--color-body` | `#6b7280` | body |
| `--color-muted` | `#9ca3af` | muted |
| `--color-night` | `#030712` | night |
| `--color-carbon` | `#111827` | carbon |
| `--color-slate` | `#1f2937` | slate |
| `--font-sans` | `'Space Grotesk', ui-sans-serif, system-ui, sans-serif` | Original font: "Space Grotesk" (Google Fonts <link> in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Team` | Team section | see fidelity note below |
| 5 | `WhyUs` | Why Us section | see fidelity note below |
| 6 | `Results` | Results section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Cta` | CTA band | see fidelity note below |
| 9 | `Faq` | FAQ section | see fidelity note below |
| 10 | `Contact` | Contact section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Fade", anchor links to the page's sections, a "Book Now" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width dark hero with a headline, a blurb, and two call-to-action buttons.

### `Services`
The system SHALL render a services section with a heading, category filter buttons, and service cards grouped by category.

### `Team`
The system SHALL render a team section with a heading and at least three barber profile cards.

### `WhyUs`
The system SHALL render a "why choose us" section with a heading and four feature cards.

### `Results`
The system SHALL render a results section with a heading and at least two transformation cards.

### `Testimonials`
The system SHALL render a testimonials section with a heading and at least three quote cards.

### `Cta`
The system SHALL render a dark call-to-action band with a headline and two buttons.

### `Faq`
The system SHALL render an FAQ section with a heading and at least four expandable questions.

### `Contact`
The system SHALL render a contact section with a validated form and contact detail cards.

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
- **Provenance ban.** No file under `apps/fade/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fade/public/CNAME` = `fade.free.componentdock.com`
  and the package `homepage` = `https://fade.free.componentdock.com`.
