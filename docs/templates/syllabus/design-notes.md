# Syllabus — Design Notes

Reference: **Course** — `https://colorlib.com/wp/template/course/`  
Live preview: `https://preview.colorlib.com/theme/course/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/course-free-template.jpg  
Shipped: https://syllabus.free.componentdock.com

Syllabus is a single-page education/courses landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Course" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/syllabus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffb606` | Brand palette — Education / Courses template |
| `--color-brand-dark` | `#e0a000` | brand dark |
| `--color-ink` | `#3a3a3a` | Dark text for headings |
| `--color-body` | `#a5a5a5` | Muted body text |
| `--color-surface` | `#ffffff` | White background |
| `--color-dark-bg` | `#3a3a3a` | Dark section background |
| `--color-primary-50` | `#fff9e6` | Primary scale — gold/amber |
| `--color-primary-100` | `#fff0bf` | primary 100 |
| `--color-primary-200` | `#ffe699` | primary 200 |
| `--color-primary-300` | `#ffd966` | primary 300 |
| `--color-primary-400` | `#ffb606` | primary 400 |
| `--color-primary-500` | `#e0a000` | primary 500 |
| `--color-primary-600` | `#c48d00` | primary 600 |
| `--color-primary-700` | `#996e00` | primary 700 |
| `--color-primary-800` | `#6d4f00` | primary 800 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Font families |
| `--font-heading` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo, nav links, and phone sidebar | see fidelity note below |
| 2 | `Hero` | Hero section with background image | see fidelity note below |
| 3 | `HeroBoxes` | HeroBoxes with three info cards | see fidelity note below |
| 4 | `PopularCourses` | PopularCourses section with three course cards | see fidelity note below |
| 5 | `Register` | Register section with promo and search form | see fidelity note below |
| 6 | `Services` | Services section with six service cards | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Events` | Events section with three event items | see fidelity note below |
| 9 | `Footer` | Footer with newsletter, columns, and copyright | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a navigation bar with the brand logo text "syllabus", desktop nav links (Home, About Us, Courses, Elements, News, Contact), and a phone number sidebar trigger.

### `Hero`
The template SHALL render a full-width hero section with a background image and a centered heading "Get your Education today!" where "Education" is highlighted in the brand accent color.

### `HeroBoxes`
The template SHALL render three info boxes below the hero: Online Courses (globe icon), Our Library (books icon), and Our Teachers (professor icon), each with a "view more" link.

### `PopularCourses`
The template SHALL render a "Popular Courses" section with three course cards containing an image, title, description, author info (avatar + name), and a price badge showing "$29".

### `Register`
The template SHALL render a split register section: left side has promo text "Register now and get a discount 50% discount until 1 January" with a CTA button, right side has a background image with a course search form (3 inputs - submit button).

### `Services`
The template SHALL render an "Our Services" section with six service cards arranged in 2 rows of 3: Online Courses, Indoor Courses, Amazing Library, Exceptional Professors, Top Programs, Graduate Diploma. Each card has an icon, title, and description.

### `Testimonials`
The template SHALL render a testimonials section with a parallax background image, section title "What our students say", and testimonial cards with quote text, author image, name, and title.

### `Events`
The template SHALL render an "Upcoming Events" section with three event items, each with a date block (day + month), event image, event name, location, and description.

### `Footer`
The template SHALL render a footer with a newsletter section (email input + subscribe button), four footer columns (logo + about, Menu links, Useful Links, Contact info), and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/syllabus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/syllabus/public/CNAME` = `syllabus.free.componentdock.com`
  and the package `homepage` = `https://syllabus.free.componentdock.com`.
