# Millwright — Design Notes

Reference: **Industries** — `https://colorlib.com/wp/template/industries/`  
Live preview: `https://preview.colorlib.com/theme/industries/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/industries-free-template.jpg  
Shipped: https://millwright.free.componentdock.com

Millwright is a single-page industrial engineering-company website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Industries" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;600;900**, **Oxygen**

## Design tokens (`apps/millwright/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-100` | `#ffe8de` | primary 100 |
| `--color-primary-200` | `#ffd1bd` | primary 200 |
| `--color-primary-300` | `#ffb394` | primary 300 |
| `--color-primary-400` | `#ff9463` | primary 400 |
| `--color-primary-500` | `#ffb394` | primary 500 |
| `--color-primary-600` | `#fd5f00` | primary 600 |
| `--color-primary-700` | `#ff7e31` | primary 700 |
| `--color-primary-800` | `#ca4c00` | primary 800 |
| `--color-primary-900` | `#b14200` | primary 900 |
| `--color-surface` | `#f8f9fa` | surface |
| `--color-dark-700` | `#343a40` | dark 700 |
| `--font-sans` | `'Oxygen', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `Features` | Feature highlights | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `SplitBlock` | Split block | see fidelity note below |
| 6 | `ProjectsGrid` | Projects grid | see fidelity note below |
| 7 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 8 | `BlogSection` | Blog section | see fidelity note below |
| 9 | `CtaBand` | CTA band | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a navbar overlaid on the hero with the site wordmark, section links (including a Services dropdown), and a mobile toggle. It SHALL NOT include a search form.

### `HeroSlider`
The system SHALL render a full-height hero slider with at least two slides, each with a white circular play button, an uppercase white headline, and subtext, plus slider navigation.

### `Features`
The system SHALL render a light-background section with three centered feature items (orange icon + title + blurb) and no section heading.

### `Services`
The system SHALL render a section with the heading "We Are Reliable Engineering In House" and four service items (orange icon + title + blurb) arranged in two columns beside a tall feature image.

### `SplitBlock`
The system SHALL render one image/text split section ("Create, Enhance and Sustain") with a heading, two paragraphs, a Read More link, and an image on the opposite side.

### `ProjectsGrid`
The system SHALL render a Projects section with a heading, lead paragraph, and a grid of six project tiles (image + title overlay on hover).

### `Testimonials`
The system SHALL render a light-background testimonial section with a heading and a carousel of white quote cards (avatar, name, role, quote).

### `BlogSection`
The system SHALL render a Blog Posts section with a heading, lead paragraph, and four blog entries (image, date meta, title, excerpt, Read More link).

### `CtaBand`
The system SHALL render a solid orange call-to-action band with white headline and subtext on the left and a white-outline download button on the right.

### `Footer`
The system SHALL render a light footer with About (brand + social icons), Contact Info, and Quick Links columns plus a copyright bar.

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
- **Provenance ban.** No file under `apps/millwright/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/millwright/public/CNAME` = `millwright.free.componentdock.com`
  and the package `homepage` = `https://millwright.free.componentdock.com`.
