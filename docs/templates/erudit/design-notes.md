# Erudit — Design Notes

Reference: **Knowledge** — `https://colorlib.com/wp/template/knowledge/`  
Live preview: `https://preview.colorlib.com/theme/knowledge/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/knowledge-free-template.jpeg  
Shipped: https://erudit.free.componentdock.com

Erudit is a free React online learning and education template that recreates the ColorLib "Knowledge" design under a new, original name. It provides a complete landing page for an online learning platform with courses, instructors, events, testimonials, and newsletter subscription.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rubik:wght@300;400;500;700;900**

## Design tokens (`apps/erudit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sky-50` | `#eff6ff` | Erudit brand palette — measured from the reference design (primary #4586FF blue). |
| `--color-sky-100` | `#dbeafe` | sky 100 |
| `--color-sky-200` | `#bfdbfe` | sky 200 |
| `--color-sky-300` | `#93c5fd` | sky 300 |
| `--color-sky-400` | `#60a5fa` | sky 400 |
| `--color-sky-500` | `#4586ff` | sky 500 |
| `--color-sky-600` | `#2563eb` | sky 600 |
| `--color-sky-700` | `#1d4ed8` | sky 700 |
| `--color-gold-400` | `#f7af1d` | gold 400 |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `HeroSlider` | Hero Slider | see fidelity note below |
| 3 | `SearchBar` | Course Search | see fidelity note below |
| 4 | `Services` | Services Display | see fidelity note below |
| 5 | `PopularCourses` | Popular Courses | see fidelity note below |
| 6 | `About` | About Section | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Instructors` | Instructors | see fidelity note below |
| 9 | `OurCourses` | Course Grid | see fidelity note below |
| 10 | `EventsBlog` | Events and Blog | see fidelity note below |
| 11 | `Newsletter` | Newsletter | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — The ideal platform for your online learning center · Our Vision · Our Missions · Sign Up · Erudit · Get started

### `HeroSlider`
The template SHALL display a hero slider with 4 rotating slides.

### `SearchBar`
The template SHALL provide a search bar for filtering courses.

### `Services`
The template SHALL display 6 service categories with icons.

### `PopularCourses`
The template SHALL display popular courses in a horizontal layout.

### `About`
The template SHALL display an about section with animated counters.

### `Testimonials`
The template SHALL display student testimonials with quotes.

### `Instructors`
The template SHALL display instructor profiles.

### `OurCourses`
The template SHALL display courses in a 3-column grid.

### `EventsBlog`
The template SHALL display upcoming events and recent blog posts.

### `Newsletter`
The template SHALL provide a newsletter subscription form.

### `Footer`
The template SHALL display a footer with contact info and Component Dock link.

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
- **Provenance ban.** No file under `apps/erudit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/erudit/public/CNAME` = `erudit.free.componentdock.com`
  and the package `homepage` = `https://erudit.free.componentdock.com`.
