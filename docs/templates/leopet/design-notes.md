# Leopet — Design Notes

Reference: **Leopet** — `https://colorlib.com/wp/template/leopet/`  
Live preview: `https://preview.colorlib.com/theme/leopet/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/leopet-free-template.jpg  
Shipped: https://leopet.free.componentdock.com

Leopet is a multi-section pet-care website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Leopet" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Quicksand**, **Quicksand:wght@400;500;600;700**

## Design tokens (`apps/leopet/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#53c9bb` | brand |
| `--color-brand-strong` | `#3fb3a4` | Darker teal hover tone derived from the brand. |
| `--color-accent` | `#ff5b5b` | Secondary accent red — hover/CTA highlights from the original CSS. |
| `--color-heading` | `#415094` | Headings purple — #415094 from the original stylesheet. |
| `--color-paper` | `#f9f9ff` | Light section background — #f9f9ff / #f0e9ff from the original CSS. |
| `--color-night` | `#2c3563` | Dark footer / night background — deep purple derived from #415094. |
| `--font-sans` | `'Quicksand', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Adoption` | Adoption/counters section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a navigation bar with the site name "Leopet", links to the main sections, a "Become a Volunteer" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero section with the eyebrow "Welcome to Leopet", the headline "Give your pet Best Care", and CTA buttons.

### `About`
The system SHALL render an about section titled "We care your pet As you care" with an image, descriptive copy, and action buttons.

### `Services`
The system SHALL render a services section titled "We Provide Best Services" with three cards: Pet Surgeries, Pet Adoption, and Pet Care.

### `Adoption`
The system SHALL render an adoption section titled "We need your help Adopt Us" with at least two stat counters.

### `Testimonials`
The system SHALL render a testimonials section with at least three customer quotes.

### `Footer`
The system SHALL render a footer with a "Subscribe Newsletter" signup, link columns (Menu, Contact, Address, Opening Hour), and social links.

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
- **Provenance ban.** No file under `apps/leopet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/leopet/public/CNAME` = `leopet.free.componentdock.com`
  and the package `homepage` = `https://leopet.free.componentdock.com`.
