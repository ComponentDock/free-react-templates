# Academia — Design Notes

Reference: **Edumark** — `https://colorlib.com/wp/template/edumark/`  
Live preview: `https://preview.colorlib.com/theme/edumark/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/edumark-free-template.jpg  
Shipped: https://academia.free.componentdock.com

Academia is a single-page online-education/courses landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Edumark" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Crimson Text**, **Crimson Text:wght@400;600;700**, **Poppins**

## Design tokens (`apps/academia/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#04d2c8` | Teal — the primary brand color (#04D2C8). |
| `--color-peach` | `#fd8e5e` | Peach — the secondary accent (#FD8E5E): Sign Up button, stat circle. |
| `--color-sky` | `#5db2ff` | Sky — the light-blue stat circle (#5DB2FF). |
| `--color-sun` | `#fdae5c` | Orange — the header phone pill + footer link hover (#FDAE5C). |
| `--color-iris` | `#d465ef` | Iris — the speciality icon purple (#D465EF). |
| `--color-ink` | `#1f1f1f` | Ink — the near-black #1F1F1F heading color. |
| `--color-smoke` | `#919191` | Smoke — the #919191 body/muted text color. |
| `--color-ash` | `#bababa` | Ash — the #BABABA footer link color. |
| `--font-serif` | `'Crimson Text', Georgia, 'Times New Roman', serif` | Original fonts: Poppins for headings/UI/nav, Crimson Text for body. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `About` | About section with stat circles | see fidelity note below |
| 4 | `PopularCourses` | Popular Courses with tab filter | see fidelity note below |
| 5 | `Testimonials` | Testimonial | see fidelity note below |
| 6 | `Speciality` | Course Speciality | see fidelity note below |
| 7 | `Newsletter` | Newsletter subscription | see fidelity note below |
| 8 | `Blog` | Latest Blog | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main · Toggle menu · Academia · Log in

### `Hero`
The system SHALL render a full-viewport hero with a purple-gradient background, a flat education illustration, a three-line white headline, and a teal pill call-to-action button.

### `About`
The system SHALL render an about section with a heading, a paragraph, an "Enroll a Course" button, and three floating circular stat badges.

### `PopularCourses`
The system SHALL render a "Popular Courses" section with a category tab bar (All Courses, Photoshop, UI/UX, Web Design, Web dev, Wordpress, Adobe XD, Sketch App, Illustrator) and a grid of course cards showing a thumb image, category label, two-line title, star rating and a price row with a strikethrough offer and an active teal price.

### `Testimonials`
The system SHALL render a testimonial section over a background image with a black overlay, showing a quote, an author name, and an avatar.

### `Speciality`
The system SHALL render a "Our Course Speciality" section with four cards, each with a circular icon badge and a title and paragraph.

### `Newsletter`
The system SHALL render a teal newsletter section with a heading, a description, an email input and a peach "Sign Up" button; the form SHALL validate the email and confirm a successful subscription.

### `Blog`
The system SHALL render an "Our Latest Blog" section with three article cards, each with a thumb image, a date/category meta row, a title and a paragraph.

### `Footer`
The system SHALL render a dark footer with a brand column (logo, blurb, socials), three link/contact columns, and a bottom bar with copyright.

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
- **Provenance ban.** No file under `apps/academia/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/academia/public/CNAME` = `academia.free.componentdock.com`
  and the package `homepage` = `https://academia.free.componentdock.com`.
