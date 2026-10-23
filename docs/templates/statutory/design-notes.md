# Statutory — Design Notes

Reference: **Lawfirm** — `https://colorlib.com/wp/template/lawfirm/`  
Live preview: `https://preview.colorlib.com/theme/lawfirm/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-fullscreen-lawyer-website-template.jpg  
Shipped: https://statutory.free.componentdock.com

A Legal / Law Firm template with hero, intro, about, counter stats, practice areas and case studies sections. Recreation of the ColorLib **Lawfirm** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/statutory/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | Primary blue (#007bff) — buttons, links. |
| `--color-brand-dark` | `#0069d9` | brand dark |
| `--color-gold` | `#cbb88c` | Gold accent (#cbb88c) — border highlights, button primary override. |
| `--color-dark-1` | `#1d2227` | Dark palette for intro boxes (left-to-right darkening). |
| `--color-dark-2` | `#161a1e` | dark 2 |
| `--color-dark-3` | `#121518` | dark 3 |
| `--color-dark-4` | `#0e1013` | dark 4 |
| `--color-paper` | `#f5f4f0` | Paper — light section background (#f5f4f0). |
| `--color-primary-50` | `#e7f3ff` | primary 50 |
| `--color-primary-100` | `#cde5ff` | primary 100 |
| `--color-primary-200` | `#99cbff` | primary 200 |
| `--color-primary-300` | `#66b0ff` | primary 300 |
| `--color-primary-400` | `#3396ff` | primary 400 |
| `--color-primary-500` | `#007bff` | primary 500 |
| `--color-primary-600` | `#0069d9` | primary 600 |
| `--color-primary-700` | `#0052b3` | primary 700 |
| `--color-primary-800` | `#003d8c` | primary 800 |
| `--color-primary-900` | `#002766` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Font: Roboto (from the original). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `IntroStrip` | Intro strip | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `CounterStats` | Counter stats | see fidelity note below |
| 6 | `PracticeAreas` | Practice areas | see fidelity note below |
| 7 | `CaseStudies` | Case studies | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Appointment` | Appointment section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Statutory SHALL display a dark fixed navbar with brand name and navigation links.

### `Hero`
Statutory SHALL display a hero section with a dark overlay background image, headline, subtext, and two CTA buttons.

### `IntroStrip`
Statutory SHALL display four dark feature boxes in a row with icons and descriptions.

### `About`
Statutory SHALL display a split layout with an image on the left and feature list on the right.

### `CounterStats`
Statutory SHALL display four animated stat counters over a dark background image.

### `PracticeAreas`
Statutory SHALL display six practice area cards in a grid with icons.

### `CaseStudies`
Statutory SHALL display case study cards with background images, category tags, and titles.

### `Testimonials`
Statutory SHALL display client testimonial cards over a dark background image.

### `Appointment`
Statutory SHALL display a contact form with feature highlights and a submit button.

### `Footer`
Statutory SHALL display a dark footer with brand, link columns, contact info, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/statutory/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/statutory/public/CNAME` = `statutory.free.componentdock.com`
  and the package `homepage` = `https://statutory.free.componentdock.com`.
