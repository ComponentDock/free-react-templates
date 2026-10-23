# Pawpal — Design Notes

Reference: **Pawpal** — `https://colorlib.com/wp/template/pawpal/`  
Live preview: `https://preview.colorlib.com/theme/pawpal/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pawpal-template-1770211334322.jpg  
Shipped: https://pawpal.free.componentdock.com

Pawpal is a multi-section pet-grooming website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "PawPal" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lora**, **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/pawpal/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fdf2f8` | primary 50 |
| `--color-primary-100` | `#fce7f3` | primary 100 |
| `--color-primary-200` | `#fbcfe8` | primary 200 |
| `--color-primary-300` | `#f9a8d4` | primary 300 |
| `--color-primary-400` | `#f472b6` | primary 400 |
| `--color-primary-500` | `#ec4899` | primary 500 |
| `--color-primary-600` | `#db2777` | primary 600 |
| `--color-primary-700` | `#be185d` | primary 700 |
| `--color-primary-800` | `#9d174d` | primary 800 |
| `--color-primary-900` | `#831843` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Lora', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `WhyUs` | Why-us section | see fidelity note below |
| 5 | `Gallery` | Gallery section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Cta` | CTA section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a navigation bar with the site name "Pawpal", links to the main sections (Services, About, Gallery, Contact), a "Book Now" button, and a dark-mode toggle button. (The demo's Team/Contact entries are separate pages; the single-page recreation anchors Contact to the footer.)

### `Hero`
The system SHALL render a hero section with the headline "Where Every Pet Gets the Royal Treatment", supporting copy, CTA buttons, and stat counters.

### `Services`
The system SHALL render a services section titled "Our Services" with six cards: Full Grooming, Bath & Brush, Daycare, Overnight Boarding, Nail Trim, and Puppy Package.

### `WhyUs`
The system SHALL render a "A Place Where Pets Come First" section with four features: Certified Staff, Fear-Free Certified, Premium Products, and Climate Controlled.

### `Gallery`
The system SHALL render a "Happy Pets Gallery" section with a grid of at least six images.

### `Testimonials`
The system SHALL render a "What Pet Parents Say" section with at least two customer quote cards.

### `Cta`
The system SHALL render a CTA band with the heading "Ready to Pamper Your Pet?" and a call-to-action button.

### `Footer`
The system SHALL render a footer with the site name, an about blurb, link columns (Services, Company, Support), and contact details.

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
- **Provenance ban.** No file under `apps/pawpal/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pawpal/public/CNAME` = `pawpal.free.componentdock.com`
  and the package `homepage` = `https://pawpal.free.componentdock.com`.
