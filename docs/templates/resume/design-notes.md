# Resume — Design Notes

Reference: **Personalportfolio** — `https://colorlib.com/wp/template/personalportfolio/`  
Live preview: `https://preview.colorlib.com/theme/personalportfolio/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/personalportfolio-free-template.jpeg  
Shipped: https://resume.free.componentdock.com

Resume is a single-page personal portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Personalportfolio" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rubik:wght@300;400;500;700;900**, **Rufina**

## Design tokens (`apps/resume/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ec5b53` | brand |
| `--color-deep` | `#002d5b` | deep |
| `--color-ink` | `#000a2d` | ink |
| `--color-muted` | `#999999` | muted |
| `--color-soft` | `#f9f9ff` | soft |
| `--color-blush` | `#fff4f4` | blush |
| `--color-line` | `#e1ebf7` | line |
| `--color-night` | `#080827` | night |
| `--color-primary-50` | `#fef2f1` | primary 50 |
| `--color-primary-100` | `#fde4e2` | primary 100 |
| `--color-primary-200` | `#fbc9c5` | primary 200 |
| `--color-primary-300` | `#f7a39d` | primary 300 |
| `--color-primary-400` | `#f17a72` | primary 400 |
| `--color-primary-500` | `#ec5b53` | primary 500 |
| `--color-primary-600` | `#ec5b53` | primary 600 |
| `--color-primary-700` | `#d8453d` | primary 700 |
| `--color-primary-800` | `#b23831` | primary 800 |
| `--color-primary-900` | `#8f2e29` | primary 900 |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Rufina', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header navigation | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services cards | see fidelity note below |
| 5 | `Portfolio` | Portfolio mosaic | see fidelity note below |
| 6 | `CtaBand` | CTA band | see fidelity note below |
| 7 | `Testimonials` | Testimonial slider | see fidelity note below |
| 8 | `Contact` | Contact section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |
| 10 | `ScrollToTop` | Scroll-to-top button | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a sticky white header with a logo, a centered navigation menu with a Pages dropdown, and a red "Get Free Consultent" button on the right.

### `Hero`
The system SHALL render a full-height hero slider with two slides, each with a photo background, an eyebrow tagline, a large headline, a paragraph, and two buttons ("Learn More" filled red, "Hire Me" outlined).

### `About`
The system SHALL render a two-column about section: a heading with two paragraphs on the left, and a query blurb with a contact email link on the right.

### `Services`
The system SHALL render a services section with a heading and three centered cards, each with a circular icon, a title link, and a description.

### `Portfolio`
The system SHALL render a portfolio section with a heading, filter tabs (All, Branding, Logo, UI/UX, Web Design), and a tabbed mosaic grid of six images per category.

### `CtaBand`
The system SHALL render a full-width call-to-action band with a photo background, a large accent-colored heading, and a red button.

### `Testimonials`
The system SHALL render a testimonials section with a heading and a slider of three testimonial cards, each with a photo, a name, a role, and a quote.

### `Contact`
The system SHALL render a contact section with a photo background, a heading, a paragraph, a three-field contact form, and contact details.

### `Footer`
The system SHALL render a dark navy footer with a centered top block (logo, email, address) and a bottom row with a copyright line crediting Component Dock and "Stay Connected" social icons.

### `ScrollToTop`
The system SHALL show a fixed circular accent-colored scroll-to-top button that appears after the user scrolls down and returns to the top when activated.

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
- **Provenance ban.** No file under `apps/resume/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/resume/public/CNAME` = `resume.free.componentdock.com`
  and the package `homepage` = `https://resume.free.componentdock.com`.
