# Campus — Design Notes

Reference: **Academy** — `https://colorlib.com/wp/template/academy/`  
Live preview: `https://preview.colorlib.com/theme/academy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/academy-free-template.jpg  
Shipped: https://campus.free.componentdock.com

Campus is a single-page online-university landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Academy" design (see TEMPLATES.md — listed under BOTH the Bootstrap (216) and Education (43) categories), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/campus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0f8f0` | primary 50 |
| `--color-primary-100` | `#dcf0dc` | primary 100 |
| `--color-primary-200` | `#b8e1b9` | primary 200 |
| `--color-primary-300` | `#8ccd90` | primary 300 |
| `--color-primary-400` | `#6fbf76` | primary 400 |
| `--color-primary-500` | `#61ba6d` | primary 500 |
| `--color-primary-600` | `#52a25e` | primary 600 |
| `--color-primary-700` | `#44884e` | primary 700 |
| `--color-primary-800` | `#386d41` | primary 800 |
| `--color-primary-900` | `#2e5735` | primary 900 |
| `--color-brand` | `#61ba6d` | brand |
| `--color-brand-2` | `#83c331` | brand 2 |
| `--color-accent` | `#69bc5f` | accent |
| `--color-menu` | `#f5f7fa` | menu |
| `--color-card` | `#eef3f6` | card |
| `--color-star` | `#fbb710` | star |
| `--color-star-empty` | `#e0e3e4` | star empty |
| `--color-muted` | `#606060` | muted |
| `--color-footer` | `#232323` | footer |
| `--color-footer-dark` | `#141414` | footer dark |
| `--color-heading` | `#242424` | heading |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Split header with top strip and green phone block | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `FeatureBand` | Green feature band | see fidelity note below |
| 4 | `CoursesGrid` | Courses grid | see fidelity note below |
| 5 | `Testimonials` | Testimonials with dark overlay | see fidelity note below |
| 6 | `PopularCourses` | Popular courses grid | see fidelity note below |
| 7 | `Partners` | Partners row | see fidelity note below |
| 8 | `CtaBand` | Call-to-action band | see fidelity note below |
| 9 | `Footer` | Dark footer with four widgets and bottom bar | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render the two-tier header: a 95px top strip (logo left, "Register / Login" right) above a light-gray 85px menu bar (uppercase nav links + green gradient phone block on the right) that overlaps the hero's top edge and becomes a fixed bar with shadow on scroll.

### `Hero`
The system SHALL render a full-width hero (850px tall) with two photo slides, centered white headline text, and a green "Read More" button.

### `FeatureBand`
The system SHALL render the green gradient feature band overlapping the hero's bottom edge, with three white-iconed features separated by white dividers.

### `CoursesGrid`
The system SHALL render a 3×2 grid of six course cards (no section heading), each with a circular green-gradient icon badge, a title and a blurb.

### `Testimonials`
The system SHALL render the testimonials section over a dark-overlay photo background with a white heading and four testimonial items in a 2×2 grid.

### `PopularCourses`
The system SHALL render the "Top Popular Courses" section: eyebrow + h3 heading and a 2×2 grid of four photo cards with meta, star ratings and a "See More" link.

### `Partners`
The system SHALL render a centered row of five partner logo links below the popular courses section.

### `CtaBand`
The system SHALL render a green gradient CTA band with a headline and a "See More" button.

### `Footer`
The system SHALL render the `#232323` footer with four widgets (About, Usefull Links, Gallery, Contact) and the `#141414` bottom bar.

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
- **Provenance ban.** No file under `apps/campus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/campus/public/CNAME` = `campus.free.componentdock.com`
  and the package `homepage` = `https://campus.free.componentdock.com`.
