# Quad — Design Notes

Reference: **Edustage** — `https://colorlib.com/wp/template/edustage/`  
Live preview: `https://preview.colorlib.com/theme/edustage/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/edustage-free-template.jpg  
Shipped: https://quad.free.componentdock.com

Quad is a single-page education/courses landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Edustage" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:ital,wght@0,400;0,500;1,400**, **Rubik**

## Design tokens (`apps/quad/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#002347` | Navy — the primary brand color (#002347). |
| `--color-accent` | `#fdc632` | Gold — the secondary accent (#FDC632): CTA buttons, price badge. |
| `--color-accent-dark` | `#f8b600` | Dark gold — hover/darker variant (#F8B600). |
| `--color-accent-light` | `#f4e700` | Light gold — lighter accent variant (#F4E700). |
| `--color-card` | `#f9f9ff` | Card — the #F9F9FF feature/course card background. |
| `--color-tile` | `#334f6c` | Tile — the #334F6C countdown tile background. |
| `--color-muted` | `#7b838a` | Muted — the #7B838A body text color. |
| `--font-heading` | `'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Original fonts: Rubik for headings/nav/buttons, Roboto for body text. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with logo, nav, search bar and mobile menu | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `PopularCourses` | Popular Courses carousel | see fidelity note below |
| 5 | `Registration` | Registration section with countdown and form | see fidelity note below |
| 6 | `Trainers` | Expert Trainers | see fidelity note below |
| 7 | `Events` | Upcoming Events | see fidelity note below |
| 8 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a header over the hero with a wordmark logo, a centered six-link navigation menu, a search icon that toggles a search input bar, and a hamburger menu on narrow viewports.

### `Hero`
The system SHALL render a full-height hero with a photo background, an uppercase sub-headline, an uppercase headline, and two buttons (navy "learn more" + gold "see course").

### `Features`
The system SHALL render an "Awesome Feature" section with three cards, each with an icon, a title and a description, on a light `#f9f9ff` background.

### `PopularCourses`
The system SHALL render an "Our Popular Courses" section with a carousel of course cards, each with a thumb image, a circular gold price badge, a category tag, a title, a paragraph, an author and student/like counts.

### `Registration`
The system SHALL render a navy registration section with a "Register Now" heading, a four-tile countdown clock (days/hours/mins/secs), and a "Courses for Free" registration form with name, phone and email inputs and a gold Submit button.

### `Trainers`
The system SHALL render an "Our Expert Trainers" section with four trainer cards, each with a portrait, a name, a designation, a blurb and four social icon links.

### `Events`
The system SHALL render an "Upcoming Events" section on a navy background with two event cards, each with a thumb image and an overlay detail panel showing a date, time, location, description and a square "View Details" button.

### `Testimonials`
The system SHALL render a "Client say about me" section with a carousel of testimonial items, each with an avatar, a name and a quote, on a white card with a soft shadow.

### `Footer`
The system SHALL render a navy footer with four link columns (Top Products, Quick Links, Features, Resources), a Newsletter column with an email form and subscribe button, and a bottom bar with the copyright line.

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
- **Provenance ban.** No file under `apps/quad/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/quad/public/CNAME` = `quad.free.componentdock.com`
  and the package `homepage` = `https://quad.free.componentdock.com`.
