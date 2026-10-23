# Learnhub — Design Notes

Reference: **Etrain** — `https://colorlib.com/wp/template/etrain/`  
Live preview: `https://preview.colorlib.com/theme/etrain/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/etrain-free-template.jpg  
Shipped: https://learnhub.free.componentdock.com

Provide a free React template for online education platforms, featuring course listings, testimonials, stats, and a blog section. Recreates the ColorLib Etrain design with navy + coral-gold accent palette, Poppins/Roboto typography, and responsive mobile-first layout.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**, **Roboto**

## Design tokens (`apps/learnhub/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-navy-50` | `#f0f4f8` | Learnhub brand palette — navy + warm orange-gold gradient accent |
| `--color-navy-100` | `#d9e2ec` | navy 100 |
| `--color-navy-200` | `#bcccdc` | navy 200 |
| `--color-navy-300` | `#9fb3c8` | navy 300 |
| `--color-navy-400` | `#829ab1` | navy 400 |
| `--color-navy-500` | `#627d98` | navy 500 |
| `--color-navy-600` | `#486581` | navy 600 |
| `--color-navy-700` | `#334e68` | navy 700 |
| `--color-navy-800` | `#243b53` | navy 800 |
| `--color-navy-900` | `#0c2e60` | navy 900 |
| `--color-ember-50` | `#fff7ed` | ember 50 |
| `--color-ember-100` | `#ffedd5` | ember 100 |
| `--color-ember-200` | `#fed7aa` | ember 200 |
| `--color-ember-300` | `#fdba74` | ember 300 |
| `--color-ember-400` | `#fb923c` | ember 400 |
| `--color-ember-500` | `#f97316` | ember 500 |
| `--color-ember-600` | `#ea580c` | ember 600 |
| `--color-ember-700` | `#c2410c` | ember 700 |
| `--color-gold-400` | `#f9b700` | gold 400 |
| `--color-gold-500` | `#e6a600` | gold 500 |
| `--color-coral-500` | `#ff663b` | coral 500 |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and mobile menu | see fidelity note below |
| 2 | `Hero` | Hero section with CTAs | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Stats` | Stats section | see fidelity note below |
| 6 | `Courses` | Courses section | see fidelity note below |
| 7 | `Platform` | Platform section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky top navbar with brand logo, navigation links (Home, About, Courses, Blog, Contact), a Login CTA button, and a responsive hamburger menu for mobile.

### `Hero`
The template SHALL render a hero section with a gradient navy background, learner count badge, headline, description, and two call-to-action buttons.

### `Features`
The template SHALL render a "Why Learnhub?" section with three feature cards (Flexible Learning, Expert Instructors, Career Support).

### `About`
The template SHALL render a split-layout about section with an image and descriptive text with bullet points.

### `Stats`
The template SHALL render a gradient stats bar with four statistics.

### `Courses`
The template SHALL render a "Featured Courses" section with three course cards showing images, categories, prices, titles, descriptions, duration, enrollment counts, instructor info, and star ratings.

### `Platform`
The template SHALL render a split-layout platform section highlighting advanced learning features.

### `Testimonials`
The template SHALL render a testimonials section with three student success story cards.

### `Blog`
The template SHALL render a blog section with three blog post cards.

### `Footer`
The template SHALL render a footer with brand info, newsletter form, contact details, social links, and a "Component Dock" attribution linking to componentdock.com.

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
- **Provenance ban.** No file under `apps/learnhub/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/learnhub/public/CNAME` = `learnhub.free.componentdock.com`
  and the package `homepage` = `https://learnhub.free.componentdock.com`.
