# Scholar — Design Notes

Reference: **Onedu** — `https://colorlib.com/wp/template/onedu/`  
Live preview: `https://preview.colorlib.com/theme/onedu/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/onedu-free-template.jpg  
Shipped: https://scholar.free.componentdock.com

Scholar is an online courses template. It recreates the ColorLib **Onedu** design (https://colorlib.com/wp/template/onedu/, preview: https://preview.colorlib.com/theme/onedu/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@300;400;500;600;700;800**

## Design tokens (`apps/scholar/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0edf8` | primary 50 |
| `--color-primary-100` | `#d9d2ee` | primary 100 |
| `--color-primary-200` | `#b3a5dd` | primary 200 |
| `--color-primary-300` | `#8d78cc` | primary 300 |
| `--color-primary-400` | `#6b5aab` | primary 400 |
| `--color-primary-500` | `#5a4e8c` | primary 500 |
| `--color-primary-600` | `#4a4074` | primary 600 |
| `--color-primary-700` | `#3a325c` | primary 700 |
| `--color-primary-800` | `#2a2444` | primary 800 |
| `--color-primary-900` | `#1a162c` | primary 900 |
| `--color-accent-300` | `#f08484` | accent 300 |
| `--color-accent-400` | `#ea5252` | accent 400 |
| `--color-accent-500` | `#d43c3c` | accent 500 |
| `--color-submit` | `#ff6f00` | submit |
| `--color-section-bg` | `#effdff` | section bg |
| `--color-heading` | `#3c3b37` | heading |
| `--color-body` | `#6a6a6a` | body |
| `--color-subtitle` | `#6b5a5a` | subtitle |
| `--color-footer-bg` | `#1a1a2e` | footer bg |
| `--color-ink` | `#1a1a1a` | ink |
| `--font-sans` | `'Jost', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Jost', ui-sans-serif, system-ui, sans-serif` | font display |

> The spec has no section-level requirements; the order below is read from `apps/scholar/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `PopularCourses` | — | no dedicated spec block |
| 4 | `AboutSplit` | — | no dedicated spec block |
| 5 | `StudentsViewing` | — | no dedicated spec block |
| 6 | `Testimonial` | — | no dedicated spec block |
| 7 | `Categories` | — | no dedicated spec block |
| 8 | `BecomeInstructor` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |
| 10 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Search courses · Main navigation · Shopping cart, 3 items

### `Hero`
*anchors only* — Search courses · Learn new skills online with top educators · Learn 100% online with world-class universities and industry experts. · Search

### `PopularCourses`
*anchors only* — The world&apos;s largest selection of courses · Choose from over 100,000 online video courses with new additions published every month

### `AboutSplit`
*anchors only* — The world&apos;s largest selection of online courses · Browse Courses

### `StudentsViewing`
*anchors only* — Students are viewing

### `Testimonial`
*anchors only* — Student says about us · Petey Cruiser · Student at Scholar

### `Categories`
*anchors only* — Explore top categories · View Courses

### `BecomeInstructor`
*anchors only* — Become an Instructor · Watch Video

### `Footer`
*anchors only* — Facebook · Twitter · Instagram · Email for newsletter

### `BackToTop`
*anchors only* — Back to top

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
- **Provenance ban.** No file under `apps/scholar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/scholar/public/CNAME` = `scholar.free.componentdock.com`
  and the package `homepage` = `https://scholar.free.componentdock.com`.
