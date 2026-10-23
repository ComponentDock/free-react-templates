# Digiview — Design Notes

Reference: **Digilab** — `https://colorlib.com/wp/template/digilab/`  
Live preview: `https://preview.colorlib.com/theme/digilab/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/digilab-free-template.jpg  
Shipped: https://digiview.free.componentdock.com

Recreation of the ColorLib **DigiLab** template (`https://colorlib.com/wp/template/digilab/`). Preview URL: `https://preview.colorlib.com/theme/digilab/` Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000**

## Design tokens (`apps/digiview/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#31de79` | brand |
| `--color-brand-light` | `#5de596` | brand light |
| `--color-brand-dark` | `#28b562` | brand dark |
| `--color-dark` | `#232931` | dark |
| `--color-darker` | `#000000` | darker |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Projects` | Projects section | see fidelity note below |
| 5 | `StatsCounter` | Stats counter | see fidelity note below |
| 6 | `About` | About section | see fidelity note below |
| 7 | `Process` | Process section | see fidelity note below |
| 8 | `Clients` | Clients section | see fidelity note below |
| 9 | `Faq` | FAQ section | see fidelity note below |
| 10 | `Testimonials` | Testimonials section | see fidelity note below |
| 11 | `Blog` | Blog section | see fidelity note below |
| 12 | `Contact` | Contact section | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark navbar with the site name "DigiView", section links (Home, Services, Projects, About, Testimony, Blog, Contact), and a hamburger toggle that opens a mobile menu on small screens.

### `Hero`
The system SHALL render a full-screen hero with a headline containing green-accent words, a descriptive paragraph, a green CTA button, and a large image on the right.

### `Services`
The system SHALL render 6 service cards on a light background, each with a circular icon, heading, and description.

### `Projects`
The system SHALL render project cards on a dark overlay background with zoom hover effect.

### `StatsCounter`
The system SHALL render animated counters on a dark background that count from 0 to their target values on scroll intersection.

### `About`
The system SHALL render a two-column about section with heading, descriptive text, a CTA button, and an image.

### `Process`
The system SHALL render numbered steps with icons, titles, and descriptions.

### `Clients`
The system SHALL render partner/client logo names on a light background.

### `Faq`
The system SHALL render an accordion Q&A section where clicking a question toggles its answer.

### `Testimonials`
The system SHALL render a testimonial slider on a dark background with navigation controls.

### `Blog`
The system SHALL render 3 blog cards with featured images, titles, and metadata.

### `Contact`
The system SHALL render a contact form with validation for name, email, subject, and message fields.

### `Footer`
The system SHALL render a dark footer with multi-column layout and a "Component Dock" attribution link.

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
- **Provenance ban.** No file under `apps/digiview/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/digiview/public/CNAME` = `digiview.free.componentdock.com`
  and the package `homepage` = `https://digiview.free.componentdock.com`.
