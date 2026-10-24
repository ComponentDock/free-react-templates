# Vetora — Design Notes

Reference: **Petvet** — `https://colorlib.com/wp/template/petvet/`  
Live preview: `https://preview.colorlib.com/theme/petvet/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/petvet-free-template.jpg  
Shipped: https://vetora.free.componentdock.com

Vetora is a multi-section pet-care/veterinary website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Petvet" design (see TEMPLATES.md), shipped under the new name Vetora with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700;900**

## Design tokens (`apps/vetora/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fd4c82` | brand |
| `--color-brand-strong` | `#e0356b` | Darker rose hover tone derived from the brand. |
| `--color-accent` | `#91c235` | Secondary accent green — highlights from the original CSS. |
| `--color-paper` | `#f8f9fa` | Light section background — #f8f9fa (bg-light) from the original CSS. |
| `--color-night` | `#1a1a2e` | Dark footer / night background — derived from the original dark footer. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Intro` | Intro services section | see fidelity note below |
| 4 | `Services` | Intro services section | see fidelity note below |
| 5 | `Groomers` | Groomers section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Pricing` | Pricing section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a navigation bar with the site name "Vetora", links to the main sections, a "Free Consultation" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero section with the headline "The Kind of Care Your Pets Deserve", an appointment CTA, and a phone number.

### `Intro`
The system SHALL render an intro services section with three blocks: Veterinary Service, Pet Grooming, and Pet Setting.

### `Services`
The system SHALL render an intro services section with three blocks: Veterinary Service, Pet Grooming, and Pet Setting.

### `Groomers`
The system SHALL render an "Our Groomers" section with at least four team cards, each with a photo, name, and role.

### `Testimonials`
The system SHALL render a "happy Customers Says" section with at least two testimonial cards.

### `Pricing`
The system SHALL render an "Affordable Packages" section with three plans (Basic, Personal, Business), each with a price and a feature list.

### `Blog`
The system SHALL render a blog section titled "Latest Blog Updates" with at least three posts, each with a title and an excerpt.

### `Footer`
The system SHALL render a footer with the site name "Vetora", an about blurb, link columns (Services, Links, Have a Questions?), and social links.

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
- **Provenance ban.** No file under `apps/vetora/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vetora/public/CNAME` = `vetora.free.componentdock.com`
  and the package `homepage` = `https://vetora.free.componentdock.com`.
