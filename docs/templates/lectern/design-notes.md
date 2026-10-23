# Lectern — Design Notes

Reference: **Unica** — `https://colorlib.com/wp/template/unica/`  
Live preview: `https://preview.colorlib.com/theme/unica/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/unica-free-template.jpg  
Shipped: https://lectern.free.componentdock.com

Recreate the ColorLib "Unica" university template as a React 19 + Tailwind CSS 4 + TypeScript landing page under the name "Lectern". The template serves as a free, production-ready university/education website landing page with sections for services, courses, enrollment, gallery, blog, and newsletter.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rubik:wght@400;500;700**

## Design tokens (`apps/lectern/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f6783a` | brand |
| `--color-navy` | `#020031` | Dark navy used for counter and footer backgrounds. |
| `--color-ink` | `#111111` | Text tones. |
| `--color-body` | `#636363` | body |
| `--color-mist` | `#f8f9fa` | Light section backgrounds. |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | Rubik via Google Fonts <link> in index.html. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Template renders all 11 sections in correct order | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero displays university branding | see fidelity note below |
| 4 | `Counter` | Counter shows course countdown | see fidelity note below |
| 5 | `Services` | Services displays 6 service items | see fidelity note below |
| 6 | `Enrollment` | Enrollment shows 3 steps | see fidelity note below |
| 7 | `Courses` | Courses shows 5 courses with pricing | see fidelity note below |
| 8 | `Gallery` | Gallery shows 6 images | see fidelity note below |
| 9 | `Blog` | Blog shows 4 posts | see fidelity note below |
| 10 | `Newsletter` | Newsletter form handles email submission | see fidelity note below |
| 11 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The Lectern template SHALL render the following sections in order: Header, Navbar, Hero, Counter, Services, Enrollment, Courses, Gallery, Blog, Newsletter, Footer.

### `Navbar`
*anchors only* — Search · Shopping cart · Lectern

### `Hero`
The Hero section SHALL display a subtitle "Award Winning University", a headline about knowledge investment, a description about education, and a "Get Started" CTA button linking to courses.

### `Counter`
The Counter section SHALL display a "NEXT COURSE" heading with countdown values (20 Days, 08 Hrs, 40 Mins, 56 Secs) on a dark navy background.

### `Services`
The Services section SHALL render 6 service cards: Art Studio, Great Facility, Activity Hub, Fully Qualified, Flexible Schedule, Chemistry Lab.

### `Enrollment`
The Enrollment section SHALL display 3 enrollment steps: Contact, Consulting, Register, over a background image.

### `Courses`
The Courses section SHALL render 5 course cards, each with a title and monthly price.

### `Gallery`
The Gallery section SHALL display a 2x3 grid of campus images with hover overlay.

### `Blog`
The Blog section SHALL render 4 blog post cards with title, date, author, and excerpt.

### `Newsletter`
The Newsletter section SHALL provide an email input and Subscribe button. On submit, the email field clears.

### `Footer`
The Footer SHALL link to https://www.componentdock.com/ with branded text "Component Dock" in the copyright line.

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
- **Provenance ban.** No file under `apps/lectern/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lectern/public/CNAME` = `lectern.free.componentdock.com`
  and the package `homepage` = `https://lectern.free.componentdock.com`.
