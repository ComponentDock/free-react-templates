# Brightpath — Design Notes

Reference: **Edusmart** — `https://colorlib.com/wp/template/edusmart/`  
Live preview: `https://preview.colorlib.com/theme/edusmart/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/edusmart-free-template-1.jpg  
Shipped: https://brightpath.free.componentdock.com

Recreation of ColorLib Edusmart as a React 19 + Vite + Tailwind 4 + TypeScript template. A free, production-ready online education landing page with hero search, feature highlights, department grid, course catalog, testimonials, countdown registration, events, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Crimson Text**, **Crimson Text:ital,wght@0,400;0,600;1,400**, **Montserrat**

## Design tokens (`apps/brightpath/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00aee0` | brand |
| `--color-brand-light` | `#00c9f7` | brand light |
| `--color-brand-dark` | `#0090b8` | brand dark |
| `--color-accent-pink` | `#e94086` | accent pink |
| `--color-accent-orange` | `#e5925a` | accent orange |
| `--color-accent-purple` | `#7349cc` | accent purple |
| `--color-accent-magenta` | `#e163e4` | accent magenta |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#777777` | body |
| `--color-overlay-dark` | `#374050` | overlay dark |
| `--color-gray-bg` | `#f9f9f9` | gray bg |
| `--font-crimson` | `'Crimson Text', serif` | font crimson |
| `--font-montserrat` | `'Montserrat', sans-serif` | font montserrat |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with top bar and navigation | see fidelity note below |
| 2 | `Hero` | Hero section with search form | see fidelity note below |
| 3 | `Features` | Features section with three items | see fidelity note below |
| 4 | `Departments` | Departments section with grid and CTA | see fidelity note below |
| 5 | `PopularCourses` | Popular Courses section with 4 cards | see fidelity note below |
| 6 | `Facts` | Facts section with dark overlay | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Registration` | Registration section with countdown and form | see fidelity note below |
| 9 | `Events` | Events section with 2 cards | see fidelity note below |
| 10 | `Footer` | Footer with columns, newsletter, and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a top bar with phone/email and a main navigation with logo, links (Home, About, Pages, Blog, Contact), and a search icon. On mobile, a hamburger toggle opens/closes the mobile menu.

### `Hero`
Users SHALL see a full-width gradient banner with the heading "We Rank the Best Courses on the Web", a description, and a course search form.

### `Features`
Users SHALL see three feature items (New Classes, Top Courses, Full E-Books) each with a gradient icon badge and description.

### `Departments`
Users SHALL see a 3-column staggered grid of 7 department icons (Languages, Business, Literature, Software, Design, Coaching, Development) alongside a description and "Explore Courses" CTA button.

### `PopularCourses`
Users SHALL see 4 course cards, each with an image, author badge, title, description, student/comment counts, and a price (with color variants).

### `Facts`
Users SHALL see a dark overlay section with 6 fact cards (Expert Mentors, 25000+ Courses, Student Membership, Lifetime Access, Source Files Included, Certified Programs), each with an icon and description.

### `Testimonials`
Users SHALL see testimonial cards with quote icon, author name, star rating, and text, alongside a thumbnail strip with hover overlay.

### `Registration`
Users SHALL see a gradient section with a countdown timer (Days/Hours/Mins/Secs) and a registration form (Name, Phone, Email, Submit).

### `Events`
Users SHALL see 2 event cards each with an image, date, title, and description.

### `Footer`
Users SHALL see a footer with 5 columns (Top Products, Quick Links, Features, Resources, Newsletter), a newsletter email form, social icons, and a "Component Dock" link.

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
- **Provenance ban.** No file under `apps/brightpath/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/brightpath/public/CNAME` = `brightpath.free.componentdock.com`
  and the package `homepage` = `https://brightpath.free.componentdock.com`.
