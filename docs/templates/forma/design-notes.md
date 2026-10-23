# Forma — Design Notes

Reference: **Atelier** — `https://colorlib.com/wp/template/atelier/`  
Live preview: `https://preview.colorlib.com/theme/atelier/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/atelier-template.jpg  
Shipped: https://forma.free.componentdock.com

Forma is a single-page design studio landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Atelier" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@400;500;600;700**, **Playfair Display**

## Design tokens (`apps/forma/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fbf6ec` | primary 50 |
| `--color-primary-100` | `#f5ead2` | primary 100 |
| `--color-primary-200` | `#ead3a5` | primary 200 |
| `--color-primary-300` | `#ddba74` | primary 300 |
| `--color-primary-400` | `#d4a854` | primary 400 |
| `--color-primary-500` | `#c49536` | primary 500 |
| `--color-primary-600` | `#a87a2a` | primary 600 |
| `--color-primary-700` | `#8c6124` | primary 700 |
| `--color-primary-800` | `#6f4c1f` | primary 800 |
| `--color-primary-900` | `#573a1a` | primary 900 |
| `--color-paper` | `#f9fafb` | paper |
| `--color-ink` | `#111827` | ink |
| `--color-body` | `#6b7280` | body |
| `--color-muted` | `#9ca3af` | muted |
| `--color-night` | `#030712` | night |
| `--color-carbon` | `#111827` | carbon |
| `--color-slate` | `#1f2937` | slate |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Playfair Display', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Portfolio` | Portfolio section | see fidelity note below |
| 5 | `Process` | Process section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Awards` | Awards section | see fidelity note below |
| 8 | `Faq` | FAQ section | see fidelity note below |
| 9 | `Contact` | Contact section | see fidelity note below |
| 10 | `Cta` | CTA band | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Forma", anchor links to the page's sections, a "Book Consultation" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with an eyebrow, a serif headline, a blurb, and two CTA buttons.

### `Services`
The system SHALL render a services section with a heading and six service cards.

### `Portfolio`
The system SHALL render a portfolio section with a gallery of six projects.

### `Process`
The system SHALL render a process section with a heading and four steps.

### `Testimonials`
The system SHALL render a testimonials section with a heading and a carousel of client quotes with previous/next controls.

### `Awards`
The system SHALL render an awards section with a heading and six award items.

### `Faq`
The system SHALL render an FAQ section with an accordion of questions.

### `Contact`
The system SHALL render a contact section with a validated form and contact info cards.

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
- **Provenance ban.** No file under `apps/forma/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/forma/public/CNAME` = `forma.free.componentdock.com`
  and the package `homepage` = `https://forma.free.componentdock.com`.
