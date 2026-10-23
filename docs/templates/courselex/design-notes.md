# Courselex — Design Notes

Reference: **Educature** — `https://colorlib.com/wp/template/educature/`  
Live preview: `https://preview.colorlib.com/theme/educature/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/educature-free-template.jpeg  
Shipped: https://courselex.free.componentdock.com

Recreation of ColorLib **Educature** (https://colorlib.com/wp/template/educature/) — an education and online courses landing page. The template features a gradient hero with course search, about section, course categories, features grid, faculty members, testimonials, and a multi-column footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;500;600**, **Roboto**

## Design tokens (`apps/courselex/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-teal-grad-start` | `#39cfca` | teal grad start |
| `--color-teal-grad-end` | `#3279bb` | teal grad end |
| `--color-brand-dark` | `#222222` | brand dark |
| `--color-brand-body` | `#777777` | brand body |
| `--color-brand-light` | `#f9f9ff` | brand light |
| `--font-heading` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar navigation | see fidelity note below |
| 2 | `Hero` | Hero section with search | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Courses` | Course categories | see fidelity note below |
| 5 | `Features` | Features grid | see fidelity note below |
| 6 | `Faculty` | Faculty members | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed navigation bar with logo and links to Home, About, Courses, Pages, Blog, and Contact sections.

### `Hero`
The template SHALL display a full-screen hero section with a gradient background (#39cfca to #3279bb), a headline, subtitle, search form, and top course tag buttons.

### `About`
The template SHALL display an about section with an image, heading "Over 2500 Courses from 5 Platform", descriptive text, and an "Explore Courses" CTA button.

### `Courses`
The template SHALL display 14 course category links organized in two columns with book icons.

### `Features`
The template SHALL display 6 feature cards in a 3×2 grid with icons, titles, and descriptions.

### `Faculty`
The template SHALL display 4 faculty member cards with photos, names, designations, bios, and social media links.

### `Testimonials`
The template SHALL display a testimonials section with quote icons, author names, star ratings, and review text.

### `Footer`
The template SHALL display a multi-column footer with link groups, a newsletter form, and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/courselex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/courselex/public/CNAME` = `courselex.free.componentdock.com`
  and the package `homepage` = `https://courselex.free.componentdock.com`.
