# Talentgate — Design Notes

Reference: **Jobportal** — `https://colorlib.com/wp/template/jobportal/`  
Live preview: `https://preview.colorlib.com/theme/jobportal/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jobportal-free-template.jpg  
Shipped: https://talentgate.free.componentdock.com

TalentGate is a single-page job portal landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Jobportal" free template (source: https://colorlib.com/wp/template/jobportal/), built under a DIFFERENT name ("TalentGate") with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Work Sans**, **Work Sans:wght@400;500;600;700**

## Design tokens (`apps/talentgate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-worksans` | `'Work Sans', sans-serif` | font worksans |
| `--font-nunitosans` | `'Nunito Sans', sans-serif` | font nunitosans |
| `--color-brand-blue` | `#157efb` | brand blue |
| `--color-brand-green` | `#5dd28e` | brand green |
| `--color-brand-cyan` | `#78d5ef` | brand cyan |
| `--color-dark-overlay` | `#3c312e` | dark overlay |
| `--color-footer` | `#222831` | footer |
| `--color-light-bg` | `#f8f9fa` | light bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `SearchTabs` | Job search tabs | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `JobListings` | Job listings | see fidelity note below |
| 6 | `StatsCounter` | Stats counter | see fidelity note below |
| 7 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 8 | `BlogGrid` | Blog grid | see fidelity note below |
| 9 | `Newsletter` | Newsletter section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed dark navigation bar with the site name "TalentGate", navigation links, and two CTA buttons.

### `Hero`
The system SHALL render a full-height hero section with a background image, overlay, headline text, and CTA button.

### `SearchTabs`
The system SHALL render a tabbed search form with "Find Job" and "Find Candidate" tabs.

### `Services`
The system SHALL render four service feature cards on a light background.

### `JobListings`
The system SHALL render job post cards with company info, location, and action buttons.

### `StatsCounter`
The system SHALL render four animated counter items on a parallax background.

### `Testimonials`
The system SHALL render an auto-rotating testimonial carousel.

### `BlogGrid`
The system SHALL render four blog post cards in a grid layout.

### `Newsletter`
The system SHALL render a newsletter subscribe section with a parallax background.

### `Footer`
The system SHALL render a dark footer with three columns and a Component Dock link.

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
- **Provenance ban.** No file under `apps/talentgate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/talentgate/public/CNAME` = `talentgate.free.componentdock.com`
  and the package `homepage` = `https://talentgate.free.componentdock.com`.
