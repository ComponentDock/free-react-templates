# Studium — Design Notes

Reference: **Studylab** — `https://colorlib.com/wp/template/studylab/`  
Live preview: `https://preview.colorlib.com/theme/studylab/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/studylab-free-template.jpg  
Shipped: https://studium.free.componentdock.com

Recreation of ColorLib **Studylab** as a React 19 + Vite + Tailwind 4 + TypeScript template. Studium is an online learning platform landing page featuring a hero with registration form, course categories, course cards, testimonials, features, blog posts, and a multi-column footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/studium/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-blue` | `#0062cc` | brand blue |
| `--color-brand-blue-light` | `#4986fc` | brand blue light |
| `--color-brand-teal` | `#24d2c8` | brand teal |
| `--color-brand-magenta` | `#ce4be8` | brand magenta |
| `--color-brand-orange` | `#fc9927` | brand orange |
| `--color-brand-dark` | `#1a1a1a` | brand dark |
| `--color-brand-dark-alt` | `#1d2124` | brand dark alt |
| `--color-brand-light` | `#f9faff` | brand light |
| `--color-brand-light-alt` | `#f7f7f7` | brand light alt |
| `--color-brand-text` | `#16181b` | brand text |
| `--color-brand-muted` | `#999999` | brand muted |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/studium/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Categories` | — | no dedicated spec block |
| 4 | `CourseCards` | — | no dedicated spec block |
| 5 | `Features` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `About` | — | no dedicated spec block |
| 8 | `Services` | — | no dedicated spec block |
| 9 | `Blog` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Studium

### `Hero`
*anchors only* — Welcome to Studium · We Are Online Platform For Make Learn · Our Course · Learn More · Register Now · Sign In

### `Categories`
*anchors only* — Start Learning Today · Browse Online Course Category · See All Courses

### `CourseCards`
*anchors only* — Pick Your Course · See All Courses

### `Features`
*anchors only* — Learn Anything You Want Today

### `Testimonials`
*anchors only* — What Are Students Says

### `About`
*anchors only* — We Are Studium An Online Learning Center · Courses · Students · Instructors

### `Services`
*anchors only* — Why Choose Studium

### `Blog`
*anchors only* — Recent Post · Read more

### `Footer`
*anchors only* — Have a Questions? · Subscribe to our newsletter for the latest updates. · Subscribe · Component Dock

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
- **Provenance ban.** No file under `apps/studium/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/studium/public/CNAME` = `studium.free.componentdock.com`
  and the package `homepage` = `https://studium.free.componentdock.com`.
