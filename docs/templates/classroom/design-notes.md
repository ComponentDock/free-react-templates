# Classroom — Design Notes

Reference: **Oneschool** — `https://colorlib.com/wp/template/oneschool/`  
Live preview: `https://preview.colorlib.com/theme/oneschool/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/oneschool-free-template.jpg  
Shipped: https://classroom.free.componentdock.com

Recreate the ColorLib "Oneschool" school/education landing page as a React 19 + Tailwind CSS 4 + TypeScript template under the name "Classroom". The template serves as a free, production-ready education website landing page with courses, programs, teachers, testimonials, and contact form sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Mulish**, **Mulish:wght@300;400;700;900**

## Design tokens (`apps/classroom/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-indigo-400` | `#8b83ea` | Classroom brand palette — measured from the reference design (primary #7971ea purple). |
| `--color-indigo-500` | `#7971ea` | indigo 500 |
| `--color-indigo-600` | `#6a62d0` | indigo 600 |
| `--color-indigo-700` | `#5b53b6` | indigo 700 |
| `--font-sans` | `'Mulish', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Courses` | Courses section | see fidelity note below |
| 4 | `Programs` | Programs section | see fidelity note below |
| 5 | `Teachers` | Teachers section | see fidelity note below |
| 6 | `Testimonial` | Testimonial section | see fidelity note below |
| 7 | `WhyChooseUs` | Why Choose Us section | see fidelity note below |
| 8 | `Contact` | Contact form | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navigation bar with the "Classroom" logo, navigation links (Home, Courses, Programs, Teachers), and a "Contact Us" CTA button.

### `Hero`
The template SHALL display a hero section with background image, headline "Learn From The Expert", description text, "Admission Now" CTA button, and a sign-up form.

### `Courses`
The template SHALL display a courses section with a carousel of 6 course cards showing price, lessons, title, description, student count, and comment count with prev/next navigation.

### `Programs`
The template SHALL display an "Our Programs" section with 3 alternating image+text rows, each with icon stats (graduates, universities).

### `Teachers`
The template SHALL display an "Our Teachers" section with 3 teacher cards showing circular photos, names, and roles.

### `Testimonial`
The template SHALL display a testimonial section with a dark overlay background image, person photo, name, and quote.

### `WhyChooseUs`
The template SHALL display a "Why Choose Us" section with a features list and image.

### `Contact`
The template SHALL display a "Message Us" contact form with first name, last name, subject, email, message fields, and a "Send Message" button.

### `Footer`
The template SHALL display a footer with "About Classroom" text, navigation links, subscribe form, and a copyright line linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/classroom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/classroom/public/CNAME` = `classroom.free.componentdock.com`
  and the package `homepage` = `https://classroom.free.componentdock.com`.
