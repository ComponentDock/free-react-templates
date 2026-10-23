# Structura — Design Notes

Reference: **Archirio** — `https://colorlib.com/wp/template/archirio/`  
Live preview: `https://preview.colorlib.com/theme/archirio/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/archirio-free-template.jpg  
Shipped: https://structura.free.componentdock.com

Recreate the ColorLib Archirio architecture/interior design template as a single-page React application under the name "Structura". The template features a hero slider, about section with stats, specialization grid, project gallery with filters, services, team, testimonials, blog, and a footer with newsletter signup.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/structura/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-lime-accent` | `#cee002` | lime accent |
| `--color-charcoal` | `#333132` | charcoal |
| `--color-surface` | `#f1f1f1` | surface |
| `--color-footer-dark` | `#222222` | footer dark |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar with mobile toggle | see fidelity note below |
| 2 | `Hero` | Hero section with CTA | see fidelity note below |
| 3 | `About` | About section with stats | see fidelity note below |
| 4 | `Specialization` | Specialization grid with 6 items | see fidelity note below |
| 5 | `Projects` | Projects section with filter tabs | see fidelity note below |
| 6 | `Services` | Services section with 3 cards | see fidelity note below |
| 7 | `FunFacts` | Fun facts with stat counters | see fidelity note below |
| 8 | `Team` | Team section with 4 members | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Blog` | Blog section with 3 posts | see fidelity note below |
| 11 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the "Structura" logo and navigation links (Home, About, Projects, Services, Contact). On mobile, a hamburger toggle button SHALL control the mobile menu with proper aria-expanded state.

### `Hero`
The hero SHALL display "Discover Your Dream Home" heading with lime accent, supporting text about 50,000+ customers, and a "See Projects" button.

### `About`
The about section SHALL show "Welcome to Interior" heading, descriptive text, and two stats: 35+ Experience Years and 78+ Projects Completed.

### `Specialization`
The specialization section SHALL display 6 items in a grid: Architecture, Interior Design, Building Design, Art Design, Home Design, Hotel Design.

### `Projects`
The projects section SHALL display 6 project cards with filter tabs (View All, Residential, Corporate, Restaurant, Industrial). Clicking a filter SHALL show only matching projects.

### `Services`
The services section SHALL show 3 service cards (Residential Design, Corporate Design, Commercial Design) with images, descriptions, and Read More links.

### `FunFacts`
The fun facts section SHALL display 4 statistics: 16 Years, 75 Projects, 18 Members, 20 Awards on a parallax background.

### `Team`
The team section SHALL display 4 team members with photos, names, roles, and social media icons.

### `Testimonials`
The testimonials section SHALL show 3 testimonial quotes with author names and locations on a parallax background.

### `Blog`
The blog section SHALL display 3 blog post cards with images, dates, authors, titles, and excerpts.

### `Footer`
The footer SHALL include working hours, contact info, services links, newsletter form, social icons, and a link to componentdock.com.

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
- **Provenance ban.** No file under `apps/structura/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/structura/public/CNAME` = `structura.free.componentdock.com`
  and the package `homepage` = `https://structura.free.componentdock.com`.
