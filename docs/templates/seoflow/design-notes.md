# Seoflow — Design Notes

Reference: **Seogo** — `https://colorlib.com/wp/template/seogo/`  
Live preview: `https://preview.colorlib.com/theme/seogo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/seogo-free-template.jpg  
Shipped: https://seoflow.free.componentdock.com

SeoFlow is a single-page SEO agency landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Seogo" free template (source: https://colorlib.com/wp/template/seogo/), built under a DIFFERENT name (**SeoFlow**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/seoflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-brand-pink` | `#ff008c` | brand pink |
| `--color-brand-orange` | `#ff5e13` | brand orange |
| `--color-brand-teal` | `#4cd3e3` | brand teal |
| `--color-brand-navy` | `#001d38` | brand navy |
| `--color-brand-light` | `#fafafa` | brand light |
| `--color-brand-purple` | `#f9f9ff` | brand purple |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `CaseStudies` | Case Studies section | see fidelity note below |
| 6 | `FAQ` | FAQ section | see fidelity note below |
| 7 | `Features` | Features section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky top navigation bar with logo, nav links, and phone CTA.

### `Hero`
The system SHALL render a hero section with headline and call-to-action.

### `Services`
The system SHALL render a 3-column grid of service cards.

### `About`
The system SHALL render an about section with image and company description.

### `CaseStudies`
The system SHALL render a carousel of case study cards on a dark background.

### `FAQ`
The system SHALL render an accordion-style FAQ with expandable questions.

### `Features`
The system SHALL render a 3-column grid of 6 feature cards.

### `Testimonials`
The system SHALL render a carousel of testimonial cards.

### `Footer`
The system SHALL render a footer with CTA banner, columns, newsletter form, and copyright.

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
- **Provenance ban.** No file under `apps/seoflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seoflow/public/CNAME` = `seoflow.free.componentdock.com`
  and the package `homepage` = `https://seoflow.free.componentdock.com`.
