# Lectio — Design Notes

Reference: **Academica** — `https://colorlib.com/wp/template/academica/`  
Live preview: `https://preview.colorlib.com/theme/academica/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/academica-free-template.jpg  
Shipped: https://lectio.free.componentdock.com

Lectio is a single-page education/university template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@300;400;500;600;700**

## Design tokens (`apps/lectio/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#185dd0` | brand |
| `--color-brand-dark` | `#1249a8` | brand dark |
| `--color-brand-gradient` | `linear-gradient(to right, #185dd0, #7076fc)` | brand gradient |
| `--color-gold` | `#fbb710` | Gold / yellow accent (#fbb710) |
| `--color-gold-dark` | `#e5a50e` | gold dark |
| `--color-navy` | `#0e2040` | Dark navy header (#0e2040) |
| `--color-ink` | `#1d1d1d` | Dark footer (#1d1d1d) |
| `--color-paper` | `#f8fafc` | Light section background (#f8fafc) |
| `--color-mist` | `#838383` | Muted text (#838383) |
| `--color-primary-50` | `#eff4ff` | Primary scale — blue |
| `--color-primary-100` | `#dbe6fe` | primary 100 |
| `--color-primary-200` | `#bfd3fe` | primary 200 |
| `--color-primary-300` | `#93b4fd` | primary 300 |
| `--color-primary-400` | `#608efa` | primary 400 |
| `--color-primary-500` | `#185dd0` | primary 500 |
| `--color-primary-600` | `#1249a8` | primary 600 |
| `--color-primary-700` | `#0e3982` | primary 700 |
| `--color-primary-800` | `#0b2d69` | primary 800 |
| `--color-primary-900` | `#092454` | primary 900 |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `CourseSearch` | Course search form | see fidelity note below |
| 4 | `Services` | Training center services | see fidelity note below |
| 5 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 6 | `Courses` | Course cards carousel | see fidelity note below |
| 7 | `FunFacts` | Fun facts / stats | see fidelity note below |
| 8 | `Newsletter` | Newsletter subscription | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a dark navy navigation bar with a book icon brand logo, horizontal navigation links (Home, About Us, Courses, News, Contact), a Login/Register link, and a yellow accent bottom border.

### `Hero`
The template SHALL display a full-width hero with a background image, dark overlay, headline "Literature Course", description text, author info with avatar, and a blue "See Details" CTA button.

### `CourseSearch`
The template SHALL display a dark-background card overlapping the hero with a "Search your Course" heading and a horizontal form with 5 fields (Course, Level, Date, Teacher, Price) and a blue Search button.

### `Services`
The template SHALL display a 3x2 grid of service cards, each with a blue icon, title, and description.

### `Testimonials`
The template SHALL display a testimonials section with a blue gradient background, a quote, author avatar + name + role, and navigation arrows with dot indicators.

### `Courses`
The template SHALL display a courses section with a slider of course cards (image, title, teacher info, "Enroll Now" button), showing 3 cards at a time on desktop with navigation arrows.

### `FunFacts`
The template SHALL display a stats section with 4 large numbers: 2500 (Total Students), 14k (Graduates), 129 (Courses), 1490 (Events).

### `Newsletter`
The template SHALL display a newsletter section with a dark background, "Stay Updated" heading, email input, and Subscribe button.

### `Footer`
The template SHALL display a dark footer with 4 columns (Engineering, Business School, Art & Design, Higher Education), each with category links, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/lectio/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lectio/public/CNAME` = `lectio.free.componentdock.com`
  and the package `homepage` = `https://lectio.free.componentdock.com`.
