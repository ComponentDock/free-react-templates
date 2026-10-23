# Orenda — Design Notes

Reference: **Onlineedu** — `https://colorlib.com/wp/template/onlineedu/`  
Live preview: `https://preview.colorlib.com/theme/onlineedu/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/onlineedu-free-template.jpeg  
Shipped: https://orenda.free.componentdock.com

Orenda is an online-education landing page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Onlineedu" template (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;500;600;700**, **Sen**

## Design tokens (`apps/orenda/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#2d3092` | brand |
| `--color-branddark` | `#1f2b7b` | branddark |
| `--color-sweep` | `#3e44ec` | sweep |
| `--color-title` | `#030431` | title |
| `--color-soft` | `#f9f9ff` | soft |
| `--color-lilac` | `#f0e9ff` | lilac |
| `--color-footer` | `#0b0b1d` | footer |
| `--color-cyan` | `#4cd3e3` | cyan |
| `--color-accent` | `#f05510` | accent |
| `--color-check` | `#1e9d78` | check |
| `--color-primary-50` | `#eef0fb` | primary 50 |
| `--color-primary-100` | `#daddf5` | primary 100 |
| `--color-primary-200` | `#b5b9ea` | primary 200 |
| `--color-primary-300` | `#8f94df` | primary 300 |
| `--color-primary-400` | `#5e63c9` | primary 400 |
| `--color-primary-500` | `#2d3092` | primary 500 |
| `--color-primary-600` | `#2d3092` | primary 600 |
| `--color-primary-700` | `#3e44ec` | primary 700 |
| `--color-primary-800` | `#1f2b7b` | primary 800 |
| `--color-primary-900` | `#0b0b1d` | primary 900 |
| `--font-sans` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Sen', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with utility bar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `Categories` | Categories section | see fidelity note below |
| 4 | `Stats` | Stats counters | see fidelity note below |
| 5 | `PopularCourses` | Popular courses section | see fidelity note below |
| 6 | `Faculty` | Faculty/team section | see fidelity note below |
| 7 | `AboutSection` | About section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `BlogSection` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a two-part header: a dark-indigo top utility bar with contact info (email + phone), Login/Register links, and social icons; below it a white main bar with the logo "Orenda" (with a graduation-cap icon), the nav links (Home, About, Courses, Instructors, Blog, Contact), and a search input. On mobile the nav SHALL collapse into a slide-out menu.

### `HeroSlider`
The system SHALL render a hero slider on a light-blue image background (min height ~840px) with two slides; each slide SHALL show a sub-heading ("Popular Online Courses"), a large white bold headline ("The New Way To Learn Properly in With Us!"), and a square indigo "Get Started" button; slide controls SHALL advance between slides.

### `Categories`
The system SHALL render a "Let's Browse All Categories" section with at least four category cards (Web Design, App Development, Video Editing, Digital Marketing, SEO Marketing), each with an icon, title, short copy, and a "Read More" link; on hover the card SHALL fill with the indigo brand color and its text SHALL turn white.

### `Stats`
The system SHALL render a light section with stat counters (e.g. "1050+" Topics, plus students, courses, instructors) whose values are emphasized in the brand color.

### `PopularCourses`
The system SHALL render a "Most Popular Course of This Week" section with three course cards (Graphic Design, Web Development, Digital Marketing), each with an image, a category tag, a rating ("52 Review"), a price ("Free"), and a "Find More Courses" square indigo button below the grid.

### `Faculty`
The system SHALL render a light-background "Our Best Teachers" section with four faculty cards, each with a photo, name, and role label (e.g. "Faculty"), and a "View All Faculty" button.

### `AboutSection`
The system SHALL render an "About Our Company" section with a heading ("Want to know more"), a paragraph, a checklist of three points, and a "More About Us" button.

### `Testimonials`
The system SHALL render a background-image testimonials strip with a carousel of at least two quotes; each quote SHALL show the quotation, the author name, and a role/attribution.

### `BlogSection`
The system SHALL render a "Latest News From Blog" section with two post cards, each with an image, a date badge ("24 Now"), a category, a post title, and a "Read more" link.

### `Footer`
The system SHALL render a very dark navy footer (`#0b0b1d`) with a "Subscribe Now" newsletter block (email input + square indigo subscribe button), social icons ("Let's Get Social"), and four link columns (About Us, Our Plans, Admissions, Support); the bottom bar SHALL carry the copyright line and a link to https://www.componentdock.com/ ("Component Dock").

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
- **Provenance ban.** No file under `apps/orenda/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/orenda/public/CNAME` = `orenda.free.componentdock.com`
  and the package `homepage` = `https://orenda.free.componentdock.com`.
