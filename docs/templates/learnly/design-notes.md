# Learnly — Design Notes

Reference: **Academics** — `https://colorlib.com/wp/template/academics/`  
Live preview: `https://preview.colorlib.com/theme/academics/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/academia-free-template.jpg — the ROW's slug `academia`, not the spec's `academics`  
Shipped: https://learnly.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `academia` for this app while the spec records `academics`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Learnly is a single-page education/university landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Academics" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;700;900**

## Design tokens (`apps/learnly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#51be78` | brand |
| `--color-brand-dark` | `#3da563` | brand dark |
| `--color-paper` | `#f8f9fa` | Light section background |
| `--color-mist` | `#6c757d` | Muted text |
| `--color-ink` | `#1d1d1d` | Dark footer |
| `--color-primary-50` | `#f0faf4` | Primary scale — green |
| `--color-primary-100` | `#d4f1e0` | primary 100 |
| `--color-primary-200` | `#a8e3c0` | primary 200 |
| `--color-primary-300` | `#7cd5a0` | primary 300 |
| `--color-primary-400` | `#51be78` | primary 400 |
| `--color-primary-500` | `#3da563` | primary 500 |
| `--color-primary-600` | `#2d8a4e` | primary 600 |
| `--color-primary-700` | `#1e6f3a` | primary 700 |
| `--color-primary-800` | `#145428` | primary 800 |
| `--color-primary-900` | `#0a3a18` | primary 900 |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays contact info and login/register | see fidelity note below |
| 2 | `Navbar` | Navbar with navigation and social links | see fidelity note below |
| 3 | `Hero` | Hero carousel with two slides | see fidelity note below |
| 4 | `Features` | Features section with three cards | see fidelity note below |
| 5 | `Courses` | Courses section with six course cards | see fidelity note below |
| 6 | `About` | About section with background image | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Philosophy` | Philosophy section with three pillars | see fidelity note below |
| 9 | `News` | News section with blog posts and videos | see fidelity note below |
| 10 | `Newsletter` | Newsletter subscription form | see fidelity note below |
| 11 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL render a top bar with contact information (phone, email, question link) and login/register actions.

### `Navbar`
The template SHALL render a navigation bar with the brand name, desktop nav links, social icons, and a mobile hamburger menu.

### `Hero`
The template SHALL render a full-width hero carousel that cycles between two slides automatically and via indicator buttons.

### `Features`
The template SHALL render a "Why Learnly Works" section with three feature cards.

### `Courses`
The template SHALL render a "Popular Courses" section with six course cards showing thumbnails, prices, categories, ratings, and enrollment buttons.

### `About`
The template SHALL render an "About Our University" section with a parallax background image and descriptive text.

### `Testimonials`
The template SHALL render a testimonials section with four testimonial cards.

### `Philosophy`
The template SHALL render a philosophy section with three columns: Our Philosophy, Academics Principle, and Key of Success.

### `News`
The template SHALL render a news section with a featured post, three side posts, and a campus videos sidebar.

### `Newsletter`
The template SHALL render a newsletter section with an email input and submit button.

### `Footer`
The template SHALL render a footer with four columns, copyright text, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/learnly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/learnly/public/CNAME` = `learnly.free.componentdock.com`
  and the package `homepage` = `https://learnly.free.componentdock.com`.
