# Bodyforge — Design Notes

Reference: **Fitzone** — `https://colorlib.com/wp/template/fitzone/`  
Live preview: `https://preview.colorlib.com/theme/fitzone/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitzone-free-template.jpg  
Shipped: https://bodyforge.free.componentdock.com

BodyForge is a single-page fitness center / gym website in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Fitzone" free template (source: https://colorlib.com/wp/template/fitzone/), built under a DIFFERENT name (BodyForge), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700**, **Rubik**

## Design tokens (`apps/bodyforge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f61b55` | brand |
| `--color-brand-dark` | `#d9144a` | brand dark |
| `--color-body-text` | `#777777` | body text |
| `--color-heading` | `#222222` | heading |
| `--color-surface` | `#f5f5f5` | surface |
| `--color-ink` | `#222222` | ink |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header/Navbar | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `FeaturedClasses` | Featured Classes | see fidelity note below |
| 5 | `Service` | Our Service | see fidelity note below |
| 6 | `Coaches` | Fitness Coaches | see fidelity note below |
| 7 | `Discount` | Discount/Newsletter | see fidelity note below |
| 8 | `BmiCalculator` | BMI Calculator | see fidelity note below |
| 9 | `Testimonials` | Client Testimonials | see fidelity note below |
| 10 | `Cta` | CTA Area | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky navigation bar with the site name "BodyForge", navigation links (Home, About Us, Schedule, Trainers, Blog, Contact), and a "Book Now" CTA button.

### `Hero`
The system SHALL render a full-width hero banner with a background image, large headline text "Feel Good" and "Breath", and a "Become A Member" CTA.

### `About`
The system SHALL render an about section with a heading, descriptive paragraphs, a "Learn More" button, and an image.

### `FeaturedClasses`
The system SHALL render a section with three class cards in a grid layout. Each card SHALL have an image with a hover overlay showing a "Details" button, and a white footer with title and description.

### `Service`
The system SHALL render a background-image section with three service items, each with an icon, title, and description.

### `Coaches`
The system SHALL render a section with four coach profile cards in a grid. Each card SHALL show a photo with social icon hover overlay, name, and specialty.

### `Discount`
The system SHALL render a background-image section with a "25% Discount" heading, an email input, and a "Subscribe" button.

### `BmiCalculator`
The system SHALL render an interactive BMI calculator with fields for age, weight, height, gender, and a calculated BMI output.

### `Testimonials`
The system SHALL render a section with testimonial cards showing client photos, quotes, names, and membership titles.

### `Cta`
The system SHALL render a background-image section with a "Your Gym" heading and a "Become A Member" button.

### `Footer`
The system SHALL render a footer with three widget columns (About Us, Contact Us, Newsletter), a copyright line, and social media icons.

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
- **Provenance ban.** No file under `apps/bodyforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bodyforge/public/CNAME` = `bodyforge.free.componentdock.com`
  and the package `homepage` = `https://bodyforge.free.componentdock.com`.
